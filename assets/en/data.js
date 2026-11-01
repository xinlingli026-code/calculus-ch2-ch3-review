/* ============================================================
   Chapter 2 Revision Hub · English content layer
   Source: lecture notes NotesOnOct06–Oct22 + Stewart textbook
   ============================================================ */

const SECTIONS = [
  { id: '2.1', name: 'Tangent and Velocity Problems', cn: '切线与速度问题', en: 'Tangent & Velocity', hw: [3], weight: 2, tags: ['Starting point', 'Origin of the derivative'] },
  { id: '2.2', name: 'The Limit of a Function', cn: '函数的极限', en: 'Limits of Functions', hw: [5,7,9,11,19,23,27,31,33,35,41,43,45], weight: 5, tags: ['One-sided limits', 'Infinite limits', 'Vertical asymptotes'] },
  { id: '2.3', name: 'Calculate Limits Using the Limit Laws', cn: '用极限律计算极限', en: 'Limit Laws', hw: [1,3,5,7,9,11,15,17,19,21,23,25,27,29,31,37,39,41,43,47,51,53,59,61], weight: 5, tags: ['High weight', 'Most problem types'] },
  { id: '2.4', name: 'The Precise Definition of a Limit', cn: '极限的精确定义', en: 'Precise Definition of a Limit', hw: [1,3,13,19,33,37,39,43], weight: 4, tags: ['Proofs', 'ε–δ'] },
  { id: '2.5', name: 'Continuity of Functions', cn: '函数的连续性', en: 'Continuity', hw: [3,11,13,15,17,19,21,23,27,35,37,39,41,45,47,51,53,55,69], weight: 5, tags: ['High weight', 'Most problem types'] },
  { id: '2.6', name: 'Limits at Infinity, Horizontal Asymptotes', cn: '无穷远处的极限与水平渐近线', en: 'Limits at Infinity', hw: [3,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,47,49,51], weight: 4, tags: ['Rational functions', 'Rationalizing'] },
  { id: '2.7', name: 'Derivatives and Rates of Change', cn: '导数与变化率', en: 'Derivatives & Rates of Change', hw: [5,7,14,21,31,33,35,37,39,41,55,59,60], weight: 4, tags: ['Applications', 'Instantaneous velocity'] },
  { id: '2.8', name: 'The Derivative as a Function', cn: '作为函数的导数', en: 'The Derivative as a Function', hw: [3,21,25,27,29,41,43,49,51,63], weight: 3, tags: ['Higher derivatives', 'Differentiability'] }
];

/* ---------- Scope map ---------- */
const SCOPE_CARDS = {
  '2.1': {
    desc: 'From the slope of a secant to the slope of a tangent: the bridge between "limit" and "instantaneous rate of change". This is where the definition of the derivative comes from.',
    must: ['Secant slope → tangent slope as a limit', 'Average velocity → instantaneous velocity', 'Tangent line $y=f(a)+f\'(a)(x-a)$']
  },
  '2.2': {
    desc: 'The intuitive definition of a limit, one-sided limits, infinite limits and vertical asymptotes. Whether the limit exists depends on the two one-sided limits.',
    must: ['One-sided limit theorem', 'Heaviside function and the floor function $[[x]]$', 'When $x=a$ is a vertical asymptote']
  },
  '2.3': {
    desc: 'Nine basic limit laws, the substitution property and the squeeze theorem. This section handles almost every indeterminate form (0/0, ∞/∞, …) with three moves: factor, rationalize, combine.',
    must: ['Nine limit laws and the substitution property', 'You may cancel a point where f is undefined', 'Squeeze theorem', 'Theorem: if $f=g$ except at $a$, then $\\lim f=\\lim g$']
  },
  '2.4': {
    desc: 'The rigorous ε–δ definition and the standard proof pattern: given ε, choose δ, then chain the inequalities.',
    must: ['$0<|x-a|<\\delta \\Rightarrow |f(x)-L|<\\varepsilon$', 'Proof template: given ε → choose δ → derive inequality', 'One-sided ε–δ versions', 'The M–δ version for infinite limits']
  },
  '2.5': {
    desc: 'The definition of continuity (three conditions), the algebra of continuous functions, the composition theorem, types of discontinuity, and the Intermediate Value Theorem.',
    must: ['Continuous $\\Leftrightarrow$ the limit exists and equals $f(a)$', 'Three types of discontinuity: removable, jump, infinite', 'Intermediate Value Theorem', 'Largest interval of continuity']
  },
  '2.6': {
    desc: 'Limits as $x\\to\\pm\\infty$ and horizontal asymptotes. For rational functions compare degrees; for radicals rationalize first.',
    must: ['Horizontal asymptote $y=L$', 'Rational functions: the larger degree wins', 'Radical limits: multiply by the conjugate', 'Vertical and horizontal asymptotes together']
  },
  '2.7': {
    desc: 'The derivative from its definition, tangent slopes, instantaneous velocity and rates of change, plus motion applications.',
    must: ['Two equivalent forms of $f\'(a)$', 'Instantaneous velocity and rate of change', 'Free-fall model $h=4.9t^2$']
  },
  '2.8': {
    desc: 'The derivative is itself a function; notation; differentiable implies continuous but not conversely; higher-order derivatives and the notation table.',
    must: ['$f\'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$', 'Leibniz notation $dy/dx$', 'Differentiable $\\Rightarrow$ continuous', 'Notation table for higher derivatives']
  }
};

