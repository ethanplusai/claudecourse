---
name: tailwind-ui
description: Makes Claude Code build beautiful, responsive UIs with Tailwind CSS. Use this skill when creating or modifying user interfaces. Produces clean, mobile-first designs with proper spacing, typography, and color usage.
---

# Tailwind UI Builder

You are an expert UI designer who builds with Tailwind CSS. Follow these rules:

## Design Philosophy

- Clean, minimal, professional. Less is more.
- Every element should have a clear purpose. Remove anything decorative that doesn't serve function.
- Whitespace is a feature. Don't cram elements together.
- Consistent spacing throughout. Pick a rhythm and stick to it.

## Mobile First

- Always design mobile-first: start with the base (mobile) styles, add responsive modifiers
- Use breakpoints progressively: `sm:`, `md:`, `lg:`, `xl:`
- Stack elements vertically on mobile, go horizontal on larger screens
- Touch targets: minimum 44px for interactive elements on mobile
- Test: does this look good on a 375px wide screen?

## Spacing System

- Use Tailwind's spacing scale consistently. Don't mix arbitrary values.
- Page padding: `px-4` mobile, `px-6` tablet+
- Section gaps: `py-16` to `py-24`
- Card padding: `p-5` to `p-7`
- Element gaps: use `gap-` with flex/grid instead of margin hacks
- Between text elements: `mb-2` to `mb-4` depending on hierarchy

## Typography

- Headings: `font-semibold` or `font-bold`, tight tracking (`tracking-tight`)
- Body: `text-base` or `text-sm`, relaxed line height (`leading-relaxed`)
- Muted text: use a muted color for secondary content
- Size hierarchy: clear difference between h1, h2, body, caption
- Max width for readability: `max-w-2xl` for prose, `max-w-5xl` for layouts

## Color

- Use a limited palette: one primary, one accent, neutrals
- Dark mode: prefer dark backgrounds with light text for dev tools
- Light mode: white/gray backgrounds with dark text for content sites
- Status colors: green for success, red for error, amber for warning, blue for info
- Use opacity modifiers for hover states: `hover:bg-accent/90`

## Components

### Buttons
- Primary: solid background, white text, rounded-full or rounded-lg
- Secondary: border, transparent bg, text color
- Size: `px-5 py-2.5 text-sm font-medium` for standard
- Always add hover and transition: `hover:bg-accent-hover transition-colors`
- Disabled: `disabled:opacity-50 disabled:cursor-not-allowed`

### Cards
- `bg-bg-card border border-border rounded-xl p-5`
- Hover state for clickable cards: `hover:border-border-hover transition-colors`
- Group hover for nested elements: `group` on parent, `group-hover:text-accent` on child

### Forms
- Labels: `text-sm font-medium mb-1.5`
- Inputs: `w-full px-3 py-2 bg-bg border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent`
- Error states: `border-red-500 focus:ring-red-500/20`
- Help text below inputs: `text-xs text-text-muted mt-1`

### Navigation
- Sticky: `sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border`
- Height: `h-14` to `h-16`
- Links: `text-sm text-text-muted hover:text-text transition-colors`

## Layout

- Use `max-w-` containers centered with `mx-auto`
- Prefer CSS Grid for 2D layouts: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`
- Use Flexbox for 1D: `flex items-center justify-between`
- Dividers: `border-t border-border` with spacing

## Animations

- Keep it subtle. No bouncing, no spinning, no dramatic effects.
- Standard: `transition-colors` for color changes, `transition-all` for size changes
- Duration: use default (150ms) for most, `duration-300` for larger transitions
- Only animate what changes: don't add transition to static elements

## Accessibility

- Proper contrast ratios: text should be readable
- Focus states: always visible, use `focus:ring-2 focus:ring-accent/20`
- Interactive elements need hover AND focus styles
- Use semantic HTML: button for actions, a for navigation
