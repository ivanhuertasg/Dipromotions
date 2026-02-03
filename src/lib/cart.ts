// =============================================
// SERVICIO DE CARRITO
// =============================================

import { ProductService } from './supabase';

export interface CartItem {
  id: string;
  product_id: string;
  product: {
    id: string;
    name: string;
    slug: string;
    sku: string;
    base_price: number;
    images: Array<{
      image_url: string;
      is_primary: boolean;
    }>;
    min_quantity: number;
    quantity_step: number;
  };
  quantity: number;
  unit_price: number;
  customization_data?: any;
}

export interface CartTotals {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

// Local storage key
const CART_STORAGE_KEY = 'dipromotions_cart';

class CartServiceClass {
  private items: CartItem[] = [];
  private listeners: Array<(totals: CartTotals) => void> = [];

  constructor() {
    this.loadFromStorage();
  }

  // Load cart from localStorage
  private loadFromStorage() {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        this.items = JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading cart:', e);
      this.items = [];
    }
  }

  // Save cart to localStorage
  private saveToStorage() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
    } catch (e) {
      console.error('Error saving cart:', e);
    }
  }

  // Notify listeners
  private notifyListeners() {
    const totals = this.getTotals();
    this.listeners.forEach(listener => listener(totals));
    
    // Dispatch global event
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: totals }));
  }

  // Subscribe to cart changes
  subscribe(listener: (totals: CartTotals) => void) {
    this.listeners.push(listener);
    // Return current totals immediately
    listener(this.getTotals());
    
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  // Get all cart items with full product data
  getItems(): CartItem[] {
    return this.items;
  }

  // Get cart totals
  getTotals(): CartTotals {
    const itemCount = this.items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = this.items.reduce((sum, item) => sum + (item.unit_price * item.quantity), 0);
    const shipping = subtotal >= 50000 ? 0 : 500; // Free shipping over 500€
    const tax = Math.round(subtotal * 0.21); // 21% IVA
    const total = subtotal + shipping + tax;

    return {
      items: this.items,
      itemCount,
      subtotal,
      shipping,
      tax,
      total
    };
  }

  // Add item to cart
  async addItem(productId: string, quantity: number = 1, customizationData?: any) {
    // Get product data
    const product = await ProductService.getBySlug(productId);
    
    if (!product) {
      throw new Error('Producto no encontrado');
    }

    // Check minimum quantity
    if (quantity < product.min_quantity) {
      throw new Error(`Cantidad mínima: ${product.min_quantity} unidades`);
    }

    // Check stock
    if (product.stock_quantity < quantity) {
      throw new Error(`Stock insuficiente. Disponible: ${product.stock_quantity} unidades`);
    }

    // Calculate price based on quantity
    const unitPrice = ProductService.calculatePrice(product, quantity);

    // Check if item already exists
    const existingIndex = this.items.findIndex(
      item => item.product_id === product.id && 
      JSON.stringify(item.customization_data) === JSON.stringify(customizationData)
    );

    if (existingIndex >= 0) {
      // Update existing item
      const existingItem = this.items[existingIndex];
      const newQuantity = existingItem.quantity + quantity;
      
      // Recalculate price for new quantity
      const newUnitPrice = ProductService.calculatePrice(product, newQuantity);
      
      this.items[existingIndex] = {
        ...existingItem,
        quantity: newQuantity,
        unit_price: newUnitPrice
      };
    } else {
      // Add new item
      const newItem: CartItem = {
        id: `cart_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        product_id: product.id,
        product: {
          id: product.id,
          name: product.name,
          slug: product.slug,
          sku: product.sku,
          base_price: product.base_price,
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

  // Update item quantity
  async updateQuantity(itemId: string, quantity: number) {
    const itemIndex = this.items.findIndex(item => item.id === itemId);
    
    if (itemIndex < 0) {
      throw new Error('Item no encontrado en el carrito');
    }

    const item = this.items[itemIndex];
    
    // Check minimum quantity
    if (quantity < item.product.min_quantity) {
      throw new Error(`Cantidad mínima: ${item.product.min_quantity} unidades`);
    }

    // Get fresh product data for price calculation
    const product = await ProductService.getBySlug(item.product.slug);
    
    if (product) {
      const unitPrice = ProductService.calculatePrice(product, quantity);
      
      this.items[itemIndex] = {
        ...item,
        quantity,
        unit_price: unitPrice
      };
    }

    this.saveToStorage();
    this.notifyListeners();
    
    return this.getTotals();
  }

  // Remove item from cart
  removeItem(itemId: string) {
    this.items = this.items.filter(item => item.id !== itemId);
    this.saveToStorage();
    this.notifyListeners();
    
    return this.getTotals();
  }

  // Clear cart
  clearCart() {
    this.items = [];
    this.saveToStorage();
    this.notifyListeners();
    
    return this.getTotals();
  }

  // Format price for display
  formatPrice(cents: number): string {
    return (cents / 100).toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR'
    });
  }

  // Get primary image URL for a product
  getProductImage(product: CartItem['product']): string {
    const primaryImage = product.images?.find(img => img.is_primary);
    return primaryImage?.image_url || '/images/placeholder.jpg';
  }
}

// Export singleton instance
export const CartService = new CartServiceClass();

// =============================================
// HOOK PARA REACT
// =============================================
import { useState, useEffect } from 'react';

export function useCart() {
  const [totals, setTotals] = useState<CartTotals>({
    items: [],
    itemCount: 0,
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0
  });

  useEffect(() => {
    // Subscribe to cart changes
    const unsubscribe = CartService.subscribe(setTotals);
    
    // Cleanup on unmount
    return unsubscribe;
  }, []);

  return {
    ...totals,
    addItem: CartService.addItem.bind(CartService),
    updateQuantity: CartService.updateQuantity.bind(CartService),
    removeItem: CartService.removeItem.bind(CartService),
    clearCart: CartService.clearCart.bind(CartService),
    formatPrice: CartService.formatPrice.bind(CartService),
    getProductImage: CartService.getProductImage.bind(CartService)
  };
}
