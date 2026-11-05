import { useEffect, useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { STREAMERS, STREAMERS_PAGE_SIZE } from './mockups-content';

const LOADING_DELAY_MS = 550;

function getInitials(username: string) {
  return username
    .split('_')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export function StreamFilterMockup() {
  const { lang } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(STREAMERS_PAGE_SIZE);
  const [isLoading, setIsLoading] = useState(false);
  const isPt = lang === 'pt';
  const hasMore = visibleCount < STREAMERS.length;
  const liveCount = STREAMERS.filter((streamer) => streamer.isLive).length;
  const buttonLabel = getButtonLabel();

  useEffect(() => {
    if (!isLoading) return;

    const timer = window.setTimeout(() => {
      setVisibleCount((count) => count + STREAMERS_PAGE_SIZE);
      setIsLoading(false);
    }, LOADING_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [isLoading]);

  function getButtonLabel() {
    if (isLoading) return isPt ? 'Carregando…' : 'Loading…';
    if (hasMore) return isPt ? 'Ver mais' : 'Load more';
    return isPt ? 'Mostrar menos' : 'Show less';
  }

  function handleMore() {
    if (hasMore) {
      setIsLoading(true);
      return;
    }

    setVisibleCount(STREAMERS_PAGE_SIZE);
  }

  return (
    <div className="@container grid gap-3">
      <div className="flex flex-wrap items-end justify-between gap-x-3 gap-y-1">
        <div className="min-w-0">
          <strong className="block font-(family-name:--font-display) text-[17px] leading-tight text-(--ink)">
            {isPt ? 'Streamers de ' : 'Chess '}
            <span className="text-(--violet)">{isPt ? 'xadrez' : 'streamers'}</span>
          </strong>
          <span className="text-[12px] text-(--muted)">
            {isPt ? 'Vá direto para o canal de quem está ao vivo.' : 'Jump straight to whoever is live.'}
          </span>
        </div>
        <span className="flex items-center gap-1.5 font-(family-name:--font-mono) text-[11.5px] text-(--muted)">
          <i aria-hidden="true" className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff5c7a]" />
          {liveCount} {isPt ? 'ao vivo' : 'live'}
        </span>
      </div>

      <ul
        className="m-0 grid max-h-[256px] list-none grid-cols-2 gap-2 overflow-y-auto p-0 pr-0.5 @sm:grid-cols-3"
        aria-busy={isLoading}
      >
        {STREAMERS.slice(0, visibleCount).map((streamer) => (
          <li
            key={streamer.username}
            className="flex min-w-0 flex-col items-center gap-1.5 rounded-[10px] border border-(--line) bg-(--bg-2) px-2 py-3"
          >
            <span
              aria-hidden="true"
              className="grid h-10 w-10 place-items-center rounded-full bg-[linear-gradient(135deg,var(--blue),var(--violet))] font-(family-name:--font-display) text-[13px] font-bold text-white"
            >
              {getInitials(streamer.username)}
            </span>
            <span className="w-full truncate text-center text-[12.5px] font-semibold text-(--ink)">
              {streamer.username}
            </span>
            {streamer.isLive ? (
              <span className="whitespace-nowrap rounded-full bg-(--violet)/20 px-2 py-0.5 font-(family-name:--font-mono) text-[10.5px] font-medium text-(--ice)">
                ● LIVE<span className="hidden @[15rem]:inline"> · Twitch</span>
              </span>
            ) : (
              <span className="px-2 py-0.5 font-(family-name:--font-mono) text-[10.5px] text-(--muted)">offline</span>
            )}
          </li>
        ))}
        {isLoading &&
          Array.from({ length: STREAMERS_PAGE_SIZE }, (_, index) => (
            <li
              key={`skeleton-${index}`}
              aria-hidden="true"
              className="flex animate-pulse flex-col items-center gap-2 rounded-[10px] border border-(--line) px-2 py-3"
            >
              <span className="h-10 w-10 rounded-full bg-(--line)" />
              <span className="h-2.5 w-3/4 rounded bg-(--line)" />
              <span className="h-2.5 w-1/2 rounded bg-(--line)" />
            </li>
          ))}
      </ul>

      <button
        type="button"
        onClick={handleMore}
        disabled={isLoading}
        className="h-10 justify-self-center rounded-lg border border-(--line) bg-(--bg) px-4 text-[13px] font-semibold text-(--ink) transition-colors hover:border-(--blue) disabled:cursor-wait disabled:opacity-60"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
