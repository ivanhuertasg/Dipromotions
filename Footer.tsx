import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook, Linkedin, Twitter, MapPin, Clock } from 'lucide-react';

const serviceLinks = [
  { label: 'Best Seller', href: '/best-seller' },
  { label: 'Yourchoice', href: '/yourchoice' },
  { label: 'Fabricado en UE', href: '/fabricado-ue' },
  { label: 'Reciclado', href: '/reciclado' },
  { label: 'USB Stock', href: '/usb' },
  { label: 'Outlet', href: '/outlet' },
  { label: 'Especiales', href: '/especiales' },
  { label: 'Promociones', href: '/promociones' },
  { label: 'Novedades', href: '/novedades' },
  { label: 'Catálogo', href: '/catalogo' },
];

const socialLinks = [
  { 
    icon: <Instagram className="w-5 h-5" />, 
    href: 'https://instagram.com/dipromotions', 
    label: 'Instagram',
    color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500'
  },
  { 
    icon: <Facebook className="w-5 h-5" />, 
    href: 'https://facebook.com/dipromotions', 
    label: 'Facebook',
    color: 'hover:bg-blue-600'
  },
  { 
    icon: <Linkedin className="w-5 h-5" />, 
    href: 'https://linkedin.com/company/dipromotions', 
    label: 'LinkedIn',
    color: 'hover:bg-blue-700'
  },
  { 
    icon: <Twitter className="w-5 h-5" />, 
    href: 'https://twitter.com/dipromotions', 
    label: 'Twitter',
    color: 'hover:bg-sky-500'
  },
];

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="bg-[#333] text-white"
    >
      {/* Main Footer Content */}
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {/* Column 1: Company Info */}
          <div 
            className={`transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              transitionTimingFunction: 'var(--ease-out-expo)',
              transitionDelay: '100ms'
            }}
          >
            <h3 className="text-lg font-semibold mb-4">
              Siempre <span className="text-[#e30614]">tu producto único</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Disponemos de una extensa red de oficinas para dar un buen servicio y soporte. 
              Con una gran variedad de estilos y opciones de personalización entre las que elegir, 
              puedes encontrar los accesorios perfectos para combinar con la identidad de tu marca 
              y crear un look cohesionado y elegante.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Todos los productos se fabrican de forma responsable y cumplen con todos los requisitos 
              de leyes y normativas de la Unión Europea. Reduciendo drásticamente el uso de plástico virgen.
            </p>
          </div>

          {/* Column 2: Services */}
          <div 
            className={`transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              transitionTimingFunction: 'var(--ease-out-expo)',
              transitionDelay: '200ms'
            }}
          >
            <h3 className="text-lg font-semibold mb-4">Nuestros servicios</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li 
                  key={link.label}
                  style={{ 
                    animation: isVisible ? `slideRight 0.4s var(--ease-out-quart) ${300 + index * 50}ms forwards` : 'none',
                    opacity: 0
                  }}
                >
                  <Link 
                    to={link.href}
                    className="text-gray-400 text-sm hover:text-[#e30614] transition-all duration-200 inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-[#e30614] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div 
            className={`transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              transitionTimingFunction: 'var(--ease-out-expo)',
              transitionDelay: '300ms'
            }}
          >
            <h3 className="text-lg font-semibold mb-4">¿Podemos ayudarte?</h3>
            
            <div className="space-y-3">
              <a 
                href="tel:+34961588186"
                className="flex items-center gap-3 text-gray-400 hover:text-[#e30614] transition-colors duration-200 group"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="relative">
                  +34 961 588 186
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#e30614] transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
              
              <a 
                href="mailto:pedidos@dipromotions.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#e30614] transition-colors duration-200 group"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="relative text-sm">
                  pedidos@dipromotions.com
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#e30614] transition-all duration-300 group-hover:w-full" />
                </span>
              </a>

              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  C/ Principal 123, 46900<br />
                  Torrent, Valencia, España
                </span>
              </div>

              <div className="flex items-start gap-3 text-gray-400">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Lun - Vie: 9:00 - 18:00<br />
                  Sáb - Dom: Cerrado
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-3">Síguenos en redes</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6 ${
                      isVisible ? 'scale-100' : 'scale-0'
                    }`}
                    style={{ 
                      transitionTimingFunction: 'var(--ease-elastic)',
                      transitionDelay: `${600 + index * 100}ms`
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        className={`bg-gradient-to-r from-[#e30614] to-[#c7000b] transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
        }`}
        style={{ 
          transitionTimingFunction: 'var(--ease-out-expo)',
          transitionDelay: '500ms'
        }}
      >
        <div className="section-container py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold">
              <span className="text-white">di</span>
              <span className="text-white/80">Promotions</span>
            </span>
            <span className="text-white/60 text-sm hidden sm:inline">|</span>
            <p className="text-white/80 text-sm">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link 
              to="/nota-legal"
              className="text-white/80 text-sm hover:text-white transition-colors duration-200"
            >
              Política de privacidad
            </Link>
            <Link 
              to="/contacto"
              className="text-white/80 text-sm hover:text-white transition-colors duration-200"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