/* ---------- Concept checklist ---------- */
const CONCEPTS = [
  {
    sec: '2.1', title: 'Tangent and Velocity Problems',
    items: [
      { dt: 'Secant slope', dd: 'The slope of the line through $P(a,f(a))$ and $Q(x,f(x))$ is $\\dfrac{f(x)-f(a)}{x-a}$ — the average rate of change on that interval.', formula: 'm_{PQ}=\\frac{f(x)-f(a)}{x-a}' },
      { dt: 'Tangent slope (limit definition)', dd: 'Let $Q$ slide along the curve toward $P$; the secant becomes the tangent:', formula: 'm_{\\tan}=\\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}=\\lim_{h\\to 0}\\frac{f(a+h)-f(a)}{h}' },
      { dt: 'Average vs instantaneous velocity', dd: 'Average velocity = change in position ÷ change in time; instantaneous velocity is the limit above (m/s).' },
      { dt: 'Class example: $y=x^2$ at $(1,1)$', dd: 'Secant slopes $1.5,\\ 1.9,\\ 1.99,\\dots$ approach $2$, so the tangent is $y-1=2(x-1)$.', formula: 'm=\\lim_{x\\to1}\\frac{x^2-1}{x-1}=\\lim_{x\\to1}(x+1)=2\\quad\\Rightarrow\\quad y=2x-1' },
      { dt: 'Class example: free fall', dd: 'With $h=4.9t^2$, $v(t)=\\lim_{s\\to t}\\frac{4.9s^2-4.9t^2}{s-t}=9.8t$, so at $t=5$ the velocity is $49$ m/s.' },
      { dt: 'Newton\'s picture', dd: 'Tangent slope = instantaneous rate of change of position with respect to time = velocity; the rate of change of velocity is acceleration.' }
    ]
  },
  {
    sec: '2.2', title: 'The Limit of a Function',
    items: [
      { dt: 'Intuitive definition', dd: 'We write $\\lim_{x\\to a}f(x)=L$ if the values of $f(x)$ can be made arbitrarily close to $L$ by restricting $x$ to be sufficiently close to $a$ (on either side), with $x\\ne a$.', formula: '\\lim_{x\\to a}f(x)=L' },
      { dt: 'Class examples', dd: '$\\lim_{x\\to3}(4x+5)=17$; $\\lim_{x\\to0}(\\sqrt{x^2+9}-3)=0$; $\\lim_{x\\to0}\\sin\\frac1x$ does not exist (it oscillates).' },
      { dt: 'Left-hand and right-hand limits', dd: '$\\lim_{x\\to a^-}f(x)=L$ approaches from the left; $\\lim_{x\\to a^+}f(x)=L$ approaches from the right.' },
      { dt: 'One-sided limit theorem', dd: '$\\lim_{x\\to a}f(x)=L$ if and only if $\\lim_{x\\to a^-}f(x)=L$ and $\\lim_{x\\to a^+}f(x)=L$.', callout: 'If the two one-sided limits differ (or one does not exist), the two-sided limit does not exist.' },
      { dt: 'Heaviside function', dd: '$H(t)=0\\ (t<0)$, $H(t)=1\\ (t\\ge0)$. The left limit is $0$ and the right limit is $1$, so $\\lim_{t\\to0}H(t)$ does not exist (jump discontinuity).' },
      { dt: 'Floor function $[[x]]$', dd: '$\\lim_{x\\to2}[[x]]=2$ (near $x=2$ the floor value is constantly $2$), but $[[x]]$ is discontinuous at every integer.' },
      { dt: 'Infinite limits', dd: '$\\lim_{x\\to a}f(x)=\\infty$ means $f(x)$ can be made arbitrarily large; $=-\\infty$ means arbitrarily large in the negative direction.' },
      { dt: 'Vertical asymptotes', dd: 'If $\\lim_{x\\to a}f(x)=\\pm\\infty$, or one side is $\\pm\\infty$, then $x=a$ is a vertical asymptote.', formula: '\\text{e.g. }\\ln x \\to x=0;\\quad \\tan x \\to x=\\tfrac{\\pi}{2}+k\\pi' }
    ]
  },
  {
    sec: '2.3', title: 'Calculating Limits with the Limit Laws',
    items: [
      { dt: 'The nine limit laws', dd: 'Constant multiples, sums, differences, products, quotients (denominator limit $\\ne0$), constants, $x$, powers and roots all pass through the limit sign.', formula: 'c\\cdot f,\\quad f+g,\\quad f-g,\\quad f\\cdot g,\\quad \\frac{f}{g}\\ (\\lim g\\neq0),\\quad c,\\quad x,\\quad f^n,\\quad \\sqrt[n]{f}' },
      { dt: 'Substitution property', dd: 'If $f$ is a polynomial or rational function and $f(a)$ is defined, then $\\lim_{x\\to a}f(x)=f(a)$.' },
      { dt: 'Removing an undefined point', dd: 'If $f(x)=g(x)$ throughout a punctured neighbourhood of $a$, then $\\lim f=\\lim g$.', callout: 'Reason: a limit never uses the value $f(a)$ itself, so the factor $(x-a)$ can simply be cancelled.' },
      { dt: 'Indeterminate forms', dd: '$0/0$, $\\infty/\\infty$, $\\infty-\\infty$, $0\\cdot\\infty$, $1^\\infty$, $0^0$ and $\\infty^0$ must be transformed before substituting.' },
      { dt: 'Three standard moves', dd: '① Factor ② Rationalize (multiply by the conjugate) ③ Combine fractions or split the expression.', formula: '\\lim_{x\\to1}\\frac{x^2-1}{x-1}=\\lim_{x\\to1}(x+1)=2\\qquad \\lim_{x\\to2}\\frac{x^2+3x-10}{x^2+x-6}=\\lim_{x\\to2}\\frac{x+5}{x+3}=\\tfrac75\\qquad \\lim_{x\\to0}\\frac{\\sqrt{x^2+9}-3}{x^2}=\\lim_{x\\to0}\\frac{1}{\\sqrt{x^2+9}+3}=\\tfrac16' },
      { dt: 'Squeeze (sandwich) theorem', dd: 'If $f(x)\\le g(x)\\le h(x)$ on a punctured neighbourhood of $a$ and $\\lim f=\\lim h=L$, then $\\lim g=L$.', formula: '-1\\le\\sin\\tfrac1x\\le1 \\Rightarrow \\lim_{x\\to0}\\sin\\tfrac1x \\text{ does not exist}\\qquad |x^2\\sin\\tfrac1x|\\le x^2 \\Rightarrow \\lim_{x\\to0}x^2\\sin\\tfrac1x=0\\qquad |x\\sin\\tfrac1x|\\le|x| \\Rightarrow \\lim_{x\\to0}x\\sin\\tfrac1x=0' },
      { dt: 'Condition on the quotient law', dd: 'Law ⑤ requires $\\lim g(x)\\neq0$; if the denominator limit is $0$ you must simplify first.' }
    ]
  },
  {
    sec: '2.4', title: 'The Precise Definition of a Limit',
    items: [
      { dt: 'The ε–δ definition', dd: 'For every given $\\varepsilon>0$ there is a corresponding $\\delta>0$ such that whenever $0<|x-a|<\\delta$ we have $|f(x)-L|<\\varepsilon$.', formula: '\\forall\\varepsilon>0,\\ \\exists\\delta>0:\\quad 0<|x-a|<\\delta\\ \\Rightarrow\\ |f(x)-L|<\\varepsilon' },
      { dt: '"Within ε of L"', dd: '$|f(x)-L|<\\varepsilon$ is equivalent to $L-\\varepsilon<f(x)<L+\\varepsilon$.' },
      { dt: '"Sufficiently close to a but not equal"', dd: '$0<|x-a|<\\varepsilon$ means $x$ lies in $(a-\\varepsilon,a+\\varepsilon)$ with the point $a$ removed.' },
      { dt: 'Proof template (four steps)', dd: '① Let $\\varepsilon>0$ be arbitrary; ② Choose $\\delta=\\min(\\text{some terms},1)$; ③ From $0<|x-a|<\\delta$ derive intermediate inequalities; ④ Conclude $|f(x)-L|<\\varepsilon$.' },
      { dt: 'Class examples', dd: 'Prove $\\lim_{x\\to4}(3x+7)=5$: given $\\varepsilon$, take $\\delta=\\varepsilon/3$.', formula: '\\lim_{x\\to2}\\frac{2x^2-3x+2}{x-2}=5\\quad(\\text{divide the numerator by }x-2\\text{ to get }2x+1)\\qquad \\lim_{x\\to4}\\sqrt{x}=2\\qquad \\lim_{x\\to3}x^2=9\\ (\\delta=\\min(1,6\\varepsilon))\\qquad \\lim_{x\\to3}\\frac1x=\\tfrac13\\ (\\delta=\\min(1,\\tfrac{3\\varepsilon}{7}))' },
      { dt: 'One-sided ε–δ versions', dd: 'Left limit: $a-\\delta<x<a$ and $|f(x)-L|<\\varepsilon$; right limit: $a<x<a+\\delta$ and $|f(x)-L|<\\varepsilon$.' },
      { dt: 'Infinite limits: M–δ', dd: '$\\lim_{x\\to a}f(x)=\\infty$: for every $M>0$ there is $\\delta>0$ such that $0<|x-a|<\\delta$ implies $f(x)>M$.' }
    ]
  },
  {
    sec: '2.5', title: 'Continuity of Functions',
    items: [
      { dt: 'Definition of continuity', dd: '$f$ is continuous at $a$ if $\\lim_{x\\to a}f(x)=f(a)$. Expanded, that is three conditions: the limit exists, $f(a)$ is defined, and they are equal.' },
      { dt: 'Three questions to ask', dd: '① Does $\\lim f(x)$ exist? ② Is $f(a)$ defined? ③ Are they equal? All three must be "yes".' },
      { dt: 'Algebra of continuous functions', dd: 'If $f,g$ are continuous at $a$ and $k$ is constant, then $kf$, $f+g$, $f-g$, $fg$ are continuous at $a$; so is $f/g$ (when $g(a)\\ne0$), $f^n$ and $\\sqrt[n]{f}$.' },
      { dt: 'Composition theorem', dd: 'If $\\lim_{x\\to a}g(x)=L$ and $f$ is continuous at $L$, then $\\lim_{x\\to a}f(g(x))=f(L)$.', formula: 'h(x)=\\frac{\\sin(x^4-3x+1)}{x^2-x-6} \\text{ is continuous except at } x=3 \\text{ and } x=-2' },
      { dt: 'One-sided continuity', dd: 'Right-continuous: $\\lim_{x\\to a^+}f(x)=f(a)$; left-continuous: $\\lim_{x\\to a^-}f(x)=f(a)$.' },
      { dt: 'Continuity on a closed interval', dd: '$f$ is continuous on $[a,b]$ if it is continuous on $(a,b)$, right-continuous at $a$ and left-continuous at $b$.' },
      { dt: 'Three types of discontinuity', dd: 'Removable (the one-sided limits agree but differ from $f(a)$, or $f(a)$ is undefined), jump (the one-sided limits exist but differ), infinite (at least one side is $\\pm\\infty$).' },
      { dt: 'Class examples', dd: '$f(x)=\\dfrac{x^2+4}{x+2}$ at $x=-2$: $f(-2)$ is undefined and $\\lim=-4$ does not exist, so $f$ is not continuous (removable). $f(x)=\\dfrac{\\sin x}{x(1-x)}$ is discontinuous at $x=0$ and $x=1$. $[[x]]$ is discontinuous at every integer (jumps).', formula: '\\lim_{x\\to-2}\\frac{x^2+4}{x+2}=\\lim_{x\\to-2}(x-2)=-4' },
      { dt: 'Largest interval of continuity', dd: '$g(x)=\\sqrt{4-x^2}$ has domain $[-2,2]$; it is continuous inside, right-continuous at $-2$ and left-continuous at $2$, so the largest interval of continuity is $[-2,2]$.' },
      { dt: 'Intermediate Value Theorem', dd: 'If $f$ is continuous on $[a,b]$ and $N$ lies between $f(a)$ and $f(b)$, then some $c\\in[a,b]$ satisfies $f(c)=N$.', callout: 'Typical use: show $x^3+1=x$ has a solution on $[0,1]$; show $x-\\cos x=0$ has a solution on $(0,\\tfrac{\\pi}{2})$.' }
    ]
  },
  {
    sec: '2.6', title: 'Limits at Infinity and Horizontal Asymptotes',
    items: [
      { dt: 'Limit at infinity', dd: '$\\lim_{x\\to\\infty}f(x)=L$ means the values of $f(x)$ can be made arbitrarily close to $L$ by requiring $x$ to be sufficiently large.' },
      { dt: 'Horizontal asymptotes', dd: 'If $\\lim_{x\\to\\infty}f(x)=L$ or $\\lim_{x\\to-\\infty}f(x)=L$, then $y=L$ is a horizontal asymptote.' },
      { dt: 'Rule for rational functions', dd: 'Numerator degree < denominator degree $\\Rightarrow$ the limit is $0$; equal degrees $\\Rightarrow$ ratio of leading coefficients; numerator degree > denominator degree $\\Rightarrow$ no horizontal asymptote (the limit is $\\pm\\infty$).' },
      { dt: 'Class examples', dd: '$\\lim_{x\\to\\infty}\\frac{x}{1+x^2}=0$; $\\lim_{x\\to\\infty}\\frac{2x^3}{1+x^3}=2$; $\\lim_{n\\to\\infty}\\frac{\\sqrt{n+1}}{n+2}=0$.' },
      { dt: 'Handling radicals', dd: 'With $\\sqrt{x^2+\\cdots}$, divide numerator and denominator by $x$ (or multiply by the conjugate) to turn it into a rational expression before comparing degrees.', formula: '\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+2x}-x\\right)=\\lim_{x\\to\\infty}\\frac{2x}{x\\left(\\sqrt{x^2+2x}+x\\right)}=\\lim_{x\\to\\infty}\\frac{2}{\\sqrt{x^2+2x}+x}=1' },
      { dt: 'Exponentials and logarithms', dd: '$\\lim_{x\\to\\infty}e^x=+\\infty$, $\\lim_{x\\to-\\infty}e^x=0$; $\\lim_{x\\to\\infty}\\ln x=+\\infty$, $\\lim_{x\\to0^+}\\ln x=-\\infty$.' },
      { dt: 'One-sided behaviour', dd: '$\\lim_{x\\to0^+}e^{1/x}=+\\infty$ while $\\lim_{x\\to0^-}e^{1/x}=0$ — the same function, two different answers, so always state the direction.' },
      { dt: 'Both kinds of asymptote', dd: '$f(x)=\\dfrac{-2x^2+1}{3x-5}$: horizontal asymptote $y=-\\tfrac23$; vertical asymptote $x=\\tfrac53$ (approaching from the right gives $-\\infty$, from the left $+\\infty$).' },
      { dt: 'arctan type', dd: '$\\lim_{x\\to2^+}\\arctan\\dfrac1{x-2}=\\tfrac\\pi2$ and $\\lim_{x\\to2^-}=-\\tfrac\\pi2$.' }
    ]
  },
  {
    sec: '2.7', title: 'Derivatives and Rates of Change',
    items: [
      { dt: 'Definition of the derivative', dd: 'The derivative of $f$ at $a$ is', formula: 'f\'(a)=\\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}=\\lim_{h\\to 0}\\frac{f(a+h)-f(a)}{h}' },
      { dt: 'Differentiability', dd: 'If that limit exists, $f$ is differentiable at $a$. Finding the derivative is called differentiation.' },
      { dt: 'Tangent line', dd: '$m=f\'(a)$ and $y-f(a)=f\'(a)(x-a)$.', formula: '\\text{e.g. }y=\\sqrt{x}\\text{ at }(3,1):\\ y-1=\\tfrac13(x-3)\\Rightarrow y=\\tfrac{x}{3}+\\tfrac23' },
      { dt: 'Instantaneous velocity', dd: '$v=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}$, in m/s when $f$ is in metres and $t$ in seconds.' },
      { dt: 'Instantaneous rate of change', dd: 'For $y=f(x)$ at $x=x_1$ it is $\\lim_{x_2\\to x_1}\\dfrac{f(x_2)-f(x_1)}{x_2-x_1}$.' },
      { dt: 'Class example: the CN Tower', dd: 'A ball is dropped from 450 m, so $h(t)=450-4.9t^2$. (a) After 5 s the speed is $49$ m/s; (b) on impact $t=\\sqrt{450/4.9}\\approx9.58$ s and the speed is $\\approx93.9$ m/s.', callout: 'The final expression must not contain $h$.' },
      { dt: 'Class example: a polynomial', dd: '$f(x)=x^3+7x \\Rightarrow f\'(a)=3a^2+7$.' }
    ]
  },
  {
    sec: '2.8', title: 'The Derivative as a Function',
    items: [
      { dt: 'The derivative is a function', dd: '$f\'(x)=\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}$ for every $x$ in the domain.' },
      { dt: 'Leibniz notation', dd: '$\\dfrac{dy}{dx}=\\lim_{\\Delta x\\to0}\\dfrac{\\Delta y}{\\Delta x}=f\'(x)$.', formula: 'f\'(x)=y\'=Df(x)=D_xf(x)=\\frac{df}{dx}' },
      { dt: 'Class examples', dd: '$f(x)=\\dfrac1x \\Rightarrow f\'(x)=-\\dfrac1{x^2}$; $f(x)=\\sqrt{x} \\Rightarrow f\'(x)=\\dfrac1{2\\sqrt{x}}$; $f(x)=\\dfrac1{\\sqrt{x}} \\Rightarrow f\'(x)=-\\dfrac1{2x^{3/2}}$.' },
      { dt: 'Differentiability of $|x|$', dd: 'Differentiable for $x\\ne0$ ($f\'=1$ when $x>0$, $f\'=-1$ when $x<0$); not differentiable at $x=0$ because the one-sided derivatives are $-1$ and $1$.' },
      { dt: 'Differentiable implies continuous', dd: 'If $f\'(a)$ exists then $f$ is continuous at $a$; the converse is false.', callout: 'Proof: $f(x)-f(a)=\\dfrac{f(x)-f(a)}{x-a}\\cdot(x-a)$; the right-hand side has a limit, so $\\lim[f(x)-f(a)]=0$.' },
      { dt: 'Three ways to fail', dd: 'A corner, a vertical tangent, a discontinuity.' },
      { dt: 'Higher-order derivatives', dd: 'The derivative of $f\'$ is $f\'\'$ (the second derivative), and so on up to $f^{(n)}$.', formula: 'f(x)=2x^2-6x+8 \\Rightarrow f\'=4x-6,\\ f\'\'=4,\\ f\'\'\'=0' },
      { dt: 'Notation table', dd: '$f\'/f\'\'/f\'\'\'/f^{(4)}\\ \\leftrightarrow\\ y\'/y\'\'/y\'\'\'/y^{(4)}\\ \\leftrightarrow\\ D_xy/D^2_xy/D^3_xy/D^4_xy\\ \\leftrightarrow\\ \\dfrac{dy}{dx}/\\dfrac{d^2y}{dx^2}/\\dfrac{d^3y}{dx^3}/\\dfrac{d^4y}{dx^4}$.' }
    ]
  }
];

