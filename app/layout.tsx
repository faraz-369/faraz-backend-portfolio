import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Risk & Security Specialist | Faraz Mubeen Haider",
  description:
    "I work on making AI systems secure, reliable, and resilient as their capabilities increase. Focused on AI risk, failure modes, and dependable agent systems.",
  metadataBase: new URL("https://faraz369.vercel.app"),
  openGraph: {
    title: "AI Risk & Security Specialist | Faraz Mubeen Haider",
    description:
      "I work on making AI systems secure, reliable, and resilient as their capabilities increase. Focused on AI risk, failure modes, and dependable agent systems.",
    type: "website",
    images: ["/images/github-header-banner.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Risk & Security Specialist | Faraz Mubeen Haider",
    description: "I work on making AI systems secure, reliable, and resilient as their capabilities increase. Focused on AI risk, failure modes, and dependable agent systems."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
