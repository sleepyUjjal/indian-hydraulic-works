import { PROJECTS, getProjectBySlugId, getProjectPath } from "@/lib/projectData";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

/**
 * Generate static params for all projects.
 */
export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slugId: `${project.slug}-${project.id}`,
  }));
}

/**
 * Generate metadata for each project page.
 */
export async function generateMetadata({ params }) {
  const { slugId } = await params;
  const project = getProjectBySlugId(slugId);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Indian Hydraulic Works`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slugId } = await params;
  const project = getProjectBySlugId(slugId);

  if (!project) {
    notFound();
  }

  // Find prev/next projects for navigation
  const currentIdx = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = currentIdx > 0 ? PROJECTS[currentIdx - 1] : null;
  const nextProject = currentIdx < PROJECTS.length - 1 ? PROJECTS[currentIdx + 1] : null;

  return (
    <ProjectDetailClient
      project={project}
      prevProject={prevProject ? { title: prevProject.title, path: getProjectPath(prevProject) } : null}
      nextProject={nextProject ? { title: nextProject.title, path: getProjectPath(nextProject) } : null}
    />
  );
}
