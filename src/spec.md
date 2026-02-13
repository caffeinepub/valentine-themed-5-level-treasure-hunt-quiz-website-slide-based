# Specification

## Summary
**Goal:** Fix the production deployment failure and improve the intro-to-quiz experience and readability in the production build.

**Planned changes:**
- Investigate and resolve the production publish/deployment error so the app builds and deploys successfully, including ensuring any required static assets are included and served correctly in production.
- Add a smooth visual transition (e.g., fade) from the Intro screen to Level 1 when starting the quiz, without regressing existing animations or level rendering.
- Verify and fix any production layout/CSS issues that cause quiz question titles/prompts to be truncated or clipped on small mobile screens.

**User-visible outcome:** The app deploys successfully to production and loads without runtime errors; starting the quiz transitions smoothly into Level 1; all question text is fully readable on mobile and desktop in the production build.
