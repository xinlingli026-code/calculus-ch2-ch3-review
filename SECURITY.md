# Security Policy · 安全策略

本项目是一个**纯静态**网站：没有后端、没有数据库、不收集任何用户数据、不使用 Cookie 或
第三方分析脚本。唯一的外部依赖是 CDN 上的 KaTeX 与 Google Fonts（详见下方）。

This project is a **purely static** site: no backend, no database, no telemetry,
no cookies, no third-party analytics. The only external dependencies are KaTeX
and Google Fonts loaded from a CDN.

---

## 支持版本 · Supported versions

| 版本 | 状态 |
|---|---|
| `main` 分支当前版本 | ✅ 支持 |

仓库未发布历史版本（v1/v2 等），始终使用最新 `main`。

## 报告漏洞 · Reporting a vulnerability

**请不要通过公开 Issue 报告安全问题。**

请使用 GitHub 的私密漏洞报告功能：
**Repository → Security → Report a vulnerability**（或 `https://github.com/<owner>/<repo>/security/advisories/new`）。

也可以直接联系维护者（见 [README.md](README.md) 顶部的提交者信息）。

我们会在收到报告后 **72 小时内** 确认，7 天内给出修复或缓解方案。

### 建议包含的信息

- 受影响文件与行号
- 复现步骤
- 影响范围与严重程度
- 你建议的修复方式（可选）

## 安全设计 · Security design

| 项目 | 做法 |
|---|---|
| 认证 / 会话 | 无。整个站点是公开静态文件，不含任何登录逻辑 |
| 用户数据 | 不采集、不存储、不上报。唯一的本地存储是 `localStorage` 里的学习进度（题目标记），可随时清除 |
| 第三方脚本 | 无。页面不加载任何分析、追踪或广告脚本 |
| 外部资源 | 仅 KaTeX（jsDelivr CDN）与 Google Fonts，均为 `https`，并已配置 `crossorigin` 与完整性校验（SRI） |
| 内容安全 | 页面内所有来自数据文件的文本在插入 DOM 前都经过 HTML 转义（`esc()`），防止 LaTeX 中的 `<`、`>` 被当作标签解析 |
| 依赖供应链 | 无构建步骤、无 `package.json`、无 npm 依赖；没有可被篡改的锁定依赖 |
| 供应链风险面 | 仅 3 个第三方源（jsDelivr × 2、Google Fonts × 1），且都通过 SRI 校验完整性 |
| 密钥 | 仓库与代码中不含任何 API key、令牌或密码 |

## 自我检查清单 · Maintainer checklist

发布前须确认：

- [x] 全仓库扫描：无 API key / token / 密码 / 私钥
- [x] 无个人数据（邮箱、手机号、真实姓名、学号）
- [x] 无本机绝对路径（`C:\Users\...`、`/Users/...`、`/home/...`）
- [x] 无 `.env`、无凭据文件、无 `.git` 历史泄露
- [x] 外部资源使用 `https` + SRI
- [x] 页面声明 CSP，默认 `default-src 'self'`
- [x] `README` / `LICENSE` / `DISCLAIMER` / `SECURITY` 齐备
- [x] 依赖与许可证符合 MIT 要求
