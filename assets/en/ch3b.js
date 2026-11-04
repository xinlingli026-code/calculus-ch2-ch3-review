/* ============================================================
   Chapter 3, second half — content layer (English)
   Source: NotesOnOct27 (3.3–3.5) + NotesOnOct29 (rest of 3.5, 3.6, 3.7)
   Includes: PLAN3 — the Chapter 3 sprint plan
   ============================================================ */

const SECTIONS3B = [
  { id: '3.6', name: 'Derivatives of Logarithmic Functions', cn: '对数函数求导', en: 'Logarithmic Functions', hw: [3,5,7,9,13,15,19,33,39,41,47,56], weight: 4, tags: ['New', 'e as a limit', 'p.223'] },
  { id: '3.7', name: 'Rates of Change', cn: '变化率', en: 'Rates of Change', hw: [1], weight: 4, tags: ['Applied', 'Velocity & acceleration', 'p.233'] }
];

const SCOPE_CARDS3B = {
  '3.6': {
    desc: 'The logarithm rules d/dx ln x = 1/x and d/dx logₐ x = 1/(x ln a), the limit definition of e, and the derivative of xˣ. Many shapes of problem here — the key is simplifying before differentiating.',
    must: ['d/dx ln x = 1/x (x > 0)', 'd/dx logₐ x = 1/(x ln a)', 'd/dx ln|x| = 1/x (x ≠ 0)', 'e = lim(x→0)(1+x)^(1/x) = lim(n→∞)(1+1/n)^n', 'd/dx xˣ = xˣ(ln x + 1)']
  },
  '3.7': {
    desc: 'Putting the derivative back to work in kinematics: position s(t) → velocity v(t) = s′(t) → acceleration a(t) = s″(t), then finding rest, direction of motion, distance travelled, and speeding up versus slowing down.',
    must: ['v(t) = s′(t), a(t) = s″(t)', 'At rest ⇔ v(t) = 0', 'Moving right ⇔ v(t) > 0', 'Distance = sum of |displacement| per interval', 'Speeding up ⇔ v and a share a sign; slowing ⇔ opposite signs']
  }
};

