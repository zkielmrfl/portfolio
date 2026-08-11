export type ProjectCategory = "PERSONAL" | "ACADEMIC" | "EVENT";
export type ProjectStatus = "DEPLOYED" | "IN DEVELOPMENT" | "ARCHIVED";

export interface Project {
  slug: string;
  name: string;
  icon: string;
  role: string;
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  tech: string[];
  links: {
    github?: string;
    live?: string;
  };
  caseStudy: {
    problem: string;
    solution: string;
    role: string;
    process: string[];
    challenges: string[];
    outcome: string;
    learned: string;
  };
}
