# Getting Started

## What This Skill Focuses On

`repository-polish` helps Codex improve a repository's public-facing quality while matching
the requested polish depth.

Typical scope:

- stronger `README.md`
- optional `README.ja.md`
- VitePress docs when multi-page documentation is helpful
- GitHub Pages deployment with Actions
- cleaner repo metadata and navigation
- structural QA and codebase signoff before closeout
- `uv run` for Python helpers when Python is needed

## Polish Modes

- `完全整備`: finish the entire public-facing path, including docs, publishing, metadata, remote creation, push, and workflow repair when those steps are needed and auth is available
- `最適整備`: inspect the repo and choose the smallest coherent, high-value set of improvements that suits it
- no explicit mode: default to full polish unless the user narrows scope another way

## First Step

Run the inventory script before making changes:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\collect_repo_state.ps1 -RepoPath D:\Prj\some-repo
```

Use the output to decide what is missing, what should stay untouched, whether a remote exists,
and whether Pages is already enabled when docs publishing matters.

## Core Principle

Match the polish depth to the requested mode, then finish that chosen scope end-to-end.

That usually means:

1. understand the repo
2. improve the landing experience
3. add docs only when they help, unless `完全整備` explicitly asks for the full path
4. verify every claim before signoff

## Main References

Check these repository files while using the skill:

- `SKILL.md`
- `references/repository-checklist.md`
- `references/qa-signoff.md`
- `references/bilingual-docs-pattern.md`
- `references/github-pages-notes.md`
