import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const ContactoDE = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Nachricht erfolgreich gesendet');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-[#e30614] to-[#c7000b] text-white py-12 md:py-16">
        <div className="section-container">
          <Link to="/de" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 mb-6">
            <ArrowLeft className="w-5 h-5" />
            <span>Zurück zur Startseite</span>
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Kontakt</h1>
          <p className="text-xl text-white/90">Wir sind hier, um Ihnen zu helfen</p>
        </div>
      </div>

      <div ref={sectionRef} className="py-16">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-2xl font-bold mb-8">Kontaktinformationen</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0"><Phone className="w-6 h-6 text-[#e30614]" /></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefon</h3>
                    <p className="text-gray-600">+34 961 588 186</p>
                    <p className="text-gray-500 text-sm">Mo - Fr: 9:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0"><Mail className="w-6 h-6 text-[#e30614]" /></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">pedidos@dipromotions.com</p>
                    <p className="text-gray-500 text-sm">Wir antworten innerhalb von 24h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0"><MapPin className="w-6 h-6 text-[#e30614]" /></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Adresse</h3>
                    <p className="text-gray-600">C/ Principal 123</p>
                    <p className="text-gray-600">46900 Torrent, Valencia</p>
                    <p className="text-gray-500 text-sm">Spanien</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0"><Clock className="w-6 h-6 text-[#e30614]" /></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Öffnungszeiten</h3>
                    <p className="text-gray-600">Montag bis Freitag: 9:00 - 18:00</p>
                    <p className="text-gray-500 text-sm">Samstag und Sonntag: Geschlossen</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Senden Sie uns eine Nachricht</h2>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Nachricht gesendet!</h3>
                    <p className="text-gray-600">Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all" placeholder="Ihr Name" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all" placeholder="ihre@email.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all" placeholder="+34 123 456 789" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Betreff *</label>
                      <select name="subject" required value={formData.subject} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all">
                        <option value="">Wählen Sie einen Betreff</option>
                        <option value="quote">Angebot anfordern</option>
                        <option value="order">Bestellanfrage</option>
                        <option value="product">Produktinformation</option>
                        <option value="other">Andere</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nachricht *</label>
                      <textarea name="message" required rows={4} value={formData.message} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all resize-none" placeholder="Wie können wir Ihnen helfen?" />
                    </div>
                    <button type="submit" disabled={isSubmitting}
                      className="w-full bg-[#e30614] text-white py-4 rounded-xl font-semibold hover:bg-[#c7000b] transition-colors flex items-center justify-center gap-2 disabled:opacity-50">
                      {isSubmitting ? (<><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Wird gesendet...</>) : (<><Send className="w-5 h-5" /> Nachricht senden</>)}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoDE;
