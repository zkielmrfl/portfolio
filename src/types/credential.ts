export type CredentialType = "Education" | "Certifications" | "Organizations" | "Events" | "Achievements";

export interface Credential {
  id: string;
  year: string;
  type: CredentialType;
  title: string;
  issuer: string;
  date: string;
  details: string;
  link?: string;
}
