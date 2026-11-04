/* ============================================================
   Chapter 3, sections 3.9–3.11 — content layer (English)
   Source: NotesOnNov03 (3.9 Related Rates, 3.10 Linear Approximations
   and Differentials, 3.11 Hyperbolic Functions)
   Includes: HW3C — the assigned homework for those three sections
   ============================================================ */

const SECTIONS3C = [
  { id: '3.9', name: 'Related Rates', cn: '相关速率', en: 'Related Rates', hw: [3,5,17,22,25,32,45], weight: 4, tags: ['Applied', 'Chain rule', 'p.249'] },
  { id: '3.10', name: 'Linear Approximations and Differentials', cn: '线性近似与微分', en: 'Linear Approximations', hw: [19,25,33,35,40], weight: 4, tags: ['Estimation', 'Error bounds', 'p.256'] },
  { id: '3.11', name: 'Hyperbolic Functions', cn: '双曲函数', en: 'Hyperbolic Functions', hw: [24,31,33,35,37], weight: 3, tags: ['New formulas', 'Mostly memorisation', 'p.264'] }
];

const SCOPE_CARDS3C = {
  '3.9': {
    desc: 'Related rates: several quantities all change with time, so you link them with one equation and differentiate it with respect to t using the Chain Rule.',
    must: ['The five-step recipe: read → draw → assign variables → write the equation → differentiate in t → substitute', 'State clearly which rate is given and which is required', 'Differentiate first, substitute numbers last', 'Use similar triangles to eliminate r in cone problems']
  },
  '3.10': {
    desc: 'Approximating nearby function values with the tangent line: the linearisation L(x) = f(a) + f′(a)(x − a), the differential dy = f′(a)dx, and using them to bound measurement errors.',
    must: ['L(x) = f(a) + f′(a)(x − a)', 'dy = f′(a)dx', 'Δy is the actual change, dy is the linear approximation', 'Absolute error dV, relative error dV/V, percentage error = relative error × 100%']
  },
  '3.11': {
    desc: 'Hyperbolic functions: a family built from eˣ and e⁻ˣ that behave like the trigonometric functions but with their derivatives swapped.',
    must: ['sinh x = (eˣ − e⁻ˣ)/2, cosh x = (eˣ + e⁻ˣ)/2', 'tanh x = sinh x / cosh x', 'Identity cosh²x − sinh²x = 1', 'sinh is odd, cosh is even', 'd/dx sinh x = cosh x, d/dx cosh x = sinh x']
  }
};

