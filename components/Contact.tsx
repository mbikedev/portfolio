"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Replace with your real handler (Resend, Formspree, API route, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Label */}
        <div className="flex items-center gap-3 font-mono text-xs text-ink-dim mb-6">
          <span className="h-px w-8 bg-accent" />
          <span className="text-accent">04</span>
          <span>/ contact</span>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-8xl leading-[0.95] tracking-tight mb-4"
        >
          Let's build
          <br />
          <span className="italic text-accent text-glow">
            something.
          </span>
        </motion.h2>
        <p className="max-w-xl text-lg text-ink-dim mb-16">
          Tell me about your project. I reply within 24 hours with either a
          proposal, a question, or an honest referral.
        </p>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Your name" name="name" placeholder="Ada Lovelace" />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@company.com"
              />
            </div>
            <Field
              label="Company"
              name="company"
              placeholder="Optional"
              required={false}
            />
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-ink-faint mb-2">
                Project type
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Web app",
                  "Marketing site",
                  "Redesign",
                  "Design only",
                  "Other",
                ].map((t) => (
                  <label
                    key={t}
                    className="cursor-pointer px-3 py-2 border border-line font-mono text-xs text-ink-dim hover:border-accent hover:text-accent has-[:checked]:border-accent has-[:checked]:text-accent has-[:checked]:bg-accent/5 transition-colors"
                  >
                    <input
                      type="radio"
                      name="type"
                      value={t}
                      className="hidden"
                    />
                    {t}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-mono text-[10px] uppercase tracking-wider text-ink-faint mb-2"
              >
                Tell me about it
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Rough scope, timeline, budget range..."
                className="w-full bg-bg-elev border border-line px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none transition-colors resize-none font-sans text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="group inline-flex items-center gap-3 px-6 py-3.5 bg-accent text-bg font-mono text-sm font-medium btn-glow disabled:opacity-60"
            >
              {status === "idle" && (
                <>
                  Send message
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                </>
              )}
              {status === "sending" && "Sending..."}
              {status === "sent" && "✓ Message sent"}
            </button>
          </motion.form>

          {/* Side info */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-2 space-y-8 lg:pl-8 lg:border-l lg:border-line"
          >
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-ink-faint mb-3">
                Direct
              </div>
              <a
                href="mailto:hello@studiodev.com"
                className="group flex items-center gap-3 text-xl hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 text-ink-dim group-hover:text-accent transition-colors" />
                hello@studiodev.com
              </a>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-ink-faint mb-3">
                Elsewhere
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="group flex items-center gap-3 text-ink-dim hover:text-ink transition-colors"
                >
                  <Github className="w-4 h-4" />
                  github.com/studiodev
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-3 text-ink-dim hover:text-ink transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  linkedin.com/in/studiodev
                </a>
              </div>
            </div>

            <div className="p-5 border border-line bg-bg-elev">
              <div className="font-mono text-[10px] uppercase tracking-wider text-ink-faint mb-2">
                Engagement
              </div>
              <div className="font-mono text-sm text-ink leading-relaxed">
                Fixed-price sprints · hourly · monthly retainers
              </div>
              <div className="mt-3 pt-3 border-t border-line text-xs text-ink-dim">
                Typical project: <span className="text-ink">€8k – €60k</span>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-[10px] uppercase tracking-wider text-ink-faint mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-bg-elev border border-line px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none transition-colors font-sans text-sm"
      />
    </div>
  );
}
