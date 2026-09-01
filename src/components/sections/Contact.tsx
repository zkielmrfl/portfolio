import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialLinks } from "@/components/contact/SocialLinks";

export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <SectionHeader kicker="07 // TRANSMISSION" title="Initiate Contact" copy="Email, professional links, and a local-ready contact form endpoint." />
      <div className="contact-grid">
        <ContactForm />
        <SocialLinks />
      </div>
    </section>
  );
}
