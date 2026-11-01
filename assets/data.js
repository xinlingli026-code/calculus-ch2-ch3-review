/* ============================================================
   Chapter 2 复习备考站 · 数据层
   来源：课堂笔记 NotesOnOct06–Oct22 + Stewart 教材 + Solutions Manual
   公式统一用 $...$ LaTeX 书写，由 KaTeX 渲染
   ============================================================ */

const SECTIONS = [
  { id: '2.1', name: 'Tangent and Velocity Problems', cn: '切线与速度问题', hw: [3], weight: 2, tags: ['概念起点', '导数定义雏形'] },
  { id: '2.2', name: 'The Limit of a Function', cn: '函数的极限', hw: [5,7,9,11,19,23,27,31,33,35,41,43,45], weight: 5, tags: ['左/右极限', '无穷极限', '垂直渐近线'] },
  { id: '2.3', name: 'Calculate Limits Using the Limit Laws', cn: '用极限律计算极限', hw: [1,3,5,7,9,11,15,17,19,21,23,25,27,29,31,37,39,41,43,47,51,53,59,61], weight: 5, tags: ['重点', '题型最多'] },
  { id: '2.4', name: 'The Precise Definition of a Limit', cn: '极限的精确定义', hw: [1,3,13,19,33,37,39,43], weight: 4, tags: ['证明题', 'ε–δ'] },
  { id: '2.5', name: 'Continuity of Functions', cn: '函数的连续性', hw: [3,11,13,15,17,19,21,23,27,35,37,39,41,45,47,51,53,55,69], weight: 5, tags: ['重点', '题型最多'] },
  { id: '2.6', name: 'Limits at Infinity, Horizontal Asymptotes', cn: '无穷远处的极限与水平渐近线', hw: [3,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,47,49,51], weight: 4, tags: ['有理函数', '有理化'] },
  { id: '2.7', name: 'Derivatives and Rates of Change', cn: '导数与变化率', hw: [5,7,14,21,31,33,35,37,39,41,55,59,60], weight: 4, tags: ['应用题', '瞬时速度'] },
  { id: '2.8', name: 'The Derivative as a Function', cn: '作为函数的导数', hw: [3,21,25,27,29,41,43,49,51,63], weight: 3, tags: ['高阶导数', '可导性'] }
];

/* ---------- 考纲地图 ---------- */
const SCOPE_CARDS = {
  '2.1': {
    desc: '从割线斜率推到切线斜率，建立"极限 = 瞬时变化率"的桥梁。整章的起点，也是导数定义的来龙去脉。',
    must: ['割线斜率 → 切线斜率的极限过程', '平均速度 → 瞬时速度', '切线方程 $y=f(a)+f\'(a)(x-a)$']
  },
  '2.2': {
    desc: '极限的直观定义、左极限与右极限、无穷极限、垂直渐近线。左右极限是否相等决定极限存不存在。',
    must: ['左右极限判定定理', 'Heaviside 函数与取整函数 $[[x]]$', '垂直渐近线的判定']
  },
  '2.3': {
    desc: '九基本极限律 + 代换性质 + 夹逼定理，处理绝大多数"未定式"（0/0、∞/∞ 等）的三板斧：因式分解、有理化、通分。',
    must: ['九大极限律与代换性质', '未定义点可以先约去', '夹逼定理（Squeeze）', '定理：$f=g$（除 $a$ 点外）$\Rightarrow$ 极限相同']
  },
  '2.4': {
    desc: 'ε–δ 语言的严格定义与证明套路。要能写出"给定 ε，令 δ = …"并验证不等式链条。',
    must: ['$0<|x-a|<\\delta \\Rightarrow |f(x)-L|<\\varepsilon$', '证明模板：给 ε → 找 δ → 推不等式', '单侧极限的 ε–δ 版本', '无穷限的 M–δ 版本']
  },
  '2.5': {
    desc: '连续的定义（三条件）、连续性的保运算定理、复合函数连续性定理、间断点分类与介值定理。',
    must: ['连续 $\\Leftrightarrow$ 极限存在且等于函数值', '间断点三类：可去 / 跳跃 / 无穷', '介值定理 IVT', '最大连续区间']
  },
  '2.6': {
    desc: '$x\\to\\pm\\infty$ 的极限与水平渐近线。有理函数看次数，含根号则有理化后再比较次数。',
    must: ['水平渐近线 $y=L$ 的判定', '有理函数：分母次高者胜', '根式极限：共轭有理化', '垂直 + 水平渐近线联立求']
  },
  '2.7': {
    desc: '导数的定义式、切线斜率、瞬时速度与瞬时变化率，以及实际运动学应用题。',
    must: ['$f\'(a)$ 的两种等价写法', '瞬时速度与瞬时变化率', '自由落体模型 $h=4.9t^2$']
  },
  '2.8': {
    desc: '导数本身是函数；各种记号法；可导 ⇒ 连续但反之不然；高阶导数与记号表。',
    must: ['$f\'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$', 'Leibniz 记号 $dy/dx$', '可导 $\\Rightarrow$ 连续', '高阶导数记号表']
  }
};

