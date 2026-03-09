---
name: repository-polish
description: Polish and productize a repository by improving its README, bilingual documentation, GitHub Pages or VitePress docs, CI/CD, repository metadata, and public-facing structure. Use when Codex is asked to clean up a repo, prepare it for release, add docs, add Pages deployment, improve GitHub presentation, or turn an internal project into a reusable public repository.
---

# Repository Polish

Turn an existing repository into a clean, public-facing, documented project.

## Start Here

1. Run [scripts/collect_repo_state.ps1](./scripts/collect_repo_state.ps1) against the target repository.
2. Inspect the current README, docs, workflows, and repo metadata before editing anything.
3. Unless the user explicitly asks for a narrow partial update, treat "polish this repo" as a request to carry the repository through a complete public-facing finish.
4. Verify each user-facing addition locally when possible before pushing.
5. Finish the job end-to-end instead of stopping after the first visible improvement.

## Default Completion Rule

When the user asks to polish a repository and does not give a limiting instruction, complete the full polish path:

- improve the top-level README experience
- add or refine bilingual docs when they materially help
- add missing public-facing files such as `LICENSE` and `.gitignore`
- add or refine GitHub workflows for docs or CI when appropriate
- update repository metadata such as description, homepage, and topics when auth is available
- verify builds and key links locally when possible
- commit in small recoverable steps
- push when a remote is configured and push access is available

Do not stop early just because one visible deliverable is done. Only stop short when:

- the user explicitly asks for a smaller scope
- a risky decision needs confirmation
- a platform limitation blocks the final step

If a platform limitation blocks the last mile, still complete everything else, document the blocker clearly, and leave the repository in the closest possible ready state.

## Common Scope

- Refresh or create `README.md`
- Add `README.ja.md` when bilingual Japanese and English support is useful
- Add or refine `docs/` with VitePress when the repo needs browsable documentation
- Add GitHub Pages deployment with Actions when docs should be published
- Update repo name, homepage, topics, and badges when the repository is meant to be public
- Add small, coherent visual polish such as icons, header images, or section emoji

## Workflow

### 1. Inventory the repo

Use the collection script first:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\collect_repo_state.ps1 -RepoPath D:\Prj\some-repo
```

Use that output to identify:

- missing README files
- missing docs infrastructure
- missing GitHub workflows
- missing metadata like homepage or topics
- whether Node is available for a docs build

### 2. Keep the structure coherent

- Prefer a top-level `README.md` and optional `README.ja.md`
- Prefer `docs/` for browsable documentation
- Prefer `.github/workflows/` for deployment and CI
- Keep repository polish changes grouped by purpose instead of scattering unrelated edits

### 3. Add docs only when they help

Use VitePress when:

- the repo needs multi-page docs
- there is a GitHub Pages publishing goal
- the project benefits from bilingual guide pages

If the repo only needs a simple landing page, a stronger README may be enough.

### 4. Bilingual guidance

When the user wants both Japanese and English:

- keep page structure parallel across languages
- use `README.md` for English and `README.ja.md` for Japanese
- use `docs/guide/*` for English and `docs/ja/guide/*` for Japanese
- keep headings and ordering aligned even if wording differs

### 5. GitHub Pages deployment

When shipping VitePress docs:

- add a Pages workflow under `.github/workflows/`
- build from `docs/`
- upload `docs/.vitepress/dist`
- set the VitePress `base` to match the repository name

If Actions cannot create the Pages site automatically, use `gh api` manually after confirming auth. See [references/github-pages-notes.md](./references/github-pages-notes.md).

If the repository remains private and the current GitHub plan does not support Pages for that repo:

- keep the Pages workflow committed
- prevent noisy repeated failures when practical
- document the limitation in the README or troubleshooting docs
- leave the repo ready to publish once visibility or plan changes

### 6. Verify before finishing

- run the docs build locally if docs were added
- confirm links and repo URLs match the current repo name
- confirm README assets use stable URLs
- confirm GitHub workflow paths are correct
- confirm repository metadata is set when auth is available
- confirm the repo remains clean after commits and push

### 7. Close out at the actual finish line

Before declaring the task done, check whether the repository has reached the highest-value stopping point available in the current environment:

- if a remote exists and credentials are available, push
- if workflows were added, make sure they at least start correctly or are intentionally gated
- if a publish step is blocked by plan or permissions, document that exact blocker and leave everything else ready
- summarize what was completed and what exact final step still depends on the user or platform

## Commit Style

When committing repository polish work:

- write commit messages in English
- prefix the title with an emoji
- include about three bullet lines in the body
- commit in small, recoverable steps

## References

- Use [references/repository-checklist.md](./references/repository-checklist.md) for a practical polish checklist.
- Use [references/bilingual-docs-pattern.md](./references/bilingual-docs-pattern.md) when adding English and Japanese docs.
- Use [references/github-pages-notes.md](./references/github-pages-notes.md) when wiring GitHub Pages deployment.
