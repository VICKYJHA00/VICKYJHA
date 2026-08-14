import { projects } from "../../data/projects";
import { SectionHeader } from "./Section";
import ProjectCard from "./projects/ProjectCard";

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Projects"
          title={
            <>
              Featured <span className="text-gradient">products.</span>
            </>
          }
          subtitle="Product-focused work for real users: scalable backend systems, dashboard workflows, and AI-enabled launchpads."
        />

        <div className="space-y-8">
          <div className="flex flex-col gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} featured />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-border/30">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index + featuredProjects.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
