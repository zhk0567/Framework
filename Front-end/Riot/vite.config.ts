import { defineConfig } from 'vite';
import riot from 'rollup-plugin-riot';

export default defineConfig({
  plugins: [riot()],
  server: { port: 5191 },
  preview: { port: 5191 },
});
