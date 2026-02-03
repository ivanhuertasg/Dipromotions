import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../lib/cart';

const MiniCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  
  const { 
    items, 
    itemCount, 
    subtotal, 
    formatPrice, 
    getProductImage,
    updateQuantity,
    removeItem 
  } = useCart();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleQuantityChange = async (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    try {
      await updateQuantity(itemId, newQuantity);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const handleRemove = (itemId: string) => {
    removeItem(itemId);
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 relative"
        aria-label="Ver carrito"
        aria-expanded={isOpen}
      >
        <ShoppingCart className="w-5 h-5 text-gray-700" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#e30614] text-white text-xs font-bold rounded-full flex items-center justify-center animate-scale-in">
            {itemCount > 99 ? '99+' : itemCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 top-full mt-3 w-[380px] max-w-[95vw] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          style={{ animation: 'slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <div>
              <h4 className="font-semibold text-gray-900">Tu Carrito</h4>
              <span className="text-sm text-gray-500">
                {itemCount} {itemCount === 1 ? 'producto' : 'productos'}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="max-h-[320px] overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 px-6 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 mb-4">Tu carrito está vacío</p>
                <Link
                  to="/catalogo"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-sm"
                >
                  Ver Catálogo
                </Link>
              </div>
            ) : (
              <div className="p-3 space-y-2">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    {/* Product Image */}
                    <Link
                      to={`/producto/${item.product.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden"
                    >
                      <img
                        src={getProductImage(item.product)}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Product Info */}
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
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - item.product.quantity_step)}
                          className="w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                          disabled={item.quantity <= item.product.min_quantity}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + item.product.quantity_step)}
                          className="w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Price & Remove */}
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-all"
                        aria-label="Eliminar"
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
            <div className="border-t border-gray-100 p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-lg">{formatPrice(subtotal)}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
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
              
              <p className="text-xs text-gray-500 text-center">
                Envío gratuito en pedidos superiores a 500€
              </p>
            </div>
          )}
        </div>
      )}

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
      `}</style>
    </div>
  );
};

export default MiniCart;
