export function TechStack({ tech }: { tech: string[] }) {
  return (
    <section className="modal-section">
      <h4>Technologies</h4>
      <div className="tag-cloud">
        {tech.map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}
