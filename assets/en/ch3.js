/* ============================================================
   Chapter 3 content layer (English)
   Source: lecture notes NotesOnOct22 (3.1–3.2) and NotesOnOct27 (3.3–3.5)
   Includes the exam sprint plan.
   ============================================================ */

const SECTIONS3 = [
  { id: '3.1', name: 'Derivatives of Polynomials and Exponential Functions', cn: '多项式与指数函数求导', en: 'Polynomials & Exponentials', hw: [3,5,7,11,13,17,19,21,23,25,29,31,33,35,37,49,55,57,59,65,75], weight: 3, tags: ['Fundamentals', 'Power rule'] },
  { id: '3.2', name: 'Product and Quotient Rules', cn: '积法则与商法则', en: 'Product & Quotient Rules', hw: [1,3,5,7,9,11,13,15,17,19,21,23,25,31,43,45,47,49,55], weight: 3, tags: ['Must know', 'Easy to miss factors'] },
  { id: '3.3', name: 'Derivatives of Trigonometric Functions', cn: '三角函数求导', en: 'Trigonometric Functions', hw: [1,3,5,7,9,11,13,15,17,18,19,20,23,33,35,39,41,43,45,51,57], weight: 5, tags: ['High weight', 'Most problem types'] },
  { id: '3.4', name: 'The Chain Rule', cn: '链式法则', en: 'The Chain Rule', hw: [7,9,11,13,15,17,25,27,29,31,43,51,53,61,71,73,79,81], weight: 5, tags: ['High weight', 'Heavy computation'] },
  { id: '3.5', name: 'Implicit Differentiation', cn: '隐函数求导', en: 'Implicit Differentiation', hw: [], weight: 3, tags: ['New material', 'Exercise list to confirm'] }
];

const SCOPE_CARDS3 = {
  '3.1': {
    desc: 'The power rule, constant multiples, sums and differences, plus the definition of e and d/dx eˣ = eˣ. This section is the foundation everything else is built on.',
    must: ['d/dx xⁿ = n xⁿ⁻¹ (n real, x > 0)', 'd/dx eˣ = eˣ', 'Horizontal tangents: solve f′(a) = 0', 'Velocity and acceleration: s′ and s″']
  },
  '3.2': {
    desc: 'The product and quotient rules — the parts used by composite and implicit differentiation. Most lost points come from forgetting a factor here.',
    must: ['d/dx(uv) = u v′ + v u′', 'd/dx(u/v) = (v u′ − u v′)/v²', 'Combining product/quoted rules with the power rule']
  },
  '3.3': {
    desc: 'Two special trigonometric limits and the four derivative formulas for trigonometric functions. The heaviest computation section, and the easiest one to wreck by forgetting radians.',
    must: ['lim_{t→0} sin t/t = 1 and lim_{t→0} (1−cos t)/t = 0', 'd/dx sin x = cos x and d/dx cos x = −sin x', 'tan → sec²x, cot → −csc²x, sec → sec x tan x, csc → −csc x cot x', 'All trig formulas assume radians']
  },
  '3.4': {
    desc: 'The chain rule: peeling a composite function apart one layer at a time. Almost every long calculation in the exam runs through it.',
    must: ['(f∘g)′(x) = f′(g(x))·g′(x)', 'dy/dx = dy/du · du/dx', 'Multiply once per layer', 'Exponentials: d/dx aˣ = aˣ ln a']
  },
  '3.5': {
    desc: 'Implicit differentiation: differentiate both sides with respect to x, treating y as a function of x, then solve for y′.',
    must: ['When differentiating in x, y is a function of x', 'The algebra that isolates y′', 'Using y′ for tangent lines and horizontal tangents']
  }
};

