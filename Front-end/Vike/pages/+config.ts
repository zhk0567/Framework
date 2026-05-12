import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

const config: Config = {
  // https://vike.dev/head-tags
  title: "Vike · Framework 对照示例",
  description: "Vite 上 Vike（原 vite-plugin-ssr）文件路由 + SSR，与 Full-stack 元框架对照",

  extends: [vikeReact],
};

export default config;
