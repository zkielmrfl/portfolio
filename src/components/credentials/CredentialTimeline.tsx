import type { Credential } from "@/types/credential";
import { CredentialCard } from "./CredentialCard";

const groupedTypes = ["Education", "Certifications", "Organizations", "Events", "Achievements"] as const;

export function CredentialTimeline({ credentials, grouped = false }: { credentials: Credential[]; grouped?: boolean }) {
  if (grouped) {
    return (
      <div className="credential-groups">
        {groupedTypes.map((type) => {
          const group = credentials.filter((credential) => credential.type === type);
          if (group.length === 0) return null;

          return (
            <section className="credential-group" key={type}>
              <header className="credential-group-header">
                <h3>{type}</h3>
              </header>
              <div className="timeline">
                {group.map((credential) => <CredentialCard key={credential.id} credential={credential} />)}
              </div>
            </section>
          );
        })}
      </div>
    );
  }

  return (
    <div className="timeline">
      {credentials.map((credential) => <CredentialCard key={credential.id} credential={credential} />)}
    </div>
  );
}
