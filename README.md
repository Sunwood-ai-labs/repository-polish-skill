<div align="center">
  <h1>Repository Polish Skill</h1>
  <img src="https://raw.githubusercontent.com/Sunwood-ai-labs/repository-polish-skill/main/docs/public/logo.svg" alt="Repository Polish Skill" width="220">
  <p>
    <img src="https://img.shields.io/badge/Codex-Skill-F97316" alt="Codex Skill">
    <img src="https://img.shields.io/badge/VitePress-Docs-646CFF?logo=vitepress&logoColor=white" alt="VitePress">
    <img src="https://img.shields.io/badge/GitHub%20Pages-CI%2FCD-222222?logo=githubpages&logoColor=white" alt="GitHub Pages">
    <img src="https://img.shields.io/badge/Bilingual-English%20%2B%20Japanese-0F766E" alt="Bilingual">
  </p>
  <p>
    <a href="./README.md">
      <img src="https://img.shields.io/badge/Language-English-blue.svg" alt="English">
    </a>
    <a href="./README.ja.md">
      <img src="https://img.shields.io/badge/%E8%A8%80%E8%AA%9E-%E6%97%A5%E6%9C%AC%E8%AA%9E-lightgrey.svg" alt="Japanese">
    </a>
  </p>
</div>

Turn an existing repository into a cleaner, more public-facing project. This skill helps Codex improve README files, bilingual documentation, VitePress or GitHub Pages setup, CI, and release-facing structure without over-editing the repo.

## 🧰 Features

- Audit repository state before making changes
- Improve or create `README.md` and `README.ja.md`
- Add or refine bilingual `docs/` with VitePress
- Set up CI and GitHub Pages deployment for docs
- Tighten public-facing details such as badges, homepage links, and section structure

## 🧭 Why This Skill Exists

Many repositories already contain useful code, but still feel unfinished when shared publicly. The weak points are often the same:

- a thin README
- no Japanese counterpart
- no browsable docs
- no GitHub Pages deployment
- unclear first steps for new users

This skill packages a repeatable cleanup flow for those gaps.

## 📦 Repository Layout

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
|  `- repository-checklist.md
|- scripts/
|  `- collect_repo_state.ps1
`- docs/
   |- .vitepress/
   |- guide/
   |- ja/
   `- public/
```

## 🚀 Quick Start

### 1. Inspect the target repository

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\collect_repo_state.ps1 -RepoPath D:\Prj\some-repo
```

### 2. Use the skill in Codex

- `Use $repository-polish to clean up this repo and add a stronger README.`
- `Use $repository-polish to add bilingual docs and GitHub Pages deployment.`
- `Use $repository-polish to make this repository feel ready for public release.`

## 🗂️ What It Can Improve

- README structure and quick-start clarity
- English and Japanese documentation alignment
- VitePress docs scaffolding
- GitHub Actions workflows for CI and Pages deployment
- repo naming, links, badges, and landing-page polish

## 📚 Documentation

- English docs: [Project Docs](https://sunwood-ai-labs.github.io/repository-polish-skill/)
- Japanese docs: [日本語ドキュメント](https://sunwood-ai-labs.github.io/repository-polish-skill/ja/)
- Local docs preview:

```bash
cd docs
npm install
npm run docs:dev
```

## 🤝 Notes

- The skill prefers the smallest coherent set of improvements that satisfies the request.
- It is based on practical repository work, including the publishing flow used for `logged-in-google-chrome-skill`.