/* ---------- 概念速查 ---------- */
const CONCEPTS = [
  {
    sec: '2.1', title: '切线与速度问题',
    items: [
      { dt: '割线斜率', dd: '过曲线上两点 $P(a,f(a))$、$Q(x,f(x))$ 的割线斜率为 $\\dfrac{f(x)-f(a)}{x-a}$，即区间上的平均变化率。' },
      { dt: '切线斜率（极限定义）', dd: '把 $Q$ 沿曲线滑向 $P$，割线变成切线：', formula: 'm_{\\tan}=\\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}=\\lim_{h\\to 0}\\frac{f(a+h)-f(a)}{h}' },
      { dt: '平均速度 vs 瞬时速度', dd: '平均速度 = 位移变化 / 时间变化；瞬时速度 = 上述极限（单位 m/s）。' },
      { dt: '课堂例题：$y=x^2$ 在 $(1,1)$', dd: '割线斜率序列 1.5、1.9、1.99… → 极限 2，故切线为 $y-1=2(x-1)$。', formula: 'm=\\lim_{x\\to1}\\frac{x^2-1}{x-1}=\\lim_{x\\to1}(x+1)=2\\quad\\Rightarrow\\quad y=2x-1' },
      { dt: '课堂例题：自由落体', dd: '$h=4.9t^2$，由 $v(t)=\\lim_{s\\to t}\\frac{4.9s^2-4.9t^2}{s-t}=9.8t$ 得 $t=5$ 时 $v=49$ m/s。' },
      { dt: '牛顿视角', dd: '切线斜率 = 位置随时间的瞬时变化率 = 速度；速度的变化率 = 加速度。' }
    ]
  },
  {
    sec: '2.2', title: '函数的极限',
    items: [
      { dt: '极限的直观定义', dd: '使 $f(x)$ 可以任意接近 $L$，只需把 $x$ 限制得足够接近 $a$（两侧均可），但 $x\\neq a$。', formula: '\\lim_{x\\to a}f(x)=L' },
      { dt: '课堂例题', dd: '$\\lim_{x\\to3}(4x+5)=17$；$\\lim_{x\\to0}(\\sqrt{x^2+9}-3)=0$；$\\lim_{x\\to0}\\sin\\frac1x$ 不存在（振荡）。' },
      { dt: '左极限 / 右极限', dd: '$\\lim_{x\\to a^-}f(x)=L$（$x$ 从左侧趋近）；$\\lim_{x\\to a^+}f(x)=L$（$x$ 从右侧趋近）。' },
      { dt: '左右极限判定定理', dd: '$\\lim_{x\\to a}f(x)=L$ 当且仅当左极限与右极限都等于 $L$。', callout: '左右只要有一个不等（或一个不存在），双侧极限就不存在。' },
      { dt: 'Heaviside 函数', dd: '$H(t)=0\\ (t<0)$，$H(t)=1\\ (t\\ge0)$。左极限 0、右极限 1 $\\Rightarrow$ $\\lim_{t\\to0}H(t)$ 不存在（跳跃间断）。' },
      { dt: '取整函数 $[[x]]$', dd: '$\\lim_{x\\to2}[[x]]=2$（$x=2$ 附近取值恒为 2）；但在每个整数处 $[[x]]$ 不连续。' },
      { dt: '无穷极限', dd: '$\\lim_{x\\to a}f(x)=\\infty$ 表示 $f(x)$ 可以任意大；$=-\\infty$ 表示可以任意小（负）。' },
      { dt: '垂直渐近线', dd: '若 $\\lim_{x\\to a}f(x)=\\pm\\infty$，或某一侧为 $\\pm\\infty$，则 $x=a$ 是垂直渐近线。', formula: '\\text{例：}\\ \\ln x \\to x=0;\\quad \\tan x \\to x=\\tfrac{\\pi}{2}+k\\pi' }
    ]
  },
  {
    sec: '2.3', title: '用极限律计算极限',
    items: [
      { dt: '九大极限律', dd: '常数倍、和、差、积、商（分母极限 $\\ne0$）、常数、$x$、幂、根号都可以穿过极限号。', formula: 'c\\cdot f,\\quad f+g,\\quad f-g,\\quad f\\cdot g,\\quad \\frac{f}{g}\\ (\\lim g\\neq0),\\quad c,\\quad x,\\quad f^n,\\quad \\sqrt[n]{f}' },
      { dt: '代换性质', dd: '$f$ 为多项式或有理函数且 $f(a)$ 有定义时，$\\lim_{x\\to a}f(x)=f(a)$。' },
      { dt: '排除未定义点的定理', dd: '若 $f(x)=g(x)$ 在 $a$ 的某个去心邻域内处处成立，则 $\\lim f=\\lim g$。', callout: '理由：极限从不使用 $f(a)$ 本身的值，所以可以把 $x=a$ 直接约掉。' },
      { dt: '未定式', dd: '$0/0$、$\\infty/\\infty$、$\\infty-\\infty$、$0\\cdot\\infty$、$1^\\infty$、$0^0$、$\\infty^0$ 都必须先变形，不能直接代入。' },
      { dt: '三种基本变形', dd: '① 因式分解 ② 有理化（共轭相乘）③ 通分 / 拆分。', formula: '\\lim_{x\\to1}\\frac{x^2-1}{x-1}=\\lim_{x\\to1}(x+1)=2\\qquad \\lim_{x\\to2}\\frac{x^2+3x-10}{x^2+x-6}=\\lim_{x\\to2}\\frac{x+5}{x+3}=\\tfrac75\\qquad \\lim_{x\\to0}\\frac{\\sqrt{x^2+9}-3}{x^2}=\\lim_{x\\to0}\\frac{1}{\\sqrt{x^2+9}+3}=\\tfrac16' },
      { dt: '夹逼定理（Sandwich）', dd: '若 $f(x)\\le g(x)\\le h(x)$ 在 $a$ 的去心邻域成立，且 $\\lim f=\\lim h=L$，则 $\\lim g=L$。', formula: '-1\\le\\sin\\tfrac1x\\le1 \\Rightarrow \\lim_{x\\to0}\\sin\\tfrac1x \\text{ 不存在}\\qquad |x^2\\sin\\tfrac1x|\\le x^2 \\Rightarrow \\lim_{x\\to0}x^2\\sin\\tfrac1x=0\\qquad |x\\sin\\tfrac1x|\\le|x| \\Rightarrow \\lim_{x\\to0}x\\sin\\tfrac1x=0' },
      { dt: '商法则的条件', dd: '⑤式要求 $\\lim g(x)\\neq0$；若为 0，必须先化简再判断。' }
    ]
  },
  {
    sec: '2.4', title: '极限的精确定义',
    items: [
      { dt: 'ε–δ 定义', dd: '对任意给定的 $\\varepsilon>0$，存在对应的 $\\delta>0$，使得当 $0<|x-a|<\\delta$ 时恒有 $|f(x)-L|<\\varepsilon$。', formula: '\\forall\\varepsilon>0,\\ \\exists\\delta>0:\\quad 0<|x-a|<\\delta\\ \\Rightarrow\\ |f(x)-L|<\\varepsilon' },
      { dt: '"在 $L$ 的 $\\varepsilon$ 邻域内"', dd: '$|f(x)-L|<\\varepsilon$ 等价于 $L-\\varepsilon<f(x)<L+\\varepsilon$。' },
      { dt: '"充分接近 $a$ 但不相等"', dd: '$0<|x-a|<\\varepsilon$ 意味着 $x$ 落在 $(a-\\varepsilon,a+\\varepsilon)$ 且去掉点 $a$。' },
      { dt: '证明模板（四步）', dd: '① 给定任意 $\\varepsilon>0$；② 取 $\\delta=\\min(\\text{若干项},1)$；③ 由 $0<|x-a|<\\delta$ 推出中间不等式；④ 得到 $|f(x)-L|<\\varepsilon$，证毕。' },
      { dt: '课堂例题', dd: '证明 $\\lim_{x\\to4}(3x+7)=5$：给 $\\varepsilon$，令 $\\delta=\\varepsilon/3$。', formula: '\\lim_{x\\to2}\\frac{2x^2-3x+2}{x-2}=5\\quad(\\text{分子除以 }x-2\\text{ 化为 }2x+1)\\qquad \\lim_{x\\to4}\\sqrt{x}=2\\qquad \\lim_{x\\to3}x^2=9\\ (\\delta=\\min(1,6\\varepsilon))\\qquad \\lim_{x\\to3}\\frac1x=\\tfrac13\\ (\\delta=\\min(1,\\tfrac{3\\varepsilon}{7}))' },
      { dt: '单侧极限的 ε–δ 形式', dd: '左极限：$a-\\delta<x<a$ 且 $|f(x)-L|<\\varepsilon$；右极限：$a<x<a+\\delta$ 且 $|f(x)-L|<\\varepsilon$。' },
      { dt: '无穷限的 M–δ 形式', dd: '$\\lim_{x\\to a}f(x)=\\infty$：对任意 $M>0$，存在 $\\delta>0$，使 $0<|x-a|<\\delta$ 时 $f(x)>M$。' }
    ]
  },
  {
    sec: '2.5', title: '函数的连续性',
    items: [
      { dt: '连续的定义', dd: '$f$ 在 $a$ 处连续 $\\Leftrightarrow \\lim_{x\\to a}f(x)=f(a)$。展开即三条件：极限存在、$f(a)$ 有定义、两者相等。' },
      { dt: '判连续三问', dd: '① $\\lim f(x)$ 存在吗？② $f(a)$ 定义了吗？③ 相等吗？全"是"才连续。' },
      { dt: '连续性的保运算定理', dd: '$f,g$ 在 $a$ 连续、$k$ 为常数，则 $kf$、$f+g$、$f-g$、$fg$ 在 $a$ 连续；$f/g$ 在 $a$ 连续（要求 $g(a)\\neq0$）；$f^n$、$\\sqrt[n]{f}$ 亦然。' },
      { dt: '复合函数连续性定理', dd: '若 $\\lim_{x\\to a}g(x)=L$ 且 $f$ 在 $L$ 连续，则 $\\lim_{x\\to a}f(g(x))=f(L)$。', formula: 'h(x)=\\frac{\\sin(x^4-3x+1)}{x^2-x-6} \\text{ 除 } x=3 \\text{ 与 } x=-2 \\text{ 外处处连续}' },
      { dt: '单侧连续', dd: '右连续：$\\lim_{x\\to a^+}f(x)=f(a)$；左连续：$\\lim_{x\\to a^-}f(x)=f(a)$。' },
      { dt: '闭区间上的连续', dd: '$f$ 在 $[a,b]$ 上连续 $\\Leftrightarrow$ 在 $(a,b)$ 连续 + 在 $a$ 右连续 + 在 $b$ 左连续。' },
      { dt: '间断点三型', dd: '可去间断点（左右极限相等但不等于函数值或函数值无定义）、跳跃间断点（左右极限存在但不等）、无穷间断点（至少一侧为 $\\pm\\infty$）。' },
      { dt: '课堂例题', dd: '$f(x)=\\dfrac{x^2+4}{x+2}$ 在 $x=-2$ 处：$f(-2)$ 无定义，$\\lim=-\\!4$ 不存在 ⇒ 不连续（可去）。$f(x)=\\dfrac{\\sin x}{x(1-x)}$ 在 $x=0,1$ 处不连续。$[[x]]$ 在所有整数处不连续（跳跃）。', formula: '\\lim_{x\\to-2}\\frac{x^2+4}{x+2}=\\lim_{x\\to-2}(x-2)=-4' },
      { dt: '最大连续区间', dd: '$g(x)=\\sqrt{4-x^2}$ 定义域为 $[-2,2]$，内部连续、$-2$ 右连续、$2$ 左连续 $\\Rightarrow$ 连续区间为 $[-2,2]$。' },
      { dt: '介值定理 IVT', dd: '$f$ 在 $[a,b]$ 上连续，$N$ 介于 $f(a)$ 与 $f(b)$ 之间 $\\Rightarrow$ 存在 $c\\in[a,b]$ 使 $f(c)=N$。', callout: '典型应用：证明 $x^3+1=x$ 在 $[0,1]$ 内有解；证明 $x-\\cos x=0$ 在 $(0,\\tfrac{\\pi}{2})$ 内有解。' }
    ]
  },
  {
    sec: '2.6', title: '无穷远处的极限与水平渐近线',
    items: [
      { dt: '$x\\to\\infty$ 的极限', dd: '$\\lim_{x\\to\\infty}f(x)=L$：要求 $x$ 足够大时，$f(x)$ 可以任意接近 $L$。' },
      { dt: '水平渐近线', dd: '若 $\\lim_{x\\to\\infty}f(x)=L$ 或 $\\lim_{x\\to-\\infty}f(x)=L$，则 $y=L$ 是水平渐近线。' },
      { dt: '有理函数规则', dd: '分子次数 < 分母次数 $\\Rightarrow$ 极限为 0；相等 $\\Rightarrow$ 最高次系数之比；分子次数 > 分母次数 $\\Rightarrow$ 无水平渐近线（极限 $\\pm\\infty$）。' },
      { dt: '课堂例题', dd: '$\\lim_{x\\to\\infty}\\frac{x}{1+x^2}=0$；$\\lim_{x\\to\\infty}\\frac{2x^3}{1+x^3}=2$；$\\lim_{n\\to\\infty}\\frac{\\sqrt{n+1}}{n+2}=0$。' },
      { dt: '根式的处理', dd: '含 $\\sqrt{x^2+\\cdots}$ 时分子分母同除以 $x$（或乘共轭）化成有理式再比较次数。', formula: '\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+2x}-x\\right)=\\lim_{x\\to\\infty}\\frac{2x}{x\\left(\\sqrt{x^2+2x}+x\\right)}=\\lim_{x\\to\\infty}\\frac{2}{\\sqrt{x^2+2x}+x}=1' },
      { dt: '指数与对数', dd: '$\\lim_{x\\to\\infty}e^x=+\\infty$，$\\lim_{x\\to-\\infty}e^x=0$；$\\lim_{x\\to\\infty}\\ln x=+\\infty$，$\\lim_{x\\to0^+}\\ln x=-\\infty$。' },
      { dt: '两侧不同的极限', dd: '$\\lim_{x\\to0^+}e^{1/x}=+\\infty$，$\\lim_{x\\to0^-}e^{1/x}=0$（同一函数两侧极限不同，写清方向）。' },
      { dt: '双渐近线例题', dd: '$f(x)=\\dfrac{-2x^2+1}{3x-5}$：水平渐近线 $y=-\\tfrac23$；垂直渐近线 $x=\\tfrac53$（右侧 $-\\infty$、左侧 $+\\infty$）。' },
      { dt: 'arctan 型', dd: '$\\lim_{x\\to2^+}\\arctan\\dfrac1{x-2}=\\tfrac\\pi2$，$\\lim_{x\\to2^-}=-\\tfrac\\pi2$。' }
    ]
  },
  {
    sec: '2.7', title: '导数与变化率',
    items: [
      { dt: '导数定义', dd: '$f$ 在 $a$ 处的导数：', formula: 'f\'(a)=\\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}=\\lim_{h\\to 0}\\frac{f(a+h)-f(a)}{h}' },
      { dt: '可导性', dd: '若该极限存在，则称 $f$ 在 $a$ 处可导；求导数叫微分。' },
      { dt: '切线方程', dd: '$m=f\'(a)$，$y-f(a)=f\'(a)(x-a)$。', formula: '\\text{例：}y=\\sqrt{x}\\text{ 在 }(3,1)\\text{ 处}\\ y-1=\\tfrac13(x-3)\\Rightarrow y=\\tfrac{x}{3}+\\tfrac23' },
      { dt: '瞬时速度', dd: '$v=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}$，单位 m/s。' },
      { dt: '瞬时变化率', dd: '$y=f(x)$ 在 $x=x_1$ 处的瞬时变化率 $=\\lim_{x_2\\to x_1}\\dfrac{f(x_2)-f(x_1)}{x_2-x_1}$。' },
      { dt: '课堂例题：CN Tower', dd: '球从 450 m 高处落下，$h(t)=450-4.9t^2$。(a) $t=5$ 时速率 $49$ m/s；(b) 落地时 $t=\\sqrt{450/4.9}\\approx9.58$ s，速率 $\\approx93.9$ m/s。', callout: '求极限后的表达式中不能残留 $h$。' },
      { dt: '课堂例题：多项式', dd: '$f(x)=x^3+7x \\Rightarrow f\'(a)=3a^2+7$。' }
    ]
  },
  {
    sec: '2.8', title: '作为函数的导数',
    items: [
      { dt: '导数是函数', dd: '$f\'(x)=\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}$，对定义域内每个 $x$ 成立。' },
      { dt: 'Leibniz 记号', dd: '$\\dfrac{dy}{dx}=\\lim_{\\Delta x\\to0}\\dfrac{\\Delta y}{\\Delta x}=f\'(x)$。', formula: 'f\'(x)=y\'=Df(x)=D_xf(x)=\\frac{df}{dx}' },
      { dt: '课堂例题', dd: '$f(x)=\\dfrac1x \\Rightarrow f\'(x)=-\\dfrac1{x^2}$；$f(x)=\\sqrt{x} \\Rightarrow f\'(x)=\\dfrac1{2\\sqrt{x}}$；$f(x)=\\dfrac1{\\sqrt{x}} \\Rightarrow f\'(x)=-\\dfrac1{2x^{3/2}}$。' },
      { dt: '$|x|$ 的可导性', dd: '$x\\neq0$ 处可导（$f\'=\\pm1$），$x=0$ 处不可导（左右导数 $-1$ 与 $1$）。' },
      { dt: '可导 ⇒ 连续', dd: '若 $f\'(a)$ 存在，则 $f$ 在 $a$ 连续；反之不然。', callout: '证明：$f(x)-f(a)=\\dfrac{f(x)-f(a)}{x-a}\\cdot(x-a)$，右端有极限 $\\Rightarrow \\lim[f(x)-f(a)]=0$。' },
      { dt: '不可导的三种情形', dd: '尖角（corner）、垂直切线（vertical tangent）、间断（discontinuity）。' },
      { dt: '高阶导数', dd: '$f\'$ 的导数是 $f\'\'$（二阶导数），依此类推 $f^{(n)}$。', formula: 'f(x)=2x^2-6x+8 \\Rightarrow f\'=4x-6,\\ f\'\'=4,\\ f\'\'\'=0' },
      { dt: '记号对照', dd: '$f\'/f\'\'/f\'\'\'/f^{(4)}\\ \\leftrightarrow\\ y\'/y\'\'/y\'\'\'/y^{(4)}\\ \\leftrightarrow\\ D_xy/D^2_xy/D^3_xy/D^4_xy\\ \\leftrightarrow\\ \\dfrac{dy}{dx}/\\dfrac{d^2y}{dx^2}/\\dfrac{d^3y}{dx^3}/\\dfrac{d^4y}{dx^4}$。' }
    ]
  }
];

