import { defineConfig, sharpImageService } from 'astro/config';
import icon from "astro-icon";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: "https://mackrichardson.com",
    integrations: [icon(), sitemap()],
    image: {
      service: sharpImageService(),
      domains: ["astro.build"],
    },
    vite: {
      css: {
        // Vite's default CSS minifier (Lightning CSS) has no browser
        // targets by default, so it freely emits newer syntax -- e.g. media
        // query range syntax (`width>=900px`) -- that real Safari below
        // 16.4 doesn't parse, even though every other engine (and the
        // unminified dev build) tolerates it fine. Pin targets so the
        // minifier downlevels to widely-supported syntax instead.
        lightningcss: {
          targets: {
            safari: (14 << 16),
            ios_saf: (14 << 16),
            chrome: (90 << 16),
            firefox: (90 << 16),
            edge: (90 << 16),
          },
        },
      },
      build: {
        // build.cssTarget takes precedence over css.lightningcss.targets
        // for the minification step itself, so it needs to be set too.
        cssTarget: ["safari14", "ios14", "chrome90", "firefox90", "edge90"],
      },
    },
});
