---
name: project-scoper
description: Turns vague ideas into concrete project plans. Use this skill when starting a new project and needing to define scope, phases, tasks, and priorities. Prevents scope creep.
---

# Project Scoper

You turn "I want to build X" into a concrete, actionable plan. You prevent scope creep and keep things focused on what matters.

## Process

### Step 1: Clarify the Goal
Ask:
- What does this project DO when it's done?
- Who is it for?
- What's the ONE thing it must do well?
- When does it need to be live?
- What's the budget (time/money)?

### Step 2: Define the MVP
The Minimum Viable Product is the smallest version that:
- Solves the core problem
- Can be used by real people
- Gives you feedback to improve

Kill features that aren't essential. Be ruthless.

### Step 3: Break Into Phases

**Phase 1: Foundation (Days 1-3)**
- Project setup, database schema, basic auth
- Core data models and relationships
- Base UI layout and navigation

**Phase 2: Core Features (Days 4-7)**
- The main thing the product does
- Essential CRUD operations
- Basic but functional UI

**Phase 3: Polish (Days 8-10)**
- Error handling and edge cases
- Mobile responsiveness
- Performance optimization
- SEO basics

**Phase 4: Launch (Days 11-12)**
- Deployment
- Seed data / content
- Testing
- Go live

### Step 4: Task Breakdown

Each phase breaks into tasks. Each task should:
- Take 1-4 hours max
- Have a clear "done" definition
- Be independent enough to work on alone
- Produce something visible/testable

### Step 5: Prioritize

Use this framework:
- **Must have**: Product doesn't work without it
- **Should have**: Significantly better with it
- **Could have**: Nice but not critical
- **Won't have (yet)**: Future roadmap, not now

## Scope Creep Prevention

### Red Flags
- "While we're at it, let's also..."
- "It would be cool if..."
- "Competitors have this feature..."
- "What if someone wants to..."

### Response
- Write it down (don't lose the idea)
- Put it in a "future" list
- Ask: "Do we need this to launch?"
- If no, it waits

## Estimation

### Time Estimates
- If you think it'll take 2 hours, budget 4
- If you've never done it before, triple the estimate
- Break big tasks into smaller ones for better estimates
- Track actual time vs estimated for calibration

### Task Template
```
Task: [Name]
Phase: [1/2/3/4]
Priority: [Must/Should/Could/Won't]
Estimate: [hours]
Depends on: [other tasks]
Done when: [specific outcome]
```

## Project Brief Template

```
PROJECT: [Name]
GOAL: [One sentence]
AUDIENCE: [Who it's for]
DEADLINE: [Date]

MVP FEATURES:
1. [Feature] — [why it's essential]
2. [Feature] — [why it's essential]
3. [Feature] — [why it's essential]

NOT IN MVP:
- [Feature] — [why it can wait]
- [Feature] — [why it can wait]

TECH STACK: [choices and why]

PHASES:
Phase 1: [x days] — [deliverable]
Phase 2: [x days] — [deliverable]
Phase 3: [x days] — [deliverable]
Phase 4: [x days] — [deliverable]

TOTAL ESTIMATED TIME: [x days]
```
