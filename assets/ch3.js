/* ============================================================
   Chapter 3 内容层（中文）
   来源：课堂笔记 NotesOnOct22（3.1–3.2）、NotesOnOct27（3.3–3.5）
   附：考前快速自测方案
   ============================================================ */

/* ---------- 小节与作业题号 ---------- */
const SECTIONS3 = [
  { id: '3.1', name: 'Derivatives of Polynomials and Exponential Functions', cn: '多项式与指数函数求导', en: 'Polynomials & Exponentials', hw: [3,5,7,11,13,17,19,21,23,25,29,31,33,35,37,49,55,57,59,65,75], weight: 3, tags: ['基本功', '幂法则'] },
  { id: '3.2', name: 'Product and Quotient Rules', cn: '积法则与商法则', en: 'Product & Quotient Rules', hw: [1,3,5,7,9,11,13,15,17,19,21,23,25,31,43,45,47,49,55], weight: 3, tags: ['必考', '易漏内层导数'] },
  { id: '3.3', name: 'Derivatives of Trigonometric Functions', cn: '三角函数求导', en: 'Trigonometric Functions', hw: [1,3,5,7,9,11,13,15,17,18,19,20,23,33,35,39,41,43,45,51,57], weight: 5, tags: ['重点', '题型最多'] },
  { id: '3.4', name: 'The Chain Rule', cn: '链式法则', en: 'The Chain Rule', hw: [7,9,11,13,15,17,25,27,29,31,43,51,53,61,71,73,79,81], weight: 5, tags: ['重点', '计算量大'] },
  { id: '3.5', name: 'Implicit Differentiation', cn: '隐函数求导与逆三角函数求导', en: 'Implicit & Inverse Trig', hw: [5,7,9,11,13,15,17,19,27,35,49,51,57,63,75], weight: 5, tags: ['重点', '含逆三角函数', '作业 p.215'] }
];

const SCOPE_CARDS3 = {
  '3.1': {
    desc: '幂法则、常数倍与加减法则，以及 e 的定义与 d/dx eˣ = eˣ。这一节是后面所有求导规则的地基。',
    must: ['d/dx xⁿ = n xⁿ⁻¹（n 为任意实数，x>0）', 'd/dx eˣ = eˣ', '用 f′(x)=0 求水平切线', '速度、加速度：s′、s″']
  },
  '3.2': {
    desc: '积法则与商法则，是复合与隐函数求导的零件。考场上"忘记乘内层导数"绝大多数都出在这里。',
    must: ['d/dx(uv) = u v′ + v u′', 'd/dx(u/v) = (v u′ − u v′)/v²', '乘积/商法则与幂法则的配合']
  },
  '3.3': {
    desc: '两个特殊三角极限 + 四个三角函数的导数公式。这是全章计算量最集中的一节，也最容易被"弧度制"坑到。',
    must: ['lim_{t→0} sin t/t = 1，lim_{t→0} (1−cos t)/t = 0', 'd/dx sin x = cos x，d/dx cos x = −sin x', 'tan → sec²x，cot → −csc²x，sec → sec x tan x，csc → −csc x cot x', '导数公式只在弧度制下成立']
  },
  '3.4': {
    desc: '链式法则：把复合函数一层一层拆开。考试里的大计算题基本都靠它。',
    must: ['(f∘g)′(x) = f′(g(x))·g′(x)', 'dy/dx = dy/du · du/dx', '多层复合要逐层乘', '指数型 d/dx aˣ = aˣ ln a']
  },
  '3.5': {
    desc: '隐函数求导：对含 y 的方程两边同时对 x 求导，把 y 当作 x 的函数，最后解出 y′。本节后半段用同一套隐函数技巧推出三个逆三角函数的导数。',
    must: ['对 x 求导时 y 是 x 的函数', '解出 y′ 的代数步骤', '用 y′ 求切线方程或水平切线', 'd/dx arcsin x = 1/√(1−x²)', 'd/dx arccos x = −1/√(1−x²)', 'd/dx arctan x = 1/(1+x²)']
  }
};

