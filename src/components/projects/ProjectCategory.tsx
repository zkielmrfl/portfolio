import type { ProjectCategory as Category } from "@/types/project";

export function ProjectCategory({ category }: { category: Category }) {
  return <span className="meta-pill">CATEGORY: {category}</span>;
}