/* ---------- Flashcards ---------- */
const FLASHCARDS = [
  { tag: '2.1', q: 'Write the limit definition of the tangent slope.', a: '$m_{\\tan}=\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}$' },
  { tag: '2.1', q: 'Tangent line to $y=x^2$ at $(1,1)$?', a: 'Slope $=\\lim\\dfrac{x^2-1}{x-1}=2$, so the tangent is $y=2x-1$' },
  { tag: '2.2', q: 'Necessary and sufficient condition for a two-sided limit to exist?', a: 'The left-hand and right-hand limits both exist and are equal' },
  { tag: '2.2', q: 'When is $x=a$ a vertical asymptote?', a: 'When $\\lim_{x\\to a}f(x)=\\pm\\infty$, or at least one side tends to $\\pm\\infty$' },
  { tag: '2.2', q: 'Does $\\lim_{x\\to0}\\sin\\frac1x$ exist?', a: 'No. $-1\\le\\sin\\frac1x\\le1$, and the two-sided limits disagree' },
  { tag: '2.3', q: 'Evaluate $\\lim_{x\\to1}\\dfrac{x^2-1}{x-1}$.', a: 'Factor $(x-1)(x+1)$, cancel $x-1$ $\\Rightarrow\\lim(x+1)=2$' },
  { tag: '2.3', q: 'Standard three moves for a $0/0$ form?', a: 'Factor → rationalize (conjugate) → combine fractions, then apply the limit laws' },
  { tag: '2.3', q: 'Conditions of the squeeze theorem?', a: '$f(x)\\le g(x)\\le h(x)$ on a punctured neighbourhood and $\\lim f=\\lim h=L \\Rightarrow \\lim g=L$' },
  { tag: '2.3', q: 'What is $\\lim_{x\\to0}x^2\\sin\\frac1x$, and how do you prove it?', a: '$0$. Since $|x^2\\sin\\frac1x|\\le x^2\\to0$, the squeeze theorem gives $0$' },
  { tag: '2.4', q: 'State the full ε–δ definition of a limit.', a: '$\\forall\\varepsilon>0,\\ \\exists\\delta>0:$ if $0<|x-a|<\\delta$ then $|f(x)-L|<\\varepsilon$' },
  { tag: '2.4', q: 'Prove $\\lim_{x\\to4}(3x+7)=5$: what is $\\delta$?', a: '$\\delta=\\varepsilon/3$, since $|3x+7-5|=3|x-4|<3\\delta=\\varepsilon$' },
  { tag: '2.4', q: 'Prove $\\lim_{x\\to3}\\frac1x=\\frac13$: what is $\\delta$?', a: 'Given $\\varepsilon$, take $\\delta=\\min(1,\\frac{3\\varepsilon}{7})$; then $\\frac{|x-3|}{3|x|}<\\varepsilon$' },
  { tag: '2.4', q: 'The M–δ definition of an infinite limit?', a: '$\\forall M>0,\\ \\exists\\delta>0:$ if $0<|x-a|<\\delta$ then $f(x)>M$' },
  { tag: '2.5', q: 'Three conditions for $f$ to be continuous at $a$?', a: '① $\\lim_{x\\to a}f(x)$ exists ② $f(a)$ is defined ③ $\\lim f=f(a)$' },
  { tag: '2.5', q: 'The three types of discontinuity?', a: 'Removable, jump, and infinite discontinuities' },
  { tag: '2.5', q: 'State the Intermediate Value Theorem.', a: 'If $f$ is continuous on $[a,b]$ and $N$ lies between $f(a)$ and $f(b)$, then some $c\\in[a,b]$ has $f(c)=N$' },
  { tag: '2.5', q: 'Largest interval of continuity of $\\sqrt{4-x^2}$?', a: '$[-2,2]$: continuous inside, right-continuous at $-2$, left-continuous at $2$' },
  { tag: '2.6', q: 'How do you decide $\\lim_{x\\to\\infty}\\frac{P}{Q}$ for polynomials?', a: 'Compare degrees: denominator larger $\\Rightarrow0$; equal $\\Rightarrow$ ratio of leading coefficients; numerator larger $\\Rightarrow\\pm\\infty$' },
  { tag: '2.6', q: 'Evaluate $\\lim_{x\\to\\infty}(\\sqrt{x^2+2x}-x)$.', a: '$1$ (multiply by the conjugate: $\\to\\dfrac{2}{\\sqrt{x^2+2x}+x}\\to\\dfrac{2}{2x}=1$)' },
  { tag: '2.6', q: 'How do you find a horizontal asymptote?', a: 'If $\\lim_{x\\to\\infty}f=L$ or $\\lim_{x\\to-\\infty}f=L$, then $y=L$ is a horizontal asymptote' },
  { tag: '2.7', q: 'The two forms of the derivative definition?', a: '$f\'(a)=\\lim_{x\\to a}\\dfrac{f(x)-f(a)}{x-a}=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}$' },
  { tag: '2.7', q: 'May $h$ remain in your final answer for instantaneous velocity?', a: 'No. The value of the limit must be independent of $h$' },
  { tag: '2.8', q: 'Relationship between differentiability and continuity?', a: 'Differentiable $\\Rightarrow$ continuous; continuous $\\nRightarrow$ differentiable (e.g. $|x|$ at $0$)' },
  { tag: '2.8', q: 'Three ways a function can fail to be differentiable?', a: 'A corner, a vertical tangent, a discontinuity' },
  { tag: '2.8', q: 'Derivative of $f(x)=\\sqrt{x}$?', a: '$f\'(x)=\\dfrac{1}{2\\sqrt{x}}$' },
  { tag: '2.8', q: 'Higher derivatives of $f(x)=2x^2-6x+8$?', a: '$f\'=4x-6,\\ f\'\'=4,\\ f\'\'\'=0$' }
];

