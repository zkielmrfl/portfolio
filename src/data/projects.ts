import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "artemis-system",
    name: "Artemis",
    icon: "AS",
    image: "/images/projects/artemis-system/cover.png",
    role: "Frontend Engineer",
    category: "EVENT", //type ProjectCategory = "EVENT" | "PERSONAL" | "ACADEMIC"
    status: "DEPLOYED", //type ProjectStatus = "DEPLOYED" | "IN DEVELOPMENT" | "ARCHIVED"
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
  },
  {
    slug: "quiz-generator",
    name: "TURBO",
    icon: "TR",
    image: "/images/projects/quiz-generator/cover.png",
    role: "Frontend-Backend",
    category: "PERSONAL",
    status: "IN DEVELOPMENT",
    description: "TURBO is an AI-powered study and review platform that instantly converts uploaded documents and notes into customizable, shareable quizzes.",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "OpenAI API (GPT-4o-mini) or Google Gemini API", "Supabase Auth"],
    links: {github: ""},
    caseStudy: {
      problem: "Creating comprehensive review materials manually is tedious and time-consuming, while generic practice tests fail to align with a student's specific notes and study preferences.",
      solution: "TURBO uses large language models to transform uploaded study materials into tailored quizzes with customizable difficulty, question types, and similarity levels for efficient personal review and easy sharing.",
      role: "I created all of the features",
      process: ["System Architechture", "Database Schemas", "Merging of branches and testing"],
      challenges: ["Extracting and chunking clean text from diverse, large document formats (like PDFs) without exceeding LLM context and token limits.", "Enforcing strict, validated JSON outputs from the AI so the frontend can reliably render question components witho"],
      outcome: "FEUreka provides a comprehensive set of features that support the reporting, management, and retrieval of lost and found items within the FEU Institute of Technology.",
      learned: "this journey reinforced that successful software development is built on more than just technical proficiency; it requires collaborative accountability, thorough planning, and a resilient approach to troubleshooting that I am eager to apply to my future work in the field."
    }
  }
  ,
  {
    slug: "web-gallery",
    name: "DONUT!",
    icon: "TR",
    image: "/images/projects/web-gallery/cover.png",
    role: "Frontend-Backend",
    category: "PERSONAL",
    status: "IN DEVELOPMENT",
    description: "This website is dedicated to my closest friends to commemorate our memories together.",
    tech: ["Php", "HTML", "CSS", "Javascript"],
    links: {github: ""},
    caseStudy: {
      problem: "Creating comprehensive review materials manually is tedious and time-consuming, while generic practice tests fail to align with a student's specific notes and study preferences.",
      solution: "TURBO uses large language models to transform uploaded study materials into tailored quizzes with customizable difficulty, question types, and similarity levels for efficient personal review and easy sharing.",
      role: "I created all of the features",
      process: ["System Architechture", "Database Schemas", "Merging of branches and testing"],
      challenges: ["Extracting and chunking clean text from diverse, large document formats (like PDFs) without exceeding LLM context and token limits.", "Enforcing strict, validated JSON outputs from the AI so the frontend can reliably render question components witho"],
      outcome: "FEUreka provides a comprehensive set of features that support the reporting, management, and retrieval of lost and found items within the FEU Institute of Technology.",
      learned: "this journey reinforced that successful software development is built on more than just technical proficiency; it requires collaborative accountability, thorough planning, and a resilient approach to troubleshooting that I am eager to apply to my future work in the field."
    }
  },
  {
    slug: "impostor-game",
    name: "Who are you?",
    icon: "WY",
    image: "/images/projects/impostor-game/cover.png",
    role: "Frontend-Backend",
    category: "PERSONAL",
    status: "DEPLOYED",
    description: "A responsive, browser-based social deduction party game where players must uncover a hidden impostor using secret word clues.",
    tech: ["React 18", "Vite", "JavaScript", "CSS"],
    links: {live: "https://word-impostor-gamebykiel.vercel.app/"},
    caseStudy: {
      problem: "Players lack a quick-to-launch, visually stunning digital party game for group settings that avoids cumbersome physical setups and clunky user interfaces",
      solution: "Developed a dynamic, component-driven web application featuring automated game phases, real-time role reveals, voting mechanics, and an Apple-inspired glassmorphism design.",
      role: "Solo Frontend Developer & UI/UX Designer",
      process: ["Mapped out core game loops and phase-based views", "Established a scalable folder and component architecture", "Integrated React state management to control dynamic game rules", "Crafted and optimized modern UI components, including custom glassmorphic layout elements."],
      challenges: ["esolving browser performance bottlenecks and infinite layout loops caused by complex SVG filter-based glass components."],
      outcome: "A personal project that my friends and I can use to kill time and have fun during get together",
      learned: "I have used to project to explore in outsourcing codes and information to test. This project open new pathways to me to level things up especially the UI/UX."
    }
  }
];
