import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Claude Course — Learn Claude by Building a System That Gets You Clients",
    template: "%s | Claude Course",
  },
  description:
    "A free, hands-on course where you use Claude Code to build a fully automated client acquisition platform. Learn the most important skill in business right now — by building something real.",
  keywords: [
    "learn Claude",
    "Claude Code course",
    "free AI course",
    "learn AI",
    "client acquisition",
    "automated lead generation",
    "AI marketing course",
    "Claude tutorial",
    "build with AI",
    "AI for business",
    "free Claude course",
    "Anthropic Claude",
    "AI automation",
    "lead generation platform",
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
    title: "Learn Claude by Building a System That Gets You Clients",
    description:
      "Free hands-on course. Use Claude Code to build a fully automated client acquisition platform. No coding experience needed.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Claude Course — Learn Claude by Building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Claude by Building a System That Gets You Clients",
    description:
      "Free hands-on course. Use Claude Code to build a fully automated client acquisition platform.",
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
                "A free, hands-on course where you use Claude Code to build a fully automated client acquisition platform. Learn AI by building something real.",
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
                { "@type": "Thing", name: "Artificial Intelligence" },
                { "@type": "Thing", name: "Claude AI" },
                { "@type": "Thing", name: "Marketing Automation" },
                { "@type": "Thing", name: "Lead Generation" },
              ],
              teaches: [
                "How to use Claude Code to build software",
                "How to build an automated client acquisition system",
                "How to create a lead generation platform with AI",
                "How to set up automated email nurture sequences",
                "How to deploy a web application",
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
                "Learn Claude by building a system that gets you clients. Free AI course.",
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
