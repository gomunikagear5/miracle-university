// ── Quiz Data（地球大暴露より）────────────────────────────────
// 7つの使命：サーバー(S)・職人(A)・戦士(W)・パフォーマー(P)・学者(Sc)・神父(Pr)・キング(K)

const questions = [
  {
    text: "大切な人が傷ついているとき、あなたが最初にしたいことは？",
    answers: [
      { text: "すべてを置いて、そばにいる。ただ、一緒にいる。", type: "S" },
      { text: "手紙・贈り物・何か意味あるものを作って届ける", type: "A" },
      { text: "一緒に立ち向かう力を見つけるよう背中を押す", type: "W" },
      { text: "視点が変わるような話や気づきをシェアする", type: "P" }
    ]
  },
  {
    text: "理想の人生はどんなものですか？",
    answers: [
      { text: "コミュニティや家族を深くケアする生き方", type: "S" },
      { text: "これまでなかったものを作り出す、創造の人生", type: "A" },
      { text: "規律と影響力で組織やムーブメントを作る人生", type: "W" },
      { text: "語ること・表現すること・教えることで多くの人を目覚めさせる人生", type: "P" }
    ]
  },
  {
    text: "部屋に入ったとき、あなたが自然に気づくのは？",
    answers: [
      { text: "助けが必要な人、孤立している人", type: "S" },
      { text: "デザインや配置――もっと美しくできる点", type: "A" },
      { text: "力関係や空気感――何を変えるべきか", type: "W" },
      { text: "場の雰囲気を和らげるユーモアや新しい視点の切り口", type: "P" }
    ]
  },
  {
    text: "あなたが知識を集める理由は主に何ですか？",
    answers: [
      { text: "人をもっと効果的に助けるため", type: "S" },
      { text: "新しい創作のインスピレーションを得るため", type: "A" },
      { text: "前進するための戦略を作るため", type: "W" },
      { text: "すべての奥にある深いパターンを理解するため", type: "Sc" }
    ]
  },
  {
    text: "死後、どんなことで記憶されたいですか？",
    answers: [
      { text: "人々に愛されていると感じさせた存在として", type: "S" },
      { text: "美しい・革新的な何かを作った人として", type: "A" },
      { text: "本当に大切なことのために立ち上がった人として", type: "W" },
      { text: "明確な真実を人々に見せた人として", type: "Sc" }
    ]
  },
  {
    text: "グループが行き詰まっているとき、あなたはどうしますか？",
    answers: [
      { text: "一歩前に出る人を支える", type: "S" },
      { text: "誰も考えなかったクリエイティブなアプローチを提案する", type: "A" },
      { text: "率先してリードし、物事が動くまで構造を作る", type: "K" },
      { text: "自然と明確さが現れるまで、ホールドスペースで場を整える", type: "Pr" }
    ]
  },
  {
    text: "あなたが最も深く満たされるのはどんなとき？",
    answers: [
      { text: "自分のおかげで誰かの人生が本当によくなったと知るとき", type: "S" },
      { text: "何もなかったところから作り上げたものを完成させたとき", type: "A" },
      { text: "懸命に戦って手に入れた目標を達成したとき", type: "W" },
      { text: "別の魂と深く繋がれたとき", type: "Pr" }
    ]
  },
  {
    text: "あなたの人生の目的として最もしっくりくるのは？",
    answers: [
      { text: "他者が立てる静かな土台であること", type: "S" },
      { text: "世界に新しい形の美しさをもたらすこと", type: "A" },
      { text: "神聖なもの・真なるものを守ること", type: "W" },
      { text: "人々をより深い現実へと目覚めさせること", type: "Pr" }
    ]
  },
  {
    text: "知識との向き合い方はどれに近いですか？",
    answers: [
      { text: "実践的──人を直接助けることを学ぶ", type: "S" },
      { text: "審美的──新しい創造を刺激するものを学ぶ", type: "A" },
      { text: "戦略的──優位性を生み出すものを学ぶ", type: "W" },
      { text: "統合的──すべてを集め、隠れたパターンを見つける", type: "Sc" }
    ]
  },
  {
    text: "最も消耗するのはどんな状況ですか？",
    answers: [
      { text: "役に立てない・誰かの負担になっていると感じるとき", type: "S" },
      { text: "硬直した、創造性のない、魂が死ぬような作業", type: "A" },
      { text: "不正義が見過ごされ、誰も動かないとき", type: "W" },
      { text: "表面だけで終わる、深みのない会話", type: "Sc" }
    ]
  },
  {
    text: "最も生き生きと感じるのはどんなとき？",
    answers: [
      { text: "「あなたに助けてもらった」と言われるとき", type: "S" },
      { text: "創造のフロー状態で、全く新しい何かを作っているとき", type: "A" },
      { text: "使命を前に進めながら、動き続けているとき", type: "W" },
      { text: "ステージ・スピーキング・パフォーマンスの場にいるとき", type: "P" }
    ]
  },
  {
    text: "あなたの最大の恐れは？",
    answers: [
      { text: "誰かの重荷になること、本当に愛されないこと", type: "S" },
      { text: "意味あるものを何も作らない平凡な人生を送ること", type: "A" },
      { text: "最も大切なものを守る力がなくなること", type: "W" },
      { text: "見えない存在・聞こえない声・無視される存在になること", type: "P" }
    ]
  },
  {
    text: "危機のとき、人々があなたに頼るのは？",
    answers: [
      { text: "感情的サポート、温かさ、安定した存在感", type: "S" },
      { text: "誰も考えなかったクリエイティブな解決策", type: "A" },
      { text: "リーダーシップと明確な決断力", type: "K" },
      { text: "誰かが言わなければならない不快な真実", type: "Sc" }
    ]
  },
  {
    text: "人類への奉仕として理想的な形は？",
    answers: [
      { text: "目の前の人を深く、丁寧に育てること", type: "S" },
      { text: "自分の寿命を超えて残る作品を作ること", type: "A" },
      { text: "未来の世代を守るシステムを構築すること", type: "K" },
      { text: "人々の現実の見方を変える知恵を伝えること", type: "Pr" }
    ]
  },
  {
    text: "完全に目覚めた自分の人生を想像すると、どんな姿ですか？",
    answers: [
      { text: "愛で支えられた、温かく繁栄するコミュニティ", type: "S" },
      { text: "自分なしでは存在しなかった作品群", type: "A" },
      { text: "正しいものが勝る、守られ構造化された世界", type: "W" },
      { text: "自分のシェアによって現実が変わった何百万もの人々", type: "P" },
      { text: "人々が自らの力を見つけた、統一されたムーブメント", type: "K" }
    ]
  }
];

