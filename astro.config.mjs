// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://imurar.github.io',
  base: '/imurar-portfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});