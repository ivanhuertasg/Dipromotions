import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, Minus, Plus, ShoppingCart, Truck, Shield, Package, Star } from 'lucide-react';
import { ProductService } from '../../lib/supabase';
import { CartService } from '../../lib/cart';

const ProductoIT = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const loadProduct = async () => {
      if (!slug) return;
      try {
        const data = await ProductService.getBySlug(slug);
        setProduct(data);
        setQuantity(data?.min_quantity || 1);
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [slug]);

  const formatPrice = (cents: number) => {
    return (cents / 100).toLocaleString('it-IT', {
      style: 'currency',
      currency: 'EUR'
    });
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (product && newQuantity >= product.min_quantity) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = async () => {
    if (!product) return;
    setIsAdding(true);
    try {
      await CartService.addItem(product.slug, quantity);
      setAdded(true);
      setTimeout(() => setAdded(false), 3000);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsAdding(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-[#e30614] border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="section-container py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Prodotto non trovato</h1>
          <Link to="/it/catalogo" className="btn-primary">
            Vedi Catalogo
          </Link>
        </div>
      </div>
    );
  }

  const hasDiscount = product.sale_price && product.sale_price < product.base_price;
  const calculatedPrice = ProductService.calculatePrice(product, quantity);

  const badges = [];
  if (product.is_bestseller) badges.push({ text: 'Best Seller', color: 'bg-amber-500' });
  if (product.is_new) badges.push({ text: 'Nuovo', color: 'bg-green-500' });
  if (product.is_eco) badges.push({ text: 'Eco-Friendly', color: 'bg-emerald-500' });
  if (product.is_eu_made) badges.push({ text: 'Prodotto UE', color: 'bg-blue-500' });
  if (hasDiscount) badges.push({ text: 'Offerta', color: 'bg-red-500' });

  const images = product.images?.length > 0 
    ? product.images 
    : [{ image_url: '/images/placeholder.jpg', alt_text: product.name }];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="section-container py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/it/" className="hover:text-[#e30614] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/it/catalogo" className="hover:text-[#e30614] transition-colors">Catalogo</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="section-container py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-sm">
              <img src={images[activeImage]?.image_url} alt={images[activeImage]?.alt_text || product.name} className="w-full h-full object-cover" />
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((img: any, index: number) => (
                  <button key={index} onClick={() => setActiveImage(index)} className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${activeImage === index ? 'border-[#e30614]' : 'border-transparent hover:border-gray-300'}`}>
                    <img src={img.image_url} alt={img.alt_text} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <span key={index} className={`${badge.color} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>{badge.text}</span>
              ))}
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-gray-500 mt-1">Ref: {product.sku}</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />)}
              </div>
              <span className="text-sm text-gray-500">(128 recensioni)</span>
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-600"><Package className="w-4 h-4 text-[#e30614]" /><span>Disponibile</span></div>
              <div className="flex items-center gap-2 text-sm text-gray-600"><Truck className="w-4 h-4 text-[#e30614]" /><span>Spedizione 24-48h</span></div>
              <div className="flex items-center gap-2 text-sm text-gray-600"><Shield className="w-4 h-4 text-[#e30614]" /><span>Garanzia inclusa</span></div>
              {product.is_customizable && <div className="flex items-center gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-[#e30614]" /><span>Personalizzabile</span></div>}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-baseline gap-3 mb-2">
                {hasDiscount && <span className="text-lg text-gray-400 line-through">{formatPrice(product.base_price)}</span>}
                <span className="text-3xl font-bold text-[#e30614]">{formatPrice(calculatedPrice)}</span>
                <span className="text-gray-500">/ unità</span>
              </div>
              
              {product.quantity_prices?.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-700 mb-2">Prezzi per quantità:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.quantity_prices.map((qp: any, index: number) => (
                      <div key={index} className={`px-3 py-1.5 rounded-lg text-sm ${quantity >= qp.min_quantity && (!qp.max_quantity || quantity <= qp.max_quantity) ? 'bg-[#e30614] text-white' : 'bg-gray-100 text-gray-600'}`}>
                        {qp.min_quantity}{qp.max_quantity ? `-${qp.max_quantity}` : '+'}: {formatPrice(qp.price)}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Quantità:</span>
              <div className="flex items-center bg-white rounded-xl shadow-sm border border-gray-200">
                <button onClick={() => handleQuantityChange(-product.quantity_step)} disabled={quantity <= product.min_quantity} className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed rounded-l-xl transition-colors"><Minus className="w-5 h-5" /></button>
                <span className="w-20 text-center font-semibold text-lg">{quantity}</span>
                <button onClick={() => handleQuantityChange(product.quantity_step)} className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 rounded-r-xl transition-colors"><Plus className="w-5 h-5" /></button>
              </div>
              <span className="text-sm text-gray-500">Min. {product.min_quantity} unità</span>
            </div>

            <button onClick={handleAddToCart} disabled={isAdding} className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all ${added ? 'bg-green-500 text-white' : 'bg-[#e30614] text-white hover:bg-[#c7000b]'}`}>
              {added ? <><Check className="w-6 h-6" />Aggiunto al carrello</> : <><ShoppingCart className="w-6 h-6" />{isAdding ? 'Aggiungendo...' : 'Aggiungi al Carrello'}</>}
            </button>

            <div className="bg-gray-100 rounded-xl p-4 text-center">
              <span className="text-gray-600">Totale: </span>
              <span className="text-2xl font-bold text-[#e30614]">{formatPrice(calculatedPrice * quantity)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoIT;
