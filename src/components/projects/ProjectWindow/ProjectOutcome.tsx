export function ProjectOutcome({ outcome }: { outcome: string }) {
  return (
    <section className="modal-section">
      <h4>Outcome</h4>
      <p>{outcome}</p>
    </section>
  );
}