const CONCEPTS3 = [
  {
    sec: '3.1', title: 'Polynomials and Exponential Functions',
    items: [
      { dt: 'Power rule', dd: 'The backbone of every rule; for real n it holds on x > 0.', formula: '\\frac{d}{dx}c=0,\\quad \\frac{d}{dx}x=1,\\quad \\frac{d}{dx}x^n=nx^{n-1}\\ (n\\in\\mathbb{R})' },
      { dt: 'Constant multiples and sums', dd: 'D_x[kf(x)] = k D_x f(x), D_x[f(x) ± g(x)] = D_x f(x) ± D_x g(x).' },
      { dt: 'Class examples', dd: '$y=5x^2+7x-6 \\Rightarrow y\'=10x+7$; $y=4x^6-3x^5-10x^2+5x+16 \\Rightarrow y\'=24x^5-15x^4-20x+5$.' },
      { dt: 'Example: rewrite as powers', dd: '$y=\\dfrac{x^2+1}{x}=x+x^{-1} \\Rightarrow y\'=1-x^{-2}$; $y=\\dfrac{x+1}{\\sqrt x}=x^{1/2}+x^{-1/2} \\Rightarrow y\'=\\dfrac{x-1}{2x^{3/2}}$.', callout: 'Whenever you see a radical, convert to a power: $\\sqrt x=x^{1/2}$, $1/x=x^{-1}$.' },
      { dt: 'Horizontal tangents', dd: 'A horizontal tangent means slope $0$, i.e. $f\'(a)=0$.', formula: 'y=x^4-6x^2+4:\\ f\'=4x^3-12x=0 \\Rightarrow x=0,\\pm\\sqrt3\\ \\Rightarrow (0,4),\\ (\\pm\\sqrt3,-5)' },
      { dt: 'Motion: velocity and acceleration', dd: '$s\'(t)$ is the velocity, $s\'\'(t)$ the acceleration.', formula: 's=2t^3-5t^2+3t+4 \\Rightarrow s\'=6t^2-10t+3,\\ s\'\'=12t-10,\\ s\'\'(2)=14\\ \\text{cm/s}^2' },
      { dt: 'Definition of e and the derivative of eˣ', dd: '$e$ is the number for which $\\lim_{h\\to0}\\dfrac{e^h-1}{h}=1$; this gives $d/dx\\,e^x=e^x$.', formula: '\\frac{d}{dx}e^x=e^x' },
      { dt: 'Example: parallel tangents', dd: 'Where is the tangent to $y=e^x$ parallel to $y=2x$? From $e^a=2$ we get $a=\\ln2$, so the point is $(\\ln2, 2)$.' }
    ]
  },
  {
    sec: '3.2', title: 'Product and Quotient Rules',
    items: [
      { dt: 'Product rule', dd: 'If u and v are differentiable then (uv)′ = u v′ + v u′ (not u′v′).', formula: '\\frac{d}{dx}(uv)=u\\frac{dv}{dx}+v\\frac{du}{dx}' },
      { dt: 'Class example', dd: '$y=(3x^2-5)(2x^4-x) \\Rightarrow y\'=6x(2x^4-x)+(3x^2-5)(8x^3-1)=36x^5-40x^3-9x^2+5$ (check by expanding).' },
      { dt: 'Example: exponential times polynomial', dd: '$f(x)=xe^x \\Rightarrow f\'(x)=(1+x)e^x$, and $f^{(n)}(x)=(n+x)e^x$.' },
      { dt: 'Example: known values', dd: '$f(x)=\\sqrt x\\,g(x)$ with $g(4)=2$, $g\'(4)=3$: $f\'(4)=\\dfrac{g(4)}{2\\sqrt4}+\\sqrt4\\,g\'(4)=\\dfrac12+6=\\dfrac{13}{2}$.' },
      { dt: 'Quotient rule', dd: 'If u and v are differentiable with v(x)≠0 then (u/v)′ = (v u′ − u v′)/v².', formula: "\\frac{d}{dx}\\frac{u}{v}=\\frac{v\\frac{du}{dx}-u\\frac{dv}{dx}}{v^2}" },
      { dt: 'Class example', dd: '$y=\\dfrac{3x-5}{x^2+7} \\Rightarrow y\'=\\dfrac{3(x^2+7)-(3x-5)(2x)}{(x^2+7)^2}$.' },
      { dt: 'Example: tangent line', dd: '$y=\\dfrac{e^x}{1+x^2}$ at $(1, e/2)$: $y\'=\\dfrac{e^x(1+x^2-2x)}{(1+x^2)^2}=\\dfrac{e^x(x-1)^2}{(1+x^2)^2}$, which is $0$ at $x=1$, so the tangent is horizontal: $y=\\dfrac e2$.' }
    ]
  },
  {
    sec: '3.3', title: 'Trigonometric Functions',
    items: [
      { dt: 'Two special trigonometric limits', dd: 'The base of every trigonometric limit:', formula: '\\lim_{t\\to0}\\frac{\\sin t}{t}=1,\\qquad \\lim_{t\\to0}\\frac{1-\\cos t}{t}=0' },
      { dt: 'How they are proved', dd: 'Area comparison $\\sin\\theta<\\theta<\\tan\\theta$ (for $0<\\theta<\\tfrac\\pi2$) plus the squeeze theorem; $\\cos t$ is an even function.', callout: 'sin t/t is an even function (extended at t = 0 with value 1), so the two one-sided limits agree.' },
      { dt: 'Class examples', dd: '$\\lim_{x\\to0}\\dfrac{\\sin3x}{x}=3$ (let $u=3x$); $\\lim_{t\\to0}\\dfrac{1-\\cos t}{\\sin t}=0$; $\\lim_{x\\to0}\\dfrac{\\sin4x}{\\tan x}=4$.' },
      { dt: 'Derivatives of sin and cos', dd: '', formula: '\\frac{d}{dx}\\sin x=\\cos x,\\qquad \\frac{d}{dx}\\cos x=-\\sin x' },
      { dt: 'Example: combination', dd: '$\\dfrac{d}{dx}(3\\sin x-2\\cos x)=3\\cos x+2\\sin x$.' },
      { dt: 'Example: tangent line', dd: '$y=3\\sin x$ at $(\\pi,0)$: slope $=3\\cos\\pi=-3$, tangent $y=-3(x-\\pi)$, i.e. $y=-3x+3\\pi$.' },
      { dt: 'Example: product rule', dd: '$\\dfrac{d}{dx}(x^2\\sin x)=2x\\sin x+x^2\\cos x$; $\\dfrac{d}{dx}\\dfrac{1+\\sin x}{\\cos x}=\\dfrac{1+\\sin x}{\\cos^2x}$.' },
      { dt: 'The other four functions', dd: '', formula: '\\frac{d}{dx}\\tan x=\\sec^2x,\\quad \\frac{d}{dx}\\cot x=-\\csc^2x,\\quad \\frac{d}{dx}\\sec x=\\sec x\\tan x,\\quad \\frac{d}{dx}\\csc x=-\\csc x\\cot x' },
      { dt: 'Examples: tangents', dd: '$y=\\tan x$ at $(\\tfrac\\pi4,1)$: slope $=\\sec^2\\tfrac\\pi4=2$, tangent $y-1=2(x-\\tfrac\\pi4)$. Horizontal tangents of $y=\\sin^2x$: $y\'=2\\sin x\\cos x=\\sin2x=0 \\Rightarrow x=\\dfrac{k\\pi}{2}$.' },
      { dt: 'Example: application (spring)', dd: 'A spring stretched 4 cm is released, $s(t)=4\\cos t$: $v(t)=-4\\sin t$, $a(t)=-4\\cos t$; at $t=0$ the displacement is maximal, velocity $0$, acceleration $-4$, and the motion has period $2\\pi$.' }
    ]
  },
  {
    sec: '3.4', title: 'The Chain Rule',
    items: [
      { dt: 'The chain rule', dd: 'If g is differentiable at x and f is differentiable at u = g(x), then f∘g is differentiable at x.', formula: '(f\\circ g)\'(x)=f\'(g(x))\\cdot g\'(x)\\qquad \\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx}' },
      { dt: 'Class examples', dd: '$\\dfrac{d}{dx}(x^2+2x)^3=3(x^2+2x)^2(2x+2)$; $y=(2x^2-4x+1)^{60} \\Rightarrow y\'=60(2x^2-4x+1)^{59}(4x-4)$.' },
      { dt: 'Example: quotient plus chain', dd: '$y=\\dfrac{3\\sqrt{2x^5}-7}{(x^4+3)^{13}}$: quotient rule first, then the chain rule on numerator and denominator separately ($\\sqrt{2x^5}=(2x^5)^{1/2}$).' },
      { dt: 'Example: composite of composite', dd: '$y=\\sin^2x \\Rightarrow y\'=2\\sin x\\cos x$; $\\dfrac{d}{dx}\\sin^3(4x)=3\\sin^2(4x)\\cos(4x)\\cdot4=12\\sin^2(4x)\\cos(4x)$; $\\dfrac{d}{dx}\\sin[\\cos(x^2)]=-2x\\sin(x^2)\\cos[\\cos(x^2)]$.' },
      { dt: 'Example: outer function', dd: '$F(y)=y\\sin(y^2) \\Rightarrow F\'(y)=\\sin(y^2)+2y^2\\cos(y^2)$; $D_xF(x^3)=F\'(x^3)\\cdot3x^2$; $D_x[F(x)]^3=3[F(x)]^2F\'(x)$.' },
      { dt: 'Example: simplify first', dd: '$\\dfrac{d}{dx}\\dfrac{x^2(1+x)^3}{1+x}=\\dfrac{d}{dx}\\big[x^2(1+x)^2\\big]=2x(1+x)^2+2x^2(1+x)=2x(1+x)(1+2x)$.' },
      { dt: 'Example: exponential and trig', dd: '$\\dfrac{d}{dx}e^{\\sin x}=e^{\\sin x}\\cos x$; $\\dfrac{d}{dx}a^x=a^x\\ln a$ (a>0, a≠1); $\\dfrac{d}{dx}2\\sec^2x=4\\sec^2x\\tan x$.' }
    ]
  },
  {
    sec: '3.5', title: 'Implicit Differentiation',
    items: [
      { dt: 'Implicit functions', dd: 'The equation $y^3+7y=x^3$ defines y as a function of x without solving for y explicitly.' },
      { dt: 'Procedure', dd: '① Differentiate both sides with respect to x; ② treat y as a function of x (so y′ appears); ③ solve for y′; ④ use it for a tangent line or a horizontal tangent.', formula: 'y^3+7y=x^3 \\Rightarrow 3y^2y\'+7y\'=3x^2 \\Rightarrow y\'=\\frac{3x^2}{3y^2+7}' },
      { dt: 'Example: tangent line', dd: '$4x^2y-3y=x^3$ at $(1,1)$: $8xy+(4x^2-3)y\'=3x^2 \\Rightarrow y\'=\\dfrac{3x^2-8xy}{4x^2-3}$, which is $-5$ at $(1,1)$, so the tangent is $y-1=-5(x-1)$, i.e. $y=-5x+6$.' },
      { dt: 'Example: horizontal tangent', dd: '$x^3+y^3=6xy$ in the first quadrant: $y\'=0 \\Rightarrow 6y-3x^2=0 \\Rightarrow y=\\dfrac{x^2}{2}$; substituting gives $x^3=16$, so the point is $(2\\sqrt[3]{2},\\,2\\sqrt[3]{4})$.' },
      { dt: 'Classic error', dd: 'If you treat y as a constant while differentiating, your y′ will be wrong — every term containing y needs a factor y′.' }
    ]
  }
];

