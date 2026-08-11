import { socialLinks } from "@/data/socialLinks";

export function SocialLinks() {
  return (
    <aside className="panel social-panel">
      <h3>Professional Channels</h3>
      {socialLinks.map((link) => (
        <a key={link.label} className="channel-link" href={link.href} target={link.external ? "_blank" : undefined}>
          {link.label} ↗
        </a>
      ))}
    </aside>
  );
}
