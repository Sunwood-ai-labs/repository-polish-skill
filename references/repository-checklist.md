# Repository Checklist

Use this checklist when polishing a repository.

## Completion default

- if the user did not explicitly ask for a partial task, treat the goal as an end-to-end repository polish
- do not stop at README edits if docs, workflows, metadata, verification, or push are still unfinished
- if the very last mile is blocked by plan, permissions, or repo visibility, finish everything else and document the blocker clearly

## Core files

- `README.md`
- `README.ja.md` if bilingual support is required
- `.gitignore`
- `LICENSE` if the repo is intended for public use

## Documentation

- `docs/` exists when multi-page docs are needed
- `docs/.vitepress/config.ts` is present for VitePress sites
- `docs/package.json` has `docs:dev`, `docs:build`, and `docs:preview`
- docs build successfully

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

## Final verification

- links resolve
- docs URLs use the current repo name
- README images use stable raw URLs or hosted assets
- repository metadata is updated when credentials are available
- workflows either run successfully or are intentionally gated with the limitation documented
- git status is clean after commit and push