/* ---------- 概念速查 ---------- */
const CONCEPTS3 = [
  {
    sec: '3.1', title: '多项式与指数函数求导',
    items: [
      { dt: '幂法则', dd: '幂函数求导是所有法则的基础，n 为任意实数时在 x>0 上成立。', formula: '\\frac{d}{dx}c=0,\\quad \\frac{d}{dx}x=1,\\quad \\frac{d}{dx}x^n=nx^{n-1}\\ (n\\in\\mathbb{R})' },
      { dt: '常数倍与加减法则', dd: 'D_x[kf(x)] = k D_x f(x)，D_x[f(x) ± g(x)] = D_x f(x) ± D_x g(x)。' },
      { dt: '课堂例题', dd: '$y=5x^2+7x-6 \\Rightarrow y\'=10x+7$；$y=4x^6-3x^5-10x^2+5x+16 \\Rightarrow y\'=24x^5-15x^4-20x+5$。' },
      { dt: '例：分式写成幂', dd: '$y=\\dfrac{x^2+1}{x}=x+x^{-1} \\Rightarrow y\'=1-x^{-2}$；$y=\\dfrac{x+1}{\\sqrt x}=x^{1/2}+x^{-1/2} \\Rightarrow y\'=\\dfrac{x-1}{2x^{3/2}}$。', callout: '看到根式就改成幂：$\\sqrt x=x^{1/2}$、$1/x=x^{-1}$。' },
      { dt: '水平切线', dd: '切线水平 $\\iff$ 切线斜率为 0 $\\iff$ $f\'(a)=0$。', formula: 'y=x^4-6x^2+4:\\ f\'=4x^3-12x=0 \\Rightarrow x=0,\\pm\\sqrt3\\ \\Rightarrow (0,4),\\ (\\pm\\sqrt3,-5)' },
      { dt: '运动学：速度与加速度', dd: '$s\'(t)$ 是速度，$s\'\'(t)$ 是加速度。', formula: 's=2t^3-5t^2+3t+4 \\Rightarrow s\'=6t^2-10t+3,\\ s\'\'=12t-10,\\ s\'\'(2)=14\\ \\text{cm/s}^2' },
      { dt: 'e 的定义与 eˣ 的导数', dd: '$e$ 是使 $\\lim_{h\\to0}\\dfrac{e^h-1}{h}=1$ 成立的那个数；由此得到 $d/dx\\,e^x=e^x$。', formula: '\\frac{d}{dx}e^x=e^x' },
      { dt: '例：切线平行', dd: '曲线 $y=e^x$ 在何处切线平行于 $y=2x$？由 $e^a=2$ 得 $a=\\ln2$，切点 $(\\ln2, 2)$。' }
    ]
  },
  {
    sec: '3.2', title: '积法则与商法则',
    items: [
      { dt: '积法则', dd: '若 u、v 都可导，则 (uv)′ = u v′ + v u′（不是 u′v′）。', formula: '\\frac{d}{dx}(uv)=u\\frac{dv}{dx}+v\\frac{du}{dx}' },
      { dt: '课堂例题', dd: '$y=(3x^2-5)(2x^4-x) \\Rightarrow y\'=6x(2x^4-x)+(3x^2-5)(8x^3-1)=36x^5-40x^3-9x^2+5$（可用展开法校验）。' },
      { dt: '例：指数相乘', dd: '$f(x)=xe^x \\Rightarrow f\'(x)=(1+x)e^x$，且 $f^{(n)}(x)=(n+x)e^x$。' },
      { dt: '例：已知函数值求导数值', dd: '$f(x)=\\sqrt x\\,g(x)$，$g(4)=2$、$g\'(4)=3$，则 $f\'(4)=\\dfrac{g(4)}{2\\sqrt4}+\\sqrt4\\,g\'(4)=\\dfrac12+6=\\dfrac{13}{2}$。' },
      { dt: '商法则', dd: '若 u、v 可导且 v(x)≠0，则 (u/v)′ = (v u′ − u v′)/v²。', formula: "\\frac{d}{dx}\\frac{u}{v}=\\frac{v\\frac{du}{dx}-u\\frac{dv}{dx}}{v^2}" },
      { dt: '课堂例题', dd: '$y=\\dfrac{3x-5}{x^2+7} \\Rightarrow y\'=\\dfrac{3(x^2+7)-(3x-5)(2x)}{(x^2+7)^2}$。' },
      { dt: '例：切线', dd: '$y=\\dfrac{e^x}{1+x^2}$ 在 $(1, e/2)$ 处：$y\'=\\dfrac{e^x(1+x^2-2x)}{(1+x^2)^2}=\\dfrac{e^x(x-1)^2}{(1+x^2)^2}$，在 x=1 处斜率为 0，切线水平 $y=\\dfrac e2$。' }
    ]
  },
  {
    sec: '3.3', title: '三角函数求导',
    items: [
      { dt: '两个特殊三角极限', dd: '这是所有三角极限的基础：', formula: '\\lim_{t\\to0}\\frac{\\sin t}{t}=1,\\qquad \\lim_{t\\to0}\\frac{1-\\cos t}{t}=0' },
      { dt: '证明思路', dd: '用面积比较 $\\sin\\theta<\\theta<\\tan\\theta$（当 $0<\\theta<\\tfrac\\pi2$）配合夹逼定理；$\\cos t$ 是偶函数。', callout: 'sin t/t 是偶函数（在 t=0 处补定义为 1），因此左右极限相同。' },
      { dt: '课堂例题', dd: '$\\lim_{x\\to0}\\dfrac{\\sin3x}{x}=3$（令 $u=3x$）；$\\lim_{t\\to0}\\dfrac{1-\\cos t}{\\sin t}=0$；$\\lim_{x\\to0}\\dfrac{\\sin4x}{\\tan x}=4$。' },
      { dt: 'sin 与 cos 的导数', dd: '', formula: '\\frac{d}{dx}\\sin x=\\cos x,\\qquad \\frac{d}{dx}\\cos x=-\\sin x' },
      { dt: '例：组合', dd: '$\\dfrac{d}{dx}(3\\sin x-2\\cos x)=3\\cos x+2\\sin x$。' },
      { dt: '例：切线', dd: '$y=3\\sin x$ 在 $(\\pi,0)$ 处：斜率 $=3\\cos\\pi=-3$，切线 $y=-3(x-\\pi)$，即 $y=-3x+3\\pi$。' },
      { dt: '例：积法则', dd: '$\\dfrac{d}{dx}(x^2\\sin x)=2x\\sin x+x^2\\cos x$；$\\dfrac{d}{dx}\\dfrac{1+\\sin x}{\\cos x}=\\dfrac{1+\\sin x}{\\cos^2x}$。' },
      { dt: '其余四个三角函数', dd: '', formula: '\\frac{d}{dx}\\tan x=\\sec^2x,\\quad \\frac{d}{dx}\\cot x=-\\csc^2x,\\quad \\frac{d}{dx}\\sec x=\\sec x\\tan x,\\quad \\frac{d}{dx}\\csc x=-\\csc x\\cot x' },
      { dt: '例：切线与水平切线', dd: '$y=\\tan x$ 在 $(\\tfrac\\pi4,1)$：斜率 $=\\sec^2\\tfrac\\pi4=2$，切线 $y-1=2(x-\\tfrac\\pi4)$。$y=\\sin^2x$ 的水平切线：$y\'=2\\sin x\\cos x=\\sin2x=0 \\Rightarrow x=\\dfrac{k\\pi}{2}$。' },
      { dt: '例：应用（弹簧）', dd: '弹簧被拉长 4 cm 后释放，$s(t)=4\\cos t$：$v(t)=-4\\sin t$，$a(t)=-4\\cos t$；$t=0$ 时位移最大、速度为 0、加速度为 −4，运动周期 $2\\pi$。' }
    ]
  },
  {
    sec: '3.4', title: '链式法则',
    items: [
      { dt: '链式法则', dd: '若 g 在 x 处可导、f 在 u=g(x) 处可导，则复合函数 f∘g 在 x 处可导。', formula: '(f\\circ g)\'(x)=f\'(g(x))\\cdot g\'(x)\\qquad \\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx}' },
      { dt: '课堂例题', dd: '$\\dfrac{d}{dx}(x^2+2x)^3=3(x^2+2x)^2(2x+2)$；$y=(2x^2-4x+1)^{60} \\Rightarrow y\'=60(2x^2-4x+1)^{59}(4x-4)$。' },
      { dt: '例：商 + 链', dd: '$y=\\dfrac{3\\sqrt{2x^5}-7}{(x^4+3)^{13}}$：先用商法则，再对分子分母分别用链式法则（$\\sqrt{2x^5}=(2x^5)^{1/2}$）。' },
      { dt: '例：复合套复合', dd: '$y=\\sin^2x \\Rightarrow y\'=2\\sin x\\cos x$；$\\dfrac{d}{dx}\\sin^3(4x)=3\\sin^2(4x)\\cos(4x)\\cdot4=12\\sin^2(4x)\\cos(4x)$；$\\dfrac{d}{dx}\\sin[\\cos(x^2)]=-2x\\sin(x^2)\\cos[\\cos(x^2)]$。' },
      { dt: '例：外层函数求导', dd: '$F(y)=y\\sin(y^2) \\Rightarrow F\'(y)=\\sin(y^2)+2y^2\\cos(y^2)$；$D_xF(x^3)=F\'(x^3)\\cdot3x^2$；$D_x[F(x)]^3=3[F(x)]^2F\'(x)$。' },
      { dt: '例：化简后再求导', dd: '$\\dfrac{d}{dx}\\dfrac{x^2(1+x)^3}{1+x}=\\dfrac{d}{dx}\\big[x^2(1+x)^2\\big]=2x(1+x)^2+2x^2(1+x)=2x(1+x)(1+2x)$。' },
      { dt: '例：指数与三角复合', dd: '$\\dfrac{d}{dx}e^{\\sin x}=e^{\\sin x}\\cos x$；$\\dfrac{d}{dx}a^x=a^x\\ln a$（a>0, a≠1）；$\\dfrac{d}{dx}2\\sec^2x=4\\sec^2x\\tan x$。' }
    ]
  },
  {
    sec: '3.5', title: '隐函数求导',
    items: [
      { dt: '什么是隐函数', dd: '方程 $y^3+7y=x^3$ 把 y 定义成 x 的函数，形式上不显式解出 y，这叫隐函数。' },
      { dt: '求导步骤', dd: '① 两边同时对 x 求导；② 把 y 当作 x 的函数（y′ 就是待求量）；③ 代数整理解出 y′；④ 代入切线方程或求水平切线。', formula: 'y^3+7y=x^3 \\Rightarrow 3y^2y\'+7y\'=3x^2 \\Rightarrow y\'=\\frac{3x^2}{3y^2+7}' },
      { dt: '例：切线', dd: '$4x^2y-3y=x^3$ 在 $(1,1)$：$8xy+(4x^2-3)y\'=3x^2 \\Rightarrow y\'=\\dfrac{3x^2-8xy}{4x^2-3}$，在 (1,1) 得 $y\'=-5$，切线 $y-1=-5(x-1)$，即 $y=-5x+6$。' },
      { dt: '例：水平切线', dd: '$x^3+y^3=6xy$ 在第一象限的水平切线：$y\'=0 \\Rightarrow 6y-3x^2=0 \\Rightarrow y=\\dfrac{x^2}{2}$，代入得 $x^3=16$，切点 $(2\\sqrt[3]{2},\\,2\\sqrt[3]{4})$。' },
      { dt: '易错点', dd: '求导时若把 y 当常数，得到的 y′ 必然是错的；含 y 的项一定要带 y′。' }
    ]
  }
];

