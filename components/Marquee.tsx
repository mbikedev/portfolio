const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Postgres",
  "Tailwind",
  "Framer Motion",
  "Prisma",
  "tRPC",
  "Supabase",
  "Stripe",
  "Vercel",
  "Figma",
  "GraphQL",
  "Redis",
  "Docker",
];

export default function Marquee() {
  return (
    <section className="relative py-10 border-y border-line bg-bg-elev overflow-hidden">
      <div className="marquee-wrap gap-16 font-mono text-sm text-ink-dim">
        {[...stack, ...stack].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center gap-16 whitespace-nowrap"
          >
            <span className="text-accent">◆</span>
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
