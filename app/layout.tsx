import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faraz Mubeen Haider | Software Engineer — Backend & Distributed Systems",
  description:
    "Faraz Mubeen Haider is a Software Engineer focused on backend systems and distributed systems, building Python APIs, FastAPI applications, PostgreSQL-backed services, and data-intensive workflows.",
  metadataBase: new URL("https://faraz369.vercel.app"),
  openGraph: {
    title: "Faraz Mubeen Haider | Backend & Distributed Systems",
    description:
      "Software Engineer building backend applications, reliable APIs, PostgreSQL-backed services, and data-intensive workflows.",
    type: "website",
    images: ["/images/github-header-banner.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Faraz Mubeen Haider | Software Engineer",
    description: "Backend systems, distributed systems, APIs, and data-intensive applications."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
