// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oluwaseun Adeolu Okunola | Full-Stack Developer & DevOps Expert",
  description:
    "Explore the portfolio of Oluwaseun Adeolu Okunola, a full-stack developer with expertise in React, Next.js, Vue, Flask, and DevOps practices.",
  keywords: [
    "Oluwaseun Adeolu Okunola",
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "Vue.js",
    "DevOps",
    "CI/CD",
    "API Developer",
    "Flask",
    "Nigeria",
  ],
  icons: {
    icon: '/images/seun.jpg', // general favicon
    shortcut: '/images/seun.jpg', // explicitly defines shortcut icon
  },
  authors: [{ name: "Oluwaseun Adeolu Okunola" }],
  creator: "Oluwaseun Adeolu Okunola",
  openGraph: {
    title: "Oluwaseun Adeolu Okunola | Full-Stack Developer & DevOps Expert",
    description:
      "View the professional portfolio of Oluwaseun Adeolu Okunola, showcasing modern, secure, and scalable web development.",
    url: "https://oluwaseun.nexa.ng", // Replace with your domain
    siteName: "Oluwaseun Adeolu Okunola Portfolio",
    images: [
      {
        url: "/images/seun.jpg", // Replace with your Open Graph image path
        width: 1200,
        height: 630,
        alt: "Oluwaseun Adeolu Okunola Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oluwaseun Adeolu Okunola | Full-Stack Developer",
    description:
      "Explore my work in React, Next.js, Flask, Vue, and DevOps practices. Let&apos;s build something great.",
    images: ["/images/seun.jpg"],
    creator: "@toamutiltech", // Optional
  },
  metadataBase: new URL("https://oluwaseun.nexa.ng"), // Replace with your domain
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
