/* ============================================================
   Chapter 2 复习备考站 · 交互层
   ============================================================ */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const STORE_KEY = 'calc2_review_progress_v1';

/* ---------- 语言字典 ---------- */
const LANG = document.documentElement.dataset.lang || window.SITE_LANG || 'zh';
const T = LANG === 'en' ? {
  all: 'All',
  hwCount: (n, d) => `${n} problems · ${d} completed`,
  problemLabel: n => `Problem ${n}`,
  classExample: 'Class example',
  textbookPage: p => `Textbook p.${p}`,
  answerLbl: 'Answer',
  refAnswerLbl: 'Reference answer',
  showSol: 'Show solution',
  hideSol: 'Hide solution',
  done: 'Done',
  problemsUnit: 'problems',
  hwProgress: (a, b, c, d) => `Textbook ${a}/${b} · Examples ${c}/${d}`,
  tableHead: ['Section', 'Textbook exercise numbers', 'Progress'],
  heroStats: ['Sections', 'Assigned problems', 'Flashcards', 'Common traps'],
  ringLabel: 'problems completed',
  keyPoints: n => `${n} key points`,
  flashTag: 'Flashcard',
  answerTag: 'Answer',
  calcType: 'Computation',
  allChapter: 'Chapters 2–3',
  timeLeft: (m, s) => `Time left ${m}:${s}`,
  quizProgress: (i, n) => `Question ${i} of ${n}`,
  selfCheck: 'Self-check:',
  selfRight: 'I got it right',
  selfWrong: 'I got it wrong',
  revealBtn: 'Solve it first, then reveal the answer',
  submit: 'Submit',
  next: 'Next',
  stateNotAnswered: 'Not answered',
  stateSelfRight: 'Self-check: correct',
  stateSelfWrong: 'Self-check: wrong',
  stateRight: 'Correct',
  stateWrong: 'Wrong',
  yourAnswer: 'Your answer: ',
  correctAnswer: 'Correct answer: ',
  score: r => `Score ${r}`,
  msgHigh: 'Strong result — focus on the explanations of the questions you missed.',
  msgMid: 'The framework is there; revisit the matching section in Concept Checklist for each miss.',
  msgLow: 'Start with Concept Checklist and nail down the definitions and theorems, then come back.',
  restart: 'Another round',
  pitfallWrong: 'Common mistake',
  pitfallRight: 'Do this instead',
  typeDefault: 'Problem',
  planHead: 'Exam Sprint Plan',
  planLead: 'Three ready-made schedules plus the study loop, the wrong-answer triage table and the last ten minutes before the exam. Pick the tier that matches how much time you have left.',
  planTiers: 'Three schedules',
  planLoop: 'The five-step loop',
  planTriage: 'Wrong-answer triage',
  planLast: 'The last 10 minutes',
  planWhen: 'When',
  planGoal: 'Goal',
  planLoad: 'Workload',
  planTierCta: 'Open this tab',
  planStepNo: 'Step',
  hwTbd: 'not recorded in the lecture notes — confirm with the instructor'
} : {
  all: '全部',
  hwCount: (n, d) => `${n} 道题 · 已完成 ${d} 道`,
  problemLabel: n => `第 ${n} 题`,
  classExample: '课堂例题',
  textbookPage: p => `教材 p.${p}`,
  answerLbl: '答案',
  refAnswerLbl: '参考答案',
  showSol: '查看解析',
  hideSol: '收起解析',
  done: '已做',
  problemsUnit: '题',
  hwProgress: (a, b, c, d) => `教材 ${a}/${b} · 例题 ${c}/${d}`,
  tableHead: ['小节', '教材 Exercises 习题号', '进度'],
  heroStats: ['考点小节', '道指定作业题', '张记忆卡', '个易错点'],
  ringLabel: '已完成题目',
  keyPoints: n => `${n} 条要点`,
  flashTag: '记忆卡',
  answerTag: '答案',
  calcType: '计算题',
  allChapter: '全章 2–3 章',
  timeLeft: (m, s) => `剩余 ${m}:${s}`,
  quizProgress: (i, n) => `第 ${i} / ${n} 题`,
  selfCheck: '对照后自评：',
  selfRight: '我做对了',
  selfWrong: '我没做对',
  revealBtn: '先自己做，再看答案',
  submit: '交卷',
  next: '下一题',
  stateNotAnswered: '未作答',
  stateSelfRight: '自评正确',
  stateSelfWrong: '自评错误',
  stateRight: '答对',
  stateWrong: '答错',
  yourAnswer: '你的答案：',
  correctAnswer: '正确答案：',
  score: r => `得分 ${r} 分`,
  msgHigh: '状态不错，重点看错题的解析。',
  msgMid: '基本框架有了，把错题对应的小节回概念速查过一遍。',
  msgLow: '先回「概念速查」把定义和定理过一遍，再来刷题。',
  restart: '再来一轮',
  pitfallWrong: '常见错法',
  pitfallRight: '正确做法',
  typeDefault: '计算题',
  planHead: '考试冲刺方案',
  planLead: '三档可直接执行的备考节奏，外加每日常规循环、错题分诊表和考场最后 10 分钟清单。按你剩下的时间挑一档执行即可。',
  planTiers: '三档节奏',
  planLoop: '五步学习循环',
  planTriage: '错题分诊表',
  planLast: '最后 10 分钟',
  planWhen: '适用时机',
  planGoal: '目标',
  planLoad: '投入',
  planTierCta: '打开对应页签',
  planStepNo: '步骤',
  hwTbd: '课堂笔记未记录题号，需向老师确认'
};

