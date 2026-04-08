// ── Soul Mission Quiz (EN) — Ungameable Edition ─────────────────────────────
// Pulls 15 random questions per session from question-bank.js
// Shuffles answer order, normalizes scores, supports forced-choice + reversed

// ── Soul Type Definitions ────────────────────────────────────────────────────
const soulTypes = {
  S: {
    name: "Server",
    emoji: "🌿",
    tagline: "The Foundation Beneath All Great Things",
    mission: "Your soul chose Earth as a Server — the quiet foundation beneath all great things. Your mission is to create the conditions in which others can flourish. The world does not always see you, but it could not stand without you. You are the warmth that holds everything together.",
    trap: "Giving until you disappear — loving others at the cost of your own existence. The matrix tells you that your worth is measured by how much you sacrifice. This is the lie that will hollow you out.",
    activation: "Give boldly from fullness, not from fear of being unloved. Set one boundary today that honors your own energy. Your care is most powerful when it comes from overflow, not depletion.",
    planet: "Your energy carries the unconditional warmth of Sirius — a star system of deep soul bonds, divine love, and cosmic service. You incarnated with a heart built for a higher dimension."
  },
  A: {
    name: "Artisan",
    emoji: "🎨",
    tagline: "Creator of Forms That Did Not Exist Before You",
    mission: "Your soul chose Earth as an Artisan — a creator of forms that did not exist before you arrived. Your mission is to bring beauty, innovation, and new possibility into physical reality. The world needs what only your particular soul can make. Nothing you create is accidental.",
    trap: "Perfectionism that keeps your most important work permanently hidden. The matrix whispers that you are not ready, that it is not good enough — it lies. The world is waiting for your imperfect, alive work.",
    activation: "Ship one piece of your real work this week. Imperfect and alive in the world is infinitely more powerful than perfect and locked inside your mind. Create it, release it, trust it.",
    planet: "Your energy carries the creative fire of the Pleiades — a star system of beauty, sensitivity, and rapid artistic and spiritual evolution. You are a civilization-builder wearing human clothes."
  },
  W: {
    name: "Warrior",
    emoji: "⚔️",
    tagline: "Champion of What Matters",
    mission: "Your soul chose Earth as a Warrior — a champion of what is worth defending. Your mission is to create structure, protect the sacred, and push important things forward with disciplined, courageous action. The world needs your courage, your backbone, your refusal to look away.",
    trap: "Fighting from anger and reactivity instead of strategic love. The matrix hijacks your power and turns it into exhausting battles that serve no one. Your strength is multiplied when it flows from love, not rage.",
    activation: "Identify the one thing most worth fighting for right now — the cause, the person, the truth. Take one concrete, strategic step toward it today. Warriors win through discipline, not explosions.",
    planet: "Your energy carries the disciplined light of Sirius — a star system of cosmic law, warrior consciousness, and the protection of divine order. You came to Earth because it needed defenders."
  },
  P: {
    name: "Performer",
    emoji: "✨",
    tagline: "Transmitter of Awakening Through Expression",
    mission: "Your soul chose Earth as a Performer — a transmitter of awakening through the power of expression. Your mission is to communicate the truths others feel but cannot say, and to use your voice, your presence, and your light to shift the consciousness of every room you enter.",
    trap: "Performing for approval instead of truth — dimming your real light in order to be universally liked. The matrix turns your gift into entertainment when it was built for awakening.",
    activation: "Say the true thing today — the one insight or observation you have been holding back out of fear of how it will land. Your voice is the vehicle. Use it.",
    planet: "Your energy carries the expressive light of the Pleiades — a star system of artistic awakening, emotional intelligence, and cosmic communication. You are a lighthouse that cannot afford to go dark."
  },
  Sc: {
    name: "Scholar",
    emoji: "📚",
    tagline: "Keeper and Bridge of Wisdom Across Time",
    mission: "Your soul chose Earth as a Scholar — a gatherer and bridge of wisdom across time. Your mission is to understand the deep patterns beneath reality and share what you find so others can stand on your shoulders. You are not meant to know for yourself alone.",
    trap: "Hoarding knowledge, perpetually waiting until you know enough to share — a threshold that never arrives. The matrix turns your gift into a private collection when it was meant to be a public library.",
    activation: "Share one insight publicly today. Even incomplete, your synthesis lights the path for someone still searching in the dark. You do not need to have all the answers to begin.",
    planet: "Your energy carries the ancient knowing of Lemuria — a civilization of wisdom keepers, earth memory, and sacred knowledge guardians. You carry libraries in your bones."
  },
  Pr: {
    name: "Priest",
    emoji: "🕊️",
    tagline: "Teacher of Love and Holder of High Vision",
    mission: "Your soul chose Earth as a Priest — a teacher of love and a holder of the highest possible vision for each soul you encounter. Your mission is to see the potential in others that they cannot yet see in themselves, and to guide awakening — not through doctrine, but through pure transmission.",
    trap: "Carrying everyone at the expense of your own mission — becoming an empty vessel with nothing left to transmit. You cannot pour from an empty chalice. The matrix turns your gift into self-sacrifice.",
    activation: "Hold space for one person today. Not to fix them, not to advise them — simply to reflect back the light they cannot yet see in themselves. That reflection is the miracle.",
    planet: "Your energy carries the healing frequency of Sirius — a star system of divine love transmission, soul healing, and cosmic priesthood. You came to Earth as an ambassador of a higher love."
  },
  K: {
    name: "King",
    emoji: "👑",
    tagline: "Unifier of People Toward Evolutionary Purpose",
    mission: "Your soul chose Earth as a King — a unifier of people toward evolutionary purpose. Your mission is to gather, align, and lead people toward what they could not reach alone, through love-based authority rather than domination. You are here to midwife a new era.",
    trap: "Leading through control and authority instead of through vision and invitation. The matrix corrupts King energy into tyranny — ruling through fear rather than inspiring through love.",
    activation: "Cast a vision today. Tell three people what you are building and why it matters to the world — not to impress them, but to genuinely invite them. Kings lead by drawing people forward.",
    planet: "Your energy carries the sovereign light of the Pleiades — a star system of cosmic leadership, galactic governance, and evolutionary vision. You came to Earth to gather the scattered light."
  }
};

