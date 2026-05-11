import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';

export default defineConfig({
  plugins: [
    babel({
      filter: /\.[jt]sx$/,
      babelConfig: {
        presets: [
          ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
        ],
        plugins: [['babel-plugin-inferno', { imports: true }]],
      },
    }),
  ],
  server: { port: 5190 },
  preview: { port: 5190 },
});