/* ---------- 第 3 章内容合并 ---------- */
if (typeof SECTIONS3 !== 'undefined') {
  SECTIONS.push(...SECTIONS3);
  Object.assign(SCOPE_CARDS, SCOPE_CARDS3);
  CONCEPTS.push(...CONCEPTS3);
  FLASHCARDS.push(...FLASHCARDS3);
  PITFALLS.push(...PITFALLS3);
  SHEET.push(...SHEET3);
  PROBLEMS.push(...PROBLEMS3);
}

/* 数据文本转义：防止 LaTeX 中的 < > 被浏览器当作标签解析 */
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* ---------- 进度存储 ---------- */
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || { done: [], weak: [] }; }
  catch (e) { return { done: [], weak: [] }; }
}
function saveProgress(p) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch (e) {}
}
let PROGRESS = loadProgress();

/* ---------- 数学渲染 ---------- */
function renderMath(root = document.body) {
  if (window.renderMathInElement) {
    try {
      window.renderMathInElement(root, {
        delimiters: [
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false,
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
      });
      return;
    } catch (e) { /* fall through */ }
  }
  // KaTeX 不可用时的降级：把 $...$ 显示为等宽原式
  $$('.math', root).forEach(el => {
    if (el.dataset.mathDone) return;
    el.dataset.mathDone = '1';
    el.innerHTML = el.innerHTML.replace(/\$([^$]+)\$/g,
      (m, tex) => `<span class="math-raw">${tex.replace(/</g, '&lt;')}</span>`);
  });
}
function scheduleMath(root) {
  let tries = 0;
  const tick = () => {
    if (window.renderMathInElement) { renderMath(root); return; }
    if (++tries > 40) { renderMath(root); return; }
    setTimeout(tick, 80);
  };
  tick();
}

/* ---------- 标签页 ---------- */
function activateView(view) {
  const tab = $('.tab[data-view="' + view + '"]');
  if (!tab) return false;
  $$('.tab').forEach(t => t.classList.toggle('is-active', t === tab));
  $$('.view').forEach(v => v.classList.toggle('is-active', v.id === 'view-' + view));
  return true;
}
function initTabs() {
  $$('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activateView(tab.dataset.view);
      try { history.replaceState(null, '', '#' + tab.dataset.view); } catch (e) {}
      window.scrollTo({ top: $('#tabs').offsetTop - 1, behavior: 'smooth' });
    });
  });
  const h = (location.hash || '').replace('#', '');
  if (h && activateView(h)) {
    setTimeout(() => window.scrollTo({ top: $('#tabs').offsetTop - 1 }), 0);
  }
}

/* 小节标题：中文页优先用中文名，英文页优先用英文名 */
function secName(s) {
  return LANG === 'zh' ? (s.cn || s.name || s.en || s.id) : (s.en || s.name || s.cn || s.id);
}

