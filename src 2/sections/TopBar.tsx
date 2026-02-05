// =============================================
// TOP BAR - diPromotions
// =============================================

import { Phone, Mail, MapPin } from 'lucide-react';
import LanguageSelector from '../components/LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

const TopBar = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#1a1a1a] text-white text-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-10">
          {/* Información de contacto */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="tel:+34962123456" 
              className="flex items-center gap-2 hover:text-[#e30614] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+34 962 123 456</span>
            </a>
            <a 
              href="mailto:info@dipromotions.com" 
              className="flex items-center gap-2 hover:text-[#e30614] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>info@dipromotions.com</span>
            </a>
          </div>

          {/* Ubicación */}
          <div className="hidden lg:flex items-center gap-2 text-gray-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>Valencia, España</span>
          </div>

          {/* Selector de idioma */}
          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden sm:inline text-gray-400 text-xs">
              {t('language.title')}:
            </span>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