const CONCEPTS3B = [
  {
    sec: '3.5', title: 'Derivatives of Inverse Trigonometric Functions',
    items: [
      { dt: 'arcsin', dd: 'y = arcsin x means sin y = x; differentiating implicitly gives cos y · y′ = 1.', formula: '\\dfrac{d}{dx}\\arcsin x=\\dfrac{1}{\\sqrt{1-x^2}}\\qquad(-1<x<1)' },
      { dt: 'arccos', dd: 'y = arccos x means cos y = x; differentiating implicitly gives −sin y · y′ = 1.', formula: '\\dfrac{d}{dx}\\arccos x=-\\dfrac{1}{\\sqrt{1-x^2}}' },
      { dt: 'arctan', dd: 'y = arctan x means tan y = x; differentiating gives sec²y · y′ = 1, then use sec²y = 1 + tan²y.', formula: '\\dfrac{d}{dx}\\arctan x=\\dfrac{1}{1+x^2}' },
      { dt: 'Why arcsin takes the positive root', dd: 'arcsin has range [−π/2, π/2], where cos y > 0, so cos y = √(1 − sin²y) = √(1 − x²) with no sign.', callout: 'The range restriction is not a detail — it is the only reason arcsin carries a plus and arccos a minus.' },
      { dt: 'The other four inverses', dd: 'The table at the end of Section 3.5 of the textbook (proofs left as Exercise 64).', formula: '\\dfrac{d}{dx}\\operatorname{arcsec}x=\\dfrac{1}{x\\sqrt{x^2-1}}\\quad \\dfrac{d}{dx}\\operatorname{arccsc}x=-\\dfrac{1}{x\\sqrt{x^2-1}}\\quad \\dfrac{d}{dx}\\operatorname{arccot}x=-\\dfrac{1}{1+x^2}' },
      { dt: 'General inverse function rule', dd: 'If f is one-to-one and differentiable and f⁻¹ is differentiable, then (f⁻¹)′(x) = 1/f′(f⁻¹(x)), provided the denominator is not 0.', formula: '(f^{-1})\'(x)=\\dfrac{1}{f\'(f^{-1}(x))}' }
    ]
  },
  {
    sec: '3.6', title: 'Logarithmic Derivatives and the Limit for e',
    items: [
      { dt: 'The natural logarithm', dd: 'Let y = ln x, so x = e^y. Differentiating with respect to x gives 1 = e^y y′, hence y′ = 1/e^y = 1/x.', formula: '\\dfrac{d}{dx}\\ln x=\\dfrac{1}{x}\\qquad(x>0)' },
      { dt: 'Logarithm to any base', dd: 'Since logₐ x = ln x / ln a and ln a is a constant.', formula: '\\dfrac{d}{dx}\\log_a x=\\dfrac{1}{x\\ln a}\\qquad(a>0,\\ a\\ne1)' },
      { dt: 'The absolute value version', dd: 'For x > 0, ln|x| = ln x; for x < 0, ln|x| = ln(−x), and differentiating also gives 1/x.', formula: '\\dfrac{d}{dx}\\ln|x|=\\dfrac{1}{x}\\qquad(x\\ne0)' },
      { dt: 'e as a limit', dd: 'e can be defined as lim(x→0)(1+x)^(1/x), and it also equals the sequence limit lim(n→∞)(1+1/n)^n.', formula: 'e=\\lim_{x\\to0}(1+x)^{1/x}=\\lim_{n\\to\\infty}\\left(1+\\dfrac1n\\right)^{n}' },
      { dt: 'General base', dd: 'Write (1 + k/n)^n as [(1 + k/n)^(n/k)]^k, and the bracket tends to e.', formula: '\\lim_{n\\to\\infty}\\left(1+\\dfrac{k}{n}\\right)^{n}=e^{k}' },
      { dt: 'Logarithm laws', dd: 'ln(uv) = ln u + ln v, ln(u/v) = ln u − ln v, ln(u^a) = a ln u. Splitting first is usually faster than differentiating directly.', callout: 'Whenever you see ln of a factorable expression, split it into a difference of two logs first.' },
      { dt: 'The power function xˣ', dd: 'Both base and exponent involve x, so take logs: y = xˣ ⇒ ln y = x ln x ⇒ y′/y = ln x + 1.', formula: 'y\'=x^{x}(\\ln x+1)' }
    ]
  },
  {
    sec: '3.7', title: 'Rates of Change',
    items: [
      { dt: 'Velocity and acceleration', dd: 'The derivative of position s(t) is velocity v(t) = s′(t); the derivative of velocity is acceleration a(t) = s″(t).', formula: 'v(t)=s\'(t),\\qquad a(t)=s\'\'(t)=v\'(t)' },
      { dt: 'When the particle is at rest', dd: 'The moments when velocity is 0: solve s′(t) = 0. Velocity 0 does not mean "not moving" — it can be a turning point.', formula: 's\'(t)=0' },
      { dt: 'Direction of motion', dd: 'Moving to the right (positive direction) ⇔ v(t) > 0; moving to the left ⇔ v(t) < 0.', formula: 'v(t)>0\\ \\Rightarrow\\ \\text{right};\\qquad v(t)<0\\ \\Rightarrow\\ \\text{left}' },
      { dt: 'Total distance', dd: 'Distance accumulates the absolute value of velocity, so you cannot just subtract positions. Find the sign changes, then add |Δs| per interval.', formula: '\\text{distance}=\\sum |s(t_{i+1})-s(t_i)|' },
      { dt: 'Speeding up or slowing down', dd: 'Acceleration and velocity with the same sign ⇒ speeding up; opposite signs ⇒ slowing down.', callout: 'The test is purely "same sign or opposite sign" — do not guess from a picture. A sign table for v and a is the safest route.' },
      { dt: 'Standard workflow', dd: 'Write s(t) → find v(t) = s′ → solve v(t) = 0 for the rest points → use v > 0 / v < 0 for direction → evaluate s at the key times for distance → find a(t) = s″ → use same/opposite signs for speeding up and slowing down.' }
    ]
  }
];

const FLASHCARDS3B = [
  { tag: '3.5', q: 'The three inverse trig derivatives you must memorise?', a: '$\\dfrac{d}{dx}\\arcsin x=\\dfrac{1}{\\sqrt{1-x^2}},\\ \\dfrac{d}{dx}\\arccos x=-\\dfrac{1}{\\sqrt{1-x^2}},\\ \\dfrac{d}{dx}\\arctan x=\\dfrac{1}{1+x^2}$' },
  { tag: '3.5', q: 'Why does the arcsin derivation take the positive root?', a: '$\\arcsin x$ has range $[-\\pi/2,\\pi/2]$, where $\\cos y>0$, so $\\cos y=\\sqrt{1-x^2}$ (never $\\pm$)' },
  { tag: '3.5', q: 'How do the arcsin and arccos derivatives differ?', a: 'Only by a sign: $\\dfrac{d}{dx}\\arccos x=-\\dfrac{d}{dx}\\arcsin x$' },
  { tag: '3.5', q: 'General formula for the derivative of an inverse function?', a: '$(f^{-1})\'(x)=\\dfrac{1}{f\'(f^{-1}(x))}$ (f one-to-one, f′ ≠ 0)' },
  { tag: '3.5', q: 'Standard recipe for an implicit second derivative?', a: 'First solve F(x,y) = 0 for y′ as an expression in x and y, then differentiate once more with respect to x — the chain rule puts a y′ there too' },
  { tag: '3.6', q: 'd/dx ln x = ?', a: '$\\dfrac{1}{x}$ (from y = ln x ⇔ x = e^y)' },
  { tag: '3.6', q: 'd/dx logₐ x = ?', a: '$\\dfrac{1}{x\\ln a}$' },
  { tag: '3.6', q: 'd/dx ln|x| = ?', a: '$\\dfrac{1}{x}$ for x ≠ 0 (ln x for x > 0, ln(−x) for x < 0)' },
  { tag: '3.6', q: 'Two limit definitions of e?', a: '$e=\\lim_{x\\to0}(1+x)^{1/x}=\\lim_{n\\to\\infty}(1+\\dfrac1n)^{n}$' },
  { tag: '3.6', q: 'd/dx xˣ = ?', a: '$x^x(\\ln x+1)$ (take logs first)' },
  { tag: '3.6', q: 'How do you differentiate aᵃˣ-style expression?', a: 'Rewrite it as $e^{x\\ln a}$; the derivative of $e^{\\cdot}$ is itself, then multiply by the inner derivative $\\ln a$ to get $a^x\\ln a$' },
  { tag: '3.7', q: 'How are position, velocity and acceleration related?', a: '$v(t)=s\'(t)$ and $a(t)=s\'\'(t)=v\'(t)$' },
  { tag: '3.7', q: 'When is the particle at rest?', a: 'At the times when $v(t)=s\'(t)=0$' },
  { tag: '3.7', q: 'How do you decide speeding up versus slowing down?', a: 'Same sign of v and a ⇒ speeding up; opposite signs ⇒ slowing down' },
  { tag: '3.7', q: 'Distance travelled versus displacement?', a: 'Distance = sum of |displacement| over each interval (an accumulation of |v|), not $s(t_2)-s(t_1)$' }
];

