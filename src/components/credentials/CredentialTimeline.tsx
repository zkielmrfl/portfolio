import type { Credential } from "@/types/credential";
import { CredentialCard } from "./CredentialCard";

export function CredentialTimeline({ credentials }: { credentials: Credential[] }) {
  return (
    <div className="timeline">
      {credentials.map((credential) => <CredentialCard key={credential.id} credential={credential} />)}
    </div>
  );
}
