import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: false,
  build: {
    outDir: 'dist-site',
    rollupOptions: {
      input: 'index.html',
    },
  },
});
