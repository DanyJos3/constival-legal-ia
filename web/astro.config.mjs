// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://constival.com',
  integrations: [sitemap()],
  redirects: {
    '/crear-sas-ecuador': {
      status: 301,
      destination: '/servicios/crear-sas-ecuador'
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});