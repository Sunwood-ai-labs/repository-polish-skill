# Usage

## Example Requests

Ask Codex to use this skill with prompts like:

- `Use $repository-polish to clean up this repo and add a stronger README.`
- `Use $repository-polish to add bilingual docs and GitHub Pages deployment.`
- `Use $repository-polish to make this repository feel ready for public release.`
- `Use $repository-polish to 完全整備 this repository.`
- `Use $repository-polish to 最適整備 this repository.`

## Typical Flow

1. Inventory the repository with the PowerShell script.
2. Inspect README, docs, workflows, metadata, and current finish-line blockers.
3. Write a QA inventory covering requested deliverables, changed artifacts, and final-response claims.
4. Choose the polish mode before deciding scope.
5. In `最適整備`, choose the smallest coherent plan that satisfies the request.
6. In default mode or `完全整備`, continue through docs, workflows, metadata, verification, commit, and push.
7. If `完全整備` needs a remote, Pages enablement, or publish-step repair, treat that as in-scope finish-line work when auth is available.
8. If you changed a user-facing surface, run codebase QA against source, config, and build outputs.
9. If a last-mile blocker appears, complete everything else and document the blocker clearly.

## Good Skill Behavior

- preserve established visual language when a design already exists
- avoid creating docs structure that the project cannot maintain in `最適整備`
- keep English and Japanese docs aligned when both are requested
- create a reusable SVG identity asset when the repo lacks header or hero art
- keep generated SVG icons flat, geometric, and informed by Google Fonts icons and Material Symbols without copying existing logos
- verify URLs, badges, workflow paths, Pages configuration, and source-level docs structure before pushing
- verify README and docs structure, heading order, and locale parity before signoff
- use emoji-prefixed `##` headings in README files when that improves readability
- use `uv run` for Python commands instead of raw `python`
- map each final claim to an actual QA check
- use codebase QA for changed docs instead of relying on build success alone
- do not silently downscope when the user explicitly says `完全整備`
- do not stop after the first visible deliverable when the repo still needs finishing work
