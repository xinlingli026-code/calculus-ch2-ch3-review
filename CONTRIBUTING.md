# Contributing · 贡献指南

感谢你参与这个复习站。这个站点刻意保持**零构建、零依赖**：纯 HTML + CSS + 原生 JS，
双击 `index.html` 就能跑。任何改动都必须继续满足这个前提。

## 快速开始

```bash
git clone https://github.com/<owner>/<repo>.git
cd <repo>
# 直接用浏览器打开 index.html 预览
```

没有 `npm install`，没有打包步骤，没有测试框架。

## 目录约定

```
assets/app.js        交互层 + 双语字典 T{} + 各板块渲染函数
assets/data.js       中文内容层（考纲 / 概念 / 记忆卡 / 易错点 / 公式表）
assets/problems.js   中文课堂例题
assets/hw.js         中文教材作业题库
assets/ch3.js        中文 Chapter 3 内容层 + PLAN（冲刺方案）
assets/en/*.js       英文内容层（与中文版一一对应）
index.html / index-en.html   两个入口页
```

**改内容不改逻辑。** 新增内容一律加到内容层文件里；只有当两个语言版本都需要新交互时，
才动 `assets/app.js`，并且要同时在 `T{}` 字典里补上中英文案。

## 添加一道题

课堂例题加到 `assets/problems.js` 与 `assets/en/problems.js`：

```js
{ sec: '3.3', num: '例11', type: '三角求导',
  q: '求 $\\dfrac{d}{dx}\\sin^2x$。',
  ans: '$2\\sin x\\cos x$',
  steps: ['写成 $(\\sin x)^2$', "$y'=2\\sin x\\cdot\\cos x$"] }
```

字段约定：

- `sec` 必须与 `SECTIONS` 里的 `id` 一致（`2.1`–`2.8`、`3.1`–`3.5`）
- `num` 为纯数字时会被当作「教材题号」渲染，否则显示为「课堂例题」
- `q` / `ans` / `steps` 里的 LaTeX 用 `$...$` 包裹
- **所有文本会被 `esc()` 转义后再插入 DOM**，`<` `>` 请直接写，HTML 实体不必手动处理

教材作业题加到 `assets/hw.js`（英文在 `assets/en/hw.js` + `assets/en/hw2.js`，
后者用 `HW_PROBLEMS.push(...)` 追加）：

```js
{ sec: '2.5', num: 3, page: 124, type: '连续性',
  q: '中文题干', en: 'English statement',
  ans: '$f$ 在 $[a,b]$ 上连续',
  steps: ['第一步', '第二步'],
  note: '可选：需要核对教材书页时写在这里' }
```

## 数学公式

- 统一用 KaTeX 语法，包裹在 `$...$` 中
- 不要使用 `①②③` 之类的特殊符号包在公式里（KaTeX 会报 `unknownSymbol`）
- KaTeX 走 CDN；断网时页面会降级成等宽原式，仍然可读
- 新增公式后请在浏览器里确认渲染正常（控制台不应有 KaTeX 报错）

## 提交前自查

- [ ] 中英文两版都同步更新（内容层一一对应）
- [ ] 新增小节同时加进 `SECTIONS`、`SCOPE_CARDS`、`CONCEPTS` 等对应数组
- [ ] 在浏览器里实际点一遍受影响的页签，控制台无报错
- [ ] 没有引入任何外部 JS 依赖或构建步骤
- [ ] 没有把密钥、本机路径或个人信息写进代码

## 提交信息

用简短祈使句描述改动，例如：

```
feat: add 3.5 implicit differentiation flashcards
fix: escape < in formula strings before DOM insertion
docs: clarify textbook copyright scope in disclaimer
```

## 版权

贡献即表示同意你的内容按 [MIT License](LICENSE) 发布。
请勿提交教材原文的整段复制、Solutions Manual 内容或他人受版权保护的素材。
