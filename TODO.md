# TODO

Working list for the Mack Richardson site. Current focus: the Newton-inspired
phone/tablet interface, developed on `newton-os-mobile` and approved for
release on November 2, 2026. Follow-up device, accessibility, and regression
checks remain tracked below.

Segmented by how soon work needs attention, not by size. Each item has a stable
id (`#NN`) for reference — ids are never reused, even once an item is done or
dropped.

## Next Up

- [ ] `#32` Test on real iPhone/iPad and Android hardware: portrait and
      landscape, browser chrome changes, safe-area spacing, long-page
      scrolling, browser Back/Forward, and rotation across the 1024px breakpoint.
      The checks completed so far are browser viewport checks, not a full
      real-device pass
- [ ] `#33` Complete accessibility review: keyboard navigation, screen-reader
      labels, current-page indication, Extras focus trapping/return and
      dismissal, color contrast, text zoom, and touch target sizes
- [ ] `#34` Recheck desktop behavior before release: fresh page loads and
      fetched windows, linked production stylesheets, popup controls, nav
      dropdown highlighting, homepage button alignment, dragging, and
      repeated transitions between notebook and desktop layouts

## Backlog

- [ ] `#35` Audit representative content in the notebook theme: category/tag
      lists, long titles, code blocks, embedded media, older floated images,
      article share controls, About links, and the privacy page. Confirm
      narrow screens do not overflow horizontally or hide content behind
      the toolbar; keep the standalone Holiday Cards archive's own theme

## Someday

Low priority, nice-to-have, no urgency:

_(nothing pending)_

## Done

- [x] `#36` Production release approved by Mack on November 2, 2026:
      passed the production build, committed and pushed the Newton work,
      and merged `newton-os-mobile` into `main` for Netlify deployment.
      Broader device/accessibility/content checks remain tracked above

- [x] `#31` Visual review of the Newton theme approved by Mack, including
      typography, imagery, controls, toolbar, and Extras drawer
- [x] `#37` Polished the Newton theme: tinted Mack logo, removed decorative
      N/battery status, added matching scrollbars and the local Isaac Espy
      font with attribution, applied the green-gray wash to all image
      elements, corrected button icon alignment and equal-width phone
      stacks, and made About headings bold. Article tags use dark Espy
      labels without shadows; Doctor Who headings are left-aligned without
      visible numbering, with their existing anchors preserved

- [x] `#25` Kept parent top-nav items highlighted while hovering their
      dropdown children by styling `li:hover > a` instead of only `a:hover`;
      committed and deployed before the Newton branch
- [x] `#26` Added the first Newton-inspired notebook shell at viewport widths
      up to 1024px: green-gray colors, dark ink, modern readable text, a
      notebook header, and a Home / Journal / About / Extras bottom toolbar.
      Larger viewports retain the Mac OS desktop interface
- [x] `#27` Implemented the Extras dialog with site/contact shortcuts,
      categories drawn from published posts, privacy navigation, a close
      button, outside-click dismissal, Escape, and native dialog focus
      handling. Added `/privacy/` using the existing policy content
- [x] `#28` Integrated Mack's Font Awesome kit (`c2df680238`) and added a
      reusable `PixelIcon.astro` component using `fa-pixel fa-regular`.
      Replaced the notebook's hand-drawn SVG, CSS folder, and text-symbol
      icons with kit icons, including toolbar controls, Extras shortcuts,
      folder/close controls, and external-link indicators. Verified the
      icon names against the kit and rendering in the dev preview
- [x] `#29` Adapted content and navigation to notebook mode: normal page
      links and document scrolling, no desktop dragging on small screens,
      journal/article styling, stacked floated illustrations on phones,
      hidden desktop launchers and closed popups, and content restoration
      when crossing the breakpoint. Moved the homepage content inside the
      shared Layout's slot
- [x] `#30` Passed Astro checks and the production build; checked phone Home,
      Journal, article, and Extras views, tablet About, privacy navigation,
      drawer Escape/focus return, and notebook/desktop breakpoint transitions
      in the browser. Checked generated category links. Further device,
      accessibility, content, and desktop checks remain above
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
