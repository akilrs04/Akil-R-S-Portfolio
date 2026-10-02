"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const SINGLE_LETTERS = [
  { char: "A", num: "01", progress: 16 },
  { char: "K", num: "02", progress: 33 },
  { char: "I", num: "03", progress: 50 },
  { char: "L", num: "04", progress: 66 },
  { char: "R", num: "05", progress: 83 },
  { char: "S", num: "06", progress: 100 },
];

const FULL_NAME_PARTS = [
  { text: "AKIL", isItalic: true },
  { text: "R", isItalic: true },
  { text: "S", isItalic: true },
];

export function Loader({ onComplete }: { onComplete?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const singleLettersRef = useRef<HTMLDivElement>(null);
  const fullNameRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const [isVisible, setIsVisible] = useState(true);

  // Prevent background scrolling while loader is active
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  // Skip function for UX convenience
  const handleSkip = () => {
    if (timelineRef.current) {
      timelineRef.current.seek(timelineRef.current.duration() - 0.9);
    }
  };

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          document.body.style.overflow = "";
          window.dispatchEvent(new CustomEvent("portfolio-loader-complete"));
          onComplete?.();
          setIsVisible(false);
        },
      });

      timelineRef.current = tl;

      // 1. Strict initial state using autoAlpha to avoid any flash of unstyled content
      gsap.set(".single-letter-item", {
        autoAlpha: 0,
        y: 50,
        scale: 0.85,
        filter: "blur(10px)",
      });
      gsap.set(fullNameRef.current, { autoAlpha: 0, display: "none" });
      gsap.set(".full-name-char", {
        autoAlpha: 0,
        y: 65,
        rotateX: 35,
        filter: "blur(12px)",
      });
      gsap.set(".full-name-meta", { autoAlpha: 0, y: 15 });
      gsap.set(".full-name-accent", { scaleX: 0, autoAlpha: 0 });

      // Small initial rest beat before first letter reveals
      tl.to({}, { duration: 0.15 });

      // ==========================================
      // PHASE 1: SINGLE LETTERS SHOW SEQUENCE
      // Strictly one single letter visible at a time (A -> K -> I -> L -> R -> S)
      // ==========================================
      SINGLE_LETTERS.forEach((item, index) => {
        const letterSelector = `.single-letter-${index}`;

        // Letter Enters cleanly
        tl.to(letterSelector, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.22,
          ease: "power2.out",
        });

        // Update progress line and counters in sync
        tl.to(
          progressBarRef.current,
          {
            width: `${item.progress}%`,
            duration: 0.22,
            ease: "power1.inOut",
          },
          "<"
        );

        if (counterRef.current) {
          tl.to(
            counterRef.current,
            {
              innerText: `${item.progress}%`,
              snap: { innerText: 1 },
              duration: 0.2,
              ease: "none",
            },
            "<"
          );
        }


        // Letter Exits completely before the next one starts (Zero overlap)
        tl.to(
          letterSelector,
          {
            autoAlpha: 0,
            y: -45,
            scale: 1.1,
            filter: "blur(8px)",
            duration: 0.16,
            ease: "power2.in",
          },
          "+=0.08"
        );
      });

      // Hide the single letter container
      tl.to(singleLettersRef.current, {
        autoAlpha: 0,
        scale: 0.9,
        duration: 0.18,
        ease: "power2.in",
      });
      tl.set(singleLettersRef.current, { display: "none" });

      // ==========================================
      // PHASE 2: FULL NAME SHOW ("AKIL R S")
      // Shown for the last time in full glory!
      // ==========================================
      tl.set(fullNameRef.current, { display: "flex", autoAlpha: 1 });

      // Staggered reveal of all letters in "AKIL R S"
      tl.to(".full-name-char", {
        autoAlpha: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 0.7,
        stagger: 0.04,
        ease: "back.out(1.2)",
      });

      // Subtle horizontal accent line expansion
      tl.to(
        ".full-name-accent",
        {
          scaleX: 1,
          autoAlpha: 0.8,
          duration: 0.55,
          ease: "power3.out",
        },
        "-=0.35"
      );

      // Bottom subtitle metadata reveal
      tl.to(
        ".full-name-meta",
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Gentle luxury scale pulse across the full name
      tl.to(
        ".full-name-headline",
        {
          scale: 1.025,
          duration: 0.75,
          ease: "power1.inOut",
        },
        "-=0.4"
      );

      // Cinematic hold on the full name
      tl.to({}, { duration: 0.75 });

      // ==========================================
      // PHASE 3: EXIT ANIMATION -> LANDING PAGE SHOW
      // Loader curtain lifts smoothly up, revealing the landing page
      // ==========================================
      // Fade out internal text
      tl.to([fullNameRef.current, ".loader-decorations"], {
        y: -35,
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.in",
      });

      // Signal the landing page hero right as curtain begins lifting
      tl.add(() => {
        window.dispatchEvent(new CustomEvent("portfolio-loader-complete"));
      }, "-=0.1");

      // Smooth curtain lift using exponential easing
      tl.to(
        container,
        {
          yPercent: -100,
          duration: 0.95,
          ease: "power4.inOut",
        },
        "-=0.2"
      );
    },
    { scope: containerRef }
  );

  // Keyboard shortcut: Press Escape to skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      ref={containerRef}
      aria-label="Preloader"
      className="fixed inset-0 z-[99999] flex flex-col justify-between bg-[#0b0c0e] text-neutral-100 select-none overflow-hidden"
      style={{
        willChange: "transform",
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(255, 77, 21, 0.05) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)
        `,
      }}
    >
      {/* Inline styles to completely prevent SSR / initial hydration FOUC stacking */}
      <style>{`
        .single-letter-item {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }
        .full-name-wrapper {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }
        .full-name-char {
          opacity: 0;
          visibility: hidden;
        }
      `}</style>

      {/* Ambient Noise / Grid lines for high-fashion feel */}
      <div className="absolute inset-0 pointer-events-none opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />



      {/* CENTER STAGE */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4">
        {/* ==================================================== */}
        {/* 1. SINGLE LETTER DISPLAY: Shows A -> K -> I -> L -> R -> S */}
        {/* ==================================================== */}
        <div
          ref={singleLettersRef}
          className="relative w-full max-w-md h-56 sm:h-72 flex items-center justify-center"
        >
          {SINGLE_LETTERS.map((item, index) => (
            <div
              key={item.char}
              className={`single-letter-item single-letter-${index} absolute inset-0 flex flex-col items-center justify-center opacity-0 invisible pointer-events-none`}
              style={{ opacity: 0, visibility: "hidden" }}
            >
              <div className="relative flex items-center justify-center">
                <span className="font-serif italic font-normal text-8xl sm:text-9xl md:text-[10.5rem] leading-none text-white tracking-tight drop-shadow-[0_10px_35px_rgba(255,255,255,0.12)]">
                  {item.char}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ==================================================== */}
        {/* 2. FULL NAME DISPLAY: Shows "AKIL R S" for the last time */}
        {/* ==================================================== */}
        <div
          ref={fullNameRef}
          className="full-name-wrapper flex flex-col items-center justify-center text-center max-w-4xl opacity-0 invisible"
          style={{ opacity: 0, visibility: "hidden" }}
        >
          {/* Full Name Headline */}
          <div
            className="full-name-headline flex items-center justify-center flex-wrap gap-x-4 sm:gap-x-7 py-1"
            style={{ perspective: "1000px" }}
          >
            {FULL_NAME_PARTS.map((part, pIdx) => (
              <span
                key={pIdx}
                className="inline-flex items-center tracking-tight"
              >
                {part.text.split("").map((ch, cIdx) => (
                  <span
                    key={`${pIdx}-${cIdx}`}
                    className="inline-block overflow-hidden py-1 px-[1px]"
                  >
                    <span
                      className="full-name-char inline-block font-serif italic font-normal text-6xl sm:text-8xl md:text-9xl text-white tracking-tight drop-shadow-[0_12px_40px_rgba(255,255,255,0.18)] opacity-0 invisible"
                      style={{ opacity: 0, visibility: "hidden" }}
                    >
                      {ch}
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </div>

          {/* Elegant Accent Line */}
          <div className="full-name-accent w-28 sm:w-44 h-[1.5px] bg-gradient-to-r from-transparent via-[#ff4d15] to-transparent my-4 sm:my-5 origin-center" />

          {/* Subtitle / Role */}
          <div className="full-name-meta opacity-0 translate-y-3 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-mono text-[11px] sm:text-xs text-neutral-400 tracking-[0.22em] uppercase">
            <span>Product Designer</span>
            <span className="hidden sm:inline text-neutral-400">&bull;</span>
            <span>Full-Stack Engineer</span>
          </div>
        </div>
      </div>

      {/* FOOTER BAR: PROGRESS & METRICS */}
      <div className="loader-decorations relative z-10 px-6 sm:px-12 pb-8 flex flex-col gap-3">
        <div className="flex items-center justify-between font-mono text-[11px] sm:text-xs text-neutral-400">
          <span className="tracking-[0.2em] uppercase flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-400" />
            Loading Experience
          </span>
          <span
            ref={counterRef}
            className="tracking-widest text-neutral-200 font-medium"
          >
            0%
          </span>
        </div>

        {/* Thin precision progress track */}
        <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="absolute top-0 left-0 bottom-0 w-0 bg-gradient-to-r from-neutral-400 via-[#ff4d15] to-[#ff7a45] shadow-[0_0_12px_rgba(255,77,21,0.6)] rounded-full transition-all"
          />
        </div>
      </div>
    </aside>
  );
}
