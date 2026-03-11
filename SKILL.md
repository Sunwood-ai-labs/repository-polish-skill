---
name: repository-polish
description: Polish and productize a repository by improving its README, bilingual documentation, GitHub Pages or VitePress docs, CI/CD, repository metadata, and public-facing structure. Use when Codex is asked to clean up a repo, prepare it for release, add docs, add Pages deployment, improve GitHub presentation, or turn an internal project into a reusable public repository. Also use it when the repo work must be carried through verification, signoff, commit, push, and final-mile publishing work instead of stopping after the first visible deliverable. If the user says `完全整備`, treat that as an explicit full-polish mode and finish every meaningful deliverable end-to-end. If the user says `最適整備`, treat that as a right-sized mode and choose the smallest high-value set of improvements that fits the repository.
---

# Repository Polish

Turn an existing repository into a clean, public-facing, documented project.

## Start Here

1. Run [scripts/collect_repo_state.ps1](./scripts/collect_repo_state.ps1) against the target repository.
2. Inspect the current README, docs, workflows, and repo metadata before editing anything.
3. Write a QA inventory before editing:
   - the user's requested deliverables
   - every user-facing artifact you expect to change
   - every claim you expect to make in the final response
4. Unless the user explicitly asks for a narrow partial update, treat "polish this repo" as a request to carry the repository through a complete public-facing finish.
5. Use codebase QA when you add or change a user-facing surface such as VitePress docs, a docs landing page, or another documentation UI.
6. Verify each user-facing addition locally when possible before pushing.
7. Finish the job end-to-end instead of stopping after the first visible improvement.
8. When you need to run Python in the target repository, prefer `uv run ...` instead of raw `python ...`.

## Polish Modes

Choose the mode from the user's wording before deciding scope.

### `完全整備`

Treat `完全整備` as an explicit instruction to do the whole job, not as a hint to pick a tasteful subset.

In this mode:

- do not silently downscope because the repo looks small or already decent
- carry the work to the highest-value finished state available in the environment
- include final-mile work such as remote creation, push, Pages enablement, metadata updates, and workflow repair when those steps are needed to make the repo actually finished and credentials or auth are available
- only stop short when a real blocker remains, such as missing auth, missing permissions, plan limits, or a risky irreversible choice that truly needs confirmation

### `最適整備`

Treat `最適整備` as a right-sized polish pass.

In this mode:

- inspect the repo first and choose the smallest coherent set of improvements that gives the best public-facing result
- add docs, Pages, or extra surfaces only when they materially help this repository
- prefer a stronger README over forced multi-page docs when the repo does not benefit from more structure
- still finish the chosen scope end-to-end, including QA and commit/push work when relevant

### No explicit mode

If the user does not name a mode, keep the existing default: treat repo polish as a full public-facing finish unless the user explicitly narrows the scope.

## Default Completion Rule

When the user asks to polish a repository and does not give a limiting instruction, complete the full polish path:

- improve the top-level README experience
- add or refine bilingual docs when they materially help
- add missing public-facing files such as `LICENSE` and `.gitignore`
- add or refine GitHub workflows for docs or CI when appropriate
- update repository metadata such as description, homepage, and topics when auth is available
- run structural QA for each changed deliverable
- run codebase QA for each changed user-facing deliverable
- commit in small recoverable steps
- push when a remote is configured and push access is available
- if a public-facing finish needs a remote or Pages site and auth is available, treat creating or enabling them as in-scope final-mile work instead of optional cleanup

Do not stop early just because one visible deliverable is done. Only stop short when:

- the user explicitly asks for a smaller scope
- a risky decision needs confirmation
- a platform limitation blocks the final step

If a platform limitation blocks the last mile, still complete everything else, document the blocker clearly, and leave the repository in the closest possible ready state.

When `完全整備` is explicitly requested, bias strongly toward doing the final-mile work yourself before calling the repo finished.

## Common Scope

- Refresh or create `README.md`
- Add `README.ja.md` when bilingual Japanese and English support is useful
- Add or refine `docs/` with VitePress when the repo needs browsable documentation
- Add GitHub Pages deployment with Actions when docs should be published
- Update repo name, homepage, topics, and badges when the repository is meant to be public
- If no header image exists, create a simple reusable SVG icon and use it across the README header image, hero image, and docs favicon or logo when appropriate
- Prefer a flat, geometric icon style informed by Google Fonts icons at `https://fonts.google.com/icons`, especially the Material Symbols visual language, but do not copy existing brand marks or logos directly
- Add small, coherent visual polish such as icons, header images, or section emoji
- When a README uses a centered hero block, keep the title inside that hero block instead of leaving a plain Markdown `# Title` stranded above it
- Keep technology, status, and release badges on their own row and keep language-switch links or badges on a separate row
- When bilingual README support is present, add an explicit language switch near the top of the README and make it visually distinct from tech badges
- Prefix `README.md` and `README.ja.md` `##` section headings with fitting emoji so long as readability improves

