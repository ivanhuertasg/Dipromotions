import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Plus, Minus, Trash2, Truck, Package, Shield } from 'lucide-react';
import { useCart } from '../lib/cart';

const Carrito = () => {
  const { 
    items, 
    itemCount, 
    subtotal, 
    shipping, 
    tax, 
    total,
    formatPrice, 
    getProductImage,
    updateQuantity,
    removeItem 
  } = useCart();

  const [updatingItem, setUpdatingItem] = useState<string | null>(null);

  const handleQuantityChange = async (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setUpdatingItem(itemId);
    try {
      await updateQuantity(itemId, newQuantity);
    } catch (error) {
      console.error('Error updating quantity:', error);
    } finally {
      setUpdatingItem(null);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="section-container py-8">
            <h1 className="text-3xl font-bold text-gray-900">Tu Carrito</h1>
          </div>
        </div>

        {/* Empty State */}
        <div className="section-container py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Tu carrito está vacío
            </h2>
            <p className="text-gray-500 mb-8">
              Explora nuestro catálogo y descubre productos increíbles para tu empresa.
            </p>
            <Link to="/catalogo" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Ver Catálogo
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="section-container py-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Tu Carrito</h1>
            <span className="text-gray-500">({itemCount} {itemCount === 1 ? 'producto' : 'productos'})</span>
          </div>
        </div>
      </div>

      <div className="section-container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Products List */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-sm flex flex-col md:flex-row gap-4 md:gap-6"
              >
                {/* Product Image */}
                <Link
                  to={`/producto/${item.product.slug}`}
                  className="w-full md:w-32 h-32 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden"
                >
                  <img
                    src={getProductImage(item.product)}
                    alt={item.product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </Link>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <Link
                        to={`/producto/${item.product.slug}`}
                        className="font-semibold text-gray-900 hover:text-[#e30614] transition-colors line-clamp-2"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-gray-500 mt-1">
                        Ref: {item.product.sku}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all self-start"
                      aria-label="Eliminar producto"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Quantity & Price */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500">Cantidad:</span>
                      <div className="flex items-center bg-gray-100 rounded-lg">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - item.product.quantity_step)}
                          disabled={item.quantity <= item.product.min_quantity || updatingItem === item.id}
                          className="w-10 h-10 flex items-center justify-center hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-l-lg transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-14 text-center font-medium">
                          {updatingItem === item.id ? '...' : item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + item.product.quantity_step)}
                          disabled={updatingItem === item.id}
                          className="w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-r-lg transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-sm text-gray-500">
                        {formatPrice(item.unit_price)} / ud.
                      </p>
                      <p className="text-xl font-bold text-[#e30614]">
                        {formatPrice(item.unit_price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <Link
              to="/catalogo"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#e30614] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Continuar comprando
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Resumen del Pedido
              </h2>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    Envío
                  </span>
                  <span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>
                    {shipping === 0 ? 'Gratis' : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>IVA (21%)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                
                {shipping > 0 && (
                  <div className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
                    Te faltan {formatPrice(50000 - subtotal)} para envío gratis
                  </div>
                )}

                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-[#e30614]">{formatPrice(total)}</span>
                  </div>
                  <p className="text-xs text-gray-500 text-right mt-1">
                    IVA incluido
                  </p>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                className="w-full btn-primary py-4 text-lg font-semibold"
              >
                Proceder al Pago
              </Link>

              {/* Benefits */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Truck className="w-5 h-5 text-green-500" />
                  <span>Envío gratis en pedidos +500€</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Package className="w-5 h-5 text-blue-500" />
                  <span>Entrega en 24-48h</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield className="w-5 h-5 text-purple-500" />
                  <span>Garantía de satisfacción</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
