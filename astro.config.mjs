import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://oktayozguroktayoglu.github.io',
  base: '/ebrubeauty',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
