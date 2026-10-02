import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-neutral-200 text-neutral-400 text-xs text-center">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-serif italic text-base text-neutral-800">Akil R S</span>
        <span>© {currentYear} Akil R S. Designed with mindfulness.</span>
        <div className="flex gap-6 text-neutral-600">
          <a href="#hero" className="hover:text-neutral-900 transition-colors">Top</a>
          <a href="#works" className="hover:text-neutral-900 transition-colors">Works</a>
          <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
