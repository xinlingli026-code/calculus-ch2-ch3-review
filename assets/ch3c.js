/* ============================================================
   Chapter 3 后三节内容层（中文）
   来源：NotesOnNov03（3.9 相关速率、3.10 线性近似与微分、3.11 双曲函数）
   附：3.9–3.11 教材作业题库 HW3C
   ============================================================ */

/* ---------- 小节与作业题号 ---------- */
const SECTIONS3C = [
  { id: '3.9', name: 'Related Rates', cn: '相关速率', en: 'Related Rates', hw: [3,5,17,22,25,32,45], weight: 4, tags: ['应用题', '链式法则', '作业 p.249'] },
  { id: '3.10', name: 'Linear Approximations and Differentials', cn: '线性近似与微分', en: 'Linear Approximations', hw: [19,25,33,35,40], weight: 4, tags: ['近似计算', '误差估计', '作业 p.256'] },
  { id: '3.11', name: 'Hyperbolic Functions', cn: '双曲函数', en: 'Hyperbolic Functions', hw: [24,31,33,35,37], weight: 3, tags: ['新公式', '记忆为主', '作业 p.264'] }
];

const SCOPE_CARDS3C = {
  '3.9': {
    desc: '相关速率：多个量都随时间变化，用一个关系式把它们连起来，再对时间 t 用链式法则求导。',
    must: ['五步法：读题 → 画图 → 设变量 → 写关系式 → 对 t 求导 → 代入', '每一步都要明确哪个是已知速率、哪个是待求速率', '先求导，后代入具体数值', '锥体用相似三角形把 r 换成 h']
  },
  '3.10': {
    desc: '用切线近似附近的函数值：线性近似 L(x) = f(a) + f′(a)(x − a)，微分 dy = f′(a)dx，以及由此估计测量误差。',
    must: ['线性近似 L(x) = f(a) + f′(a)(x−a)', '微分 dy = f′(a)dx', 'Δy 是真实变化，dy 是近似变化', '绝对误差 dV、相对误差 dV/V、百分比误差 = 相对误差 × 100%']
  },
  '3.11': {
    desc: '双曲函数：由 eˣ 与 e⁻ˣ 定义的一组函数，结构像三角函数但导数对调。',
    must: ['sinh x = (eˣ − e⁻ˣ)/2，cosh x = (eˣ + e⁻ˣ)/2', 'tanh x = sinh x / cosh x', '恒等式 cosh²x − sinh²x = 1', 'sinh 是奇函数，cosh 是偶函数', 'd/dx sinh x = cosh x，d/dx cosh x = sinh x']
  }
};

/* ---------- 概念速查 ---------- */
const CONCEPTS3C = [
  {
    sec: '3.9', title: '相关速率',
    items: [
      { dt: '什么是时间变化率', dd: '若 y 依赖时间 t，则 $\\dfrac{dy}{dt}$ 称为 y 对 t 的时间变化率；相关速率问题就是用链式法则把一个速率换成另一个速率。', formula: '\\dfrac{dy}{dt}=\\dfrac{dy}{du}\\cdot\\dfrac{du}{dt}' },
      { dt: '通用解题五步', dd: '① 读题，分清已知速率与待求速率；② 画图；③ 给每个随时间变化的量设符号；④ 写一个把它们联系起来的方程；⑤ 对 t 用链式法则求导，最后代入数值。', callout: '最常见的错误是过早代入数值——先求导，再代入，否则常会算出 0 或错值。' },
      { dt: '常用几何关系', dd: '球体积 $V=\\dfrac43\\pi r^3$；圆锥 $V=\\dfrac13\\pi r^2h$；圆 $A=\\pi r^2$；勾股 $x^2+y^2=c^2$。' },
      { dt: '把锥体化成单变量', dd: '圆锥中若底面半径与高成固定比（如 r/h = 1/3），用相似三角形把 r 换成 h，体积就只剩 h 一个变量。', formula: 'V=\\dfrac13\\pi\\left(\\dfrac{h}{3}\\right)^2h=\\dfrac{\\pi}{27}h^3 \\ \\Rightarrow\\ \\dfrac{dV}{dt}=\\dfrac{\\pi}{9}h^2\\dfrac{dh}{dt}' },
      { dt: '角度随时间变化', dd: '出现 tan θ 关系时用 $\\sec^2\\theta\\cdot\\dfrac{d\\theta}{dt}$；例如 $\\tan\\theta=\\dfrac{h}{x}$。', formula: '\\dfrac{d}{dt}(\\tan\\theta)=\\sec^2\\theta\\,\\dfrac{d\\theta}{dt}' }
    ]
  },
  {
    sec: '3.10', title: '线性近似与微分',
    items: [
      { dt: '线性化', dd: '在点 a 附近，f(x) 非常接近 f(a)；用切线代替曲线得到线性化。', formula: 'L(x)=f(a)+f\'(a)(x-a)' },
      { dt: '微分', dd: '设 y = f(x)，Δx 是自变量的增量，Δy = f(x+Δx) − f(x) 是因变量的真实变化；微分 dy = f′(x)dx 是它的线性近似。', formula: 'dy=f\'(x)\\,dx,\\qquad \\Delta y=f(x+\\Delta x)-f(x)\\approx dy' },
      { dt: '用线性近似估值', dd: '要估计 f(x)，选一个 f(a) 好算的点 a，用 f(x) ≈ f(a) + f′(a)(x−a)。选 a 的原则：f(a) 与 f′(a) 都容易算。', callout: '例：√4.6 取 a = 4 → 2 + ¼(0.6) = 2.15；√8.2 取 a = 9 → 3 + ⅙(−0.8) ≈ 2.87。' },
      { dt: '误差估计', dd: '测量值有误差时，用微分给出最大可能误差；相对误差与百分比误差用来衡量误差大小。', formula: 'dV=V\'(s)\\,ds,\\qquad \\frac{dV}{V}=\\frac{V\'(s)}{V(s)}ds,\\qquad \\text{百分比误差}=\\frac{dV}{V}\\times100\\%' },
      { dt: '相对误差的放大规律', dd: '体积的相对误差约是半径相对误差的 3 倍（$V\\propto r^3$）；流量 $F\\propto R^4$ 时，相对变化约是半径相对变化的 4 倍。', callout: '幂函数 $y=kx^n$ 的相对误差约放大 n 倍——这条规律能直接给出答案，不用逐项算。' }
    ]
  },
  {
    sec: '3.11', title: '双曲函数',
    items: [
      { dt: '定义', dd: '双曲函数由指数函数定义，形式与三角函数对应。', formula: '\\sinh x=\\dfrac{e^x-e^{-x}}{2},\\quad \\cosh x=\\dfrac{e^x+e^{-x}}{2},\\quad \\tanh x=\\dfrac{\\sinh x}{\\cosh x}' },
      { dt: '其余三个', dd: '$\\coth x=\\dfrac{\\cosh x}{\\sinh x}$，$\\sech x=\\dfrac{1}{\\cosh x}$，$\\csch x=\\dfrac{1}{\\sinh x}$。' },
      { dt: '基本恒等式', dd: '与三角函数 $\\sin^2x+\\cos^2x=1$ 对应的是减号版本。', formula: '\\cosh^2 x-\\sinh^2 x=1' },
      { dt: '奇偶性', dd: '$\\sinh(-x)=-\\sinh x$ 是奇函数；$\\cosh(-x)=\\cosh x$ 是偶函数。' },
      { dt: '导数', dd: '与三角函数相反：sinh 的导数是 cosh，cosh 的导数是 sinh；tanh 的导数是 $\\sech^2x$。', formula: '\\dfrac{d}{dx}\\sinh x=\\cosh x,\\quad \\dfrac{d}{dx}\\cosh x=\\sinh x,\\quad \\dfrac{d}{dx}\\tanh x=\\sech^2x=\\dfrac{1}{\\cosh^2x}' },
      { dt: '例：复合求导', dd: '链式法则照常使用，$\\dfrac{d}{dx}\\cosh^2(3x-1)=2\\cosh(3x-1)\\sinh(3x-1)\\cdot3$。' }
    ]
  }
];

