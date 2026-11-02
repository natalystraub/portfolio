const CHIPS = ['Performance', 'SEO', 'Responsivo'];

export function LandingMockup() {
  return (
    <>
      <div className="h-5 w-3/4 rounded-sm bg-(--ink)" />
      <div className="h-2 w-[55%] rounded-full bg-(--line)" />
      <div className="h-8 w-[34%] rounded-md bg-(--blue)" />
      <div className="grid grid-cols-3 gap-2">
        <div className="h-10 rounded-md border border-(--line) bg-(--bg-2)" />
        <div className="h-10 rounded-md border border-(--line) bg-(--bg-2)" />
        <div className="h-10 rounded-md border border-(--line) bg-(--bg-2)" />
      </div>
      <div className="flex flex-wrap gap-2">
        {CHIPS.map((label) => (
          <span
            key={label}
            className="rounded-md border border-(--blue) px-2.5 py-1 font-(--font-mono) text-[11.5px] font-medium text-(--ice)"
          >
            {label}
          </span>
        ))}
      </div>
    </>
  );
}
