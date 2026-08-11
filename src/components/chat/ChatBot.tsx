"use client";

import { FormEvent, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { personal } from "@/data/personal";

type Message = {
  role: "bot" | "user";
  text: string;
};

function getBotReply(input: string) {
  const message = input.toLowerCase();
  if (message.includes("project")) {
    return `There are ${projects.length} project modules. Start with ${projects[0]?.name ?? "the project grid"} in the Projects section.`;
  }
  if (message.includes("skill") || message.includes("tech")) {
    const count = skills.reduce((total, group) => total + group.skills.length, 0);
    return `The current skill database has ${count} modules across ${skills.length} categories.`;
  }
  if (message.includes("contact") || message.includes("email")) {
    return `Use the Contact section or email ${personal.email}.`;
  }
  if (message.includes("resume")) {
    return "Use the Resume button in the header to view or download the resume file.";
  }
  return "Try asking about projects, skills, resume, or contact.";
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Portfolio assistant online. Ask about projects, skills, resume, or contact." }
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
            <input value={value} onChange={(event) => setValue(event.target.value)} aria-label="Ask the portfolio chatbot" placeholder="Ask about projects..." />
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