const PITFALLS3B = [
  { sec: '3.5', t: 'Swapping the sign on arcsin and arccos', w: '$\\dfrac{d}{dx}\\arccos x=\\dfrac{1}{\\sqrt{1-x^2}}$.', r: '$\\dfrac{d}{dx}\\arccos x=-\\dfrac{1}{\\sqrt{1-x^2}}$ — arcsin plus, arccos minus.', why: 'From $\\cos y=x$ you get $-\\sin y\\,y\'=1$; the minus comes from $\\dfrac{d}{dx}\\cos x=-\\sin x$.' },
  { sec: '3.5', t: 'Forgetting the range restriction in inverse trig', w: 'Writing $\\cos y=\\pm\\sqrt{1-x^2}$ and substituting.', r: 'Use the range to fix the sign: $\\arcsin x\\in[-\\pi/2,\\pi/2]\\Rightarrow\\cos y>0$.', why: 'Otherwise the arcsin derivative comes out with a $\\pm$, which is not an answer.' },
  { sec: '3.5', t: 'Treating y as a constant in implicit differentiation', w: 'Differentiating $x^2+y^2=16$ and writing $2x=0$.', r: 'Differentiate both sides with respect to x; y is a function of x, so $y^2$ becomes $2y\\cdot y\'$.', why: 'Textbook Example 4: $4x^3+4y^3y\'=0$.' },
  { sec: '3.5', t: 'Forgetting the y′ when taking a second derivative', w: 'Differentiating $y\'=-\\dfrac{x^3}{y^3}$ as if y were constant.', r: '$\\dfrac{d}{dx}(y^{-3})=-3y^{-4}y\'$ — the chain rule brings a y′ in.', why: 'The textbook result $y\'\'=-\\dfrac{48x^2}{y^7}$ still contains y precisely because of that step.' },
  { sec: '3.6', t: 'Dropping ln a in the derivative of logₐ x', w: '$\\dfrac{d}{dx}\\log_a x=\\dfrac1x$.', r: '$\\dfrac{d}{dx}\\log_a x=\\dfrac{1}{x\\ln a}$ — from $\\ln x=\\ln a\\cdot\\log_a x$.', why: '$\\log_a x=\\dfrac{\\ln x}{\\ln a}$; ln a is a constant but it stays in the denominator.' },
  { sec: '3.6', t: 'Splitting a logarithm without the absolute value', w: 'Writing $\\ln(x^2)=2\\ln x$.', r: '$\\ln(x^2)=2\\ln|x|$; only for x > 0 can you write $2\\ln x$.', why: '$\\ln|x|$ is differentiable for x ≠ 0 with derivative $\\dfrac1x$.' },
  { sec: '3.6', t: 'Not knowing how to differentiate xˣ', w: 'Treating $x^x$ as a power of x and applying the power rule.', r: 'The power rule needs a constant base. Take logs: $\\ln y=x\\ln x$, then $\\dfrac{y\'}{y}=\\ln x+1$.', why: 'Both class examples, $y=x^x$ and $y=(x^2+1)^{\\sin x}$, follow this pattern.' },
  { sec: '3.6', t: 'Confusing the limit for e with a general power limit', w: 'Writing $\\lim_{n\\to\\infty}(1+\\dfrac1n)^n=e^n$.', r: 'It is e; only $\\lim(1+\\dfrac{k}{n})^n=e^k$ with a changing base gives e^k.', why: 'Class examples: $\\lim(\\dfrac{n+2}{n})^n=e^2$ and $\\lim(\\dfrac{n-2}{n})^n=e^{-2}$.' },
  { sec: '3.7', t: 'Using the difference of positions as the distance', w: 'Writing the total distance as $s(5)-s(0)$.', r: 'Find where the velocity changes sign, split the interval, and add $|\\Delta s|$ for each piece.', why: 'In the class example $s=t^3-6t^2+9t$ the particle rests at t = 1 and t = 3, and the distance in 5 s is $4+4+20=28$, not 20.' },
  { sec: '3.7', t: 'Getting the speeding-up test backwards', w: 'Saying "a(t) > 0 so it speeds up".', r: 'Look at whether v and a share a sign: same sign speeds up, opposite signs slow down.', why: 'A particle moving left has v < 0; if a > 0 at that moment it is slowing down.' }
];

