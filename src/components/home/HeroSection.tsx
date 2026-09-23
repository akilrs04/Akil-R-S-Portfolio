import React from "react";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Editorial Headline with Inline Image Capsules & Italic Contrast */}
        <h1 className="font-serif text-[2.75rem] sm:text-[4.2rem] md:text-[5.1rem] leading-[1.18] tracking-[-0.025em] font-normal text-neutral-900">
          {/* Line 1: I'm Akil R S [BW Portrait], */}
          <span className="block">
            I&apos;m{" "}
            <span className="italic text-neutral-400 font-normal">Akil R S</span>{" "}
            <span className="capsule-pill">
              <img
                src="/images/capsules/capsule-bw-portrait.jpg"
                alt="Portrait of Akil R S"
              />
            </span>
            ,
          </span>

          {/* Line 2: a Product [Color UI] Designer */}
          <span className="block">
            a Product{" "}
            <span className="capsule-pill">
              <img
                src="/images/capsules/capsule-color-ui.jpg"
                alt="Product Design UI"
              />
            </span>{" "}
            <span className="italic text-neutral-400 font-normal">Designer</span>
          </span>

          {/* Line 3: based in Tokyo [Cherry Blossom] */}
          <span className="block">
            based in Tokyo{" "}
            <span className="capsule-pill">
              <img
                src="/images/capsules/capsule-cherry-blossom.jpg"
                alt="Tokyo Cherry Blossoms"
              />
            </span>
          </span>
        </h1>

        {/* Delicate Editorial Subtitle */}
        <p className="mt-8 text-neutral-500 text-sm sm:text-[0.95rem] leading-relaxed max-w-[490px] font-normal tracking-[-0.01em]">
          I have 11 years of experience working on useful and mindful products
          together with startups and known brands
        </p>

        {/* Minimalist Dark Pill CTA Button */}
        <div className="mt-9">
          <a
            href="#works"
            className="inline-flex items-center gap-1.5 bg-[#171717] hover:bg-neutral-800 text-white text-xs sm:text-[0.85rem] font-medium px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all group"
          >
            <span>Remix Template</span>
            <ArrowUpRight
              size={14}
              className="text-neutral-400 group-hover:text-white transition-colors"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
