import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import million from 'million/compiler';

export default defineConfig({
  plugins: [
    million.vite({ auto: true, telemetry: false }),
    react(),
  ],
  server: { port: 5193 },
  preview: { port: 5193 },
});
