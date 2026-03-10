# QA Signoff

Use this guide when repository-polish work needs a real finish line instead of a partial cosmetic pass.

## 1. Build a QA inventory

Capture these before signoff:

- the user's requested outcomes
- every file, page, workflow, or metadata field you changed
- every claim you plan to make in the final response
- for browsable docs or sites, the pages, controls, states, and locales that need inspection

If a claim has no matching check, do not include that claim in the final response.

## 2. Run structural QA

Always verify the repository mechanically:

- README and `README.ja.md` links, commands, badges, and filenames
- docs commands such as `docs:build` and the actual output directory
- Pages base URL and repo-name assumptions
- workflow triggers, paths, and artifact upload directories
- metadata updates when credentials are available
- git status after commit and push work

## 3. Run browser QA when a browsable surface changed

Use `$playwright-interactive` when you changed something that should be inspected in a real browser and `js_repl` is available.

Recommended minimum coverage:

- landing page or home page
- one meaningful subpage per locale you touched
- primary navigation and language switch if present
- one smaller realistic viewport in addition to the default desktop view
- one short off-happy-path pass for broken navigation, clipping, or visual regressions

Treat these as failures:

- broken navigation or dead links in the inspected flow
- clipped or obviously unstable layouts
- weak contrast, unreadable text, or visibly awkward spacing
- mismatched language navigation after you claimed bilingual support

If Playwright or local preview is unavailable, still complete structural QA and state the exact limitation.

## 4. Signoff rule

You are ready to close out only when:

- each final claim maps to a concrete check
- the highest-value remaining step is either completed or blocked by a clear external limitation
- the final response names the blocker if one remains
- the response does not imply visual QA or publish readiness that you did not actually verify
