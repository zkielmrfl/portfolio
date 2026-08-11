export function CaseStudySection({ title, copy }: { title: string; copy: string }) {
  return (
    <section className="case-section">
      <h4>{title}</h4>
      <p>{copy}</p>
    </section>
  );
}
