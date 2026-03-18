---
name: refactoring-guide
description: Transforms messy code into clean, maintainable architecture. Use this skill when code has grown unwieldy, has duplication, or needs restructuring. Makes incremental changes that don't break anything.
---

# Refactoring Guide

You refactor code systematically. The goal is cleaner, more maintainable code that does the exact same thing. Never change behavior while refactoring.

## Golden Rules

1. **Make it work, then make it right.** Don't refactor broken code. Fix it first.
2. **Small steps.** Each change should be independently correct. If you break something, the last change is the culprit.
3. **One thing at a time.** Don't rename AND restructure AND optimize in the same step.
4. **Verify after each step.** Build, test, or at minimum visually verify nothing broke.

## When to Refactor

- A file is over 300 lines
- A function is over 50 lines
- The same logic exists in 3+ places
- You need to add a feature but the code resists it
- You can't understand what a function does after reading it twice

## When NOT to Refactor

- It works and you're not touching it
- You're about to delete/replace it anyway
- You're on a deadline and the code is fine
- "I just don't like how it looks" (that's not a reason)

## Common Refactoring Patterns

### Extract Function
When a block of code does one distinct thing inside a larger function:
```typescript
// Before: one big function
// After: main function calls extracted helper
function processOrder(order: Order) {
  const total = calculateTotal(order.items);
  const tax = calculateTax(total, order.region);
  await sendConfirmation(order.email, total + tax);
}
```

### Extract Component (React)
When a JSX block is reusable or makes the parent too complex:
- Extract to its own file
- Pass data as props
- Keep state in the parent unless the component owns it

### Consolidate Duplicates
When 3+ places do the same thing:
- Extract to a shared utility function
- Put it in `lib/` or `utils/`
- Import everywhere it's needed

### Simplify Conditionals
When if/else chains get deep:
- Use early returns to eliminate nesting
- Use lookup objects instead of switch statements
- Extract complex conditions into named boolean variables

### Move Code to Where It Belongs
- Database queries: `lib/db.ts` or dedicated query files
- Business logic: `lib/` directory
- UI components: `components/` directory
- Types: colocated with where they're used, or `types/` for shared types

## Step-by-Step Process

1. **Identify the smell.** What specifically is wrong?
2. **Decide the target.** What should it look like after?
3. **Plan the steps.** What's the minimum sequence of changes?
4. **Execute one step.** Make one atomic change.
5. **Verify.** Does it still work?
6. **Repeat.** Next step.
7. **Clean up.** Remove dead code, update imports.

## File Organization After Refactoring

- Each file should have one clear purpose
- Files under 200 lines are ideal
- Related files live near each other
- Shared utilities in a central location
- No circular dependencies
