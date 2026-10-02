"use client";

import React, { useEffect, useState } from "react";

interface VerticalLine {
  id: string;
  left: string;
  responsiveClass?: string;
  hasBeam?: boolean;
  beamType?: "down" | "up";
  beamDuration?: number; // seconds
  beamDelay?: number; // seconds
  beamHeight?: number; // px
}

interface HorizontalLine {
  id: string;
  top: string;
  hasBeam?: boolean;
  beamType?: "ltr" | "rtl";
  beamDuration?: number; // seconds
  beamDelay?: number; // seconds
  beamWidth?: number; // px
}

// 7 Vertical architectural grid lines
const VERTICAL_LINES: VerticalLine[] = [
  {
    id: "v-1",
    left: "10%",
    responsiveClass: "hidden sm:block",
    hasBeam: true,
    beamType: "down",
    beamDuration: 6.8,
    beamDelay: 0.8,
    beamHeight: 120,
  },
  {
    id: "v-2",
    left: "22%",
    responsiveClass: "block",
    hasBeam: true,
    beamType: "down",
    beamDuration: 5.2,
    beamDelay: 2.4,
    beamHeight: 145,
  },
  {
    id: "v-3",
    left: "36%",
    responsiveClass: "hidden md:block",
    hasBeam: true,
    beamType: "up",
    beamDuration: 5.9,
    beamDelay: 1.1,
    beamHeight: 115,
  },
  {
    id: "v-4",
    left: "50%",
    responsiveClass: "block",
    hasBeam: true,
    beamType: "down",
    beamDuration: 4.8,
    beamDelay: 0.2,
    beamHeight: 155,
  },
  {
    id: "v-5",
    left: "64%",
    responsiveClass: "hidden md:block",
    hasBeam: true,
    beamType: "up",
    beamDuration: 6.2,
    beamDelay: 2.9,
    beamHeight: 125,
  },
  {
    id: "v-6",
    left: "78%",
    responsiveClass: "block",
    hasBeam: true,
    beamType: "down",
    beamDuration: 5.4,
    beamDelay: 1.6,
    beamHeight: 140,
  },
  {
    id: "v-7",
    left: "90%",
    responsiveClass: "hidden sm:block",
    hasBeam: true,
    beamType: "up",
    beamDuration: 7.1,
    beamDelay: 3.4,
    beamHeight: 110,
  },
];

// 5 Horizontal architectural grid lines
const HORIZONTAL_LINES: HorizontalLine[] = [
  {
    id: "h-1",
    top: "16%",
    hasBeam: true,
    beamType: "ltr",
    beamDuration: 7.2,
    beamDelay: 0.5,
    beamWidth: 140,
  },
  {
    id: "h-2",
    top: "34%",
    hasBeam: true,
    beamType: "rtl",
    beamDuration: 8.5,
    beamDelay: 2.2,
    beamWidth: 150,
  },
  {
    id: "h-3",
    top: "50%",
    hasBeam: true,
    beamType: "ltr",
    beamDuration: 6.5,
    beamDelay: 1.4,
    beamWidth: 175,
  },
  {
    id: "h-4",
    top: "68%",
    hasBeam: true,
    beamType: "ltr",
    beamDuration: 7.8,
    beamDelay: 0.9,
    beamWidth: 130,
  },
  {
    id: "h-5",
    top: "84%",
    hasBeam: true,
    beamType: "rtl",
    beamDuration: 9.4,
    beamDelay: 3.8,
    beamWidth: 160,
  },
];

