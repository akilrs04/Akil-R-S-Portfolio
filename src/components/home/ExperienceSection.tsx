import React from "react";
import { experienceData } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 max-w-[900px] mx-auto w-full">
      <div className="text-center max-w-xl mx-auto mb-14">
        <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 dark:text-white font-normal tracking-tight">
          Work <span className="gradient-text italic">Experience</span>
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-3 leading-relaxed">
          My professional track record and technical leadership
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="glass-panel p-8 rounded-2xl border border-black/[0.07] dark:border-white/[0.08] flex flex-col gap-4 shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {exp.role}
                </h3>
                <span className="text-[#ff4d15] font-semibold text-sm">
                  {exp.company}
                </span>
              </div>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                {exp.period}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {exp.description.map((desc, idx) => (
                <p
                  key={idx}
                  className="relative pl-5 text-neutral-600 dark:text-neutral-300 text-[0.925rem] leading-relaxed before:content-['•'] before:absolute before:left-0 before:text-[#ff4d15] before:font-bold"
                >
                  {desc}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 bg-stone-100 dark:bg-white/10 rounded-md text-neutral-700 dark:text-neutral-300 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