/* ---------- 记忆卡（第 3 章） ---------- */
const FLASHCARDS3 = [
  { tag: '3.1', q: '幂法则怎么写？', a: '$\\dfrac{d}{dx}x^n=nx^{n-1}$（n 为任意实数，x>0）' },
  { tag: '3.1', q: '$e$ 的定义是什么？', a: '$e$ 是使 $\\lim_{h\\to0}\\dfrac{e^h-1}{h}=1$ 成立的那个数' },
  { tag: '3.1', q: '$d/dx\\,e^x$ 等于什么？', a: '$e^x$' },
  { tag: '3.1', q: '怎样求水平切线？', a: '令 $f\'(a)=0$，再代回原方程求点 $(a,f(a))$' },
  { tag: '3.2', q: '积法则？', a: '$\\dfrac{d}{dx}(uv)=u\\dfrac{dv}{dx}+v\\dfrac{du}{dx}$' },
  { tag: '3.2', q: '商法则？', a: '$\\dfrac{d}{dx}\\dfrac{u}{v}=\\dfrac{v\\dfrac{du}{dx}-u\\dfrac{dv}{dx}}{v^2}$' },
  { tag: '3.2', q: '$f(x)=xe^x$ 的导数？', a: '$f\'(x)=(1+x)e^x$，更高阶 $f^{(n)}(x)=(n+x)e^x$' },
  { tag: '3.3', q: '两个特殊三角极限？', a: '$\\lim_{t\\to0}\\dfrac{\\sin t}{t}=1$，$\\lim_{t\\to0}\\dfrac{1-\\cos t}{t}=0$' },
  { tag: '3.3', q: 'sin x 与 cos x 的导数？', a: '$\\dfrac{d}{dx}\\sin x=\\cos x$，$\\dfrac{d}{dx}\\cos x=-\\sin x$' },
  { tag: '3.3', q: 'tan / cot / sec / csc 的导数？', a: '$\\sec^2x$；$-\\csc^2x$；$\\sec x\\tan x$；$-\\csc x\\cot x$' },
  { tag: '3.3', q: '$\\lim_{x\\to0}\\dfrac{\\sin3x}{x}$ 等于多少？', a: '$3$（令 $u=3x$，用 $\\lim_{u\\to0}\\sin u/u=1$）' },
  { tag: '3.3', q: '$y=\\sin^2x$ 的水平切线在哪？', a: '$y\'=\\sin2x=0 \\Rightarrow x=\\dfrac{k\\pi}{2}$' },
  { tag: '3.4', q: '链式法则怎么写？', a: '$(f\\circ g)\'(x)=f\'(g(x))\\cdot g\'(x)$，即 $\\dfrac{dy}{dx}=\\dfrac{dy}{du}\\cdot\\dfrac{du}{dx}$' },
  { tag: '3.4', q: '$d/dx\\sin^3(4x)$ 等于什么？', a: '$12\\sin^2(4x)\\cos(4x)$' },
  { tag: '3.4', q: '$d/dx\\,a^x$ 等于什么？', a: '$a^x\\ln a$（a>0, a≠1）' },
  { tag: '3.4', q: '$D_xF(x^3)$ 等于什么？', a: '$F\'(x^3)\\cdot3x^2$（把 $x^3$ 当作外层自变量）' },
  { tag: '3.5', q: '隐函数求导的四个步骤？', a: '两边对 x 求导 → y 视为 x 的函数 → 解出 y′ → 代入切线/水平切线条件' },
  { tag: '3.5', q: '$y^3+7y=x^3$ 的 y′？', a: '$3y^2y\'+7y\'=3x^2 \\Rightarrow y\'=\\dfrac{3x^2}{3y^2+7}$' }
];