/* ---------- 教材作业题库 ---------- */
let hwFilter = 'all';
function hwKey(p) { return 'hw-' + p.sec + '-' + p.num; }
function initHw() {
  const host = $('#hwFilters');
  const hwSecs = SECTIONS.filter(s => HW_PROBLEMS.some(p => p.sec === s.id));
  host.innerHTML = [`<button class="chip is-on" data-f="all">${T.all}</button>`]
    .concat(hwSecs.map(s => {
      const n = HW_PROBLEMS.filter(p => p.sec === s.id).length;
      return `<button class="chip" data-f="${s.id}">${s.id} (${n})</button>`;
    })).join('');
  host.addEventListener('click', e => {
    const chip = e.target.closest('.chip'); if (!chip) return;
    $$('.chip', host).forEach(c => c.classList.toggle('is-on', c === chip));
    hwFilter = chip.dataset.f;
    renderHw();
  });
  $('#hwExpandAll').addEventListener('click', () => $$('#hwList .p-card').forEach(c => c.classList.add('is-open')));
  $('#hwCollapseAll').addEventListener('click', () => $$('#hwList .p-card').forEach(c => c.classList.remove('is-open')));
  renderHw();
}
function renderHw() {
  const list = HW_PROBLEMS.filter(p => hwFilter === 'all' || p.sec === hwFilter);
  const doneN = list.filter(p => PROGRESS.done.includes(hwKey(p))).length;
  $('#hwCount').textContent = T.hwCount(list.length, doneN);
  $('#hwList').innerHTML = list.map(p => {
    const k = hwKey(p);
    const done = PROGRESS.done.includes(k);
    const steps = (p.steps || []).map(s => `<li>${esc(s)}</li>`).join('');
    return `<article class="p-card" data-k="${k}">
      <div class="p-top">
        <span class="p-sec">${p.sec}</span>
        <span class="p-num">${T.problemLabel(p.num)}</span>
        <span class="p-meta">${esc(p.type || '')} · ${T.textbookPage(p.page)}</span>
      </div>
      <div class="p-body">
        <div class="p-q math">${esc(p.q).replace(/\n/g, '<br>')}</div>
        ${p.en ? `<div class="p-en">${esc(p.en)}</div>` : ''}
        <div class="p-solution">
          <div class="p-ans math"><span class="lbl">${T.answerLbl}</span>${esc(p.ans)}</div>
          ${steps ? `<ol class="p-steps">${steps}</ol>` : ''}
          ${p.note ? `<div class="callout"><span class="ic">${IC.warn}</span><div>${esc(p.note)}</div></div>` : ''}
        </div>
        <div class="p-actions">
          <button class="btn ghost sm js-hw-toggle">${T.showSol}</button>
          <label class="p-done ${done ? 'is-on' : ''}"><input type="checkbox" ${done ? 'checked' : ''}> ${T.done}</label>
        </div>
      </div></article>`;
  }).join('');
  $('#hwList').addEventListener('click', e => {
    const btn = e.target.closest('.js-hw-toggle'); if (!btn) return;
    const card = btn.closest('.p-card');
    const open = card.classList.toggle('is-open');
    btn.textContent = open ? T.hideSol : T.showSol;
  });
  $('#hwList').addEventListener('change', e => {
    const box = e.target.closest('.p-done input'); if (!box) return;
    const k = box.closest('.p-card').dataset.k;
    if (box.checked) { if (!PROGRESS.done.includes(k)) PROGRESS.done.push(k); }
    else PROGRESS.done = PROGRESS.done.filter(x => x !== k);
    saveProgress(PROGRESS);
    box.closest('.p-done').classList.toggle('is-on', box.checked);
    renderScope();
    const list2 = HW_PROBLEMS.filter(p => hwFilter === 'all' || p.sec === hwFilter);
    $('#hwCount').textContent = T.hwCount(list2.length, list2.filter(p => PROGRESS.done.includes(hwKey(p))).length);
  });
  scheduleMath($('#hwList'));
}

