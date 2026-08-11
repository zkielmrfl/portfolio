import { skills } from "@/data/skills";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillsGrid } from "@/components/skills/SkillsGrid";

export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeader kicker="04 // INSTALLED MODULES" title="Skills & Technologies" copy="Grouped by real technology areas, without arbitrary percentage bars." />
      <SkillsGrid categories={skills} />
    </section>
  );
}
