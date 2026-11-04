/* ============================================================
   Chapter 3 后半段内容层（中文）
   来源：NotesOnOct27（3.3–3.5）+ NotesOnOct29（3.5 后半、3.6、3.7）
   附：Chapter 3 专题冲刺方案 PLAN3
   ============================================================ */

/* ---------- 小节与作业题号 ---------- */
const SECTIONS3B = [
  { id: '3.6', name: 'Derivatives of Logarithmic Functions', cn: '对数函数求导', en: 'Logarithmic Functions', hw: [3,5,7,9,13,15,19,33,39,41,47,56], weight: 4, tags: ['新内容', '含 e 的极限', '作业 p.223'] },
  { id: '3.7', name: 'Rates of Change', cn: '变化率', en: 'Rates of Change', hw: [1], weight: 4, tags: ['应用题', '速度与加速度', '作业 p.233'] }
];

const SCOPE_CARDS3B = {
  '3.6': {
    desc: '对数求导法则 d/dx ln x = 1/x 与 d/dx logₐ x = 1/(x ln a)，以及 e 的极限定义与幂函数 xˣ 的求导。本节题型变化多，重点在"先化简再求导"。',
    must: ['d/dx ln x = 1/x（x > 0）', 'd/dx logₐ x = 1/(x ln a)', 'd/dx ln|x| = 1/x（x ≠ 0）', 'e = lim(x→0)(1+x)^(1/x) = lim(n→∞)(1+1/n)^n', 'd/dx xˣ = xˣ(ln x + 1)']
  },
  '3.7': {
    desc: '把导数用回运动学：位置 s(t) → 速度 v(t) = s′(t) → 加速度 a(t) = s″(t)，判断静止、运动方向、路程以及加速/减速。',
    must: ['v(t) = s′(t)，a(t) = s″(t)', '静止 ⇔ v(t) = 0', '向右运动 ⇔ v(t) > 0', '路程 = 各段 |位移| 之和', '加速 ⇔ v 与 a 同号；减速 ⇔ v 与 a 异号']
  }
};