/* ---------- 考纲地图 ---------- */
function renderScope() {
  const host = $('#scopeMap');
  host.innerHTML = SECTIONS.map(s => {
    const c = SCOPE_CARDS[s.id];
    const total = s.hw.length;
    const bank = PROBLEMS.filter(p => p.sec === s.id);
    const hw = HW_PROBLEMS.filter(p => p.sec === s.id);
    const done = bank.filter(p => PROGRESS.done.includes(problemKey(p))).length
               + hw.filter(p => PROGRESS.done.includes(hwKey(p))).length;
    const pct = (bank.length + hw.length) ? Math.round(done / (bank.length + hw.length) * 100) : 0;
    return `<article class="scope-card">
      <div class="scope-top"><span class="scope-no">${s.id}</span><span class="scope-name">${esc(secName(s))}</span></div>
      <p>${esc(c.desc)}</p>
      <div class="scope-tags">${s.tags.map(t => `<span class="tag ${s.weight >= 5 ? 'amber' : ''}">${esc(t)}</span>`).join('')}</div>
      <ul style="margin:10px 0 12px;padding-left:18px;font-size:13px;color:var(--body)">
        ${c.must.map(m => `<li>${esc(m)}</li>`).join('')}
      </ul>
      <div class="scope-bar"><span class="track"><span class="fill" style="width:${pct}%"></span></span><span>${done}/${bank.length + hw.length} ${T.problemsUnit}</span></div>
    </article>`;
  }).join('');

  const rows = SECTIONS.map(s => {
    const hwTotal = s.hw.length;
    const hwDone = HW_PROBLEMS.filter(p => p.sec === s.id && PROGRESS.done.includes(hwKey(p))).length;
    const bank = PROBLEMS.filter(p => p.sec === s.id);
    const bankDone = bank.filter(p => PROGRESS.done.includes(problemKey(p))).length;
    return `<div class="hw-row">
      <span class="hw-sec">${s.id}</span>
      <span class="hw-nums">${s.hw.length ? s.hw.join(', ') : `<span style="color:var(--muted)">${T.hwTbd}</span>`}</span>
      <span class="hw-count ${hwDone === hwTotal ? 'hw-done' : ''}">${T.hwProgress(hwDone, hwTotal, bankDone, bank.length)}</span>
    </div>`;
  }).join('');
  $('#hwTable').innerHTML = `<div class="hw-row head"><span>${T.tableHead[0]}</span><span>${T.tableHead[1]}</span><span>${T.tableHead[2]}</span></div>` + rows;

  const totalAll = SECTIONS.reduce((s, x) => s + x.hw.length, 0);
  const bankTotal = PROBLEMS.length + HW_PROBLEMS.length;
  const bankDone = PROBLEMS.filter(p => PROGRESS.done.includes(problemKey(p))).length
                 + HW_PROBLEMS.filter(p => PROGRESS.done.includes(hwKey(p))).length;
  $('#heroStats').innerHTML = `
    <div><b>${SECTIONS.length}</b><span>${T.heroStats[0]}</span></div>
    <div><b>${totalAll}</b><span>${T.heroStats[1]}</span></div>
    <div><b>${FLASHCARDS.length}</b><span>${T.heroStats[2]}</span></div>
    <div><b>${PITFALLS.length}</b><span>${T.heroStats[3]}</span></div>`;
  updateRing(bankDone, bankTotal);
  scheduleMath($('#scopeMap'));
  scheduleMath($('#hwTable'));
}
function key(sec, num) { return sec + '-' + num; }
function updateRing(done, total) {
  const pct = total ? Math.round(done / total * 100) : 0;
  $('#ringPct').textContent = pct + '%';
  const C = 2 * Math.PI * 52;
  $('#ringFg').style.strokeDashoffset = String(C * (1 - pct / 100));
}

/* ---------- 概念速查 ---------- */
function renderConcepts() {
  $('#conceptBody').innerHTML = CONCEPTS.map(block => {
    const items = block.items.map(it => {
      let html = `<div class="def-item"><div class="dt">${esc(it.dt)}</div><div class="dd">${esc(it.dd)}</div>`;
      if (it.formula) {
        const tex = it.formula.trim().startsWith('$') ? it.formula : `$${it.formula}$`;
        html += `<div class="formula math">${esc(tex)}</div>`;
      }
      if (it.callout) html += `<div class="callout"><span class="ic">${IC.warn}</span><div>${esc(it.callout)}</div></div>`;
      return html + `</div>`;
    }).join('');
    return `<div class="c-block">
      <div class="c-head"><span class="n">${block.sec}</span><h3>${esc(block.title)}</h3>
      <span class="sub">${T.keyPoints(block.items.length)}</span></div>
      <div class="c-body">${items}</div></div>`;
  }).join('');
  scheduleMath($('#conceptBody'));
}