/* ---------- 记忆卡 ---------- */
const FLASHCARDS3C = [
  { tag: '3.9', q: '相关速率问题的五步法？', a: '读题（已知/未知）→ 画图 → 设变量 → 写关系式 → 对 t 用链式法则求导 → 代入数值' },
  { tag: '3.9', q: '相关速率最容易犯的错？', a: '过早代入数值——必须先求导，再代入（教材例 3 特别强调）' },
  { tag: '3.9', q: '球体积与半径的速率关系？', a: '$V=\\dfrac43\\pi r^3 \\Rightarrow \\dfrac{dV}{dt}=4\\pi r^2\\dfrac{dr}{dt}$' },
  { tag: '3.9', q: '锥体怎么只留一个变量？', a: '用相似三角形把 r 换成 h：若 r/h = k，则 $V=\\dfrac13\\pi k^2h^3$' },
  { tag: '3.9', q: '角度变化率用哪个公式？', a: '$\\sec^2\\theta\\,\\dfrac{d\\theta}{dt}$（由 $\\tan\\theta$ 求导得到）' },
  { tag: '3.10', q: '线性化公式？', a: '$L(x)=f(a)+f\'(a)(x-a)$' },
  { tag: '3.10', q: '微分的定义？', a: '$dy=f\'(x)\\,dx$，它是 $\\Delta y$ 的线性近似' },
  { tag: '3.10', q: 'Δy 与 dy 的区别？', a: '$\\Delta y=f(x+\\Delta x)-f(x)$ 是真实变化；$dy$ 是用它的一阶项近似，$x$ 越接近 a 越准' },
  { tag: '3.10', q: '怎么用线性近似估 √4.6？', a: '取 a = 4：$2+\\dfrac14(0.6)=2.15$' },
  { tag: '3.10', q: '相对误差怎么算？', a: '$\\dfrac{dV}{V}$；百分比误差 = 相对误差 × 100%' },
  { tag: '3.10', q: '幂函数的相对误差规律？', a: '$y=kx^n$ 时相对误差约放大 n 倍：体积（n=3）是半径的 3 倍，流量（n=4）是半径的 4 倍' },
  { tag: '3.11', q: 'sinh 与 cosh 的定义？', a: '$\\sinh x=\\dfrac{e^x-e^{-x}}{2},\\ \\cosh x=\\dfrac{e^x+e^{-x}}{2}$' },
  { tag: '3.11', q: '双曲函数的核心恒等式？', a: '$\\cosh^2x-\\sinh^2x=1$（注意是减号）' },
  { tag: '3.11', q: 'sinh / cosh 的导数？', a: '$\\dfrac{d}{dx}\\sinh x=\\cosh x$，$\\dfrac{d}{dx}\\cosh x=\\sinh x$（与三角函数正好对调）' },
  { tag: '3.11', q: 'tanh 的导数？', a: '$\\dfrac{d}{dx}\\tanh x=\\sech^2x=\\dfrac{1}{\\cosh^2x}$' }
];

