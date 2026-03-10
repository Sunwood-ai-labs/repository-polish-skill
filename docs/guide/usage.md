# Usage

## Example Requests

Ask Codex to use this skill with prompts like:

- `Use $repository-polish to clean up this repo and add a stronger README.`
- `Use $repository-polish to add bilingual docs and GitHub Pages deployment.`
- `Use $repository-polish to make this repository feel ready for public release.`

## Typical Flow

1. Inventory the repository with the PowerShell script.
2. Inspect README, docs, workflows, metadata, and current finish-line blockers.
3. Write a QA inventory covering requested deliverables, changed artifacts, and final-response claims.
4. Choose the smallest coherent plan that satisfies the request.
5. Unless the user narrows scope, continue through docs, workflows, metadata, verification, commit, and push.
6. If you changed a browsable surface, run browser QA with `$playwright-interactive` when possible.
7. If a last-mile blocker appears, complete everything else and document the blocker clearly.

## Good Skill Behavior

- preserve established visual language when a design already exists
- avoid creating docs structure that the project cannot maintain
- keep English and Japanese docs aligned when both are requested
- verify URLs, badges, workflow paths, and Pages configuration before pushing
- map each final claim to an actual QA check
- use browser QA for changed docs instead of relying on build success alone
- do not stop after the first visible deliverable when the repo still needs finishing work
