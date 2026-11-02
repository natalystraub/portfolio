const ROWS: [string, string][] = [
  ['80%', '50%'],
  ['70%', '60%'],
  ['85%', '40%'],
];

export function ApiMockup() {
  return (
    <>
      <div className="rounded-lg border border-(--blue) bg-(--blue)/10 px-3 py-2.5 font-(family-name:--font-mono) text-[12.5px] leading-[1.6] text-(--ice)">
        GET /api/produtos
      </div>
      <pre className="m-0 overflow-hidden rounded-lg bg-(--bg-2) px-3 py-2.5 font-(family-name:--font-mono) text-xs leading-[1.6] whitespace-pre-wrap text-(--muted)">
        {'[ { "id": 1, "nome": "..." },\n  { "id": 2, "nome": "..." } ]'}
      </pre>
      <div className="grid grid-cols-3 gap-2">
        {ROWS.map(([lineOneWidth, lineTwoWidth], index) => (
          <div key={index} className="rounded-[10px] border border-(--line) px-3 py-2.5">
            <div className="mb-1 h-2 rounded bg-(--line)" style={{ width: lineOneWidth }} />
            <div className="h-2 rounded bg-(--line)" style={{ width: lineTwoWidth }} />
          </div>
        ))}
      </div>
    </>
  );
}
