export function ProjectLessons({ learned }: { learned: string }) {
  return (
    <section className="modal-section">
      <h4>What I Learned</h4>
      <p>{learned}</p>
    </section>
  );
}
