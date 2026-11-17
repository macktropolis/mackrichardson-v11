# Current Development State

## Git Snapshot

Local checkout inspected on 2026-11-17 at 08:59:10 EST (America/New_York), after implementation and before updating the handoff documents.

- **Branch and HEAD** — `main` at `3846e19bfdf3c4b9947276908255d1120a9cf0b4`.
- **Upstream** — Matched cached `origin/main`, last confirmed by the earlier fast-forward from GitHub. Live GitHub was not rechecked during implementation.
- **Working tree at capture** — Unstaged changes to `public/assets/css/mac-startup.css`, `public/assets/js/mac-startup.js`, and `src/pages/startup/[...preview].astro`. No staged or untracked files. Architecture, decision, and handoff updates followed this snapshot.

## Last Known Working State

The [November 2 QA record](qa-2026-11-02.md) reports a passing production build and production-preview checks for direct and fetched desktop navigation, article styles, window dragging and closing, keyboard dropdowns, Extras focus, mobile history, and breakpoint transitions. Mack reported general iPhone and Android checks and accepted the iPad desktop presentation.

For release `498d302`, Astro checks passed with zero errors, and the static build and Pagefind indexed 31 pages using bundled Node 24. Headless Chrome tests against the build covered desktop deep links with a query and fragment, automatic completion, repeat visits, a mobile visit to Holiday Cards followed by first entry to the main site, Continue, Escape, reduced motion, blocked storage, and disabled JavaScript. The command-strip checks covered the launcher order, category links, fetched and direct desktop navigation, collapse and expand, and Newton's category links in Extras.

Netlify published [production deploy `6af48cf6647a97628c05ec3b`](https://app.netlify.com/projects/mackos9/deploys/6af48cf6647a97628c05ec3b) on November 11 at 10:43:19 EST. The Netlify API still reported that deploy as current and ready at the November 11 handoff, with the exact release SHA above. The release smoke check verified that the public homepage served the updated Control Strip and that the public startup script matched the local file byte-for-byte. Browser interaction tests were run locally against the build.

## Completed Work

- Added a first-visit Newton Welcome panel through 1024px using the existing logo, MackOS 9 title, status text, progress indicator, and Continue control. The same local storage flag covers both themes.
- `npm run build` passed on Node 22. Headless Chrome checked the built site at 320px, 1024px, and 1025px, including theme styling, horizontal fit, Continue, automatic dismissal, Escape, fragment preservation, and repeat visits. The dev-only preview played and replayed at 390px without writing the first-visit flag.
- The Newton notebook merged into `main` in `2fa5324`. Navigation accessibility fixes and the desktop regression record landed in `df1c41d`.
- The checkout was fast-forwarded to GitHub and the local handoff revision was preserved.
- Added a first-visit Mac OS 9 startup dialog on the main site. It closes after about 2.6 seconds, or immediately via **Continue...** or Escape, and keeps the original page URL. The standalone Holiday Cards archive leaves the startup flag, `mackos-startup-seen`, untouched.
- Added the dev-only `/startup/` preview with a Replay button. Headless Chrome verified automatic playback, replay, and first-visit storage isolation. The production build and Pagefind passed, and the preview was absent from the build output.
- Matched the startup dialog and preview backgrounds to the site's desktop gradient and Newton background. Chrome verified the computed backgrounds at 1024px and 1025px.
- Styled the startup window after the Mac OS 9.2 reference, using the supplied blue M logo, the existing Advercase Regular font for the MackOS 9 title, and a beveled purple progress bar. Chrome verified the logo and font loaded on the preview at phone and desktop widths.
- Mack approved the startup design. The expanded window uses a larger logo and progress bar and a primary Continue button.
- Replaced the Holiday Cards launcher in the desktop Control Strip with an icon for each published blog category. About Mack, Mackintosh HD, and Blog appear first, in that order. All strip links are icon-only and retain accessible names and hover tooltips. The production build and Pagefind passed. Chrome verified that all category links match generated pages, desktop fetched and direct category navigation works, the strip collapses and expands, and Newton keeps category access in Extras.

## In Progress and Untested Changes

Safari and physical-device checks for startup and the Control Strip remain open, along with the existing manual accessibility and notebook content checks.

## Known Issues

- The [tag route](../src/pages/tags/%5Btag%5D.astro) calls `post.data.tags.includes()` even though the content schema allows omitted tags. The mismatch is confirmed in source. A build with a tagless published post was not run.
- [CLAUDE.md](../CLAUDE.md) still describes four shared popups and a homepage post list. The shared layout has three popups, and the homepage renders the introduction. Holiday Cards is standalone. Use the [current architecture](ARCHITECTURE.md).

## Prioritized Next Steps

1. Review the startup presentation in Safari and on physical devices. Use `/startup/` on the dev server for repeatable playback and a fresh profile for the main site's first-visit behavior.
2. Finish TODO #32 on physical devices. Check safe areas and browser chrome, long-page history and scroll restoration, and rotation across the breakpoint.
3. Complete TODO #33 with VoiceOver and TalkBack, 200% text-only zoom, and full touch-target measurements.
4. Complete TODO #35 by checking representative notebook content for horizontal overflow and content hidden by the toolbar. See the [work list](../TODO.md).

## Resuming Development

Use Node 22. Viewport width selects the theme. Newton runs through 1024px, and wider viewports use the Mac OS 9 desktop. Use production preview for window-loader or style changes because Astro may inline styles in development and extract them into linked CSS in production.

See [AGENTS.md](../AGENTS.md) and [DECISIONS.md](DECISIONS.md). Recheck Git state at the start of the next session.