const SHEET3B = [
  { ch: '3', title: '3.5 Inverse trig derivatives', items: [
    { lab: 'arcsin', tex: '\\frac{d}{dx}\\arcsin x=\\frac{1}{\\sqrt{1-x^2}}' },
    { lab: 'arccos', tex: '\\frac{d}{dx}\\arccos x=-\\frac{1}{\\sqrt{1-x^2}}' },
    { lab: 'arctan', tex: '\\frac{d}{dx}\\arctan x=\\frac{1}{1+x^2}' },
    { lab: 'arcsec', tex: '\\frac{d}{dx}\\operatorname{arcsec}x=\\frac{1}{x\\sqrt{x^2-1}}' },
    { lab: 'arccsc', tex: '\\frac{d}{dx}\\operatorname{arccsc}x=-\\frac{1}{x\\sqrt{x^2-1}}' },
    { lab: 'arccot', tex: '\\frac{d}{dx}\\operatorname{arccot}x=-\\frac{1}{1+x^2}' },
    { lab: 'Range', tex: '\\arcsin x\\in[-\\pi/2,\\pi/2]\\Rightarrow\\cos y>0' },
    { lab: 'Inverse function', tex: '(f^{-1})\'(x)=\\frac{1}{f\'(f^{-1}(x))}' }
  ] },
  { ch: '3', title: '3.6 Logarithmic derivatives', items: [
    { lab: 'Natural log', tex: '\\frac{d}{dx}\\ln x=\\frac{1}{x}\\quad(x>0)' },
    { lab: 'Absolute value', tex: '\\frac{d}{dx}\\ln|x|=\\frac{1}{x}\\quad(x\\ne0)' },
    { lab: 'Any base', tex: '\\frac{d}{dx}\\log_a x=\\frac{1}{x\\ln a}' },
    { lab: 'Definition of e', tex: 'e=\\lim_{x\\to0}(1+x)^{1/x}=\\lim_{n\\to\\infty}\\left(1+\\frac1n\\right)^n' },
    { lab: 'General base', tex: '\\lim_{n\\to\\infty}\\left(1+\\frac{k}{n}\\right)^n=e^k' },
    { lab: 'Log laws', tex: '\\ln(uv)=\\ln u+\\ln v,\\ \\ln\\frac{u}{v}=\\ln u-\\ln v' },
    { lab: 'Power function', tex: 'y=x^x\\Rightarrow y\'=x^x(\\ln x+1)' },
    { lab: 'General power', tex: 'y=u(x)^{v(x)}\\Rightarrow \\frac{y\'}{y}=v\'\\ln u+v\\frac{u\'}{u}' }
  ] },
  { ch: '3', title: '3.7 Rates of change', items: [
    { lab: 'Velocity', tex: 'v(t)=s\'(t)' },
    { lab: 'Acceleration', tex: 'a(t)=s\'\'(t)=v\'(t)' },
    { lab: 'At rest', tex: 'v(t)=0' },
    { lab: 'Direction', tex: 'v(t)>0\\ \\text{right};\\quad v(t)<0\\ \\text{left}' },
    { lab: 'Distance', tex: '\\text{distance}=\\sum|s(t_{i+1})-s(t_i)|' },
    { lab: 'Speed up / slow down', tex: 'v\\cdot a>0\\ \\text{speeding up};\\quad v\\cdot a<0\\ \\text{slowing down}' }
  ] }
];

