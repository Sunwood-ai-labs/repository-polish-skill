# Getting Started

## 🧭 What This Skill Focuses On

`repository-polish` helps Codex improve a repository's public-facing quality without changing more than necessary.

Typical scope:

- stronger `README.md`
- optional `README.ja.md`
- VitePress docs when multi-page documentation is helpful
- GitHub Pages deployment with Actions
- cleaner repo metadata and navigation

## ⚙️ First Step

Run the inventory script before making changes:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\collect_repo_state.ps1 -RepoPath D:\Prj\some-repo
```

Use the output to decide what is missing and what should stay untouched.

## 🧱 Core Principle

Make the smallest coherent set of improvements that satisfies the user's request.

That usually means:

1. understand the repo
2. improve the landing experience
3. add docs only when they help
4. wire publishing only when docs exist

## 📁 Main References

Check these repository files while using the skill:

- `SKILL.md`
- `references/repository-checklist.md`
- `references/bilingual-docs-pattern.md`
- `references/github-pages-notes.md`
