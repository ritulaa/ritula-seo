// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with your real domain once purchased, e.g. https://ritula.app
  site: 'https://ritula.app',
  integrations: [sitemap()],
});