/* ---------- 记忆卡 ---------- */
const FLASHCARDS = [
  { tag: '2.1', q: '写出切线斜率的极限定义式。', a: '$m_{\\tan}=\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}$' },
  { tag: '2.1', q: '$y=x^2$ 在 $(1,1)$ 处的切线方程？', a: '斜率 $=\\lim\\dfrac{x^2-1}{x-1}=2$，切线 $y=2x-1$' },
  { tag: '2.2', q: '双侧极限存在的充要条件？', a: '左极限与右极限都存在且相等' },
  { tag: '2.2', q: '什么时候 $x=a$ 是垂直渐近线？', a: '$\\lim_{x\\to a}f(x)=\\pm\\infty$，或至少一侧趋于 $\\pm\\infty$' },
  { tag: '2.2', q: '$\\lim_{x\\to0}\\sin\\frac1x$ 存在吗？', a: '不存在。$-1\\le\\sin\\frac1x\\le1$，左右极限不一致' },
  { tag: '2.3', q: '计算 $\\lim_{x\\to1}\\dfrac{x^2-1}{x-1}$。', a: '因式分解 $(x-1)(x+1)$，约去 $x-1$ $\\Rightarrow\\lim(x+1)=2$' },
  { tag: '2.3', q: '出现 $0/0$ 时的标准三步？', a: '因式分解 → 有理化（共轭）→ 通分 / 拆分，之后用极限律' },
  { tag: '2.3', q: '夹逼定理的条件？', a: '$f(x)\\le g(x)\\le h(x)$ 在去心邻域成立且 $\\lim f=\\lim h=L \\Rightarrow \\lim g=L$' },
  { tag: '2.3', q: '$\\lim_{x\\to0}x^2\\sin\\frac1x$ 等于多少？怎么证？', a: '$0$。因 $|x^2\\sin\\frac1x|\\le x^2\\to0$，由夹逼定理得 $0$' },
  { tag: '2.4', q: '极限的 ε–δ 定义完整写一遍。', a: '$\\forall\\varepsilon>0,\\ \\exists\\delta>0:$ 当 $0<|x-a|<\\delta$ 时 $|f(x)-L|<\\varepsilon$' },
  { tag: '2.4', q: '证明 $\\lim_{x\\to4}(3x+7)=5$ 时 $\\delta$ 怎么取？', a: '$\\delta=\\varepsilon/3$，则 $|3x+7-5|=3|x-4|<3\\delta=\\varepsilon$' },
  { tag: '2.4', q: '证明 $\\lim_{x\\to3}\\frac1x=\\frac13$ 的 $\\delta$？', a: '给 $\\varepsilon$，取 $\\delta=\\min(1,\\frac{3\\varepsilon}{7})$，则 $\\frac{|x-3|}{3|x|}<\\varepsilon$' },
  { tag: '2.4', q: '无穷限的 M–δ 定义？', a: '$\\forall M>0,\\ \\exists\\delta>0:$ 当 $0<|x-a|<\\delta$ 时 $f(x)>M$' },
  { tag: '2.5', q: '$f$ 在 $a$ 处连续需要哪三个条件？', a: '① $\\lim_{x\\to a}f(x)$ 存在 ② $f(a)$ 有定义 ③ $\\lim f=f(a)$' },
  { tag: '2.5', q: '间断点的三种类型？', a: '可去间断点、跳跃间断点、无穷间断点' },
  { tag: '2.5', q: '介值定理陈述？', a: '$f$ 在 $[a,b]$ 连续，$N$ 介于 $f(a)$ 与 $f(b)$ 之间 $\\Rightarrow$ 存在 $c$ 使 $f(c)=N$' },
  { tag: '2.5', q: '$\\sqrt{4-x^2}$ 的最大连续区间？', a: '$[-2,2]$：内部连续，$-2$ 处右连续，$2$ 处左连续' },
  { tag: '2.6', q: '有理函数 $\\lim_{x\\to\\infty}\\frac{P}{Q}$ 怎么判断？', a: '比次数：分母大 $\\Rightarrow0$；相等 $\\Rightarrow$ 最高次系数比；分子大 $\\Rightarrow\\pm\\infty$' },
  { tag: '2.6', q: '$\\lim_{x\\to\\infty}(\\sqrt{x^2+2x}-x)$ 等于多少？', a: '$1$（乘共轭有理化 $\\to\\dfrac{2}{\\sqrt{x^2+2x}+x}\\to\\dfrac{2}{2x}=1$）' },
  { tag: '2.6', q: '水平渐近线怎么定？', a: '若 $\\lim_{x\\to\\infty}f=L$ 或 $\\lim_{x\\to-\\infty}f=L$，则 $y=L$ 是水平渐近线' },
  { tag: '2.7', q: '导数的定义式（两种写法）？', a: '$f\'(a)=\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}$' },
  { tag: '2.7', q: '求瞬时速度后，$h$ 还能留在答案里吗？', a: '不能。极限值必须与 $h$ 无关（"Don\'t depend on h"）' },
  { tag: '2.8', q: '可导与连续的关系？', a: '可导 $\\Rightarrow$ 连续；连续 $\\nRightarrow$ 可导（如 $|x|$ 在 $0$ 处）' },
  { tag: '2.8', q: '函数不可导的三种情形？', a: '尖角（corner）、垂直切线（vertical tangent）、间断（discontinuity）' },
  { tag: '2.8', q: '$f(x)=\\sqrt{x}$ 的导数？', a: '$f\'(x)=\\dfrac{1}{2\\sqrt{x}}$' },
  { tag: '2.8', q: '$f(x)=2x^2-6x+8$ 的各阶导数？', a: '$f\'=4x-6,\\ f\'\'=4,\\ f\'\'\'=0$' }
];