const FLASHCARDS3 = [
  { tag: '3.1', q: 'State the power rule.', a: '$\\dfrac{d}{dx}x^n=nx^{n-1}$ (n real, x > 0)' },
  { tag: '3.1', q: 'How is e defined?', a: '$e$ is the number for which $\\lim_{h\\to0}\\dfrac{e^h-1}{h}=1$' },
  { tag: '3.1', q: 'What is $d/dx\\,e^x$?', a: '$e^x$' },
  { tag: '3.1', q: 'How do you find a horizontal tangent?', a: 'Set $f\'(a)=0$, then solve the original equation for the point $(a,f(a))$' },
  { tag: '3.2', q: 'Product rule?', a: '$\\dfrac{d}{dx}(uv)=u\\dfrac{dv}{dx}+v\\dfrac{du}{dx}$' },
  { tag: '3.2', q: 'Quotient rule?', a: '$\\dfrac{d}{dx}\\dfrac{u}{v}=\\dfrac{v\\dfrac{du}{dx}-u\\dfrac{dv}{dx}}{v^2}$' },
  { tag: '3.2', q: 'Derivative of $f(x)=xe^x$?', a: '$f\'(x)=(1+x)e^x$, and $f^{(n)}(x)=(n+x)e^x$' },
  { tag: '3.3', q: 'The two special trigonometric limits?', a: '$\\lim_{t\\to0}\\dfrac{\\sin t}{t}=1$ and $\\lim_{t\\to0}\\dfrac{1-\\cos t}{t}=0$' },
  { tag: '3.3', q: 'Derivatives of sin and cos?', a: '$\\dfrac{d}{dx}\\sin x=\\cos x$ and $\\dfrac{d}{dx}\\cos x=-\\sin x$' },
  { tag: '3.3', q: 'Derivatives of tan, cot, sec, csc?', a: '$\\sec^2x$; $-\\csc^2x$; $\\sec x\\tan x$; $-\\csc x\\cot x$' },
  { tag: '3.3', q: 'What is $\\lim_{x\\to0}\\dfrac{\\sin3x}{x}$?', a: '$3$ (let $u=3x$ and use $\\lim_{u\\to0}\\sin u/u=1$)' },
  { tag: '3.3', q: 'Where are the horizontal tangents of $y=\\sin^2x$?', a: '$y\'=\\sin2x=0 \\Rightarrow x=\\dfrac{k\\pi}{2}$' },
  { tag: '3.4', q: 'State the chain rule.', a: '$(f\\circ g)\'(x)=f\'(g(x))\\cdot g\'(x)$, i.e. $\\dfrac{dy}{dx}=\\dfrac{dy}{du}\\cdot\\dfrac{du}{dx}$' },
  { tag: '3.4', q: 'What is $d/dx\\sin^3(4x)$?', a: '$12\\sin^2(4x)\\cos(4x)$' },
  { tag: '3.4', q: 'What is $d/dx\\,a^x$?', a: '$a^x\\ln a$ (a > 0, a ≠ 1)' },
  { tag: '3.4', q: 'What is $D_xF(x^3)$?', a: '$F\'(x^3)\\cdot3x^2$ (the inner function is $x^3$)' },
  { tag: '3.5', q: 'Four steps of implicit differentiation?', a: 'Differentiate in x → treat y as a function of x → solve for y′ → apply to the tangent condition' },
  { tag: '3.5', q: 'y′ for $y^3+7y=x^3$?', a: '$3y^2y\'+7y\'=3x^2 \\Rightarrow y\'=\\dfrac{3x^2}{3y^2+7}$' }
];