/* ---------- 易错点 ---------- */
const PITFALLS3C = [
  { sec: '3.9', t: '相关速率里过早代入数值', w: '先把 r = 25 代进 $V=\\dfrac43\\pi r^3$ 再求导。', r: '先对 t 求导得到 $\\dfrac{dV}{dt}=4\\pi r^2\\dfrac{dr}{dt}$，最后一步才代 r = 25。', why: '教材例 3 专门警示：提前代入会算出 $\\dfrac{dV}{dt}=0$ 这种明显错误的结果。' },
  { sec: '3.9', t: '只对一个量求导', w: '把 $V=\\dfrac43\\pi r^3$ 看成 $V$ 与 $r$ 的关系式，对 r 求导。', r: 'r 本身也是 t 的函数，要对 t 求导：$\\dfrac{dV}{dt}=\\dfrac{dV}{dr}\\cdot\\dfrac{dr}{dt}$。', why: '相关速率的核心是链式法则，缺了 $\\dfrac{dr}{dt}$ 这一层就答非所问。' },
  { sec: '3.9', t: '锥体问题里 r 与 h 没消掉一个', w: '写 $V=\\dfrac13\\pi r^2h$ 后无法求导，因为有两个未知量。', r: '用相似三角形把 r 换成 h（r = h/3、r = h/2 等），把 V 化成 h 的函数。', why: '教材例 3 就是 $r=\\dfrac h2 \\Rightarrow V=\\dfrac{\\pi}{12}h^3$。' },
  { sec: '3.9', t: '角度的符号与单位', w: '把 $\\dfrac{d\\theta}{dt}$ 写成正数，或用度而不是弧度。', r: '角速度用弧度制，正负号按几何关系判断（例如阴影变长时角度减小）。', why: '课堂望远镜例题中 $\\dfrac{d\\theta}{dt}=0.04$ rad/s，笔记里记的是带负号的版本。' },
  { sec: '3.10', t: '把 dy 当成 Δy', w: '直接写 $\\Delta y=f\'(x)\\Delta x$。', r: '$dy$ 是线性近似，$\\Delta y$ 要真的算出 f(x+Δx) − f(x)；两者只在 Δx 很小时接近。', why: '课堂例题 f(x)=x³+x²−2x+1（2 → 2.05）：dy = 0.7，Δy ≈ 0.72。' },
  { sec: '3.10', t: '线性近似选错 a', w: '直接拿 a = 0 去近似 √4.6。', r: '选 f(a)、f′(a) 都好算的 a：√4.6 取 a = 4，√8.2 取 a = 9。', why: '线性近似的误差与 |x−a| 成正比，a 选得不好答案就不准。' },
  { sec: '3.10', t: '误差题只算绝对误差', w: '只给出 dV 就作答。', r: '题目常同时问绝对误差、相对误差与百分比误差：$\\dfrac{dV}{V}$ 与 $\\dfrac{dV}{V}\\times100\\%$。', why: '教材 3.10 第 33、35 题都要求三项一起给。' },
  { sec: '3.10', t: '相对误差倍数记错', w: '认为体积相对误差等于半径相对误差。', r: '$V\\propto r^3$ 时相对误差放大约 3 倍；$F\\propto R^4$ 时约 4 倍。', why: '课堂泊肃叶定律例题：半径增加 12.5%，流量增加约 50%（4 倍）。' },
  { sec: '3.11', t: '双曲导数记成三角导数', w: '写 $\\dfrac{d}{dx}\\cosh x=\\cosh x$ 或 $\\dfrac{d}{dx}\\sinh x=-\\cosh x$。', r: '$\\dfrac{d}{dx}\\sinh x=\\cosh x$，$\\dfrac{d}{dx}\\cosh x=\\sinh x$，两者正好对调。', why: '用定义展开求导即可验证：$\\dfrac{d}{dx}\\dfrac{e^x-e^{-x}}{2}=\\dfrac{e^x+e^{-x}}{2}$。' },
  { sec: '3.11', t: '恒等式符号写成加号', w: '写 $\\cosh^2x+\\sinh^2x=1$。', r: '是 $\\cosh^2x-\\sinh^2x=1$（对应三角函数的 $\\sin^2+\\cos^2=1$，但这里是减号）。', why: '把 x = 0 代入即可检验：1 − 0 = 1 ✓，若写加号则 1 + 0 = 1 也成立但一般 x 不成立。' }
];

