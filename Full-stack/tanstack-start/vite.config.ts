import { defineConfig, type ViteDevServer } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackRouter } from '@tanstack/router-plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
/** 开发态同源 GET /api/demo（与其它 Full-stack 子工程对齐；生产需部署到带 API 的运行时） */
function apiDemoPlugin() {
  return {
    name: 'framework-api-demo',
    configureServer(server: ViteDevServer) {
      server.middlewares.use('/api/demo', (_req, res) => {
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.end(
          JSON.stringify({
            ok: true,
            stack: 'TanStack Router 模板 + Vite dev 中间件',
            time: new Date().toISOString(),
          }),
        )
      })
    },
  }
}

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  server: { port: 3038 },
  preview: { port: 3038 },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    viteReact(),
    apiDemoPlugin(),
  ],
})

export default config
