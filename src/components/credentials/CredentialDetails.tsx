import type { Credential } from "@/types/credential";

export function CredentialDetails({ credential }: { credential: Credential }) {
  return (
    <>
      <p>{credential.date}</p>
      <p>{credential.details}</p>
      {credential.link ? <a className="inline-link" href={credential.link} target="_blank">View Credential</a> : null}
    </>
  );
}
