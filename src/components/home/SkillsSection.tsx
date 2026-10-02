import React from "react";
import { skillsData } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 max-w-[1240px] mx-auto w-full">
      <div className="text-center max-w-xl mx-auto mb-14">
        <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 dark:text-white font-normal tracking-tight">
          Skills & <span className="gradient-text italic">Technologies</span>
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-3 leading-relaxed">
          Specialized expertise across the modern development lifecycle
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((category) => (
          <div
            key={category.category}
            className="glass-panel p-8 rounded-2xl border border-black/[0.07] dark:border-white/[0.08]"
          >
            <h3 className="text-lg font-bold mb-6 text-neutral-900 dark:text-white border-b border-black/[0.07] dark:border-white/[0.08] pb-3">
              {category.category}
            </h3>
            <ul className="flex flex-col gap-3.5">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex justify-between items-center">
                  <span className="text-[0.925rem] text-neutral-800 dark:text-neutral-200 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-[#ff4d15] font-semibold">
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
