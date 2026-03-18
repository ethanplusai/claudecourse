import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Claude Course — Free Course to Learn Claude Code by Building",
    template: "%s | Claude Course",
  },
  description:
    "Learn Claude Code by building a real course platform from scratch. Free, hands-on, 16 lessons. No coding experience needed. You end with a deployed app.",
  keywords: [
    "claude course",
    "learn claude",
    "claude code course",
    "free claude course",
    "claude code tutorial",
    "learn claude code",
    "claude ai course",
    "free AI course",
    "learn AI",
    "build with claude",
    "claude tutorial",
    "anthropic claude course",
    "claude code for beginners",
    "ai coding course",
    "build with ai",
    "claude code free",
  ],
  authors: [{ name: "Claude Course" }],
  creator: "Claude Course",
  publisher: "Claude Course",
  metadataBase: new URL("https://claudecourse.dev"),
  alternates: {
    canonical: "https://claudecourse.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://claudecourse.dev",
    siteName: "Claude Course",
    title: "Learn Claude Code by Building a Real Product",
    description:
      "Free course. 16 lessons. Build a full course platform from scratch using Claude Code. No experience needed. You end with a deployed app.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Claude Course — Learn Claude Code by Building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Claude Code by Building a Real Product",
    description:
      "Free course. Build a full platform from scratch using Claude Code. No coding experience needed.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Claude Course",
              description:
                "A free, hands-on course where you learn Claude Code by building a real course platform from scratch. 16 lessons, no experience needed, deployed app at the end.",
              provider: {
                "@type": "Organization",
                name: "Claude Course",
                url: "https://claudecourse.dev",
              },
              url: "https://claudecourse.dev",
              isAccessibleForFree: true,
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              coursePrerequisites: "No coding experience required",
              educationalLevel: "Beginner",
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "Online",
                courseWorkload: "PT8H",
              },
              about: [
                { "@type": "Thing", name: "Claude Code" },
                { "@type": "Thing", name: "Claude AI" },
                { "@type": "Thing", name: "Anthropic Claude" },
                { "@type": "Thing", name: "AI Development" },
                { "@type": "Thing", name: "Web Development" },
              ],
              teaches: [
                "How to use Claude Code to build web applications",
                "How to build a course platform with Next.js and Claude Code",
                "How to set up databases, authentication, and email automation",
                "How to deploy applications to production",
                "How to monetize a course platform",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Claude Course",
              url: "https://claudecourse.dev",
              description:
                "Free course to learn Claude Code by building a real product. 16 lessons. No experience needed.",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
