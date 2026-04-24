"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "services", href: "#services" },
  { label: "work", href: "#work" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-bg/70 backdrop-blur-xl border-b border-line"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo mark */}
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative h-7 w-7 border border-ink/40 group-hover:border-accent transition-colors duration-300 flex items-center justify-center">
            <span className="text-accent font-mono text-xs font-bold">◉</span>
            <span className="absolute -inset-0.5 border border-accent/0 group-hover:border-accent/30 transition-all duration-500" />
          </div>
          <span className="font-mono text-sm tracking-tight">
            studio<span className="text-accent">/</span>dev
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative px-4 py-2 font-mono text-xs text-ink-dim hover:text-ink transition-colors"
            >
              <span className="text-accent mr-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                //
              </span>
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-accent text-bg font-mono text-xs font-medium hover:bg-accent-glow transition-all btn-glow"
        >
          start a project
          <span className="text-base leading-none">→</span>
        </a>

        {/* Mobile menu hint (simple) */}
        <a
          href="#contact"
          className="md:hidden px-3 py-1.5 border border-accent/40 text-accent font-mono text-xs"
        >
          hire
        </a>
      </div>
    </motion.nav>
  );
}
