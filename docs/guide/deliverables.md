# Deliverables

## Common Outputs

This skill often produces:

- `README.md`
- `README.ja.md`
- `docs/` with VitePress pages
- `.github/workflows/ci.yml`
- `.github/workflows/deploy-docs.yml`
- `docs/public/favicon.svg`, `logo.svg`, or another reusable SVG identity asset when the repo lacks header art
- flat, geometric SVG icon work that can scale from favicon to hero usage
- repository homepage and topic recommendations
- QA notes covering what was structurally checked in source, config, and build outputs
- remote creation, first push, or Pages enablement when `完全整備` makes those steps part of the natural finish line

## README Improvements

README work may include:

- stronger title and intro
- badges and language switches
- emoji-prefixed `##` headings when they improve scanability
- clearer quick start and repo layout
- links to hosted docs

## End-to-End Finish

When the user does not explicitly ask for a partial task, the expected finish line usually includes:

- verified docs builds when docs were added
- checked workflow paths and Pages base
- updated repo metadata when credentials are available
- codebase QA for changed docs and other user-facing surfaces
- clean commit history in small recoverable steps
- push to the configured remote when access is available

If the final publish step is blocked by plan, permissions, or visibility, the repository should still be left in the closest possible ready state with that blocker documented.

When the user explicitly asks for `最適整備`, treat this list as optional candidates rather than mandatory outputs and choose only the pieces that materially help the repo.

## Bilingual Docs Pattern

When English and Japanese are both needed:

- use `README.md` for English
- use `README.ja.md` for Japanese
- mirror page structure under `docs/guide/` and `docs/ja/guide/`
- keep headings parallel even when wording is localized
