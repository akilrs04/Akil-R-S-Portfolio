"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Prevent background scrolling when menu drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Hide navbar on scroll down, reveal on scroll up
  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar near the top of the page
      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (currentScrollY > prevScrollY && currentScrollY - prevScrollY > 6) {
        // Scrolling down -> hide navbar
        setIsVisible(false);
      } else if (currentScrollY < prevScrollY && prevScrollY - currentScrollY > 6) {
        // Scrolling up -> show navbar
        setIsVisible(true);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 sm:px-14 py-7 bg-transparent pointer-events-none transition-transform duration-300 ease-in-out ${
          isVisible || menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Top-Left Logo: fades out when menu drawer is open */}
        <a
          href="#hero"
          className={`pointer-events-auto font-serif italic text-2xl sm:text-[1.7rem] tracking-tight text-white transition-opacity duration-300 hover:opacity-75 ${
            menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          Akil R S
        </a>

        {/* Top-Right Circular Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="pointer-events-auto w-10 h-10 rounded-full bg-neutral-900/80 backdrop-blur-md shadow-sm border border-white/10 hover:border-white/25 hover:shadow-md transition-all flex items-center justify-center group"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <X size={18} className="text-white" />
          ) : (
            <div className="flex flex-col gap-1 items-center justify-center">
              <span className="w-4 h-[1.5px] bg-white rounded-full transition-all group-hover:w-4.5" />
              <span className="w-4 h-[1.5px] bg-white rounded-full transition-all group-hover:w-4.5" />
            </div>
          )}
        </button>
      </header>

      {/* Sleek Overlay Menu when clicked */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex justify-end transition-opacity"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="w-full sm:max-w-sm bg-[#0d0e11] sm:border-l border-white/10 h-full shadow-2xl px-8 py-7 sm:p-10 flex flex-col justify-between animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Top Header: Clean Menu indicator without displaying name */}
              <div className="flex justify-between items-center pb-6 sm:pb-8 border-b border-neutral-800/80 pr-12 min-h-[40px]">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                  Menu
                </span>
              </div>

              <nav className="flex flex-col gap-5 sm:gap-6 mt-8 sm:mt-10">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-3xl sm:text-4xl text-neutral-200 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-neutral-800 text-sm text-neutral-400">
              <p className="text-neutral-300 font-medium">Available for mindful collaborations.</p>
              <p className="mt-1 text-xs text-neutral-500">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
