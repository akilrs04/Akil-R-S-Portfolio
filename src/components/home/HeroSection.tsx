"use client";

import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        paused: true,
      });

      // 1. Staggered 1-by-1 reveal of headline words and capsules
      tl.fromTo(
        ".hero-token",
        {
          opacity: 0,
          y: 38,
          rotateX: 20,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.75,
          stagger: 0.055,
          clearProps: "transform,opacity",
        }
      );

      // 2. Tactile spring pop for the capsule pills as they appear
      tl.fromTo(
        ".hero-capsule .capsule-pill",
        {
          scale: 0.55,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.65,
          stagger: 0.18,
          ease: "back.out(1.5)",
          clearProps: "transform,opacity",
        },
        0.2
      );

      // 3. Delicate Editorial Subtitle reveal
      tl.fromTo(
        ".hero-subtitle",
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          clearProps: "transform,opacity",
        },
        "-=0.25"
      );

      // 4. Minimalist Dark Pill CTA Button pops in
      tl.fromTo(
        ".hero-cta",
        {
          opacity: 0,
          y: 16,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: "back.out(1.5)",
          clearProps: "transform,opacity",
        },
        "-=0.4"
      );

      // Trigger animation when the loader finishes or after safety fallback
      const handleLoaderComplete = () => {
        tl.play();
      };

      window.addEventListener("portfolio-loader-complete", handleLoaderComplete);

      // Fallback in case loader completes before listener or in standalone preview
      const fallbackTimer = setTimeout(() => {
        if (!tl.isActive() && tl.progress() === 0) {
          tl.play();
        }
      }, 4500);

      return () => {
        window.removeEventListener("portfolio-loader-complete", handleLoaderComplete);
        clearTimeout(fallbackTimer);
      };
    },
    { scope: heroRef }
  );

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 text-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Editorial Headline with Inline Image Capsules & Italic Contrast */}
        <h1
          className="font-serif text-[2.75rem] sm:text-[4.2rem] md:text-[5.1rem] leading-[1.18] tracking-[-0.025em] font-normal text-neutral-900"
          style={{ perspective: "1000px" }}
        >
          {/* Line 1: I'm Akil R S [BW Portrait], */}
          <span className="block">
            <span className="hero-token inline-block">I&apos;m</span>{" "}
            <span className="hero-token inline-block italic text-neutral-400 font-normal">
              Akil
            </span>{" "}
            <span className="hero-token inline-block italic text-neutral-400 font-normal">
              R
            </span>{" "}
            <span className="hero-token inline-block italic text-neutral-400 font-normal">
              S
            </span>{" "}
            <span className="hero-token hero-capsule inline-flex items-center align-middle">
              <span className="capsule-pill">
                <img
                  src="/images/capsules/capsule-bw-portrait.jpg"
                  alt="Portrait of Akil R S"
                />
              </span>
            </span>
            <span className="hero-token inline-block">,</span>
          </span>

          {/* Line 2: a Product [Color UI] Designer */}
          <span className="block">
            <span className="hero-token inline-block">a</span>{" "}
            <span className="hero-token inline-block">Product</span>{" "}
            <span className="hero-token hero-capsule inline-flex items-center align-middle">
              <span className="capsule-pill">
                <img
                  src="/images/capsules/capsule-color-ui.jpg"
                  alt="Product Design UI"
                />
              </span>
            </span>{" "}
            <span className="hero-token inline-block italic text-neutral-400 font-normal">
              Designer
            </span>
          </span>


        </h1>

        {/* Delicate Editorial Subtitle */}
        <p className="hero-subtitle mt-8 text-neutral-500 text-sm sm:text-[0.95rem] leading-relaxed max-w-[490px] font-normal tracking-[-0.01em]">
          I have 11 years of experience working on useful and mindful products
          together with startups and known brands
        </p>

        {/* Minimalist Dark Pill CTA Button */}
        <div className="hero-cta mt-9">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#171717] hover:bg-neutral-800 text-white text-xs sm:text-[0.85rem] font-medium px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all group"
          >
            <span>Resume</span>
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
