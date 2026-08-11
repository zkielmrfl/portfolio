import type { Credential } from "@/types/credential";
import { CredentialDetails } from "./CredentialDetails";

export function CredentialCard({ credential }: { credential: Credential }) {
  return (
    <article className="credential-card panel">
      <span className="year">{credential.year}</span>
      <div>
        <p className="eyebrow">{credential.type.toUpperCase()} // {credential.issuer}</p>
        <h3>{credential.title}</h3>
        <CredentialDetails credential={credential} />
      </div>
    </article>
  );
}
