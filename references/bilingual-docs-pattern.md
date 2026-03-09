# Bilingual Docs Pattern

Use this pattern when the repository should support both English and Japanese.

## Top-level files

- `README.md` for English
- `README.ja.md` for Japanese

## Docs structure

- `docs/index.md` for English home
- `docs/guide/*.md` for English guide pages
- `docs/ja/index.md` for Japanese home
- `docs/ja/guide/*.md` for Japanese guide pages

## Recommended page parity

Keep these pages aligned across languages:

- home
- getting started
- usage
- architecture
- troubleshooting

## Writing guidance

- keep headings in the same order
- keep examples parallel when practical
- translate naturally rather than word-for-word when needed
- keep filenames simple and stable
