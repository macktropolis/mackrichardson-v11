# Development decision log

Entries are chronological. Preserve superseded entries and link their replacements. Dates reflect the documented milestone when the original decision date is unavailable.

## DEC-001: Keep Holiday Cards standalone

- **Date** — Unknown
- **Status** — Accepted
- **Category** — Architecture
- **Context** — The archive previously used the desktop window framing.
- **Decision** — Serve the Christmas-themed archive as its own HTML page and open it separately from desktop launchers.
- **Rationale** — The recorded redesign preserves the archive's own presentation outside the shared shell. Further deliberation is unknown.
- **Alternatives considered** — The prior Astro wrapper and desktop popup are documented. Other alternatives are unknown.
- **Consequences** — Shared shell changes do not automatically apply to the archive. Review it separately when changing its navigation or assets.
- **References** — [TODO items #5 and #22](../TODO.md), [archive HTML](../src/pages/holiday-cards/index.html).

## DEC-002: Load linked styles for fetched windows

- **Date** — 2026-11-01 (implementation commit)
- **Status** — Accepted
- **Category** — Architecture
- **Context** — Fetched article windows lost styling when Astro emitted linked production CSS.
- **Decision** — Resolve, deduplicate, and await the fetched document's stylesheet links. Fall back to normal navigation on failure.
- **Rationale** — Desktop windows must display extracted articles with the same styles they have on a direct visit.
- **Alternatives considered** — The previous loader copied inline styles only. Further alternatives are unknown.
- **Consequences** — Dev-only testing can miss production CSS regressions. Validate direct and fetched routes in production preview.
- **References** — Commit `2aa89a8`, [TODO item #23](../TODO.md), [WindowManager.astro](../src/components/WindowManager.astro).

## DEC-003: Select the notebook theme by viewport width

- **Date** — 2026-11-02 (release approval and merge)
- **Status** — Accepted
- **Category** — UI/UX
- **Context** — The site needed a readable phone and tablet interface while retaining its Mac OS 9 desktop.
- **Decision** — Use the Newton-inspired notebook at widths up to and including 1024px, with ordinary navigation and document scrolling. Keep desktop windows at larger widths.
- **Rationale** — The recorded design prioritizes readable narrow layouts while preserving the desktop interface at larger widths. Mack approved the Newton release and accepted the iPad desktop behavior reported in QA.
- **Alternatives considered** — No alternative breakpoints or device-detection deliberations are recorded.
- **Consequences** — Narrow desktop windows can use Newton and wide tablets can use Mac OS 9. Breakpoint transitions are a regression surface.
- **References** — Merge `2fa5324`, [README](../README.md), [TODO items #26 and #36](../TODO.md), [QA record](qa-2026-11-02.md).

## DEC-004: Keep development handoffs in Git

- **Date** — 2026-11-10
- **Status** — Accepted
- **Category** — Workflow
- **Context** — Development spans multiple Macs and assistant sessions with different local state.
- **Decision** — Maintain repository instructions, architecture, decision history, and a timestamped handoff in Markdown. The developer explicitly requested GitHub as the shared authority and explicit authorization for Git publication and deployment.
- **Rationale** — A fresh session can recover context from the checkout without relying on prior chats or another machine's local changes.
- **Alternatives considered** — Unknown.
- **Consequences** — Update the handoff at meaningful milestones and recheck Git state each session. Local documentation edits only travel after publication.
- **References** — [AGENTS.md](../AGENTS.md), [current state](CURRENT-STATE.md).
