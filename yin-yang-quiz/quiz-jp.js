// ── ソウルミッション診断（日本語版）— Ungameable Edition ─────────────────────
// question-bank-jp.js から毎回ランダムに15問を抽出
// シャッフル・逆スコア・強制選択・正規化スコアに対応

// ── 7つのソウルタイプ ──────────────────────────────────────────────────────
const soulTypes = {
  S: {
    name: "サーバー",
    emoji: "🌿",
    tagline: "すべての偉大なものの、見えない土台",
    mission: "あなたの魂は「サーバー」として地球大暴露に参加しました。あなたの使命は、他者が花開くための条件を整えること。世界はいつもあなたを見ているわけではありませんが、あなたなしでは成り立ちません。あなたは愛という接着剤——すべてをひとつに繋ぎ止める存在です。サーバーの喜びは、自分の支えによって誰かが輝く瞬間にあります。",
    trap: "マトリックスの罠：消えてしまうまで与え続けること。「自分を犠牲にすることが愛の証明だ」という地球的プログラムに囚われると、やがてあなた自身が空洞になります。枯れた源から人は助けられません。自己犠牲はB-Lifeではなく、A-Lifeの最も巧妙な罠のひとつです。",
    activation: "B-Life起動：今日、自分自身のエネルギーを守るひとつの境界線を設けてください。恐れからではなく、満ち足りた状態から与えてください。宇宙への注文を入れましょう：「私は溢れた愛から奉仕し、枯渇から守られます」。",
    planet: "ホームプラネット：あなたのエネルギーはシリウス星系の周波数を持っています。深い魂の絆、神聖な愛、宇宙的奉仕の場所。あなたは高次の愛の大使として、この地球メタバースにアバターを送り込みました。"
  },
  A: {
    name: "アーティザン",
    emoji: "🎨",
    tagline: "あなたが来る前には存在しなかった形を生み出す者",
    mission: "あなたの魂は「アーティザン（職人）」として地球大暴露に参加しました。あなたの使命は、宇宙の創造エネルギーを物質的現実に降ろすこと。芸術、デザイン、発明、問題解決——あなたはまだこの世界にない形を見つけ、それを作ります。あなたにしか作れないものが存在します。それを作ることが、あなたのパラレルワールド移動の鍵です。",
    trap: "マトリックスの罠：完璧主義によって、最も重要な作品を永遠に未公開のまま保持すること。「まだ準備ができていない」「もっと良くなってから」——これはマトリックスがアーティザンを無力化する最も一般的な手口です。",
    activation: "B-Life起動：今週、「不完全でも生きている」作品をひとつ世に出してください。完璧に心の中に閉じ込められたものより、不完全でも世に存在するものの方が無限に強力です。宇宙への注文：「私の作品は完成する前から誰かの人生を変えています」。",
    planet: "ホームプラネット：あなたのエネルギーはプレアデス星団の創造の炎を持っています。美しさ、繊細さ、急速な芸術的・精神的進化の場所。あなたは人間の服を着た文明の建設者です。"
  },
  W: {
    name: "ウォーリアー",
    emoji: "⚔️",
    tagline: "大切なものを守り、使命を前進させる者",
    mission: "あなたの魂は「ウォーリアー」として地球大暴露に参加しました。あなたの使命は、構造を作り、神聖なものを守り、重要なことを規律ある行動で前進させること。世界にはあなたの勇気、あなたの決断力、あなたの「それは違う」と言える背骨が必要です。ウォーリアーの力は、挑戦を受け入れ、使命に向かって持続的に行動し続けることにあります。",
    trap: "マトリックスの罠：戦略的な愛ではなく、怒りと反応から戦うこと。マトリックスはウォーリアーのエネルギーを奪い、誰の役にも立たない消耗する戦いに変えます。怒りの振動は低く、あなたの本来の力を削ぎます。",
    activation: "B-Life起動：今、最も戦う価値のあるもの——大義・人・真実——をひとつ特定してください。そして今日、愛から発した戦略的な一歩を踏み出してください。宇宙への注文：「私は愛の力から戦い、守るべきものを守ります」。",
    planet: "ホームプラネット：あなたのエネルギーはシリウス星系の規律ある光を持っています。宇宙的な法、ウォーリアー意識、神聖な秩序の保護の場所。あなたは地球がディフェンダーを必要としていたから生まれました。"
  },
  P: {
    name: "パフォーマー",
    emoji: "✨",
    tagline: "表現と声を通して魂を目覚めさせる伝達者",
    mission: "あなたの魂は「パフォーマー（セイジ）」として地球大暴露に参加しました。あなたの使命は、他者が感じているのに言葉にできない真実を伝えること。あなたの声、存在感、ユーモア、そして表現力は、あなたが入るすべての部屋の意識を変えます。すべてのステージは聖なる場です。",
    trap: "マトリックスの罠：魂の表現ではなく、承認のためにパフォーマンスすること。すべての人に好かれようとして本当の光を暗くすること。マトリックスはあなたの才能を「目覚めのための表現」から「エンターテインメント」に格下げしようとします。",
    activation: "B-Life起動：今日、ずっと心の中に温めてきた「本当のこと」をひとつ声に出してください。批判されることへの恐れから控えていた洞察や観察を。あなたの声がビークル（乗り物）です。使ってください。宇宙への注文：「私の表現は誰かの転換期を加速させています」。",
    planet: "ホームプラネット：あなたのエネルギーはプレアデス星団の表現の光を持っています。芸術的な目覚め、感情的な知性、宇宙的なコミュニケーションの場所。あなたは暗くなる余裕のない灯台です。"
  },
  Sc: {
    name: "スカラー",
    emoji: "📚",
    tagline: "時代を超えた知恵の守護者と橋渡し役",
    mission: "あなたの魂は「スカラー」として地球大暴露に参加しました。あなたの使命は、現実の奥にある深いパターンを理解し、見つけたものを分かち合うこと。スカラーは観察者——他者が見逃すパターンを見つけるほど切り離された視点と、その意味を理解するほど深い洞察を持っています。知識は自分のためだけにあるのではありません。",
    trap: "マトリックスの罠：「もっと知識が必要」と言い続けて、永遠に公開しないこと。スカラーが「十分に知っている」と感じる瞬間は決して来ません——それがマトリックスの仕掛けです。あなたの不完全な知恵は、今まさに誰かが探している答えです。",
    activation: "B-Life起動：今日、ひとつの洞察を公開してください。不完全でも構いません。あなたの統合は、まだ暗闇の中で探している誰かへの道を照らします。宇宙への注文：「私の知恵は今日、必要な人に届いています」。",
    planet: "ホームプラネット：あなたのエネルギーはレムリア文明の古代の知恵を持っています——知恵の守護者、地球の記憶、神聖な知識の番人の場所。あなたは骨の中に図書館を持っています。"
  },
  Pr: {
    name: "プリースト",
    emoji: "🕊️",
    tagline: "愛を教え、より高いビジョンを保持する者",
    mission: "あなたの魂は「プリースト」として地球大暴露に参加しました。あなたの使命は、愛を教え、あなたが出会うすべての魂に対して最も高い可能性のビジョンを保持すること。プリーストはその人自身がまだ見えていない潜在性を見つけ、それを鏡で映して見せます——教義ではなく、純粋な伝達を通して。",
    trap: "マトリックスの罠：自分のミッションを犠牲にして、すべての人を支えようとすること。空のカリス（聖杯）からは注ぐことができません。自己犠牲として高い視点を使い、地球での責任を回避すること——これもプリーストの罠です。",
    activation: "B-Life起動：今日、誰かのために場を保持してください。修正するためでも、助言するためでもなく——ただその人がまだ自分の中に見えない光を、あなたが見てあげるために。宇宙への注文：「私は自分を満たしながら、あふれた愛から人々を導きます」。",
    planet: "ホームプラネット：あなたのエネルギーはシリウス星系の癒しの周波数を持っています——神聖な愛の伝達、魂の癒し、宇宙的な聖職の場所。あなたはより高い次元からの愛の大使として、この地球メタバースに来ました。"
  },
  K: {
    name: "キング",
    emoji: "👑",
    tagline: "愛によって人々を統一し、進化的使命へと導く者",
    mission: "あなたの魂は「キング」として地球大暴露に参加しました。あなたの使命は、人々を集め、整え、ひとりでは到達できないものへと導くこと——支配ではなく、愛に基づく権威を通して。キングは混沌から秩序を作り出す自然なリーダー。本当の主権は、力で支配することではなく、規模での奉仕から生まれます。",
    trap: "マトリックスの罠：ビジョンと招待ではなく、コントロールと権威によってリードしようとすること。マトリックスはキングのエネルギーを愛の統一から恐れによる支配へと堕落させます。",
    activation: "B-Life起動：今日、あなたのビジョンを3人に伝えてください——感銘を与えるためではなく、本当に招待するために。キングはドローイングフォワード（前方への引き込み）でリードします。宇宙への注文：「私のビジョンは必要な人々を引き寄せ、統一された運動が今生まれています」。",
    planet: "ホームプラネット：あなたのエネルギーはプレアデス星団の主権の光を持っています——宇宙的なリーダーシップ、銀河的なガバナンス、進化的なビジョンの場所。あなたは散らばった光を集めるために、この地球メタバースにアバターを送り込みました。"
  }
};

