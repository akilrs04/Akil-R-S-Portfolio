"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 sm:px-14 py-7 bg-transparent pointer-events-none">
        {/* Top-Left Logo */}
        <a
          href="#hero"
          className="pointer-events-auto font-serif italic text-2xl sm:text-[1.7rem] tracking-tight text-neutral-900 transition-opacity hover:opacity-75"
        >
          Akil R S
        </a>

        {/* Top-Right Circular Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-black/5 hover:border-black/20 hover:shadow-md transition-all flex items-center justify-center group"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <X size={18} className="text-neutral-800" />
          ) : (
            <div className="flex flex-col gap-1 items-center justify-center">
              <span className="w-4 h-[1.5px] bg-neutral-800 rounded-full transition-all group-hover:w-4.5" />
              <span className="w-4 h-[1.5px] bg-neutral-800 rounded-full transition-all group-hover:w-4.5" />
            </div>
          )}
        </button>
      </header>

      {/* Sleek Overlay Menu when clicked */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-neutral-900/40 backdrop-blur-sm flex justify-end transition-opacity"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-[#fcfcfb] h-full shadow-2xl p-10 flex flex-col justify-between animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex justify-between items-center pb-8 border-b border-neutral-200 pr-12">
                <span className="font-serif italic text-2xl text-neutral-900">Akil R S</span>
              </div>

              <nav className="flex flex-col gap-5 mt-10">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-3xl text-neutral-800 hover:text-neutral-500 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-neutral-200 text-sm text-neutral-500">
              <p>© Akil R S. Based in Tokyo.</p>
              <p className="mt-1">Available for mindful collaborations.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