// ── State ─────────────────────────────────────────────────────────────────────
let sessionQuestions = [];
let current = 0;
let rawScores   = { S: 0, A: 0, W: 0, P: 0, Sc: 0, Pr: 0, K: 0 };
let typeCounts  = { S: 0, A: 0, W: 0, P: 0, Sc: 0, Pr: 0, K: 0 }; // # of questions per type
const letters = ['A', 'B', 'C', 'D', 'E'];
const QUESTIONS_PER_SESSION = 30;

// ── Session Builder ───────────────────────────────────────────────────────────
function buildSession() {
  const bank = (typeof questionBank !== 'undefined') ? questionBank : [];
  if (bank.length === 0) {
    console.error('Question bank not loaded — check question-bank.js script tag');
    return [];
  }
  // Fisher-Yates shuffle — guaranteed no repeats
  function fisherYates(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const shuffled = fisherYates(bank);
  // Pick first QUESTIONS_PER_SESSION questions
  const picked = shuffled.slice(0, QUESTIONS_PER_SESSION);
  // Safety net: deduplicate by id (shouldn't happen with Fisher-Yates but just in case)
  const seen = new Set();
  const deduped = picked.filter(q => {
    if (seen.has(q.id)) return false;
    seen.add(q.id);
    return true;
  });
  // Shuffle answer order within each (skip forced_choice — those have optionA/B only)
  return deduped.map(q => {
    if (q.type === 'forced_choice') return q;
    return {
      ...q,
      answers: fisherYates(q.answers)
    };
  });
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function setProgress(idx) {
  const pct  = Math.round((idx / sessionQuestions.length) * 100);
  const bar  = document.getElementById('progress-bar');
  const text = document.getElementById('progress-text');
  const pctEl = document.getElementById('progress-pct');
  const track = document.querySelector('.progress-track');
  if (bar)  bar.style.width = pct + '%';
  if (text) text.textContent = `Question ${idx + 1} of ${sessionQuestions.length}`;
  if (pctEl) pctEl.textContent = pct + '%';
  if (track) track.setAttribute('aria-valuenow', pct);
}

// ── Quiz Logic ────────────────────────────────────────────────────────────────
function startQuiz() {
  current    = 0;
  rawScores  = { S: 0, A: 0, W: 0, P: 0, Sc: 0, Pr: 0, K: 0 };
  typeCounts = { S: 0, A: 0, W: 0, P: 0, Sc: 0, Pr: 0, K: 0 };
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
        // Two-button forced choice layout
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
    const q = sessionQuestions[current];
    // If reversed, the score still goes to the stated type (bank already encodes correct direction)
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

// ── Results ───────────────────────────────────────────────────────────────────
function showResults() {
  // Normalize: divide raw score by number of questions that targeted each type
  // This prevents bias from random pulls with uneven type coverage
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
      ? `You also carry strong ${secondary.emoji} ${secondary.name} energy — ${secondary.tagline.toLowerCase()}. This secondary soul type colors how you express your primary mission.`
      : `Your soul type came through with rare clarity — undivided in its mission and direction.`;
  }

  showScreen('result-screen');
}

// ── Email Gate ────────────────────────────────────────────────────────────────
function submitEmailGate(event) {
  event.preventDefault();
  const name  = document.getElementById('gate-name-input').value.trim();
  const email = document.getElementById('gate-email-input').value.trim();

  window._capturedName  = name;
  window._capturedEmail = email;

  const CONVERTKIT_FORM_ID = 'CONVERTKIT_FORM_ID'; // Charles: replace with real form ID
  const CONVERTKIT_API_KEY = 'CONVERTKIT_API_KEY';  // Charles: replace with real API key
  if (CONVERTKIT_FORM_ID !== 'CONVERTKIT_FORM_ID') {
    fetch(`https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: CONVERTKIT_API_KEY, email, fields: { first_name: name, stage: 'pre-quiz' } })
    }).catch(() => {});
  }

  startQuiz();
}

// ── Event Listeners ───────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const beginBtn  = document.getElementById('begin-btn');
  const retakeBtn = document.getElementById('retake-btn');
  const printBtn  = document.getElementById('print-btn');

  if (beginBtn)  beginBtn.addEventListener('click', () => showScreen('email-gate-screen'));
  if (retakeBtn) retakeBtn.addEventListener('click', startQuiz); // new random seed each time
  if (printBtn)  printBtn.addEventListener('click', () => window.print());
});
