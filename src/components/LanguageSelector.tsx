// =============================================
// SELECTOR DE IDIOMA - diPromotions
// =============================================
// Modal overlay accesible con soporte completo de i18n

import { useState, useEffect, useRef, useCallback } from 'react';
import { Globe, X, Check } from 'lucide-react';

// =============================================
// TIPOS Y CONFIGURACIÓN
// =============================================
interface Language {
  code: string;
  label: string;
  flag: string;
  nativeLabel: string;
}

const languages: Language[] = [
  { code: 'ES', label: 'Español', nativeLabel: 'Español', flag: '🇪🇸' },
  { code: 'EN', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
  { code: 'FR', label: 'Français', nativeLabel: 'Français', flag: '🇫🇷' },
  { code: 'DE', label: 'Deutsch', nativeLabel: 'Deutsch', flag: '🇩🇪' },
  { code: 'PT', label: 'Português', nativeLabel: 'Português', flag: '🇵🇹' },
];

interface LanguageSelectorProps {
  currentLang: string;
  onLangChange: (lang: string) => void;
}

// =============================================
// TRADUCCIONES DEL COMPONENTE
// =============================================
const translations: Record<string, { title: string; subtitle: string; saved: string }> = {
  ES: {
    title: 'Seleccionar Idioma',
    subtitle: 'Tu preferencia se guardará para futuras visitas',
    saved: 'Idioma guardado'
  },
  EN: {
    title: 'Select Language',
    subtitle: 'Your preference will be saved for future visits',
    saved: 'Language saved'
  },
  FR: {
    title: 'Sélectionner la langue',
    subtitle: 'Votre préférence sera enregistrée pour vos prochaines visites',
    saved: 'Langue enregistrée'
  },
  DE: {
    title: 'Sprache auswählen',
    subtitle: 'Ihre Auswahl wird für zukünftige Besuche gespeichert',
    saved: 'Sprache gespeichert'
  },
  PT: {
    title: 'Selecionar Idioma',
    subtitle: 'Sua preferência será salva para visitas futuras',
    saved: 'Idioma salvo'
  }
};

// =============================================
// COMPONENTE PRINCIPAL
// =============================================
const LanguageSelector = ({ currentLang, onLangChange }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];
  const t = translations[currentLang] || translations.ES;

  // =============================================
  // GESTIÓN DE TECLADO Y FOCUS
  // =============================================
  
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      isOpen && 
      contentRef.current && 
      !contentRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  // Focus trap dentro del modal
  const handleTabKey = useCallback((e: KeyboardEvent) => {
    if (!isOpen || e.key !== 'Tab') return;

    const focusableElements = contentRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }, [isOpen]);

  // =============================================
  // EFECTOS
  // =============================================
  
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleTabKey);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
      
      // Focus en el botón de cerrar al abrir
      requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTabKey);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleEscape, handleTabKey, handleClickOutside]);

  // =============================================
  // HANDLERS
  // =============================================
  
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const handleLangSelect = (langCode: string) => {
    // Guardar preferencia
    onLangChange(langCode);
    localStorage.setItem('dipromotions_lang', langCode);
    document.documentElement.lang = langCode.toLowerCase();
    
    // Mostrar confirmación
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 2000);
    
    // Cerrar modal
    setIsOpen(false);
    triggerRef.current?.focus();
    
    // Emitir evento global para otros componentes
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language: langCode } 
    }));
  };

  // =============================================
  // RENDER
  // =============================================
  
  return (
    <>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        onClick={handleOpen}
        className="flex items-center gap-2 text-sm hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
        aria-label={`Idioma actual: ${currentLanguage.label}. Clic para cambiar idioma`}
        aria-expanded={isOpen}
        aria-controls="language-modal"
        aria-haspopup="dialog"
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium">{currentLanguage.flag} {currentLanguage.code}</span>
      </button>

      {/* Saved Notification */}
      {showSaved && (
        <div 
          className="fixed top-4 right-4 z-[10000] bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in"
          role="status"
          aria-live="polite"
        >
          <Check className="w-4 h-4" />
          <span className="text-sm font-medium">{t.saved}</span>
        </div>
      )}

      {/* Modal Overlay */}
      {isOpen && (
        <div
          ref={overlayRef}
          id="language-modal"
          className="fixed inset-0 z-[2147483647] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lang-modal-title"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <div
            ref={contentRef}
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-scale-in"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-700">
              <h2 
                id="lang-modal-title" 
                className="text-xl font-semibold text-gray-900 dark:text-white"
              >
                {t.title}
              </h2>
              <button
                ref={closeButtonRef}
                onClick={handleClose}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#e30614]"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Language Options */}
            <div className="p-4" role="radiogroup" aria-label="Idiomas disponibles">
              <div className="space-y-2">
                {languages.map((lang, index) => {
                  const isSelected = currentLang === lang.code;
                  
                  return (
                    <button
                      key={lang.code}
                      onClick={() => handleLangSelect(lang.code)}
                      className={`
                        w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left 
                        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#e30614]
                        ${isSelected
                          ? 'bg-red-50 dark:bg-red-900/20 text-[#e30614] ring-2 ring-[#e30614]'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                        }
                      `}
                      role="radio"
                      aria-checked={isSelected}
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      <span className="text-2xl" aria-hidden="true">{lang.flag}</span>
                      <div className="flex-1">
                        <span className="font-medium block">{lang.nativeLabel}</span>
                        {lang.label !== lang.nativeLabel && (
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {lang.label}
                          </span>
                        )}
                      </div>
                      {isSelected && (
                        <Check className="w-5 h-5 text-[#e30614]" aria-hidden="true" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                {t.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Estilos de animación */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateX(20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default LanguageSelector;
