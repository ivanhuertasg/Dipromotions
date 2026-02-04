import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Trash2, Plus, Minus, Package } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

const CarritoES = () => {
  const { items, itemCount, subtotal, total, updateQuantity, removeItem, formatPrice } = useCart();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="section-container text-center">
          <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Tu carrito está vacío</h1>
          <p className="text-gray-600 mb-8">Añade algunos productos para comenzar</p>
          <Link to="/catalogo" className="inline-flex items-center gap-2 bg-[#e30614] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#c7000b] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Ver catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 py-8 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="section-container">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-[#e30614] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Volver
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">Tu Carrito ({itemCount})</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm flex gap-4">
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  {item.product.images?.[0]?.image_url ? (
                    <img src={item.product.images[0].image_url} alt={item.product.name} className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <Package className="w-10 h-10 text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.product.name}</h3>
                  <p className="text-gray-500 text-sm">SKU: {item.product.sku}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-lg">{formatPrice(item.unit_price * item.quantity)}</span>
                      <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm h-fit">
            <h2 className="text-xl font-bold mb-6">Resumen del pedido</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Envío</span>
                <span className="text-green-600">Gratis</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">IVA (21%)</span>
                <span className="font-medium">{formatPrice(Math.round(subtotal * 0.21))}</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-[#e30614]">{formatPrice(total)}</span>
              </div>
            </div>
            <Link to="/checkout" className="block w-full bg-[#e30614] text-white text-center py-4 rounded-xl font-semibold hover:bg-[#c7000b] transition-colors">
              Finalizar compra
            </Link>
            <Link to="/catalogo" className="block w-full text-center py-3 text-gray-600 hover:text-[#e30614] transition-colors mt-4">
              Seguir comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarritoES;
