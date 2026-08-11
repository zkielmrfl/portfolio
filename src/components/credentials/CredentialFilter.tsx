import type { CredentialType } from "@/types/credential";
import { cx } from "@/lib/utils";

export function CredentialFilter({
  filters,
  active,
  onChange
}: {
  filters: Array<"All" | CredentialType>;
  active: "All" | CredentialType;
  onChange: (filter: "All" | CredentialType) => void;
}) {
  return (
    <div className="filter-row" aria-label="Credential filters">
      {filters.map((filter) => (
        <button key={filter} className={cx("filter-chip", active === filter && "active")} type="button" onClick={() => onChange(filter)}>
          {filter}
        </button>
      ))}
    </div>
  );
}
