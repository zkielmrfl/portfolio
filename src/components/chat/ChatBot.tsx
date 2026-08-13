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

function getBotReply(input: string) {
  const message = input.toLowerCase();
  const education = credentials.find((item) => item.type === "Education");
  const certifications = credentials.filter((item) => item.type === "Certifications").map((item) => item.certificateName).filter(Boolean);
  const organizations = credentials.filter((item) => item.type === "Organizations").map((item) => item.organizationName).filter(Boolean);

  if (message.includes("who") || message.includes("person") || message.includes("name") || message.includes("about")) {
    return `${personal.name} is an ${personal.role.toLowerCase()} based in ${personal.location}. ${personal.about}`;
  }
  if (message.includes("graduate") || message.includes("graduated") || message.includes("school") || message.includes("university") || message.includes("college") || message.includes("education")) {
    if (education?.university && education.program) {
      return `${personal.name} studies at ${education.university}, taking ${education.program} ${education.spanYear ?? ""}.`;
    }
    return "The education section has not been fully filled in yet.";
  }
  if (message.includes("project")) {
    const featured = projects.slice(0, 3).map((project) => `${project.name} (${project.status.toLowerCase()})`).join(", ");
    return `There are ${projects.length} project modules. Featured work includes ${featured}. Open Projects for case studies, tech stacks, and links.`;
  }
  if (message.includes("skill") || message.includes("tech")) {
    const count = skills.reduce((total, group) => total + group.skills.length, 0);
    const categories = skills.map((group) => `${group.name}: ${group.skills.join(", ")}`).join("; ");
    return `${personal.name}'s skill database has ${count} modules across ${skills.length} categories. ${categories}.`;
  }
  if (message.includes("certificate") || message.includes("certification")) {
    return certifications.length ? `Listed certifications include ${certifications.join(", ")}.` : "No certifications have been added yet.";
  }
  if (message.includes("organization") || message.includes("club") || message.includes("acm")) {
    return organizations.length ? `${personal.name} is connected with ${organizations.join(", ")}.` : "No organizations have been added yet.";
  }
  if (message.includes("learn") || message.includes("currently")) {
    return `${personal.name} is currently learning ${personal.currentlyLearning}.`;
  }
  if (message.includes("location") || message.includes("where") || message.includes("live")) {
    return `${personal.name} is based in ${personal.location}.`;
  }
  if (message.includes("contact") || message.includes("email")) {
    return `Use the Contact section or email ${personal.email}.`;
  }
  if (message.includes("resume")) {
    return "Use the Resume button in the header to view or download the resume file.";
  }
  return "I can answer from this website's data. Try asking who Ezekiel is, where he studies, what he is learning, his projects, skills, certifications, organizations, resume, or contact info.";
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Portfolio assistant online. Ask me about Ezekiel, education, projects, skills, credentials, resume, or contact." }
  ]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = value.trim();
    if (!text) return;
    setMessages((current) => [...current, { role: "user", text }, { role: "bot", text: getBotReply(text) }]);
    setValue("");
  }

  return (
    <aside className="chatbot" aria-label="Portfolio chatbot">
      {open ? (
        <section className="chatbot-window">
          <header>
            <span><Bot size={16} aria-hidden /> ASSISTANT // ONLINE</span>
            <button className="icon-btn" type="button" aria-label="Close chatbot" onClick={() => setOpen(false)}>
              <X size={16} />
            </button>
          </header>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <p key={`${message.role}-${index}`} className={message.role}>{message.text}</p>
            ))}
          </div>
          <form className="chatbot-input" onSubmit={submit}>
            <input value={value} onChange={(event) => setValue(event.target.value)} aria-label="Ask the portfolio chatbot" placeholder="Ask who Ezekiel is..." />
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
