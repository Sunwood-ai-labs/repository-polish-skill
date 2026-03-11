# GitHub Pages Notes

## VitePress deployment pattern

Use a workflow that:

1. checks out the repo
2. configures GitHub Pages
3. installs Node dependencies in `docs/`
4. builds the VitePress site
5. uploads `docs/.vitepress/dist`
6. deploys to GitHub Pages

Prefer:

```yaml
- name: Configure GitHub Pages
  uses: actions/configure-pages@v5
  with:
    enablement: true
```

That lets the workflow create the Pages site automatically when possible instead of failing on the first deploy.

## Common issues

### Pages site does not exist yet

`actions/configure-pages` can fail if the repository has no Pages site configured.

First, prefer enabling workflow-based creation in the workflow itself with `enablement: true`.

If workflow-based enablement is blocked, create the Pages site manually:

```powershell
gh api repos/OWNER/REPO/pages -X POST -f build_type=workflow
```

### Wrong site base

If pages render without styles or links break, the VitePress `base` usually does not match the repo name.

### Repo rename after docs already exist

After renaming a repo:

- update README links
- update VitePress `base`
- update social URLs
- rebuild docs

## Useful follow-up commands

```powershell
gh run list --repo OWNER/REPO --limit 5
gh run view RUN_ID --repo OWNER/REPO --log-failed
gh api repos/OWNER/REPO/pages
```
