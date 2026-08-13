"use client";

import { FormEvent, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { personal } from "@/data/personal";
import { credentials } from "@/data/credentials";

type Message = {
  role: "bot" | "user";
  text: string;
};

const starters = [
  "Tell me about yourself",
  "What projects did you build?",
  "What skills do you have?"
];

function includesAny(message: string, words: string[]) {
  return words.some((word) => message.includes(word));
}

function list(items: string[]) {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;
}

function getBotReply(input: string) {
  const message = input.toLowerCase();
  const education = credentials.find((item) => item.type === "Education");
  const certifications = credentials.filter((item) => item.type === "Certifications").map((item) => item.certificateName).filter(Boolean);
  const organizations = credentials.filter((item) => item.type === "Organizations").map((item) => item.organizationName).filter(Boolean);
  const events = credentials.filter((item) => item.type === "Events").map((item) => item.eventName).filter(Boolean);
  const skillGroups = skills.map((group) => `${group.name}: ${group.skills.join(", ")}`);
  const featuredProjects = projects.map((project) => `${project.name}, ${project.description}`);

  if (includesAny(message, ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"])) {
    return `Hi, I am Ezekiel's portfolio assistant. Ask me anything about his background, projects, skills, credentials, or how to contact him.`;
  }
  if (includesAny(message, ["who", "person", "name", "about", "yourself", "your self", "introduce", "tell me about"])) {
    return `I am ${personal.name}, an ${personal.role.toLowerCase()} based in ${personal.location}. ${personal.about} My current focus is ${personal.focus.toLowerCase()}, and I am especially interested in ${personal.interests.join(", ")}.`;
  }
  if (includesAny(message, ["graduate", "graduated", "school", "university", "college", "education", "study", "studying", "course", "program"])) {
    if (education?.university && education.program) {
      return `Ezekiel studies at ${education.university}, taking ${education.program} ${education.spanYear ?? ""}.`;
    }
    return "The education section has not been fully filled in yet.";
  }
  if (includesAny(message, ["project", "portfolio", "built", "work", "system", "app", "website"])) {
    return `Ezekiel currently highlights ${projects.length} projects: ${featuredProjects.join(" ")} You can open each project card to see the role, tech stack, challenges, outcome, and project details.`;
  }
  if (includesAny(message, ["skill", "tech", "technology", "stack", "language", "tools", "programming"])) {
    const count = skills.reduce((total, group) => total + group.skills.length, 0);
    return `Ezekiel has ${count} listed skills across ${skills.length} areas. ${skillGroups.join(". ")}. He is currently learning ${personal.currentlyLearning}.`;
  }
  if (includesAny(message, ["certificate", "certification", "certified"])) {
    return certifications.length ? `His listed certifications include ${list(certifications)}.` : "No certifications have been added yet.";
  }
  if (includesAny(message, ["organization", "club", "acm", "committee"])) {
    return organizations.length ? `Ezekiel is connected with ${list(organizations)}.` : "No organizations have been added yet.";
  }
  if (includesAny(message, ["event", "hackathon", "workshop", "seminar"])) {
    return events.length ? `Some events in Ezekiel's log include ${list(events)}.` : "No events have been added yet.";
  }
  if (includesAny(message, ["learn", "currently", "focus", "goal"])) {
    return `Right now, Ezekiel is focused on ${personal.focus.toLowerCase()} and currently learning ${personal.currentlyLearning}.`;
  }
  if (includesAny(message, ["location", "where", "live", "based"])) {
    return `Ezekiel is based in ${personal.location}.`;
  }
  if (includesAny(message, ["contact", "email", "message", "reach", "hire"])) {
    return `You can contact Ezekiel through the Contact section or email him directly at ${personal.email}.`;
  }
  if (includesAny(message, ["resume", "cv"])) {
    return "Use the Resume button in the header to view or download the resume file.";
  }
  if (includesAny(message, ["thank", "thanks"])) {
    return "You're welcome. You can also ask me about Ezekiel's projects, skills, education, certifications, or contact info.";
  }
  return "I can answer based on Ezekiel's portfolio data. Try asking: tell me about yourself, what projects did you build, what skills do you have, where do you study, or how can I contact you?";
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi, I am Ezekiel's portfolio assistant. I can answer questions about his background, projects, skills, credentials, resume, and contact info." }
  ]);

  function ask(text: string) {
    setMessages((current) => [...current, { role: "user", text }, { role: "bot", text: getBotReply(text) }]);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = value.trim();
    if (!text) return;
    ask(text);
    setValue("");
  }

  return (
    <aside className="chatbot" aria-label="Portfolio chatbot">
      {open ? (
        <section className="chatbot-window">
          <header>
            <span><Bot size={16} aria-hidden /> EZEKIEL AI: ONLINE</span>
            <button className="icon-btn" type="button" aria-label="Close chatbot" onClick={() => setOpen(false)}>
              <X size={16} />
            </button>
          </header>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <p key={`${message.role}-${index}`} className={message.role}>{message.text}</p>
            ))}
          </div>
          <div className="chatbot-starters" aria-label="Suggested questions">
            {starters.map((starter) => (
              <button key={starter} type="button" onClick={() => ask(starter)}>
                {starter}
              </button>
            ))}
          </div>
          <form className="chatbot-input" onSubmit={submit}>
            <input value={value} onChange={(event) => setValue(event.target.value)} aria-label="Ask the portfolio chatbot" placeholder="Ask me about Ezekiel..." />
            <button type="submit" aria-label="Send message"><Send size={16} /></button>
          </form>
        </section>
      ) : null}
      <button className="chatbot-launcher" type="button" aria-label="Open portfolio chatbot" onClick={() => setOpen(!open)}>
        <MessageCircle size={22} />
      </button>
    </aside>
  );
}