const PITFALLS3 = [
  { t: 'Writing the product rule as a product of derivatives', w: '$(uv)\' = u\'v\'$.', r: '$(uv)\'=uv\'+vu\'$ — two terms added.', why: 'Class example $(3x^2-5)(2x^4-x)$: expanding first gives $36x^5-40x^3-9x^2+5$, matching the product rule.' },
  { t: 'Reversing the numerator of the quotient rule', w: '$(u/v)\'=\\dfrac{uv\'-vu\'}{v^2}$.', r: 'The numerator is $v u\'-u v\'$ — v first, u second, each with its own derivative.', why: 'Check with $u=3x-5$, $v=x^2+7$: $\\dfrac{3(x^2+7)-(3x-5)(2x)}{(x^2+7)^2}$.' },
  { t: 'Dropping the inner derivative in the chain rule', w: '$\\dfrac{d}{dx}(x^2+2x)^3=3(x^2+2x)^2$.', r: 'Multiply by the inner derivative as well: $3(x^2+2x)^2(2x+2)$.', why: 'This is the single most common source of lost points in the chapter.' },
  { t: 'Unwrapping only one layer', w: '$\\dfrac{d}{dx}\\sin^3(4x)=3\\sin^2(4x)\\cos(4x)$.', r: 'Three layers means three factors: $3\\sin^2(4x)\\cdot\\cos(4x)\\cdot4=12\\sin^2(4x)\\cos(4x)$.', why: '$\\sin[\\cos(x^2)]$ needs three factors too: $\\cos[\\cos(x^2)]\\cdot(-\\sin(x^2))\\cdot2x$.' },
  { t: 'Treating trig formulas as universal', w: 'Applying $d/dx\\sin x=\\cos x$ to $\\sin(ax)$.', r: 'Write $\\sin(ax)$ and apply the chain rule: $\\dfrac{d}{dx}\\sin(ax)=\\cos(ax)\\cdot a$.', why: '$\\sin^3(4x)$ and $\\sin(4x)$ are different functions.' },
  { t: 'Forgetting radians', w: 'Applying trig derivative formulas to data in degrees.', r: 'All trigonometric derivative formulas hold only in radians; in degrees multiply by $\\tfrac{\\pi}{180}$.', why: 'Radians are the default assumption in this course.' },
  { t: 'Misusing the special limit', w: 'Assuming $\\dfrac{\\sin3x}{x}=3$ for every x.', r: '$\\lim_{x\\to0}\\sin3x/x=3$ holds only as $x\\to0$; elsewhere use the equivalent form of $\\sin u/u\\to1$.', why: 'The proof relies on $3x\\to0$.' },
  { t: 'Treating y as a constant in implicit differentiation', w: 'Differentiating $y^3+7y=x^3$ as $3y^2+7=3x^2$.', r: 'y is a function of x: write $3y^2y\'+7y\'=3x^2$, then solve for $y\'$.', why: 'Dropping y′ means you have not differentiated at all.' },
  { t: 'Reading "horizontal" as "steepest"', w: 'Looking for the maximum of $|f\'|$.', r: 'Horizontal tangent ⇔ slope $0$ ⇔ $f\'(a)=0$; steepest corresponds to the largest $|f\'|$.', why: 'Both questions often appear in the same problem.' },
  { t: 'Not converting radicals to powers', w: 'Stuck on $y=\\dfrac{x+1}{\\sqrt x}$.', r: 'Write $y=x^{1/2}+x^{-1/2}$ and use the power rule: $y\'=\\dfrac{x-1}{2x^{3/2}}$.', why: 'Negative exponents handle every radical and reciprocal.' }
];

const SHEET3 = [
  { title: '3.1 Basic differentiation', items: [
    { lab: 'Power rule', tex: '\\frac{d}{dx}x^n=nx^{n-1}\\quad (n\\in\\mathbb{R},\\ x>0)' },
    { lab: 'Constants and lines', tex: '\\frac{d}{dx}c=0,\\quad \\frac{d}{dx}x=1' },
    { lab: 'Linear rules', tex: 'D_x[kf]=kD_xf,\\quad D_x[f\\pm g]=D_xf\\pm D_xg' },
    { lab: 'Exponentials', tex: '\\frac{d}{dx}e^x=e^x,\\qquad \\frac{d}{dx}a^x=a^x\\ln a' },
    { lab: 'Definition of e', tex: 'e:\\ \\lim_{h\\to0}\\frac{e^h-1}{h}=1' }
  ]},
  { title: '3.2 Product and quotient', items: [
    { lab: 'Product rule', tex: '\\frac{d}{dx}(uv)=u\\frac{dv}{dx}+v\\frac{du}{dx}' },
    { lab: 'Quotient rule', tex: "\\frac{d}{dx}\\frac{u}{v}=\\frac{v\\frac{du}{dx}-u\\frac{dv}{dx}}{v^2}" },
    { lab: 'Sanity check', tex: '\\text{The rule must agree with "expand first, then differentiate"}' }
  ]},
  { title: '3.3 Trigonometric functions', items: [
    { lab: 'Special limits', tex: '\\lim_{t\\to0}\\frac{\\sin t}{t}=1,\\qquad \\lim_{t\\to0}\\frac{1-\\cos t}{t}=0' },
    { lab: 'Area comparison', tex: '\\sin\\theta<\\theta<\\tan\\theta\\quad (0<\\theta<\\tfrac\\pi2)' },
    { lab: 'sin / cos', tex: '\\frac{d}{dx}\\sin x=\\cos x,\\quad \\frac{d}{dx}\\cos x=-\\sin x' },
    { lab: 'tan / cot', tex: '\\frac{d}{dx}\\tan x=\\sec^2x,\\quad \\frac{d}{dx}\\cot x=-\\csc^2x' },
    { lab: 'sec / csc', tex: '\\frac{d}{dx}\\sec x=\\sec x\\tan x,\\quad \\frac{d}{dx}\\csc x=-\\csc x\\cot x' },
    { lab: 'Caveat', tex: '\\text{All trigonometric derivative formulas assume radians}' }
  ]},
  { title: '3.4 Chain rule', items: [
    { lab: 'Chain rule', tex: '(f\\circ g)\'(x)=f\'(g(x))\\cdot g\'(x)' },
    { lab: 'Differential form', tex: '\\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx}' },
    { lab: 'Nested composite', tex: '\\frac{d}{dx}\\sin^3(4x)=3\\sin^2(4x)\\cos(4x)\\cdot4' }
  ]},
  { title: '3.5 Implicit differentiation', items: [
    { lab: 'Rule', tex: '\\text{When differentiating in }x,\\ y\\text{ is a function of }x\\text{ — every }y\\text{ term carries }y\'' },
    { lab: 'Example', tex: 'y^3+7y=x^3 \\Rightarrow y\'=\\frac{3x^2}{3y^2+7}' },
    { lab: 'Horizontal tangent', tex: 'Set y\'=0 and solve together with the original equation' }
  ]}
];

