# repository-polish-skill

Repository polish skill for Codex. This skill helps turn an existing repository into a cleaner, more public-facing project by improving README files, bilingual documentation, VitePress or GitHub Pages setup, workflows, and release-facing structure.

## What It Does

- Audits the current repository state before editing
- Improves or creates `README.md` and `README.ja.md`
- Adds or refines `docs/` with bilingual English and Japanese structure
- Sets up GitHub Pages deployment for VitePress docs
- Tightens repository presentation such as badges, homepage links, and section structure

## Included Files

- `SKILL.md`: Main instructions for using the skill
- `agents/openai.yaml`: Agent metadata for the skill
- `scripts/collect_repo_state.ps1`: Quick repository inventory script
- `references/repository-checklist.md`: Practical checklist for repo polish work
- `references/bilingual-docs-pattern.md`: Structure guide for English and Japanese docs
- `references/github-pages-notes.md`: Notes for GitHub Pages deployment

## Usage

Install or place this repository where Codex can access it as a skill, then ask Codex to polish a repository using `repository-polish`.

Example prompts:

- `Use $repository-polish to clean up this repo and add a stronger README.`
- `Use $repository-polish to add bilingual docs and GitHub Pages deployment.`
- `Use $repository-polish to turn this internal repo into a public-facing project.`

## Notes

- The skill prefers making the smallest coherent set of improvements that matches the user's request.
- It is designed around the workflow used to build and publish the `logged-in-google-chrome-skill` repository.
