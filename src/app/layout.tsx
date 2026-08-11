import type { Metadata } from "next";
import "./globals.css";
import "@/styles/variables.css";
import "@/styles/themes.css";
import "@/styles/animations.css";
import "@/styles/mechanical.css";
import { personal } from "@/data/personal";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: `${personal.name} - Aspiring Software Engineer`,
  description: "A futuristic mechanical portfolio and resume workstation for an aspiring software engineer.",
  openGraph: {
    title: `${personal.name} - Aspiring Software Engineer`,
    description: "Projects, skills, credentials, lab widgets, and contact information.",
    type: "website",
    images: ["/og/portfolio-preview.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
