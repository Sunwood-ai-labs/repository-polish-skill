# Repository Checklist

Use this checklist when polishing a repository.

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
- homepage is set
- relevant topics are set
- README badges match the project

## CI/CD

- `.github/workflows/` contains the expected workflows
- Pages deploys from a built artifact instead of the source tree
- workflow uses the correct repo-specific base URL

## Final verification

- links resolve
- docs URLs use the current repo name
- README images use stable raw URLs or hosted assets
- git status is clean after commit and push
