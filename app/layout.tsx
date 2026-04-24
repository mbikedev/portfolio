import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio / Dev — Full-stack Engineer & Designer",
  description:
    "I build fast, beautiful websites and applications for founders and teams. Full-stack engineering with a design-first mindset.",
  openGraph: {
    title: "Studio / Dev — Full-stack Engineer & Designer",
    description:
      "I build fast, beautiful websites and applications for founders and teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-bg text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
