# Repository Checklist

Use this checklist when polishing a repository.

## Completion default

- if the user did not explicitly ask for a partial task, treat the goal as an end-to-end repository polish
- do not stop at README edits if docs, workflows, metadata, verification, or push are still unfinished
- if the very last mile is blocked by plan, permissions, or repo visibility, finish everything else and document the blocker clearly

## QA inventory

- list the user's requested deliverables
- list every file, page, workflow, and metadata field you changed
- list every claim you expect to make in the final response
- for user-facing docs or pages, list the pages, locales, and navigation paths you need to inspect

## Core files

- `README.md`
- `README.ja.md` if bilingual support is required
- `.gitignore`
- `LICENSE` if the repo is intended for public use

## README structure

- the title and one-paragraph introduction explain the project immediately
- section order is coherent for a first-time reader
- quick start appears before deep detail when onboarding matters
- headings are short, parallel, and easy to scan
- if a visual hero is used, the title is part of that hero instead of sitting awkwardly above it
- tech/status badges and language-switch controls are separated into distinct rows when both exist
- bilingual README variants expose an obvious language switch near the top
- `##` headings use fitting emoji when decorative section styling is part of the polish pass
- badges and language switches are present only when they help rather than clutter

## Visual assets

- if no header image exists, a simple reusable SVG icon is created
- the same SVG identity can seed the README header image, hero image, docs favicon, or docs logo when appropriate
- generated visual assets are consistent with the repository theme instead of looking unrelated or generic
- generated SVG icons use a flat, geometric style informed by Google Fonts icons and Material Symbols
- generated SVG icons do not directly copy existing company logos or trademarked marks

## Documentation

- `docs/` exists when multi-page docs are needed
- `docs/.vitepress/config.ts` is present for VitePress sites
- `docs/package.json` has `docs:dev`, `docs:build`, and `docs:preview`
- docs build successfully
- nav labels and page titles are consistent
- locale-specific pages mirror structure when bilingual docs are required
- guide pages are not orphaned from nav or landing-page links
- links, assets, and base paths are coherent in source and build configuration
- favicon, logo, or social image references point to the intended generated assets when those assets were added

## GitHub repo polish

- repository name matches intent
- repository description is set
- homepage is set
- website field points to the published docs or project site
- relevant topics are set
- README badges match the project
- social preview assets exist when the repo is meant to be shared publicly

## CI/CD

- `.github/workflows/` contains the expected workflows
- Pages deploys from a built artifact instead of the source tree
- workflow uses the correct repo-specific base URL
- Python helper commands use `uv run` when Python execution is part of the polish flow

## Final verification

- links resolve
- docs URLs use the current repo name
- README images use stable raw URLs or hosted assets
- repository metadata is updated when credentials are available
- workflows either run successfully or are intentionally gated with the limitation documented
- codebase QA is completed for changed README, docs, workflows, and metadata claims
- README and docs formatting are readable and structurally coherent
- generated SVG identity assets are wired where the final claim says they are used
- final claims only mention checks that were actually performed
- git status is clean after commit and push
