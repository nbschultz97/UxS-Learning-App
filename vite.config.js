import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    react(),
    legacy({
      // Safari 13/14 need a transpiled bundle and polyfills for modern syntax.
      // Keep the legacy build narrow to reduce bundle weight for current browsers.
      targets: ['Safari >= 13', 'iOS >= 13'],
      modernPolyfills: true,
    }),
  ],
  // Use a relative base so the bundle works whether it's served from the
  // repository subpath on GitHub Pages or the root of a custom domain.
  base: './',
});
