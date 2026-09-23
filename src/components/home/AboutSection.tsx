import React from "react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 font-normal tracking-tight mb-6">
            About <span className="italic text-neutral-400">Akil R S</span>
          </h2>
          <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
            <p>
              Based in Tokyo, I partner with forward-thinking founders and established teams
              to distill complex problem spaces into quiet, confident, and highly functional digital products.
            </p>
            <p>
              My practice bridges visual craftsmanship and technical implementation — ensuring
              that every subtle interaction, typeface pairing, and code structure feels deliberate and refined.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/80 border border-black/5 rounded-2xl p-6 text-center shadow-sm">
            <div className="font-serif text-3xl sm:text-4xl text-neutral-900 mb-1">11+</div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Years Experience</div>
          </div>
          <div className="bg-white/80 border border-black/5 rounded-2xl p-6 text-center shadow-sm">
            <div className="font-serif text-3xl sm:text-4xl text-neutral-900 mb-1">45+</div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Products Shipped</div>
          </div>
          <div className="bg-white/80 border border-black/5 rounded-2xl p-6 text-center shadow-sm">
            <div className="font-serif text-3xl sm:text-4xl text-neutral-900 mb-1">Tokyo</div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Studio Base</div>
          </div>
          <div className="bg-white/80 border border-black/5 rounded-2xl p-6 text-center shadow-sm">
            <div className="font-serif text-3xl sm:text-4xl text-neutral-900 mb-1">Global</div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Client Network</div>
          </div>
        </div>
      </div>
    </section>
  );
}
