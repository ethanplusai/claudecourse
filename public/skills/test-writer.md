---
name: test-writer
description: Writes meaningful tests for JavaScript/TypeScript projects. Use this skill when you need unit tests, integration tests, or end-to-end tests. Covers Jest, Vitest, Playwright, and Testing Library. Tests behavior, not implementation.
---

# Test Writer

You write tests that catch real bugs and give confidence to ship. You test behavior, not implementation details.

## Philosophy

- Test what the code DOES, not HOW it does it
- A test should break when the behavior changes, not when the implementation changes
- If a test is hard to write, the code probably needs refactoring
- 80% coverage of the right things beats 100% coverage of the wrong things

## What to Test

### Always Test
- User-facing behavior (if a user clicks X, Y should happen)
- Business logic (calculations, transformations, validations)
- API endpoints (correct responses, error handling, auth)
- Edge cases (empty inputs, null values, boundary conditions)
- Error paths (what happens when things fail)

### Skip Testing
- Third-party library internals
- Simple getters/setters with no logic
- Framework boilerplate (layout components, static pages)
- CSS/styling (unless critical visual behavior)

## Test Structure

Every test follows Arrange → Act → Assert:

```typescript
test("should calculate total with tax", () => {
  // Arrange
  const items = [{ price: 10 }, { price: 20 }];
  const taxRate = 0.1;

  // Act
  const total = calculateTotal(items, taxRate);

  // Assert
  expect(total).toBe(33);
});
```

## Naming Convention

```typescript
describe("calculateTotal", () => {
  test("returns sum of item prices with tax", () => {});
  test("returns 0 for empty items array", () => {});
  test("throws when tax rate is negative", () => {});
});
```

Format: `describe` the unit, `test` what it does in plain English.

## Unit Tests (Vitest/Jest)

For pure functions, utilities, and business logic:

```typescript
import { describe, test, expect } from "vitest";

describe("validateEmail", () => {
  test("accepts valid email", () => {
    expect(validateEmail("user@example.com")).toBe(true);
  });

  test("rejects email without @", () => {
    expect(validateEmail("invalid")).toBe(false);
  });

  test("rejects empty string", () => {
    expect(validateEmail("")).toBe(false);
  });
});
```

## API/Integration Tests

For testing API routes with real database:

```typescript
describe("POST /api/progress", () => {
  test("returns 401 when not authenticated", async () => {
    const response = await fetch("/api/progress", {
      method: "POST",
      body: JSON.stringify({ lessonId: "123", action: "complete" }),
    });
    expect(response.status).toBe(401);
  });

  test("marks lesson as complete for authenticated user", async () => {
    // Arrange: create user and authenticate
    // Act: POST to the endpoint
    // Assert: check database for the progress record
  });
});
```

## E2E Tests (Playwright)

For testing full user flows:

```typescript
import { test, expect } from "@playwright/test";

test("user can sign up and access portal", async ({ page }) => {
  await page.goto("/signup");
  await page.fill('[name="name"]', "Test User");
  await page.fill('[name="email"]', "test@example.com");
  await page.fill('[name="password"]', "testpassword123");
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL("/portal");
  await expect(page.getByText("Welcome back")).toBeVisible();
});
```

## Mocking

- Mock external services (APIs, email, payment), not your own code
- Use dependency injection to make code testable
- Reset mocks between tests
- Prefer `vi.fn()` / `jest.fn()` for function mocks
- Use MSW (Mock Service Worker) for API mocking

## Test Setup

### Vitest config
```typescript
// vitest.config.ts
import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    globals: true,
    environment: "node", // or "jsdom" for React components
  },
});
```

### Scripts in package.json
```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test"
  }
}
```

## Red Flags in Tests

- Testing implementation details (checking internal state, method call counts)
- Tests that pass when the code is broken
- Tests that break when you refactor without changing behavior
- Tests that require 50 lines of setup for 1 line of assertion
- Snapshot tests for everything (snapshots are only useful for serialized output)
