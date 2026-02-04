// =============================================
// HOOK useCart - React integration
// =============================================

import { useState, useEffect, useCallback } from 'react';
import { CartService, type CartTotals, type CartItem } from '../lib/cart';

interface UseCartReturn extends CartTotals {
  // Estado
  isLoading: boolean;
  error: string | null;
  
  // Acciones
  addItem: (productSlug: string, quantity?: number, customizationData?: Record<string, unknown>) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  
  // Utilidades
  formatPrice: (cents: number) => string;
  getProductImage: (product: CartItem['product']) => string;
  hasFreeShipping: () => boolean;
  amountForFreeShipping: () => number;
}

/**
 * Hook para gestionar el carrito de compras
 * Se suscribe automáticamente a los cambios del CartService
 */
export function useCart(): UseCartReturn {
  const [totals, setTotals] = useState<CartTotals>({
    items: [],
    itemCount: 0,
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Suscribirse a cambios del carrito
  useEffect(() => {
    const unsubscribe = CartService.subscribe(setTotals);
    return unsubscribe;
  }, []);

  // Limpiar error después de 5 segundos
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // Añadir item
  const addItem = useCallback(async (
    productSlug: string, 
    quantity: number = 1, 
    customizationData?: Record<string, unknown>
  ) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await CartService.addItem(productSlug, quantity, customizationData);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al añadir al carrito';
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Actualizar cantidad
  const updateQuantity = useCallback(async (itemId: string, quantity: number) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await CartService.updateQuantity(itemId, quantity);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al actualizar cantidad';
      setError(message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Eliminar item
  const removeItem = useCallback((itemId: string) => {
    setError(null);
    CartService.removeItem(itemId);
  }, []);

  // Vaciar carrito
  const clearCart = useCallback(() => {
    setError(null);
    CartService.clearCart();
  }, []);

  return {
    ...totals,
    isLoading,
    error,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    formatPrice: CartService.formatPrice.bind(CartService),
    getProductImage: CartService.getProductImage.bind(CartService),
    hasFreeShipping: CartService.hasFreeShipping.bind(CartService),
    amountForFreeShipping: CartService.amountForFreeShipping.bind(CartService)
  };
}

export default useCart;
