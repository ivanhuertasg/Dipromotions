import { useEffect, useRef, useState } from 'react';
import { Search, User, ChevronDown, Menu, X, ShoppingBag } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MiniCart from '../components/MiniCart';
import { useLanguage } from '../context/LanguageContext';

// Navigation content for each language
const navContent = {
  es: {
    mainNav: [
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
    ],
    secondaryNav: [
      { label: 'Yourchoice', href: '/yourchoice', hasDropdown: true },
      { label: 'Nota legal', href: '/nota-legal' },
      { label: 'Contacto', href: '/contacto' },
    ],
    catalogCta: 'Ver catálogo'
  },
  en: {
    mainNav: [
      { label: 'Home', href: '/en' },
      { label: 'Catalog', href: '/en/catalogo', hasDropdown: true },
      { label: 'Best Seller', href: '/en/best-seller' },
      { label: 'EU Made', href: '/en/fabricado-ue' },
      { label: 'Recycled', href: '/en/reciclado' },
      { label: 'USB STOCK', href: '/en/usb' },
      { label: 'Outlet', href: '/en/outlet' },
      { label: 'Specials', href: '/en/especiales' },
      { label: 'Promotions', href: '/en/promociones' },
      { label: 'Congress', href: '/en/congresos' },
      { label: 'New Arrivals', href: '/en/novedades' },
      { label: 'Christmas', href: '/en/navidad' },
    ],
    secondaryNav: [
      { label: 'Yourchoice', href: '/en/yourchoice', hasDropdown: true },
      { label: 'Legal Notice', href: '/en/nota-legal' },
      { label: 'Contact', href: '/en/contacto' },
    ],
    catalogCta: 'View catalog'
  },
  fr: {
    mainNav: [
      { label: 'Accueil', href: '/fr' },
      { label: 'Catalogue', href: '/fr/catalogo', hasDropdown: true },
      { label: 'Best Seller', href: '/fr/best-seller' },
      { label: 'Fabriqué UE', href: '/fr/fabricado-ue' },
      { label: 'Recyclé', href: '/fr/reciclado' },
      { label: 'USB STOCK', href: '/fr/usb' },
      { label: 'Outlet', href: '/fr/outlet' },
      { label: 'Spéciaux', href: '/fr/especiales' },
      { label: 'Promotions', href: '/fr/promociones' },
      { label: 'Congrès', href: '/fr/congresos' },
      { label: 'Nouveautés', href: '/fr/novedades' },
      { label: 'Noël', href: '/fr/navidad' },
    ],
    secondaryNav: [
      { label: 'Yourchoice', href: '/fr/yourchoice', hasDropdown: true },
      { label: 'Mentions Légales', href: '/fr/nota-legal' },
      { label: 'Contact', href: '/fr/contacto' },
    ],
    catalogCta: 'Voir le catalogue'
  },
  de: {
    mainNav: [
      { label: 'Startseite', href: '/de' },
      { label: 'Katalog', href: '/de/catalogo', hasDropdown: true },
      { label: 'Best Seller', href: '/de/best-seller' },
      { label: 'EU Hergestellt', href: '/de/fabricado-ue' },
      { label: 'Recycelt', href: '/de/reciclado' },
      { label: 'USB STOCK', href: '/de/usb' },
      { label: 'Outlet', href: '/de/outlet' },
      { label: 'Angebote', href: '/de/especiales' },
      { label: 'Aktionen', href: '/de/promociones' },
      { label: 'Kongresse', href: '/de/congresos' },
      { label: 'Neuheiten', href: '/de/novedades' },
      { label: 'Weihnachten', href: '/de/navidad' },
    ],
    secondaryNav: [
      { label: 'Yourchoice', href: '/de/yourchoice', hasDropdown: true },
      { label: 'Impressum', href: '/de/nota-legal' },
      { label: 'Kontakt', href: '/de/contacto' },
    ],
    catalogCta: 'Katalog ansehen'
  },
  it: {
    mainNav: [
      { label: 'Home', href: '/it' },
      { label: 'Catalogo', href: '/it/catalogo', hasDropdown: true },
      { label: 'Best Seller', href: '/it/best-seller' },
      { label: 'Prodotto UE', href: '/it/fabricado-ue' },
      { label: 'Riciclato', href: '/it/reciclado' },
      { label: 'USB STOCK', href: '/it/usb' },
      { label: 'Outlet', href: '/it/outlet' },
      { label: 'Speciali', href: '/it/especiales' },
      { label: 'Promozioni', href: '/it/promociones' },
      { label: 'Congressi', href: '/it/congresos' },
      { label: 'Novità', href: '/it/novedades' },
      { label: 'Natale', href: '/it/navidad' },
    ],
    secondaryNav: [
      { label: 'Yourchoice', href: '/it/yourchoice', hasDropdown: true },
      { label: 'Note Legali', href: '/it/nota-legal' },
      { label: 'Contatti', href: '/it/contacto' },
    ],
    catalogCta: 'Vedi catalogo'
  },
  pt: {
    mainNav: [
      { label: 'Início', href: '/pt' },
      { label: 'Catálogo', href: '/pt/catalogo', hasDropdown: true },
      { label: 'Best Seller', href: '/pt/best-seller' },
      { label: 'Fabricado UE', href: '/pt/fabricado-ue' },
      { label: 'Reciclado', href: '/pt/reciclado' },
      { label: 'USB STOCK', href: '/pt/usb' },
      { label: 'Outlet', href: '/pt/outlet' },
      { label: 'Especiais', href: '/pt/especiales' },
      { label: 'Promoções', href: '/pt/promociones' },
      { label: 'Congressos', href: '/pt/congresos' },
      { label: 'Novidades', href: '/pt/novedades' },
      { label: 'Natal', href: '/pt/navidad' },
    ],
    secondaryNav: [
      { label: 'Yourchoice', href: '/pt/yourchoice', hasDropdown: true },
      { label: 'Nota Legal', href: '/pt/nota-legal' },
      { label: 'Contacto', href: '/pt/contacto' },
    ],
    catalogCta: 'Ver catálogo'
  },
};

