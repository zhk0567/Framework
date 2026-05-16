# GitHub Wiki 发布说明

本目录下的 `GitHub-Wiki/` 为面向 GitHub Wiki 整理后的 Markdown（重命名页面、修正 `blob/main/` 链接中的反斜杠、增加 `Home.md` 与 `_Sidebar.md`）。

## 推送到 GitHub Wiki 的前置条件

1. 在 GitHub 打开仓库 **Settings → General → Features**，勾选 **Wiki** 并保存。  
2. 建议先在网页上 **Create first page** 任意保存一次（部分账号下未初始化时，纯 `git push` 可能仍报 `Repository not found`）。  
3. 本机已配置可访问 `git@github.com:zhk0567/Framework` 的 **SSH 密钥**（与主仓库相同即可）。

## 一键推送

在仓库根目录执行：

```powershell
Set-Location -LiteralPath 'F:\Study\Framework\Wiki'
.\push-to-github-wiki.ps1
```

推送目标远程：`git@github.com:zhk0567/Framework.wiki.git`，分支：**`master`**（GitHub Wiki 默认分支）。

Wiki 在线入口：<https://github.com/zhk0567/Framework/wiki>