/* ---------- 概念速查 ---------- */
const CONCEPTS3B = [
  {
    sec: '3.5', title: '逆三角函数的导数',
    items: [
      { dt: 'arcsin 的导数', dd: '$y=\\arcsin x$ 即 $\\sin y=x$，隐式求导得 $\\cos y\\cdot y\'=1$。', formula: '\\dfrac{d}{dx}\\arcsin x=\\dfrac{1}{\\sqrt{1-x^2}}\\qquad(-1<x<1)' },
      { dt: 'arccos 的导数', dd: '$y=\\arccos x$ 即 $\\cos y=x$，隐式求导得 $-\\sin y\\cdot y\'=1$。', formula: '\\dfrac{d}{dx}\\arccos x=-\\dfrac{1}{\\sqrt{1-x^2}}' },
      { dt: 'arctan 的导数', dd: '$y=\\arctan x$ 即 $\\tan y=x$，隐式求导得 $\\sec^2y\\cdot y\'=1$，再用 $\\sec^2y=1+\\tan^2y$。', formula: '\\dfrac{d}{dx}\\arctan x=\\dfrac{1}{1+x^2}' },
      { dt: '为什么 arcsin 取正根', dd: 'arcsin 的值域是 $[-\\pi/2,\\pi/2]$，在该区间 $\\cos y>0$，所以 $\\cos y=\\sqrt{1-\\sin^2y}=\\sqrt{1-x^2}$，不写负号。', callout: '值域限制不是细节，而是公式带不带负号的唯一依据：arcsin 取 +，arccos 取 −。' },
      { dt: '其余四个反三角函数', dd: '教材第 3.5 节附表（推导留作练习 64）。', formula: '\\dfrac{d}{dx}\\operatorname{arcsec}x=\\dfrac{1}{x\\sqrt{x^2-1}}\\quad \\dfrac{d}{dx}\\operatorname{arccsc}x=-\\dfrac{1}{x\\sqrt{x^2-1}}\\quad \\dfrac{d}{dx}\\operatorname{arccot}x=-\\dfrac{1}{1+x^2}' },
      { dt: '一般反函数的求导', dd: '若 $f$ 一一对应且可导，$f^{-1}$ 也可导，则 $(f^{-1})\'(x)=\\dfrac{1}{f\'(f^{-1}(x))}$（分母不为 0）。', formula: '(f^{-1})\'(x)=\\dfrac{1}{f\'(f^{-1}(x))}' }
    ]
  },
  {
    sec: '3.6', title: '对数函数求导与 e 的极限',
    items: [
      { dt: '自然对数的导数', dd: '令 $y=\\ln x$，则 $x=e^y$。对 $x$ 求导：$1=e^y y\'$，于是 $y\'=\\dfrac{1}{e^y}=\\dfrac1x$。', formula: '\\dfrac{d}{dx}\\ln x=\\dfrac{1}{x}\\qquad(x>0)' },
      { dt: '一般对数的导数', dd: '$\\log_a x=\\dfrac{\\ln x}{\\ln a}$，常数倍法则直接给出。', formula: '\\dfrac{d}{dx}\\log_a x=\\dfrac{1}{x\\ln a}\\qquad(a>0,\\ a\\ne1)' },
      { dt: '绝对值版本', dd: '$x>0$ 时 $\\ln|x|=\\ln x$；$x<0$ 时 $\\ln|x|=\\ln(-x)$，对 $x$ 求导同样得到 $\\dfrac1x$。', formula: '\\dfrac{d}{dx}\\ln|x|=\\dfrac{1}{x}\\qquad(x\\ne0)' },
      { dt: 'e 的极限定义', dd: '$e$ 可以定义为 $\\lim_{x\\to0}(1+x)^{1/x}$，也等于数列极限 $\\lim_{n\\to\\infty}(1+\\frac1n)^n$。', formula: 'e=\\lim_{x\\to0}(1+x)^{1/x}=\\lim_{n\\to\\infty}\\left(1+\\dfrac1n\\right)^{n}' },
      { dt: '推广到一般底数', dd: '把 $(1+\\dfrac{k}{n})^n$ 写成 $\\left[(1+\\dfrac{k}{n})^{n/k}\\right]^k\\to e^k$。', formula: '\\lim_{n\\to\\infty}\\left(1+\\dfrac{k}{n}\\right)^{n}=e^{k}' },
      { dt: '对数运算法则', dd: '$\\ln(uv)=\\ln u+\\ln v$，$\\ln\\dfrac{u}{v}=\\ln u-\\ln v$，$\\ln(u^a)=a\\ln u$。求导时先拆再求导比直接求导省力。', callout: '看到 $\\ln(\\text{能因式分解的式子})$ 先拆成两个对数之差，往往一步到位。' },
      { dt: '幂函数 xˣ 的求导', dd: '底数和指数都含 $x$，先取对数：$y=x^x \\Rightarrow \\ln y=x\\ln x \\Rightarrow \\dfrac{y\'}{y}=\\ln x+1$。', formula: 'y\'=x^{x}(\\ln x+1)' }
    ]
  },
  {
    sec: '3.7', title: '变化率',
    items: [
      { dt: '速度与加速度', dd: '位置 $s(t)$ 的导数是速度 $v(t)=s\'(t)$；速度的导数是加速度 $a(t)=s\'\'(t)$。', formula: 'v(t)=s\'(t),\\qquad a(t)=s\'\'(t)=v\'(t)' },
      { dt: '静止的时刻', dd: '速度为 0 的时刻：解 $s\'(t)=0$。注意速度为 0 不等于"没动"，可能是到达转折点。', formula: 's\'(t)=0' },
      { dt: '运动方向', dd: '向右（正向）运动 ⇔ $v(t)>0$；向左运动 ⇔ $v(t)<0$。', formula: 'v(t)>0\\ \\Rightarrow\\ \\text{向右};\\qquad v(t)<0\\ \\Rightarrow\\ \\text{向左}' },
      { dt: '总路程', dd: '路程是速度绝对值的累积，不能直接用位移相减。分段判断符号后取绝对值再相加。', formula: '\\text{路程}=\\sum |s(t_{i+1})-s(t_i)|' },
      { dt: '加速还是减速', dd: '加速度与速度同号 ⇒ 加速（速率增大）；异号 ⇒ 减速。', callout: '判据只看"同号/异号"，不要凭图形想象。把 $v$ 与 $a$ 的符号表列出来逐段判断最稳。' },
      { dt: '典型解题流程', dd: '写出 $s(t)$ → 求 $v(t)=s\'$ → 解 $v(t)=0$ 定静止点 → 用 $v>0$ / $v<0$ 定方向 → 关键点代入 $s(t)$ 求路程 → 求 $a(t)=s\'\'$ → 用同号/异号判加速减速。' }
    ]
  }
];