/* ---------- 记忆卡 ---------- */
let fcIndex = 0, fcOrder = [];
function initFlashcards() {
  fcOrder = FLASHCARDS.map((_, i) => i);
  const t = $('#flash');
  t.addEventListener('click', () => t.classList.toggle('is-flipped'));
  $('#flashNext').addEventListener('click', () => moveCard(1));
  $('#flashPrev').addEventListener('click', () => moveCard(-1));
  $('#flashKnown').addEventListener('click', () => {
    const c = FLASHCARDS[fcOrder[fcIndex]];
    PROGRESS.weak = PROGRESS.weak.filter(k => k !== c.tag + '|' + c.q);
    saveProgress(PROGRESS); moveCard(1);
  });
  $('#flashAgain').addEventListener('click', () => {
    const c = FLASHCARDS[fcOrder[fcIndex]];
    if (!PROGRESS.weak.includes(c.tag + '|' + c.q)) PROGRESS.weak.push(c.tag + '|' + c.q);
    saveProgress(PROGRESS);
    moveCard(1);
  });
  document.addEventListener('keydown', e => {
    if (!$('#view-cards').classList.contains('is-active')) return;
    if (e.key === 'ArrowRight') moveCard(1);
    if (e.key === 'ArrowLeft') moveCard(-1);
    if (e.key === ' ') { e.preventDefault(); t.classList.toggle('is-flipped'); }
  });
  renderCard();
}
function moveCard(d) {
  fcIndex = (fcIndex + d + fcOrder.length) % fcOrder.length;
  $('#flash').classList.remove('is-flipped');
  renderCard();
}
function renderCard() {
  const c = FLASHCARDS[fcOrder[fcIndex]];
  $('#flashFront').innerHTML = `<span class="flash-tag">${esc(c.tag)} · ${T.flashTag}</span><div class="flash-q math">${esc(c.q)}</div>`;
  $('#flashBack').innerHTML = `<span class="flash-tag">${T.answerTag}</span><div class="flash-a math">${esc(c.a)}</div>`;
  $('#flashCount').textContent = (fcIndex + 1) + ' / ' + fcOrder.length;
  scheduleMath($('#flash'));
}

/* ---------- 刷题 ---------- */
let practiceFilter = 'all';
function problemKey(p) { return p.sec + '-' + p.num; }
function initPractice() {
  const host = $('#practiceFilters');
  host.innerHTML = [`<button class="chip is-on" data-f="all">${T.all}</button>`]
    .concat(SECTIONS.map(s => `<button class="chip" data-f="${s.id}">${s.id} ${esc(secName(s))}</button>`))
    .join('');
  host.addEventListener('click', e => {
    const chip = e.target.closest('.chip'); if (!chip) return;
    $$('.chip', host).forEach(c => c.classList.toggle('is-on', c === chip));
    practiceFilter = chip.dataset.f;
    renderProblems();
  });
  $('#expandAll').addEventListener('click', () => $$('.p-card').forEach(c => c.classList.add('is-open')));
  $('#collapseAll').addEventListener('click', () => $$('.p-card').forEach(c => c.classList.remove('is-open')));
  $('#resetProgress').addEventListener('click', () => {
    PROGRESS = { done: [], weak: [] }; saveProgress(PROGRESS);
    renderProblems(); renderScope();
  });
  renderProblems();
}
function renderProblems() {
  const list = PROBLEMS.filter(p => practiceFilter === 'all' || p.sec === practiceFilter);
  $('#practiceCount').textContent = T.hwCount(list.length, PROGRESS.done.filter(k => list.some(p => problemKey(p) === k)).length);
  $('#problemList').innerHTML = list.map(p => {
    const k = problemKey(p);
    const done = PROGRESS.done.includes(k);
    const steps = (p.steps || []).map(s => `<li>${esc(s)}</li>`).join('');
    return `<article class="p-card ${done ? 'is-done' : ''}" data-k="${k}">
      <div class="p-top">
        <span class="p-sec">${p.sec}</span>
        <span class="p-num">${/^\d+$/.test(String(p.num)) ? T.problemLabel(p.num) : T.classExample}</span>
        <span class="p-meta">${esc(p.type || T.calcType)}</span>
      </div>
      <div class="p-body">
        <div class="p-q math">${esc(p.q)}</div>
        ${p.en ? `<div class="p-en">${esc(p.en)}</div>` : ''}
        <div class="p-solution">
          <div class="p-ans math"><span class="lbl">${T.answerLbl}</span>${esc(p.ans)}</div>
          ${steps ? `<ol class="p-steps">${steps}</ol>` : ''}
        </div>
        <div class="p-actions">
          <button class="btn ghost sm js-toggle">${T.showSol}</button>
          <label class="p-done ${done ? 'is-on' : ''}"><input type="checkbox" ${done ? 'checked' : ''}> ${T.done}</label>
        </div>
      </div></article>`;
  }).join('');

  $('#problemList').addEventListener('click', onProblemClick);
  $('#problemList').addEventListener('change', onProblemChange);
  scheduleMath($('#problemList'));
}
function onProblemClick(e) {
  const btn = e.target.closest('.js-toggle'); if (!btn) return;
  const card = btn.closest('.p-card');
  const open = card.classList.toggle('is-open');
  btn.textContent = open ? T.hideSol : T.showSol;
}
function onProblemChange(e) {
  const box = e.target.closest('.p-done input'); if (!box) return;
  const k = box.closest('.p-card').dataset.k;
  if (box.checked) { if (!PROGRESS.done.includes(k)) PROGRESS.done.push(k); }
  else PROGRESS.done = PROGRESS.done.filter(x => x !== k);
  saveProgress(PROGRESS);
  box.closest('.p-done').classList.toggle('is-on', box.checked);
  renderScope();
  const list = PROBLEMS.filter(p => practiceFilter === 'all' || p.sec === practiceFilter);
  $('#practiceCount').textContent = T.hwCount(list.length, PROGRESS.done.filter(x => list.some(p => problemKey(p) === x)).length);
}

