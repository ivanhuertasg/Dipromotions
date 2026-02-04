import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, Shield, Check, Package } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

interface FormData {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  company: string;
  taxId: string;
  address: string;
  addressLine2: string;
  city: string;
  postalCode: string;
  province: string;
  country: string;
  sameAsBilling: boolean;
  notes: string;
}

const initialFormData: FormData = {
  email: '',
  phone: '',
  firstName: '',
  lastName: '',
  company: '',
  taxId: '',
  address: '',
  addressLine2: '',
  city: '',
  postalCode: '',
  province: '',
  country: 'United Kingdom',
  sameAsBilling: true,
  notes: '',
};

const CheckoutEN = () => {
  const { items, itemCount, subtotal, shipping, tax, total, formatPrice, getProductImage } = useCart();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [step, setStep] = useState<'info' | 'shipping' | 'payment' | 'confirmation'>('info');
  const [isProcessing, setIsProcessing] = useState(false);

  if (items.length === 0 && step !== 'confirmation') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Add products before continuing</p>
          <Link to="/en/catalogo" className="btn-primary">View Catalog</Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'info') setStep('shipping');
    else if (step === 'shipping') setStep('payment');
    else if (step === 'payment') {
      setIsProcessing(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsProcessing(false);
      setStep('confirmation');
    }
  };

  const steps = [{ id: 'info', label: 'Information' }, { id: 'shipping', label: 'Shipping' }, { id: 'payment', label: 'Payment' }];

  if (step === 'confirmation') {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 mb-2">Your order number is: <span className="font-semibold">#{Date.now().toString().slice(-8)}</span></p>
            <p className="text-gray-600 mb-8">We have sent a confirmation email to <span className="font-semibold">{formData.email}</span></p>
            <div className="bg-white rounded-xl p-6 shadow-sm mb-8 text-left">
              <h3 className="font-semibold text-gray-900 mb-4">Next steps:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><div className="w-6 h-6 bg-[#e30614] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">1</div><span className="text-gray-600">You will receive an email with your order details</span></li>
                <li className="flex items-start gap-3"><div className="w-6 h-6 bg-[#e30614] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">2</div><span className="text-gray-600">Our team will contact you to confirm customization</span></li>
                <li className="flex items-start gap-3"><div className="w-6 h-6 bg-[#e30614] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">3</div><span className="text-gray-600">We will send you a digital sample before production</span></li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/en/" className="btn-outline">Back to Home</Link>
              <Link to="/en/catalogo" className="btn-primary">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <Link to="/en/carrito" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"><ArrowLeft className="w-5 h-5" /><span>Back to cart</span></Link>
            <h1 className="text-xl font-bold text-gray-900">Checkout</h1>
            <div className="w-24" />
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            {steps.map((s, index) => (
              <div key={s.id} className="flex items-center">
                <div className={`flex items-center gap-2 ${s.id === step ? 'text-[#e30614]' : steps.findIndex(x => x.id === step) > index ? 'text-green-500' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${s.id === step ? 'bg-[#e30614] text-white' : steps.findIndex(x => x.id === step) > index ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {steps.findIndex(x => x.id === step) > index ? <Check className="w-4 h-4" /> : index + 1}
                  </div>
                  <span className="hidden sm:inline font-medium">{s.label}</span>
                </div>
                {index < steps.length - 1 && <div className={`w-12 h-0.5 mx-2 ${steps.findIndex(x => x.id === step) > index ? 'bg-green-500' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {step === 'info' && (
                <div className="bg-white rounded-2xl p-6 shadow-sm space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">Email *</label><input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all" placeholder="your@email.com" /></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label><input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all" placeholder="+44 7700 900000" /></div>
                  </div>
                  <hr className="border-gray-100" />
                  <h3 className="text-lg font-medium text-gray-900">Billing Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label><input type="text" name="firstName" required value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all" /></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label><input type="text" name="lastName" required value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all" /></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">Company</label><input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all" /></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">VAT Number *</label><input type="text" name="taxId" required value={formData.taxId} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all" /></div>
                  </div>
                  <button type="submit" className="w-full btn-primary py-4 text-lg">Continue to Shipping</button>
                </div>
              )}

              {step === 'shipping' && (
                <div className="bg-white rounded-2xl p-6 shadow-sm space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Shipping Address</h2>
                  <div className="space-y-4">
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">Address *</label><input type="text" name="address" required value={formData.address} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all" placeholder="Street, number, floor..." /></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">Address Line 2</label><input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all" placeholder="Building, stairs, etc. (optional)" /></div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div><label className="block text-sm font-medium text-gray-700 mb-1">Postal Code *</label><input type="text" name="postalCode" required value={formData.postalCode} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all" /></div>
                      <div><label className="block text-sm font-medium text-gray-700 mb-1">City *</label><input type="text" name="city" required value={formData.city} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all" /></div>
                      <div><label className="block text-sm font-medium text-gray-700 mb-1">County/Region *</label><input type="text" name="province" required value={formData.province} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all" /></div>
                    </div>
                  </div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Order Notes</label><textarea name="notes" value={formData.notes} onChange={handleInputChange} rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all resize-none" placeholder="Special delivery instructions, etc." /></div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep('info')} className="flex-1 btn-outline py-4">Back</button>
                    <button type="submit" className="flex-1 btn-primary py-4">Continue to Payment</button>
                  </div>
                </div>
              )}

              {step === 'payment' && (
                <div className="bg-white rounded-2xl p-6 shadow-sm space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">Payment Method</h2>
                  <div className="space-y-3">
                    <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-[#e30614] transition-colors">
                      <input type="radio" name="paymentMethod" value="transfer" defaultChecked className="w-5 h-5 text-[#e30614]" />
                      <div className="flex-1"><span className="font-medium text-gray-900">Bank Transfer</span><p className="text-sm text-gray-500">Bank details will be sent by email</p></div>
                    </label>
                    <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-[#e30614] transition-colors">
                      <input type="radio" name="paymentMethod" value="card" className="w-5 h-5 text-[#e30614]" />
                      <div className="flex-1"><span className="font-medium text-gray-900">Credit/Debit Card</span><p className="text-sm text-gray-500">Secure payment with Stripe</p></div>
                      <CreditCard className="w-6 h-6 text-gray-400" />
                    </label>
                    <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-[#e30614] transition-colors">
                      <input type="radio" name="paymentMethod" value="paypal" className="w-5 h-5 text-[#e30614]" />
                      <div className="flex-1"><span className="font-medium text-gray-900">PayPal</span><p className="text-sm text-gray-500">Fast and secure payment</p></div>
                    </label>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" required className="mt-1 w-5 h-5 text-[#e30614] rounded" />
                      <span className="text-sm text-gray-600">I have read and accept the <Link to="/en/nota-legal" className="text-[#e30614] underline">terms and conditions</Link> and <Link to="/en/nota-legal" className="text-[#e30614] underline">privacy policy</Link>.</span>
                    </label>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep('shipping')} className="flex-1 btn-outline py-4">Back</button>
                    <button type="submit" disabled={isProcessing} className="flex-1 btn-primary py-4 flex items-center justify-center gap-2">
                      {isProcessing ? <><span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />Processing...</> : <><span>Confirm Order</span><span className="font-bold">{formatPrice(total)}</span></>}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-32">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-3 max-h-[300px] overflow-y-auto mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0"><img src={getProductImage(item.product)} alt={item.product.name} className="w-full h-full object-cover" /></div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm truncate">{item.product.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      <p className="text-sm font-semibold text-[#e30614]">{formatPrice(item.unit_price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="border-gray-100 my-4" />
              <div className="space-y-2">
                <div className="flex justify-between text-gray-600"><span>Subtotal ({itemCount} items)</span><span>{formatPrice(subtotal)}</span></div>
                <div className="flex justify-between text-gray-600"><span className="flex items-center gap-1"><Truck className="w-4 h-4" />Shipping</span><span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span></div>
                <div className="flex justify-between text-gray-600"><span>VAT (21%)</span><span>{formatPrice(tax)}</span></div>
                <hr className="border-gray-100" />
                <div className="flex justify-between items-center pt-2"><span className="text-lg font-semibold text-gray-900">Total</span><span className="text-2xl font-bold text-[#e30614]">{formatPrice(total)}</span></div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600"><Shield className="w-5 h-5 text-green-500" /><span>100% Secure Payment</span></div>
                <div className="flex items-center gap-3 text-sm text-gray-600"><Truck className="w-5 h-5 text-blue-500" /><span>Shipping in 24-48h</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutEN;
