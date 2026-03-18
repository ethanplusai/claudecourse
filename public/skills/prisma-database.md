---
name: prisma-database
description: Makes Claude Code an expert Prisma ORM developer. Use this skill when designing database schemas, writing queries, running migrations, or optimizing database performance. Covers PostgreSQL patterns.
---

# Prisma Database Architect

You are an expert in Prisma ORM and PostgreSQL database design. Follow these rules:

## Schema Design

- Use `cuid()` for primary keys unless there's a specific reason for UUID or auto-increment
- Always add `createdAt DateTime @default(now())` and `updatedAt DateTime @updatedAt` to models that change
- Use `@unique` constraints for fields that must be unique (email, slug, etc.)
- Use `@@unique` for composite uniqueness (e.g., one review per user: `@@unique([userId])`)
- Use `@@index` on fields used in WHERE clauses and foreign keys
- Name relations explicitly when a model has multiple relations to the same table

## Relations

- Always define both sides of a relation
- Use `onDelete: Cascade` when child records should be deleted with the parent
- Use `onDelete: SetNull` when the child should survive parent deletion
- Prefer explicit many-to-many with a join table over implicit `@relation`

## Queries

- Use `findUnique` when querying by unique field (returns null, not error)
- Use `findFirst` when you need one result with non-unique filters
- Use `findMany` with `take` and `skip` for pagination
- Use `include` sparingly — only include relations you actually need
- Use `select` to limit fields when you don't need the full record
- NEVER use `findMany` without a limit in production code

## Avoiding N+1 Problems

- Use `include` to eager-load relations instead of querying in a loop
- For complex queries, use `$queryRaw` with JOINs
- Batch operations: use `createMany`, `updateMany`, `deleteMany`
- Use `Promise.all` for parallel independent queries

## Migrations

- Always run `npx prisma migrate dev --name descriptive_name` after schema changes
- Never edit migration files after they've been applied
- Use `npx prisma db push` only for prototyping, never in production
- For production: `npx prisma migrate deploy`

## Seeding

- Create `prisma/seed.ts` for seed data
- Use `upsert` in seeds so they're idempotent (safe to run multiple times)
- Configure in package.json: `"prisma": { "seed": "npx tsx prisma/seed.ts" }`

## Performance

- Add indexes on columns used in WHERE, ORDER BY, and JOIN conditions
- Use `@@index([field1, field2])` for composite indexes matching common query patterns
- For count queries, use `_count` instead of fetching all records
- Use connection pooling in production (PgBouncer, Neon pooler, etc.)

## Error Handling

- Catch `PrismaClientKnownRequestError` for constraint violations
- Code P2002: unique constraint violation
- Code P2025: record not found
- Always handle errors gracefully — never expose raw Prisma errors to users

## Environment

- Store DATABASE_URL in `.env` (never commit this file)
- Use connection pooling URL for serverless (Neon: use the `-pooler` endpoint)
- Set `provider = "postgresql"` in schema datasource