/* ---------- 记忆卡 ---------- */
const FLASHCARDS3B = [
  { tag: '3.5', q: '三个必背的逆三角函数导数？', a: '$\\dfrac{d}{dx}\\arcsin x=\\dfrac{1}{\\sqrt{1-x^2}},\\ \\dfrac{d}{dx}\\arccos x=-\\dfrac{1}{\\sqrt{1-x^2}},\\ \\dfrac{d}{dx}\\arctan x=\\dfrac{1}{1+x^2}$' },
  { tag: '3.5', q: 'arcsin 推导里为什么取正根？', a: '$\\arcsin x$ 的值域是 $[-\\pi/2,\\pi/2]$，该区间 $\\cos y>0$，故 $\\cos y=\\sqrt{1-x^2}$（不能写 $\\pm$）' },
  { tag: '3.5', q: 'arcsin 与 arccos 导数只差什么？', a: '只差一个负号：$\\dfrac{d}{dx}\\arccos x=-\\dfrac{d}{dx}\\arcsin x$' },
  { tag: '3.5', q: '反函数求导的一般公式？', a: '$(f^{-1})\'(x)=\\dfrac{1}{f\'(f^{-1}(x))}$（$f$ 一一对应且 $f\'\\ne0$）' },
  { tag: '3.5', q: '隐函数二阶导的一般套路？', a: '先由 $F(x,y)=0$ 求出 $y\'$（写成 $x,y$ 的式子），再对 $x$ 求一次导，链式法则中 $y\'$ 也要乘上' },
  { tag: '3.6', q: 'd/dx ln x = ?', a: '$\\dfrac{1}{x}$（由 $y=\\ln x \\Leftrightarrow x=e^y$ 推出）' },
  { tag: '3.6', q: 'd/dx logₐ x = ?', a: '$\\dfrac{1}{x\\ln a}$' },
  { tag: '3.6', q: 'd/dx ln|x| = ?', a: '$\\dfrac{1}{x}$，$x\\ne0$（$x>0$ 用 $\\ln x$，$x<0$ 用 $\\ln(-x)$）' },
  { tag: '3.6', q: 'e 的两种极限定义？', a: '$e=\\lim_{x\\to0}(1+x)^{1/x}=\\lim_{n\\to\\infty}(1+\\dfrac1n)^{n}$' },
  { tag: '3.6', q: 'd/dx xˣ = ?', a: '$x^x(\\ln x+1)$（先取对数再求导）' },
  { tag: '3.6', q: 'd/dx aᵃˣ 类型怎么求？', a: '写成 $e^{x\\ln a}$，外层 $e^{\\cdot}$ 导数是它自己，再乘内层 $\\ln a$，得 $a^x\\ln a$' },
  { tag: '3.7', q: '速度、加速度与位置的关系？', a: '$v(t)=s\'(t)$，$a(t)=s\'\'(t)=v\'(t)$' },
  { tag: '3.7', q: '什么时候粒子静止？', a: '$v(t)=s\'(t)=0$ 的时刻' },
  { tag: '3.7', q: '如何判断加速还是减速？', a: '$v$ 与 $a$ 同号 ⇒ 加速；异号 ⇒ 减速' },
  { tag: '3.7', q: '路程和位移的区别？', a: '路程 = 各段 |位移| 之和（$v$ 的绝对值累积），不能直接用 $s(t_2)-s(t_1)$' }
];

/* ---------- 易错点 ---------- */
const PITFALLS3B = [
  { sec: '3.5', t: 'arcsin 与 arccos 的导数符号写反', w: '$\\dfrac{d}{dx}\\arccos x=\\dfrac{1}{\\sqrt{1-x^2}}$。', r: '$\\dfrac{d}{dx}\\arccos x=-\\dfrac{1}{\\sqrt{1-x^2}}$，arcsin 带正号、arccos 带负号。', why: '由 $\\cos y=x$ 求导得 $-\\sin y\\,y\'=1$，负号来自 $\\dfrac{d}{dx}\\cos x=-\\sin x$。' },
  { sec: '3.5', t: '逆三角求导忘了值域限制', w: '写出 $\\cos y=\\pm\\sqrt{1-x^2}$ 就直接代入。', r: '按值域取符号：$\\arcsin x\\in[-\\pi/2,\\pi/2]\\Rightarrow\\cos y>0$。', why: '否则 arcsin 的导数会多出一个 $\\pm$，答案不唯一。' },
  { sec: '3.5', t: '隐函数求导时把 y 当常数', w: '对 $x^2+y^2=16$ 求导写成 $2x=0$。', r: '两边同时对 $x$ 求导，$y$ 是 $x$ 的函数，$y^2$ 要写成 $2y\\cdot y\'$。', why: '教材例 4：$4x^3+4y^3y\'=0$。' },
  { sec: '3.5', t: '求二阶导时忘了乘 y′', w: '对 $y\'=-\\dfrac{x^3}{y^3}$ 求导时把 $y$ 当常数。', r: '$\\dfrac{d}{dx}(y^{-3})=-3y^{-4}y\'$，链式法则里 $y\'$ 必须出现。', why: '教材例 4 的最终结果 $y\'\'=-\\dfrac{48x^2}{y^7}$ 里含 $y$，正是这一步带来的。' },
  { sec: '3.6', t: 'logₐ x 求导漏掉 ln a', w: '$\\dfrac{d}{dx}\\log_a x=\\dfrac1x$。', r: '$\\dfrac{d}{dx}\\log_a x=\\dfrac{1}{x\\ln a}$，常数倍法则 $\\ln x=\\ln a\\cdot\\log_a x$。', why: '$\\log_a x=\\dfrac{\\ln x}{\\ln a}$，$\\ln a$ 是常数但必须留在分母。' },
  { sec: '3.6', t: 'ln 的真数没写绝对值就拆对数', w: '对 $\\ln(x^2)$ 直接写 $\\ln x^2=2\\ln x$。', r: '$\\ln(x^2)=2\\ln|x|$，只有 $x>0$ 时才能写 $2\\ln x$。', why: '$\\ln|x|$ 在 $x\\ne0$ 时都可导且导数为 $\\dfrac1x$。' },
  { sec: '3.6', t: '求 xˣ 的导数时不会取对数', w: '把 $x^x$ 当成 $x$ 的幂直接套幂法则。', r: '幂法则只适用于底数常数。先取对数：$\\ln y=x\\ln x$，再 $\\dfrac{y\'}{y}=\\ln x+1$。', why: '课堂例题 $y=x^x$ 与 $y=(x^2+1)^{\\sin x}$ 都是这个套路。' },
  { sec: '3.6', t: 'e 的极限与幂极限混淆', w: '$\\lim_{n\\to\\infty}(1+\\dfrac1n)^n$ 写成 $e^n$。', r: '它是 $e$；只有 $\\lim(1+\\dfrac{k}{n})^n=e^k$ 这种带底数变化的形式才等于 $e^k$。', why: '课堂例题：$\\lim(\\dfrac{n+2}{n})^n=e^2$，$\\lim(\\dfrac{n-2}{n})^n=e^{-2}$。' },
  { sec: '3.7', t: '用位移差当路程', w: '总路程直接写 $s(5)-s(0)$。', r: '先找速度变号点，把区间分段，每段取 $|\\Delta s|$ 再相加。', why: '课堂例题 $s=t^3-6t^2+9t$ 在 $t=1,3$ 处静止，5 秒路程是 $4+4+20=28$ 而非 $20$。' },
  { sec: '3.7', t: '加速减速判断反了', w: '看到 $a(t)>0$ 就说加速。', r: '看 $v$ 与 $a$ 是否同号：同号加速、异号减速。', why: '粒子向左运动时 $v<0$，若此时 $a>0$ 反而在减速。' }
];

