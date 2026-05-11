import { defineConfig } from 'vite';
import analog from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [
    analog({
      tsconfig: 'tsconfig.app.json',
    }),
  ],
  server: { port: 3035 },
  preview: { port: 3035 },
});
