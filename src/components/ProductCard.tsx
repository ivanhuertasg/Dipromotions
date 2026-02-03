import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Check, Minus, Plus } from 'lucide-react';
import { CartService } from '../lib/cart';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    short_description: string;
    base_price: number;
    sale_price?: number | null;
    min_quantity: number;
    quantity_step: number;
    images: Array<{
      image_url: string;
      is_primary: boolean;
    }>;
    is_bestseller?: boolean;
    is_new?: boolean;
    is_eco?: boolean;
    is_eu_made?: boolean;
  };
  showAddToCart?: boolean;
}

const ProductCard = ({ product, showAddToCart = true }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(product.min_quantity);
  const [isAdding, setIsAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const primaryImage = product.images?.find(img => img.is_primary)?.image_url || '/images/placeholder.jpg';
  const displayPrice = product.sale_price || product.base_price;
  const hasDiscount = product.sale_price && product.sale_price < product.base_price;

  const formatPrice = (cents: number) => {
    return (cents / 100).toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR'
    });
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= product.min_quantity) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      await CartService.addItem(product.slug, quantity);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsAdding(false);
    }
  };

  // Badges
  const badges = [];
  if (product.is_bestseller) badges.push({ text: 'Best Seller', color: 'bg-amber-500' });
  if (product.is_new) badges.push({ text: 'Nuevo', color: 'bg-green-500' });
  if (product.is_eco) badges.push({ text: 'Eco', color: 'bg-emerald-500' });
  if (product.is_eu_made) badges.push({ text: 'UE', color: 'bg-blue-500' });
  if (hasDiscount) badges.push({ text: 'Oferta', color: 'bg-red-500' });

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Link to={`/producto/${product.slug}`}>
          <img
            src={primaryImage}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {badges.slice(0, 2).map((badge, index) => (
            <span
              key={index}
              className={`${badge.color} text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider`}
            >
              {badge.text}
            </span>
          ))}
        </div>

        {/* Quick Add Overlay */}
        {showAddToCart && (
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full py-2.5 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all ${
                added
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
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
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <Link
          to={`/producto/${product.slug}`}
          className="block font-semibold text-gray-900 group-hover:text-[#e30614] transition-colors line-clamp-2 min-h-[2.5rem]"
        >
          {product.name}
        </Link>

        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {product.short_description}
        </p>

        {/* Quantity Selector (for product page) */}
        {showAddToCart && (
          <div className="flex items-center justify-center gap-2 mt-3">
            <button
              onClick={() => handleQuantityChange(-product.quantity_step)}
              disabled={quantity <= product.min_quantity}
              className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-sm font-medium w-12 text-center">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(product.quantity_step)}
              className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {hasDiscount && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.base_price)}
            </span>
          )}
          <span className="text-lg font-bold text-[#e30614]">
            {formatPrice(displayPrice)}
          </span>
        </div>

        {/* Min Quantity */}
        <p className="text-xs text-gray-400 text-center mt-1">
          Mín. {product.min_quantity} unidades
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
