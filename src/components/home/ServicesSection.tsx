"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: "product-design",
    title: "Product Design",
    description: "UI UX Design, SAAS Products, Web Application, Mobile Application.",
  },
  {
    id: "web-design",
    title: "Web Design",
    description: "Landing Pages, Mobile First Design, Ecommerce Website.",
  },
  {
    id: "no-code-development",
    title: "No-Code Development",
    description: "Framer, Webflow.",
  },
  {
    id: "mobile-app-design",
    title: "Mobile App Design",
    description: "IOS, Android App Designs,",
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".services-header",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-header",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      const rows = gsap.utils.toArray<HTMLElement>(".service-row-item");
      rows.forEach((row, index) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            delay: index * 0.06,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
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
      id="services"
      ref={sectionRef}
      className="w-full bg-[#0a0a0c] text-white py-24 sm:py-32 md:py-36 px-6 sm:px-10 md:px-14 border-y border-neutral-900/60 relative overflow-hidden"
    >
      <div className="max-w-[1040px] mx-auto">
        {/* Top-left Minimalist Header matching reference */}
        <div className="services-header flex items-center gap-2.5 mb-12 sm:mb-16 md:mb-20">
          <span className="text-neutral-400 text-sm sm:text-[0.95rem] font-normal tracking-[-0.01em]">
            What I Do
          </span>
          <span
            aria-hidden="true"
            className="w-2.5 h-2.5 rounded-full bg-white inline-block shadow-[0_0_8px_rgba(255,255,255,0.7)]"
          />
        </div>

        {/* Services List with subtle divider lines */}
        <div className="flex flex-col">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-row-item group border-b border-white/[0.08] py-8 sm:py-10 md:py-12 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 md:gap-8">
                {/* Service Title on Left */}
                <h3 className="text-2xl sm:text-3xl md:text-[2.2rem] lg:text-[2.4rem] font-normal tracking-[-0.02em] text-white transition-transform duration-300 ease-out group-hover:translate-x-2">
                  {service.title}
                </h3>

                {/* Service Tags / Description on Right */}
                <p className="text-xs sm:text-sm md:text-[0.95rem] text-neutral-400 font-normal leading-relaxed md:text-right max-w-xl transition-colors duration-300 group-hover:text-neutral-200">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