/* ---------- Common traps ---------- */
const PITFALLS = [
  { t: 'Writing a two-sided limit without checking both sides', w: 'Jumping straight to $\\lim_{x\\to2}f(x)=17$.', r: 'Compute $\\lim_{x\\to2^-}$ and $\\lim_{x\\to2^+}$ separately; they must agree.', why: 'Class example $g(x)=-x+2\\ (x>6)$, $x+4\\ (x<6)$ at $x=6$: left limit 10, right limit $-4$, so the limit is DNE.' },
  { t: 'Treating $f(a)$ as the limit', w: 'Assuming $\\lim f(x)=f(a)$ always, so a zero denominator means "$\\infty$".', r: '$0/0$ is indeterminate — simplify first. Only genuine $\\pm\\infty$ may be reported as infinity.', why: '$\\lim_{x\\to1}\\frac{x^2-1}{x-1}=2$, not $\\infty$.' },
  { t: 'Leaving an undefined point in the denominator', w: 'Substituting $x=2$ into $\\lim_{x\\to2}\\frac{x^2+3x-10}{x^2+x-6}$, hitting $0/0$ and giving up.', r: 'Factor $\\frac{(x-2)(x+5)}{(x+2)(x-3)}$, cancel $x-2$, then substitute.', why: 'A limit never uses the value $f(a)$, so cancelling is legitimate.' },
  { t: 'Checking only the two-sided limit for vertical asymptotes', w: 'Only reporting $x=a$ when $\\lim_{x\\to a}f(x)=\\pm\\infty$.', r: 'If either one-sided limit is $\\pm\\infty$, then $x=a$ is a vertical asymptote.', why: 'For $f(x)=\\frac{-2x^2+1}{3x-5}$ the two-sided limit at $x=\\frac53$ does not exist, yet $x=\\frac53$ is a vertical asymptote.' },
  { t: 'Misusing the squeeze theorem', w: 'Seeing $\\sin\\frac1x$ and writing $=0$.', r: 'You may squeeze only when both bounds tend to the same $L$. Here the bounds are $-1$ and $1$, so the limit does not exist.', why: 'Compare with $x^2\\sin\\frac1x$, whose bound $x^2\\to0$ squeezes it to $0$.' },
  { t: 'Leaving $h$ in the final velocity', w: 'Stopping at $v=9.8t+9.8h$.', r: 'After taking the limit, no $h$ may remain.', why: 'The CN Tower example stresses it explicitly: "Don\'t depend on h".' },
  { t: 'Omitting min in an ε–δ proof', w: 'Setting $\\delta=\\varepsilon/3$ and starting to manipulate.', r: 'Usually take $\\delta=\\min(\\text{several terms},1)$ so the middle steps stay bounded.', why: 'The proof that $\\lim_{x\\to3}\\frac1x=\\frac13$ needs $|x-3|<1$ first, so that $|x|>2$.' },
  { t: 'Confusing continuity with differentiability', w: 'Concluding that $f$ is differentiable because $\\lim f=f(a)$.', r: 'Differentiable $\\Rightarrow$ continuous, but continuous $\\nRightarrow$ differentiable.', why: '$f(x)=|x|$ is continuous at $0$ but not differentiable there (a corner).' },
  { t: 'Using a two-sided limit at an endpoint', w: 'Testing continuity at an endpoint with $\\lim_{x\\to a}$.', r: 'At the endpoints use one-sided continuity: right-continuous at the left endpoint, left-continuous at the right endpoint.', why: '$g(x)=\\sqrt{4-x^2}$ is right-continuous at $x=-2$.' },
  { t: 'Sign slip when rationalizing', w: 'Getting numerator $x$ for $\\sqrt{x^2+2x}-x$.', r: 'The numerator is $(x^2+2x)-x^2=2x$.', why: '$\\lim(\\sqrt{x^2+2x}-x)=\\lim\\frac{2}{\\sqrt{x^2+2x}+x}=1$.' },
  { t: 'Ignoring the condition on the quotient law', w: 'Applying the quotient law when the denominator limit is $0$.', r: 'The quotient law needs $\\lim g(x)\\neq0$; otherwise the form is indeterminate.', why: '$\\lim\\frac{x^2-1}{x-1}$ cannot be handled by the quotient law directly.' },
  { t: 'Mixing up infinity and DNE', w: 'Writing $\\lim_{x\\to0^+}e^{1/x}=\\infty$ without the direction.', r: 'Infinity only says "arbitrarily large": specify $+\\infty$ or $-\\infty$. If the two sides differ, the limit does not exist.', why: '$e^{1/x}$ is $+\\infty$ on the right of $0$ and $0$ on the left.' },
  { t: 'Misusing the IVT', w: 'Applying the IVT without checking continuity.', r: 'The IVT requires $f$ continuous on the closed interval $[a,b]$ and $N$ between $f(a)$ and $f(b)$.', why: '$x^3+1=x$ has a solution on $[0,1]$ because $f(0)=1>0$ and $f(1)=-1<0$.' },
  { t: 'Taking the negative reciprocal as the tangent slope', w: 'Using the negative reciprocal of the slope for the tangent line.', r: 'The tangent slope is $f\'(a)$; only the normal line uses the negative reciprocal.', why: '$y=\\sqrt{x}$ at $(3,1)$ has slope $\\frac13$, so the tangent is $y=\\frac{x}{3}+\\frac23$.' }
];

