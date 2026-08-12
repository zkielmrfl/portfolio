"use client";

import { useMemo, useState } from "react";
import { credentials } from "@/data/credentials";
import type { CredentialType } from "@/types/credential";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CredentialFilter } from "@/components/credentials/CredentialFilter";
import { CredentialTimeline } from "@/components/credentials/CredentialTimeline";

const filters: Array<"All" | CredentialType> = ["All", "Education", "Certifications", "Organizations", "Events", "Achievements"];

export function Credentials() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(() => filter === "All" ? credentials : credentials.filter((item) => item.type === filter), [filter]);
  return (
    <section id="credentials" className="section credentials-section">
      <SectionHeader kicker="05 // CREDENTIAL LOG" title="Credentials" copy="Education, certifications, organizations, events, and achievements in one expandable log." />
      <CredentialFilter filters={filters} active={filter} onChange={setFilter} />
      <CredentialTimeline credentials={visible} grouped={filter === "All"} />
    </section>
  );
}
