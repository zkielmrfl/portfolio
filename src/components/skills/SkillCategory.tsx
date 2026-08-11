import type { SkillCategory as SkillCategoryType } from "@/types/skill";
import { SkillModule } from "./SkillModule";

export function SkillCategory({ category }: { category: SkillCategoryType }) {
  return (
    <article className="panel skill-category">
      <h3>{category.name}</h3>
      <div>
        {category.skills.map((skill) => <SkillModule key={skill} name={skill} />)}
      </div>
    </article>
  );
}
