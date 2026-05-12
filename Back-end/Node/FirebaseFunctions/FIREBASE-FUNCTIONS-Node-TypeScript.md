# Firebase Cloud Functions（对照用）

本目录用 **Node + `http` + `tsx`** 提供 **`GET /api/health`**、**`GET /api/info`** 与 **`/` 呈现页**。

**真实的 Cloud Functions** 由 [Firebase](https://firebase.google.com/docs/functions) 托管：通过 `firebase-functions` 导出触发器（HTTP、Firestore、Pub/Sub 等），由 **Google Cloud** 扩容与计费；本地开发常用 **Emulator Suite**。

## 官方文档

- [Get started with Cloud Functions](https://firebase.google.com/docs/functions/get-started)
- [Emulator Suite](https://firebase.google.com/docs/emulator-suite)

## 典型流程（在 Firebase 项目目录）

```powershell
npm install -g firebase-tools
firebase login
firebase init functions
# 编写 functions/src/index.ts 后：
firebase emulators:start --only functions
```

与本仓库其它「平台型」占位目录一致：不提交完整 `functions/` 生成树，仅保留 HTTP 占位与文档链。
