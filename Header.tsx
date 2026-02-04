import { useEffect, useRef, useState } from 'react';
import { Search, User, ChevronDown, Menu, X, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import MiniCart from '../components/MiniCart';

const mainNavItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Catálogo', href: '/catalogo', hasDropdown: true },
  { label: 'Best Seller', href: '/best-seller' },
  { label: 'Fabricado UE', href: '/fabricado-ue' },
  { label: 'Reciclado', href: '/reciclado' },
  { label: 'USB STOCK', href: '/usb' },
  { label: 'Outlet', href: '/outlet' },
  { label: 'Especiales', href: '/especiales' },
  { label: 'Promociones', href: '/promociones' },
  { label: 'Congresos', href: '/congresos' },
  { label: 'Novedades', href: '/novedades' },
  { label: 'Navidad', href: '/navidad' },
];

const secondaryNavItems = [
  { label: 'Yourchoice', href: '/yourchoice', hasDropdown: true },
  { label: 'Nota legal', href: '/nota-legal' },
  { label: 'Contacto', href: '/contacto' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        isScrolled 
          ? 'glass-effect shadow-lg py-2' 
          : 'bg-white py-4'
      }`}
      style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
    >
      <div className="section-container">
        {/* Main Header Row */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link 
            to="/" 
            className={`flex-shrink-0 transition-all duration-500 group ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}
            style={{ 
              transitionTimingFunction: 'var(--ease-smooth)',
              animation: isVisible ? 'scaleIn 0.7s var(--ease-out-expo) 0.1s forwards' : 'none',
              opacity: isVisible ? 1 : 0
            }}
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold tracking-tight">
                <span className="text-black group-hover:text-[#e30614] transition-colors duration-300">di</span>
                <span className="text-[#e30614] group-hover:text-black transition-colors duration-300">Promotions</span>
              </span>
              <span className="text-[10px] md:text-xs text-gray-500 tracking-widest uppercase">
                Digarco & Asociados
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 flex-1 justify-center">
            {mainNavItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.href}
                className={`nav-link px-2 py-2 flex items-center gap-1 whitespace-nowrap ${
                  isActive(item.href) ? 'text-[#e30614]' : ''
                }`}
                style={{ 
                  animation: isVisible ? `slideDown 0.4s var(--ease-out-quart) ${0.2 + index * 0.06}s forwards` : 'none',
                  opacity: 0
                }}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div 
            className="flex items-center gap-2 md:gap-4"
            style={{ 
              animation: isVisible ? 'scaleIn 0.5s var(--ease-elastic) 0.8s forwards' : 'none',
              opacity: 0
            }}
          >
            <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 hidden sm:block">
              <User className="w-5 h-5 text-gray-700" />
            </button>
            
            {/* Mini Cart */}
            <MiniCart />
            
            {/* Mobile Menu Button */}
            <button 
              className="xl:hidden p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Secondary Navigation - Desktop */}
        <nav 
          className={`hidden xl:flex items-center justify-center gap-6 mt-2 pt-2 border-t border-gray-100 transition-all duration-300 ${
            isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
          }`}
        >
          {secondaryNavItems.map((item, index) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm text-gray-600 hover:text-[#e30614] transition-colors duration-200 flex items-center gap-1 ${
                isActive(item.href) ? 'text-[#e30614]' : ''
              }`}
              style={{ 
                animation: isVisible ? `slideDown 0.4s var(--ease-out-quart) ${0.6 + index * 0.06}s forwards` : 'none',
                opacity: 0
              }}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`xl:hidden fixed inset-x-0 top-[60px] bg-white/95 backdrop-blur-lg shadow-2xl transition-all duration-300 overflow-auto max-h-[calc(100vh-60px)] z-50 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="p-4 space-y-1">
          {/* Main Navigation */}
          <div className="mb-4">
            <p className="text-xs text-gray-400 uppercase tracking-wider px-4 mb-2">Menú principal</p>
            {mainNavItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-200 ${
                  isActive(item.href) 
                    ? 'bg-gradient-to-r from-red-50 to-red-100/50 text-[#e30614] font-medium' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#e30614]'
                }`}
                style={{ 
                  animation: mobileMenuOpen ? `slideRight 0.3s var(--ease-out-quart) ${index * 30}ms forwards` : 'none',
                  opacity: 0
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Divider */}
          <div className="border-t border-gray-100 my-4" />
          
          {/* Secondary Navigation */}
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider px-4 mb-2">Más opciones</p>
            {secondaryNavItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-200 ${
                  isActive(item.href) 
                    ? 'bg-gradient-to-r from-red-50 to-red-100/50 text-[#e30614] font-medium' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#e30614]'
                }`}
                style={{ 
                  animation: mobileMenuOpen ? `slideRight 0.3s var(--ease-out-quart) ${(mainNavItems.length + index) * 30}ms forwards` : 'none',
                  opacity: 0
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Quick Actions */}
          <div className="border-t border-gray-100 mt-4 pt-4">
            <Link
              to="/catalogo"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#e30614] text-white rounded-xl font-medium hover:bg-[#c7000b] transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              Ver catálogo
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

export default Header;
