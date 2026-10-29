import { useState } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import type { Language } from '../../types/navigation';
import { HeaderTools } from './HeaderTools';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { Nav } from './Nav';
import { NAV_LINKS } from './nav-links';

export function Header() {
  const [lang, setLang] = useState<Language>('pt');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.id));

  function toggleLang() {
    setLang((current) => (current === 'pt' ? 'en' : 'pt'));
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-20 border-b border-(--line) bg-(--card) backdrop-blur-lg">
        <div className="mx-auto flex h-[63px] max-w-[1160px] items-center justify-between gap-6 px-5">
          <Logo />
          <div className="flex items-center gap-5">
            <Nav lang={lang} activeId={activeId} className="hidden gap-1 lg:flex" />
            <HeaderTools lang={lang} onToggleLang={toggleLang} className="hidden lg:flex" />
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={isMenuOpen}
              aria-controls="drawer"
              className="relative block h-[42px] w-[42px] cursor-pointer rounded-[10px] border border-(--line) bg-transparent text-(--ink) lg:hidden"
            >
              <span className="absolute left-[11px] top-[19px] h-0.5 w-[18px] rounded-full bg-current" />
              <span className="absolute left-[11px] top-[13px] h-0.5 w-[18px] rounded-full bg-current" />
              <span className="absolute left-[11px] top-[25px] h-0.5 w-[18px] rounded-full bg-current" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        lang={lang}
        activeId={activeId}
        onClose={() => setIsMenuOpen(false)}
        onToggleLang={toggleLang}
      />
    </>
  );
}
