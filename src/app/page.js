import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const Services = dynamic(() => import("@/components/sections/Services"), { ssr: true });
const BeforeAfter = dynamic(() => import("@/components/sections/BeforeAfter"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: true });

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <BeforeAfter />
      <Contact />
    </main>
  );
}
