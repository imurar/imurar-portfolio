import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://imurar.github.io',
  integrations: [
    vue(),
    tailwind()
  ],
  output: 'static'
});
