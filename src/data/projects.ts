import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "artemis-system",
    name: "Artemis",
    icon: "AS",
    image: "/images/projects/artemis-system/cover.png",
    role: "Frontend Engineer",
    category: "EVENT",
    status: "DEPLOYED",
    description: "A classic space rocket shooting arcade game. We created this game in participation in a school based Hackathon by ACM",
    tech: ["Python", "Javascript", "CSS"],
    links: { live: "https://error-404-hackathon.vercel.app/" },
    caseStudy: {
      problem: "We are tasked to create a game to escape boredom or just to pass by time.",
      solution: "I together with my team created a classic game in response.",
      role: "Designed the UI system, pointing system, boss levels, and interactions.",
      process: ["Analyzed the problem given", "Creates a basic game structure", "Execute the coding and development"],
      challenges: ["Balancing the damage input and output", "Creating a unique scenarios to keep user engaged"],
      outcome: "We successfully created and deployed our first ever game and we are satisfied on how it turned out.",
      learned: "Althoug we did not made it into pitching stage of the event, we gained alot of experience, insights, and advance techniques that we can use in future hackathons."
    }
  },
  {
    slug: "translator-system",
    name: "Kumpas",
    icon: "KM",
    image: "/images/projects/translator-system/cover.png",
    role: "Frontend Engineer",
    category: "EVENT",
    status: "DEPLOYED",
    description: "A website dedicated in translating sing languages in to text and different dialects in the Philippines.",
    tech: ["TensorFlow", "MediaPipe Hands", "React", "Railway", "Tailwind CSS", "vite"],
    links: { live: "https://kumpas-translator.vercel.app/"},
    caseStudy: {
      problem: "The event required us to solve a problem regarding the language barrier in the different dialects in the Philippines.",
      solution: "My team decided to take it into next level, by using sign language and translating it into different dialects",
      role: "I mainly designed the theme, color schemes, and overall structure of webiste.",
      process: ["Identifying feasible dialects", "Training the translation system", "Deployment"],
      challenges: ["The real challenge is the training of the machine to translate gestures."],
      outcome: "The machine we put in the system successfully reads the movements and translate it only very few words.",
      learned: "This experience teaches me to think outside the box, make possibilities and opportunities to showcase your idea no matter how hard it looked like."
    }
  },
  {
    slug: "lost-and-found-system",
    name: "FEUREKA",
    icon: "FR",
    image: "/images/projects/lost-and-found-system/cover.png",
    role: "Administrator Systems Developer",
    category: "ACADEMIC",
    status: "DEPLOYED",
    description: "FEUreka is a web-based Lost and Found Management System developed for the FEU Institute of Technology community.",
    tech: ["Php", "HTML", "CSS", "Javascript"],
    links: {live: "https://feureka.page.gd/"},
    caseStudy: {
      problem: "Lost-and-found processes within educational institutions are often handled manually through verbal inquiries, paper logs, or informal social media posts.",
      solution: "FEUreka provides a comprehensive set of features that support the reporting, management, and retrieval of lost and found items within the FEU Institute of Technology.",
      role: "I created all of the features and systems regarding the administrator dashboard and control.",
      process: ["System Architechture", "Database Schemas", "Merging of branches and testing"],
      challenges: ["Time contraint", "Limited tech stack"],
      outcome: "FEUreka provides a comprehensive set of features that support the reporting, management, and retrieval of lost and found items within the FEU Institute of Technology.",
      learned: "this journey reinforced that successful software development is built on more than just technical proficiency; it requires collaborative accountability, thorough planning, and a resilient approach to troubleshooting that I am eager to apply to my future work in the field."
    }
  }
];
