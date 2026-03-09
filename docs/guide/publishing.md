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

## 📝 Commit Style

Use English commit messages with:

- an emoji-prefixed title
- about three bullet lines in the body
- small steps that are easy to recover later
