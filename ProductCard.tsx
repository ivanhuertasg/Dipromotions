// =============================================
// TARJETA DE PRODUCTO - diPromotions
// =============================================
// Componente reutilizable para mostrar productos en grids

import { useState, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Check, Heart, Eye, Minus, Plus } from 'lucide-react';
import { CartService } from '../lib/cart';
import { ProductService, type Product } from '../lib/supabase';

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
  showQuickActions?: boolean;
  viewMode?: 'grid' | 'list';
}

const ProductCard = memo(({ 
  product, 
  showAddToCart = true,
  showQuickActions = true,
  viewMode = 'grid'
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(product.min_quantity);
  const [isAdding, setIsAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Obtener imagen principal
  const primaryImage = ProductService.getPrimaryImage(product);
  
  // Precio a mostrar (con descuento si aplica)
  const displayPrice = product.sale_price || product.base_price;
  const hasDiscount = product.sale_price && product.sale_price < product.base_price;
  
  // Calcular porcentaje de descuento
  const discountPercent = hasDiscount 
    ? Math.round((1 - product.sale_price! / product.base_price) * 100)
    : 0;

  // =============================================
  // HANDLERS
  // =============================================
  
  const handleQuantityChange = useCallback((delta: number) => {
    setQuantity(prev => {
      const newQty = prev + delta;
      return newQty >= product.min_quantity ? newQty : prev;
    });
  }, [product.min_quantity]);

  const handleAddToCart = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isAdding) return;
    
    setIsAdding(true);
    try {
      await CartService.addItem(product.slug, quantity);
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
        setQuantity(product.min_quantity);
      }, 2000);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsAdding(false);
    }
  }, [product.slug, quantity, isAdding, product.min_quantity]);

  // =============================================
  // BADGES
  // =============================================
  
  const badges: Array<{ text: string; color: string; icon?: string }> = [];
  
  if (hasDiscount) {
    badges.push({ text: `-${discountPercent}%`, color: 'bg-red-500' });
  }
  if (product.is_bestseller) {
    badges.push({ text: 'Best Seller', color: 'bg-amber-500' });
  }
  if (product.is_new) {
    badges.push({ text: 'Nuevo', color: 'bg-green-500' });
  }
  if (product.is_eco) {
    badges.push({ text: 'Eco', color: 'bg-emerald-500', icon: '🌱' });
  }
  if (product.is_eu_made) {
    badges.push({ text: 'UE', color: 'bg-blue-500', icon: '🇪🇺' });
  }

  // =============================================
  // RENDER - MODO LISTA
  // =============================================
  
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex gap-4 p-4">
        {/* Imagen */}
        <Link 
          to={`/producto/${product.slug}`}
          className="w-32 h-32 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden"
        >
          <img
            src={primaryImage}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </Link>

        {/* Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              {badges.slice(0, 3).map((badge, idx) => (
                <span
                  key={idx}
                  className={`${badge.color} text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase`}
                >
                  {badge.icon && <span className="mr-1">{badge.icon}</span>}
                  {badge.text}
                </span>
              ))}
            </div>

            <Link
              to={`/producto/${product.slug}`}
              className="font-semibold text-gray-900 hover:text-[#e30614] transition-colors line-clamp-1"
            >
              {product.name}
            </Link>
            
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {product.short_description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-3">
            {/* Precio */}
            <div className="flex items-center gap-2">
              {hasDiscount && (
                <span className="text-sm text-gray-400 line-through">
                  {ProductService.formatPrice(product.base_price)}
                </span>
              )}
              <span className="text-lg font-bold text-[#e30614]">
                {ProductService.formatPrice(displayPrice)}
              </span>
              <span className="text-xs text-gray-400">/ ud.</span>
            </div>

            {/* Añadir al carrito */}
            {showAddToCart && (
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-all ${
                  added
                    ? 'bg-green-500 text-white'
                    : 'bg-[#e30614] text-white hover:bg-[#c7000b]'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    Añadido
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    Añadir
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // =============================================
  // RENDER - MODO GRID (default)
  // =============================================
  
  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contenedor de imagen */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Link to={`/producto/${product.slug}`}>
          <img
            src={primaryImage}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[calc(100%-24px)]">
          {badges.slice(0, 2).map((badge, index) => (
            <span
              key={index}
              className={`${badge.color} text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm`}
            >
              {badge.icon && <span className="mr-0.5">{badge.icon}</span>}
              {badge.text}
            </span>
          ))}
        </div>

        {/* Acciones rápidas (visible en hover) */}
        {showQuickActions && (
          <div 
            className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
            }`}
          >
            <button
              className="w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-[#e30614] hover:scale-110 transition-all"
              aria-label="Añadir a favoritos"
            >
              <Heart className="w-4 h-4" />
            </button>
            <Link
              to={`/producto/${product.slug}`}
              className="w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-[#e30614] hover:scale-110 transition-all"
              aria-label="Ver detalles"
            >
              <Eye className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Overlay de añadir al carrito */}
        {showAddToCart && (
          <div 
            className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Selector de cantidad */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleQuantityChange(-product.quantity_step);
                }}
                disabled={quantity <= product.min_quantity}
                className="w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center hover:bg-white disabled:opacity-50 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-white font-semibold w-12 text-center">
                {quantity}
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleQuantityChange(product.quantity_step);
                }}
                className="w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center hover:bg-white transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Botón añadir */}
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full py-2.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all ${
                added
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  ¡Añadido!
                </>
              ) : isAdding ? (
                <span className="animate-pulse">Añadiendo...</span>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  Añadir al carrito
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-4">
        {/* Nombre */}
        <Link
          to={`/producto/${product.slug}`}
          className="block font-semibold text-gray-900 group-hover:text-[#e30614] transition-colors line-clamp-2 min-h-[2.75rem]"
        >
          {product.name}
        </Link>

        {/* Descripción corta */}
        <p className="text-sm text-gray-500 mt-1 line-clamp-2 min-h-[2.5rem]">
          {product.short_description}
        </p>

        {/* Precio */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {hasDiscount && (
            <span className="text-sm text-gray-400 line-through">
              {ProductService.formatPrice(product.base_price)}
            </span>
          )}
          <span className="text-xl font-bold text-[#e30614]">
            {ProductService.formatPrice(displayPrice)}
          </span>
        </div>

        {/* Info cantidad mínima */}
        <p className="text-xs text-gray-400 text-center mt-2">
          Mín. {product.min_quantity} uds. · {product.stock_status === 'in_stock' ? 'En stock' : 'Bajo pedido'}
        </p>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