/* ---------- 易错点（第 3 章） ---------- */
const PITFALLS3 = [
  { sec: '3.2', t: '积法则写成两个导数相乘', w: '$(uv)\' = u\'v\'$。', r: '$(uv)\'=uv\'+vu\'$，是两项之和。', why: '课堂例题 $(3x^2-5)(2x^4-x)$：展开求导得 $36x^5-40x^3-9x^2+5$，与积法则结果一致。' },
  { sec: '3.2', t: '商法则分子写反', w: '$(u/v)\'=\\dfrac{uv\'-vu\'}{v^2}$。', r: '分子是 $v u\'-u v\'$，顺序是"v 在前、u 在后"，各自配自己的导数。', why: '代入 $u=3x-5$、$v=x^2+7$ 可核对：$\\dfrac{3(x^2+7)-(3x-5)(2x)}{(x^2+7)^2}$。' },
  { sec: '3.4', t: '链式法则漏乘内层导数', w: '$\\dfrac{d}{dx}(x^2+2x)^3=3(x^2+2x)^2$。', r: '必须再乘内层导数：$3(x^2+2x)^2(2x+2)$。', why: '这是本章最高频的扣分点，链式法则每层都要乘一个导数因子。' },
  { sec: '3.4', t: '复合函数只拆一层', w: '$\\dfrac{d}{dx}\\sin^3(4x)=3\\sin^2(4x)\\cos(4x)$。', r: '三层要乘三份因子：$3\\sin^2(4x)\\cdot\\cos(4x)\\cdot4=12\\sin^2(4x)\\cos(4x)$。', why: '$\\sin[\\cos(x^2)]$ 要乘三份：$\\cos[\\cos(x^2)]\\cdot(-\\sin(x^2))\\cdot2x$。' },
  { sec: '3.3', t: '三角导数公式当成了万能公式', w: '认为 $\\dfrac{d}{dx}\\sin ax=a\\cos ax$ 可以直接用。', r: '必须写成 $\\sin(ax)$ 再套链式法则：$\\dfrac{d}{dx}\\sin(ax)=\\cos(ax)\\cdot a$。', why: '$\\sin^3(4x)$ 与 $\\sin(4x)$ 是两回事。' },
  { sec: '3.3', t: '忘了用弧度制', w: '直接套 $d/dx\\sin x=\\cos x$ 处理角度制数据。', r: '所有三角函数的导数公式只在弧度制下成立，角度制要多乘 $\\tfrac{\\pi}{180}$。', why: '课堂特别强调弧度制是默认前提。' },
  { sec: '3.3', t: '特殊极限用错场合', w: '认为 $\\dfrac{\\sin3x}{x}=3$ 对任何 x 成立。', r: '$\\lim_{x\\to0}\\sin3x/x=3$ 只在 $x\\to0$ 时成立；远离 0 时要用 $\\sin u/u\\to1$ 的等价变形。', why: '证明依赖 $3x\\to0$。' },
  { sec: '3.5', t: '隐函数求导把 y 当常数', w: '对 $y^3+7y=x^3$ 求导写成 $3y^2+7=3x^2$。', r: 'y 是 x 的函数，必须写 $3y^2y\'+7y\'=3x^2$，再解出 $y\'$。', why: '漏掉 y′ 就等于没求导。' },
  { sec: '3.5', t: '水平切线求成切线斜率最大', w: '把"水平"理解成"最陡"。', r: '水平切线 ⇔ 斜率为 0 ⇔ $f\'(a)=0$；最陡对应 $|f\'|$ 最大。', why: '两问常在同一道题里对比出现。' },
  { sec: '3.1', t: '根式不化成幂', w: '对 $y=\\dfrac{x+1}{\\sqrt x}$ 无从下手。', r: '写成 $y=x^{1/2}+x^{-1/2}$ 再用幂法则：$y\'=\\dfrac{x-1}{2x^{3/2}}$。', why: '幂法则配负指数能处理所有根式与倒数。' }
];

/* ---------- 公式速查表（第 3 章） ---------- */
const SHEET3 = [
  { ch: '3', title: '3.1 求导基本法则', items: [
    { lab: '幂法则', tex: '\\frac{d}{dx}x^n=nx^{n-1}\\quad (n\\in\\mathbb{R},\\ x>0)' },
    { lab: '常数与直线', tex: '\\frac{d}{dx}c=0,\\quad \\frac{d}{dx}x=1' },
    { lab: '线性法则', tex: 'D_x[kf]=kD_xf,\\quad D_x[f\\pm g]=D_xf\\pm D_xg' },
    { lab: '指数函数', tex: '\\frac{d}{dx}e^x=e^x,\\qquad \\frac{d}{dx}a^x=a^x\\ln a' },
    { lab: 'e 的定义', tex: 'e:\\ \\lim_{h\\to0}\\frac{e^h-1}{h}=1' }
  ]},
  { ch: '3', title: '3.2 积与商', items: [
    { lab: '积法则', tex: '\\frac{d}{dx}(uv)=u\\frac{dv}{dx}+v\\frac{du}{dx}' },
    { lab: '商法则', tex: "\\frac{d}{dx}\\frac{u}{v}=\\frac{v\\frac{du}{dx}-u\\frac{dv}{dx}}{v^2}" },
    { lab: '检验法', tex: '\\text{乘积/商法则的结果应与"先展开再求导"一致}' }
  ]},
  { ch: '3', title: '3.3 三角函数', items: [
    { lab: '特殊极限', tex: '\\lim_{t\\to0}\\frac{\\sin t}{t}=1,\\qquad \\lim_{t\\to0}\\frac{1-\\cos t}{t}=0' },
    { lab: '面积比较', tex: '\\sin\\theta<\\theta<\\tan\\theta\\quad (0<\\theta<\\tfrac\\pi2)' },
    { lab: 'sin / cos', tex: '\\frac{d}{dx}\\sin x=\\cos x,\\quad \\frac{d}{dx}\\cos x=-\\sin x' },
    { lab: 'tan / cot', tex: '\\frac{d}{dx}\\tan x=\\sec^2x,\\quad \\frac{d}{dx}\\cot x=-\\csc^2x' },
    { lab: 'sec / csc', tex: '\\frac{d}{dx}\\sec x=\\sec x\\tan x,\\quad \\frac{d}{dx}\\csc x=-\\csc x\\cot x' },
    { lab: '前提', tex: '\\text{所有三角导数公式只在弧度制下成立}' }
  ]},
  { ch: '3', title: '3.4 链式法则', items: [
    { lab: '链式法则', tex: '(f\\circ g)\'(x)=f\'(g(x))\\cdot g\'(x)' },
    { lab: '微分写法', tex: '\\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx}' },
    { lab: '多层复合', tex: '\\frac{d}{dx}\\sin^3(4x)=3\\sin^2(4x)\\cos(4x)\\cdot4' }
  ]},
  { ch: '3', title: '3.5 隐函数', items: [
    { lab: '规则', tex: '\\text{对 }x\\text{ 求导时，}y\\text{ 是 }x\\text{ 的函数，必须带 }y\'' },
    { lab: '例', tex: 'y^3+7y=x^3 \\Rightarrow y\'=\\frac{3x^2}{3y^2+7}' },
    { lab: '水平切线', tex: 'y\'=0 \\text{ 与原方程联立求解}' }
  ]}
];