/* ---------- 公式速查表 ---------- */
const SHEET3B = [
  { ch: '3', title: '3.5 逆三角函数求导', items: [
    { lab: 'arcsin', tex: '\\frac{d}{dx}\\arcsin x=\\frac{1}{\\sqrt{1-x^2}}' },
    { lab: 'arccos', tex: '\\frac{d}{dx}\\arccos x=-\\frac{1}{\\sqrt{1-x^2}}' },
    { lab: 'arctan', tex: '\\frac{d}{dx}\\arctan x=\\frac{1}{1+x^2}' },
    { lab: 'arcsec', tex: '\\frac{d}{dx}\\operatorname{arcsec}x=\\frac{1}{x\\sqrt{x^2-1}}' },
    { lab: 'arccsc', tex: '\\frac{d}{dx}\\operatorname{arccsc}x=-\\frac{1}{x\\sqrt{x^2-1}}' },
    { lab: 'arccot', tex: '\\frac{d}{dx}\\operatorname{arccot}x=-\\frac{1}{1+x^2}' },
    { lab: '值域', tex: '\\arcsin x\\in[-\\pi/2,\\pi/2]\\Rightarrow\\cos y>0' },
    { lab: '反函数', tex: '(f^{-1})\'(x)=\\frac{1}{f\'(f^{-1}(x))}' }
  ] },
  { ch: '3', title: '3.6 对数函数求导', items: [
    { lab: '自然对数', tex: '\\frac{d}{dx}\\ln x=\\frac{1}{x}\\quad(x>0)' },
    { lab: '绝对值', tex: '\\frac{d}{dx}\\ln|x|=\\frac{1}{x}\\quad(x\\ne0)' },
    { lab: '一般底数', tex: '\\frac{d}{dx}\\log_a x=\\frac{1}{x\\ln a}' },
    { lab: 'e 的定义', tex: 'e=\\lim_{x\\to0}(1+x)^{1/x}=\\lim_{n\\to\\infty}\\left(1+\\frac1n\\right)^n' },
    { lab: '推广', tex: '\\lim_{n\\to\\infty}\\left(1+\\frac{k}{n}\\right)^n=e^k' },
    { lab: '对数运算法则', tex: '\\ln(uv)=\\ln u+\\ln v,\\ \\ln\\frac{u}{v}=\\ln u-\\ln v' },
    { lab: '幂函数', tex: 'y=x^x\\Rightarrow y\'=x^x(\\ln x+1)' },
    { lab: '一般幂', tex: 'y=u(x)^{v(x)}\\Rightarrow \\frac{y\'}{y}=v\'\\ln u+v\\frac{u\'}{u}' }
  ] },
  { ch: '3', title: '3.7 变化率', items: [
    { lab: '速度', tex: 'v(t)=s\'(t)' },
    { lab: '加速度', tex: 'a(t)=s\'\'(t)=v\'(t)' },
    { lab: '静止', tex: 'v(t)=0' },
    { lab: '运动方向', tex: 'v(t)>0\\ \\text{向右};\\quad v(t)<0\\ \\text{向左}' },
    { lab: '路程', tex: '\\text{路程}=\\sum|s(t_{i+1})-s(t_i)|' },
    { lab: '加速/减速', tex: 'v\\cdot a>0\\ \\text{加速};\\quad v\\cdot a<0\\ \\text{减速}' }
  ] }
];