const CONCEPTS3C = [
  {
    sec: '3.9', title: 'Related Rates',
    items: [
      { dt: 'What a time rate of change is', dd: 'If y depends on time t, then dy/dt is the time rate of change of y. A related rates problem converts one rate into another with the Chain Rule.', formula: '\\dfrac{dy}{dt}=\\dfrac{dy}{du}\\cdot\\dfrac{du}{dt}' },
      { dt: 'The five-step recipe', dd: '① Read the problem, separating the given rate from the required one. ② Draw a diagram. ③ Give every time-dependent quantity a symbol. ④ Write one equation relating them. ⑤ Differentiate with respect to t and substitute at the end.', callout: 'The most common mistake is substituting numbers too early — differentiate first, substitute last.' },
      { dt: 'Geometry you will need', dd: 'Sphere V = ⅓? no: V = ⁴⁄₃πr³; cone V = ⅓πr²h; circle A = πr²; Pythagoras x² + y² = c².' },
      { dt: 'Reducing a cone to one variable', dd: 'If the radius and height of a cone keep a fixed ratio (r/h = k), use similar triangles to replace r by h, so the volume depends on h alone.', formula: 'V=\\dfrac13\\pi\\left(\\dfrac{h}{3}\\right)^2h=\\dfrac{\\pi}{27}h^3 \\ \\Rightarrow\\ \\dfrac{dV}{dt}=\\dfrac{\\pi}{9}h^2\\dfrac{dh}{dt}' },
      { dt: 'When an angle is changing', dd: 'Use sec²θ · dθ/dt whenever the geometry gives tan θ as the relation.', formula: '\\dfrac{d}{dt}(\\tan\\theta)=\\sec^2\\theta\\,\\dfrac{d\\theta}{dt}' }
    ]
  },
  {
    sec: '3.10', title: 'Linear Approximations and Differentials',
    items: [
      { dt: 'Linearisation', dd: 'Near x = a the graph of f is very close to its tangent line, so the tangent line gives a linear approximation.', formula: 'L(x)=f(a)+f\'(a)(x-a)' },
      { dt: 'Differentials', dd: 'For y = f(x), Δx is an increment of the independent variable and Δy = f(x+Δx) − f(x) is the actual change of y; the differential dy = f′(x)dx is its linear approximation.', formula: 'dy=f\'(x)\\,dx,\\qquad \\Delta y=f(x+\\Delta x)-f(x)\\approx dy' },
      { dt: 'Estimating a value', dd: 'To estimate f(x), pick a point a where both f(a) and f′(a) are easy to compute and use f(x) ≈ f(a) + f′(a)(x−a).', callout: 'Example: √4.6 uses a = 4 → 2 + ¼(0.6) = 2.15; √8.2 uses a = 9 → 3 + ⅙(−0.8) ≈ 2.87.' },
      { dt: 'Error estimates', dd: 'When a measurement carries an error, differentials bound the resulting error; relative and percentage errors say how bad it is.', formula: 'dV=V\'(s)\\,ds,\\qquad \\frac{dV}{V}=\\frac{V\'(s)}{V(s)}ds,\\qquad \\text{percentage error}=\\frac{dV}{V}\\times100\\%' },
      { dt: 'How relative errors scale', dd: 'For a power function y = kxⁿ the relative error is multiplied by about n (volume ∝ r³ gives 3×, flow F ∝ R⁴ gives 4×).', callout: 'That single rule often replaces a long calculation — it is how the classroom Poiseuille example was done.' }
    ]
  },
  {
    sec: '3.11', title: 'Hyperbolic Functions',
    items: [
      { dt: 'Definitions', dd: 'The hyperbolic functions are defined with exponentials and mirror the trigonometric functions.', formula: '\\sinh x=\\dfrac{e^x-e^{-x}}{2},\\quad \\cosh x=\\dfrac{e^x+e^{-x}}{2},\\quad \\tanh x=\\dfrac{\\sinh x}{\\cosh x}' },
      { dt: 'The other three', dd: '$\\coth x=\\dfrac{\\cosh x}{\\sinh x}$, $\\sech x=\\dfrac{1}{\\cosh x}$, $\\csch x=\\dfrac{1}{\\sinh x}$.' },
      { dt: 'Key identity', dd: 'The counterpart of sin²x + cos²x = 1, but with a minus sign.', formula: '\\cosh^2 x-\\sinh^2 x=1' },
      { dt: 'Parity', dd: '$\\sinh(-x)=-\\sinh x$ makes sinh odd; $\\cosh(-x)=\\cosh x$ makes cosh even.' },
      { dt: 'Derivatives', dd: 'Note the swap: sinh differentiates to cosh and cosh differentiates to sinh; tanh differentiates to sech²x.', formula: '\\dfrac{d}{dx}\\sinh x=\\cosh x,\\quad \\dfrac{d}{dx}\\cosh x=\\sinh x,\\quad \\dfrac{d}{dx}\\tanh x=\\sech^2x=\\dfrac{1}{\\cosh^2x}' },
      { dt: 'Example: a composition', dd: 'The Chain Rule works as usual: d/dx[cosh²(3x − 1)] = 2cosh(3x−1)·sinh(3x−1)·3.' }
    ]
  }
];

const FLASHCARDS3C = [
  { tag: '3.9', q: 'The five steps of a related rates problem?', a: 'Read (given/unknown) → draw → assign variables → write the relation → differentiate in t → substitute' },
  { tag: '3.9', q: 'The most common related rates mistake?', a: 'Substituting numbers too early — differentiate first, substitute last' },
  { tag: '3.9', q: 'Rate relation for a sphere?', a: '$V=\\dfrac43\\pi r^3 \\Rightarrow \\dfrac{dV}{dt}=4\\pi r^2\\dfrac{dr}{dt}$' },
  { tag: '3.9', q: 'How do you keep one variable in a cone problem?', a: 'Use similar triangles to write r = kh, so $V=\\dfrac13\\pi k^2h^3$' },
  { tag: '3.9', q: 'Which formula gives an angular rate?', a: '$\\sec^2\\theta\\,\\dfrac{d\\theta}{dt}$ (from differentiating $\\tan\\theta$)' },
  { tag: '3.10', q: 'Formula for the linearisation?', a: '$L(x)=f(a)+f\'(a)(x-a)$' },
  { tag: '3.10', q: 'How is the differential defined?', a: '$dy=f\'(x)\\,dx$ — the linear approximation to $\\Delta y$' },
  { tag: '3.10', q: 'Δy versus dy?', a: '$\\Delta y=f(x+\\Delta x)-f(x)$ is the actual change; $dy$ approximates it and improves as $x\\to a$' },
  { tag: '3.10', q: 'How do you approximate √4.6?', a: 'Take a = 4: $2+\\dfrac14(0.6)=2.15$' },
  { tag: '3.10', q: 'How is relative error computed?', a: '$\\dfrac{dV}{V}$; the percentage error is that times 100%' },
  { tag: '3.10', q: 'Relative-error scaling for powers?', a: 'For $y=kx^n$ the relative error scales by about n (3× for volume, 4× for flow)' },
  { tag: '3.11', q: 'Definitions of sinh and cosh?', a: '$\\sinh x=\\dfrac{e^x-e^{-x}}{2},\\ \\cosh x=\\dfrac{e^x+e^{-x}}{2}$' },
  { tag: '3.11', q: 'The core hyperbolic identity?', a: '$\\cosh^2x-\\sinh^2x=1$ (minus sign!)' },
  { tag: '3.11', q: 'Derivatives of sinh and cosh?', a: '$\\dfrac{d}{dx}\\sinh x=\\cosh x$ and $\\dfrac{d}{dx}\\cosh x=\\sinh x$ — swapped compared with trigonometry' },
  { tag: '3.11', q: 'Derivative of tanh?', a: '$\\dfrac{d}{dx}\\tanh x=\\sech^2x=\\dfrac{1}{\\cosh^2x}$' }
];

