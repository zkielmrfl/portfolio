import { ArrowRight, Code2, Link2, Mail } from "lucide-react";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/socialLinks";
import { MechanicalLines } from "@/components/effects/MechanicalLines";
import { StatusIndicator } from "@/components/ui/StatusIndicator";

export function Hero() {
  const iconMap = { GitHub: Code2, LinkedIn: Link2, Email: Mail };
  return (
    <section id="home" className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">ROLE // ASPIRING SOFTWARE ENGINEER</p>
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
            const Icon = iconMap[link.label as keyof typeof iconMap];
            return (
              <a key={link.label} href={link.href} aria-label={link.label}>
                {Icon ? <Icon size={18} /> : link.label}
              </a>
            );
          })}
        </div>
      </div>
      <div className="hero-visual" aria-label="Interactive system architecture visualization">
        <MechanicalLines />
        <div className="core-node">CORE</div>
        <span className="node n1">UI</span>
        <span className="node n2">API</span>
        <span className="node n3">DATA</span>
        <span className="node n4">LAB</span>
        <div className="status-stack">
          <StatusIndicator label="STATUS" value="OPEN TO OPPORTUNITIES" />
          <StatusIndicator label="SYSTEM" value="ONLINE" />
        </div>
      </div>
    </section>
  );
}
