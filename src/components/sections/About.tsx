import { personal } from "@/data/personal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProfilePanel } from "@/components/about/ProfilePanel";
import { MusicEasterEgg } from "@/components/about/MusicEasterEgg/MusicEasterEgg";

export function About() {
  return (
    <section id="about" className="section about-section">
      <SectionHeader kicker="" title="About Me" />
      <div className="about-grid">
        <div className="about-stack">
          <div className="about-copy panel">
            <p>{personal.about}</p>
          </div>
          <MusicEasterEgg />
        </div>
        <ProfilePanel />
      </div>
    </section>
  );
}
