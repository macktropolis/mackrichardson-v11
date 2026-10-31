# TODO

Working list for `interactive-gui` → launch-ready. Segmented by how soon it
needs attention, not by size.

## Next Up

- [ ] Push the latest commits on `interactive-gui` to origin

## Backlog

Concrete, scoped issues surfaced by the pre-launch audit:

- [ ] `BaseHead.astro`'s RSS `<link>` tag has a literal placeholder title
      (`"Your Site's Title"`)
- [ ] `og:image` / `twitter:image` use a relative URL (`ogImage` from
      `site.json`) instead of an absolute one — likely breaks social-share
      previews
- [ ] No `robots.txt` in `public/`
- [ ] Decide the fate of `/author/[...author].astro` — it's the only route
      still using the pre-window-system card grid (doesn't open as a
      floating window like Blog/Category/Tag do), and is functionally
      redundant since `author` only ever has one value
- [ ] Decide when/whether to merge `interactive-gui` into `main` (currently a
      clean fast-forward, no divergence)

## Someday

Low priority, nice-to-have, no urgency:

- [ ] Duplicate `<meta name="description">` tag in `BaseHead.astro`
- [ ] Viewport meta is missing `initial-scale=1`
- [ ] Clean up dead/dormant components: `Snowfall`, `Christmas`,
      `RelatedPosts`, `Pagination`, `Tags-Bak`, `FeatureImage`, `Link`
- [ ] Holiday Cards redesign (currently unlinked from the UI pending this)

## Done

- [x] Privacy Policy: corrected the false "no cookies / no data collection"
      claims to accurately disclose Google Analytics
- [x] Removed Disqus entirely (dead `count.js` script, the unused `Comments`
      component, leftover `PostCard` markup) since comments aren't in use
- [x] Fixed: closing a blog post window blocked clicking into any other post
      until the whole Blog window was closed and reopened (a closed window's
      `pointer-events: all` descendants were intercepting clicks underneath)
- [x] Fixed: the menu bar and its dropdowns (Categories, Apple menu, etc.)
      could render behind an open window instead of on top of it
- [x] Replaced the Finder-icon fallback with `m-logo.png` / Mack's headshot
      across the Control Strip, Apple Menu, Hero window, and About window
      (both the static page and its floating-window title bar)
- [x] Hero copy: button reads "More About Mack"; "living in North Carolina"
- [x] About page: left-aligned paragraphs; rewrote the RetroCult paragraph
- [x] Dev server auto-picks a port when 4321 is taken
- [x] MackOS 9.0 window no longer gets trapped behind other windows
- [x] OS9-style window scrollbars; fixed Holiday Cards' double scrollbar
- [x] Holiday Cards links hidden pending a redesign
- [x] Full pre-launch audit (build/type health, SEO, content, dead code,
      broken links, mobile rendering) — findings above came out of this
