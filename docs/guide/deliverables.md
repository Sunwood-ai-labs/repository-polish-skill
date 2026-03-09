# Deliverables

## 📦 Common Outputs

This skill often produces:

- `README.md`
- `README.ja.md`
- `docs/` with VitePress pages
- `.github/workflows/ci.yml`
- `.github/workflows/deploy-docs.yml`
- repository homepage and topic recommendations

## 🧩 README Improvements

README work may include:

- stronger title and intro
- badges and language switches
- clearer quick start and repo layout
- links to hosted docs

## 🌍 Bilingual Docs Pattern

When English and Japanese are both needed:

- use `README.md` for English
- use `README.ja.md` for Japanese
- mirror page structure under `docs/guide/` and `docs/ja/guide/`
- keep headings parallel even when wording is localized

## ✅ Verification

Before wrapping up:

- run `npm run docs:build` inside `docs/` when docs were added
- confirm workflow paths match the actual repository
- confirm asset URLs and Pages base are correct
