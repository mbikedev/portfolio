"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-20"
    >
      {/* Grid backdrop with radial mask */}
      <div className="absolute inset-0 bg-grid mask-fade opacity-60" />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full">
        {/* Status ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-line bg-bg-elev/50 backdrop-blur font-mono text-xs text-ink-dim"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          Available for new projects — Q3 2026
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-[clamp(3rem,10vw,8rem)] leading-[0.95] tracking-tight"
        >
          We build the{" "}
          <span className="italic text-accent text-glow">web</span>
          <br />
          <span className="text-ink-dim">that ships.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 max-w-xl text-lg text-ink-dim leading-relaxed"
        >
          Full-stack engineering & design for founders, teams, and ambitious
          brands. From a crisp marketing site to a production-grade SaaS — we
          handle the stack, you focus on the idea.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-bg font-mono text-sm font-medium btn-glow"
          >
            Start a project
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </a>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-6 py-3.5 border border-line hover:border-ink-dim font-mono text-sm text-ink-dim hover:text-ink transition-colors"
          >
            <span className="text-accent">$</span> see recent work
          </a>
        </motion.div>

        {/* Meta info / footer of hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-line font-mono text-xs"
        >
          {[
            { label: "Based in", value: "Brussels, BE" },
            { label: "Response time", value: "< 24 hours" },
            { label: "Stack", value: "Next · Node · Postgres" },
            { label: "Shipping since", value: "2019" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-ink-faint">{item.label}</div>
              <div className="mt-1 text-ink">{item.value}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] text-ink-faint flex items-center gap-2"
      >
        <span className="h-px w-8 bg-ink-faint" />
        scroll
      </motion.div>
    </section>
  );
}