const PITFALLS3C = [
  { sec: '3.9', t: 'Substituting numbers too early', w: 'Replacing r by 25 in $V=\\dfrac43\\pi r^3$ before differentiating.', r: 'Differentiate in t first — $\\dfrac{dV}{dt}=4\\pi r^2\\dfrac{dr}{dt}$ — and substitute r = 25 at the very end.', why: 'Textbook Example 3 warns that early substitution produces the nonsensical $\\dfrac{dV}{dt}=0$.' },
  { sec: '3.9', t: 'Differentiating only one quantity', w: 'Treating $V=\\dfrac43\\pi r^3$ as a relation in r and differentiating in r.', r: 'r is itself a function of t, so differentiate in t: $\\dfrac{dV}{dt}=\\dfrac{dV}{dr}\\cdot\\dfrac{dr}{dt}$.', why: 'The Chain Rule layer is the whole point of a related rates problem.' },
  { sec: '3.9', t: 'Leaving both r and h in a cone problem', w: 'Writing $V=\\dfrac13\\pi r^2h$ and getting stuck with two unknowns.', r: 'Use similar triangles to replace r by h (r = h/3, r = h/2, …) so V depends on h alone.', why: 'Textbook Example 3: $r=\\dfrac h2 \\Rightarrow V=\\dfrac{\\pi}{12}h^3$.' },
  { sec: '3.9', t: 'Sign and units of an angular rate', w: 'Writing $\\dfrac{d\\theta}{dt}$ as a positive number, or in degrees.', r: 'Angular rates are in radians per second, and the sign follows the geometry (the angle shrinks when the shadow grows).', why: 'The telescope example gives 0.04 rad/s; the notes record the signed version.' },
  { sec: '3.10', t: 'Using dy where Δy is meant', w: 'Writing $\\Delta y=f\'(x)\\Delta x$ as if it were exact.', r: 'dy is the linear approximation; $\\Delta y$ must be computed as f(x+Δx) − f(x). They agree only when Δx is small.', why: 'Class example f(x) = x³+x²−2x+1 (2 → 2.05): dy = 0.7 while Δy ≈ 0.72.' },
  { sec: '3.10', t: 'Choosing a bad point a', w: 'Linearising √4.6 at a = 0.', r: 'Choose a so that both f(a) and f′(a) are easy: √4.6 at a = 4, √8.2 at a = 9.', why: 'The error grows with |x − a|, so a bad choice of a ruins the estimate.' },
  { sec: '3.10', t: 'Reporting only the absolute error', w: 'Giving dV and stopping there.', r: 'These problems usually ask for all three: absolute error dV, relative error dV/V, and the percentage error.', why: 'Textbook 3.10 problems 33 and 35 ask for all three.' },
  { sec: '3.10', t: 'Forgetting how many times the relative error scales', w: 'Assuming the relative error in the volume equals the relative error in the radius.', r: 'For V ∝ r³ it is about 3×; for F ∝ R⁴ it is about 4×.', why: 'The class Poiseuille example: a 12.5% radius increase gives about a 50% flow increase.' },
  { sec: '3.11', t: 'Mixing up the hyperbolic derivatives', w: 'Writing $\\dfrac{d}{dx}\\cosh x=\\cosh x$.', r: '$\\dfrac{d}{dx}\\sinh x=\\cosh x$ and $\\dfrac{d}{dx}\\cosh x=\\sinh x$ — they are swapped.', why: 'Differentiate the definitions: $\\dfrac{d}{dx}\\dfrac{e^x-e^{-x}}{2}=\\dfrac{e^x+e^{-x}}{2}$.' },
  { sec: '3.11', t: 'Writing the identity with a plus', w: '$\\cosh^2x+\\sinh^2x=1$.', r: 'It is $\\cosh^2x-\\sinh^2x=1$.', why: 'Substitute a general x: only the minus version holds (check x = 1 numerically).' }
];

