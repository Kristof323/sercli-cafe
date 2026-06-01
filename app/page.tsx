// app/page.tsx
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { MenuSection } from "@/components/menu-section";
import { Gallery } from "@/components/gallery";
import { Rendezveny } from "@/components/ui/rendezveny";
import { Contact } from "@/components/ui/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MenuSection />
      <Rendezveny />
      <Gallery />
      <Contact />
    </main>
  );
}