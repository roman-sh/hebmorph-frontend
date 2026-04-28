// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://teivah.solutions',
  integrations: [
      starlight({
          title: 'Hebrew Lemmatization API',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/roman-sh/hebMorph-service' }],
          sidebar: [
              {
                  label: 'API Reference',
                  items: [
                      { label: 'Overview', slug: '' },
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