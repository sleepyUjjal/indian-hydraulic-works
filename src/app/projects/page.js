import Projects from "@/components/sections/Projects";

export const metadata = {
  title: "Our Projects — Indian Hydraulic Works",
  description: "Browse our portfolio of hydraulic engineering projects — custom power packs, cylinder repairs, pump installations, and more.",
};

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      <Projects />
    </main>
  );
}
