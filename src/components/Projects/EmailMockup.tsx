export function EmailMockup() {
  return (
    <>
      <div className="border-b border-(--line) pb-2.5 font-(--font-mono) text-xs text-(--muted)">
        Assunto: <b className="font-medium text-(--ice)">sua oferta chegou</b>
      </div>
      <div className="h-[70px] rounded-md bg-(--bg-2)" />
      <div className="h-2 w-4/5 rounded-full bg-(--line)" />
      <div className="h-2 w-3/5 rounded-full bg-(--line)" />
      <div className="h-8 w-[36%] rounded-md bg-(--blue)" />
    </>
  );
}
