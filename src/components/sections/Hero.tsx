import Image, { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/socialLinks";
import { MechanicalLines } from "@/components/effects/MechanicalLines";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { ProfilePhoto } from "@/components/about/ProfilePhoto";
import emailLogo from "../../../img/Email.png";
import githubLogo from "../../../img/GutHub.png";
import linkedInLogo from "../../../img/LinkedIn.png";

const socialLogos: Record<string, StaticImageData> = {
  GitHub: githubLogo,
  LinkedIn: linkedInLogo,
  Email: emailLogo
};

export function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-copy">
        <h1>{personal.name}</h1>
        <h2>{personal.role}</h2>
        <p>{personal.intro}</p>
        <div className="cta-row">
          <a className="btn primary" href="#projects">
            Explore My Work <ArrowRight size={16} />
          </a>
          <a className="btn secondary" href={personal.resumeUrl} target="_blank">View Resume</a>
        </div>
        <div className="quick-links" aria-label="Quick links">
          {socialLinks.map((link) => {
            const logo = socialLogos[link.label];
            return (
              <a key={link.label} href={link.href} aria-label={link.label} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>
                {logo ? <Image src={logo} alt="" width={26} height={26} /> : link.label}
              </a>
            );
          })}
        </div>
      </div>
      <div className="hero-visual" aria-label="Interactive system architecture visualization">
        <MechanicalLines />
        <div className="hero-portrait-frame">
          <ProfilePhoto variant="hero" />
        </div>
        <div className="status-stack">
          <StatusIndicator label="STATUS" value="OPEN TO OPPORTUNITIES" />
          <StatusIndicator label="SYSTEM" value="ONLINE" />
        </div>
      </div>
    </section>
  );
}
