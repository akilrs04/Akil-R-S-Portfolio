import React from "react";
import { Layout, Smartphone, Code2, Layers } from "lucide-react";

const services = [
  {
    icon: <Layout size={22} className="text-neutral-700" />,
    title: "Product Design",
    description:
      "Crafting intuitive user interfaces, cohesive design systems, and end-to-end user journeys for mindful software products.",
  },
  {
    icon: <Code2 size={22} className="text-neutral-700" />,
    title: "Creative Engineering",
    description:
      "Modern Next.js and React implementations with fluid interactions, micro-animations, and clean, scalable code architectures.",
  },
  {
    icon: <Smartphone size={22} className="text-neutral-700" />,
    title: "Mobile Experiences",
    description:
      "Seamless iOS and Android product interfaces with deliberate tactile feedback, responsive layouts, and thoughtful micro-UX.",
  },
  {
    icon: <Layers size={22} className="text-neutral-700" />,
    title: "Design Systems",
    description:
      "Component libraries, token architectures, and design standards ensuring unified visual language across all digital touchpoints.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 px-6 bg-[#f4f4f3]/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 font-normal tracking-tight">
            Capabilities & <span className="italic text-neutral-400">Craft</span>
          </h2>
          <p className="text-neutral-500 text-sm mt-3 leading-relaxed">
            Deliberate multidisciplinary services combining high-aesthetic design and modern engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/90 border border-black/5 rounded-2xl p-7 flex flex-col hover:-translate-y-1 hover:border-black/15 transition-all shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-normal text-neutral-900 mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
