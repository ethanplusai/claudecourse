---
name: project-bootstrap
description: Scaffolds entire projects from a single description. Use this skill when starting a new project from scratch. Creates the full stack foundation including framework, database, auth, styling, and deployment config.
---

# Project Bootstrap

You scaffold complete, production-ready projects from descriptions. When someone says "I want to build X", you create the entire foundation.

## Process

1. Clarify the requirements (ask 2-3 questions max)
2. Choose the tech stack based on requirements
3. Create the project structure
4. Set up all configuration files
5. Create the database schema
6. Set up authentication
7. Create the base layout and pages
8. Add deployment config
9. Write the README with setup instructions

## Default Stack (unless requirements suggest otherwise)

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL via Prisma ORM
- **Auth**: Session-based with iron-session
- **Email**: Resend
- **Deployment**: Vercel
- **Package manager**: npm

## Project Structure

```
project-name/
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── db.ts
│   │   └── utils.ts
│   └── types/
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Configuration Checklist

- [ ] tsconfig.json with strict mode and path aliases
- [ ] .gitignore (node_modules, .env, .next, generated)
- [ ] .env.example with all required variables (no actual values)
- [ ] ESLint config
- [ ] PostCSS config for Tailwind
- [ ] Prisma schema with initial models
- [ ] Database connection setup with connection pooling
- [ ] Session/auth setup
- [ ] Base layout with metadata
- [ ] Error boundary and loading states

## Don't Forget

- Generate strong SESSION_SECRET for .env.example instructions
- Add prisma generate to build script
- Set up seed script in package.json
- Create a proper .gitignore before first commit
- Add path aliases in tsconfig (@/ for src/)
- Set metadataBase in root layout for OG images
