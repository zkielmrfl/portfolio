import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "portfolio-os",
    name: "Portfolio OS",
    icon: "PO",
    role: "Frontend Engineer",
    category: "PERSONAL",
    status: "IN DEVELOPMENT",
    description: "A personal portfolio designed as an interactive engineering workstation.",
    tech: ["Next.js", "React", "TypeScript", "CSS"],
    links: { github: "https://github.com/" },
    caseStudy: {
      problem: "A traditional resume page would not show software engineering taste or interactivity.",
      solution: "Built a modular portfolio with themed panels, project windows, lab widgets, and structured data.",
      role: "Designed the UI system, component architecture, data model, and interactions.",
      process: ["Separated content from UI", "Created reusable mechanical panels", "Added accessible filters and dialogs"],
      challenges: ["Balancing futuristic visuals with recruiter readability", "Keeping animations lightweight"],
      outcome: "A scalable foundation ready for real projects, credentials, images, and resume content.",
      learned: "Clear data boundaries make a portfolio easier to maintain as experience grows."
    }
  },
  {
    slug: "academic-system",
    name: "Academic System",
    icon: "AS",
    role: "Student Developer",
    category: "ACADEMIC",
    status: "ARCHIVED",
    description: "Placeholder for a university project or coursework build.",
    tech: ["Java", "SQL", "Git"],
    links: {},
    caseStudy: {
      problem: "Replace this with the real academic problem you solved.",
      solution: "Describe the application, algorithm, or system you built.",
      role: "Clarify your individual contributions, especially for team projects.",
      process: ["Planning", "Implementation", "Testing"],
      challenges: ["Add a real technical challenge once available"],
      outcome: "Use real outcomes only; do not invent metrics.",
      learned: "Document the engineering lesson this project taught you."
    }
  },
  {
    slug: "event-toolkit",
    name: "Event Toolkit",
    icon: "ET",
    role: "Builder",
    category: "EVENT",
    status: "IN DEVELOPMENT",
    description: "Placeholder for a hackathon, workshop, or event project.",
    tech: ["Python", "HTML", "CSS"],
    links: {},
    caseStudy: {
      problem: "State the event challenge or goal.",
      solution: "Describe what was built during the event.",
      role: "Add your specific responsibilities.",
      process: ["Rapid prototyping", "Iteration", "Presentation"],
      challenges: ["Time constraints", "Scope control"],
      outcome: "Add real event results or remove this line later.",
      learned: "Capture what the event changed about how you build."
    }
  }
];
