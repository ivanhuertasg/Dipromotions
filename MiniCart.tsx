// =============================================
// MINI CARRITO - diPromotions
// =============================================
// Dropdown de carrito en el header con preview de productos

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, X, Plus, Minus, Trash2, Package, ArrowRight } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { FREE_SHIPPING_THRESHOLD } from '../lib/cart';

const MiniCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  
  const { 
    items, 
    itemCount, 
    subtotal,
    isLoading,
    formatPrice, 
    getProductImage,
    updateQuantity,
    removeItem,
    amountForFreeShipping
  } = useCart();

  const amountForFree = amountForFreeShipping();

  // =============================================
  // EFECTOS
  // =============================================
  
  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        dropdownRef.current && 
        !dropdownRef.current.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Cerrar con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Abrir automáticamente al añadir producto
  useEffect(() => {
    const handleCartUpdate = () => {
      setJustAdded(true);
      setIsOpen(true);
      
      // Cerrar después de 3 segundos
      const timer = setTimeout(() => {
        setJustAdded(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  // =============================================
  // HANDLERS
  // =============================================
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
    setJustAdded(false);
  };

  const handleQuantityChange = async (itemId: string, newQuantity: number, minQuantity: number) => {
    if (newQuantity < minQuantity) return;
    
    try {
      await updateQuantity(itemId, newQuantity);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const handleRemove = (itemId: string) => {
    removeItem(itemId);
  };

  // =============================================
  // RENDER
  // =============================================
  
  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        onClick={handleToggle}
        className={`
          p-2 rounded-full transition-all duration-200 relative
          ${isOpen 
            ? 'bg-[#e30614] text-white' 
            : 'hover:bg-gray-100 text-gray-700'
          }
          ${justAdded ? 'animate-bounce-once' : ''}
        `}
        aria-label={`Carrito: ${itemCount} productos`}
        aria-expanded={isOpen}
        aria-controls="mini-cart-dropdown"
      >
        <ShoppingCart className="w-5 h-5" />
        
        {/* Badge de cantidad */}
        {itemCount > 0 && (
          <span 
            className={`
              absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5
              bg-[#e30614] text-white text-xs font-bold 
              rounded-full flex items-center justify-center
              transition-transform duration-300
              ${justAdded ? 'animate-scale-bounce' : ''}
            `}
          >
            {itemCount > 99 ? '99+' : itemCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          id="mini-cart-dropdown"
          className="absolute right-0 top-full mt-3 w-[400px] max-w-[calc(100vw-32px)] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-100"
          style={{ animation: 'slideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#e30614] rounded-full flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Tu Carrito</h4>
                <span className="text-sm text-gray-500">
                  {itemCount} {itemCount === 1 ? 'producto' : 'productos'}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#e30614]"
              aria-label="Cerrar carrito"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="max-h-[350px] overflow-y-auto">
            {items.length === 0 ? (
              // Estado vacío
              <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Package className="w-10 h-10 text-gray-300" />
                </div>
                <h5 className="font-medium text-gray-900 mb-2">Tu carrito está vacío</h5>
                <p className="text-gray-500 text-sm mb-6">
                  ¡Explora nuestro catálogo y encuentra productos increíbles!
                </p>
                <Link
                  to="/catalogo"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-sm flex items-center gap-2"
                >
                  Ver Catálogo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              // Lista de productos
              <div className="p-3 space-y-2">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    {/* Imagen */}
                    <Link
                      to={`/producto/${item.product.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden"
                    >
                      <img
                        src={getProductImage(item.product)}
                        alt={item.product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </Link>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/producto/${item.product.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="block font-medium text-sm text-gray-900 hover:text-[#e30614] transition-colors truncate"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Ref: {item.product.sku}
                      </p>
                      
                      {/* Controles de cantidad */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => handleQuantityChange(
                            item.id, 
                            item.quantity - item.product.quantity_step,
                            item.product.min_quantity
                          )}
                          disabled={item.quantity <= item.product.min_quantity || isLoading}
                          className="w-7 h-7 flex items-center justify-center bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
                          aria-label="Reducir cantidad"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-10 text-center tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(
                            item.id, 
                            item.quantity + item.product.quantity_step,
                            item.product.min_quantity
                          )}
                          disabled={isLoading}
                          className="w-7 h-7 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Precio y eliminar */}
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                        aria-label={`Eliminar ${item.product.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <span className="font-semibold text-sm text-[#e30614]">
                        {formatPrice(item.unit_price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-100 p-4 space-y-4 bg-gray-50">
              {/* Barra de progreso para envío gratis */}
              {amountForFree > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      Te faltan <span className="font-semibold text-[#e30614]">{formatPrice(amountForFree)}</span> para envío gratis
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#e30614] to-[#ff4757] rounded-full transition-all duration-500"
                      style={{ 
                        width: `${Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)}%` 
                      }}
                    />
                  </div>
                </div>
              )}
              
              {amountForFree === 0 && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                  <Package className="w-4 h-4" />
                  <span className="text-sm font-medium">¡Envío gratis aplicado!</span>
                </div>
              )}

              {/* Subtotal */}
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-bold text-xl text-gray-900">{formatPrice(subtotal)}</span>
              </div>
              
              {/* Botones */}
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/carrito"
                  onClick={() => setIsOpen(false)}
                  className="btn-outline text-center text-sm py-2.5"
                >
                  Ver Carrito
                </Link>
                <Link
                  to="/checkout"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center text-sm py-2.5"
                >
                  Finalizar
                </Link>
              </div>
              
              {/* Info adicional */}
              <p className="text-xs text-gray-500 text-center">
                Envío gratuito en pedidos superiores a {formatPrice(FREE_SHIPPING_THRESHOLD)}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Estilos de animación */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes bounce-once {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes scale-bounce {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
        
        .animate-bounce-once {
          animation: bounce-once 0.3s ease-out;
        }
        
        .animate-scale-bounce {
          animation: scale-bounce 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MiniCart;