/* ---------- Formula sheet ---------- */
const SHEET = [
  { title: 'Limits and Continuity', items: [
    { lab: 'Two-sided limit', tex: '\\lim_{x\\to a}f(x)=L \\iff \\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)=L' },
    { lab: 'Continuity', tex: '\\lim_{x\\to a}f(x)=f(a)' },
    { lab: 'Substitution property', tex: 'f\\text{ polynomial/rational with }f(a)\\text{ defined}\\Rightarrow\\lim_{x\\to a}f(x)=f(a)' },
    { lab: 'Squeeze theorem', tex: 'f(x)\\le g(x)\\le h(x),\\ \\lim f=\\lim h=L \\Rightarrow \\lim g=L' },
    { lab: 'Limit laws', tex: 'cf,\\ f\\pm g,\\ fg,\\ f/g\\ (\\lim g\\neq0),\\ c,\\ x,\\ f^n,\\ \\sqrt[n]{f}' },
    { lab: 'Intermediate Value Theorem', tex: 'f\\text{ continuous on }[a,b],\\ N\\in[f(a),f(b)]\\Rightarrow\\exists c:\\ f(c)=N' }
  ]},
  { title: 'ε–δ Language', items: [
    { lab: 'Definition', tex: '\\forall\\varepsilon>0,\\ \\exists\\delta>0:\\ 0<|x-a|<\\delta \\Rightarrow |f(x)-L|<\\varepsilon' },
    { lab: 'Left limit', tex: 'a-\\delta<x<a \\Rightarrow |f(x)-L|<\\varepsilon' },
    { lab: 'Right limit', tex: 'a<x<a+\\delta \\Rightarrow |f(x)-L|<\\varepsilon' },
    { lab: 'Infinite limit', tex: '\\forall M>0,\\ \\exists\\delta>0:\\ 0<|x-a|<\\delta \\Rightarrow f(x)>M' }
  ]},
  { title: 'Asymptotes', items: [
    { lab: 'Vertical asymptote', tex: '\\lim_{x\\to a^\\pm}f(x)=\\pm\\infty \\Rightarrow x=a' },
    { lab: 'Horizontal asymptote', tex: '\\lim_{x\\to\\infty}f(x)=L\\ \\text{or}\\ \\lim_{x\\to-\\infty}f(x)=L \\Rightarrow y=L' },
    { lab: 'Rational functions', tex: '\\deg P<\\deg Q\\Rightarrow0;\\ \\deg P=\\deg Q\\Rightarrow\\text{ratio of leading coefficients}' }
  ]},
  { title: 'Derivatives', items: [
    { lab: 'Definition', tex: 'f\'(a)=\\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}' },
    { lab: 'Tangent line', tex: 'y-f(a)=f\'(a)(x-a)' },
    { lab: 'Instantaneous velocity', tex: 'v(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}' },
    { lab: 'Leibniz notation', tex: '\\frac{dy}{dx}=f\'(x)=y\'=Df(x)=D_xf(x)' },
    { lab: 'Differentiable ⇒ continuous', tex: "f'(a)\\text{ exists}\\Rightarrow f\\text{ continuous at }a" },
    { lab: 'Higher derivatives', tex: "f^{(n)},\\ y^{(n)},\\ D_x^n y,\\ \\frac{d^n y}{dx^n}" }
  ]},
  { title: 'Useful Limits', items: [
    { lab: 'Rationalizing', tex: '\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+2x}-x\\right)=\\lim\\frac{2}{\\sqrt{x^2+2x}+x}=1' },
    { lab: 'Squeeze', tex: '|x^2\\sin(1/x)|\\le x^2 \\Rightarrow \\lim_{x\\to0}x^2\\sin(1/x)=0' },
    { lab: 'Oscillation', tex: '-1\\le\\sin(1/x)\\le1 \\Rightarrow \\lim_{x\\to0}\\sin(1/x)=DNE' },
    { lab: 'Exponentials and logs', tex: '\\lim_{x\\to\\infty}e^x=\\infty,\\ \\lim_{x\\to0^+}\\ln x=-\\infty,\\ \\lim_{x\\to0^+}e^{1/x}=\\infty' }
  ]}
];
