import type { ReactNode } from 'react';

type BrowserWindowProps = {
  url: string;
  children: ReactNode;
};

export function BrowserWindow({ url, children }: BrowserWindowProps) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-(--line) bg-(--card-solid) shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-1.5 border-b border-(--line) bg-(--bg-2) px-3.5 py-2.5">
        <i className="h-2.5 w-2.5 rounded-full bg-(--line)" />
        <i className="h-2.5 w-2.5 rounded-full bg-(--line)" />
        <i className="h-2.5 w-2.5 rounded-full bg-(--line)" />
        <em className="ml-2.5 max-w-[240px] flex-1 truncate rounded-md bg-(--bg) px-3 py-[3px] font-(family-name:--font-mono) text-xs not-italic text-(--muted)">
          {url}
        </em>
      </div>
      <div className="grid min-h-[220px] content-start gap-2.5 p-4 sm:min-h-[240px]">{children}</div>
    </div>
  );
}
