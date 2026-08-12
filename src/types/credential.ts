export type CredentialType = "Education" | "Certifications" | "Organizations" | "Events" | "Achievements";

interface BaseCredential {
  id: string;
  type: CredentialType;
  image?: string;
  imageAlt?: string;
  link?: string;
}

export interface EducationCredential extends BaseCredential {
  type: "Education";
  university: string;
  program: string;
  spanYear: string;
  award: string;
}

export interface CertificationCredential extends BaseCredential {
  type: "Certifications";
  certificateName: string;
  dateIssued: string;
}

export interface OrganizationCredential extends BaseCredential {
  type: "Organizations";
  organizationName: string;
  yearsAttended: string;
  position: string;
}

export interface EventCredential extends BaseCredential {
  type: "Events";
  eventName: string;
  dateHappened: string;
  involvement: string;
}

export interface AchievementCredential extends BaseCredential {
  type: "Achievements";
  achievementName: string;
  dateIssued: string;
  award: string;
}

export type Credential =
  | EducationCredential
  | CertificationCredential
  | OrganizationCredential
  | EventCredential
  | AchievementCredential;
