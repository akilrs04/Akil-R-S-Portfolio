import React from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function ProjectsSection() {
  return (
    <section id="works" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 font-normal tracking-tight">
            Selected <span className="italic text-neutral-400">Works</span>
          </h2>
          <p className="text-neutral-500 text-sm mt-3 leading-relaxed">
            Curated digital products, brand identities, and interfaces crafted with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
