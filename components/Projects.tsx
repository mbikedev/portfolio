"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    year: "2026",
    client: "Nord Financial",
    title: "Banking dashboard for modern teams",
    description:
      "A full redesign & rebuild of the core banking interface — transaction feed, invoicing, multi-currency accounts. 3× faster load times.",
    tags: ["SaaS", "Next.js", "Postgres", "Design"],
    gradient: "from-[#c6ff3d]/20 via-[#4a4a47]/10 to-transparent",
    href: "#",
  },
  {
    id: "02",
    year: "2025",
    client: "Atlas Studio",
    title: "Portfolio & case studies for a design agency",
    description:
      "Editorial-leaning marketing site with MDX-powered case studies, CMS-driven blog, and custom motion system.",
    tags: ["Marketing", "MDX", "CMS", "Motion"],
    gradient: "from-orange-500/20 via-rose-500/10 to-transparent",
    href: "#",
  },
  {
    id: "03",
    year: "2025",
    client: "Cove Health",
    title: "Patient-facing telemedicine app",
    description:
      "HIPAA-aligned platform with video consultations, booking, and prescription management. Built from 0 to production in 14 weeks.",
    tags: ["Healthcare", "WebRTC", "Auth", "Stripe"],
    gradient: "from-sky-400/20 via-cyan-500/10 to-transparent",
    href: "#",
  },
  {
    id: "04",
    year: "2024",
    client: "Rune",
    title: "E-commerce for a boutique skincare brand",
    description:
      "Headless Shopify storefront with custom product configurator, subscription flows, and editorial lookbook.",
    tags: ["E-commerce", "Shopify", "Headless"],
    gradient: "from-amber-300/20 via-yellow-500/10 to-transparent",
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Label */}
        <div className="flex items-center gap-3 font-mono text-xs text-ink-dim mb-6">
          <span className="h-px w-8 bg-accent" />
          <span className="text-accent">03</span>
          <span>/ selected work</span>
        </div>

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            Recent <span className="italic text-ink-dim">projects.</span>
          </h2>
          <p className="font-mono text-sm text-ink-dim">
            [04 of many] — more on request
          </p>
        </div>

        {/* Projects list */}
        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative block border border-line bg-bg-card hover:border-accent/40 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient bg on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative grid md:grid-cols-12 gap-6 p-8 md:p-10">
                {/* Index & year */}
                <div className="md:col-span-2 flex md:flex-col md:justify-between gap-4">
                  <span className="font-mono text-xs text-accent">
                    /{project.id}
                  </span>
                  <span className="font-mono text-xs text-ink-faint">
                    {project.year}
                  </span>
                </div>

                {/* Main content */}
                <div className="md:col-span-8">
                  <div className="font-mono text-xs text-ink-dim mb-3">
                    {project.client}
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl leading-tight mb-4 group-hover:text-accent transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-ink-dim leading-relaxed max-w-2xl mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 border border-line bg-bg/30 font-mono text-[10px] text-ink-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="md:col-span-2 flex md:justify-end items-start">
                  <div className="h-12 w-12 border border-line group-hover:border-accent group-hover:bg-accent group-hover:text-bg flex items-center justify-center transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-0 -rotate-12 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* See all link */}
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 font-mono text-sm text-ink-dim hover:text-accent transition-colors"
          >
            <span className="h-px w-8 bg-ink-faint group-hover:bg-accent transition-colors" />
            request the full portfolio
            <span className="h-px w-8 bg-ink-faint group-hover:bg-accent transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
