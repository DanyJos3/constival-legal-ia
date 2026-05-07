// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://constival.com',
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,

      serialize(item) {
        // Dar mayor prioridad a páginas de servicios
        if (item.url.includes('/servicios/')) {
          return { ...item, priority: 0.9, changefreq: 'monthly' };
        }
        if (item.url.includes('/blog/')) {
          return { ...item, priority: 0.7, changefreq: 'weekly' };
        }
        if (item.url === 'https://constival.com/') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        return item;
      },
    }),
  ],
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