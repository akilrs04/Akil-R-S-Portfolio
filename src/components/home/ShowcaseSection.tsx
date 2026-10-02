"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ShowcaseItem {
  id: string;
  title: string;
  image: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "item-1",
    title: "Modular Component Flatlay",
    image: "/images/showcase/showcase-1.jpg",
  },
  {
    id: "item-2",
    title: "Frosted Acrylic Prism Stand",
    image: "/images/showcase/showcase-2.jpg",
  },
  {
    id: "item-3",
    title: "MØDULR Analog Controller",
    image: "/images/showcase/showcase-3.jpg",
  },
  {
    id: "item-4",
    title: "Perforated Titanium Enclosure",
    image: "/images/showcase/showcase-4.jpg",
  },
  {
    id: "item-5",
    title: "Minimalist Field Synthesizer",
    image: "/images/showcase/showcase-5.jpg",
  },
];

export function ShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !centerCardRef.current) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isTablet: "(min-width: 768px) and (max-width: 1023px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isDesktop, isTablet } = context.conditions as {
            isDesktop: boolean;
            isTablet: boolean;
          };

          // State 1: 5 images shown in row (Center Card 3 starts at initialW)
          // State 2: On scroll, Center Card 3 expands horizontally to expandedW
          // Outer cards glide outward so 3 images are showcased in focal view
          const initialW = isDesktop ? 460 : isTablet ? 360 : 240;
          const expandedW = isDesktop
            ? Math.min(920, Math.floor(window.innerWidth * 0.62))
            : isTablet
            ? 580
            : 340;

          if (isDesktop || isTablet) {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 8%",
                end: "+=650",
                pin: true,
                scrub: 0.9,
                anticipatePin: 1,
              },
            });

            tl.fromTo(
              centerCardRef.current,
              { width: `${initialW}px` },
              {
                width: `${expandedW}px`,
                ease: "power2.inOut",
              }
            );
          } else {
            // Mobile: Smooth in-view scrub without sticky pin
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                end: "center 40%",
                scrub: 0.8,
              },
            });

            tl.fromTo(
              centerCardRef.current,
              { width: `${initialW}px` },
              {
                width: `${expandedW}px`,
                ease: "power2.inOut",
              }
            );
          }
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="relative w-full py-8 sm:py-12 md:py-16 overflow-hidden select-none"
    >
      {/* Horizontal Centered Flex Track */}
      <div
        ref={trackRef}
        className="flex items-center justify-center gap-3.5 sm:gap-5 md:gap-6 w-full max-w-full px-4 overflow-visible"
      >
        {SHOWCASE_ITEMS.map((item, index) => {
          const isCenter = index === 2; // Card 3 (MØDULR Synth) is the expanding center hero card

          return (
            <div
              key={item.id}
              ref={isCenter ? centerCardRef : null}
              className={`group relative flex-shrink-0 h-[380px] sm:h-[450px] md:h-[500px] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden bg-white/90 border border-black/5 shadow-[0_8px_28px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500 will-change-[width] ${
                isCenter
                  ? "w-[240px] sm:w-[360px] md:w-[460px]"
                  : "w-[130px] sm:w-[180px] md:w-[220px]"
              }`}
            >
              {/* High-Fidelity Product Render Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                loading="lazy"
                draggable={false}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
