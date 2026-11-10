# Current Development State

## Last Updated

2026-11-10 14:20:38 EST (America/New_York)

## Git Snapshot

Checkpoint from the repository inspection before documentation edits.

- **Branch** — `main`
- **HEAD commit** — `df1c41d246f9252c42ebda28118eebb2144ccfc7`
- **Working tree** — Clean at capture. The four documentation files from this session are local uncommitted additions.
- **Modified files** — None at capture.
- **Staged files** — None at capture.
- **Untracked files** — None at capture.
- **Snapshot date** — 2026-11-10 14:19:20 EST (America/New_York).
- **Remote synchronization** — Zero ahead and zero behind configured upstream `origin/main` using cached refs. Live GitHub synchronization is unknown. No fetch was performed.

## Project Status

The static site has a Mac OS 9 desktop and a Newton-inspired notebook through 1024px. The notebook merged into `main` in `2fa5324`. The production deployment currently served by Netlify was not checked.

## Last Known Working State

The [November 2 QA record](qa-2026-11-02.md) reports a passing `npm run build` and production-preview checks for direct and fetched desktop navigation, article styles, window dragging and closing, keyboard dropdowns, Extras focus, mobile history, and breakpoint transitions. Mack reported general iPhone and Android checks and accepted the iPad desktop presentation. This documentation session did not rerun the build or browser checks.

## Recently Completed

- Shipped the notebook implementation to `main` and completed the documented desktop production regression pass.
- Landed navigation accessibility changes and recorded QA scope in `df1c41d`.
- Initialized repository instructions, architecture, decision history, and this handoff.

## In Progress

No implementation changes were in progress in this checkout at capture. Follow-up work is tracked in [TODO.md](../TODO.md).

## Known Issues

- [The tag route](../src/pages/tags/%5Btag%5D.astro) calls `post.data.tags.includes()` without a fallback even though tags are optional in the schema. The source shows the mismatch. No failing build with a tagless post was run in this session.
- Hardware safe-area/browser chrome behavior, long-page history restoration, and rotation across the breakpoint remain unverified. Screen-reader sessions, text-only zoom, and the full touch-target audit are also outstanding.

## Next Steps

1. Finish the hardware scenarios in TODO #32.
2. Complete manual accessibility checks in #33.
3. Audit representative notebook content in #35.

## Important Context

Viewport width controls the theme, so the same tablet can use either layout. Check production preview when changing the window loader or styles because the dev server may inline styles that production extracts. Older [Claude guidance](../CLAUDE.md) describes four static popups. The current layout has three, and Holiday Cards is independent. Follow [AGENTS.md](../AGENTS.md) for authorization and handoff procedures.

## Relevant References

- [Architecture](ARCHITECTURE.md) and [decision log](DECISIONS.md)
- [November 2 QA record](qa-2026-11-02.md) and [work list](../TODO.md)
- `2aa89a8` fetched stylesheet fix, `2fa5324` Newton merge, and `df1c41d` accessibility review
