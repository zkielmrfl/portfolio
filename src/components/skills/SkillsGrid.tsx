import type { SkillCategory as SkillCategoryType } from "@/types/skill";
import { SkillCategory } from "./SkillCategory";

export function SkillsGrid({ categories }: { categories: SkillCategoryType[] }) {
  return (
    <div className="skills-grid">
      {categories.map((category) => <SkillCategory key={category.name} category={category} />)}
    </div>
  );
}
