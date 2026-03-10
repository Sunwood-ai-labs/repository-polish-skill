# Deliverables

## Common Outputs

This skill often produces:

- `README.md`
- `README.ja.md`
- `docs/` with VitePress pages
- `.github/workflows/ci.yml`
- `.github/workflows/deploy-docs.yml`
- repository homepage and topic recommendations
- QA notes covering what was structurally checked and what was inspected in a browser

## README Improvements

README work may include:

- stronger title and intro
- badges and language switches
- clearer quick start and repo layout
- links to hosted docs

## End-to-End Finish

When the user does not explicitly ask for a partial task, the expected finish line usually includes:

- verified docs builds when docs were added
- checked workflow paths and Pages base
- updated repo metadata when credentials are available
- browser QA for changed docs or other browsable surfaces when local preview is possible
- clean commit history in small recoverable steps
- push to the configured remote when access is available

If the final publish step is blocked by plan, permissions, or visibility, the repository should still be left in the closest possible ready state with that blocker documented.

## Bilingual Docs Pattern

When English and Japanese are both needed:

- use `README.md` for English
- use `README.ja.md` for Japanese
- mirror page structure under `docs/guide/` and `docs/ja/guide/`
- keep headings parallel even when wording is localized
