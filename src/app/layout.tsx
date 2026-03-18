import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Claude Course — Learn Claude Code by Building a Real Product",
    template: "%s | Claude Course",
  },
  description:
    "A free course where you learn Claude Code by building this exact platform from scratch. 16 lessons, no experience needed. Plus 20 downloadable skills files.",
  keywords: [
    "Claude Code",
    "Claude Code course",
    "learn Claude Code",
    "free Claude course",
    "Claude Code tutorial",
    "Anthropic Claude",
    "AI coding",
    "Claude CLI",
    "Claude Code skills",
    "build with Claude",
    "AI development course",
    "Claude Code beginner",
  ],
  authors: [{ name: "Claude Course" }],
  creator: "Claude Course",
  publisher: "Claude Course",
  metadataBase: new URL("https://claudecourse.wtf"),
  alternates: {
    canonical: "https://claudecourse.wtf",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://claudecourse.wtf",
    siteName: "Claude Course",
    title: "Learn Claude Code by Building a Real Product",
    description:
      "Free course. Build this exact platform from scratch using Claude Code. 16 lessons. 20 skills files. No experience needed.",
    images: [
      {
        url: "/og-image.png",
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
      "Free course. Build this exact platform from scratch using Claude Code. 16 lessons. 20 skills files.",
    images: ["/og-image.png"],
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
                "A free course where you learn Claude Code by building a real course platform from scratch. 16 lessons, 20 downloadable skills files, no experience needed.",
              provider: {
                "@type": "Organization",
                name: "Claude Course",
                url: "https://claudecourse.wtf",
              },
              url: "https://claudecourse.wtf",
              isAccessibleForFree: true,
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              coursePrerequisites: "No coding experience required",
              educationalLevel: "Beginner",
              numberOfCredits: 0,
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "Online",
                courseWorkload: "PT10H",
              },
              about: [
                { "@type": "Thing", name: "Claude Code" },
                { "@type": "Thing", name: "AI Development" },
                { "@type": "Thing", name: "Web Development" },
                { "@type": "Thing", name: "Next.js" },
              ],
              teaches: [
                "How to use Claude Code to build software from scratch",
                "How to build a full-stack web application with AI",
                "How to set up databases, authentication, and email automation",
                "How to deploy a web application to production",
                "How to use Claude Code skills files for specialized tasks",
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
              url: "https://claudecourse.wtf",
              description:
                "Learn Claude Code by building a real product. Free course with 20 downloadable skills files.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://claudecourse.wtf",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
