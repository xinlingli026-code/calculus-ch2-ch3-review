# Calculus Chapter 2–3 Revision Hub · 微积分 2–3 章复习备考站

> A bilingual (中文 / English) static study site for **Stewart, *Calculus: Early Transcendentals*** —
> the full syllabus map, concept checklist, flashcards, worked class examples, a random self-test
> and a three-tier exam sprint plan for **Chapter 2 (2.1–2.8) and Chapter 3 (3.1–3.5)**.
>
> 一个中英双语的纯静态复习网站：考纲地图、概念速查、记忆卡、课堂例题精讲、随机自测，
> 以及一套「考前冲刺方案」。范围严格对齐课堂笔记（NotesOnOct06 – NotesOnOct27）。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Pages](https://img.shields.io/badge/Pages-live-brightgreen.svg)](https://xinlingli026-code.github.io/calculus-ch2-ch3-review/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](index.html)
[![KaTeX](https://img.shields.io/badge/math-KaTeX-3A6EE0)](https://katex.org/)
[![No build step](https://img.shields.io/badge/build-none%20required-10b981)](index.html)
[![Offline fallback](https://img.shields.io/badge/LaTeX-offline%20fallback-f59e0b)](assets/app.js)

---

## 在线预览 · Live site

- 中文版 · Chinese: **[index.html](index.html)** → <https://xinlingli026-code.github.io/calculus-ch2-ch3-review/>
- 英文版 · English: **[index-en.html](index-en.html)**

打开仓库根目录的 `index.html` 即可本地使用，无需构建、无需服务器。

---

## 目录结构 · Structure

```
.
├── index.html              中文入口页 (Chinese entry)
├── index-en.html           英文入口页 (English entry)
├── assets/
│   ├── style.css           全部样式（含打印样式）
│   ├── app.js              交互层 + 双语字典 T{} + 数据合并 + 冲刺方案渲染
│   ├── data.js             中文内容层：考纲 / 概念 / 记忆卡 / 易错点 / 公式表
│   ├── problems.js         中文课堂例题 (52)
│   ├── hw.js               中文教材作业题库 (107)
│   ├── ch3.js              中文 Chapter 3 内容层 + 冲刺方案 PLAN
│   └── en/                 英文内容层（与中文版共用同一套交互逻辑）
│       ├── data.js  problems.js  hw.js  hw2.js  ch3.js
├── LICENSE                 MIT
├── SECURITY.md             安全策略与漏洞报告方式
├── CONTRIBUTING.md         贡献指南
└── DISCLAIMER.md           教材版权与免责声明
```

## 功能 · Features

| 页签 | 中文 | English | 内容 |
|---|---|---|---|
| 考纲地图 | ✓ | Syllabus | 13 个考点的权重、必会结论、作业题号分布与进度条 |
| 概念速查 | ✓ | Concepts | 定义 / 定理 / 公式，按小节组织 |
| 记忆卡 | ✓ | Flashcards | 翻卡自测，答错自动放回复习队列 |
| 教材作业 | ✓ | Homework | 老师布置的 Chapter 2 题目，含答案与解法 |
| 刷题 | ✓ | Examples | 87 道课堂例题（Ch2 52 + Ch3 35+），答案默认折叠 |
| 随机自测 | ✓ | Self-Test | 限时抽题、判分、错题回看 |
| 易错点 | ✓ | Traps | 24 条丢分高发点 |
| 公式速查表 | ✓ | Formulas | 10 列公式，可打印 / 存为 PDF |
| 冲刺方案 | ✓ | Sprint Plan | 三档节奏 + 五步循环 + 错题分诊 + 考场最后 10 分钟 |

**语言切换**：两版共用一套交互逻辑，内容层分离；学习进度通过 `localStorage`
（`calc2_review_progress_v1`）在两版之间共享。

**数学渲染**：KaTeX（CDN）渲染 `$...$`；离线时自动降级为等宽原式 `.math-raw`，不影响阅读。

---

## 本地使用 · Run locally

```bash
# 直接打开
open index.html          # macOS
start index.html         # Windows
xdg-open index.html     # Linux

# 或起一个本地静态服务器（可选）
python -m http.server 8000
```

需要联网以加载 KaTeX 与 Google Fonts；断网时页面仍可正常阅读。

---

## 快速自测方案 · The exam sprint plan

站内 **冲刺方案 / Sprint Plan** 页签提供三档可直接执行的节奏：

- **A 档 · 考前 48 小时**（救急档，总计 4–5 小时）：概念框架 → 分节作业 → 错题回刷 → 随机自测 → 手抄公式
- **B 档 · 考前 7 天**（标准档，每天 60–90 分钟）：Ch2 极限/连续/导数 → Ch3 求导法则 → 限时模考 → 错题回看
- **C 档 · 进考场前 30 分钟**：公式速查 → 易错点 → 昨晚错题重做 → 常识确认 → 深呼吸

配合**五步学习循环**（概念速查 → 教材作业 → 错题回炉 → 随机自测 → 公式手抄）、
**错题分诊表**（按错误类型决定回哪一步）与**考场最后 10 分钟十条**使用。

---

## 内容来源 · Content provenance

- 课堂笔记 NotesOnOct06 – NotesOnOct27（知识点、作业题号、课堂例题）
- 教材：Stewart, *Calculus: Early Transcendentals*, 8th ed., Brooks/Cole 2016（章节结构与题号）
- 所有答案与解题步骤均为本项目自行推导，并与课堂笔记中的教师答案交叉验证

## 版权声明 · Copyright

本仓库**只发布自行编写的讲解、推导与复习材料**。教材原文、习题与 Solutions Manual
版权归 McGraw-Hill / Stewart 所有，本项目与其没有任何关联，请参阅 [DISCLAIMER.md](DISCLAIMER.md)。

## 许可 · License

[MIT](LICENSE) — 覆盖本仓库中由作者原创编写的全部内容。

## 贡献 · Contributing

欢迎补充习题解析、勘误与译文改进，流程见 [CONTRIBUTING.md](CONTRIBUTING.md)。
安全问题请勿公开 Issue，见 [SECURITY.md](SECURITY.md)。
