// =============================================
// TOP BAR - diPromotions
// =============================================

import { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';
import LanguageSelector from '../components/LanguageSelector';

interface TopBarProps {
  currentLang?: string;
  onLangChange?: (lang: string) => void;
}

const TopBar = ({ currentLang, onLangChange }: TopBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`w-full bg-[#333] text-white py-2.5 transition-all duration-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}
      style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
    >
      <div className="section-container flex justify-between items-center">
        {/* Email */}
        <a 
          href="mailto:pedidos@dipromotions.com" 
          className="flex items-center gap-2 text-sm hover:text-[#e30614] transition-colors duration-300 group"
          style={{ 
            animation: isVisible ? 'slideRight 0.4s var(--ease-out-quart) 0.2s forwards' : 'none',
            opacity: 0
          }}
        >
          <Mail className="w-4 h-4" />
          <span className="relative hidden sm:inline">
            pedidos@dipromotions.com
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#e30614] transition-all duration-300 group-hover:w-full" />
          </span>
        </a>

        {/* Language Selector - Funciona con o sin props */}
        <LanguageSelector 
          currentLang={currentLang} 
          onLangChange={onLangChange} 
        />
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
