import { AppShell } from "@/components/layout/AppShell";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { GhostBand } from "@/components/sections/GhostBand";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <AppShell>
      <Hero />
      <Work />
      <GhostBand lead="Since" trail="2023" />
      <About />
      <Services />
      <TechStack />
      <Achievements />
      <GhostBand lead="Words" trail="Matter" trailFrom="down" />
      <Testimonials />
      <Blog />
      <Contact />
    </AppShell>
  );
}
