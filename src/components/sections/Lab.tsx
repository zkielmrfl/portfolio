import { SectionHeader } from "@/components/ui/SectionHeader";
import { VirtualPet } from "@/components/lab/VirtualPet/VirtualPet";
import { SortingVisualizer } from "@/components/lab/SortingVisualizer/SortingVisualizer";

export function Lab() {
  return (
    <section id="lab" className="section lab-section">
      <SectionHeader kicker="06: SYSTEM LAB" title="Engineering Lab" copy="A lightweight playground for programming concepts and small interactive systems." />
      <div className="lab-grid">
        <SortingVisualizer />
        <VirtualPet />
      </div>
    </section>
  );
}
