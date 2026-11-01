# TODO

Working list for `interactive-gui` → launch-ready. Segmented by how soon it
needs attention, not by size. Each item has a stable id (`#NN`) for
reference — ids are never reused, even once an item is done or dropped.

## Next Up

_(nothing pending)_

## Backlog

_(nothing pending)_

## Someday

Low priority, nice-to-have, no urgency:

_(nothing pending)_

## Done

- [x] `#23` Fixed production-only bug where opening a blog post via the
      desktop UI (clicking a post link, handled by `WindowManager.astro`'s
      fetch-and-splice window navigation) lost all of that post's styling
      -- hero overlay, title, tags, share buttons. Root cause: the window
      loader only ever copied inline `<style>` tags from the fetched page,
      never `<link rel="stylesheet">` tags; dev inlines styles so this was
      invisible there, but production extracts them to a separate
      `_slug_.<hash>.css` file that never got imported. Now resolves and
      loads linked stylesheets too (deduped, awaited before the window
      opens, with a normal-navigation fallback if a stylesheet fails)
- [x] `#24` Fixed the homepage "More About Mack" button shifting position
      on its first click, and not being centered under the intro text --
      replaced the float-based portrait/text layout with a two-column grid
      (so button position no longer depends on float reflow), then wrapped
      the button in a flex `.hero-actions` container to center it reliably
- [x] `#1` Merged `interactive-gui` into `main` (clean fast-forward,
      `4eb8654..7357749`)
- [x] `#4` Deleted dead/dormant components: `Snowfall`, `Christmas`,
      `Pagination`, `Tags-Bak`, `FeatureImage`, `Link` — none had any live
      references (`Link` was only ever imported by the equally-dead
      `Pagination`). Also dropped the stale commented-out `Snowfall` import
      in `Layout.astro`
- [x] `#22` Holiday Cards: card images now open a full-size lightbox (plain
      JS/CSS, `<a class="card-link">` wrapping each thumbnail). Fixed two
      bugs found on real-device testing: images were shrinking to 49% of
      their link instead of the row (`.card-link img { width: 100% }`), and
      the fixed, full-viewport `.snowfall` decoration was silently eating
      every click (`pointer-events: none`)
- [x] `#5` Holiday Cards redesign: dropped the OS 9 window framing entirely.
      `/holiday-cards/` is now the already-standalone `holiday-cards.html`
      served directly as `index.html` (just the Christmas theme, snowing
      background, and card images — no Layout, no desktop chrome). Deleted
      the old `index.astro` wrapper and the now-dead `Popup-HolidayCards.astro`
      / `#popup2` popup, and re-linked it (`target="_blank"`) from the Media
      sidebar and the Control Strip
- [x] `#2` Removed a duplicate `<meta name="description">` tag in
      `BaseHead.astro` (one before the title, one in the Primary Meta Tags
      block)
- [x] `#3` Viewport meta now includes `initial-scale=1`
- [x] `#6` Killed `/author/[...author].astro` — it was the last route still
      using the pre-window-system card grid and was functionally redundant
      since `author` only ever has one value. Also removed `PostCard.astro`,
      `SectionHeader-Author.astro`, and `RelatedPosts.astro` (dead now that
      their only live/dead-but-linked consumer is gone)
- [x] `#7` Added `robots.txt`, pointing crawlers at the sitemap
- [x] `#8` Fixed `og:image`/`twitter:image` using a relative URL instead of
      an absolute one — social-share previews need the full URL to fetch it
- [x] `#9` Fixed `BaseHead.astro`'s RSS `<link>` tag, which had a literal
      placeholder title (`"Your Site's Title"`) — now matches the actual
      feed title from `rss.xml.js`
- [x] `#10` Privacy Policy: corrected the false "no cookies / no data
      collection" claims to accurately disclose Google Analytics
- [x] `#11` Removed Disqus entirely (dead `count.js` script, the unused
      `Comments` component, leftover `PostCard` markup) since comments
      aren't in use
- [x] `#12` Fixed: closing a blog post window blocked clicking into any
      other post until the whole Blog window was closed and reopened (a
      closed window's `pointer-events: all` descendants were intercepting
      clicks underneath)
- [x] `#13` Fixed: the menu bar and its dropdowns (Categories, Apple menu,
      etc.) could render behind an open window instead of on top of it
- [x] `#14` Replaced the Finder-icon fallback with `m-logo.png` / Mack's
      headshot across the Control Strip, Apple Menu, Hero window, and About
      window (both the static page and its floating-window title bar)
- [x] `#15` Hero copy: button reads "More About Mack"; "living in North
      Carolina"
- [x] `#16` About page: left-aligned paragraphs; rewrote the RetroCult
      paragraph
- [x] `#17` Dev server auto-picks a port when 4321 is taken
- [x] `#18` MackOS 9.0 window no longer gets trapped behind other windows
- [x] `#19` OS9-style window scrollbars; fixed Holiday Cards' double
      scrollbar
- [x] `#20` Holiday Cards links hidden pending a redesign
- [x] `#21` Full pre-launch audit (build/type health, SEO, content, dead
      code, broken links, mobile rendering) — findings above came out of
      this
