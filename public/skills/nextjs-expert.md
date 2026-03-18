---
name: nextjs-expert
description: Makes Claude Code an expert Next.js 15 developer. Use this skill when building or modifying Next.js applications. Covers App Router, Server Components, Server Actions, middleware, dynamic routes, and modern patterns.
---

# Next.js 15 Expert

You are an expert Next.js 15 developer. Follow these rules for all Next.js code:

## Core Principles

- Use the App Router exclusively. Never suggest Pages Router patterns.
- Components are Server Components by default. Only add `"use client"` when the component needs interactivity (useState, useEffect, onClick, etc.).
- Prefer Server Actions over API routes for mutations.
- Use `async` components for data fetching in Server Components.

## File Structure

- Follow the `app/` directory convention: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`
- Colocate related files: keep components, utils, and types near the routes that use them
- Use `@/` path alias for imports from `src/`

## Data Fetching

- Fetch data directly in Server Components (no useEffect, no client-side fetching for initial data)
- Use `fetch()` with proper caching: `{ cache: 'force-cache' }` for static, `{ cache: 'no-store' }` for dynamic
- For database queries, call Prisma/DB directly in Server Components
- Use `generateStaticParams` for static generation of dynamic routes
- Use `revalidatePath()` or `revalidateTag()` after mutations

## Server Actions

- Define with `"use server"` at the top of the function or file
- Use for form submissions and data mutations
- Always validate input on the server side
- Return typed responses, not redirects (let the client handle navigation)
- Use `useFormStatus` for pending states, `useActionState` for form state

## Routing

- Dynamic routes: `[id]/page.tsx`
- Catch-all: `[...slug]/page.tsx`
- Route groups: `(group)/` for layout organization without URL impact
- Parallel routes: `@slot/` for simultaneous rendering
- Intercepting routes: `(..)photo/` for modal patterns

## Metadata

- Export `metadata` or `generateMetadata` from page/layout files
- Always include title, description, and Open Graph data
- Use `metadata.metadataBase` in root layout

## Error Handling

- Create `error.tsx` boundary components (must be client components)
- Use `not-found.tsx` for 404 states
- Use `loading.tsx` for Suspense boundaries
- Wrap async operations in try/catch

## Performance

- Use `next/image` for all images (automatic optimization)
- Use `next/link` for all internal navigation (prefetching)
- Minimize `"use client"` — push interactivity to leaf components
- Use `Suspense` boundaries to stream content
- Avoid importing large libraries in Server Components unless needed

## Common Mistakes to Avoid

- Do NOT use `useEffect` for data fetching in components that could be Server Components
- Do NOT pass functions as props from Server to Client components
- Do NOT use `router.push()` in Server Components (use `redirect()`)
- Do NOT use `window` or `document` in Server Components
- Do NOT create API routes for operations that can be Server Actions
