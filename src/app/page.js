import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const Services = dynamic(() => import("@/components/sections/Services"), { ssr: true });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: true });
const BeforeAfter = dynamic(() => import("@/components/sections/BeforeAfter"), { ssr: true });

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <BeforeAfter />

      {/* Future sections will be added below in subsequent commits */}
      {/* Contact, etc. */}
    </main>
  );
}
