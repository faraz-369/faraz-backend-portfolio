import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faraz Mubeen Haider | Intelligent Systems Engineer",
  description:
    "I engineer intelligent systems that continuously create measurable value. Backend, data, and applied-AI work with measured results.",
  metadataBase: new URL("https://faraz369.vercel.app"),
  openGraph: {
    title: "Faraz Mubeen Haider | Intelligent Systems Engineer",
    description:
      "I engineer intelligent systems that continuously create measurable value. Backend, data, and applied-AI work with measured results.",
    type: "website",
    images: ["/images/github-header-banner.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Faraz Mubeen Haider | Intelligent Systems Engineer",
    description: "I engineer intelligent systems that continuously create measurable value. Backend, data, and applied-AI work with measured results."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
