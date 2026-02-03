import { useState, useEffect, useRef, useCallback } from 'react';
import { Globe, X, Check } from 'lucide-react';

interface Language {
  code: string;
  label: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'ES', label: 'Español', flag: '🇪🇸' },
  { code: 'EN', label: 'English', flag: '🇬🇧' },
  { code: 'FR', label: 'Français', flag: '🇫🇷' },
  { code: 'DE', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'PT', label: 'Português', flag: '🇵🇹' },
];

interface LanguageSelectorProps {
  currentLang: string;
  onLangChange: (lang: string) => void;
}

const LanguageSelector = ({ currentLang, onLangChange }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  // Handle escape key
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  // Handle click outside
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
      
      // Focus trap - focus close button when opened
      setTimeout(() => {
        const closeBtn = contentRef.current?.querySelector('[data-close-btn]') as HTMLElement;
        closeBtn?.focus();
      }, 100);
    } else {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleEscape, handleClickOutside]);

  const handleLangSelect = (langCode: string) => {
    onLangChange(langCode);
    localStorage.setItem('dipromotions_lang', langCode);
    document.documentElement.lang = langCode.toLowerCase();
    setIsOpen(false);
    triggerRef.current?.focus();
    
    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language: langCode } 
    }));
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
        className={`flex items-center gap-2 text-sm hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all duration-200 ${
          isOpen ? 'bg-white/10' : ''
        }`}
        aria-label="Seleccionar idioma"
        aria-expanded={isOpen}
        aria-controls="language-overlay"
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium">{currentLanguage.code}</span>
      </button>

      {/* Overlay Modal */}
      {isOpen && (
        <div
          ref={overlayRef}
          id="language-overlay"
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lang-title"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
            style={{ animation: 'fadeIn 0.3s ease' }}
          />

          {/* Modal Content */}
          <div
            ref={contentRef}
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-[90%] max-h-[80vh] overflow-hidden"
            style={{ 
              animation: 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-700">
              <h3 
                id="lang-title" 
                className="text-lg font-semibold text-gray-900 dark:text-white"
              >
                Seleccionar Idioma
              </h3>
              <button
                data-close-btn
                onClick={() => {
                  setIsOpen(false);
                  triggerRef.current?.focus();
                }}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Language Options */}
            <div className="p-3 space-y-1">
              {languages.map((lang, index) => (
                <button
                  key={lang.code}
                  onClick={() => handleLangSelect(lang.code)}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all duration-200 ${
                    currentLang === lang.code
                      ? 'bg-red-50 dark:bg-red-900/20 text-[#e30614]'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                  style={{
                    animation: `slideUp 0.3s ease ${index * 0.05}s both`
                  }}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="flex-1 font-medium">{lang.label}</span>
                  {currentLang === lang.code && (
                    <Check className="w-5 h-5 text-[#e30614]" />
                  )}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Tu preferencia se guardará para futuras visitas
              </p>
            </div>
          </div>
        </div>
      )}

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
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default LanguageSelector;
