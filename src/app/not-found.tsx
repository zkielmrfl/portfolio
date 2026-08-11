import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="panel">
        <p className="eyebrow">ERROR // ROUTE NOT FOUND</p>
        <h1>Module unavailable.</h1>
        <Link className="btn primary" href="/">Return home</Link>
      </div>
    </main>
  );
}
