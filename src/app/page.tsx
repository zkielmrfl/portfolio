import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Credentials } from "@/components/sections/Credentials";
import { Hero } from "@/components/sections/Hero";
import { Lab } from "@/components/sections/Lab";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { GridBackground } from "@/components/effects/GridBackground";
import { ChatBot } from "@/components/chat/ChatBot";
import { ScrollAnimator } from "@/components/effects/ScrollAnimator";

export default function Home() {
  return (
    <>
      <GridBackground />
      <ScrollAnimator />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Credentials />
        <Lab />
        <Contact />
      </main>
      <ChatBot />
      <Footer />
    </>
  );
}
