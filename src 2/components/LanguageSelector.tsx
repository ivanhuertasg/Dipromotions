// =============================================
// SELECTOR DE IDIOMA - diPromotions
// =============================================
// Este componente SOLO es el selector visual
// Usa el context de ../context/LanguageContext

import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Globe, X, Check } from 'lucide-react';
import { useLanguage, supportedLanguages, type Language } from '../context/LanguageContext';

// Traducciones del modal
const modalTranslations: Record<Language, { title: string; subtitle: string; saved: string }> = {
  es: { title: 'Seleccionar Idioma', subtitle: 'Tu preferencia se guardará para futuras visitas', saved: 'Idioma guardado' },
  en: { title: 'Select Language', subtitle: 'Your preference will be saved for future visits', saved: 'Language saved' },
  fr: { title: 'Sélectionner la langue', subtitle: 'Votre préférence sera enregistrée', saved: 'Langue enregistrée' },
  de: { title: 'Sprache auswählen', subtitle: 'Ihre Auswahl wird gespeichert', saved: 'Sprache gespeichert' },
  it: { title: 'Seleziona Lingua', subtitle: 'La tua preferenza verrà salvata', saved: 'Lingua salvata' },
  pt: { title: 'Selecionar Idioma', subtitle: 'Sua preferência será salva', saved: 'Idioma salvo' }
};

const LanguageSelector = () => {
  const { currentLang, setLanguage } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const currentLanguage = supportedLanguages.find(l => l.code === currentLang) || supportedLanguages[0];
  const modalT = modalTranslations[currentLang] || modalTranslations.es;

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
    if (isOpen && contentRef.current && !contentRef.current.contains(e.target as Node)) {
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  }, [isOpen]);

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
      requestAnimationFrame(() => closeButtonRef.current?.focus());
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
  
  const handleOpen = () => setIsOpen(true);
  
  const handleClose = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const handleLangSelect = (langCode: Language) => {
    setLanguage(langCode);
    
    // Mostrar confirmación
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 2000);
    
    // Cerrar modal
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  // =============================================
  // RENDER
  // =============================================
  
  const modalContent = (
    <div
      id="language-modal"
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lang-modal-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        style={{ animation: 'fadeIn 0.2s ease-out forwards' }}
        aria-hidden="true"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div
        ref={contentRef}
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        style={{ animation: 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-700">
          <h2 id="lang-modal-title" className="text-xl font-semibold text-gray-900 dark:text-white">
            {modalT.title}
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
            {supportedLanguages.map((lang, index) => {
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
                    animation: 'slideUp 0.3s ease forwards',
                    animationDelay: `${index * 50}ms`,
                    opacity: 0
                  }}
                >
                  <span className="text-2xl" aria-hidden="true">{lang.flag}</span>
                  <div className="flex-1">
                    <span className="font-medium block">{lang.name}</span>
                  </div>
                  {isSelected && <Check className="w-5 h-5 text-[#e30614]" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{modalT.subtitle}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        onClick={handleOpen}
        className="flex items-center gap-2 text-sm hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
        aria-label={`Idioma actual: ${currentLanguage.name}. Clic para cambiar idioma`}
        aria-expanded={isOpen}
        aria-controls="language-modal"
        aria-haspopup="dialog"
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium">{currentLanguage.flag} {currentLanguage.code.toUpperCase()}</span>
      </button>

      {/* Saved Notification */}
      {showSaved && (
        <div 
          className="fixed top-4 right-4 z-[1000000] bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
          style={{ animation: 'slideIn 0.3s ease-out forwards' }}
          role="status"
          aria-live="polite"
        >
          <Check className="w-4 h-4" />
          <span className="text-sm font-medium">{modalT.saved}</span>
        </div>
      )}

      {/* Modal Portal */}
      {isOpen && typeof document !== 'undefined' && createPortal(modalContent, document.body)}

      {/* Estilos de animación */}
      <style>{`
        @keyframes fadeIn { 
          from { opacity: 0; } 
          to { opacity: 1; } 
        }
        @keyframes scaleIn { 
          from { opacity: 0; transform: scale(0.95) translateY(10px); } 
          to { opacity: 1; transform: scale(1) translateY(0); } 
        }
        @keyframes slideIn { 
          from { opacity: 0; transform: translateX(20px); } 
          to { opacity: 1; transform: translateX(0); } 
        }
        @keyframes slideUp { 
          from { opacity: 0; transform: translateY(10px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
      `}</style>
    </>
  );
};

export default LanguageSelector;