// ── 状態管理 ──────────────────────────────────────────────────────────────
let sessionQuestions = [];
let current     = 0;
let rawScores   = { S: 0, A: 0, W: 0, P: 0, Sc: 0, Pr: 0, K: 0 };
let typeCounts  = { S: 0, A: 0, W: 0, P: 0, Sc: 0, Pr: 0, K: 0 };
const letters = ['A', 'B', 'C', 'D', 'E'];
const QUESTIONS_PER_SESSION = 30;

// ── セッション構築 ────────────────────────────────────────────────────────
function buildSession() {
  const bank = (typeof questionBankJP !== 'undefined') ? questionBankJP : [];
  if (bank.length === 0) {
    console.error('日本語質問バンクが読み込まれていません — question-bank-jp.js を確認してください');
    return [];
  }
  // Fisher-Yates シャッフル — 重複なしを保証
  function fisherYates(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const shuffled = fisherYates(bank);
  const picked   = shuffled.slice(0, QUESTIONS_PER_SESSION);
  // 安全チェック: id の重複を除去（Fisher-Yates では起きないはずだが念のため）
  const seen = new Set();
  const deduped = picked.filter(q => {
    if (seen.has(q.id)) return false;
    seen.add(q.id);
    return true;
  });
  return deduped.map(q => {
    if (q.type === 'forced_choice') return q;
    return {
      ...q,
      answers: fisherYates(q.answers)
    };
  });
}

// ── ヘルパー関数 ──────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function setProgress(idx) {
  const pct   = Math.round((idx / sessionQuestions.length) * 100);
  const bar   = document.getElementById('progress-bar');
  const text  = document.getElementById('progress-text');
  const pctEl = document.getElementById('progress-pct');
  const track = document.querySelector('.progress-track');
  if (bar)   bar.style.width = pct + '%';
  if (text)  text.textContent = `質問 ${idx + 1} / ${sessionQuestions.length}`;
  if (pctEl) pctEl.textContent = pct + '%';
  if (track) track.setAttribute('aria-valuenow', pct);
}

