# Publishing

## 🚀 GitHub Pages Flow

For VitePress docs, the normal pattern is:

1. add a docs build workflow for validation
2. add a Pages deployment workflow
3. publish from `docs/.vitepress/dist`
4. set the VitePress `base` to the repository name

## 🔐 If Pages Is Not Enabled Yet

If the deploy workflow fails because the Pages site does not exist yet, create it with GitHub CLI:

```bash
gh api repos/OWNER/REPO/pages -X POST -f build_type=workflow
```

## 🏷️ Public-Facing Metadata

For a public repo, also consider:

- repo description
- homepage URL
- GitHub topics
- stable social card assets

## 🌐 Website and Topics Settings

When a repository is meant to be public, set its metadata explicitly instead of leaving it blank.

Typical GitHub CLI commands:

```bash
gh repo edit OWNER/REPO \
  --description "Short repo summary" \
  --homepage "https://OWNER.github.io/REPO/"
```

```bash
gh repo edit OWNER/REPO \
  --add-topic codex-skill \
  --add-topic documentation \
  --add-topic vitepress \
  --add-topic github-pages
```

Use the homepage field as the repository Website value on GitHub. For docs-driven repos, that usually points at the published GitHub Pages URL.

Choose topics that describe:

- what the repository is
- what tools or frameworks it uses
- what kind of users should find it

## 📝 Commit Style

Use English commit messages with:

- an emoji-prefixed title
- about three bullet lines in the body
- small steps that are easy to recover later