const PROBLEMS3B = [
  { sec: '3.5', num: 'Ex 4', type: 'Implicit differentiation · tangent',
    q: 'Find the equation of the tangent line to the curve $4x^2y-3y=x^3$ at the point $(1,1)$.', ans: '$y=-5x+6$',
    steps: ['Differentiate: $8xy+4x^2y\'-3y\'=3x^2$',
            'Collect: $y\'(4x^2-3)=3x^2-8xy$',
            'At $(1,1)$: $y\'=\\dfrac{3-8}{4-3}=-5$',
            'Tangent: $y-1=-5(x-1)$, i.e. $y=-5x+6$'] },
  { sec: '3.5', num: 'Ex 5', type: 'Implicit differentiation · horizontal tangent',
    q: 'In the first quadrant, at what point is the tangent line to $x^3+y^3=6xy$ horizontal?', ans: '$\\left(2\\sqrt[3]{2},\\ 2\\sqrt[3]{4}\\right)$',
    steps: ['Differentiate: $3x^2+3y^2y\'=6y+6xy\'$',
            'So $y\'=\\dfrac{6y-3x^2}{3y^2-6x}$',
            'Horizontal $\\Rightarrow y\'=0\\Rightarrow 6y=3x^2\\Rightarrow y=\\dfrac{x^2}{2}$',
            'Substituting: $x^3+\\dfrac{x^6}{8}=3x^3\\Rightarrow x^3=16\\Rightarrow x=2\\sqrt[3]{2}$, $y=2\\sqrt[3]{4}$'] },
  { sec: '3.5', num: 'Ex 6', type: 'Implicit differentiation',
    q: 'Given $\\sin(x+y)=y^2\\cos x$, find $\\dfrac{dy}{dx}$.', ans: '$y\'=\\dfrac{y^2\\sin x+\\cos(x+y)}{2y\\cos x-\\cos(x+y)}$',
    steps: ['Differentiate: $\\cos(x+y)(1+y\')=2y\\,y\'\\cos x-y^2\\sin x$',
            'Collect the y′ terms: $\\cos(x+y)+y^2\\sin x=y\'\\bigl(2y\\cos x-\\cos(x+y)\\bigr)$',
            'Solve for y′'] },
  { sec: '3.5', num: 'Ex 7', type: 'Implicit second derivative',
    q: 'Given $x^4+y^4=16$, find $y\'\'$.', ans: '$y\'\'=-\\dfrac{48x^2}{y^7}$',
    steps: ['First derivative: $4x^3+4y^3y\'=0\\Rightarrow y\'=-\\dfrac{x^3}{y^3}$',
            'Differentiate again (quotient rule + chain rule): $y\'\'=-\\dfrac{3x^2}{y^3}-\\dfrac{3x^6}{y^7}$',
            'Use $x^4+y^4=16$: $y\'\'=-\\dfrac{3x^2(x^4+y^4)}{y^7}=-\\dfrac{48x^2}{y^7}$'] },
  { sec: '3.5', num: 'Ex 8', type: 'Inverse trig derivative',
    q: 'Differentiate $y=(\\sin^{-1}x)^2$.', ans: '$y\'=\\dfrac{2\\sin^{-1}x}{\\sqrt{1-x^2}}$',
    steps: ['Write it as $(\\sin^{-1}x)^2$: $y\'=2\\sin^{-1}x\\cdot\\dfrac{d}{dx}(\\sin^{-1}x)$',
            'Substitute $\\dfrac{d}{dx}\\sin^{-1}x=\\dfrac{1}{\\sqrt{1-x^2}}$'] },
  { sec: '3.5', num: 'Ex 9', type: 'Inverse trig derivative · product rule',
    q: 'Differentiate $y=x\\arctan\\sqrt{x}$.', ans: '$y\'=\\arctan\\sqrt{x}+\\dfrac{\\sqrt{x}}{2(1+x)}$',
    steps: ['Product rule: $y\'=\\arctan\\sqrt{x}+x\\cdot\\dfrac{d}{dx}(\\arctan\\sqrt{x})$',
            '$\\dfrac{d}{dx}(\\arctan\\sqrt{x})=\\dfrac{1}{1+x}\\cdot\\dfrac{1}{2\\sqrt{x}}$',
            'So $y\'=\\arctan\\sqrt{x}+\\dfrac{x}{2\\sqrt{x}(1+x)}=\\arctan\\sqrt{x}+\\dfrac{\\sqrt{x}}{2(1+x)}$'] },

  { sec: '3.6', num: 'Ex 1', type: 'Logarithmic derivative',
    q: 'Find $\\dfrac{d}{dx}\\ln\\sqrt[3]{x}$.', ans: '$y\'=\\dfrac{1}{3x^{5/3}}$',
    steps: ['$\\ln\\sqrt[3]{x}=\\ln(x^{1/3})=\\dfrac13\\ln x$',
            '$y\'=\\dfrac13\\cdot\\dfrac1x=\\dfrac{1}{3x^{5/3}}$'] },
  { sec: '3.6', num: 'Ex 2', type: 'Derivation · natural log',
    q: 'Derive $\\dfrac{d}{dx}\\ln x=\\dfrac1x$.', ans: '$y\'=\\dfrac1x$',
    steps: ['Let y = ln x, so x = e^y', 'Differentiate with respect to x: $1=e^y\\cdot y\'$', 'Hence $y\'=\\dfrac{1}{e^y}=\\dfrac1x$'] },
  { sec: '3.6', num: 'Ex 3', type: 'Derivation · any base',
    q: 'Derive $\\dfrac{d}{dx}\\log_a x=\\dfrac{1}{x\\ln a}$.', ans: '$\\dfrac{d}{dx}\\log_a x=\\dfrac{1}{x\\ln a}$',
    steps: ['$\\log_a x=\\dfrac{\\ln x}{\\ln a}$ with $\\ln a$ constant',
            '$y\'=\\dfrac{1}{\\ln a}\\cdot\\dfrac{1}{x}=\\dfrac{1}{x\\ln a}$'] },
  { sec: '3.6', num: 'Ex 4', type: 'Logarithmic derivative · factoring',
    q: 'Find $\\dfrac{d}{dx}\\ln(x^2+x-2)$.', ans: '$y\'=\\dfrac{2x+1}{x^2+x-2}=\\dfrac{1}{x-1}+\\dfrac{1}{x+2}$',
    steps: ['Factor: $x^2+x-2=(x+2)(x-1)$',
            '$\\ln(x^2+x-2)=\\ln|x+2|+\\ln|x-1|$',
            '$y\'=\\dfrac{1}{x+2}+\\dfrac{1}{x-1}=\\dfrac{2x+1}{x^2+x-2}$'] },
  { sec: '3.6', num: 'Ex 5', type: 'Logarithmic derivative · absolute value',
    q: 'Show that $\\dfrac{d}{dx}\\ln|x|=\\dfrac1x$.', ans: '$y\'=\\dfrac1x\\ (x\\ne0)$',
    steps: ['For x > 0, $\\ln|x|=\\ln x$ with derivative $\\dfrac1x$',
            'For x < 0, $\\ln|x|=\\ln(-x)$ and $y\'=\\dfrac{1}{-x}\\cdot(-1)=\\dfrac1x$',
            'Both cases agree, and the function is undefined at x = 0'] },
  { sec: '3.6', num: 'Ex 6', type: 'Logarithmic derivative · chain rule',
    q: 'Find $\\dfrac{d}{dx}\\ln(1+\\cos x)$.', ans: '$y\'=-\\dfrac{\\sin x}{1+\\cos x}$',
    steps: ['$y\'=\\dfrac{1}{1+\\cos x}\\cdot(-\\sin x)=-\\dfrac{\\sin x}{1+\\cos x}$'] },
  { sec: '3.6', num: 'Ex 7', type: 'Logarithmic derivative · root',
    q: 'Find $\\dfrac{d}{dx}(\\ln x)^{1/3}$.', ans: '$y\'=\\dfrac{1}{3x(\\ln x)^{2/3}}$',
    steps: ['Let u = ln x and y = u^(1/3), so $y\'=\\dfrac13u^{-2/3}\\,u\'$',
            'With $u\'=\\dfrac1x$: $y\'=\\dfrac{1}{3(\\ln x)^{2/3}\\cdot x}$'] },
  { sec: '3.6', num: 'Ex 8', type: 'Logarithmic derivative · root',
    q: 'Differentiate $y=\\ln\\sqrt[3]{x^2-1}$ (x > 1).', ans: '$y\'=\\dfrac{2x}{3(x^2-1)^{2/3}}$',
    steps: ['$y=\\dfrac13\\ln(x^2-1)$',
            '$y\'=\\dfrac13\\cdot\\dfrac{2x}{x^2-1}=\\dfrac{2x}{3(x^2-1)}$'] },
  { sec: '3.6', num: 'Ex 9', type: 'Power function · take logs',
    q: 'Differentiate $y=x^x$.', ans: '$y\'=x^x(\\ln x+1)$',
    steps: ['Take logs: $\\ln y=x\\ln x$',
            'Differentiate: $\\dfrac{y\'}{y}=\\ln x+x\\cdot\\dfrac1x=\\ln x+1$',
            'Hence $y\'=x^x(\\ln x+1)$'] },
  { sec: '3.6', num: 'Ex 10', type: 'Power function · take logs',
    q: 'Differentiate $y=(x^2+1)^{\\sin x}$.', ans: '$y\'=(x^2+1)^{\\sin x}\\left[\\cos x\\,\\ln(x^2+1)+\\dfrac{2x\\sin x}{x^2+1}\\right]$',
    steps: ['Take logs: $\\ln y=\\sin x\\,\\ln(x^2+1)$',
            'Differentiate: $\\dfrac{y\'}{y}=\\cos x\\,\\ln(x^2+1)+\\sin x\\cdot\\dfrac{2x}{x^2+1}$',
            'Multiply both sides by y'] },
  { sec: '3.6', num: 'Ex 11', type: 'Limit for e',
    q: 'Evaluate $\\lim_{n\\to\\infty}\\left(\\dfrac{n+2}{n}\\right)^{n}$.', ans: '$e^2$',
    steps: ['$\\left(\\dfrac{n+2}{n}\\right)^{n}=\\left(1+\\dfrac2n\\right)^{n}=\\left[\\left(1+\\dfrac2n\\right)^{n/2}\\right]^{2}$',
            'The bracket tends to e, so the whole expression tends to $e^2$'] },
  { sec: '3.6', num: 'Ex 12', type: 'Limit for e',
    q: 'Evaluate $\\lim_{n\\to\\infty}\\left(\\dfrac{n-2}{n}\\right)^{n}$.', ans: '$e^{-2}$',
    steps: ['$\\left(1-\\dfrac2n\\right)^{n}=\\left[\\left(1-\\dfrac2n\\right)^{-n/2}\\right]^{-2}$',
            'The bracket tends to e, so the whole expression tends to $e^{-2}$'] },

  { sec: '3.7', num: 'Ex 1', type: 'Rates of change · full problem',
    q: 'The position of a particle is $s=f(t)=t^3-6t^2+9t$ metres, with $t\\ge0$ seconds. ' +
      '(a) Find the velocity at time t. (b) What is the velocity after 2 s? After 4 s? ' +
      '(c) When is the particle at rest? (d) When is it moving to the right? ' +
      '(e) Find the total distance travelled in the first 5 seconds. (f) Find the acceleration. ' +
      '(g) When is it speeding up? When is it slowing down?',
    ans: '(a) $v(t)=3t^2-12t+9=3(t-1)(t-3)$; (b) $v(2)=-3$, $v(4)=9$; (c) $t=1,3$; ' +
         '(d) $t\\in(0,1)\\cup(3,\\infty)$; (e) $28$ m; (f) $a(t)=6t-12$; ' +
         '(g) speeding up on $t\\in(1,2)\\cup(3,\\infty)$, slowing down on $t\\in(0,1)\\cup(2,3)$',
    steps: ['(a) $v(t)=s\'(t)=3t^2-12t+9=3(t-1)(t-3)$',
            '(b) $v(2)=12-24+9=-3$, $v(4)=48-48+9=9$',
            '(c) $3(t-1)(t-3)=0$ gives $t=1$ or $t=3$',
            '(d) $v(t)>0$ for $t<1$ or $t>3$ (with $t\\ge0$)',
            '(e) Key times $t=0,1,3,5$: $s(0)=0,\\ s(1)=4,\\ s(3)=0,\\ s(5)=20$; ' +
            'distance $=|4-0|+|0-4|+|20-0|=28$',
            '(f) $a(t)=s\'\'(t)=6t-12=6(t-2)$',
            '(g) Same sign speeds up, opposite signs slow down: on $(1,2)$ we have $v<0,a<0$ (speeding up), ' +
            'on $(2,3)$ we have $v<0,a>0$ (slowing down), and for $t>3$, $v>0,a>0$ (speeding up)'] },
  { sec: '3.7', num: 'Ex 2', type: 'Rates of change · acceleration',
    q: 'Given $v(t)=3t^2-12t+9$, find the acceleration $a(t)$ and say whether the speed is increasing or decreasing.', ans: '$a(t)=6t-12$; the speed decreases for $t<2$ and increases for $t>2$',
    steps: ['$a(t)=v\'(t)=6t-12$',
            '$a<0 \\Leftrightarrow t<2$ (speed decreasing), $a>0 \\Leftrightarrow t>2$ (speed increasing)'] }
];

