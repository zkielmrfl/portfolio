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
  },
  {
    slug: "ai-study-assistant",
    name: "AI Study Assistant",
    icon: "AI",
    role: "Prototype Developer",
    category: "PERSONAL",
    status: "IN DEVELOPMENT",
    description: "Sample placeholder for an AI-assisted study workflow project.",
    tech: ["React", "TypeScript", "AI"],
    links: {},
    caseStudy: {
      problem: "Students need a faster way to organize notes, questions, and review prompts.",
      solution: "Prototype an assistant-style interface for study planning and concept review.",
      role: "Define the user flow, interface modules, and placeholder AI interaction design.",
      process: ["Map study workflow", "Design chat and note modules", "Prototype review states"],
      challenges: ["Keeping AI suggestions understandable", "Avoiding unnecessary complexity"],
      outcome: "A sample project slot you can replace with a real AI or learning tool later.",
      learned: "Good AI interfaces still need strong UX structure and clear user control."
    }
  },
  {
    slug: "inventory-dashboard",
    name: "Inventory Dashboard",
    icon: "ID",
    role: "Full-Stack Developer",
    category: "ACADEMIC",
    status: "DEPLOYED",
    description: "Sample placeholder for a CRUD dashboard or database-backed class project.",
    tech: ["PHP", "MySQL", "CSS", "Git"],
    links: {},
    caseStudy: {
      problem: "Teams need a clearer way to track items, statuses, and updates.",
      solution: "Build a dashboard-style interface for creating, updating, and reviewing records.",
      role: "Plan the data model, build the core screens, and test common update flows.",
      process: ["Sketch database tables", "Create CRUD screens", "Validate form states"],
      challenges: ["Designing simple data relationships", "Keeping forms readable on mobile"],
      outcome: "A sample dashboard project slot for testing carousel scaling and animation.",
      learned: "Data-heavy tools work best when actions, filters, and status labels are predictable."
    }
  }
];