/* ---------- 易错点 ---------- */
const PITFALLS = [
  { t: '左右极限没查就写双侧极限', w: '直接写 $\\lim_{x\\to2}f(x)=17$。', r: '必须分别算 $\\lim_{x\\to2^-}$ 与 $\\lim_{x\\to2^+}$，两者相等才成立。', why: '课堂例题 $g(x)=-x+2\\ (x>6)$、$x+4\\ (x<6)$ 在 $x=6$ 处：左极限 10，右极限 $-4$，结论 DNE。' },
  { t: '把 $f(a)$ 当成极限', w: '认为 $\\lim f(x)=f(a)$ 恒成立，分母为 0 时直接写 $\\infty$。', r: '$0/0$ 是未定式，必须先化简；只有真正的 $\\pm\\infty$ 才写无穷。', why: '$\\lim_{x\\to1}\\frac{x^2-1}{x-1}=2$，不是 $\\infty$。' },
  { t: '把未定义点留在分母里', w: '对 $\\lim_{x\\to2}\\frac{x^2+3x-10}{x^2+x-6}$ 代入得 $0/0$ 就放弃。', r: '先因式分解 $\\frac{(x-2)(x+5)}{(x+2)(x-3)}$，约去 $x-2$ 再代入。', why: '因为极限不使用 $f(a)$ 的值，所以可以放心约掉。' },
  { t: '垂直渐近线只看双侧极限', w: '只有 $\\lim_{x\\to a}f(x)=\\pm\\infty$ 才写渐近线。', r: '只要有一侧趋于 $\\pm\\infty$，$x=a$ 就是垂直渐近线。', why: '$f(x)=\\frac{-2x^2+1}{3x-5}$ 在 $x=\\frac53$ 处双侧极限不存在，但左右分别为 $\\mp\\infty$，仍是垂直渐近线。' },
  { t: '夹逼定理用错方向', w: '看到 $\\sin\\frac1x$ 就写 $=0$。', r: '只有上下界同趋于同一 $L$ 才能夹。$\\sin\\frac1x$ 的界是 $-1$ 与 $1$，故极限不存在。', why: '对比 $x^2\\sin\\frac1x$（界是 $x^2\\to0$）才能夹出 $0$。' },
  { t: '求导数后残留 $h$', w: '写出 $v=9.8t+9.8h$ 就算完。', r: '取极限后表达式中不能有 $h$。', why: 'CN Tower 例题明确强调 "Don\'t depend on h"。' },
  { t: 'ε–δ 证明漏掉 $\\min$', w: '直接取 $\\delta=\\varepsilon/3$ 就开始推。', r: '常取 $\\delta=\\min(\\text{若干项},1)$，保证中间步骤有界。', why: '$\\lim_{x\\to3}\\frac1x$ 的证明需要先保证 $|x-3|<1$，从而 $|x|>2$。' },
  { t: '把连续当成可导', w: '看到 $\\lim f=f(a)$ 就说 $f$ 可导。', r: '可导 $\\Rightarrow$ 连续，但连续 $\\nRightarrow$ 可导。', why: '$f(x)=|x|$ 在 $x=0$ 连续但不可导（尖角）。' },
  { t: '端点处用双侧极限判断连续', w: '在区间端点用 $\\lim_{x\\to a}$ 判断。', r: '端点用单侧连续：左端点右连续、右端点左连续。', why: '$g(x)=\\sqrt{4-x^2}$ 在 $x=-2$ 处是右连续。' },
  { t: '有理化时符号出错', w: '$\\sqrt{x^2+2x}-x$ 有理化时分子写成 $x$。', r: '分子 $=(x^2+2x)-x^2=2x$。', why: '$\\lim(\\sqrt{x^2+2x}-x)=\\lim\\frac{2}{\\sqrt{x^2+2x}+x}=1$。' },
  { t: '忽略商法则条件', w: '看到分母极限为 0 也套商法则。', r: '商法则要求 $\\lim g(x)\\neq0$，否则属于未定式。', why: '$\\lim\\frac{x^2-1}{x-1}$ 不能直接按商法则写。' },
  { t: '无穷大与 DNE 混用', w: '写 $\\lim_{x\\to0^+}e^{1/x}=\\infty$ 时不区分方向。', r: '$\\infty$ 只表示"可任意大"，要指明 $+\\infty$ 还是 $-\\infty$；双侧不同就写 DNE。', why: '$e^{1/x}$ 在 $0$ 右侧为 $+\\infty$、左侧为 $0$。' },
  { t: '介值定理用错前提', w: '不检查连续性就直接用 IVT。', r: '前提：$f$ 在闭区间 $[a,b]$ 上连续，且 $N$ 介于 $f(a)$ 与 $f(b)$ 之间。', why: '$x^3+1=x$ 在 $[0,1]$ 上有解，因为 $f(0)=1>0$，$f(1)=-1<0$。' },
  { t: '切线斜率算成负倒数', w: '把垂直切线的斜率写成原斜率的负倒数。', r: '切线斜率就是 $f\'(a)$；只有法线才是负倒数。', why: '$y=\\sqrt{x}$ 在 $(3,1)$ 处斜率 $\\frac13$，切线 $y=\\frac{x}{3}+\\frac23$。' }
];

