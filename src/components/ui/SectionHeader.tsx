export function SectionHeader({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return (
    <header className="section-header">
      <h2>{title}</h2>
    </header>
  );
}