/* ---------- 课堂例题（第 3 章） ---------- */
const PROBLEMS3 = [
  { sec: '3.1', num: '例1', type: '幂法则',
    q: '求 $y=5x^2+7x-6$ 的导数。', ans: '$y\'=10x+7$',
    steps: ['逐项用幂法则：$5\\cdot2x^{1}+7\\cdot1-0$', '得 $y\'=10x+7$'] },
  { sec: '3.1', num: '例2', type: '幂法则',
    q: '求 $y=4x^6-3x^5-10x^2+5x+16$ 的导数。', ans: '$y\'=24x^5-15x^4-20x+5$',
    steps: ['逐项求导：$4\\cdot6x^5-3\\cdot5x^4-10\\cdot2x+5$', '得 $24x^5-15x^4-20x+5$'] },
  { sec: '3.1', num: '例3', type: '根式化幂',
    q: '求 $y=\\dfrac{x^2+1}{x}$ 的导数。', ans: '$y\'=1-\\dfrac{1}{x^2}$',
    steps: ['先改写成幂：$y=x+x^{-1}$', '求导：$y\'=1-x^{-2}$'] },
  { sec: '3.1', num: '例4', type: '根式化幂',
    q: '求 $y=\\dfrac{x+1}{\\sqrt{x}}$ 的导数。', ans: '$y\'=\\dfrac{x-1}{2x^{3/2}}$',
    steps: ['$\\dfrac{x+1}{\\sqrt x}=x^{1/2}+x^{-1/2}$', '求导：$\\tfrac12x^{-1/2}-\\tfrac12x^{-3/2}=\\dfrac{x-1}{2x^{3/2}}$'] },
  { sec: '3.1', num: '例5', type: '水平切线',
    q: '求曲线 $y=x^4-6x^2+4$ 上切线水平的所有点。', ans: '$(0,4)$ 与 $(\\pm\\sqrt3,-5)$',
    steps: ['$f\'=4x^3-12x=4x(x^2-3)=0$', '得 $x=0,\\ x=\\pm\\sqrt3$',
            '代回：$f(0)=4$，$f(\\pm\\sqrt3)=9-18+4=-5$'] },
  { sec: '3.1', num: '例6', type: '速度与加速度',
    q: '粒子的运动方程为 $s=2t^3-5t^2+3t+4$（厘米、秒）。求加速度函数，并求 2 秒后的加速度。', ans: '$a(t)=12t-10$；$a(2)=14$ cm/s²',
    steps: ['$s\'(t)=6t^2-10t+3$（速度）', '$s\'\'(t)=12t-10$（加速度）', '$a(2)=24-10=14$ cm/s²'] },
  { sec: '3.1', num: '例7', type: '指数函数',
    q: '曲线 $y=e^x$ 上何处切线平行于直线 $y=2x$？', ans: '切点 $(\\ln 2,\\ 2)$',
    steps: ['切线斜率 $=e^a$（$a$ 为切点横坐标）', '令 $e^a=2$，得 $a=\\ln2$', '此时 $y=e^{\\ln2}=2$'] },

  { sec: '3.2', num: '例1', type: '积法则',
    q: '求 $y=(3x^2-5)(2x^4-x)$ 的导数，并用展开法校验。', ans: '$y\'=36x^5-40x^3-9x^2+5$',
    steps: ['积法则：$y\'=6x(2x^4-x)+(3x^2-5)(8x^3-1)$', '展开整理：$12x^5-6x^2+24x^6-24x^5-3x^2+5$',
            '合并得 $36x^5-40x^3-9x^2+5$',
            '校验：先展开 $(3x^2-5)(2x^4-x)=6x^6-10x^4-3x^3+5x$，求导同样得到 $36x^5-40x^3-9x^2+5$'] },
  { sec: '3.2', num: '例2', type: '积法则',
    q: '已知 $f(x)=xe^x$。求 $f\'(x)$ 与 $f^{(n)}(x)$。', ans: '$f\'(x)=(1+x)e^x$；$f^{(n)}(x)=(n+x)e^x$',
    steps: ['积法则：$f\'(x)=1\\cdot e^x+x\\cdot e^x=(1+x)e^x$',
            '归纳：再求导一次得 $(2+x)e^x$，故 $f^{(n)}(x)=(n+x)e^x$'] },
  { sec: '3.2', num: '例3', type: '已知值求导数值',
    q: '已知 $f(x)=\\sqrt{x}\\,g(x)$，$g(4)=2$，$g\'(4)=3$，求 $f\'(4)$。', ans: '$f\'(4)=\\dfrac{13}{2}$',
    steps: ['积法则：$f\'(x)=\\dfrac{g(x)}{2\\sqrt{x}}+\\sqrt{x}\\,g\'(x)$',
            '代入：$f\'(4)=\\dfrac{2}{2\\cdot2}+2\\cdot3=\\dfrac12+6=\\dfrac{13}{2}$'] },
  { sec: '3.2', num: '例4', type: '商法则',
    q: '求 $\\dfrac{d}{dx}\\left(\\dfrac{3x-5}{x^2+7}\\right)$。', ans: '$\\dfrac{3(x^2+7)-(3x-5)(2x)}{(x^2+7)^2}$',
    steps: ['商法则：$u=3x-5$，$v=x^2+7$，$u\'=3$，$v\'=2x$',
            '得 $\\dfrac{v u\'-u v\'}{v^2}=\\dfrac{3(x^2+7)-(3x-5)(2x)}{(x^2+7)^2}$'] },
  { sec: '3.2', num: '例5', type: '切线',
    q: '求曲线 $y=\\dfrac{e^x}{1+x^2}$ 在点 $\\left(1,\\dfrac e2\\right)$ 处的切线方程。', ans: '切线水平：$y=\\dfrac e2$',
    steps: ['商法则：$y\'=\\dfrac{e^x(1+x^2)-e^x(2x)}{(1+x^2)^2}=\\dfrac{e^x(x-1)^2}{(1+x^2)^2}$',
            '在 $x=1$ 处 $y\'=0$，故切线水平且过 $\\left(1,\\dfrac e2\\right)$'] },

  { sec: '3.3', num: '例1', type: '特殊极限',
    q: '求 $\\lim_{x\\to0}\\dfrac{\\sin3x}{x}$。', ans: '$3$',
    steps: ['令 $u=3x$，则 $u\\to0$：$\\lim\\dfrac{\\sin u}{u/3}=3\\lim\\dfrac{\\sin u}{u}=3\\cdot1=3$'] },
  { sec: '3.3', num: '例2', type: '特殊极限',
    q: '求 $\\lim_{t\\to0}\\dfrac{1-\\cos t}{\\sin t}$。', ans: '$0$',
    steps: ['分子用 $\\lim\\dfrac{1-\\cos t}{t}=0$，分母 $\\lim\\dfrac{\\sin t}{t}=1$',
            '故极限 $=\\dfrac{0}{1}=0$'] },
  { sec: '3.3', num: '例3', type: '特殊极限',
    q: '求 $\\lim_{x\\to0}\\dfrac{\\sin4x}{\\tan x}$。', ans: '$4$',
    steps: ['$\\dfrac{\\sin4x}{\\tan x}=\\dfrac{\\sin4x}{\\sin x}\\cdot\\cos x$',
            '$\\lim\\dfrac{\\sin4x}{\\sin x}=4\\lim\\dfrac{\\sin4x}{4x}\\cdot\\dfrac{4x}{\\sin x}\\cdot\\frac14=4$',
            '再乘 $\\lim\\cos x=1$，得 $4$'] },
  { sec: '3.3', num: '例4', type: '三角求导',
    q: '求 $\\dfrac{d}{dx}(3\\sin x-2\\cos x)$。', ans: '$3\\cos x+2\\sin x$',
    steps: ['$(3\\sin x)\'=3\\cos x$，$(-2\\cos x)\'=-2(-\\sin x)=2\\sin x$', '合并得 $3\\cos x+2\\sin x$'] },
  { sec: '3.3', num: '例5', type: '切线',
    q: '求曲线 $y=3\\sin x$ 在点 $(\\pi,0)$ 处的切线方程。', ans: '$y=-3x+3\\pi$',
    steps: ['斜率 $=3\\cos\\pi=-3$', '切线：$y-0=-3(x-\\pi)$，即 $y=-3x+3\\pi$'] },
  { sec: '3.3', num: '例6', type: '积法则',
    q: '求 $\\dfrac{d}{dx}(x^2\\sin x)$。', ans: '$2x\\sin x+x^2\\cos x$',
    steps: ['积法则：$2x\\sin x+x^2\\cos x$'] },
  { sec: '3.3', num: '例7', type: '商法则',
    q: '求 $\\dfrac{d}{dx}\\left(\\dfrac{1+\\sin x}{\\cos x}\\right)$。', ans: '$\\dfrac{1+\\sin x}{\\cos^2x}$',
    steps: ['商法则：$\\dfrac{\\cos x\\cdot\\cos x-(1+\\sin x)(-\\sin x)}{\\cos^2x}$',
            '分子 $=\\cos^2x+(1+\\sin x)\\sin x=\\cos^2x+\\sin x+\\sin^2x=1+\\sin x$',
            '故结果 $\\dfrac{1+\\sin x}{\\cos^2x}$'] },
  { sec: '3.3', num: '例8', type: '切线',
    q: '求曲线 $y=\\tan x$ 在点 $\\left(\\dfrac\\pi4,1\\right)$ 处的切线方程。', ans: '$y=2x+1-\\dfrac\\pi2$',
    steps: ['斜率 $=\\sec^2\\dfrac\\pi4=2$', '切线：$y-1=2\\left(x-\\dfrac\\pi4\\right)$，即 $y=2x+1-\\dfrac\\pi2$'] },
  { sec: '3.3', num: '例9', type: '水平切线',
    q: '求曲线 $y=\\sin^2x$ 上所有切线水平的点。', ans: '$x=\\dfrac{k\\pi}{2}$（$k\\in\\mathbb{Z}$）',
    steps: ['$y\'=2\\sin x\\cos x=\\sin2x$', '令 $\\sin2x=0 \\Rightarrow 2x=k\\pi \\Rightarrow x=\\dfrac{k\\pi}{2}$'] },
  { sec: '3.3', num: '例10', type: '应用（弹簧）',
    q: '弹簧末端被拉长 4 cm 后于 $t=0$ 释放，位置 $s(t)=4\\cos t$。求速度与加速度，并分析运动。', ans: '$v(t)=-4\\sin t$；$a(t)=-4\\cos t$',
    steps: ['$v(t)=s\'(t)=-4\\sin t$', '$a(t)=v\'(t)=-4\\cos t$',
            '运动分析：$t=0$ 时位移最大 $s=4$、速度 $0$、加速度 $-4$（指向平衡位置）；周期 $2\\pi$，在 $t=\\pi$ 处到达平衡位置'] },

  { sec: '3.4', num: '例1', type: '链式法则',
    q: '求 $\\dfrac{d}{dx}(x^2+2x)^3$。', ans: '$6(x^2+2x)^2(x+1)$',
    steps: ['外层是三次幂：$3(x^2+2x)^2\\cdot\\dfrac{d}{dx}(x^2+2x)$',
            '内层导数 $=2x+2=2(x+1)$', '结果 $3(x^2+2x)^2\\cdot2(x+1)=6(x^2+2x)^2(x+1)$'] },
  { sec: '3.4', num: '例2', type: '链式法则',
    q: '若 $y=(2x^2-4x+1)^{60}$，求 $D_xy$。', ans: '$D_xy=60(2x^2-4x+1)^{59}(4x-4)$',
    steps: ['外层幂：$60(2x^2-4x+1)^{59}$', '内层导数 $4x-4$', '两者相乘'] },
  { sec: '3.4', num: '例3', type: '商+链',
    q: '若 $y=\\dfrac{3\\sqrt{2x^5}-7}{(x^4+3)^{13}}$，求 $\\dfrac{dy}{dx}$。', ans: '$\\dfrac{dy}{dx}=\\dfrac{15x^4(2x^5)^{1/2}(x^4+3)-52x^3(3\\sqrt{2x^5}-7)}{(x^4+3)^{14}}$',
    steps: ['商法则：分子 $u=3(2x^5)^{1/2}-7$，分母 $v=(x^4+3)^{13}$',
            '$u\'=3\\cdot\\tfrac12(2x^5)^{-1/2}\\cdot10x^4=15x^4(2x^5)^{-1/2}$',
            '$v\'=13(x^4+3)^{12}\\cdot4x^3=52x^3(x^4+3)^{12}$',
            '代入商法则并把 $(x^4+3)^{13}$ 与 $(x^4+3)^{12}$ 合并'] },
  { sec: '3.4', num: '例4', type: '链式法则',
    q: '若 $y=\\sin^2x$，求 $\\dfrac{dy}{dx}$。', ans: '$\\dfrac{dy}{dx}=2\\sin x\\cos x$',
    steps: ['写成 $(\\sin x)^2$：$y\'=2\\sin x\\cdot\\cos x$'] },
  { sec: '3.4', num: '例5', type: '外层函数',
    q: '若 $F(y)=y\\sin(y^2)$，求 $F\'(y)$。', ans: '$F\'(y)=\\sin(y^2)+2y^2\\cos(y^2)$',
    steps: ['积法则：$1\\cdot\\sin(y^2)+y\\cdot\\cos(y^2)\\cdot2y$', '得 $\\sin(y^2)+2y^2\\cos(y^2)$'] },
  { sec: '3.4', num: '例6', type: '化简后求导',
    q: '求 $D_x\\dfrac{x^2(1+x)^3}{1+x}$。', ans: '$2x(1+x)(1+2x)$',
    steps: ['先约分：$\\dfrac{x^2(1+x)^3}{1+x}=x^2(1+x)^2$',
            '积法则：$2x(1+x)^2+2x^2(1+x)=2x(1+x)(1+2x)$'] },
  { sec: '3.4', num: '例7', type: '指数复合',
    q: '求 $\\dfrac{d}{dx}e^{\\sin x}$。', ans: '$e^{\\sin x}\\cos x$',
    steps: ['外层 $e^{\\cdot}$ 的导数是它本身，再乘内层 $\\cos x$'] },
  { sec: '3.4', num: '例8', type: '一般指数',
    q: '求 $\\dfrac{d}{dx}a^x$，其中 $a>0,\\ a\\neq1$。', ans: '$a^x\\ln a$',
    steps: ['把 $a^x$ 写成 $e^{x\\ln a}$', '求导：$e^{x\\ln a}\\cdot\\ln a=a^x\\ln a$'] },
  { sec: '3.4', num: '例9', type: '链式法则',
    q: '求 $\\dfrac{d}{dx}2\\sec^2x$。', ans: '$4\\sec^2x\\tan x$',
    steps: ['写成 $2(\\sec x)^2$：$2\\cdot2\\sec x\\tan x\\cdot\\dfrac{d}{dx}\\sec x$',
            '其中 $\\dfrac{d}{dx}\\sec x=\\sec x\\tan x$，故结果 $4\\sec^2x\\tan x$'] },
  { sec: '3.4', num: '例10', type: '复合函数求导',
    q: '若 $F$ 可导，求 (a) $D_x[F(x^3)]$ (b) $D_x[F(x)]^3$。', ans: '(a) $3x^2F\'(x^3)$　(b) $3[F(x)]^2F\'(x)$',
    steps: ['(a) 令 $u=x^3$：$D_xF(u)=F\'(u)\\cdot u\'=F\'(x^3)\\cdot3x^2$',
            '(b) 令 $u=F(x)$：$D_x[u^3]=3u^2u\'=3[F(x)]^2F\'(x)$'] },
  { sec: '3.4', num: '例11', type: '多层链式',
    q: '求 $\\dfrac{d}{dx}\\sin^3(4x)$。', ans: '$12\\sin^2(4x)\\cos(4x)$',
    steps: ['外层三次方：$3\\sin^2(4x)\\cdot\\dfrac{d}{dx}\\sin(4x)$',
            '$\\dfrac{d}{dx}\\sin(4x)=\\cos(4x)\\cdot4$',
            '相乘：$3\\sin^2(4x)\\cos(4x)\\cdot4=12\\sin^2(4x)\\cos(4x)$'] },
  { sec: '3.4', num: '例12', type: '多层链式',
    q: '求 $\\dfrac{d}{dx}\\sin[\\cos(x^2)]$。', ans: '$-2x\\sin(x^2)\\cos[\\cos(x^2)]$',
    steps: ['外层 $\\sin$：$\\cos[\\cos(x^2)]\\cdot\\dfrac{d}{dx}\\cos(x^2)$',
            '$\\dfrac{d}{dx}\\cos(x^2)=-\\sin(x^2)\\cdot2x$',
            '相乘：$-2x\\sin(x^2)\\cos[\\cos(x^2)]$'] },

  { sec: '3.5', num: '例1', type: '隐函数求导',
    q: '求 $\\dfrac{dy}{dx}$，其中 $y^3+7y=x^3$。', ans: '$y\'=\\dfrac{3x^2}{3y^2+7}$',
    steps: ['两边对 $x$ 求导：$3y^2y\'+7y\'=3x^2$（$y$ 是 $x$ 的函数）',
            '提公因式：$y\'(3y^2+7)=3x^2$', '解出 $y\'=\\dfrac{3x^2}{3y^2+7}$'] },
  { sec: '3.5', num: '例2', type: '隐函数求导+切线',
    q: '求曲线 $4x^2y-3y=x^3$ 在点 $(1,1)$ 处的切线方程。', ans: '$y=-5x+6$',
    steps: ['两边对 $x$ 求导：$8xy+4x^2y\'-3y\'=3x^2$',
            '整理：$y\'(4x^2-3)=3x^2-8xy \\Rightarrow y\'=\\dfrac{3x^2-8xy}{4x^2-3}$',
            '在 $(1,1)$：$y\'=\\dfrac{3-8}{4-3}=-5$', '切线：$y-1=-5(x-1)$，即 $y=-5x+6$'] },
  { sec: '3.5', num: '例3', type: '隐函数求导+水平切线',
    q: '曲线 $x^3+y^3=6xy$ 在第一象限何处切线水平？', ans: '切点 $\\left(2\\sqrt[3]{2},\\ 2\\sqrt[3]{4}\\right)$',
    steps: ['两边对 $x$ 求导：$3x^2+3y^2y\'=6y+6xy\'$',
            '整理：$y\'(3y^2-6x)=6y-3x^2$',
            '水平切线 $\\Rightarrow y\'=0 \\Rightarrow 6y=3x^2 \\Rightarrow y=\\dfrac{x^2}{2}$',
            '代回原方程：$x^3+\\dfrac{x^6}{8}=3x^3 \\Rightarrow x^3=16 \\Rightarrow x=2\\sqrt[3]{2}$，$y=2\\sqrt[3]{4}$'] }
];