/* ---------- 公式速查表 ---------- */
const SHEET = [
  { title: '极限与连续', items: [
    { lab: '双侧极限', tex: '\\lim_{x\\to a}f(x)=L \\iff \\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)=L' },
    { lab: '连续定义', tex: '\\lim_{x\\to a}f(x)=f(a)' },
    { lab: '代换性质', tex: 'f\\text{ 多项式/有理且 }f(a)\\text{ 有定义}\\Rightarrow\\lim_{x\\to a}f(x)=f(a)' },
    { lab: '夹逼定理', tex: 'f(x)\\le g(x)\\le h(x),\\ \\lim f=\\lim h=L \\Rightarrow \\lim g=L' },
    { lab: '极限律', tex: 'cf,\\ f\\pm g,\\ fg,\\ f/g\\ (\\lim g\\neq0),\\ c,\\ x,\\ f^n,\\ \\sqrt[n]{f}' },
    { lab: '介值定理', tex: 'f\\text{ 在 }[a,b]\\text{ 连续},\\ N\\in[f(a),f(b)]\\Rightarrow\\exists c:\\ f(c)=N' }
  ]},
  { title: 'ε–δ 语言', items: [
    { lab: '定义', tex: '\\forall\\varepsilon>0,\\ \\exists\\delta>0:\\ 0<|x-a|<\\delta \\Rightarrow |f(x)-L|<\\varepsilon' },
    { lab: '左极限', tex: 'a-\\delta<x<a \\Rightarrow |f(x)-L|<\\varepsilon' },
    { lab: '右极限', tex: 'a<x<a+\\delta \\Rightarrow |f(x)-L|<\\varepsilon' },
    { lab: '无穷限', tex: '\\forall M>0,\\ \\exists\\delta>0:\\ 0<|x-a|<\\delta \\Rightarrow f(x)>M' }
  ]},
  { title: '渐近线', items: [
    { lab: '垂直渐近线', tex: '\\lim_{x\\to a^\\pm}f(x)=\\pm\\infty \\Rightarrow x=a' },
    { lab: '水平渐近线', tex: '\\lim_{x\\to\\infty}f(x)=L\\ \\text{或}\\ \\lim_{x\\to-\\infty}f(x)=L \\Rightarrow y=L' },
    { lab: '有理函数', tex: '\\deg P<\\deg Q\\Rightarrow0;\\ \\deg P=\\deg Q\\Rightarrow\\text{最高次系数比}' }
  ]},
  { title: '导数', items: [
    { lab: '导数定义', tex: 'f\'(a)=\\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}' },
    { lab: '切线方程', tex: 'y-f(a)=f\'(a)(x-a)' },
    { lab: '瞬时速度', tex: 'v(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}' },
    { lab: 'Leibniz', tex: '\\frac{dy}{dx}=f\'(x)=y\'=Df(x)=D_xf(x)' },
    { lab: '可导 ⇒ 连续', tex: "f'(a)\\text{ 存在}\\Rightarrow f\\text{ 在 }a\\text{ 连续}" },
    { lab: '高阶导数', tex: "f^{(n)},\\ y^{(n)},\\ D_x^n y,\\ \\frac{d^n y}{dx^n}" }
  ]},
  { title: '常用极限', items: [
    { lab: '有理化', tex: '\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+2x}-x\\right)=\\lim\\frac{2}{\\sqrt{x^2+2x}+x}=1' },
    { lab: '夹逼', tex: '|x^2\\sin(1/x)|\\le x^2 \\Rightarrow \\lim_{x\\to0}x^2\\sin(1/x)=0' },
    { lab: '振荡', tex: '-1\\le\\sin(1/x)\\le1 \\Rightarrow \\lim_{x\\to0}\\sin(1/x)=DNE' },
    { lab: '指数对数', tex: '\\lim_{x\\to\\infty}e^x=\\infty,\\ \\lim_{x\\to0^+}\\ln x=-\\infty,\\ \\lim_{x\\to0^+}e^{1/x}=\\infty' }
  ]}
];