/* ---------- 随机自测 ---------- */
let quiz = null;
function initQuiz() {
  const sel = $('#quizScope');
  sel.innerHTML = `<option value="all">${T.allChapter}</option>` +
    SECTIONS.map(s => `<option value="${s.id}">${s.id} ${esc(secName(s))}</option>`).join('');
  $('#quizStart').addEventListener('click', startQuiz);
  $('#quizNext').addEventListener('click', () => stepQuiz(1));
  $('#quizPrev').addEventListener('click', () => stepQuiz(-1));
}
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }
function numericAnswer(s) {
  if (!s) return null;
  const t = s.replace(/\$|\\,|\\;|\\!|\s|\\left|\\right|\\displaystyle/g, '').trim();
  const m = t.match(/^-?\d+(\.\d+)?(\/-?\d+(\.\d+)?)?$/);
  return m ? Number(t) : null;
}
function makeOptions(p, pool) {
  const correct = p.ans;
  const n = numericAnswer(correct);
  const distractors = [];
  if (n !== null && !Number.isNaN(n)) {
    const cands = [-n, n * 2, n / 2, n + 1, n - 1, n + 2, n - 2, -n - 1];
    cands.forEach(c => {
      const v = Number(c.toFixed(4));
      if (distractors.length < 3 && v !== n && !distractors.includes(v)) distractors.push(String(v));
    });
  }
  if (distractors.length < 3) {
    // 文字型答案：优先取同小节的其它文字型答案作干扰项，避免拿数字去凑
    const textPool = shuffle(pool.filter(x => x.ans !== correct && numericAnswer(x.ans) === null));
    for (const o of textPool) { if (distractors.length >= 3) break; if (!distractors.includes(o.ans)) distractors.push(o.ans); }
    if (distractors.length < 3) {
      const anyPool = shuffle(pool.filter(x => x.ans !== correct));
      for (const o of anyPool) { if (distractors.length >= 3) break; if (!distractors.includes(o.ans)) distractors.push(o.ans); }
    }
  }
  const opts = shuffle([correct].concat(distractors.slice(0, 3)));
  return opts;
}
function startQuiz() {
  const n = Number($('#quizNum').value);
  const scope = $('#quizScope').value;
  const pool = PROBLEMS.concat(HW_PROBLEMS).filter(p => scope === 'all' || p.sec === scope);
  const picked = shuffle(pool.slice()).slice(0, Math.min(n, pool.length));
  quiz = {
    pool,
    list: picked.map(p => {
      const numeric = numericAnswer(p.ans);
      const mode = (numeric !== null && !Number.isNaN(numeric)) ? 'mc' : 'sr';
      return { p, mode, opts: mode === 'mc' ? makeOptions(p, pool) : [], pick: null, revealed: false };
    }),
    i: 0,
    sec: Number($('#quizTimer').value),
    left: Number($('#quizTimer').value),
    timer: null
  };
  $('#quizSetup').hidden = true;
  $('#quizResult').hidden = true;
  $('#quizArea').hidden = false;
  if (quiz.sec) {
    quiz.timer = setInterval(() => {
      quiz.left--;
      const m = Math.floor(quiz.left / 60), s = quiz.left % 60;
      $('#quizClock').textContent = T.timeLeft(String(m).padStart(2, '0'), String(s).padStart(2, '0'));
      if (quiz.left <= 0) { clearInterval(quiz.timer); finishQuiz(); }
    }, 1000);
  } else $('#quizClock').textContent = '';
  renderQuizQ();
}
function stepQuiz(d) {
  quiz.i = Math.min(quiz.list.length - 1, Math.max(0, quiz.i + d));
  renderQuizQ();
}
function renderQuizQ() {
  const cur = quiz.list[quiz.i];
  $('#quizProgress').textContent = T.quizProgress(quiz.i + 1, quiz.list.length);
  let body = '';
  if (cur.mode === 'mc') {
    body = `<div style="margin-top:16px">${cur.opts.map(o => {
      const cls = cur.pick === null ? '' : (o === cur.p.ans ? ' is-right' : (o === cur.pick ? ' is-wrong' : ''));
      return `<button class="quiz-opt${cls}" data-opt="${esc(o)}">${esc(o)}</button>`;
    }).join('')}</div>`;
  } else {
    body = cur.revealed
      ? `<div class="p-solution" style="display:block;margin-top:14px">
           <div class="p-ans math"><span class="lbl">${T.refAnswerLbl}</span>${esc(cur.p.ans)}</div>
           ${(cur.p.steps || []).length ? `<ol class="p-steps">${cur.p.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>` : ''}
         </div>
         <div style="margin-top:12px;display:flex;gap:10px;align-items:center;font-size:12.5px;color:var(--muted)">
           <span>${T.selfCheck}</span>
           <button class="btn sm" data-self="1">${T.selfRight}</button>
           <button class="btn sm warn" data-self="0">${T.selfWrong}</button>
         </div>`
      : `<div style="margin-top:14px"><button class="btn primary" data-reveal="1">${T.revealBtn}</button></div>`;
  }
  $('#quizQ').innerHTML = `
    <div class="p-sec">${cur.p.sec}</div><div class="quiz-q math" style="display:inline">${/^\d+$/.test(String(cur.p.num)) ? T.problemLabel(cur.p.num) : T.classExample}</div>
    <div class="math" style="margin-top:8px;font-size:15px;color:var(--ink)">${esc(cur.p.q)}</div>
    ${body}`;
  $$('.quiz-opt').forEach(b => b.addEventListener('click', () => {
    if (cur.pick !== null) return;
    cur.pick = b.dataset.opt;
    renderQuizQ();
  }));
  const reveal = $('[data-reveal]');
  if (reveal) reveal.addEventListener('click', () => { cur.revealed = true; renderQuizQ(); });
  $$('[data-self]').forEach(b => b.addEventListener('click', () => {
    cur.pick = b.dataset.self === '1' ? cur.p.ans : '__wrong__';
    renderQuizQ();
  }));
  scheduleMath($('#quizQ'));
  const isLast = quiz.i === quiz.list.length - 1;
  $('#quizNext').textContent = isLast ? T.submit : T.next;
  $('#quizPrev').disabled = quiz.i === 0;
}
function finishQuiz() {
  if (quiz.timer) clearInterval(quiz.timer);
  $('#quizArea').hidden = true;
  const total = quiz.list.length;
  const right = quiz.list.filter(x => x.pick === x.p.ans).length;
  const rate = Math.round(right / total * 100);
  const rows = quiz.list.map((x, i) => {
    const ok = x.pick === x.p.ans;
    const state = x.pick === null ? T.stateNotAnswered : (x.mode === 'sr' ? (ok ? T.stateSelfRight : T.stateSelfWrong) : (ok ? T.stateRight : T.stateWrong));
    return `<div class="qr-item ${x.pick === null ? '' : (ok ? 'ok' : 'bad')}">
      <div class="meta">${T.quizProgress(i + 1, total)} · ${x.p.sec} ${/^\d+$/.test(String(x.p.num)) ? T.problemLabel(x.p.num) : T.classExample} · ${state}</div>
      <div class="math" style="margin:4px 0 6px">${esc(x.p.q)}</div>
      ${x.mode === 'mc' ? `<div style="font-size:12.8px;color:var(--muted)">${T.yourAnswer}${x.pick === null ? '—' : esc(x.pick)}</div>` : ''}
      <div style="font-size:12.8px">${T.correctAnswer}<b style="color:var(--green)">${esc(x.p.ans)}</b></div>
      ${(x.p.steps || []).length ? `<ol class="p-steps" style="margin-top:8px">${x.p.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>` : ''}
    </div>`;
  }).join('');
  $('#quizResult').innerHTML = `
    <div class="qr-score"><b>${right} / ${total}</b><span style="font-size:15px;color:var(--ink)">${T.score(rate)}</span></div>
    <p style="color:var(--muted);font-size:13px">${rate >= 80 ? T.msgHigh : (rate >= 60 ? T.msgMid : T.msgLow)}</p>
    <div class="qr-list">${rows}</div>
    <div style="margin-top:18px"><button class="btn primary" id="quizRestart">${T.restart}</button></div>`;
  $('#quizResult').hidden = false;
  $('#quizRestart').addEventListener('click', () => {
    $('#quizSetup').hidden = false; $('#quizResult').hidden = true;
  });
  scheduleMath($('#quizResult'));
}

/* ---------- 易错点 ---------- */
function renderPitfalls() {
  $('#pitfallList').innerHTML = PITFALLS.map((p, i) => `
    <article class="pit">
      <div class="ph"><span class="num">#${String(i + 1).padStart(2, '0')}</span><h4>${esc(p.t)}</h4></div>
      <div class="wrong math"><span class="k">${T.pitfallWrong}</span>${esc(p.w)}</div>
      <div class="right math"><span class="k">${T.pitfallRight}</span>${esc(p.r)}</div>
      <div class="why math">${esc(p.why)}</div>
    </article>`).join('');
  scheduleMath($('#pitfallList'));
}

/* ---------- 公式速查表 ---------- */
function renderSheet() {
  $('#sheetBody').innerHTML = SHEET.map(col => `
    <div class="sh-col">
      <h3>${col.title}</h3>
      ${col.items.map(it => `<div class="sh-item"><span class="lab">${esc(it.lab)}</span><div class="math">$${esc(it.tex)}$</div></div>`).join('')}
    </div>`).join('');
  scheduleMath($('#sheetBody'));
  $('#printSheet').addEventListener('click', () => window.print());
}

/* ---------- 考试冲刺方案 ---------- */
function renderPlan() {
  const p = PLAN;
  const tiers = p.tiers.map(t => `
    <article class="plan-tier">
      <div class="pt-head"><span class="pt-id">${esc(t.id)}</span><h4>${esc(t.title)}</h4></div>
      <dl class="pt-meta">
        <div><dt>${T.planWhen}</dt><dd>${esc(t.when)}</dd></div>
        <div><dt>${T.planGoal}</dt><dd>${esc(t.goal)}</dd></div>
        <div><dt>${T.planLoad}</dt><dd>${esc(t.minutes)}</dd></div>
      </dl>
      <ol class="pt-steps">${t.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>
    </article>`).join('');

  const loop = p.loop.map((s, i) => `
    <li class="pl-item"><span class="pl-n">${i + 1}</span>
      <div><h5>${esc(s.title)}</h5><p>${esc(s.detail)}</p></div></li>`).join('');

  const triage = p.triage.map(t => `
    <div class="tr-row"><div class="tr-rule">${esc(t.rule)}</div><div class="tr-detail">${esc(t.detail)}</div></div>`).join('');

  const last = p.last10.map((s, i) => `
    <li class="l10"><span>${String(i + 1).padStart(2, '0')}</span><div>${esc(s)}</div></li>`).join('');

  $('#planBody').innerHTML = `
    <p class="plan-headline">${esc(p.headline)}</p>
    <div class="section-head tight"><h2>${T.planTiers}</h2></div>
    <div class="plan-tiers">${tiers}</div>
    <div class="section-head"><h2>${T.planLoop}</h2></div>
    <ol class="plan-loop">${loop}</ol>
    <div class="section-head"><h2>${T.planTriage}</h2></div>
    <div class="plan-triage">${triage}</div>
    <div class="section-head"><h2>${T.planLast}</h2></div>
    <ul class="plan-last">${last}</ul>`;
  scheduleMath($('#planBody'));
}

/* ---------- 图标 ---------- */
const IC = {
  warn: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>'
};

/* ---------- 滚动进度条 ---------- */
function initRail() {
  const rail = $('#rail');
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    rail.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
  }, { passive: true });
}

/* ---------- 启动 ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  renderScope();
  renderConcepts();
  initFlashcards();
  initHw();
  initPractice();
  initQuiz();
  renderPitfalls();
  renderSheet();
  renderPlan();
  initRail();
  window.addEventListener('load', () => renderMath(document.body));
  setTimeout(() => renderMath(document.body), 1200);
});
