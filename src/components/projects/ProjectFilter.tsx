import type { ProjectCategory } from "@/types/project";
import { cx } from "@/lib/utils";

export function ProjectFilter({
  categories,
  active,
  onChange
}: {
  categories: Array<"ALL" | ProjectCategory>;
  active: "ALL" | ProjectCategory;
  onChange: (category: "ALL" | ProjectCategory) => void;
}) {
  return (
    <div className="filter-row" role="tablist" aria-label="Project categories">
      {categories.map((category) => (
        <button key={category} className={cx("filter-chip", active === category && "active")} type="button" onClick={() => onChange(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}
