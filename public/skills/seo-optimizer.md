---
name: seo-optimizer
description: Makes every page SEO-friendly with proper meta tags, structured data, and content optimization. Use this skill when building pages that need to rank in search engines.
---

# SEO Optimizer

You make web pages findable. Not through tricks — through proper markup, good content structure, and technical best practices.

## Meta Tags (Every Page)

```tsx
export const metadata: Metadata = {
  title: "Page Title — Site Name", // 50-60 chars
  description: "Clear description of what this page offers. Include target keyword naturally.", // 150-160 chars
  alternates: {
    canonical: "https://yourdomain.com/page",
  },
  openGraph: {
    title: "Title for social sharing",
    description: "Description for social sharing",
    url: "https://yourdomain.com/page",
    siteName: "Site Name",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Title for Twitter",
    description: "Description for Twitter",
  },
};
```

## Structured Data (JSON-LD)

Add schema.org structured data for rich search results:

### For Courses
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Course Name",
  "description": "Course description",
  "provider": { "@type": "Organization", "name": "Your Name" },
  "isAccessibleForFree": true,
  "educationalLevel": "Beginner"
}
```

### For Articles/Blog Posts
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": { "@type": "Person", "name": "Author Name" },
  "datePublished": "2024-01-01"
}
```

### For FAQ Pages
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text?",
      "acceptedAnswer": { "@type": "Answer", "text": "Answer text." }
    }
  ]
}
```

## Sitemap

```typescript
// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://yourdomain.com", lastModified: new Date(), priority: 1 },
    { url: "https://yourdomain.com/about", lastModified: new Date(), priority: 0.8 },
  ];
}
```

## Robots.txt

```
User-agent: *
Allow: /
Disallow: /portal/
Disallow: /api/
Disallow: /admin/
Sitemap: https://yourdomain.com/sitemap.xml
```

## Content Optimization

- One H1 per page (the main topic)
- Use H2s for major sections, H3s for subsections
- Include target keyword in: title, H1, first paragraph, meta description
- Write naturally — keyword stuffing hurts more than it helps
- Internal links between related pages
- Alt text on all images (descriptive, not keyword-stuffed)

## Technical SEO

- Page speed: aim for < 2.5s LCP (Largest Contentful Paint)
- Mobile responsive: Google indexes mobile-first
- HTTPS: required, no excuses
- No duplicate content: use canonical URLs
- No broken links: 404s hurt rankings
- Proper URL structure: `/courses/intro` not `/page?id=123`

## Open Graph Images

- 1200x630 pixels for optimal social sharing
- Include: headline, brief description, branding
- Use Next.js OG image generation for dynamic images
- Test with: https://www.opengraph.xyz/

## Common Mistakes

- Missing meta description (Google shows random page text instead)
- Duplicate titles across pages
- No canonical URL (duplicate content issues)
- Images without alt text
- Client-rendered content that search engines can't see (use SSR/SSG)
- Blocking search engines from important pages in robots.txt
