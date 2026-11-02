import { useState, type ReactNode } from 'react';
import type { Language } from '../types/navigation';
import { LanguageContext } from './language-context';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('pt');

  function toggleLang() {
    setLang((current) => (current === 'pt' ? 'en' : 'pt'));
  }

  return <LanguageContext.Provider value={{ lang, toggleLang }}>{children}</LanguageContext.Provider>;
}
