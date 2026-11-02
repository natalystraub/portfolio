type ToastProps = {
  message: string;
  visible: boolean;
};

export function Toast({ message, visible }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`pointer-events-none fixed bottom-[calc(env(safe-area-inset-bottom,0px)+26px)] left-1/2 z-40 max-w-[calc(100%-32px)] -translate-x-1/2 rounded-[10px] bg-(--ink) px-5 py-[11px] text-[15px] font-semibold text-(--bg) transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0'
      }`}
    >
      {message}
    </div>
  );
}