type Language = keyof typeof navContent;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Get current language from context
  const { currentLang: contextLang } = useLanguage();
  const currentLang = (contextLang || 'es') as Language;

  // Get navigation items for current language
  const { mainNav, secondaryNav, catalogCta } = navContent[currentLang];

  // Get home link for logo
  const homeLink = currentLang === 'es' ? '/' : `/${currentLang}`;

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

  // Close mobile menu and search on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  // Focus search input when search opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const catalogPath = currentLang === 'es' ? '/catalogo' : `/${currentLang}/catalogo`;
      navigate(`${catalogPath}?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchOpen(false);
      setSearchTerm('');
    }
  };

  const isActive = (href: string) => {
    if (href === '/' || href === '/en' || href === '/fr' || href === '/de' || href === '/it' || href === '/pt') {
      return location.pathname === href;
    }
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
            to={homeLink}
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
            {mainNav.map((item, index) => (
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
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110"
              onClick={() => setSearchOpen(!searchOpen)}
            >
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
          {secondaryNav.map((item, index) => (
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
            {mainNav.map((item, index) => (
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
            {secondaryNav.map((item, index) => (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-200 ${
                  isActive(item.href) 
                    ? 'bg-gradient-to-r from-red-50 to-red-100/50 text-[#e30614] font-medium' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#e30614]'
                }`}
                style={{ 
                  animation: mobileMenuOpen ? `slideRight 0.3s var(--ease-out-quart) ${(mainNav.length + index) * 30}ms forwards` : 'none',
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
              to={currentLang === 'es' ? '/catalogo' : `/${currentLang}/catalogo`}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#e30614] text-white rounded-xl font-medium hover:bg-[#c7000b] transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {catalogCta}
            </Link>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-all duration-300 ${
          searchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSearchOpen(false)}
      >
        <div
          className={`bg-white mx-auto mt-20 max-w-2xl rounded-2xl shadow-2xl transition-all duration-300 ${
            searchOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <form onSubmit={handleSearch} className="p-6">
            <div className="flex items-center gap-4">
              <Search className="w-6 h-6 text-gray-400 flex-shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar productos..."
                className="flex-1 text-lg outline-none text-gray-900 placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Presiona Enter para buscar
              </p>
              <button
                type="submit"
                className="px-6 py-2 bg-[#e30614] text-white rounded-full font-medium hover:bg-[#c7000b] transition-colors"
              >
                Buscar
              </button>
            </div>
          </form>
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