const PROBLEMS3 = [
  { sec: '3.1', num: 'Ex 1', type: 'Power rule',
    q: 'Differentiate $y=5x^2+7x-6$.', ans: '$y\'=10x+7$',
    steps: ['Differentiate term by term: $5\\cdot2x^{1}+7\\cdot1-0$', 'Hence $y\'=10x+7$'] },
  { sec: '3.1', num: 'Ex 2', type: 'Power rule',
    q: 'Differentiate $y=4x^6-3x^5-10x^2+5x+16$.', ans: '$y\'=24x^5-15x^4-20x+5$',
    steps: ['Term by term: $4\\cdot6x^5-3\\cdot5x^4-10\\cdot2x+5$', 'Hence $24x^5-15x^4-20x+5$'] },
  { sec: '3.1', num: 'Ex 3', type: 'Radicals as powers',
    q: 'Differentiate $y=\\dfrac{x^2+1}{x}$.', ans: '$y\'=1-\\dfrac{1}{x^2}$',
    steps: ['Rewrite with powers: $y=x+x^{-1}$', 'Differentiate: $y\'=1-x^{-2}$'] },
  { sec: '3.1', num: 'Ex 4', type: 'Radicals as powers',
    q: 'Differentiate $y=\\dfrac{x+1}{\\sqrt{x}}$.', ans: '$y\'=\\dfrac{x-1}{2x^{3/2}}$',
    steps: ['$\\dfrac{x+1}{\\sqrt x}=x^{1/2}+x^{-1/2}$', 'Differentiate: $\\tfrac12x^{-1/2}-\\tfrac12x^{-3/2}=\\dfrac{x-1}{2x^{3/2}}$'] },
  { sec: '3.1', num: 'Ex 5', type: 'Horizontal tangent',
    q: 'Find all points on $y=x^4-6x^2+4$ where the tangent line is horizontal.', ans: '$(0,4)$ and $(\\pm\\sqrt3,-5)$',
    steps: ['$f\'=4x^3-12x=4x(x^2-3)=0$', 'So $x=0,\\ x=\\pm\\sqrt3$',
            'Substitute: $f(0)=4$, $f(\\pm\\sqrt3)=9-18+4=-5$'] },
  { sec: '3.1', num: 'Ex 6', type: 'Velocity and acceleration',
    q: 'The motion of a particle is $s=2t^3-5t^2+3t+4$ (cm, s). Find the acceleration and its value at $t=2$.', ans: '$a(t)=12t-10$; $a(2)=14$ cm/s²',
    steps: ['$s\'(t)=6t^2-10t+3$ (velocity)', '$s\'\'(t)=12t-10$ (acceleration)', '$a(2)=24-10=14$ cm/s²'] },
  { sec: '3.1', num: 'Ex 7', type: 'Exponentials',
    q: 'Where is the tangent to $y=e^x$ parallel to the line $y=2x$?', ans: 'The point $(\\ln 2,\\ 2)$',
    steps: ['The tangent slope is $e^a$ (a is the x-coordinate)', 'Set $e^a=2$, so $a=\\ln2$', 'Then $y=e^{\\ln2}=2$'] },

  { sec: '3.2', num: 'Ex 1', type: 'Product rule',
    q: 'Differentiate $y=(3x^2-5)(2x^4-x)$ and check by expanding first.', ans: '$y\'=36x^5-40x^3-9x^2+5$',
    steps: ['Product rule: $y\'=6x(2x^4-x)+(3x^2-5)(8x^3-1)$', 'Expand: $12x^5-6x^2+24x^6-24x^5-3x^2+5$',
            'Collect: $36x^5-40x^3-9x^2+5$',
            'Check: expanding first gives $6x^6-10x^4-3x^3+5x$, whose derivative is the same'] },
  { sec: '3.2', num: 'Ex 2', type: 'Product rule',
    q: 'Given $f(x)=xe^x$, find $f\'(x)$ and $f^{(n)}(x)$.', ans: '$f\'(x)=(1+x)e^x$; $f^{(n)}(x)=(n+x)e^x$',
    steps: ['Product rule: $f\'(x)=1\\cdot e^x+x\\cdot e^x=(1+x)e^x$',
            'Differentiating again gives $(2+x)e^x$, so $f^{(n)}(x)=(n+x)e^x$'] },
  { sec: '3.2', num: 'Ex 3', type: 'Derivative from known values',
    q: 'Given $f(x)=\\sqrt{x}\\,g(x)$, $g(4)=2$ and $g\'(4)=3$, find $f\'(4)$.', ans: '$f\'(4)=\\dfrac{13}{2}$',
    steps: ['Product rule: $f\'(x)=\\dfrac{g(x)}{2\\sqrt{x}}+\\sqrt{x}\\,g\'(x)$',
            'Substitute: $f\'(4)=\\dfrac{2}{2\\cdot2}+2\\cdot3=\\dfrac12+6=\\dfrac{13}{2}$'] },
  { sec: '3.2', num: 'Ex 4', type: 'Quotient rule',
    q: 'Find $\\dfrac{d}{dx}\\left(\\dfrac{3x-5}{x^2+7}\\right)$.', ans: '$\\dfrac{3(x^2+7)-(3x-5)(2x)}{(x^2+7)^2}$',
    steps: ['Quotient rule with $u=3x-5$, $v=x^2+7$, $u\'=3$, $v\'=2x$',
            '$\\dfrac{v u\'-u v\'}{v^2}=\\dfrac{3(x^2+7)-(3x-5)(2x)}{(x^2+7)^2}$'] },
  { sec: '3.2', num: 'Ex 5', type: 'Tangent line',
    q: 'Find the tangent line to $y=\\dfrac{e^x}{1+x^2}$ at $\\left(1,\\dfrac e2\\right)$.', ans: 'Horizontal tangent: $y=\\dfrac e2$',
    steps: ['Quotient rule: $y\'=\\dfrac{e^x(1+x^2)-e^x(2x)}{(1+x^2)^2}=\\dfrac{e^x(x-1)^2}{(1+x^2)^2}$',
            'At $x=1$, $y\'=0$, so the tangent is horizontal and passes through $\\left(1,\\dfrac e2\\right)$'] },

  { sec: '3.3', num: 'Ex 1', type: 'Special limit',
    q: 'Find $\\lim_{x\\to0}\\dfrac{\\sin3x}{x}$.', ans: '$3$',
    steps: ['Let $u=3x$, so $u\\to0$: $\\lim\\dfrac{\\sin u}{u/3}=3\\lim\\dfrac{\\sin u}{u}=3\\cdot1=3$'] },
  { sec: '3.3', num: 'Ex 2', type: 'Special limit',
    q: 'Find $\\lim_{t\\to0}\\dfrac{1-\\cos t}{\\sin t}$.', ans: '$0$',
    steps: ['Numerator: $\\lim\\dfrac{1-\\cos t}{t}=0$; denominator: $\\lim\\dfrac{\\sin t}{t}=1$',
            'Hence the limit is $\\dfrac{0}{1}=0$'] },
  { sec: '3.3', num: 'Ex 3', type: 'Special limit',
    q: 'Find $\\lim_{x\\to0}\\dfrac{\\sin4x}{\\tan x}$.', ans: '$4$',
    steps: ['$\\dfrac{\\sin4x}{\\tan x}=\\dfrac{\\sin4x}{\\sin x}\\cdot\\cos x$',
            '$\\lim\\dfrac{\\sin4x}{\\sin x}=4\\lim\\dfrac{\\sin4x}{4x}\\cdot\\dfrac{4x}{\\sin x}\\cdot\\frac14=4$',
            'Multiply by $\\lim\\cos x=1$ to get $4$'] },
  { sec: '3.3', num: 'Ex 4', type: 'Trig differentiation',
    q: 'Find $\\dfrac{d}{dx}(3\\sin x-2\\cos x)$.', ans: '$3\\cos x+2\\sin x$',
    steps: ['$(3\\sin x)\'=3\\cos x$ and $(-2\\cos x)\'=-2(-\\sin x)=2\\sin x$', 'Combine: $3\\cos x+2\\sin x$'] },
  { sec: '3.3', num: 'Ex 5', type: 'Tangent line',
    q: 'Find the tangent line to $y=3\\sin x$ at $(\\pi,0)$.', ans: '$y=-3x+3\\pi$',
    steps: ['Slope $=3\\cos\\pi=-3$', 'Tangent: $y-0=-3(x-\\pi)$, i.e. $y=-3x+3\\pi$'] },
  { sec: '3.3', num: 'Ex 6', type: 'Product rule',
    q: 'Find $\\dfrac{d}{dx}(x^2\\sin x)$.', ans: '$2x\\sin x+x^2\\cos x$',
    steps: ['Product rule: $2x\\sin x+x^2\\cos x$'] },
  { sec: '3.3', num: 'Ex 7', type: 'Quotient rule',
    q: 'Find $\\dfrac{d}{dx}\\left(\\dfrac{1+\\sin x}{\\cos x}\\right)$.', ans: '$\\dfrac{1+\\sin x}{\\cos^2x}$',
    steps: ['Quotient rule: $\\dfrac{\\cos x\\cdot\\cos x-(1+\\sin x)(-\\sin x)}{\\cos^2x}$',
            'The numerator is $\\cos^2x+(1+\\sin x)\\sin x=\\cos^2x+\\sin x+\\sin^2x=1+\\sin x$',
            'So the result is $\\dfrac{1+\\sin x}{\\cos^2x}$'] },
  { sec: '3.3', num: 'Ex 8', type: 'Tangent line',
    q: 'Find the tangent line to $y=\\tan x$ at $\\left(\\dfrac\\pi4,1\\right)$.', ans: '$y=2x+1-\\dfrac\\pi2$',
    steps: ['Slope $=\\sec^2\\dfrac\\pi4=2$', 'Tangent: $y-1=2\\left(x-\\dfrac\\pi4\\right)$, i.e. $y=2x+1-\\dfrac\\pi2$'] },
  { sec: '3.3', num: 'Ex 9', type: 'Horizontal tangent',
    q: 'Find all points on $y=\\sin^2x$ where the tangent line is horizontal.', ans: '$x=\\dfrac{k\\pi}{2}$, $k\\in\\mathbb{Z}$',
    steps: ['$y\'=2\\sin x\\cos x=\\sin2x$', 'Set $\\sin2x=0 \\Rightarrow 2x=k\\pi \\Rightarrow x=\\dfrac{k\\pi}{2}$'] },
  { sec: '3.3', num: 'Ex 10', type: 'Application (spring)',
    q: 'A spring is stretched 4 cm beyond its rest position and released at $t=0$; its position is $s(t)=4\\cos t$. Find the velocity and acceleration and analyse the motion.', ans: '$v(t)=-4\\sin t$; $a(t)=-4\\cos t$',
    steps: ['$v(t)=s\'(t)=-4\\sin t$', '$a(t)=v\'(t)=-4\\cos t$',
            'At $t=0$ the displacement is maximal ($s=4$), velocity $0$, acceleration $-4$ (toward equilibrium); period $2\\pi$, equilibrium reached at $t=\\pi$'] },

  { sec: '3.4', num: 'Ex 1', type: 'Chain rule',
    q: 'Find $\\dfrac{d}{dx}(x^2+2x)^3$.', ans: '$6(x^2+2x)^2(x+1)$',
    steps: ['Outer power: $3(x^2+2x)^2\\cdot\\dfrac{d}{dx}(x^2+2x)$',
            'Inner derivative $=2x+2=2(x+1)$', 'Multiply: $3(x^2+2x)^2\\cdot2(x+1)=6(x^2+2x)^2(x+1)$'] },
  { sec: '3.4', num: 'Ex 2', type: 'Chain rule',
    q: 'If $y=(2x^2-4x+1)^{60}$, find $D_xy$.', ans: '$D_xy=60(2x^2-4x+1)^{59}(4x-4)$',
    steps: ['Outer power: $60(2x^2-4x+1)^{59}$', 'Inner derivative $4x-4$', 'Multiply the two'] },
  { sec: '3.4', num: 'Ex 3', type: 'Quotient + chain',
    q: 'If $y=\\dfrac{3\\sqrt{2x^5}-7}{(x^4+3)^{13}}$, find $\\dfrac{dy}{dx}$.', ans: '$\\dfrac{dy}{dx}=\\dfrac{15x^4(2x^5)^{1/2}(x^4+3)-52x^3(3\\sqrt{2x^5}-7)}{(x^4+3)^{14}}$',
    steps: ['Quotient rule with $u=3(2x^5)^{1/2}-7$, $v=(x^4+3)^{13}$',
            '$u\'=3\\cdot\\tfrac12(2x^5)^{-1/2}\\cdot10x^4=15x^4(2x^5)^{-1/2}$',
            '$v\'=13(x^4+3)^{12}\\cdot4x^3=52x^3(x^4+3)^{12}$',
            'Substitute into the quotient rule and combine the powers of $(x^4+3)$'] },
  { sec: '3.4', num: 'Ex 4', type: 'Chain rule',
    q: 'If $y=\\sin^2x$, find $\\dfrac{dy}{dx}$.', ans: '$\\dfrac{dy}{dx}=2\\sin x\\cos x$',
    steps: ['Read it as $(\\sin x)^2$: $y\'=2\\sin x\\cdot\\cos x$'] },
  { sec: '3.4', num: 'Ex 5', type: 'Outer function',
    q: 'If $F(y)=y\\sin(y^2)$, find $F\'(y)$.', ans: '$F\'(y)=\\sin(y^2)+2y^2\\cos(y^2)$',
    steps: ['Product rule: $1\\cdot\\sin(y^2)+y\\cdot\\cos(y^2)\\cdot2y$', 'Hence $\\sin(y^2)+2y^2\\cos(y^2)$'] },
  { sec: '3.4', num: 'Ex 6', type: 'Simplify first',
    q: 'Find $D_x\\dfrac{x^2(1+x)^3}{1+x}$.', ans: '$2x(1+x)(1+2x)$',
    steps: ['Cancel first: $\\dfrac{x^2(1+x)^3}{1+x}=x^2(1+x)^2$',
            'Product rule: $2x(1+x)^2+2x^2(1+x)=2x(1+x)(1+2x)$'] },
  { sec: '3.4', num: 'Ex 7', type: 'Exponential composite',
    q: 'Find $\\dfrac{d}{dx}e^{\\sin x}$.', ans: '$e^{\\sin x}\\cos x$',
    steps: ['The outer function $e^{\\cdot}$ differentiates to itself; multiply by the inner derivative $\\cos x$'] },
  { sec: '3.4', num: 'Ex 8', type: 'General exponential',
    q: 'Find $\\dfrac{d}{dx}a^x$, where $a>0,\\ a\\neq1$.', ans: '$a^x\\ln a$',
    steps: ['Write $a^x=e^{x\\ln a}$', 'Differentiate: $e^{x\\ln a}\\cdot\\ln a=a^x\\ln a$'] },
  { sec: '3.4', num: 'Ex 9', type: 'Chain rule',
    q: 'Find $\\dfrac{d}{dx}2\\sec^2x$.', ans: '$4\\sec^2x\\tan x$',
    steps: ['Read it as $2(\\sec x)^2$: $2\\cdot2\\sec x\\tan x\\cdot\\dfrac{d}{dx}\\sec x$',
            'With $\\dfrac{d}{dx}\\sec x=\\sec x\\tan x$ the result is $4\\sec^2x\\tan x$'] },
  { sec: '3.4', num: 'Ex 10', type: 'Composite functions',
    q: 'If $F$ is differentiable, find (a) $D_x[F(x^3)]$ (b) $D_x[F(x)]^3$.', ans: '(a) $3x^2F\'(x^3)$  (b) $3[F(x)]^2F\'(x)$',
    steps: ['(a) let $u=x^3$: $D_xF(u)=F\'(u)\\cdot u\'=F\'(x^3)\\cdot3x^2$',
            '(b) let $u=F(x)$: $D_x[u^3]=3u^2u\'=3[F(x)]^2F\'(x)$'] },
  { sec: '3.4', num: 'Ex 11', type: 'Nested chain rule',
    q: 'Find $\\dfrac{d}{dx}\\sin^3(4x)$.', ans: '$12\\sin^2(4x)\\cos(4x)$',
    steps: ['Outer power: $3\\sin^2(4x)\\cdot\\dfrac{d}{dx}\\sin(4x)$',
            '$\\dfrac{d}{dx}\\sin(4x)=\\cos(4x)\\cdot4$',
            'Multiply: $3\\sin^2(4x)\\cos(4x)\\cdot4=12\\sin^2(4x)\\cos(4x)$'] },
  { sec: '3.4', num: 'Ex 12', type: 'Nested chain rule',
    q: 'Find $\\dfrac{d}{dx}\\sin[\\cos(x^2)]$.', ans: '$-2x\\sin(x^2)\\cos[\\cos(x^2)]$',
    steps: ['Outer sine: $\\cos[\\cos(x^2)]\\cdot\\dfrac{d}{dx}\\cos(x^2)$',
            '$\\dfrac{d}{dx}\\cos(x^2)=-\\sin(x^2)\\cdot2x$',
            'Multiply: $-2x\\sin(x^2)\\cos[\\cos(x^2)]$'] },

  { sec: '3.5', num: 'Ex 1', type: 'Implicit differentiation',
    q: 'Find $\\dfrac{dy}{dx}$ where $y^3+7y=x^3$.', ans: '$y\'=\\dfrac{3x^2}{3y^2+7}$',
    steps: ['Differentiate both sides in x: $3y^2y\'+7y\'=3x^2$ (y is a function of x)',
            'Factor: $y\'(3y^2+7)=3x^2$', 'Hence $y\'=\\dfrac{3x^2}{3y^2+7}$'] },
  { sec: '3.5', num: 'Ex 2', type: 'Implicit differentiation + tangent',
    q: 'Find the tangent line to $4x^2y-3y=x^3$ at $(1,1)$.', ans: '$y=-5x+6$',
    steps: ['Differentiate: $8xy+4x^2y\'-3y\'=3x^2$',
            'Collect: $y\'(4x^2-3)=3x^2-8xy \\Rightarrow y\'=\\dfrac{3x^2-8xy}{4x^2-3}$',
            'At $(1,1)$: $y\'=\\dfrac{3-8}{4-3}=-5$', 'Tangent: $y-1=-5(x-1)$, i.e. $y=-5x+6$'] },
  { sec: '3.5', num: 'Ex 3', type: 'Implicit differentiation + horizontal tangent',
    q: 'At what point in the first quadrant is the tangent to $x^3+y^3=6xy$ horizontal?', ans: '$\\left(2\\sqrt[3]{2},\\ 2\\sqrt[3]{4}\\right)$',
    steps: ['Differentiate: $3x^2+3y^2y\'=6y+6xy\'$',
            'Collect: $y\'(3y^2-6x)=6y-3x^2$',
            'Horizontal tangent $\\Rightarrow y\'=0 \\Rightarrow 6y=3x^2 \\Rightarrow y=\\dfrac{x^2}{2}$',
            'Substitute: $x^3+\\dfrac{x^6}{8}=3x^3 \\Rightarrow x^3=16 \\Rightarrow x=2\\sqrt[3]{2}$, $y=2\\sqrt[3]{4}$'] }
];