const SHEET3C = [
  { ch: '3', title: '3.9 Related rates', items: [
    { lab: 'Sphere volume', tex: 'V=\\frac43\\pi r^3\\Rightarrow \\frac{dV}{dt}=4\\pi r^2\\frac{dr}{dt}' },
    { lab: 'Cone volume', tex: 'V=\\frac13\\pi r^2h' },
    { lab: 'Cone, one variable', tex: 'r=kh\\Rightarrow V=\\frac13\\pi k^2h^3' },
    { lab: 'Pythagoras', tex: 'x^2+y^2=c^2\\Rightarrow 2x\\frac{dx}{dt}+2y\\frac{dy}{dt}=0' },
    { lab: 'Distance', tex: 'z^2=x^2+y^2\\Rightarrow \\frac{dz}{dt}=\\frac{x\\frac{dx}{dt}+y\\frac{dy}{dt}}{z}' },
    { lab: 'Angle', tex: '\\sec^2\\theta\\,\\frac{d\\theta}{dt}=\\frac{d(\\tan\\theta)}{dt}' },
    { lab: 'Circle area', tex: 'A=\\pi r^2\\Rightarrow \\frac{dA}{dt}=2\\pi r\\frac{dr}{dt}' },
    { lab: 'Sphere area', tex: 'A=4\\pi r^2\\Rightarrow \\frac{dA}{dt}=8\\pi r\\frac{dr}{dt}' }
  ] },
  { ch: '3', title: '3.10 Linear approximations', items: [
    { lab: 'Linearisation', tex: 'L(x)=f(a)+f\'(a)(x-a)' },
    { lab: 'Differential', tex: 'dy=f\'(x)\\,dx' },
    { lab: 'Actual change', tex: '\\Delta y=f(x+\\Delta x)-f(x)' },
    { lab: 'Approximation', tex: 'f(x)\\approx f(a)+f\'(a)(x-a)' },
    { lab: 'Absolute error', tex: 'dV=V\'(s)\\,ds' },
    { lab: 'Relative error', tex: '\\frac{dV}{V}=\\frac{V\'(s)}{V(s)}\\,ds' },
    { lab: 'Percentage error', tex: '\\frac{dV}{V}\\times100\\%' },
    { lab: 'Power rule for errors', tex: 'y=kx^n\\Rightarrow \\frac{dy}{y}\\approx n\\frac{dx}{x}' },
    { lab: 'Square roots', tex: '\\sqrt x\\approx \\sqrt a+\\frac{x-a}{2\\sqrt a}' }
  ] },
  { ch: '3', title: '3.11 Hyperbolic functions', items: [
    { lab: 'sinh', tex: '\\sinh x=\\frac{e^x-e^{-x}}{2}' },
    { lab: 'cosh', tex: '\\cosh x=\\frac{e^x+e^{-x}}{2}' },
    { lab: 'tanh', tex: '\\tanh x=\\frac{\\sinh x}{\\cosh x}' },
    { lab: 'coth', tex: '\\coth x=\\frac{\\cosh x}{\\sinh x}' },
    { lab: 'sech / csch', tex: '\\sech x=\\frac1{\\cosh x},\\ \\csch x=\\frac1{\\sinh x}' },
    { lab: 'Identity', tex: '\\cosh^2x-\\sinh^2x=1' },
    { lab: 'Derivatives', tex: '\\frac{d}{dx}\\sinh x=\\cosh x,\\ \\frac{d}{dx}\\cosh x=\\sinh x' },
    { lab: 'tanh derivative', tex: '\\frac{d}{dx}\\tanh x=\\sech^2x' }
  ] }
];