// ── クイズロジック ────────────────────────────────────────────────────────
function startQuiz() {
  current     = 0;
  rawScores   = { S: 0, A: 0, W: 0, P: 0, Sc: 0, Pr: 0, K: 0 };
  typeCounts  = { S: 0, A: 0, W: 0, P: 0, Sc: 0, Pr: 0, K: 0 };
  sessionQuestions = buildSession();
  showScreen('quiz-screen');
  renderQuestion();
}

function renderQuestion() {
  const q = sessionQuestions[current];
  const questionEl = document.getElementById('question-text');
  const answersEl  = document.getElementById('answers-grid');

  if (questionEl) questionEl.style.opacity = '0';
  if (answersEl)  answersEl.style.opacity  = '0';

  setTimeout(() => {
    setProgress(current);

    if (questionEl) {
      questionEl.textContent = q.text;
      questionEl.style.opacity = '1';
    }

    if (answersEl) {
      answersEl.innerHTML = '';

      if (q.type === 'forced_choice') {
        answersEl.style.display = 'flex';
        answersEl.style.flexDirection = 'column';
        answersEl.style.gap = '0.75rem';
        [q.optionA, q.optionB].forEach((opt, i) => {
          const btn = document.createElement('button');
          btn.className = 'answer-btn';
          btn.innerHTML = `<span class="answer-letter">${letters[i]}</span><span>${opt.text}</span>`;
          btn.addEventListener('click', () => selectForcedChoice(opt, btn));
          answersEl.appendChild(btn);
        });
      } else {
        answersEl.style.display = '';
        q.answers.forEach((ans, i) => {
          const btn = document.createElement('button');
          btn.className = 'answer-btn';
          btn.innerHTML = `<span class="answer-letter">${letters[i]}</span><span>${ans.text}</span>`;
          btn.addEventListener('click', () => selectAnswer(ans, btn));
          answersEl.appendChild(btn);
        });
      }

      answersEl.style.opacity = '1';
    }
  }, 200);
}

