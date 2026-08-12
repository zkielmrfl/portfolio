import type { Credential } from "@/types/credential";

export const credentials: Credential[] = [
  {
    id: "education-placeholder",
    type: "Education",
    university: "Far Eastern University - Institute of Technology",
    program: "Bachelor of Science in Computer Science Specialized in Software Engineering",
    spanYear: "(2024-2028)",
    award: "Add award or honors",
    image: "/images/credentials/education/university-logo.png",
    imageAlt: "University logo"
  },
  {
    id: "certification-placeholder",
    type: "Certifications",
    certificateName: "Pyhton Specialist",
    dateIssued: "July 8, 2026",
    image: "/images/credentials/certificates/python-specialist.png",
    imageAlt: "Python Specialist certificate logo"
  },
  {
    id: "certification-placeholder-2",
    type: "Certifications",
    certificateName: "CCNA: Introduction to Networks",
    dateIssued: "July 13, 2026",
    image: "/images/credentials/certificates/ccna-introduction-to-networks.png",
    imageAlt: "CCNA certificate logo"
  },
  {
    id: "organization-placeholder",
    type: "Organizations",
    organizationName: "Association for Computing Machinery",
    yearsAttended: "2024-2026",
    position: "Junior Officer of Creatives Committee",
    image: "/images/credentials/organizations/acm-logo.png",
    imageAlt: "Association for Computing Machinery logo"
  },
  {
    id: "event-placeholder",
    type: "Events",
    eventName: "GDG Cloud Manila Build with AI: The Future of AI & Research",
    dateHappened: "June 6, 2026",
    involvement: "Participant",
    image: "/images/credentials/events/gdg-cloud-manila.png",
    imageAlt: "GDG Cloud Manila event logo"
  },
  {
    id: "event-placeholder-2",
    type: "Events",
    eventName: "ACM Developers Week 2026: Techsprint",
    dateHappened: "June 25-27, 2026",
    involvement: "Participant",
    image: "/images/credentials/events/tech-sprint.png",
    imageAlt: "ACM Developers Week event logo"
  },
  {
    id: "achievement-placeholder",
    type: "Achievements",
    achievementName: "Achievement Placeholder",
    dateIssued: "Add issue date",
    award: "Add award",
    image: "/images/credentials/achievements/achievement-logo.png",
    imageAlt: "Achievement logo"
  }
];
