import type { Credential } from "@/types/credential";

export function CredentialDetails({ credential }: { credential: Credential }) {
  const rows = getCredentialRows(credential);

  return (
    <dl className="credential-details">
      {rows.map((row) => (
        <div key={row.label}>
          {row.label ? <dt>{row.label}</dt> : null}
          <dd className={!row.label ? "full-row" : undefined}>{row.value}</dd>
        </div>
      ))}
      {credential.link ? <a className="inline-link" href={credential.link} target="_blank">View Credential</a> : null}
    </dl>
  );
}

function getCredentialRows(credential: Credential) {
  switch (credential.type) {
    case "Education":
      return [
        { label: "University", value: credential.university },
        { label: "Program & Span Year", value: `${credential.program} ${credential.spanYear}` }
        //,{ label: "Award", value: credential.award }
      ];
    case "Certifications":
      return [
        { label: "Certificate", value: credential.certificateName },
        { label: "Date Issued", value: credential.dateIssued }
      ];
    case "Organizations":
      return [
        { label: "Organization", value: credential.organizationName },
        { label: "Years Attended", value: credential.yearsAttended },
        { label: "Position", value: credential.position }
      ];
    case "Events":
      return [
        { label: "Event", value: credential.eventName },
        { label: "Date Happened", value: credential.dateHappened },
        { label: "Involvement", value: credential.involvement }
      ];
    case "Achievements":
      return [
        { label: "Achievement", value: credential.achievementName },
        { label: "Date Issued", value: credential.dateIssued },
        { label: "Award", value: credential.award }
      ];
  }
}