function recordScore(type, score) {
  rawScores[type]  = (rawScores[type]  || 0) + score;
  typeCounts[type] = (typeCounts[type] || 0) + 1;
}

function selectAnswer(ans, btn) {
  document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  setTimeout(() => {
    recordScore(ans.type, ans.score);
    advance();
  }, 380);
}

function selectForcedChoice(opt, btn) {
  document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  setTimeout(() => {
    recordScore(opt.type, opt.score);
    advance();
  }, 380);
}

function advance() {
  current++;
  if (current < sessionQuestions.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

// ── 結果表示 ──────────────────────────────────────────────────────────────
function showResults() {
  // 正規化：タイプごとの出題数で割って公平なスコアに
  const normalized = {};
  for (const t of Object.keys(rawScores)) {
    const count = typeCounts[t] || 0;
    normalized[t] = count > 0 ? rawScores[t] / count : 0;
  }

  const sorted = Object.entries(normalized)
    .filter(([, v]) => v > 0)
    .sort((a, b) => b[1] - a[1]);

  const primaryKey   = sorted[0]?.[0] || 'S';
  const secondaryKey = sorted[1]?.[0];
  const primary   = soulTypes[primaryKey];
  const secondary = secondaryKey ? soulTypes[secondaryKey] : null;

  document.getElementById('result-emoji').textContent      = primary.emoji;
  document.getElementById('result-name').textContent       = primary.name;
  document.getElementById('result-tagline').textContent    = primary.tagline;
  document.getElementById('result-mission').textContent    = primary.mission;
  document.getElementById('result-trap').textContent       = primary.trap;
  document.getElementById('result-activation').textContent = primary.activation;
  document.getElementById('result-planet').textContent     = primary.planet;

  const secEl = document.getElementById('secondary-type');
  if (secEl) {
    secEl.textContent = secondary
      ? `あなたは強い ${secondary.emoji} ${secondary.name} のエネルギーも持っています——${secondary.tagline}。このセカンダリーソウルタイプが、あなたのプライマリーミッションの表現方法を彩ります。`
      : `あなたのソウルタイプは稀な明確さで現れました——ミッションと方向性において、揺るぎない純粋さで。`;
  }

  showScreen('result-screen');
}

// ── メールゲート ──────────────────────────────────────────────────────────
function submitEmailGate(event) {
  event.preventDefault();
  const name  = document.getElementById('gate-name-input').value.trim();
  const email = document.getElementById('gate-email-input').value.trim();
  window._capturedName  = name;
  window._capturedEmail = email;

  const CONVERTKIT_FORM_ID = 'CONVERTKIT_FORM_ID'; // Charles: 実際のフォームIDに置き換え
  const CONVERTKIT_API_KEY = 'CONVERTKIT_API_KEY';  // Charles: 実際のAPIキーに置き換え
  if (CONVERTKIT_FORM_ID !== 'CONVERTKIT_FORM_ID') {
    fetch(`https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: CONVERTKIT_API_KEY, email, fields: { first_name: name, stage: 'pre-quiz', language: 'ja' } })
    }).catch(() => {});
  }
  startQuiz();
}

// ── イベントリスナー ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const beginBtn  = document.getElementById('begin-btn');
  const retakeBtn = document.getElementById('retake-btn');
  const printBtn  = document.getElementById('print-btn');

  if (beginBtn)  beginBtn.addEventListener('click', () => showScreen('email-gate-screen'));
  if (retakeBtn) retakeBtn.addEventListener('click', startQuiz); // 毎回新しいランダムシード
  if (printBtn)  printBtn.addEventListener('click', () => window.print());
});
