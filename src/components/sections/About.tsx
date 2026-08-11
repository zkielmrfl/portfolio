import { personal } from "@/data/personal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProfilePanel } from "@/components/about/ProfilePanel";
import { MusicEasterEgg } from "@/components/about/MusicEasterEgg/MusicEasterEgg";

export function About() {
  return (
    <section id="about" className="section about-section">
      <SectionHeader kicker="02 // PERSONNEL FILE" title="About Me" copy="A concise profile module with a small personal archive hidden below." />
      <div className="about-grid">
        <div className="about-copy panel">
          <p>{personal.about}</p>
          <p>
            I am currently sharpening my engineering fundamentals, practicing with real application architecture, and learning how to build software that is both useful and maintainable.
          </p>
        </div>
        <ProfilePanel />
      </div>
      <MusicEasterEgg />
    </section>
  );
}