/* ---------- 课堂例题（NotesOnOct29） ---------- */
const PROBLEMS3B = [
  { sec: '3.5', num: '例4', type: '隐函数求导·切线',
    q: '求曲线 $4x^2y-3y=x^3$ 在点 $(1,1)$ 处的切线方程。', ans: '$y=-5x+6$',
    steps: ['两边对 $x$ 求导：$8xy+4x^2y\'-3y\'=3x^2$',
            '整理：$y\'(4x^2-3)=3x^2-8xy$',
            '代入 $(1,1)$：$y\'=\\dfrac{3-8}{4-3}=-5$',
            '切线：$y-1=-5(x-1)$，即 $y=-5x+6$'] },
  { sec: '3.5', num: '例5', type: '隐函数求导·水平切线',
    q: '在第一象限的哪个点，曲线 $x^3+y^3=6xy$ 的切线是水平的？', ans: '切点 $\\left(2\\sqrt[3]{2},\\ 2\\sqrt[3]{4}\\right)$',
    steps: ['两边对 $x$ 求导：$3x^2+3y^2y\'=6y+6xy\'$',
            '整理：$y\'=\\dfrac{6y-3x^2}{3y^2-6x}$',
            '水平切线 $\\Rightarrow y\'=0\\Rightarrow 6y=3x^2\\Rightarrow y=\\dfrac{x^2}{2}$',
            '代回：$x^3+\\dfrac{x^6}{8}=3x^3\\Rightarrow x^3=16\\Rightarrow x=2\\sqrt[3]{2}$，$y=2\\sqrt[3]{4}$'] },
  { sec: '3.5', num: '例6', type: '隐函数求导',
    q: '已知 $\\sin(x+y)=y^2\\cos x$，求 $\\dfrac{dy}{dx}$。', ans: '$y\'=\\dfrac{y^2\\sin x+\\cos(x+y)}{2y\\cos x-\\cos(x+y)}$',
    steps: ['两边对 $x$ 求导：$\\cos(x+y)(1+y\')=2y\\,y\'\\cos x-y^2\\sin x$',
            '把含 $y\'$ 的项挪到一边：$\\cos(x+y)+y^2\\sin x=y\'\\bigl(2y\\cos x-\\cos(x+y)\\bigr)$',
            '解出 $y\'$'] },
  { sec: '3.5', num: '例7', type: '隐函数二阶导',
    q: '已知 $x^4+y^4=16$，求 $y\'\'$。', ans: '$y\'\'=-\\dfrac{48x^2}{y^7}$',
    steps: ['一次求导：$4x^3+4y^3y\'=0\\Rightarrow y\'=-\\dfrac{x^3}{y^3}$',
            '再对 $x$ 求导（商法则 + 链式法则）：$y\'\'=-\\dfrac{3x^2}{y^3}-\\dfrac{3x^6}{y^7}$',
            '用 $x^4+y^4=16$ 化简：$y\'\'=-\\dfrac{3x^2(x^4+y^4)}{y^7}=-\\dfrac{48x^2}{y^7}$'] },
  { sec: '3.5', num: '例8', type: '逆三角函数求导',
    q: '求 $y=(\\sin^{-1}x)^2$ 的导数。', ans: '$y\'=\\dfrac{2\\sin^{-1}x}{\\sqrt{1-x^2}}$',
    steps: ['看成 $(\\sin^{-1}x)^2$：$y\'=2\\sin^{-1}x\\cdot\\dfrac{d}{dx}(\\sin^{-1}x)$',
            '代入 $\\dfrac{d}{dx}\\sin^{-1}x=\\dfrac{1}{\\sqrt{1-x^2}}$'] },
  { sec: '3.5', num: '例9', type: '逆三角函数求导·积法则',
    q: '求 $y=x\\arctan\\sqrt{x}$ 的导数。', ans: '$y\'=\\arctan\\sqrt{x}+\\dfrac{\\sqrt{x}}{2(1+x)}$',
    steps: ['积法则：$y\'=\\arctan\\sqrt{x}+x\\cdot\\dfrac{d}{dx}(\\arctan\\sqrt{x})$',
            '$\\dfrac{d}{dx}(\\arctan\\sqrt{x})=\\dfrac{1}{1+x}\\cdot\\dfrac{1}{2\\sqrt{x}}$',
            '故 $y\'=\\arctan\\sqrt{x}+\\dfrac{x}{2\\sqrt{x}(1+x)}=\\arctan\\sqrt{x}+\\dfrac{\\sqrt{x}}{2(1+x)}$'] },

  { sec: '3.6', num: '例1', type: '对数求导',
    q: '求 $\\dfrac{d}{dx}\\ln\\sqrt[3]{x}$。', ans: '$y\'=\\dfrac{1}{3x^{5/3}}$',
    steps: ['$\\ln\\sqrt[3]{x}=\\ln(x^{1/3})=\\dfrac13\\ln x$',
            '$y\'=\\dfrac13\\cdot\\dfrac1x=\\dfrac{1}{3x^{5/3}}$'] },
  { sec: '3.6', num: '例2', type: '推导·自然对数',
    q: '推导 $\\dfrac{d}{dx}\\ln x=\\dfrac1x$。', ans: '$y\'=\\dfrac1x$',
    steps: ['令 $y=\\ln x$，则 $x=e^y$', '对 $x$ 求导：$1=e^y\\cdot y\'$', '故 $y\'=\\dfrac{1}{e^y}=\\dfrac1x$'] },
  { sec: '3.6', num: '例3', type: '推导·一般底数',
    q: '推导 $\\dfrac{d}{dx}\\log_a x=\\dfrac{1}{x\\ln a}$。', ans: '$\\dfrac{d}{dx}\\log_a x=\\dfrac{1}{x\\ln a}$',
    steps: ['$\\log_a x=\\dfrac{\\ln x}{\\ln a}$，$\\ln a$ 是常数',
            '$y\'=\\dfrac{1}{\\ln a}\\cdot\\dfrac{1}{x}=\\dfrac{1}{x\\ln a}$'] },
  { sec: '3.6', num: '例4', type: '对数求导·因式分解',
    q: '求 $\\dfrac{d}{dx}\\ln(x^2+x-2)$。', ans: '$y\'=\\dfrac{2x+1}{x^2+x-2}=\\dfrac{1}{x-1}+\\dfrac{1}{x+2}$',
    steps: ['因式分解：$x^2+x-2=(x+2)(x-1)$',
            '$\\ln(x^2+x-2)=\\ln|x+2|+\\ln|x-1|$',
            '$y\'=\\dfrac{1}{x+2}+\\dfrac{1}{x-1}=\\dfrac{2x+1}{x^2+x-2}$'] },
  { sec: '3.6', num: '例5', type: '对数求导·绝对值',
    q: '证明 $\\dfrac{d}{dx}\\ln|x|=\\dfrac1x$。', ans: '$y\'=\\dfrac1x\\ (x\\ne0)$',
    steps: ['$x>0$ 时 $\\ln|x|=\\ln x$，导数为 $\\dfrac1x$',
            '$x<0$ 时 $\\ln|x|=\\ln(-x)$，$y\'=\\dfrac{1}{-x}\\cdot(-1)=\\dfrac1x$',
            '两种情况一致，且在 $x=0$ 处无定义'] },
  { sec: '3.6', num: '例6', type: '对数求导·链式法则',
    q: '求 $\\dfrac{d}{dx}\\ln(1+\\cos x)$。', ans: '$y\'=-\\dfrac{\\sin x}{1+\\cos x}$',
    steps: ['$y\'=\\dfrac{1}{1+\\cos x}\\cdot(-\\sin x)=-\\dfrac{\\sin x}{1+\\cos x}$'] },
  { sec: '3.6', num: '例7', type: '对数求导·根式',
    q: '求 $\\dfrac{d}{dx}(\\ln x)^{1/3}$。', ans: '$y\'=\\dfrac{1}{3x(\\ln x)^{2/3}}$',
    steps: ['令 $u=\\ln x$，$y=u^{1/3}$，$y\'=\\dfrac13u^{-2/3}\\,u\'$',
            '$u\'=\\dfrac1x$，故 $y\'=\\dfrac{1}{3(\\ln x)^{2/3}\\cdot x}$'] },
  { sec: '3.6', num: '例8', type: '对数求导·根式',
    q: '求 $y=\\ln\\sqrt[3]{x^2-1}$ 的导数（$x>1$）。', ans: '$y\'=\\dfrac{2x}{3(x^2-1)^{2/3}}$',
    steps: ['$y=\\dfrac13\\ln(x^2-1)$',
            '$y\'=\\dfrac13\\cdot\\dfrac{2x}{x^2-1}=\\dfrac{2x}{3(x^2-1)}$'] },
  { sec: '3.6', num: '例9', type: '幂函数求导·取对数',
    q: '求 $y=x^x$ 的导数。', ans: '$y\'=x^x(\\ln x+1)$',
    steps: ['取对数：$\\ln y=x\\ln x$',
            '两边对 $x$ 求导：$\\dfrac{y\'}{y}=\\ln x+x\\cdot\\dfrac1x=\\ln x+1$',
            '故 $y\'=x^x(\\ln x+1)$'] },
  { sec: '3.6', num: '例10', type: '幂函数求导·取对数',
    q: '求 $y=(x^2+1)^{\\sin x}$ 的导数。', ans: '$y\'=(x^2+1)^{\\sin x}\\left[\\cos x\\,\\ln(x^2+1)+\\dfrac{2x\\sin x}{x^2+1}\\right]$',
    steps: ['取对数：$\\ln y=\\sin x\\,\\ln(x^2+1)$',
            '求导：$\\dfrac{y\'}{y}=\\cos x\\,\\ln(x^2+1)+\\sin x\\cdot\\dfrac{2x}{x^2+1}$',
            '两边乘 $y$'] },
  { sec: '3.6', num: '例11', type: 'e 的极限',
    q: '计算 $\\lim_{n\\to\\infty}\\left(\\dfrac{n+2}{n}\\right)^{n}$。', ans: '$e^2$',
    steps: ['$\\left(\\dfrac{n+2}{n}\\right)^{n}=\\left(1+\\dfrac2n\\right)^{n}=\\left[\\left(1+\\dfrac2n\\right)^{n/2}\\right]^{2}$',
            '括号内 $\\to e$，故整体 $\\to e^2$'] },
  { sec: '3.6', num: '例12', type: 'e 的极限',
    q: '计算 $\\lim_{n\\to\\infty}\\left(\\dfrac{n-2}{n}\\right)^{n}$。', ans: '$e^{-2}$',
    steps: ['$\\left(1-\\dfrac2n\\right)^{n}=\\left[\\left(1-\\dfrac2n\\right)^{-n/2}\\right]^{-2}$',
            '括号内 $\\to e$，故整体 $\\to e^{-2}$'] },

  { sec: '3.7', num: '例1', type: '变化率·综合',
    q: '粒子的位置为 $s=f(t)=t^3-6t^2+9t$（米），$t\\ge0$（秒）。' +
      '(a) 求时刻 $t$ 的速度；(b) $t=2$ 秒与 $t=4$ 秒时的速度；' +
      '(c) 何时静止；(d) 何时向右运动；(e) 前 5 秒的总路程；(f) 求加速度；(g) 何时加速、何时减速。',
    ans: '(a) $v(t)=3t^2-12t+9=3(t-1)(t-3)$；(b) $v(2)=-3$，$v(4)=9$；(c) $t=1,3$；' +
         '(d) $t\\in(0,1)\\cup(3,\\infty)$；(e) $28$ 米；(f) $a(t)=6t-12$；' +
         '(g) 加速：$t\\in(1,2)\\cup(3,\\infty)$；减速：$t\\in(0,1)\\cup(2,3)$',
    steps: ['(a) $v(t)=s\'(t)=3t^2-12t+9=3(t-1)(t-3)$',
            '(b) $v(2)=12-24+9=-3$，$v(4)=48-48+9=9$',
            '(c) 令 $v(t)=0$：$3(t-1)(t-3)=0$，得 $t=1$ 或 $t=3$',
            '(d) $v(t)>0$：$t<1$ 或 $t>3$（结合 $t\\ge0$）',
            '(e) 关键点 $t=0,1,3,5$：$s(0)=0,\\ s(1)=4,\\ s(3)=0,\\ s(5)=20$；' +
            '路程 $=|4-0|+|0-4|+|20-0|=28$',
            '(f) $a(t)=s\'\'(t)=6t-12=6(t-2)$',
            '(g) 同号加速、异号减速：$t\\in(1,2)$ 时 $v<0,a<0$ 加速，$t\\in(2,3)$ 时 $v<0,a>0$ 减速，' +
            '$t>3$ 时 $v>0,a>0$ 加速'] },
  { sec: '3.7', num: '例2', type: '变化率·加速度',
    q: '已知 $v(t)=3t^2-12t+9$，求加速度 $a(t)$ 并说明速度在增大还是减小。', ans: '$a(t)=6t-12$；$t<2$ 时 $a<0$，$t>2$ 时 $a>0$',
    steps: ['$a(t)=v\'(t)=6t-12$',
            '$a<0 \\Leftrightarrow t<2$（速度递减），$a>0 \\Leftrightarrow t>2$（速度递增）'] }
];

