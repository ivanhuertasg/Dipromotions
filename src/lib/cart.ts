// =============================================
// SERVICIO DE CARRITO - diPromotions
// =============================================
// Carrito persistente con localStorage
// Soporta precios escalonados B2B
// Patrón Observer para reactividad

import { ProductService, type Product } from './supabase';

// =============================================
// TIPOS
// =============================================
export interface CartItem {
  id: string;
  product_id: string;
  product: {
    id: string;
    name: string;
    slug: string;
    sku: string;
    base_price: number;
    sale_price?: number | null;
    images: Array<{
      image_url: string;
      is_primary: boolean;
    }>;
    min_quantity: number;
    quantity_step: number;
  };
  quantity: number;
  unit_price: number;
  customization_data?: Record<string, unknown>;
}

export interface CartTotals {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

// =============================================
// CONSTANTES
// =============================================
const CART_STORAGE_KEY = 'dipromotions_cart';
const FREE_SHIPPING_THRESHOLD = 50000; // 500€ en céntimos
const SHIPPING_COST = 995; // 9.95€
const TAX_RATE = 0.21; // 21% IVA

// =============================================
// CLASE CART SERVICE
// =============================================
class CartServiceClass {
  private items: CartItem[] = [];
  private listeners: Set<(totals: CartTotals) => void> = new Set();

  constructor() {
    this.loadFromStorage();
  }

  // =============================================
  // PERSISTENCIA
  // =============================================
  
