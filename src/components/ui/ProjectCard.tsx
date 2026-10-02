import React from "react";
import { Project } from "@/types";
import { GithubIcon, ExternalLinkIcon } from "@/components/common/Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col bg-white/80 dark:bg-[#121418]/85 border border-black/[0.07] dark:border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-300 h-full hover:-translate-y-1.5 hover:border-[#ff4d15] hover:shadow-xl group">
      <div className="relative w-full h-[220px] bg-gradient-to-br from-stone-100 to-stone-200 dark:from-[#18191e] dark:to-[#101114] flex items-center justify-center overflow-hidden">
        <span className="absolute top-5 left-5 bg-white/90 dark:bg-[#14161b]/85 backdrop-blur-md text-neutral-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full border border-black/[0.07] dark:border-white/[0.08] tracking-wide">
          {project.category}
        </span>
      </div>

      <div className="p-7 flex flex-col flex-grow">
        <h3 className="text-[1.35rem] font-bold text-neutral-900 dark:text-white mb-2 tracking-tight group-hover:text-[#ff4d15] transition-colors">
          {project.title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-[0.925rem] leading-relaxed mb-5 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-stone-100 dark:bg-[#1a1c22] text-neutral-600 dark:text-neutral-400 border border-black/[0.07] dark:border-white/[0.08] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 pt-5 border-t border-black/[0.07] dark:border-white/[0.08]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#ff4d15] hover:opacity-80 transition-opacity"
            >
              <ExternalLinkIcon size={16} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#ff4d15] hover:opacity-80 transition-opacity"
            >
              <GithubIcon size={16} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
