# Usage

## 🤝 Example Requests

Ask Codex to use this skill with prompts like:

- `Use $repository-polish to clean up this repo and add a stronger README.`
- `Use $repository-polish to add bilingual docs and GitHub Pages deployment.`
- `Use $repository-polish to make this repository feel ready for public release.`

## 🪜 Typical Flow

1. Inventory the repository with the PowerShell script
2. Inspect README, docs, workflows, and metadata
3. Apply only the improvements that match the request
4. Verify docs locally when new docs are added
5. Commit in small recoverable steps

## 🧠 Good Skill Behavior

- preserve established visual language when a design already exists
- avoid creating docs structure that the project cannot maintain
- keep English and Japanese docs aligned when both are requested
- verify URLs, badges, and Pages configuration before pushing