/* ============================================================
   Chapter 3 专题冲刺方案
   ============================================================ */
const PLAN3 = {
  headline: '只考 Chapter 3 时用这一份：11 个小节、三大重点（3.4 链式法则、3.5 隐函数与逆三角、3.9–3.11 相关速率与线性近似）、一次限时模考。',
  tiers: [
    { id: 'A3', title: 'A 档 · 考前 48 小时（Chapter 3 专题）', when: '只剩 2 天', goal: '把 3.1–3.7 的求导公式默写一遍 + 做完所有指定作业题的步骤',
      minutes: '总计 3–4 小时',
      steps: [
        '第 1 轮（约 60 分钟）：打开「概念速查」，只读 3.1–3.7 的公式框，每条公式手写一遍，错的直接标红',
        '第 2 轮（约 60 分钟）：打开「教材作业」，按 3.3 → 3.4 → 3.5 → 3.6 → 3.9 → 3.10 顺序做题，每小节先做 2 道，答案默认折叠',
        '第 3 轮（约 45 分钟）：做 3.5 的隐函数与逆三角（最容易失分），再做 3.9 的相关速率与 3.10 的线性近似（都要写清变量关系式）',
        '第 4 轮（约 30 分钟）：打开「随机自测」，范围选 Chapter 3，题量 15，不限时，做完看错题解析',
        '第 5 轮（约 20 分钟）：打印「公式速查表」，只抄 3.5 / 3.6 / 3.7 / 3.9 / 3.10 / 3.11 六列',
        '收尾：只复习标红的公式与错题，不再开新题'
      ] },
    { id: 'B3', title: 'B 档 · 考前 5 天（Chapter 3 专题）', when: '还有一周，但只考第 3 章', goal: '公式全部默写 + 作业题全部过一遍 + 一次限时模考',
      minutes: '每天 50–70 分钟',
      steps: [
        'Day 1：3.1 + 3.2（求导基本功与积商法则）——公式默写 + 作业题全过',
        'Day 2：3.3 三角函数求导 —— 四个公式默写 3 遍 + 特殊极限 5 题',
        'Day 3：3.4 链式法则 —— 专门练分层拆解（外层导数 × 内层导数）',
        'Day 4：3.5 隐函数与逆三角 —— 隐函数模板默写 + 逆三角三个公式 + 切线与水平切线题',
        'Day 5：3.6 + 3.7 —— 对数求导（含 xˣ 取对数）+ 变化率七问；随后限时模考 20 题 / 25 分钟',
        'Day 6：Chapter 3 的 3.9 / 3.10 / 3.11 —— 相关速率五步法、线性近似与误差估计、双曲函数公式'
      ] },
    { id: 'C3', title: 'C 档 · 进考场前 30 分钟（Chapter 3 专题）', when: '临场', goal: '只唤醒公式与陷阱，不碰新题',
      minutes: '30 分钟',
      steps: [
        '8 分钟：公式速查表，只看 3.5 / 3.6 / 3.7 / 3.9 / 3.10 / 3.11 六列',
        '10 分钟：易错点，只读第 3 章那 20 条（arcsin 符号、logₐ 漏 ln a、xˣ 不会取对数、路程当位移、相关速率提前代数值、dy 冒充 Δy…）',
        '7 分钟：把昨晚做错的 3 道题重做一遍，只写关键一步',
        '5 分钟：确认常识 —— 三角公式用弧度制；$\\lim\\frac{\\sin t}{t}=1$ 只在 $t\\to0$；切线水平 $\\iff f\'=0$；加速减速看 $v$ 与 $a$ 同号异号',
        '剩余时间：深呼吸，不翻新题'
      ] }
  ],
  loop: [
    { title: '① 公式速查（10 分钟）', detail: '只读 Chapter 3 的公式框与"必会结论"三块，公式框默写一遍。这一步的目的是把术语说清楚，不是背题。' },
    { title: '② 教材作业（30–45 分钟）', detail: '按老师给的题号推进，做完立刻勾「已做」。错题不要看答案跳过去——先自己写一遍完整步骤，再展开解析对比。' },
    { title: '③ 错题回炉（15 分钟）', detail: '只重做"当时做错"的，做对的题不重复。隐函数与逆三角是全章最集中的失分点，优先重做。' },
    { title: '④ 随机自测（15–20 分钟）', detail: '范围选 Chapter 3，题量 10–15，不限时；熟练后再用计时模式自测 20 题。做完重点看错题解析。' },
    { title: '⑤ 公式速查（5 分钟）', detail: '每天最后一步：手写一遍 3.5 / 3.6 / 3.7 的公式，比看十遍更有效。' }
  ],
  triage: [
    { rule: '完全没思路', detail: '回到「概念速查」该小节，只看定义和定理框，再重做同类型第一道例题。' },
    { rule: '有思路算错', detail: '属于计算失误，不用回概念。放慢一步，写出中间式再算；把错因写进答案步骤里。' },
    { rule: '链式法则总漏内层', detail: '固定用"由外到内、逐层剥"的口诀：先写外层导数，再乘内层导数，然后逐层剥。' },
    { rule: '隐函数不会', detail: '背三行模板：两边对 x 求导 → 收集 y′ → 解出 y′。看 3.5 例 4、例 6、例 7。' },
    { rule: '逆三角符号乱', detail: '先问值域：arcsin 值域 [−π/2, π/2] 内 cos y > 0，所以取正根；arccos 多一个负号。' },
    { rule: '变化率不会判断加速', detail: '列符号表：把 v(t) 与 a(t) 的零点和符号逐段写出来，同号加速、异号减速。' }
  ],
  last10: [
    'arcsin 导数取正号，arccos 取负号',
    'arccot 导数是 −1/(1+x²)',
    'logₐ x 的导数分母有 ln a',
    'ln|x| 在 x ≠ 0 处导数都是 1/x',
    'xˣ 的导数要取对数才能求',
    '(1+1/n)^n → e，底数一变就是 e^k',
    '隐函数求导后别忘了收集 y′',
    '二阶导里 y′ 也要乘（链式法则）',
    '路程 = 各段 |位移| 之和，不是位移差',
    '加速看 v 与 a 同号，不是看 a 的正负',
    '相关速率：先对 t 求导，再代数值',
    'dy 是近似，Δy 才是真实变化',
    '双曲恒等式是 cosh² − sinh² = 1（减号）'
  ]
};
