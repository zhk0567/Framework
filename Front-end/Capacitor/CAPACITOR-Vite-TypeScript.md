# Capacitor（Vite + TypeScript）

## 框架简介

**Capacitor** 由 Ionic 团队维护，将 **Web 应用（通常为 SPA 构建产物）** 嵌入 **原生壳**（iOS、Android、Desktop），并通过 **插件桥** 访问相机、文件系统、推送等能力。与 **Apache Cordova** 相比，Capacitor 更贴近现代 **Web 开发流程**（`npm` 构建、`cap sync` 同步），并持续提供官方插件与社区插件生态。

- 官方网站：<https://capacitorjs.com/>
- 与 Cordova 迁移：<https://capacitorjs.com/docs/cordova>

## 在本仓库中的角色

本目录演示：**Vite 开发 + 构建产物 `dist/`** 可被 **`@capacitor/core`** 在运行时读取平台信息（如 `Capacitor.getPlatform()`）；并文档化 **`npm run cap:sync`** 将 Web 资源同步到已添加的原生工程。

## 技术栈

| 层级 | 选型 |
|------|------|
| Web | Vite 8 + TypeScript |
| 壳层 | `@capacitor/core`、按需添加 `@capacitor/ios` / `android` 等 |

## 安装与运行（Windows PowerShell）

```powershell
Set-Location -LiteralPath 'f:\Study\Framework\Front-end\Capacitor'
npm install
npm run dev
```

## 构建并同步到原生平台

```powershell
npm run build
npm run cap:sync
```

（需已用 Capacitor CLI 添加对应平台工程。）

## 默认开发与预览端口

- **5206**（`vite.config.ts` 中 `strictPort: true`）。

## 与 Apache Cordova 对照

| 维度 | Capacitor | Cordova |
|------|-----------|---------|
| 配置 | `capacitor.config.ts` 为主 | 传统 `config.xml` + `www` |
| 运行时 | 现代 WebView + 插件 API | 同类但生态偏历史积累 |
| 迁移 | 官方提供从 Cordova 迁移指南 | — |

## 与仓库内其它子项目对照

- **Ionic**：常一起使用；Ionic 管 UI，Capacitor 管原生桥与打包。
- **Expo**：偏 React Native 工具链；技术路线不同。

## 延伸阅读

- Capacitor 插件开发：<https://capacitorjs.com/docs/plugins>
