import { ArrowUp } from "lucide-react";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/socialLinks";
import { CURRENT_YEAR } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="footer">
      <p>DESIGNED & ENGINEERED BY {personal.name} © {CURRENT_YEAR}</p>
      <div>
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href}>{link.label}</a>
        ))}
      </div>
      <a className="icon-btn" href="#home" aria-label="Back to top">
        <ArrowUp size={18} />
      </a>
    </footer>
  );
}
