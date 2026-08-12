import type { Credential } from "@/types/credential";
import { CredentialDetails } from "./CredentialDetails";

export function CredentialCard({ credential }: { credential: Credential }) {
  const title = getCredentialTitle(credential);

  return (
    <article className="credential-card panel">
      <div className="credential-media">
        {credential.image ? <img src={credential.image} alt={credential.imageAlt ?? `${title} logo`} /> : <span>{getCredentialInitials(title)}</span>}
      </div>
      <div>
        <p className="eyebrow">{credential.type.toUpperCase()}</p>
        <h3>{title}</h3>
        <CredentialDetails credential={credential} />
      </div>
    </article>
  );
}

function getCredentialTitle(credential: Credential) {
  switch (credential.type) {
    case "Education":
      return credential.university;
    case "Certifications":
      return credential.certificateName;
    case "Organizations":
      return credential.organizationName;
    case "Events":
      return credential.eventName;
    case "Achievements":
      return credential.achievementName;
  }
}

function getCredentialInitials(title: string) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}
