export function SectionHeader({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return (
    <header className="section-header">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </header>
  );
}
