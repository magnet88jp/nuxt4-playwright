# Repository Guidelines

## Project Structure & Module Organization
The app follows the Nuxt 4 convention: place routes and page logic under `app/`, with the entry shell in `app/app.vue`. Shared styling belongs in `app/assets/css/main.css`, which already wires Tailwind CSS and `@nuxt/ui`; prefer utility classes for component styling. Static files such as favicons or robots directives live in `public/`. Global configuration, modules, and runtime toggles belong in `nuxt.config.ts`; update compatibility dates and module lists there. Linting inherits from `.nuxt/eslint.config.mjs` via the local `eslint.config.mjs`, so extend stylistic rules in that file. The generated `.nuxt/` directory should never be edited or committed.

## Build, Test, and Development Commands
Install dependencies with `pnpm install` to stay aligned with the lockfile. Run `pnpm dev` for the hot-reloading development server on http://localhost:3000. Use `pnpm build` to compile a production bundle and `pnpm preview` to smoke-test the result. `pnpm generate` creates a prerendered output for static hosting. After dependency updates, rerun `pnpm install` (or `pnpm run postinstall`) to refresh Nuxt type generation.

## Coding Style & Naming Conventions
The ESLint stylistic config enforces two-space indentation, single quotes, and no semicolons across scripts. Author components in `<script setup lang="ts">` when possible and type props explicitly. Components and composables should use PascalCase filenames (`MyWidget.vue`) while utilities—once introduced—use camelCase. Prefer Tailwind utility classes over ad-hoc CSS and lean on `@nuxt/ui` primitives for a consistent design system.

## Testing Guidelines
We rely on `@nuxt/test-utils` with Playwright for end-to-end coverage. Locate browser specs under `tests/e2e/` and mirror route names where practical, e.g., `tests/e2e/home.spec.ts`. Run the suite with `pnpm dlx @nuxt/test-utils playwright test`; add `--ui` during debugging. Snapshot updates require `--update-snapshots` to keep baseline diffs explicit. When introducing component logic, back it with unit tests via Vitest (`pnpm dlx vitest run`) and target the critical path rather than exhaustive DOM snapshots.

## Commit & Pull Request Guidelines
Commit history favors concise, imperative summaries (`add tailwind`, `update`). Keep messages under 72 characters and expand on context in the body when needed. Every pull request should describe the change, provide manual test notes (commands run, browsers checked), and attach screenshots for UI tweaks. Link to GitHub issues with `Fixes #123` where applicable and request a review once lint and tests pass locally.
