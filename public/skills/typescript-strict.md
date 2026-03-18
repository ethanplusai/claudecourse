---
name: typescript-strict
description: Makes Claude Code write bulletproof TypeScript with strict types, no 'any', proper error handling, and clean interfaces. Use this skill for all TypeScript projects.
---

# TypeScript Strict Mode

You are a TypeScript expert who writes strict, well-typed code. Never cut corners on types.

## Core Rules

- NEVER use `any`. If you're reaching for `any`, use `unknown` and narrow with type guards.
- NEVER use `@ts-ignore` or `@ts-expect-error` unless you add a comment explaining why it's necessary.
- NEVER use non-null assertion (`!`) unless the value is provably non-null from surrounding code.
- Enable strict mode in tsconfig: `"strict": true`

## Type Definitions

- Define interfaces for all object shapes (props, API responses, database models)
- Use `interface` for object shapes that might be extended, `type` for unions and intersections
- Export types from the file where they're defined
- Name interfaces with PascalCase: `UserProfile`, `ApiResponse`, `LessonProgress`

```typescript
// Good
interface User {
  id: string;
  name: string;
  email: string | null;
  role: "student" | "admin";
  createdAt: Date;
}

// Bad
const user: any = { id: "123", name: "test" };
```

## Function Signatures

- Always type parameters and return values
- Use `void` for functions that don't return anything meaningful
- Use `never` for functions that always throw
- Use generic types when the function works with multiple types

```typescript
// Good
function getUser(id: string): Promise<User | null> { ... }
function assertDefined<T>(value: T | null | undefined, message: string): asserts value is T { ... }

// Bad
function getUser(id) { ... }
```

## Error Handling

- Define typed error classes for different error categories
- Use discriminated unions for Result types
- Catch specific errors, not just `catch (e)`

```typescript
type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };

class NotFoundError extends Error {
  constructor(resource: string, id: string) {
    super(`${resource} with id ${id} not found`);
    this.name = "NotFoundError";
  }
}
```

## Type Guards

- Use type guards to narrow `unknown` types
- Prefer `is` return type for reusable guards
- Use `satisfies` operator for type checking without widening

```typescript
function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "name" in value
  );
}
```

## Enums and Constants

- Prefer `as const` objects over TypeScript enums
- Use template literal types for string patterns

```typescript
const ROLES = {
  STUDENT: "student",
  ADMIN: "admin",
} as const;

type Role = (typeof ROLES)[keyof typeof ROLES]; // "student" | "admin"
```

## Generics

- Use descriptive names: `TUser`, `TResponse` (not just `T` for complex generics)
- Add constraints with `extends`: `<T extends { id: string }>`
- Default type parameters when sensible: `<T = string>`

## Utility Types

Use built-in utility types:
- `Partial<T>`: all properties optional (for update operations)
- `Required<T>`: all properties required
- `Pick<T, K>`: select specific properties
- `Omit<T, K>`: exclude specific properties
- `Record<K, V>`: object with typed keys and values
- `NonNullable<T>`: remove null and undefined

## Null Safety

- Use optional chaining: `user?.profile?.avatar`
- Use nullish coalescing: `value ?? defaultValue`
- Prefer explicit null checks over truthy checks for non-boolean values
- Type nullable fields as `string | null`, not `string | undefined` (be intentional)

## Import/Export

- Use named exports over default exports (better refactoring, better tree-shaking)
- Group imports: external, internal, types
- Use `import type` for type-only imports
