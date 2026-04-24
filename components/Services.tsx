"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Sparkles, Gauge } from "lucide-react";

const services = [
  {
    id: "01",
    icon: Code2,
    title: "Web Applications",
    description:
      "Production-grade SaaS, dashboards, and internal tools. Built with Next.js, TypeScript, and a database stack that scales with you.",
    tags: ["Next.js", "tRPC", "Postgres", "Auth"],
  },
  {
    id: "02",
    icon: Sparkles,
    title: "Marketing Sites",
    description:
      "Conversion-focused landing pages & brand sites. Fast, beautiful, and engineered for SEO. Ship in weeks, not months.",
    tags: ["Next.js", "CMS", "SEO", "A/B"],
  },
  {
    id: "03",
    icon: Layers,
    title: "Design & Branding",
    description:
      "UI systems, component libraries, and visual identity. Design that feels considered, not templated.",
    tags: ["Figma", "Design Systems", "Brand"],
  },
  {
    id: "04",
    icon: Gauge,
    title: "Performance & Audit",
    description:
      "Inherited a slow codebase? Lighthouse in the red? We audit, refactor, and ship measurable speed improvements.",
    tags: ["Audit", "Refactor", "Core Web Vitals"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section label */}
        <div className="flex items-center gap-3 font-mono text-xs text-ink-dim mb-6">
          <span className="h-px w-8 bg-accent" />
          <span className="text-accent">02</span>
          <span>/ services</span>
        </div>

        {/* Section heading */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            What we <span className="italic text-ink-dim">do</span>
            <br />
            best.
          </h2>
          <p className="md:pt-6 text-ink-dim text-lg leading-relaxed max-w-md self-end">
            A small, senior team handling everything from early-stage concept
            to production deployment. No middlemen, no handoffs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-line border border-line">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-bg p-10 hover:bg-bg-elev transition-colors duration-500"
              >
                {/* Number + icon */}
                <div className="flex items-start justify-between mb-8">
                  <span className="font-mono text-xs text-ink-faint">
                    /{service.id}
                  </span>
                  <Icon className="w-6 h-6 text-ink-dim group-hover:text-accent transition-colors duration-500" />
                </div>

                {/* Title */}
                <h3 className="font-display text-3xl md:text-4xl mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-ink-dim leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 border border-line font-mono text-[10px] text-ink-dim group-hover:border-ink-faint transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-px h-0 bg-accent group-hover:h-full transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
