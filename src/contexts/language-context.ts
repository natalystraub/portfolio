import { createContext } from 'react';
import type { Language } from '../types/navigation';

export type LanguageContextValue = {
  lang: Language;
  toggleLang: () => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);
