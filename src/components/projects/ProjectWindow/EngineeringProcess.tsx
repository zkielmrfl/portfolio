export function EngineeringProcess({ steps }: { steps: string[] }) {
  return (
    <section className="modal-section">
      <h4>Engineering Process</h4>
      <ul>{steps.map((step) => <li key={step}>{step}</li>)}</ul>
    </section>
  );
}
