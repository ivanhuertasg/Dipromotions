import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contacto = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#e30614] to-[#c7000b] text-white py-12 md:py-16">
        <div className="section-container">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-white/90">Estamos aquí para ayudarte. Ponte en contacto con nosotros.</p>
        </div>
      </div>

      <div ref={sectionRef} className="section-container py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div 
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de contacto</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#e30614]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Teléfono</h3>
                  <a href="tel:+34961588186" className="text-gray-600 hover:text-[#e30614] transition-colors">
                    +34 961 588 186
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#e30614]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a href="mailto:pedidos@dipromotions.com" className="text-gray-600 hover:text-[#e30614] transition-colors">
                    pedidos@dipromotions.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#e30614]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Dirección</h3>
                  <p className="text-gray-600">
                    C/ Industria, 123<br />
                    46009 Valencia, España
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#e30614]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Horario</h3>
                  <p className="text-gray-600">
                    Lunes - Viernes: 9:00 - 18:00<br />
                    Sábado - Domingo: Cerrado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ 
              transitionTimingFunction: 'var(--ease-out-expo)',
              transitionDelay: '200ms'
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all duration-200"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all duration-200"
                    placeholder="+34 123 456 789"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all duration-200"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#e30614] focus:ring-2 focus:ring-[#e30614]/20 outline-none transition-all duration-200 resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>{submitted ? '¡Mensaje enviado!' : 'Enviar mensaje'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
