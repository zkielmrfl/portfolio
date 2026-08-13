import { ArrowUp } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/socialLinks";
import { CURRENT_YEAR } from "@/lib/constants";
import emailLogo from "../../../img/Email.png";
import githubLogo from "../../../img/GutHub.png";
import linkedInLogo from "../../../img/LinkedIn.png";

const socialLogos: Record<string, StaticImageData> = {
  GitHub: githubLogo,
  LinkedIn: linkedInLogo,
  Email: emailLogo
};

export function Footer() {
  return (
    <footer className="footer">
      <p>DESIGNED & ENGINEERED BY {personal.name} (C) {CURRENT_YEAR}</p>
      <div>
        {socialLinks.map((link) => {
          const logo = socialLogos[link.label];
          return (
            <a key={link.label} href={link.href} aria-label={link.label} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>
              {logo ? <Image src={logo} alt="" width={22} height={22} /> : null}
              <span>{link.label}</span>
            </a>
          );
        })}
      </div>
      <a className="icon-btn back-to-top" href="#home" aria-label="Back to top">
        <ArrowUp size={18} />
      </a>
    </footer>
  );
}
