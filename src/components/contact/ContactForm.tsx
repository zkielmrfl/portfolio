"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("READY");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("TRANSMITTING");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(form))
    });
    setStatus(response.ok ? "RECEIVED LOCALLY" : "TRANSMISSION FAILED");
  }
  return (
    <form className="contact-form panel" onSubmit={submit}>
      <label>Name<input name="name" required /></label>
      <label>Email<input name="email" type="email" required /></label>
      <label>Message<textarea name="message" required rows={5} /></label>
      <button className="btn primary" type="submit">Send Message</button>
      <p className="eyebrow">STATUS // {status}</p>
    </form>
  );
}
