import { useEffect } from 'react';
import type { Language } from '../../types/navigation';
import { HeaderTools } from './HeaderTools';
import { Logo } from './Logo';
import { NAV_LINKS } from './nav-links';

type MobileMenuProps = {
  isOpen: boolean;
  lang: Language;
  activeId: string;
  onClose: () => void;
  onToggleLang: () => void;
};

export function MobileMenu({ isOpen, lang, activeId, onClose, onToggleLang }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      />
      <aside
        aria-label="Menu"
        aria-hidden={!isOpen}
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(320px,84%)] flex-col gap-1.5 overflow-y-auto border-l border-(--line) bg-(--bg-2) px-5 pt-4 pb-6 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-3 flex h-12 items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="relative h-[42px] w-[42px] cursor-pointer rounded-[10px] border border-(--line) bg-transparent text-(--ink)"
          >
            <span className="absolute left-[11px] top-[19px] h-0.5 w-[18px] rotate-45 rounded-full bg-current" />
            <span className="absolute left-[11px] top-[19px] h-0.5 w-[18px] -rotate-45 rounded-full bg-current" />
          </button>
        </div>
        <nav aria-label="Seções" className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={onClose}
              className={`border-b border-(--line) px-1 py-3.5 font-(--font-display) text-xl font-semibold tracking-[-0.015em] no-underline ${
                activeId === link.id ? 'text-(--blue)' : 'text-(--ink)'
              }`}
            >
              {lang === 'pt' ? link.labelPt : link.labelEn}
            </a>
          ))}
        </nav>
        <HeaderTools lang={lang} onToggleLang={onToggleLang} className="mt-auto pt-6" />
      </aside>
    </>
  );
}