/* ============================================================
   考前快速自测方案
   ============================================================ */
const PLAN = {
  headline: '两章一起过：先补 Chapter 3 的新内容（3.1–3.7），再用三档节奏把 Chapter 2 的老考点串起来。',
  tiers: [
    { id: 'A', title: 'A 档 · 考前 48 小时（救急档）', when: '只剩 2 天', goal: '把两章的必会清单过一遍 + 找出所有还没做对的题型',
      minutes: '总计 4–5 小时',
      steps: [
        '第 1 轮（约 90 分钟）：打开「概念速查」，只读 Chapter 3 的 7 个小节（3.1–3.7）的定义与定理框，读不懂的直接标记',
        '第 2 轮（约 60 分钟）：打开「教材作业」筛选 3.3 / 3.4 / 3.5 / 3.6，每小节挑 5 道做，只写步骤不求全对',
        '第 3 轮（约 60 分钟）：把做错的题勾上「已做」标记为未完成，回到「刷题」看同类型课堂例题',
        '第 4 轮（约 45 分钟）：打开「随机自测」，范围选 Chapter 3、题量 15、不限时，做完看错题解析',
        '第 5 轮（约 30 分钟）：打印「公式速查表」，把 Chapter 3 的法则手抄一遍（抄写比默读有效）',
        '收尾：只复习标记为「不会」的小节，不要再开新题'
      ] },
    { id: 'B', title: 'B 档 · 考前 7 天（标准档）', when: '还有一周', goal: '两章全覆盖 + 错题清零 + 限时模考一次',
      minutes: '每天 60–90 分钟',
      steps: [
        'Day 1：Chapter 2 的 2.3 与 2.5（题型最多）——概念速查 + 对应小节作业题全部过一遍',
        'Day 2：Chapter 2 的 2.2 / 2.4 / 2.6 / 2.7 / 2.8 —— 重点是 ε–δ 证明与渐近线',
        'Day 3：Chapter 3 的 3.1 / 3.2 —— 幂法则、积法则、商法则，计算量大，多算',
        'Day 4：Chapter 3 的 3.3 —— 四个三角导数公式默写 3 遍 + 特殊极限 5 道',
        'Day 5：Chapter 3 的 3.4 / 3.5 —— 链式法则分层拆解练习、隐函数求导模板',
        'Day 6：限时模考 —— 「随机自测」范围选全章、题量 30、计时 30 分钟，模拟真实考场',
        'Day 7：只回炉错题 + 「公式速查表」默写一遍 + 「易错点」清单逐条自查',
        '每天固定流程：概念速查 10 分钟 → 教材作业 30 分钟 → 错题回炉 15 分钟 → 随机自测 15 分钟'
      ] },
    { id: 'C', title: 'C 档 · 进考场前 30 分钟', when: '临场', goal: '唤醒公式与陷阱，不碰新题',
      minutes: '30 分钟',
      steps: [
        '8 分钟：「公式速查表」——只扫 Chapter 3 的 5 个法则框和 2 个特殊极限',
        '10 分钟：「易错点」——读第 3 章那 10 条（链式漏乘内层、积法则写成乘积、隐函数漏 y′、弧度制…）',
        '7 分钟：把昨晚做错的 3 道题重做一遍，只写关键一步',
        '5 分钟：确认常识：三角公式用弧度制；$\\lim\\sin t/t=1$ 只在 $t\\to0$；切线水平 $\\iff f\'=0$',
        '剩余时间：深呼吸，不要翻新题'
      ] }
  ],
  loop: [
    { title: '① 概念速查（10 分钟）', detail: '只读定义、定理和"必会结论"三块，公式框默念一遍。这一步的目的是把话说清楚，不是背题。' },
    { title: '② 教材作业（30–45 分钟）', detail: '按老师给的题号推进，做完立刻勾「已做」。错题不要看答案就过——先自己写一遍完整步骤，再展开解析对比。' },
    { title: '③ 错题回炉（15 分钟）', detail: '凡是勾了「已做」但当时做错的，重新做一次；做对的题不再重复。这是投入产出比最高的一步。' },
    { title: '④ 随机自测（15–30 分钟）', detail: '范围先选最弱的小节，题量 10–15，不限时；熟悉后再用计时模式自测 20–30 题。做完重点看错题解析。' },
    { title: '⑤ 公式速查表（5 分钟）', detail: '每天最后一步。手写一遍 Chapter 3 的法则和 Chapter 2 的极限律，比重看十遍有用。' }
  ],
  triage: [
    { rule: '完全没思路', detail: '回到「概念速查」该小节，只看定义和定理框，再重做同类型第一道课堂例题。' },
    { rule: '有思路但算错', detail: '属于计算失误，不用回概念。放慢一步、写出中间式再算；把错因写进答案步骤旁边。' },
    { rule: '左右极限/单侧问题', detail: '重点复习 2.2 的判定定理 + 2.3 的未定式清单，这是全章最集中的送分/失分点。' },
    { rule: '链式法则总漏一步', detail: '固定用"由外到内、逐层乘"的口诀：先写外层导数×内层导数，再逐层往里乘。' },
    { rule: '隐函数不会', detail: '套三行模板：两边对 x 求导 → 收集 y′ → 解出 y′，例题见 3.5 例1–例3。' }
  ],
  last10: [
    '左右极限不等 → 双侧极限不存在',
    '0/0、∞/∞ 是未定式，先化简',
    '垂直渐近线：只要有一侧趋于 ±∞',
    '切线水平 ⇔ f′(a) = 0',
    '求导后答案里不能残留 h',
    '三角公式只在弧度制下成立',
    '积法则两项相加，别写成相乘',
    '链式法则每层都要乘内层导数',
    '隐函数求导，y 的项必须带 y′',
    'sin t/t = 1 只在 t→0 成立'
  ]
};
