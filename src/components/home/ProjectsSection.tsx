"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Pick the 4 featured showcase projects in exact sequence:
  // 1. Cove (Full width)
  // 2. Studio north (Half width - left)
  // 3. Lumina ai (Half width - right)
  // 4. Monaco type foundry (Full width)
  const cove = projectsData.find((p) => p.slug === "cove") || projectsData[0];
  const studioNorth =
    projectsData.find((p) => p.slug === "studio-north") || projectsData[1];
  const luminaAi =
    projectsData.find((p) => p.slug === "lumina-ai") || projectsData[2];
  const monacoFoundry =
    projectsData.find((p) => p.slug === "monaco-type-foundry") ||
    projectsData[3];

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const cards = gsap.utils.toArray<HTMLElement>(".project-reveal-card");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 36,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="works"
      ref={sectionRef}
      className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 w-full"
    >
      <div className="max-w-[1040px] mx-auto">
        {/* Section Header: text color format strictly matching Hero Section */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] text-neutral-900 font-normal tracking-tight">
            Selected{" "}
            <span className="italic text-neutral-400 font-normal">work</span>
          </h2>
          <p className="text-neutral-500 text-xs sm:text-[0.875rem] mt-3 sm:mt-3.5 leading-relaxed tracking-[-0.01em] max-w-[520px] mx-auto">
            Here&apos;s a glimpse of projects that reflect my approach to design
            and development: clean aesthetics, user-first thinking, and
            brand-aligned strategy.
          </p>
        </div>

        {/* Editorial Projects Layout */}
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
          {/* 1. Full-Width Card: Cove */}
          {cove && (
            <div className="project-reveal-card">
              <Link
                href={`/projects/${cove.slug}`}
                className="group block focus:outline-none"
              >
                <div className="relative w-full aspect-[16/9] sm:aspect-[2.05/1] rounded-[22px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden bg-neutral-100 border border-black/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
                  <Image
                    src={cove.thumbnail}
                    alt={cove.title}
                    fill
                    sizes="(max-width: 1040px) 100vw, 1040px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    priority
                  />
                </div>
                <div className="flex items-start justify-between mt-3 sm:mt-3.5 px-0.5 sm:px-1 gap-4">
                  <h3 className="text-sm sm:text-base font-normal text-neutral-900 group-hover:text-neutral-700 transition-colors">
                    {cove.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-neutral-500 text-right max-w-[240px] sm:max-w-[280px] leading-snug">
                    {cove.tagline}
                  </p>
                </div>
              </Link>
            </div>
          )}

          {/* 2 & 3. Two-Column Split: Studio north & Lumina ai */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-7">
            {/* Left Card: Studio north */}
            {studioNorth && (
              <div className="project-reveal-card">
                <Link
                  href={`/projects/${studioNorth.slug}`}
                  className="group block focus:outline-none"
                >
                  <div className="relative w-full aspect-[16/10] rounded-[20px] sm:rounded-[26px] md:rounded-[28px] overflow-hidden bg-neutral-100 border border-black/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
                    <Image
                      src={studioNorth.thumbnail}
                      alt={studioNorth.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                  </div>
                  <div className="flex items-start justify-between mt-3 sm:mt-3.5 px-0.5 sm:px-1 gap-4">
                    <h3 className="text-sm sm:text-base font-normal text-neutral-900 group-hover:text-neutral-700 transition-colors">
                      {studioNorth.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-neutral-500 text-right max-w-[210px] sm:max-w-[250px] leading-snug">
                      {studioNorth.tagline}
                    </p>
                  </div>
                </Link>
              </div>
            )}

            {/* Right Card: Lumina ai */}
            {luminaAi && (
              <div className="project-reveal-card">
                <Link
                  href={`/projects/${luminaAi.slug}`}
                  className="group block focus:outline-none"
                >
                  <div className="relative w-full aspect-[16/10] rounded-[20px] sm:rounded-[26px] md:rounded-[28px] overflow-hidden bg-neutral-100 border border-black/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
                    <Image
                      src={luminaAi.thumbnail}
                      alt={luminaAi.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                  </div>
                  <div className="flex items-start justify-between mt-3 sm:mt-3.5 px-0.5 sm:px-1 gap-4">
                    <h3 className="text-sm sm:text-base font-normal text-neutral-900 group-hover:text-neutral-700 transition-colors">
                      {luminaAi.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-neutral-500 text-right max-w-[210px] sm:max-w-[250px] leading-snug">
                      {luminaAi.tagline}
                    </p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* 4. Full-Width Card: Monaco type foundry */}
          {monacoFoundry && (
            <div className="project-reveal-card">
              <Link
                href={`/projects/${monacoFoundry.slug}`}
                className="group block focus:outline-none"
              >
                <div className="relative w-full aspect-[16/9] sm:aspect-[2.05/1] rounded-[22px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden bg-neutral-100 border border-black/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
                  <Image
                    src={monacoFoundry.thumbnail}
                    alt={monacoFoundry.title}
                    fill
                    sizes="(max-width: 1040px) 100vw, 1040px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </div>
                <div className="flex items-start justify-between mt-3 sm:mt-3.5 px-0.5 sm:px-1 gap-4">
                  <h3 className="text-sm sm:text-base font-normal text-neutral-900 group-hover:text-neutral-700 transition-colors">
                    {monacoFoundry.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-neutral-500 text-right max-w-[240px] sm:max-w-[280px] leading-snug">
                    {monacoFoundry.tagline}
                  </p>
                </div>
              </Link>
            </div>
          )}
        </div>

        {/* Minimalist Centered Pill CTA: See all projects */}
        <div className="mt-14 sm:mt-18 md:mt-20 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center bg-[#171717] hover:bg-neutral-800 text-white text-xs sm:text-[0.85rem] font-medium px-6 py-2.5 sm:px-7 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            See all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