  private loadFromStorage(): void {
    if (typeof window === 'undefined') return;
    
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Validar estructura básica
        if (Array.isArray(parsed)) {
          this.items = parsed.filter(item => 
            item.id && 
            item.product_id && 
            item.product && 
            typeof item.quantity === 'number'
          );
        }
      }
    } catch (error) {
      console.error('[Cart] Error loading from storage:', error);
      this.items = [];
    }
  }

  private saveToStorage(): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
    } catch (error) {
      console.error('[Cart] Error saving to storage:', error);
    }
  }

  // =============================================
  // OBSERVER PATTERN
  // =============================================
  
  /**
   * Suscribirse a cambios del carrito
   * @returns Función para cancelar suscripción
   */
  subscribe(listener: (totals: CartTotals) => void): () => void {
    this.listeners.add(listener);
    
    // Enviar estado actual inmediatamente
    listener(this.getTotals());
    
    // Devolver función para cancelar suscripción
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners(): void {
    const totals = this.getTotals();
    
    // Notificar a todos los listeners
    this.listeners.forEach(listener => {
      try {
        listener(totals);
      } catch (error) {
        console.error('[Cart] Error in listener:', error);
      }
    });
    
    // Emitir evento global para componentes no-React
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cartUpdated', { detail: totals }));
    }
  }

  // =============================================
  // LECTURA
  // =============================================
  
  /**
   * Obtiene todos los items del carrito
   */
  getItems(): CartItem[] {
    return [...this.items];
  }

  /**
   * Obtiene los totales del carrito
   */
  getTotals(): CartTotals {
    const itemCount = this.items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = this.items.reduce((sum, item) => sum + (item.unit_price * item.quantity), 0);
    const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : (itemCount > 0 ? SHIPPING_COST : 0);
    const tax = Math.round(subtotal * TAX_RATE);
    const total = subtotal + shipping + tax;

    return {
      items: [...this.items],
      itemCount,
      subtotal,
      shipping,
      tax,
      total
    };
  }

  /**
   * Comprueba si un producto está en el carrito
   */
  hasItem(productId: string): boolean {
    return this.items.some(item => item.product_id === productId);
  }

  /**
   * Obtiene la cantidad de un producto en el carrito
   */
  getItemQuantity(productId: string): number {
    const item = this.items.find(item => item.product_id === productId);
    return item?.quantity || 0;
  }

  // =============================================
  // ESCRITURA
  // =============================================
  
  /**
   * Añade un producto al carrito por slug
   * @param productSlug - Slug del producto
   * @param quantity - Cantidad a añadir
   * @param customizationData - Datos de personalización opcionales
   */
  async addItem(
    productSlug: string, 
    quantity: number = 1, 
    customizationData?: Record<string, unknown>
  ): Promise<CartTotals> {
    // Obtener datos del producto
    const product = await ProductService.getBySlug(productSlug);
    
    if (!product) {
      throw new Error('Producto no encontrado');
    }

    return this.addProduct(product, quantity, customizationData);
  }

  /**
   * Añade un producto directamente al carrito (para productos de demostración)
   * @param product - Producto completo
   * @param quantity - Cantidad a añadir
   * @param customizationData - Datos de personalización opcionales
   */
  addProduct(
    product: Product,
    quantity: number = 1,
    customizationData?: Record<string, unknown>
  ): CartTotals {
    // Validar cantidad mínima
    if (quantity < product.min_quantity) {
      throw new Error(`Cantidad mínima: ${product.min_quantity} unidades`);
    }

    // Validar stock
    if (product.stock_quantity < quantity) {
      throw new Error(`Stock insuficiente. Disponible: ${product.stock_quantity} unidades`);
    }

    // Calcular precio unitario según cantidad
    const unitPrice = ProductService.calculatePrice(product, quantity);

    // Buscar item existente (mismo producto y misma personalización)
    const customizationKey = JSON.stringify(customizationData || {});
    const existingIndex = this.items.findIndex(
      item => item.product_id === product.id && 
              JSON.stringify(item.customization_data || {}) === customizationKey
    );

    if (existingIndex >= 0) {
      // Actualizar item existente
      const existingItem = this.items[existingIndex];
      const newQuantity = existingItem.quantity + quantity;
      
      // Validar stock total
      if (product.stock_quantity < newQuantity) {
        throw new Error(`Stock insuficiente. Máximo disponible: ${product.stock_quantity} unidades`);
      }
      
      // Recalcular precio para la nueva cantidad
      const newUnitPrice = ProductService.calculatePrice(product, newQuantity);
      
      this.items[existingIndex] = {
        ...existingItem,
        quantity: newQuantity,
        unit_price: newUnitPrice
      };
    } else {
      // Crear nuevo item
      const newItem: CartItem = {
        id: `cart_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`,
        product_id: product.id,
        product: {
          id: product.id,
          name: product.name,
          slug: product.slug,
          sku: product.sku,
          base_price: product.base_price,
          sale_price: product.sale_price,
          images: product.images || [],
          min_quantity: product.min_quantity,
          quantity_step: product.quantity_step
        },
        quantity,
        unit_price: unitPrice,
        customization_data: customizationData
      };
      
      this.items.push(newItem);
    }

    this.saveToStorage();
    this.notifyListeners();
    
    return this.getTotals();
  }

  /**
   * Actualiza la cantidad de un item
   * @param itemId - ID del item en el carrito
   * @param quantity - Nueva cantidad
   */
  async updateQuantity(itemId: string, quantity: number): Promise<CartTotals> {
    const itemIndex = this.items.findIndex(item => item.id === itemId);
    
    if (itemIndex < 0) {
      throw new Error('Item no encontrado en el carrito');
    }

    const item = this.items[itemIndex];

    // Validar cantidad mínima
    if (quantity < item.product.min_quantity) {
      throw new Error(`Cantidad mínima: ${item.product.min_quantity} unidades`);
    }

    // Obtener datos actualizados del producto para el precio
    const product = await ProductService.getBySlug(item.product.slug);
    
    if (product) {
      // Validar stock
      if (product.stock_quantity < quantity) {
        throw new Error(`Stock insuficiente. Disponible: ${product.stock_quantity} unidades`);
      }
      
      const newUnitPrice = ProductService.calculatePrice(product, quantity);
      
      this.items[itemIndex] = {
        ...item,
        quantity,
        unit_price: newUnitPrice
      };
    } else {
      // Si no se puede obtener el producto, solo actualizar cantidad
      this.items[itemIndex] = {
        ...item,
        quantity
      };
    }

    this.saveToStorage();
    this.notifyListeners();
    
    return this.getTotals();
  }

  /**
   * Elimina un item del carrito
   * @param itemId - ID del item a eliminar
   */
  removeItem(itemId: string): CartTotals {
    const initialLength = this.items.length;
    this.items = this.items.filter(item => item.id !== itemId);
    
    if (this.items.length !== initialLength) {
      this.saveToStorage();
      this.notifyListeners();
    }
    
    return this.getTotals();
  }

  /**
   * Vacía el carrito completamente
   */
  clearCart(): CartTotals {
    this.items = [];
    this.saveToStorage();
    this.notifyListeners();
    
    return this.getTotals();
  }

  // =============================================
  // UTILIDADES
  // =============================================
  
  /**
   * Formatea un precio en céntimos a formato de moneda
   */
  formatPrice(cents: number): string {
    return (cents / 100).toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR'
    });
  }

  /**
   * Obtiene la URL de la imagen principal de un producto
   */
  getProductImage(product: CartItem['product']): string {
    const primaryImage = product.images?.find(img => img.is_primary);
    return primaryImage?.image_url || product.images?.[0]?.image_url || '/images/placeholder.jpg';
  }

  /**
   * Verifica si el carrito cumple los requisitos para envío gratis
   */
  hasFreeShipping(): boolean {
    const { subtotal } = this.getTotals();
    return subtotal >= FREE_SHIPPING_THRESHOLD;
  }

  /**
   * Calcula cuánto falta para envío gratis
   */
  amountForFreeShipping(): number {
    const { subtotal } = this.getTotals();
    return Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  }
}

// Exportar instancia singleton
export const CartService = new CartServiceClass();

// Exportar constantes para uso externo
export { FREE_SHIPPING_THRESHOLD, SHIPPING_COST, TAX_RATE };
