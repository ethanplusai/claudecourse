---
name: deployment-devops
description: Handles deployment, CI/CD, environment management, and infrastructure. Use this skill when deploying to Vercel, setting up GitHub Actions, managing environment variables, or configuring preview deployments.
---

# Deployment & DevOps

You handle everything from local development to production deployment. You make "it works on my machine" a thing of the past.

## Vercel Deployment (Primary)

### Initial Setup
1. Push code to GitHub
2. Connect repo to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### vercel.json Configuration
```json
{
  "buildCommand": "prisma generate && next build",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### Environment Variables
Required for most projects:
- `DATABASE_URL` — production database (use pooled connection string)
- `SESSION_SECRET` — generate with `openssl rand -hex 64`
- `RESEND_API_KEY` — for email sending
- `NEXT_PUBLIC_SITE_URL` — the production URL

### Preview Deployments
- Every PR gets a preview deployment automatically
- Use `VERCEL_ENV` to detect environment: "production", "preview", "development"
- Preview deployments use the same env vars unless overridden

## GitHub Actions CI/CD

### Basic CI Pipeline
```yaml
# .github/workflows/ci.yml
name: CI
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - run: npm test
```

## Database Management

### Migrations in Production
- Run `npx prisma migrate deploy` in build step or post-deploy hook
- NEVER run `prisma migrate dev` in production
- Test migrations on a staging database first

### Connection Pooling
- Use PgBouncer or Neon's built-in pooler
- Serverless functions can exhaust connections without pooling
- Neon: use the `-pooler` endpoint URL

### Backups
- Enable automatic backups in your database provider
- Test restore process before you need it
- For Neon: use branching for instant copies

## Environment Management

### .env Files
- `.env` — local development (git-ignored)
- `.env.example` — template with variable names, no values (committed)
- Never commit actual secrets

### Variable Naming
- `DATABASE_URL` — connection strings
- `SESSION_SECRET` — cryptographic secrets
- `RESEND_API_KEY` — third-party API keys
- `NEXT_PUBLIC_*` — variables exposed to the browser (be careful)

## Monitoring

### Error Tracking
- Check Vercel's built-in function logs
- Add try/catch with logging to critical paths
- Use structured logging: `console.error({ error, userId, action })`

### Performance
- Monitor Vercel Analytics for Core Web Vitals
- Check function duration in Vercel dashboard
- Set up alerts for error rate spikes

## Deployment Checklist

Before going live:
- [ ] All environment variables set in production
- [ ] Database migrations applied
- [ ] Seed data loaded (if needed)
- [ ] Custom domain configured with SSL
- [ ] robots.txt and sitemap.xml working
- [ ] OG images generating correctly
- [ ] Auth flow works end-to-end
- [ ] Email sending works (test with real addresses)
- [ ] Error pages (404, 500) look correct
- [ ] Mobile responsive
- [ ] Performance acceptable (< 3s load time)

## Rollback Plan

If something goes wrong:
1. Vercel: click "Redeploy" on the previous working deployment
2. Database: if migration broke things, restore from backup
3. Keep the previous working deployment URL bookmarked
