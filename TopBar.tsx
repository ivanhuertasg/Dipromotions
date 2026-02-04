import { useEffect, useState } from 'react';
import { Mail, Phone, Truck } from 'lucide-react';
import LanguageSelector from '../components/LanguageSelector';

interface TopBarProps {
  currentLang: string;
  onLangChange: (lang: string) => void;
}

const TopBar = ({ currentLang, onLangChange }: TopBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`w-full bg-gradient-to-r from-[#2a2a2a] to-[#333] text-white py-2 transition-all duration-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}
      style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
    >
      <div className="section-container flex justify-between items-center">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a 
            href="tel:+34961588186" 
            className="flex items-center gap-1.5 text-xs sm:text-sm hover:text-[#e30614] transition-colors duration-300 group"
            style={{ 
              animation: isVisible ? 'slideRight 0.4s var(--ease-out-quart) 0.1s forwards' : 'none',
              opacity: 0
            }}
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">+34 961 588 186</span>
          </a>
          <a 
            href="mailto:pedidos@dipromotions.com" 
            className="flex items-center gap-1.5 text-xs sm:text-sm hover:text-[#e30614] transition-colors duration-300 group"
            style={{ 
              animation: isVisible ? 'slideRight 0.4s var(--ease-out-quart) 0.2s forwards' : 'none',
              opacity: 0
            }}
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="relative hidden md:inline">
              pedidos@dipromotions.com
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#e30614] transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
          <div 
            className="hidden lg:flex items-center gap-1.5 text-xs text-gray-400"
            style={{ 
              animation: isVisible ? 'slideRight 0.4s var(--ease-out-quart) 0.3s forwards' : 'none',
              opacity: 0
            }}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Envío gratis desde 500€</span>
          </div>
        </div>

        {/* Right: Language Selector */}
        <LanguageSelector currentLang={currentLang} onLangChange={onLangChange} />
      </div>

      <style>{`
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default TopBar;