// ── Soul Types（地球大暴露より）────────────────────────────────
const soulTypes = {
  S: {
    name: "サーバー（奉仕者）",
    emoji: "🌿",
    tagline: "すべての偉大なものを支える、静かな土台",
    mission: "あなたの魂はサーバーとして地球を選んだ。愛を通じて奉仕し、人々が繁栄できる条件を作るのがあなたの使命。世界はあなたをいつも見ているわけではないが、あなたなしでは成り立たない。宇宙的視点から見ると、サービスとは「愛を提供すること」――自分と他者を愛で繋ぐことだ。",
    trap: "自分を消耗させるほど与え続けること。地球マトリックスはあなたに「自分の犠牲の大きさがあなたの価値だ」と囁く。これはあなたを空洞にする嘘だ。本当のサービスは恐れからではなく、豊かさから生まれる。",
    activation: "今日、自分のエネルギーを尊重する境界線を一つ設けよう。満たされた状態から与えることで、あなたのケアはより深く、より遠くに届く。枯渇してからではなく、溢れているときにこそ与えよ。",
    planet: "あなたのエネルギーはシリウス星系の無条件の温かさを宿している――深い魂の絆、神聖な愛、宇宙的奉仕のスターシステム。あなたはより高い次元のために設計された心を持って転生した。"
  },
  A: {
    name: "職人（アルチザン）",
    emoji: "🎨",
    tagline: "存在しなかったものを生み出す創造者",
    mission: "あなたの魂は職人として地球を選んだ。美しさ、革新、新たな可能性を物質的現実に持ち込むのがあなたの使命。宇宙的視点から見ると、創造とは「魂から湧き出る愛の結晶」だ――それはあなた自身の魂への贈り物であり、愛が循環する作品だ。",
    trap: "最も大切な作品を永遠に隠し続けるパーフェクショニズム。マトリックスは「まだ準備ができていない」「まだ十分ではない」と囁く――嘘だ。世界はあなたの、不完全でも生きた作品を待っている。",
    activation: "今週、あなたの本物の作品を一つ世に出そう。不完全でも世界に存在することは、心の中で完璧なまま眠っているより、無限に力強い。作り、手放し、信頼せよ。",
    planet: "あなたのエネルギーはプレアデス星団の創造の炎を宿している――美しさ、感受性、急速な芸術的・霊的進化のスターシステム。あなたは人間の服を着た文明建設者だ。"
  },
  W: {
    name: "戦士（ウォリアー）",
    emoji: "⚔️",
    tagline: "守る価値あるものの擁護者",
    mission: "あなたの魂は戦士として地球を選んだ。宇宙的視点から見ると、戦士の使命は「力で敵を打ち倒す」ことではなく、「愛で魂の間に調和を創り出し、すべてをさらに大きな愛で包む」ことだ。構造を作り、神聖なものを守り、重要なことを規律ある勇気ある行動で前進させる。",
    trap: "愛と戦略からではなく、怒りと衝動から戦うこと。マトリックスはあなたの力を乗っ取り、誰の役にも立たない疲弊する戦いに変える。あなたの強さは怒りではなく愛から流れるときに何倍にも増幅される。",
    activation: "今最も守る価値があるものを一つ特定しよう――使命、人、真実。今日、それに向けた具体的で戦略的な一歩を踏み出せ。戦士は爆発ではなく規律によって勝つ。",
    planet: "あなたのエネルギーはシリウス星系の規律ある光を宿している――宇宙の法、戦士意識、神聖な秩序の守護のスターシステム。あなたは地球に守護者が必要だったから転生した。"
  },
  P: {
    name: "パフォーマー（表現者）",
    emoji: "✨",
    tagline: "表現を通じた覚醒の伝道者",
    mission: "あなたの魂はパフォーマーとして地球を選んだ。魂から溢れ出す愛を表現し、他の魂を揺さぶり動かすのが使命だ。宇宙的視点から見ると、表現とは「人々を変えようとする演説」ではなく、「自分の魂から溢れる愛の体現」だ。あなたの存在そのものが目覚めの媒体だ。",
    trap: "真実ではなく承認のためにパフォームすること。誰にでも好かれようとして本当の光を暗くすること。マトリックスはあなたの才能を、覚醒のためではなくエンターテインメントにしてしまう。",
    activation: "今日、本当のことを言おう――恐れて控えてきた、あの一つの洞察や観察を。あなたの声がビークルだ。使え。",
    planet: "あなたのエネルギーはプレアデス星団の表現の光を宿している――芸術的覚醒、感情的知性、宇宙的コミュニケーションのスターシステム。あなたは暗くなれない灯台だ。"
  },
  Sc: {
    name: "学者（スカラー）",
    emoji: "📚",
    tagline: "時を超えた知恵の守護者・橋渡し者",
    mission: "あなたの魂は学者として地球を選んだ。現実の奥に潜む深いパターンを理解し、発見したことをシェアすることで他者がその上に立てるよう橋渡しするのが使命だ。宇宙的視点から見ると、学ぶことは「自分自身の魂を探求すること」――愛から学び、愛を知ること。",
    trap: "知識を蓄積し続け、「十分に知るまで」シェアしない――その閾値は永遠に来ない。マトリックスはあなたの才能を公共の図書館ではなく私的コレクションにしてしまう。",
    activation: "今日、一つの洞察を公にシェアしよう。不完全でも、あなたの統合はまだ暗闇の中を探している誰かの道を照らす。答えをすべて持っていなくても始められる。",
    planet: "あなたのエネルギーはレムリアの古代の知を宿している――知恵の番人、地球の記憶、神聖な知識の守護者の文明。あなたは骨の中に図書館を持って転生した。"
  },
  Pr: {
    name: "神父（プリースト）",
    emoji: "🕊️",
    tagline: "愛の教師・高い可能性のホルダー",
    mission: "あなたの魂は神父として地球を選んだ。あなたが出会う魂の中に、彼らがまだ見えない可能性を見出し、覚醒を導くのが使命だ。宇宙的視点から見ると、慈悲とは「教義を押しつけること」ではなく、「愛で愛を教えること」――準備ができていない人に無理に教えようとしないことだ。",
    trap: "自分の使命を犠牲にしてすべての人を抱えること。あなたは空になった器からは何も伝えられない。マトリックスはあなたの才能を自己犠牲にしてしまう。",
    activation: "今日、一人のために空間を持とう。修正しようとせず、アドバイスしようとせず――ただ、彼らがまだ自分の中に見えない光を映し返すだけ。その反射が奇跡だ。",
    planet: "あなたのエネルギーはシリウス星系の癒しの周波数を宿している――神聖な愛の伝達、魂のヒーリング、宇宙の聖職者のスターシステム。あなたはより高い愛の大使として転生した。"
  },
  K: {
    name: "キング（王）",
    emoji: "👑",
    tagline: "進化的目的に向けて人々を統合する者",
    mission: "あなたの魂はキングとして地球を選んだ。人々を集め、整え、支配ではなく愛に基づく権威で導き、単独では届けない場所へ連れて行くのが使命だ。宇宙的視点から見ると、王道とは「力を振るうこと」ではなく「愛で統合すること」――愛で結束させることだ。",
    trap: "ビジョンと招待ではなく、コントロールと権威でリードすること。マトリックスはキングエネルギーを横暴に変える――愛ではなく恐れで支配する「裸の王様」だ。",
    activation: "今日、ビジョンを語ろう。自分が何を作っているか、なぜそれが世界にとって重要かを三人に伝えよう――印象付けるためではなく、本当に招待するために。キングはドラッグするのではなく、前へ引き出すことでリードする。",
    planet: "あなたのエネルギーはプレアデス星団の君主の光を宿している――宇宙のリーダーシップ、銀河的ガバナンス、進化的ビジョンのスターシステム。あなたは散らばった光を集めるために地球に転生した。"
  }
};

