# Mack Richardson Website

Mack's personal site and blog uses Astro 7, Markdown, TypeScript/JavaScript, and plain CSS. The npm package is `mack-os`. GitHub is the shared source of truth across machines.

## Start each session

1. Read this file and [CURRENT-STATE.md](docs/CURRENT-STATE.md).
2. Run `git branch --show-current`, `git rev-parse HEAD`, and `git status --short --branch --untracked-files=all`. Inspect relevant staged and unstaged diffs.
3. Compare the branch, HEAD, and working tree with the handoff. Identify meaningful differences and check whether the local environment and unfinished work match the handoff. New commits and branch changes are normal. Never realign the checkout automatically. Explain material discrepancies before any potentially destructive action.
4. Consult [ARCHITECTURE.md](docs/ARCHITECTURE.md) before structural changes and [DECISIONS.md](docs/DECISIONS.md) before revisiting established decisions. Use the handoff and [TODO.md](TODO.md) to locate unfinished work and choose the next action.

## Develop and validate

- Routes live in `src/pages/`, the shared shell in `src/layouts/` and `src/components/`, and posts in `src/content/blog/`. The content schema is `src/content.config.ts`. See the architecture map for asset and styling boundaries.
- Match neighboring Astro frontmatter import groups, component naming, and CSS conventions. Use the shared `slugify()` helper for route identifiers and preserve existing URLs, component interfaces, data structures, accessibility behavior, and both responsive modes unless a change is authorized. Prefer focused edits.
- Keep desktop fetch-and-splice navigation restricted to supported site routes. Preserve normal navigation on failure and keep closed windows inaccessible to keyboard and assistive technology. Never put credentials, API keys, tokens, passwords, or private secrets in documentation.
- Use Node 22 as declared in `.nvmrc` and `.node-version`. Install dependencies with `npm install` and run `npm run dev` for development. Run `npm run build` for Astro checks, static output, and Pagefind indexing, then `npm run preview` for production browser checks. Exercise direct and fetched navigation and both sides of 1024px when changing shared UI. Report what was actually tested.
- The documented production flow is Netlify deployment from GitHub `main`. Never automatically commit, push, merge, reset, or deploy without explicit authorization. Do not fetch, pull, or switch branches as part of snapshot collection. Preserve local work and never assume another Mac shares this branch, working tree, or configuration.

## Hand off each session or meaningful milestone

Review the changes and update [CURRENT-STATE.md](docs/CURRENT-STATE.md) with verified results, implemented but untested work, blockers, unfinished tasks, and prioritized next steps. Record the branch, full HEAD, timestamp and timezone, staged/modified/untracked files, and upstream status with its evidence. Label whether the snapshot precedes or follows the documentation edits and distinguish cached refs from live remote state.

Update architecture for structural changes and append significant decisions to the decision log. If older docs or conversation context conflict with the repository, identify the discrepancy and correct the docs after confirming the implementation. Summarize the Git state, completed work, verification, open work, and documentation changes in the conversation.