## QA Workflow

Use [references/qa-signoff.md](./references/qa-signoff.md) as the detailed signoff guide.

### 1. Build the QA inventory

Before making or validating edits, list:

- the user's stated requirements
- every artifact you changed or created
- every user-visible claim you plan to make in the final response
- for browsable docs or sites, the key pages, controls, states, and language variants that need inspection

Nothing in the final response should lack a matching check.

### 2. Structural QA for every polish task

Always verify the repository mechanically, even when no browser QA is needed:

- README links, badges, filenames, and quick-start commands
- README section order, heading clarity, and scannable formatting
- README `##` headings use consistent helpful emoji when the repo uses decorative section styling
- README language switch, summary block, and repo layout when those elements are relevant
- README hero composition keeps title, logo, summary, badge rows, and language switch in a coherent top section when those elements exist
- README badge rows do not mix language-switch controls with tech, CI, or license badges
- docs build commands, output path, and current repo-name URL assumptions
- docs information architecture, navigation labels, heading consistency, and locale parity
- SVG icon assets exist and are wired correctly when the repo needed a new visual identity seed
- generated SVG icons use a flat, clean, recognizably product-like style without imitating trademarked logos
- Python helper commands prefer `uv run` when Python execution is needed
- workflow paths, triggers, artifact directories, and Pages base configuration
- metadata changes such as homepage, description, and topics when auth is available
- git status after commits and push attempts

### 3. Codebase QA for changed user-facing surfaces

When you changed VitePress docs, a docs landing page, or another user-facing documentation surface:

- trace the landing page, nav, sidebar, and locale links through source and config
- confirm page paths, titles, headings, and section ordering from the actual docs files
- confirm links, assets, and workflow targets point to the right destinations
- confirm bilingual pages stay structurally parallel when bilingual support is claimed
- treat missing nav entries, orphaned pages, broken links, inconsistent headings, and mismatched locale structure as QA failures

Do not claim that docs were visually inspected unless you actually opened a preview. Codebase QA is the default signoff path; preview-based QA is optional extra evidence when it materially helps.

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
- whether a remote exists
- whether a Pages site already exists when docs publishing is relevant

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
- keep section naming and navigation labels obviously corresponding across locales

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

- review the QA inventory and make sure every planned claim has evidence
- run the docs build locally if docs were added
- confirm links and repo URLs match the current repo name
- confirm README assets use stable URLs
- confirm README and docs structure are easy to scan and internally consistent
- confirm generated SVG identity assets are reused coherently when header or hero art was missing
- confirm GitHub workflow paths are correct
- confirm repository metadata is set when auth is available
- run codebase QA for changed README, docs, workflows, and metadata claims
- confirm the repo remains clean after commits and push attempts

### 7. Close out at the actual finish line

Before declaring the task done, check whether the repository has reached the highest-value stopping point available in the current environment:

- if a remote exists and credentials are available, push
- if no remote exists but the user asked for `完全整備` and auth is available, create the remote repository when that is the natural finish line
- if workflows were added, make sure they at least start correctly or are intentionally gated
- if Pages deployment is part of the finish line, make sure the Pages site exists, enable it when auth is available, and repair workflow-based enablement instead of leaving a failing deploy job behind
- if a publish step is blocked by plan or permissions, document that exact blocker and leave everything else ready
- summarize what was completed, what evidence was checked, and what exact final step still depends on the user or platform

## Commit Style

When committing repository polish work:

- write commit messages in English
- prefix the title with an emoji
- include about three bullet lines in the body
- commit in small, recoverable steps

## References

- Use [references/repository-checklist.md](./references/repository-checklist.md) for a practical polish checklist.
- Use [references/qa-signoff.md](./references/qa-signoff.md) for structural QA and signoff expectations.
- Use [references/bilingual-docs-pattern.md](./references/bilingual-docs-pattern.md) when adding English and Japanese docs.
- Use [references/github-pages-notes.md](./references/github-pages-notes.md) when wiring GitHub Pages deployment.