/* ---------- 公式速查表 ---------- */
const SHEET3C = [
  { ch: '3', title: '3.9 相关速率', items: [
    { lab: '球体积', tex: 'V=\\frac43\\pi r^3\\Rightarrow \\frac{dV}{dt}=4\\pi r^2\\frac{dr}{dt}' },
    { lab: '圆锥体积', tex: 'V=\\frac13\\pi r^2h' },
    { lab: '圆锥消元', tex: 'r=kh\\Rightarrow V=\\frac13\\pi k^2h^3' },
    { lab: '勾股', tex: 'x^2+y^2=c^2\\Rightarrow 2x\\frac{dx}{dt}+2y\\frac{dy}{dt}=0' },
    { lab: '距离', tex: 'z^2=x^2+y^2\\Rightarrow \\frac{dz}{dt}=\\frac{x\\frac{dx}{dt}+y\\frac{dy}{dt}}{z}' },
    { lab: '角度', tex: '\\sec^2\\theta\\,\\frac{d\\theta}{dt}=\\frac{d(\\tan\\theta)}{dt}' },
    { lab: '圆面积', tex: 'A=\\pi r^2\\Rightarrow \\frac{dA}{dt}=2\\pi r\\frac{dr}{dt}' },
    { lab: '球面积', tex: 'A=4\\pi r^2\\Rightarrow \\frac{dA}{dt}=8\\pi r\\frac{dr}{dt}' }
  ] },
  { ch: '3', title: '3.10 线性近似与微分', items: [
    { lab: '线性化', tex: 'L(x)=f(a)+f\'(a)(x-a)' },
    { lab: '微分', tex: 'dy=f\'(x)\\,dx' },
    { lab: '真实变化', tex: '\\Delta y=f(x+\\Delta x)-f(x)' },
    { lab: '近似值', tex: 'f(x)\\approx f(a)+f\'(a)(x-a)' },
    { lab: '绝对误差', tex: 'dV=V\'(s)\\,ds' },
    { lab: '相对误差', tex: '\\frac{dV}{V}=\\frac{V\'(s)}{V(s)}\\,ds' },
    { lab: '百分比误差', tex: '\\frac{dV}{V}\\times100\\%' },
    { lab: '幂函数规律', tex: 'y=kx^n\\Rightarrow \\frac{dy}{y}\\approx n\\frac{dx}{x}' },
    { lab: '√ 近似', tex: '\\sqrt x\\approx \\sqrt a+\\frac{x-a}{2\\sqrt a}' }
  ] },
  { ch: '3', title: '3.11 双曲函数', items: [
    { lab: 'sinh', tex: '\\sinh x=\\frac{e^x-e^{-x}}{2}' },
    { lab: 'cosh', tex: '\\cosh x=\\frac{e^x+e^{-x}}{2}' },
    { lab: 'tanh', tex: '\\tanh x=\\frac{\\sinh x}{\\cosh x}' },
    { lab: 'coth', tex: '\\coth x=\\frac{\\cosh x}{\\sinh x}' },
    { lab: 'sech / csch', tex: '\\sech x=\\frac1{\\cosh x},\\ \\csch x=\\frac1{\\sinh x}' },
    { lab: '恒等式', tex: '\\cosh^2x-\\sinh^2x=1' },
    { lab: '导数', tex: '\\frac{d}{dx}\\sinh x=\\cosh x,\\ \\frac{d}{dx}\\cosh x=\\sinh x' },
    { lab: 'tanh 导数', tex: '\\frac{d}{dx}\\tanh x=\\sech^2x' }
  ] }
];