const PROBLEMS3C = [
  { sec: '3.9', num: 'Ex 1', type: 'Related rates · sphere',
    q: 'Air is pumped into a spherical balloon so that its volume increases at $100\\ \\text{cm}^3/\\text{s}$. How fast is the radius increasing when the diameter is 50 cm?',
    ans: '$\\dfrac{dr}{dt}=\\dfrac{1}{25\\pi}\\approx0.0127\\ \\text{cm/s}$',
    steps: ['$V=\\dfrac43\\pi r^3$; given $\\dfrac{dV}{dt}=100$ with $r=25$',
            'Differentiate in t: $\\dfrac{dV}{dt}=4\\pi r^2\\dfrac{dr}{dt}$',
            '$\\dfrac{dr}{dt}=\\dfrac{100}{4\\pi(25)^2}=\\dfrac{1}{25\\pi}$'] },
  { sec: '3.9', num: 'Ex 2', type: 'Related rates · distance',
    q: 'A balloon is released at a point 150 m away from an observer on level ground, and goes straight up at 8 m/s. How fast is the distance from the observer to the balloon increasing when the balloon is 50 m high?',
    ans: '$\\dfrac{dD}{dt}=\\dfrac{8}{\\sqrt{10}}\\approx2.53\\ \\text{m/s}$',
    steps: ['$D^2=h^2+150^2$',
            'Differentiate in t: $2D\\dfrac{dD}{dt}=2h\\dfrac{dh}{dt}$',
            '$D=\\sqrt{50^2+150^2}=50\\sqrt{10}$, so $\\dfrac{dD}{dt}=\\dfrac{50\\cdot8}{50\\sqrt{10}}=\\dfrac8{\\sqrt{10}}$'] },
  { sec: '3.9', num: 'Ex 3', type: 'Related rates · conical tank',
    q: 'Water is pouring into a conical tank at 8 m³ per second. The tank is 12 m high with an opening radius of 6 m. How fast is the water level rising when the water is 4 m deep?',
    ans: '$\\dfrac{dh}{dt}=\\dfrac{2}{\\pi}\\approx0.64\\ \\text{m/s}$',
    steps: ['Similar triangles: $\\dfrac rh=\\dfrac6{12}=\\dfrac12$, so $r=\\dfrac h2$',
            '$V=\\dfrac13\\pi r^2h=\\dfrac13\\pi\\dfrac{h^2}{4}h=\\dfrac{\\pi}{12}h^3$',
            'Differentiate: $\\dfrac{dV}{dt}=\\dfrac{\\pi}{4}h^2\\dfrac{dh}{dt}$',
            'With $h=4$: $8=4\\pi\\dfrac{dh}{dt}$, so $\\dfrac{dh}{dt}=\\dfrac2\\pi$'] },
  { sec: '3.9', num: 'Ex 4', type: 'Related rates · two planes',
    q: 'An airplane flying north at 320 km/h passes a town at noon. A second airplane going east at 300 km/h is directly over the same town 15 minutes later. How fast will they be separating at 1:15 P.M.?',
    ans: '$436$ km/h',
    steps: ['Take noon as t = 0, so at 1:15 P.M. t = 1.25 h',
            'North distance $x=320(1.25)=400$ km, east distance $y=300(1.25-0.25)=300$ km',
            '$z^2=x^2+y^2 \\Rightarrow z=500$ km',
            '$\\dfrac{dz}{dt}=\\dfrac{x\\dfrac{dx}{dt}+y\\dfrac{dy}{dt}}{z}=\\dfrac{400\\cdot320+300\\cdot300}{500}=436$ km/h'] },
  { sec: '3.9', num: 'Ex 5', type: 'Related rates · angle',
    q: 'A woman standing on a cliff watches a motorboat approaching the shoreline directly below her through a telescope. The telescope is 100 m above the water and the boat approaches at 8 m/s. At what rate is the angle of the telescope changing when the boat is 100 m from the shore?',
    ans: '$\\left|\\dfrac{d\\theta}{dt}\\right|=0.04$ rad/s',
    steps: ['Let x be the horizontal distance: $\\tan\\theta=\\dfrac{100}{x}$',
            'Differentiate: $\\sec^2\\theta\\dfrac{d\\theta}{dt}=-\\dfrac{100}{x^2}\\dfrac{dx}{dt}$',
            'At $x=100$: $\\tan\\theta=1 \\Rightarrow \\sec^2\\theta=2$, and $\\dfrac{dx}{dt}=-8$',
            '$\\dfrac{d\\theta}{dt}=\\dfrac{800/10000}{2}=0.04$ rad/s (negative if θ is measured from the vertical)'] },
  { sec: '3.9', num: 'Ex 6', type: 'Related rates · shadow',
    q: 'As the sun sets behind a 40-meter building, the building’s shadow grows. How fast is the shadow growing when the sun’s rays make an angle of 45°?',
    ans: '$\\dfrac{dx}{dt}=-40\\csc^2\\theta\\,\\dfrac{d\\theta}{dt}$ (that is $-80\\dfrac{d\\theta}{dt}$ at θ = 45°)',
    steps: ['Let x be the shadow length and θ the angle of the rays: $\\tan\\theta=\\dfrac{40}{x}$, so $x=40\\cot\\theta$',
            'Differentiate: $\\dfrac{dx}{dt}=-40\\csc^2\\theta\\dfrac{d\\theta}{dt}$',
            'At $\\theta=45°$, $\\csc^2 45°=2$, so $\\dfrac{dx}{dt}=-80\\dfrac{d\\theta}{dt}$'],
    note: 'The lecture notes stop at the relation for this example — the angular rate of the sun is not given there. Check your notes or the printed page for the final number.' },

  { sec: '3.10', num: 'Ex 1', type: 'Linear approximation',
    q: 'Find approximations for $\\sqrt{4.6}$ and $\\sqrt{8.2}$.', ans: '$\\sqrt{4.6}\\approx2.15$, $\\sqrt{8.2}\\approx2.87$',
    steps: ['f(x) = √x at a = 4: L(x) = 2 + ¼(x−4), so √4.6 ≈ 2 + ¼(0.6) = 2.15',
            'At a = 9: L(x) = 3 + ⅙(x−9), so √8.2 ≈ 3 + ⅙(−0.8) ≈ 2.87'] },
  { sec: '3.10', num: 'Ex 2', type: 'Differential vs actual change',
    q: 'Compute Δy and dy if $f(x)=x^3+x^2-2x+1$ and x changes from 2 to 2.05.',
    ans: '$dy=0.7$, $\\Delta y\\approx0.72$',
    steps: ['$dx=0.05$, $f\'(x)=3x^2+2x-2$',
            '$dy=f\'(2)\\,dx=(12+4-2)(0.05)=14(0.05)=0.7$',
            '$\\Delta y=f(2.05)-f(2)=9.717625-9=0.717625\\approx0.72$'] },
  { sec: '3.10', num: 'Ex 3', type: 'Error estimate',
    q: 'Approximate the increase in the area of a soap bubble when its radius increases from 3 cm to 3.025 cm.',
    ans: '$dA\\approx1.88\\ \\text{cm}^2$',
    steps: ['$A=4\\pi r^2$ with $dr=0.025$', '$dA=8\\pi r\\,dr=8\\pi(3)(0.025)=0.6\\pi\\approx1.88$ cm²'] },
  { sec: '3.10', num: 'Ex 4', type: 'Error estimate',
    q: 'The side of a cube is measured as 11.4 cm with a possible error of ±0.05 cm. Evaluate the volume of the cube and estimate the possible error.',
    ans: '$V=11.4^3\\approx1481.5\\ \\text{cm}^3$, $dV=3(11.4)^2(0.05)\\approx19.5\\ \\text{cm}^3$',
    steps: ['$V=L^3=11.4^3=1481.544$ cm³', '$dV=3L^2\\,dL=3(11.4)^2(0.05)=19.494$ cm³'] },
  { sec: '3.10', num: 'Ex 5', type: 'Power function · relative change',
    q: 'Poiseuille’s Law says the blood flow $V$ is proportional to the fourth power of the radius: $V=kR^4$. By how much must the radius be increased to increase the flow by 50%?',
    ans: '$12.5\\%$',
    steps: ['$\\dfrac{dV}{V}=4\\dfrac{dR}{R}$ — the relative change is multiplied by about four',
            '$\\dfrac{dV}{V}=0.5 \\Rightarrow \\dfrac{dR}{R}=0.125=12.5\\%$'] },

  { sec: '3.11', num: 'Ex 1', type: 'Hyperbolic derivative',
    q: 'Find $D_x\\cosh^2(3x-1)$.', ans: '$6\\cosh(3x-1)\\sinh(3x-1)$',
    steps: ['Write it as $(\\cosh(3x-1))^2$',
            '$=2\\cosh(3x-1)\\cdot\\sinh(3x-1)\\cdot3$'] },
  { sec: '3.11', num: 'Ex 2', type: 'Definitions and identity',
    q: 'Write the definitions of sinh x, cosh x and tanh x, and verify that $\\cosh^2x-\\sinh^2x=1$.',
    ans: 'The identity holds',
    steps: ['$\\sinh x=\\dfrac{e^x-e^{-x}}{2}$, $\\cosh x=\\dfrac{e^x+e^{-x}}{2}$',
            '$\\cosh^2x-\\sinh^2x=\\dfrac{(e^x+e^{-x})^2-(e^x-e^{-x})^2}{4}=\\dfrac{4}{4}=1$'] }
];