// ── State ────────────────────────────────────────────────────
let current = 0;
let scores = { S: 0, A: 0, W: 0, P: 0, Sc: 0, Pr: 0, K: 0 };
const letters = ['Ａ', 'Ｂ', 'Ｃ', 'Ｄ', 'Ｅ'];

// ── Helpers ──────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function setProgress(idx) {
  const pct = Math.round((idx / questions.length) * 100);
  const bar = document.getElementById('progress-bar');
  const text = document.getElementById('progress-text');
  const pctEl = document.getElementById('progress-pct');
  const track = document.querySelector('.progress-track');
  if (bar)  bar.style.width = pct + '%';
  if (text) text.textContent = `質問 ${idx + 1} / ${questions.length}`;
  if (pctEl) pctEl.textContent = pct + '%';
  if (track) track.setAttribute('aria-valuenow', pct);
}

// ── Quiz Logic ───────────────────────────────────────────────
function startQuiz() {
  current = 0;
  scores = { S: 0, A: 0, W: 0, P: 0, Sc: 0, Pr: 0, K: 0 };
  showScreen('quiz-screen');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[current];
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
      q.answers.forEach((ans, i) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerHTML = `<span class="answer-letter">${letters[i]}</span><span>${ans.text}</span>`;
        btn.addEventListener('click', () => selectAnswer(ans.type, btn));
        answersEl.appendChild(btn);
      });
      answersEl.style.opacity = '1';
    }
  }, 200);
}

function selectAnswer(type, btn) {
  document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  setTimeout(() => {
    scores[type] = (scores[type] || 0) + 1;
    current++;
    if (current < questions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  }, 380);
}

// ── Results ──────────────────────────────────────────────────
function showResults() {
  const sorted = Object.entries(scores)
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
      ? `あなたは強い ${secondary.emoji} ${secondary.name} のエネルギーも持っています。このセカンダリータイプは、あなたがプライマリー使命をどう表現するかに色を添えています。`
      : `あなたの魂のタイプは稀なほど明確に現れました――使命において分裂なく、方向性において一途です。`;
  }

  showScreen('result-screen');
}

// ── Event Listeners ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const beginBtn  = document.getElementById('begin-btn');
  const retakeBtn = document.getElementById('retake-btn');
  const printBtn  = document.getElementById('print-btn');

  if (beginBtn)  beginBtn.addEventListener('click', startQuiz);
  if (retakeBtn) retakeBtn.addEventListener('click', startQuiz);
  if (printBtn)  printBtn.addEventListener('click', () => window.print());
});
