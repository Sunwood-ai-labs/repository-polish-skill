# QA Signoff

Use this guide when repository-polish work needs a real finish line instead of a partial cosmetic pass.

## 1. Build a QA inventory

Capture these before signoff:

- the user's requested outcomes
- the chosen polish mode (`完全整備`, `最適整備`, or default full polish)
- every file, page, workflow, or metadata field you changed
- every claim you plan to make in the final response
- for docs or other user-facing surfaces, the pages, navigation paths, headings, and locales that need inspection

If a claim has no matching check, do not include that claim in the final response.

## 2. Run structural QA

Always verify the repository mechanically:

- README and `README.ja.md` links, commands, badges, and filenames
- README section order, heading quality, and scanability for a first-time reader
- README `##` headings use consistent emoji when the polish pass introduced decorative section headings
- README language switch and summary structure when bilingual support is claimed
- docs commands such as `docs:build` and the actual output directory
- docs navigation, page naming, heading consistency, and locale-to-locale structural parity
- generated SVG icon assets and their references are coherent across README, docs, and site metadata when those assets were added
- generated SVG icons are flat, geometric, and informed by Google Fonts icons and Material Symbols without copying existing brand logos
- Python execution examples and helper commands use `uv run` when Python is involved
- Pages base URL and repo-name assumptions
- workflow triggers, paths, and artifact upload directories
- Pages site enablement when docs deployment is part of the claimed finish line
- metadata updates when credentials are available
- staged file sizes, accidental binaries, and bulky generated artifacts before commit and push
- git status after commit and push work

## 3. Run codebase QA when a user-facing surface changed

Use source files, config, generated build outputs, and workflow definitions as the default QA evidence.

Recommended minimum coverage:

- landing page or home page
- one meaningful subpage per locale you touched
- primary navigation and language switch if present
- page titles, headings, and section order
- one short off-happy-path pass for broken links, orphaned pages, or mismatched locale structure

Treat these as failures:

- broken navigation or dead links in the inspected flow
- pages that exist on disk but are not reachable from the intended docs structure
- mismatched language navigation after you claimed bilingual support
- inconsistent titles, heading structure, or repo-name/base-path assumptions
- claims about generated icons, header images, hero images, or favicons that are not supported by actual file references
- generated SVG icons that look like direct copies of existing third-party logos

If you additionally open a local preview, treat that as bonus evidence rather than the default requirement.

## 4. Signoff rule

You are ready to close out only when:

- each final claim maps to a concrete check
- the finish line matches the requested mode, especially when `完全整備` forbids a silent downscope
- the highest-value remaining step is either completed or blocked by a clear external limitation
- any warned or blocked staged payload entry is resolved or explicitly documented before push
- the final response names the blocker if one remains
- the response does not imply visual or browser QA that you did not actually perform