/* ============================================================
   Sprint plan for the Chapter 3 topic
   ============================================================ */
const PLAN3 = {
  headline: 'Use this one if the exam only covers Chapter 3: eleven sections, three hot spots (3.4 chain rule, 3.5 implicit and inverse trig, 3.9–3.11 related rates and linear approximation), and one timed mock.',
  tiers: [
    { id: 'A3', title: 'Tier A · 48 hours before the exam (Chapter 3)', when: 'Only 2 days left', goal: 'Rewrite every derivative formula from 3.1–3.7 from memory and work through all assigned homework',
      minutes: '3–4 hours total',
      steps: [
        'Round 1 (60 min): open Concept Checklist and read only the 3.1–3.7 formula boxes, writing each formula out by hand and marking the wrong ones in red',
        'Round 2 (60 min): open Homework and work in the order 3.3 → 3.4 → 3.5 → 3.6 → 3.9 → 3.10, three problems per section first, solutions collapsed by default',
        'Round 3 (45 min): focus on 3.5 implicit and inverse trig — the section where marks are lost most easily; then do 3.9 related rates and 3.10 linear approximation, writing the variable relationship down in full each time',
        'Round 4 (30 min): open Self-Test, scope Chapter 3, 15 questions, untimed, then read the wrong-answer solutions',
        'Round 5 (20 min): print the Formula Sheet and copy only the 3.5 / 3.6 / 3.7 / 3.9 / 3.10 / 3.11 columns by hand',
        'Wrap up: review only the formulas and problems you marked in red — no new problems'
      ] },
    { id: 'B3', title: 'Tier B · 5 days before the exam (Chapter 3)', when: 'A week left, but only Chapter 3 is examined', goal: 'Every formula written from memory, every assigned problem attempted, one timed mock',
      minutes: '50–70 minutes a day',
      steps: [
        'Day 1: 3.1 + 3.2 (fundamentals, product and quotient rules) — formula drill plus all assigned problems',
        'Day 2: 3.3 trigonometric derivatives — write the four formulas three times each, then five special-limit problems',
        'Day 3: 3.4 chain rule — drill the "unwrap one layer at a time" method',
        'Day 4: 3.5 implicit and inverse trig — memorise the implicit template, the three inverse formulas, and the tangent/horizontal-tangent problems',
        'Day 5: 3.6 + 3.7 — logarithmic derivatives (including taking logs for xˣ) and the rates-of-change problem, then a timed mock of 20 questions in 25 minutes',
        'Day 6: Chapter 3 sections 3.9 / 3.10 / 3.11 — the five-step related-rates method, linear approximation and error estimates, and the hyperbolic function formulas'
      ] },
    { id: 'C3', title: 'Tier C · 30 minutes before you walk in (Chapter 3)', when: 'Right before the exam', goal: 'Wake up the formulas and the traps — no new problems',
      minutes: '30 minutes',
      steps: [
        '8 minutes: Formula Sheet, only the 3.5 / 3.6 / 3.7 / 3.9 / 3.10 / 3.11 columns',
        '10 minutes: Common Traps, only the twenty Chapter 3 entries (arcsin sign, missing ln a, xˣ, distance vs displacement, substituting numbers into a related-rates equation too early, dy passed off as Δy…)',
        '7 minutes: redo the three problems you got wrong last night, writing only the key step',
        '5 minutes: confirm the basics — trig in radians; lim sin t/t = 1 only as t→0; horizontal tangent ⇔ f′ = 0; speeding up means v and a share a sign',
        'Remaining time: breathe, do not start new problems'
      ] }
  ],
  loop: [
    { title: '① Formula drill (10 min)', detail: 'Read only the Chapter 3 formula boxes and the "results you must know" blocks, then copy the formulas once. This step is about getting the vocabulary straight, not memorising problems.' },
    { title: '② Textbook homework (30–45 min)', detail: 'Work through the assigned numbers and tick "Done" as you go. Do not skip past a wrong answer — write the full step yourself first, then open the solution and compare.' },
    { title: '③ Wrong-answer round (15 min)', detail: 'Redo only what you got wrong; never redo what you got right. Implicit and inverse trig are the biggest concentration of lost marks, so start there.' },
    { title: '④ Random self-test (15–20 min)', detail: 'Scope Chapter 3, 10–15 questions, untimed; once it feels easy, switch to the timed mode and do 20. Read the solutions for every miss.' },
    { title: '⑤ Formula sheet (5 min)', detail: 'Last step every day: write out the 3.5 / 3.6 / 3.7 formulas by hand — far more effective than reading them ten times.' }
  ],
  triage: [
    { rule: 'No idea at all', detail: 'Go back to Concept Checklist for that section, read only the definition and theorem boxes, then redo the first example of that type.' },
    { rule: 'Right idea, wrong arithmetic', detail: 'That is a computation slip, not a concept gap. Slow down, write the intermediate expression, and record the cause in the solution steps.' },
    { rule: 'Chain rule keeps dropping the inner derivative', detail: 'Fix the habit: write the outer derivative first, multiply by the inner derivative, then peel one layer at a time.' },
    { rule: 'Implicit differentiation is a blank page', detail: 'Memorise the three-line template: differentiate both sides in x → collect the y′ terms → solve for y′. See 3.5 Ex 4, Ex 6, Ex 7.' },
    { rule: 'Inverse trig signs are muddled', detail: 'Ask for the range first: arcsin has range [−π/2, π/2] where cos y > 0, so the positive root; arccos adds the minus sign.' },
    { rule: 'Cannot tell speeding up from slowing down', detail: 'Build a sign table: list the zeros of v(t) and a(t) and the sign on each interval — same sign speeds up, opposite signs slow down.' }
  ],
  last10: [
    'arcsin carries a plus, arccos a minus',
    'The arccot derivative is −1/(1+x²)',
    'logₐ x has an ln a in the denominator',
    'The derivative of ln|x| is 1/x for x ≠ 0',
    'xˣ needs a logarithm before you can differentiate it',
    '(1+1/n)^n → e; a changing base gives e^k',
    'Collect the y′ terms after implicit differentiation',
    'A second derivative also carries a y′ (chain rule)',
    'Distance = sum of |displacement|, not the difference',
    'Speeding up is about signs of v and a, not the sign of a',
    'Related rates: differentiate with respect to t first, substitute numbers afterwards',
    'dy is the approximation, Δy is the actual change',
    'The hyperbolic identity is cosh² − sinh² = 1 (minus sign)'
  ]
};