/* ---------- 课堂例题（NotesOnNov03） ---------- */
const PROBLEMS3C = [
  { sec: '3.9', num: '例1', type: '相关速率·球',
    q: '空气以 $100\\ \\text{cm}^3/\\text{s}$ 的速率充入球形气球，当直径为 $50$ cm 时，半径增大得多快？',
    ans: '$\\dfrac{dr}{dt}=\\dfrac{1}{25\\pi}\\approx0.0127\\ \\text{cm/s}$',
    steps: ['$V=\\dfrac43\\pi r^3$；已知 $\\dfrac{dV}{dt}=100$，$r=25$',
            '对 t 求导：$\\dfrac{dV}{dt}=4\\pi r^2\\dfrac{dr}{dt}$',
            '$\\dfrac{dr}{dt}=\\dfrac{100}{4\\pi(25)^2}=\\dfrac{1}{25\\pi}$'] },
  { sec: '3.9', num: '例2', type: '相关速率·距离',
    q: '一只气球在离观察者 $150$ m 处释放，以 $8$ m/s 竖直上升。当气球升到 $50$ m 高时，气球与观察者的距离增大得多快？',
    ans: '$\\dfrac{dD}{dt}=\\dfrac{8}{\\sqrt{10}}\\approx2.53\\ \\text{m/s}$',
    steps: ['$D^2=h^2+150^2$',
            '对 t 求导：$2D\\dfrac{dD}{dt}=2h\\dfrac{dh}{dt}$',
            '$D=\\sqrt{50^2+150^2}=50\\sqrt{10}$，故 $\\dfrac{dD}{dt}=\\dfrac{50\\cdot8}{50\\sqrt{10}}=\\dfrac8{\\sqrt{10}}$'] },
  { sec: '3.9', num: '例3', type: '相关速率·锥形水箱',
    q: '水以 $8\\ \\text{m}^3/\\text{s}$ 注入圆锥形水箱。水箱高 $12$ m、开口半径 $6$ m，当水深 $4$ m 时水面上升得多快？',
    ans: '$\\dfrac{dh}{dt}=\\dfrac{2}{\\pi}\\approx0.64\\ \\text{m/s}$',
    steps: ['相似三角形：$\\dfrac rh=\\dfrac6{12}=\\dfrac12$，即 $r=\\dfrac h2$',
            '$V=\\dfrac13\\pi r^2h=\\dfrac13\\pi\\dfrac{h^2}{4}h=\\dfrac{\\pi}{12}h^3$',
            '对 t 求导：$\\dfrac{dV}{dt}=\\dfrac{\\pi}{4}h^2\\dfrac{dh}{dt}$',
            '代入 $h=4$：$8=4\\pi\\dfrac{dh}{dt}$，得 $\\dfrac{dh}{dt}=\\dfrac2\\pi$'] },
  { sec: '3.9', num: '例4', type: '相关速率·两飞机',
    q: '一架飞机以 $320$ km/h 向北飞过某镇，另一架以 $300$ km/h 向东飞，在 15 分钟后从同一镇上方飞过。两机同高。下午 1:15 时两机分离的速度是多少？',
    ans: '$436$ km/h',
    steps: ['以中午为 t = 0：下午 1:15 时 t = 1.25 h',
            '北向距离 $x=320(1.25)=400$ km；东向距离 $y=300(1.25-0.25)=300$ km',
            '$z^2=x^2+y^2 \\Rightarrow z=500$ km',
            '$\\dfrac{dz}{dt}=\\dfrac{x\\dfrac{dx}{dt}+y\\dfrac{dy}{dt}}{z}=\\dfrac{400\\cdot320+300\\cdot300}{500}=436$ km/h'] },
  { sec: '3.9', num: '例5', type: '相关速率·角度',
    q: '一位女士站在悬崖上用望远镜观察一艘正驶向正下方岸边的小船。望远镜高 $100$ m，小船以 $8$ m/s 靠近。当小船离岸 $100$ m 时，望远镜的仰角变化率是多少？',
    ans: '$\\left|\\dfrac{d\\theta}{dt}\\right|=0.04$ rad/s',
    steps: ['设小船离岸的水平距离为 x，$\\tan\\theta=\\dfrac{100}{x}$',
            '对 t 求导：$\\sec^2\\theta\\dfrac{d\\theta}{dt}=-\\dfrac{100}{x^2}\\dfrac{dx}{dt}$',
            '当 $x=100$ 时 $\\tan\\theta=1 \\Rightarrow \\sec^2\\theta=2$，且 $\\dfrac{dx}{dt}=-8$',
            '$\\dfrac{d\\theta}{dt}=\\dfrac{800/10000}{2}=0.04$ rad/s（若 θ 从竖直方向量则为负）'] },
  { sec: '3.9', num: '例6', type: '相关速率·阴影',
    q: '太阳落到一栋 $40$ 米高的楼房后面，房子的影子在变长。当太阳光线与地面成 $45°$ 时，影子增长得多快？',
    ans: '$\\dfrac{dx}{dt}=-40\\csc^2\\theta\\,\\dfrac{d\\theta}{dt}$（$\\theta=45°$ 时为 $-80\\dfrac{d\\theta}{dt}$）',
    steps: ['设影长 x、光线与地面夹角 θ，则 $\\tan\\theta=\\dfrac{40}{x}$，即 $x=40\\cot\\theta$',
            '对 t 求导：$\\dfrac{dx}{dt}=-40\\csc^2\\theta\\dfrac{d\\theta}{dt}$',
            '当 $\\theta=45°$ 时 $\\csc^2 45°=2$，故 $\\dfrac{dx}{dt}=-80\\dfrac{d\\theta}{dt}$'],
    note: '课堂笔记里这题只写到关系式，没有给出太阳角速度的数值，答案请对照课堂笔记或书页核对。' },

  { sec: '3.10', num: '例1', type: '线性近似',
    q: '求 $\\sqrt{4.6}$ 与 $\\sqrt{8.2}$ 的近似值。', ans: '$\\sqrt{4.6}\\approx2.15$，$\\sqrt{8.2}\\approx2.87$',
    steps: ['f(x) = √x 在 a = 4 处：L(x) = 2 + ¼(x−4)，故 √4.6 ≈ 2 + ¼(0.6) = 2.15',
            '在 a = 9 处：L(x) = 3 + ⅙(x−9)，故 √8.2 ≈ 3 + ⅙(−0.8) ≈ 2.87'] },
  { sec: '3.10', num: '例2', type: '微分与真实变化',
    q: '若 $f(x)=x^3+x^2-2x+1$，x 由 2 变到 2.05，求 $\\Delta y$ 与 $dy$。',
    ans: '$dy=0.7$，$\\Delta y\\approx0.72$',
    steps: ['$dx=0.05$，$f\'(x)=3x^2+2x-2$',
            '$dy=f\'(2)\\,dx=(12+4-2)(0.05)=14(0.05)=0.7$',
            '$\\Delta y=f(2.05)-f(2)=9.717625-9=0.717625\\approx0.72$'] },
  { sec: '3.10', num: '例3', type: '误差估计',
    q: '肥皂泡半径由 $3$ cm 增加到 $3.025$ cm，估计表面积的增加量。', ans: '$dA\\approx1.88\\ \\text{cm}^2$',
    steps: ['$A=4\\pi r^2$，$dr=0.025$', '$dA=8\\pi r\\,dr=8\\pi(3)(0.025)=0.6\\pi\\approx1.88$ cm²'] },
  { sec: '3.10', num: '例4', type: '误差估计',
    q: '立方体棱长测得 $11.4$ cm，可能误差 $\\pm0.05$ cm。求体积并估计体积的可能误差。',
    ans: '$V=11.4^3\\approx1481.5\\ \\text{cm}^3$，$dV=3(11.4)^2(0.05)\\approx19.5\\ \\text{cm}^3$',
    steps: ['$V=L^3=11.4^3=1481.544$ cm³',
            '$dV=3L^2\\,dL=3(11.4)^2(0.05)=19.494$ cm³'] },
  { sec: '3.10', num: '例5', type: '幂函数·相对变化',
    q: '泊肃叶定律：血流速度 $V=kR^4$。要使血流量增加 50%，半径需增加多少？',
    ans: '$12.5\\%$',
    steps: ['$\\dfrac{dV}{V}=4\\dfrac{dR}{R}$，即相对变化放大约 4 倍',
            '$\\dfrac{dV}{V}=0.5 \\Rightarrow \\dfrac{dR}{R}=0.125=12.5\\%$'] },

  { sec: '3.11', num: '例1', type: '双曲函数求导',
    q: '求 $D_x\\cosh^2(3x-1)$。', ans: '$6\\cosh(3x-1)\\sinh(3x-1)$',
    steps: ['写成 $(\\cosh(3x-1))^2$',
            '$=2\\cosh(3x-1)\\cdot\\sinh(3x-1)\\cdot3$'] },
  { sec: '3.11', num: '例2', type: '双曲函数定义',
    q: '写出 $\\sinh x$、$\\cosh x$、$\\tanh x$ 的定义，并验证 $\\cosh^2x-\\sinh^2x=1$。',
    ans: '恒等式成立',
    steps: ['$\\sinh x=\\dfrac{e^x-e^{-x}}{2}$，$\\cosh x=\\dfrac{e^x+e^{-x}}{2}$',
            '$\\cosh^2x-\\sinh^2x=\\dfrac{(e^x+e^{-x})^2-(e^x-e^{-x})^2}{4}=\\dfrac{4}{4}=1$'] }
];

