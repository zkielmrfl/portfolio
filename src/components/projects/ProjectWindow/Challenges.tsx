export function Challenges({ challenges }: { challenges: string[] }) {
  return (
    <section className="modal-section">
      <h4>Challenges</h4>
      <ul>{challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul>
    </section>
  );
}
