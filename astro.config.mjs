// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://teivah.solutions',
  integrations: [
      starlight({
          title: 'HebMorph API',
          favicon: '/favicon.png',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/roman-sh/hebmorph-frontend' }],
          sidebar: [
              {
                  label: 'API Reference',
                  items: [
                      { label: 'Overview', slug: '' },
                  ],
              },
              {
                  label: 'Status',
                  items: [
                      { label: 'System Status', link: 'https://status.teivah.solutions' },
                  ],
              },
              {
                  label: 'Support & Legal',
                  items: [
                      { label: 'Contact Us', slug: 'support' },
                      { label: 'Terms & Privacy', slug: 'terms' },
                  ],
              },
          ],
      }),
	],
});