export function HeroBackgroundLines() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handlePointerMove = (e: MouseEvent) => {
      // Only track while in the upper viewport (hero section)
      if (e.clientY < window.innerHeight * 1.15) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          setMousePos({ x: e.clientX, y: e.clientY });
        });
      }
    };

    const handleMouseLeave = () => {
      setMousePos(null);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", handleMouseLeave);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handleMouseLeave);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 [mask-image:radial-gradient(ellipse_85%_75%_at_50%_50%,#000_45%,transparent_95%)] [-webkit-mask-image:radial-gradient(ellipse_85%_75%_at_50%_50%,#000_45%,transparent_95%)]"
      aria-hidden="true"
    >
      {/* Ambient center warm prism glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[520px] max-w-[95vw] pointer-events-none blur-3xl opacity-90 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,rgba(255,77,21,0.08)_0%,rgba(255,110,40,0.03)_45%,transparent_75%)]" />

      {/* Interactive cursor spotlight that delicately illuminates lines */}
      {mousePos && (
        <div
          className="absolute pointer-events-none rounded-full w-[480px] h-[480px] -translate-x-1/2 -translate-y-1/2 blur-2xl transition-opacity duration-300 will-change-[left,top,opacity] bg-[radial-gradient(circle,rgba(255,77,21,0.1)_0%,rgba(255,120,50,0.03)_45%,transparent_70%)]"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            opacity: 1,
          }}
        />
      )}

      {/* Horizontal Architectural Lines */}
      {HORIZONTAL_LINES.map((hLine) => (
        <div
          key={hLine.id}
          className="absolute left-0 right-0 h-px bg-white/[0.025] transition-colors duration-300"
          style={{ top: hLine.top }}
        >
          {hLine.hasBeam && (
            <div
              className={
                hLine.beamType === "rtl"
                  ? "absolute -top-[0.5px] right-0 h-[2px] rounded-full pointer-events-none will-change-[transform,opacity] anim-beam-rtl bg-gradient-to-l from-transparent via-[rgba(255,77,21,0.25)] to-white shadow-[0_0_10px_1.5px_rgba(255,77,21,0.65),0_0_22px_3.5px_rgba(255,77,21,0.3)] after:content-[''] after:absolute after:top-1/2 after:-left-[1px] after:-translate-y-1/2 after:w-1 after:h-1 after:rounded-full after:bg-white after:shadow-[0_0_6px_1.5px_#ffffff,0_0_14px_3px_rgba(255,77,21,0.95)]"
                  : "absolute -top-[0.5px] left-0 h-[2px] rounded-full pointer-events-none will-change-[transform,opacity] anim-beam-ltr bg-gradient-to-r from-transparent via-[rgba(255,77,21,0.25)] to-white shadow-[0_0_10px_1.5px_rgba(255,77,21,0.65),0_0_22px_3.5px_rgba(255,77,21,0.3)] after:content-[''] after:absolute after:top-1/2 after:-right-[1px] after:-translate-y-1/2 after:w-1 after:h-1 after:rounded-full after:bg-white after:shadow-[0_0_6px_1.5px_#ffffff,0_0_14px_3px_rgba(255,77,21,0.95)]"
              }
              style={{
                width: `${hLine.beamWidth || 140}px`,
                animationDuration: `${hLine.beamDuration || 8}s`,
                animationDelay: `${hLine.beamDelay || 0}s`,
              }}
            />
          )}
        </div>
      ))}

      {/* Vertical Architectural Lines & Moving Light Beams */}
      {VERTICAL_LINES.map((vLine) => (
        <div
          key={vLine.id}
          className={`absolute top-0 bottom-0 w-px bg-white/[0.035] transition-colors duration-300 ${vLine.responsiveClass || ""}`}
          style={{ left: vLine.left }}
        >
          {vLine.hasBeam && (
            <div
              className={
                vLine.beamType === "up"
                  ? "absolute bottom-0 -left-[0.5px] w-[2px] rounded-full pointer-events-none will-change-[transform,opacity] anim-beam-up bg-gradient-to-t from-transparent via-[rgba(255,77,21,0.25)] to-white shadow-[0_0_10px_1.5px_rgba(255,77,21,0.65),0_0_22px_3.5px_rgba(255,77,21,0.3)] after:content-[''] after:absolute after:-top-[1px] after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-white after:shadow-[0_0_6px_1.5px_#ffffff,0_0_14px_3px_rgba(255,77,21,0.95)]"
                  : "absolute top-0 -left-[0.5px] w-[2px] rounded-full pointer-events-none will-change-[transform,opacity] anim-beam-down bg-gradient-to-b from-transparent via-[rgba(255,77,21,0.25)] to-white shadow-[0_0_10px_1.5px_rgba(255,77,21,0.65),0_0_22px_3.5px_rgba(255,77,21,0.3)] after:content-[''] after:absolute after:-bottom-[1px] after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-white after:shadow-[0_0_6px_1.5px_#ffffff,0_0_14px_3px_rgba(255,77,21,0.95)]"
              }
              style={{
                height: `${vLine.beamHeight || 130}px`,
                animationDuration: `${vLine.beamDuration || 5.5}s`,
                animationDelay: `${vLine.beamDelay || 0}s`,
              }}
            />
          )}
        </div>
      ))}

      {/* Precision Technical Crosshairs & Intersection Points */}
      {VERTICAL_LINES.map((vLine, vIdx) =>
        HORIZONTAL_LINES.map((hLine, hIdx) => {
          const isCrosshair = (vIdx + hIdx) % 2 === 0;

          return (
            <div
              key={`cross-${vLine.id}-${hLine.id}`}
              className={vLine.responsiveClass || ""}
              style={{
                position: "absolute",
                left: vLine.left,
                top: hLine.top,
              }}
            >
              {isCrosshair ? (
                <span className="absolute -translate-x-1/2 -translate-y-1/2 text-white/[0.12] font-mono text-[11px] font-light leading-none pointer-events-none select-none transition-all duration-300">
                  +
                </span>
              ) : (
                <span className="absolute -translate-x-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full bg-white/[0.12] pointer-events-none anim-pulse-dot" />
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
