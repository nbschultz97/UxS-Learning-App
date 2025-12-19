import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use a relative base so the bundle works whether it's served from the
  // repository subpath on GitHub Pages or the root of a custom domain.
  base: './',
});