/* ---------- 教材作业题库（3.9–3.11） ---------- */
const HW3C = [
  { sec: '3.9', num: 3, page: 249, type: '相关速率',
    q: '正方形各边以 $6$ cm/s 的速率增大，当正方形面积为 $16\\ \\text{cm}^2$ 时，面积的增大速率是多少？',
    en: 'Each side of a square is increasing at a rate of 6 cm/s. At what rate is the area of the square increasing when the area of the square is 16 cm²?',
    ans: '$48\\ \\text{cm}^2/\\text{s}$',
    steps: ['设边长 s：$A=s^2$', '对 t 求导：$\\dfrac{dA}{dt}=2s\\dfrac{ds}{dt}$',
            '面积为 16 时 $s=4$：$\\dfrac{dA}{dt}=2\\cdot4\\cdot6=48$ cm²/s'] },
  { sec: '3.9', num: 5, page: 249, type: '相关速率',
    q: '半径为 $5$ m 的圆柱形水箱以 $3\\ \\text{m}^3/\\text{min}$ 注水，水面上升得多快？',
    en: 'A cylindrical tank with radius 5 m is being filled with water at a rate of 3 m³/min. How fast is the height of the water increasing?',
    ans: '$\\dfrac{3}{25\\pi}$ m/min（约 $0.038$ m/min）',
    steps: ['$V=\\pi r^2h$，半径为常数 $r=5$', '对 t 求导：$\\dfrac{dV}{dt}=25\\pi\\dfrac{dh}{dt}$',
            '$\\dfrac{dh}{dt}=\\dfrac{3}{25\\pi}$ m/min'] },
  { sec: '3.9', num: 17, page: 249, type: '相关速率',
    q: '两辆车从同一点出发，一辆以 $60$ mi/h 向南，另一辆以 $25$ mi/h 向西。两小时后两车距离的增加速率是多少？',
    en: 'Two cars start moving from the same point. One travels south at 60 mi/h and the other travels west at 25 mi/h. At what rate is the distance between the cars increasing two hours later?',
    ans: '$65$ mi/h',
    steps: ['两小时后：南行 $x=120$ mi，西行 $y=50$ mi', '$z^2=x^2+y^2 \\Rightarrow z=130$ mi',
            '$\\dfrac{dz}{dt}=\\dfrac{x\\dfrac{dx}{dt}+y\\dfrac{dy}{dt}}{z}=\\dfrac{120\\cdot60+50\\cdot25}{130}=65$ mi/h'] },
  { sec: '3.9', num: 22, page: 249, type: '相关速率',
    q: '一艘船被绕过船坞滑轮的绳索拉入船坞，滑轮比船头高 $1$ m。绳索以 $1$ m/s 收回，当船离船坞 $8$ m 时，船靠近船坞的速度是多少？',
    en: 'A boat is pulled into a dock by a rope attached to the bow of the boat and passing through a pulley on the dock that is 1 m higher than the bow. If the rope is pulled in at 1 m/s, how fast is the boat approaching the dock when it is 8 m from the dock?',
    ans: '约 $1.01$ m/s（靠近）',
    steps: ['设船离坞距离 x、绳长 s：$x^2+1=s^2$，且 $\\dfrac{ds}{dt}=-1$',
            '对 t 求导：$2x\\dfrac{dx}{dt}=2s\\dfrac{ds}{dt}$',
            '$x=8$ 时 $s=\\sqrt{65}$，故 $\\dfrac{dx}{dt}=-\\dfrac{\\sqrt{65}}8\\approx-1.008$，即以约 1.01 m/s 靠近'] },
  { sec: '3.9', num: 25, page: 249, type: '相关速率',
    q: '倒置的圆锥形水箱（高 $6$ m、顶面直径 $4$ m）一边以 $10000\\ \\text{cm}^3/\\text{min}$ 漏水，一边以恒定速率抽水注入。当水深为 $2$ m 且水面以 $20$ cm/min 上升时，注水速率是多少？',
    en: 'Water is leaking out of an inverted conical tank at a rate of 10,000 cm³/min at the same time that water is being pumped in at a constant rate. The tank has height 6 m and the diameter at the top is 4 m. If the water level is rising at a rate of 20 cm/min when the height of the water is 2 m, find the rate at which water is being pumped into the tank.',
    ans: '$10000+\\dfrac{80\\pi}{9}\\approx10028\\ \\text{cm}^3/\\text{min}$（约 $10.03$ L/min）',
    steps: ['相似三角形：$\\dfrac rh=\\dfrac{2}{6}=\\dfrac13$，即 $r=\\dfrac h3$',
            '$V=\\dfrac13\\pi r^2h=\\dfrac{\\pi}{27}h^3 \\Rightarrow \\dfrac{dV}{dt}=\\dfrac{\\pi}{9}h^2\\dfrac{dh}{dt}$',
            '当 $h=2$、$\\dfrac{dh}{dt}=20$：$\\dfrac{dV}{dt}=\\dfrac{\\pi}{9}\\cdot4\\cdot20=\\dfrac{80\\pi}{9}$ cm³/min（这是水面上升带走的体积）',
            '注水速率 = 漏水速率 + 水面上升速率 $=10000+\\dfrac{80\\pi}{9}$ cm³/min'] },
  { sec: '3.9', num: 32, page: 249, type: '相关速率·角度',
    q: '在教材例 2（10 英尺长的梯子靠在墙上，底端以 $1$ ft/s 滑离墙）中，当梯子底端离墙 $6$ ft 时，梯子与地面的夹角变化率是多少？',
    en: 'How fast is the angle between the ladder and the ground changing in Example 2 when the bottom of the ladder is 6 ft from the wall?',
    ans: '$0.125$ rad/s（角度在减小）',
    steps: ['例 2：$x^2+y^2=100$，$\\dfrac{dx}{dt}=1$，$x=6 \\Rightarrow y=8$，$\\dfrac{dy}{dt}=-\\dfrac{2xy\'}{y}=-\\dfrac34$ ft/s',
            '设 θ 为梯子与地面的夹角，$\\tan\\theta=\\dfrac yx$',
            '$\\dfrac{d\\theta}{dt}=\\dfrac{x\\dfrac{dy}{dt}-y\\dfrac{dx}{dt}}{x^2+y^2}=\\dfrac{6(-0.75)-8(1)}{100}=-0.125$ rad/s'],
    note: '课堂笔记在这一题旁记的答案是 0.25 rad/s，与本题数据推出来的 0.125 不一致，请对照课堂笔记核对（可能对应另一组数据）。' },
  { sec: '3.9', num: 45, page: 249, type: '相关速率·角度',
    q: '一架飞机在 $5$ km 高度水平飞行，从地面上的跟踪望远镜正上方经过。当仰角为 $\\pi/3$ 且该角度以 $\\pi/6$ rad/min 的速率减小时，飞机速度是多少？',
    en: 'A plane lies horizontally at an altitude of 5 km and passes directly over a tracking telescope on the ground. When the angle of elevation is π/3, this angle is decreasing at a rate of π/6 rad/min. How fast is the plane traveling at that time?',
    ans: '$\\dfrac{10\\pi}{9}$ km/min（约 $3.49$ km/min）',
    steps: ['设水平距离 x：$\\tan\\theta=\\dfrac{5}{x}$，即 $x=5\\cot\\theta$',
            '对 t 求导：$\\dfrac{dx}{dt}=-5\\dfrac{\\sec^2\\theta}{\\tan^2\\theta}\\dfrac{d\\theta}{dt}$',
            '$\\theta=\\pi/3$：$\\sec^2=4$，$\\tan^2=3$，$\\dfrac{d\\theta}{dt}=-\\dfrac{\\pi}{6}$',
            '$\\dfrac{dx}{dt}=-5\\cdot\\dfrac43\\cdot\\left(-\\dfrac{\\pi}{6}\\right)=\\dfrac{10\\pi}{9}$ km/min'] },

  { sec: '3.10', num: 19, page: 256, type: '微分',
    q: '当 $x=3$、$\\Delta x=0.5$ 时，求 $y=x^2+4x$ 的 $\\Delta y$ 与 $dy$。',
    en: 'Compute Δy and dy for y = x² + 4x when x = 3 and Δx = 0.5.',
    ans: '$\\Delta y=5.25$，$dy=5$',
    steps: ['$f(3)=9+12=21$，$f(3.5)=12.25+14=26.25 \\Rightarrow \\Delta y=5.25$',
            '$f\'(x)=2x+4$，故 $dy=f\'(3)(0.5)=10(0.5)=5$'] },
  { sec: '3.10', num: 25, page: 256, type: '线性近似',
    q: '用线性近似估计 $\\sqrt{3.1001}$。',
    en: 'Use a linear approximation to estimate √3.1001.',
    ans: '约 $1.7607$',
    steps: ['取 $a=3.1$：$f(a)=\\sqrt{3.1}\\approx1.760682$，$f\'(3.1)=\\dfrac{1}{2\\sqrt{3.1}}\\approx0.283986$',
            '$\\sqrt{3.1001}\\approx1.760682+0.283986\\times0.0001\\approx1.76071$'] },
  { sec: '3.10', num: 33, page: 256, type: '误差估计',
    q: '立方体棱长测得 $30$ cm，测量误差 $0.1$ cm。用微分估计计算 (a) 体积、(b) 表面积时的最大可能误差、相对误差与百分比误差。',
    en: 'The edge of a cube was found to be 30 cm with a possible error in measurement of 0.1 cm. Use differentials to estimate the maximum possible error, relative error, and percentage error in computing (a) the volume of the cube and (b) the surface area of the cube.',
    ans: '(a) $dV=270$ cm³，相对误差 $1\\%$；(b) $dA=36$ cm²，相对误差约 $0.67\\%$',
    steps: ['(a) $V=s^3=27000$ cm³，$dV=3s^2ds=3(30)^2(0.1)=270$ cm³；相对误差 $270/27000=1\\%$',
            '(b) $A=6s^2=5400$ cm²，$dA=12s\\,ds=12(30)(0.1)=36$ cm²；相对误差 $36/5400\\approx0.667\\%$'] },
  { sec: '3.10', num: 35, page: 256, type: '误差估计',
    q: '球的周长测得 $84$ cm，可能误差 $0.5$ cm。用微分估计 (a) 表面积、(b) 体积的最大误差与相对误差。',
    en: 'The circumference of a sphere was measured to be 84 cm with a possible error of 0.5 cm. (a) Use differentials to estimate the maximum error in the calculated surface area. What is the relative error? (b) Use differentials to estimate the maximum error in the calculated volume. What is the relative error?',
    ans: '(a) $dA=\\dfrac{84}{\\pi}\\approx26.7$ cm²，相对误差 $\\approx1.19\\%$；(b) $dV=\\dfrac{1764}{\\pi^2}\\approx178.7$ cm³，相对误差 $\\approx1.79\\%$',
    steps: ['$2\\pi r=84 \\Rightarrow r=\\dfrac{42}{\\pi}$；$2\\pi\\,dr=0.5 \\Rightarrow dr=\\dfrac{0.25}{\\pi}$',
            '(a) $A=4\\pi r^2$，$dA=8\\pi r\\,dr=\\dfrac{84}{\\pi}$；相对误差 $=2\\dfrac{dr}{r}=\\dfrac1{84}\\approx1.19\\%$',
            '(b) $V=\\dfrac43\\pi r^3$，$dV=4\\pi r^2dr=\\dfrac{1764}{\\pi^2}$；相对误差 $=3\\dfrac{dr}{r}=\\dfrac1{56}\\approx1.79\\%$'] },
  { sec: '3.10', num: 40, page: 256, type: '幂函数·相对变化',
    q: '血流速度 $F=kR^4$。证明 $F$ 的相对变化约为 $R$ 相对变化的 4 倍；并说明半径增加 5% 时血流如何变化。',
    en: 'When blood flows along a blood vessel, the flux F is proportional to the fourth power of the radius R: F = kR⁴. Show that the relative change in F is about four times the relative change in R. How will a 5% increase in the radius affect the flow of blood?',
    ans: '相对变化约为 4 倍；半径增加 5% 时流量约增加 $20\\%$',
    steps: ['$F=kR^4 \\Rightarrow dF=4kR^3dR$',
            '$\\dfrac{dF}{F}=\\dfrac{4kR^3dR}{kR^4}=4\\dfrac{dR}{R}$，即 4 倍关系',
            '半径增 5%：$\\dfrac{dF}{F}\\approx4\\times5\\%=20\\%$'] },

  { sec: '3.11', num: 24, page: 264, type: '证明',
    q: '(a) 用定义证明 $\\dfrac{d}{dx}\\cosh x=\\sinh x$。',
    en: 'Prove the formula d/dx(cosh x) = sinh x by using the definitions of the hyperbolic functions.',
    ans: '$\\dfrac{d}{dx}\\cosh x=\\sinh x$',
    steps: ['$\\cosh x=\\dfrac{e^x+e^{-x}}{2}$',
            '$\\dfrac{d}{dx}\\cosh x=\\dfrac{e^x-e^{-x}}{2}=\\sinh x$'] },
  { sec: '3.11', num: 31, page: 264, type: '求导',
    q: '求 $f(x)=\\tanh(\\sin x)$ 的导数。',
    en: 'Find the derivative of f(x) = tanh(sin x).',
    ans: '$f\'(x)=\\sech^2(\\sin x)\\cos x$',
    steps: ['链式法则：$f\'(x)=\\dfrac{d}{d(\\sin x)}\\tanh u\\cdot\\dfrac{d}{dx}(\\sin x)$',
            '$=\\sech^2(\\sin x)\\cdot\\cos x$'] },
  { sec: '3.11', num: 33, page: 264, type: '求导',
    q: '求 $h(x)=\\sinh(x^2)$ 的导数。',
    en: 'Find the derivative of h(x) = sinh(x²).',
    ans: '$h\'(x)=2x\\cosh(x^2)$',
    steps: ['链式法则：$h\'(x)=\\cosh(x^2)\\cdot2x$'] },
  { sec: '3.11', num: 35, page: 264, type: '求导',
    q: '求 $G(t)=\\sinh(\\ln t)$ 的导数。',
    en: 'Find the derivative of G(t) = sinh(ln t).',
    ans: '$G\'(t)=\\dfrac{\\cosh(\\ln t)}{t}$',
    steps: ['链式法则：$G\'(t)=\\cosh(\\ln t)\\cdot\\dfrac1t$'] },
  { sec: '3.11', num: 37, page: 264, type: '求导',
    q: '求 $y=e^{\\cosh 3x}$ 的导数。',
    en: 'Find the derivative of y = e^(cosh 3x).',
    ans: '$y\'=3\\sinh(3x)\\,e^{\\cosh 3x}$',
    steps: ['外层 $e^{\\cdot}$ 的导数是它本身：$y\'=e^{\\cosh 3x}\\cdot\\dfrac{d}{dx}(\\cosh 3x)$',
            '$=e^{\\cosh 3x}\\cdot\\sinh(3x)\\cdot3$'] }
];
