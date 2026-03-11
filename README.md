<div align="center">
  <h1>Repository Polish Skill</h1>
  <img src="./docs/public/icon.webp" alt="Repository Polish Skill" width="280">
  <p>
    <img src="https://img.shields.io/badge/Codex-Skill-BF8B5E" alt="Codex Skill">
    <img src="https://img.shields.io/badge/VitePress-Docs-D98673?logo=vitepress&logoColor=white" alt="VitePress">
    <img src="https://img.shields.io/badge/GitHub%20Pages-CI%2FCD-733B2F?logo=githubpages&logoColor=white" alt="GitHub Pages">
    <img src="https://img.shields.io/badge/Bilingual-English%20%2B%20Japanese-594246" alt="Bilingual">
  </p>
  <p>
    <a href="./README.md">
      <img src="https://img.shields.io/badge/Language-English-blue.svg" alt="English">
    </a>
    <a href="./README.ja.md">
      <img src="https://img.shields.io/badge/Language-Japanese-lightgrey.svg" alt="Japanese">
    </a>
  </p>
</div>

Turn an existing repository into a cleaner, more public-facing project. This skill helps Codex improve README files, bilingual documentation, VitePress or GitHub Pages setup, CI, release-facing structure, and final verification while matching the requested polish depth.

## Modes

- `完全整備`: do the whole job end-to-end, including docs, publishing, metadata, remote creation, push, and workflow repair when those steps are part of the natural finish line and auth is available
- `最適整備`: inspect the repository first and choose the smallest coherent, high-value set of improvements that suits the actual project
- no explicit mode: keep the existing default full-polish behavior unless the user narrows scope another way

## Features

- audit repository state before making changes
- improve or create `README.md` and `README.ja.md`
- add or refine bilingual `docs/` with VitePress
- set up CI and GitHub Pages deployment for docs
- tighten public-facing details such as badges, homepage links, topics, and section structure
- verify the result with structural QA and codebase signoff when user-facing surfaces change
- check that README and docs structure stay readable, parallel, and easy to scan
- prefer `uv run` for Python execution when Python helpers are involved

## Default Behavior

Unless the user explicitly asks for a narrow partial task, this skill should carry the repository through the highest-value finished state available in the environment.

That usually means:

- README and docs improvements
- missing public-facing files such as `.gitignore` or `LICENSE`
- docs workflows and Pages setup when relevant
- repository metadata such as description, homepage, and topics
- local verification, centered on source, config, and build-output signoff
- commit and push when access is available

If the very last step is blocked by plan, permissions, or repo visibility, the skill should still finish everything else and document the blocker clearly instead of stopping early.

When the user explicitly says `完全整備`, the skill should not silently downscope just because the repository looks small or already decent.

## Why This Skill Exists

Many repositories already contain useful code, but still feel unfinished when shared publicly. Common gaps include:

- a thin README
- no Japanese counterpart
- no browsable docs
- no GitHub Pages deployment
- unclear first steps for new users

This skill packages a repeatable cleanup flow for those gaps.

## Repository Layout

```text
repository-polish-skill/
|- SKILL.md
|- README.md
|- README.ja.md
|- agents/
|  `- openai.yaml
|- references/
|  |- bilingual-docs-pattern.md
|  |- github-pages-notes.md
|  |- qa-signoff.md
|  `- repository-checklist.md
|- scripts/
|  `- collect_repo_state.ps1
`- docs/
   |- .vitepress/
   |- guide/
   |- ja/
   `- public/
```

## Quick Start

### 1. Inspect the target repository

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\collect_repo_state.ps1 -RepoPath D:\Prj\some-repo
```

### 2. Use the skill in Codex

- `Use $repository-polish to clean up this repo and add a stronger README.`
- `Use $repository-polish to add bilingual docs and GitHub Pages deployment.`
- `Use $repository-polish to make this repository feel ready for public release.`
- `Use $repository-polish to 完全整備 this repository.`
- `Use $repository-polish to 最適整備 this repository.`

## What It Can Improve

- README structure and quick-start clarity
- English and Japanese documentation alignment
- VitePress docs scaffolding
- GitHub Actions workflows for CI and Pages deployment
- repo naming, links, badges, and landing-page polish
- end-to-end completion through verification, commit, and push

## Documentation

- English docs: [Project Docs](https://sunwood-ai-labs.github.io/repository-polish-skill/)
- Japanese docs: [Japanese Docs](https://sunwood-ai-labs.github.io/repository-polish-skill/ja/)
- Local docs preview:

```bash
cd docs
npm install
npm run docs:dev
```

## Notes

- `完全整備` means "finish everything meaningful", while `最適整備` means "right-size the work to the repo"
- if GitHub Pages cannot be published because of plan or visibility limits, the skill should leave the repo in a ready-to-publish state and document the blocker
- if a Pages deploy fails because the site does not exist yet, prefer workflow-based enablement first and use `gh api repos/OWNER/REPO/pages -X POST -f build_type=workflow` when manual creation is needed
- when docs or another user-facing surface change, verify the structure in source, config, and build outputs instead of relying on build success alone
- it is based on practical repository work, including real publishing and failure-recovery flows