const HW3C = [
  { sec: '3.9', num: 3, page: 249, type: 'Related rates',
    q: 'Each side of a square is increasing at a rate of 6 cm/s. At what rate is the area of the square increasing when the area of the square is 16 cm²?',
    ans: '$48\\ \\text{cm}^2/\\text{s}$',
    steps: ['Let the side be s: $A=s^2$', 'Differentiate in t: $\\dfrac{dA}{dt}=2s\\dfrac{ds}{dt}$',
            'An area of 16 means $s=4$: $\\dfrac{dA}{dt}=2\\cdot4\\cdot6=48$ cm²/s'] },
  { sec: '3.9', num: 5, page: 249, type: 'Related rates',
    q: 'A cylindrical tank with radius 5 m is being filled with water at a rate of 3 m³/min. How fast is the height of the water increasing?',
    ans: '$\\dfrac{3}{25\\pi}$ m/min (about $0.038$ m/min)',
    steps: ['$V=\\pi r^2h$ with the radius constant at $r=5$', 'Differentiate: $\\dfrac{dV}{dt}=25\\pi\\dfrac{dh}{dt}$',
            '$\\dfrac{dh}{dt}=\\dfrac{3}{25\\pi}$ m/min'] },
  { sec: '3.9', num: 17, page: 249, type: 'Related rates',
    q: 'Two cars start moving from the same point. One travels south at 60 mi/h and the other travels west at 25 mi/h. At what rate is the distance between the cars increasing two hours later?',
    ans: '$65$ mi/h',
    steps: ['After two hours: $x=120$ mi south, $y=50$ mi west', '$z^2=x^2+y^2 \\Rightarrow z=130$ mi',
            '$\\dfrac{dz}{dt}=\\dfrac{x\\dfrac{dx}{dt}+y\\dfrac{dy}{dt}}{z}=\\dfrac{120\\cdot60+50\\cdot25}{130}=65$ mi/h'] },
  { sec: '3.9', num: 22, page: 249, type: 'Related rates',
    q: 'A boat is pulled into a dock by a rope attached to the bow of the boat and passing through a pulley on the dock that is 1 m higher than the bow. If the rope is pulled in at 1 m/s, how fast is the boat approaching the dock when it is 8 m from the dock?',
    ans: 'about $1.01$ m/s (approaching)',
    steps: ['Let x be the distance to the dock and s the rope length: $x^2+1=s^2$ with $\\dfrac{ds}{dt}=-1$',
            'Differentiate: $2x\\dfrac{dx}{dt}=2s\\dfrac{ds}{dt}$',
            'At $x=8$, $s=\\sqrt{65}$, so $\\dfrac{dx}{dt}=-\\dfrac{\\sqrt{65}}8\\approx-1.008$: about 1.01 m/s'] },
  { sec: '3.9', num: 25, page: 249, type: 'Related rates',
    q: 'Water is leaking out of an inverted conical tank at a rate of 10,000 cm³/min while water is being pumped in at a constant rate. The tank has height 6 m and the diameter at the top is 4 m. If the water level is rising at 20 cm/min when the height of the water is 2 m, find the rate at which water is being pumped into the tank.',
    ans: '$10000+\\dfrac{80\\pi}{9}\\approx10028\\ \\text{cm}^3/\\text{min}$ (about $10.03$ L/min)',
    steps: ['Similar triangles: $\\dfrac rh=\\dfrac{2}{6}=\\dfrac13$, so $r=\\dfrac h3$',
            '$V=\\dfrac13\\pi r^2h=\\dfrac{\\pi}{27}h^3 \\Rightarrow \\dfrac{dV}{dt}=\\dfrac{\\pi}{9}h^2\\dfrac{dh}{dt}$',
            'At $h=2$ with $\\dfrac{dh}{dt}=20$: $\\dfrac{dV}{dt}=\\dfrac{\\pi}{9}\\cdot4\\cdot20=\\dfrac{80\\pi}{9}$ cm³/min — the volume the rising level accounts for',
            'Pumping rate = leaking rate + rising rate $=10000+\\dfrac{80\\pi}{9}$ cm³/min'] },
  { sec: '3.9', num: 32, page: 249, type: 'Related rates · angle',
    q: 'How fast is the angle between the ladder and the ground changing in Example 2 when the bottom of the ladder is 6 ft from the wall?',
    ans: '$0.125$ rad/s (the angle is decreasing)',
    steps: ['Example 2: $x^2+y^2=100$, $\\dfrac{dx}{dt}=1$; at $x=6$ we have $y=8$ and $\\dfrac{dy}{dt}=-\\dfrac34$ ft/s',
            'Let θ be the angle with the ground: $\\tan\\theta=\\dfrac yx$',
            '$\\dfrac{d\\theta}{dt}=\\dfrac{x\\dfrac{dy}{dt}-y\\dfrac{dx}{dt}}{x^2+y^2}=\\dfrac{6(-0.75)-8(1)}{100}=-0.125$ rad/s'],
    note: 'The key recorded in the lecture notes for this item is 0.25 rad/s, which does not match these data (they give 0.125). Check your notes — it may belong to a different set of numbers.' },
  { sec: '3.9', num: 45, page: 249, type: 'Related rates · angle',
    q: 'A plane lies horizontally at an altitude of 5 km and passes directly over a tracking telescope on the ground. When the angle of elevation is π/3, this angle is decreasing at a rate of π/6 rad/min. How fast is the plane traveling at that time?',
    ans: '$\\dfrac{10\\pi}{9}$ km/min (about $3.49$ km/min)',
    steps: ['Let x be the horizontal distance: $\\tan\\theta=\\dfrac{5}{x}$, so $x=5\\cot\\theta$',
            'Differentiate: $\\dfrac{dx}{dt}=-5\\dfrac{\\sec^2\\theta}{\\tan^2\\theta}\\dfrac{d\\theta}{dt}$',
            'At $\\theta=\\pi/3$: $\\sec^2=4$, $\\tan^2=3$, $\\dfrac{d\\theta}{dt}=-\\dfrac{\\pi}{6}$',
            '$\\dfrac{dx}{dt}=-5\\cdot\\dfrac43\\cdot\\left(-\\dfrac{\\pi}{6}\\right)=\\dfrac{10\\pi}{9}$ km/min'] },

  { sec: '3.10', num: 19, page: 256, type: 'Differentials',
    q: 'Compute Δy and dy for $y=x^2+4x$ when $x=3$ and $\\Delta x=0.5$.',
    ans: '$\\Delta y=5.25$, $dy=5$',
    steps: ['$f(3)=9+12=21$, $f(3.5)=12.25+14=26.25 \\Rightarrow \\Delta y=5.25$',
            '$f\'(x)=2x+4$, so $dy=f\'(3)(0.5)=10(0.5)=5$'] },
  { sec: '3.10', num: 25, page: 256, type: 'Linear approximation',
    q: 'Use a linear approximation to estimate $\\sqrt{3.1001}$.',
    ans: 'about $1.7607$',
    steps: ['Take $a=3.1$: $f(a)=\\sqrt{3.1}\\approx1.760682$ and $f\'(3.1)=\\dfrac{1}{2\\sqrt{3.1}}\\approx0.283986$',
            '$\\sqrt{3.1001}\\approx1.760682+0.283986\\times0.0001\\approx1.76071$'] },
  { sec: '3.10', num: 33, page: 256, type: 'Error estimates',
    q: 'The edge of a cube was found to be 30 cm with a possible error in measurement of 0.1 cm. Use differentials to estimate the maximum possible error, relative error, and percentage error in computing (a) the volume of the cube and (b) the surface area of the cube.',
    ans: '(a) $dV=270$ cm³, relative error $1\\%$; (b) $dA=36$ cm², relative error about $0.67\\%$',
    steps: ['(a) $V=s^3=27000$ cm³, $dV=3s^2ds=3(30)^2(0.1)=270$ cm³; relative error $270/27000=1\\%$',
            '(b) $A=6s^2=5400$ cm², $dA=12s\\,ds=12(30)(0.1)=36$ cm²; relative error $36/5400\\approx0.667\\%$'] },
  { sec: '3.10', num: 35, page: 256, type: 'Error estimates',
    q: 'The circumference of a sphere was measured to be 84 cm with a possible error of 0.5 cm. (a) Use differentials to estimate the maximum error in the calculated surface area. What is the relative error? (b) Use differentials to estimate the maximum error in the calculated volume. What is the relative error?',
    ans: '(a) $dA=\\dfrac{84}{\\pi}\\approx26.7$ cm², relative error $\\approx1.19\\%$; (b) $dV=\\dfrac{1764}{\\pi^2}\\approx178.7$ cm³, relative error $\\approx1.79\\%$',
    steps: ['$2\\pi r=84 \\Rightarrow r=\\dfrac{42}{\\pi}$; $2\\pi\\,dr=0.5 \\Rightarrow dr=\\dfrac{0.25}{\\pi}$',
            '(a) $A=4\\pi r^2$, $dA=8\\pi r\\,dr=\\dfrac{84}{\\pi}$; relative error $=2\\dfrac{dr}{r}=\\dfrac1{84}\\approx1.19\\%$',
            '(b) $V=\\dfrac43\\pi r^3$, $dV=4\\pi r^2dr=\\dfrac{1764}{\\pi^2}$; relative error $=3\\dfrac{dr}{r}=\\dfrac1{56}\\approx1.79\\%$'] },
  { sec: '3.10', num: 40, page: 256, type: 'Power function · relative change',
    q: 'When blood flows along a blood vessel, the flux F is proportional to the fourth power of the radius R: F = kR⁴. Show that the relative change in F is about four times the relative change in R. How will a 5% increase in the radius affect the flow of blood?',
    ans: 'The relative change is about four times larger; a 5% radius increase gives about a $20\\%$ flow increase',
    steps: ['$F=kR^4 \\Rightarrow dF=4kR^3dR$',
            '$\\dfrac{dF}{F}=\\dfrac{4kR^3dR}{kR^4}=4\\dfrac{dR}{R}$ — the factor of four',
            'A 5% increase in R: $\\dfrac{dF}{F}\\approx4\\times5\\%=20\\%$'] },

  { sec: '3.11', num: 24, page: 264, type: 'Proof',
    q: 'Prove the formula $\\dfrac{d}{dx}\\cosh x=\\sinh x$ using the definitions of the hyperbolic functions.',
    ans: '$\\dfrac{d}{dx}\\cosh x=\\sinh x$',
    steps: ['$\\cosh x=\\dfrac{e^x+e^{-x}}{2}$',
            '$\\dfrac{d}{dx}\\cosh x=\\dfrac{e^x-e^{-x}}{2}=\\sinh x$'] },
  { sec: '3.11', num: 31, page: 264, type: 'Derivative',
    q: 'Find the derivative of $f(x)=\\tanh(\\sin x)$.',
    ans: '$f\'(x)=\\sech^2(\\sin x)\\cos x$',
    steps: ['Chain Rule: $f\'(x)=\\dfrac{d}{d(\\sin x)}\\tanh u\\cdot\\dfrac{d}{dx}(\\sin x)$',
            '$=\\sech^2(\\sin x)\\cdot\\cos x$'] },
  { sec: '3.11', num: 33, page: 264, type: 'Derivative',
    q: 'Find the derivative of $h(x)=\\sinh(x^2)$.',
    ans: '$h\'(x)=2x\\cosh(x^2)$',
    steps: ['Chain Rule: $h\'(x)=\\cosh(x^2)\\cdot2x$'] },
  { sec: '3.11', num: 35, page: 264, type: 'Derivative',
    q: 'Find the derivative of $G(t)=\\sinh(\\ln t)$.',
    ans: '$G\'(t)=\\dfrac{\\cosh(\\ln t)}{t}$',
    steps: ['Chain Rule: $G\'(t)=\\cosh(\\ln t)\\cdot\\dfrac1t$'] },
  { sec: '3.11', num: 37, page: 264, type: 'Derivative',
    q: 'Find the derivative of $y=e^{\\cosh 3x}$.',
    ans: '$y\'=3\\sinh(3x)\\,e^{\\cosh 3x}$',
    steps: ['The derivative of $e^{\\cdot}$ is itself: $y\'=e^{\\cosh 3x}\\cdot\\dfrac{d}{dx}(\\cosh 3x)$',
            '$=e^{\\cosh 3x}\\cdot\\sinh(3x)\\cdot3$'] }
];
