import type { Language } from '../../types/navigation';

type HeaderToolsProps = {
  lang: Language;
  onToggleLang: () => void;
  className?: string;
};

export function HeaderTools({ lang, onToggleLang, className = '' }: HeaderToolsProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <button
        type="button"
        onClick={onToggleLang}
        aria-label="Alternar idioma"
        className="cursor-pointer rounded-full border border-(--line) bg-transparent px-3 py-1.5 font-(--font-mono) text-xs font-medium text-(--ink) transition-colors hover:border-(--blue)"
      >
        {lang === 'pt' ? 'PT / EN' : 'EN / PT'}
      </button>
    </div>
  );
}