/* ============================================================
   Exam sprint plan
   ============================================================ */
const PLAN = {
  headline: 'Two chapters together: absorb the new 3.3–3.5 material first, then weave the Chapter 2 core back in with a three-tier schedule.',
  tiers: [
    { id: 'A', title: 'Tier A · 48 hours before the exam (rescue)', when: 'Only 2 days left', goal: 'Walk both chapters’ must-know lists once and expose every problem type you still cannot do',
      minutes: 'About 4–5 hours in total',
      steps: [
        'Round 1 (≈90 min): open Concept Checklist and read only the five Chapter 3 sections (3.1–3.5); mark anything you cannot state',
        'Round 2 (≈60 min): in Homework Bank filter 3.3 / 3.4 / 3.5 and do five problems from each; write the steps, don\'t worry about a perfect score',
        'Round 3 (≈60 min): for every mistake, go back to Worked Examples and read the matching classroom example',
        'Round 4 (≈45 min): Random Self-Test — scope 3.3–3.5, 15 questions, no timer; then read the explanations of what you missed',
        'Round 5 (≈30 min): print the Formula Sheet and hand-copy the Chapter 3 rule boxes (copying beats reading)',
        'Finish: only revisit sections you marked "no idea" — do not start new problems'
      ] },
    { id: 'B', title: 'Tier B · 7 days before the exam (standard)', when: 'About a week left', goal: 'Cover both chapters, clear the error list, and sit one timed mock exam',
      minutes: '60–90 minutes per day',
      steps: [
        'Day 1: Chapter 2 sections 2.3 and 2.5 (most problem types) — concept checklist plus every assigned exercise in those sections',
        'Day 2: Chapter 2 sections 2.2 / 2.4 / 2.6 / 2.7 / 2.8 — focus on ε–δ proofs and asymptotes',
        'Day 3: Chapter 3 sections 3.1 / 3.2 — power, product and quotient rules; volume of computation, so compute a lot',
        'Day 4: Chapter 3 section 3.3 — write the four trigonometric derivative formulas from memory three times, plus five special-limit problems',
        'Day 5: Chapter 3 sections 3.4 / 3.5 — layered chain-rule practice and the implicit differentiation template',
        'Day 6: timed mock — Random Self-Test, whole chapter, 30 questions, 30-minute timer, exam conditions',
        'Day 7: errors only — redo every mistake, copy the Formula Sheet by hand, walk the Common Traps list',
        'Daily template: Concept Checklist 10 min → Homework 30 min → error review 15 min → Random Self-Test 15 min'
      ] },
    { id: 'C', title: 'Tier C · 30 minutes before you walk in', when: 'On the day', goal: 'Wake up the formulas and the traps; do not touch new problems',
      minutes: '30 minutes',
      steps: [
        '8 min: Formula Sheet — scan only the five Chapter 3 rule boxes and the two special limits',
        '10 min: Common Traps — read the ten Chapter 3 items (missing inner derivative, product rule as a product, missing y′, radians, …)',
        '7 min: redo the three problems you got wrong last night, writing only the key step',
        '5 min: sanity check — trigonometric formulas assume radians; $\\lim\\sin t/t=1$ holds only as $t\\to0$; a horizontal tangent means $f\'=0$',
        'Remaining time: breathe, do not open new problems'
      ] }
  ],
  loop: [
    { title: '① Concept Checklist (10 min)', detail: 'Read only the definitions, theorems and "must know" lines. The goal is to be able to say them out loud, not to memorise problems.' },
    { title: '② Homework Bank (30–45 min)', detail: 'Work through the assigned exercise numbers and tick "Done" as you go. For a mistake, never jump straight to the answer — write the full solution yourself, then open the solution and compare.' },
    { title: '③ Error review (15 min)', detail: 'Anything you ticked but got wrong gets redone once. Correct problems are never repeated. This is the highest-return step of the day.' },
    { title: '④ Random Self-Test (15–30 min)', detail: 'Start with your weakest section, 10–15 questions, untimed; then switch to timed mode with 20–30 questions. Read the explanations afterwards.' },
    { title: '⑤ Formula Sheet (5 min)', detail: 'Last step every day: hand-copy the Chapter 3 rules and the Chapter 2 limit laws. Writing beats re-reading.' }
  ],
  triage: [
    { rule: 'No idea where to start', detail: 'Go back to the Concept Checklist for that section, read only the definitions and theorem boxes, then redo the first classroom example of that type.' },
    { rule: 'Right idea, wrong arithmetic', detail: 'That is a calculation slip, not a conceptual gap. Slow down, write the intermediate line, and note the cause next to the solution.' },
    { rule: 'One-sided limit problems', detail: 'Revisit the 2.2 theorem plus the indeterminate-form list in 2.3 — this is where the points are won and lost in bulk.' },
    { rule: 'Chain rule always misses a step', detail: 'Use the fixed routine: outside-in, multiply at every layer. Write the outer derivative times the inner derivative before simplifying.' },
    { rule: 'Implicit differentiation feels impossible', detail: 'Use the three-line template: differentiate in x → collect y′ → solve for y′ (see 3.5 Ex 1–Ex 3).' }
  ],
  last10: [
    'One-sided limits differ → the two-sided limit does not exist',
    '0/0 and ∞/∞ are indeterminate — simplify first',
    'Vertical asymptote: one side tending to ±∞ is enough',
    'Horizontal tangent ⇔ f′(a) = 0',
    'No h may remain in the final answer',
    'Trigonometric formulas assume radians',
    'The product rule adds two terms — it is not a product',
    'The chain rule multiplies one factor per layer',
    'In implicit differentiation every y-term carries y′',
    'sin t/t = 1 holds only as t → 0'
  ]
};
