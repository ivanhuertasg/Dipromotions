// =============================================
// CONTEXT DE IDIOMA - diPromotions
// =============================================

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations, supportedLanguages, defaultLanguage, type Language } from '../lib/i18n';

interface LanguageContextType {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  supportedLanguages: typeof supportedLanguages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'dipromotions_language';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY) as Language;
      if (stored && translations[stored]) {
        return stored;
      }
    }
    return defaultLanguage;
  });

  const setLanguage = useCallback((lang: Language) => {
    setCurrentLang(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    }
  }, []);

  // Inicializar lang del documento
  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Función de traducción
  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      const keys = key.split('.');
      let value: unknown = translations[currentLang];

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          // Fallback al español
          value = translations[defaultLanguage];
          for (const fk of keys) {
            if (value && typeof value === 'object' && fk in value) {
              value = (value as Record<string, unknown>)[fk];
            } else {
              return key; // Retornar la clave si no se encuentra
            }
          }
          break;
        }
      }

      if (typeof value === 'string') {
        // Reemplazar parámetros
        if (params) {
          return Object.entries(params).reduce((acc, [paramKey, paramValue]) => {
            return acc.replace(new RegExp(`{${paramKey}}`, 'g'), String(paramValue));
          }, value);
        }
        return value;
      }

      return key;
    },
    [currentLang]
  );

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        setLanguage,
        t,
        supportedLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
}

export default LanguageContext;
