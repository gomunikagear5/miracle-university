// ── Soul Mission Quiz — Question Bank (EN) ──────────────────────────────────
// 45+ questions across 7 soul types + forced-choice + reverse-scored
// Used by quiz.js to randomly pull 15 per session

// Standard question format:
// { id, text, answers: [{ text, type, score }], reversed?: true }
// Forced-choice format:
// { id, type: 'forced_choice', text, optionA: { text, type, score }, optionB: { text, type, score } }

const questionBank = [

  // ─────────────────────────────────────────────
  // SERVER (S) — 6 questions
  // ─────────────────────────────────────────────
  {
    id: 'q_s_01',
    text: 'When a friend is struggling, your first instinct is to...',
    answers: [
      { text: 'Drop everything and simply be present with them', type: 'S', score: 3 },
      { text: 'Research the best solutions and send them resources', type: 'Sc', score: 2 },
      { text: 'Rally others to help as a team', type: 'K', score: 2 },
      { text: 'Share a story that might shift their perspective', type: 'Pr', score: 2 },
    ]
  },
  {
    id: 'q_s_02',
    text: 'What you care about most is...',
    answers: [
      { text: 'That the people you love feel truly cared for', type: 'S', score: 3 },
      { text: 'That the world is fairer and better protected', type: 'W', score: 2 },
      { text: 'That beauty and meaning exist in everyday life', type: 'A', score: 2 },
      { text: 'That people wake up to what is actually real', type: 'Pr', score: 2 },
    ]
  },
  {
    id: 'q_s_03',
    text: 'In a crisis, people instinctively come to you for...',
    answers: [
      { text: 'Emotional warmth and a steady, caring presence', type: 'S', score: 3 },
      { text: 'Creative ideas nobody has thought of yet', type: 'A', score: 2 },
      { text: 'Clear decisive leadership', type: 'K', score: 2 },
      { text: 'The hard truth that needs to be said', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_s_04',
    text: 'Others would describe you as...',
    answers: [
      { text: 'The most reliable, caring person they know', type: 'S', score: 3 },
      { text: 'A creative force who sees beauty everywhere', type: 'A', score: 2 },
      { text: 'Someone who fights for what is right', type: 'W', score: 2 },
      { text: 'A deep thinker with unusual insights', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_s_05',
    text: 'When you imagine your fully awakened life, it looks like...',
    answers: [
      { text: 'A warm, thriving community held together by your love', type: 'S', score: 3 },
      { text: 'A body of work the world could not have created without you', type: 'A', score: 3 },
      { text: 'A protected world where the right things prevail', type: 'W', score: 3 },
      { text: 'Millions of people transformed by what you shared', type: 'P', score: 3 },
    ]
  },
  {
    id: 'q_s_06',
    text: 'The thing that drains you most is...',
    answers: [
      { text: 'Feeling like a burden or being unable to help', type: 'S', score: 3 },
      { text: 'Rigid, soulless systems that crush creativity', type: 'A', score: 2 },
      { text: 'Injustice that nobody seems willing to fight', type: 'W', score: 2 },
      { text: 'Shallow conversations that never go deep', type: 'Sc', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // ARTISAN (A) — 6 questions
  // ─────────────────────────────────────────────
  {
    id: 'q_a_01',
    text: 'When you walk into a room, you notice...',
    answers: [
      { text: 'What could be more beautiful or functional', type: 'A', score: 3 },
      { text: 'Who needs help or feels left out', type: 'S', score: 2 },
      { text: 'The power dynamics and what needs to change', type: 'W', score: 2 },
      { text: 'The emotional undercurrent beneath the surface', type: 'Pr', score: 2 },
    ]
  },
  {
    id: 'q_a_02',
    text: 'What matters most to you is...',
    answers: [
      { text: 'Creating something original that did not exist before you', type: 'A', score: 3 },
      { text: 'Truly understanding the hidden patterns in reality', type: 'Sc', score: 2 },
      { text: 'Leading people toward something greater than themselves', type: 'K', score: 2 },
      { text: 'Speaking truths that wake people up', type: 'P', score: 2 },
    ]
  },
  {
    id: 'q_a_03',
    text: 'When you are in flow, you are usually...',
    answers: [
      { text: 'Making something — building, designing, writing, crafting', type: 'A', score: 3 },
      { text: 'Deep in research or connecting ideas from different fields', type: 'Sc', score: 2 },
      { text: 'On stage, speaking, or performing to a room', type: 'P', score: 2 },
      { text: 'Strategizing and executing on a mission', type: 'W', score: 2 },
    ]
  },
  {
    id: 'q_a_04',
    text: 'Others would describe you as...',
    answers: [
      { text: 'Unusually creative and original — a maker of worlds', type: 'A', score: 3 },
      { text: 'Someone who genuinely cares about others above all', type: 'S', score: 2 },
      { text: 'A natural leader who draws people forward', type: 'K', score: 2 },
      { text: 'Someone who sees things most people miss entirely', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_a_05',
    text: 'Your greatest fear is...',
    answers: [
      { text: 'Living an ordinary life without creating anything meaningful', type: 'A', score: 3 },
      { text: 'Being unloved or truly invisible to others', type: 'S', score: 2 },
      { text: 'Being powerless to protect what matters most', type: 'W', score: 2 },
      { text: 'Being unseen or never heard', type: 'P', score: 2 },
    ]
  },
  {
    id: 'q_a_06',
    text: 'When you feel most alive, you are...',
    answers: [
      { text: 'In creative flow — making something entirely new', type: 'A', score: 3 },
      { text: 'On stage or speaking to move a crowd', type: 'P', score: 2 },
      { text: 'In motion, pushing a mission powerfully forward', type: 'W', score: 2 },
      { text: 'Holding space for someone\'s deep transformation', type: 'Pr', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // WARRIOR (W) — 6 questions
  // ─────────────────────────────────────────────
  {
    id: 'q_w_01',
    text: 'When you see injustice happening, you...',
    answers: [
      { text: 'Cannot look away — you feel compelled to act', type: 'W', score: 3 },
      { text: 'Research the issue deeply before responding', type: 'Sc', score: 2 },
      { text: 'Rally others around the cause', type: 'K', score: 2 },
      { text: 'Feel it deeply and share it publicly to awaken people', type: 'P', score: 2 },
    ]
  },
  {
    id: 'q_w_02',
    text: 'What matters most to you is...',
    answers: [
      { text: 'Standing up for what is sacred and not backing down', type: 'W', score: 3 },
      { text: 'Caring deeply for the people right in front of you', type: 'S', score: 2 },
      { text: 'Creating something the world has never seen', type: 'A', score: 2 },
      { text: 'Transmitting wisdom that changes how people see reality', type: 'Pr', score: 2 },
    ]
  },
  {
    id: 'q_w_03',
    text: 'In a group, you naturally...',
    answers: [
      { text: 'Push the mission forward with structure and discipline', type: 'W', score: 3 },
      { text: 'Notice who needs support and provide it quietly', type: 'S', score: 2 },
      { text: 'Propose a radically different approach', type: 'A', score: 2 },
      { text: 'Synthesize everyone\'s input into a clear understanding', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_w_04',
    text: 'Others would describe you as...',
    answers: [
      { text: 'Courageous, direct, and someone who does not back down', type: 'W', score: 3 },
      { text: 'Warm, reliable, and always there for them', type: 'S', score: 2 },
      { text: 'Magnetic — someone who lights up a room', type: 'P', score: 2 },
      { text: 'A natural leader who unites and inspires', type: 'K', score: 2 },
    ]
  },
  {
    id: 'q_w_05',
    text: 'Your deepest satisfaction comes from...',
    answers: [
      { text: 'Achieving a goal you fought hard and strategically for', type: 'W', score: 3 },
      { text: 'Knowing someone\'s life is better because of your care', type: 'S', score: 2 },
      { text: 'Finishing something you built from nothing', type: 'A', score: 2 },
      { text: 'Connecting deeply with another person\'s soul', type: 'Pr', score: 2 },
    ]
  },
  {
    id: 'q_w_06',
    text: 'When facing an obstacle, you...',
    answers: [
      { text: 'Create a strategy and attack it with focused discipline', type: 'W', score: 3 },
      { text: 'Look for a creative workaround others would not think of', type: 'A', score: 2 },
      { text: 'Research it until you fully understand every angle', type: 'Sc', score: 2 },
      { text: 'Gather allies and tackle it together', type: 'K', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // PERFORMER (P) — 6 questions
  // ─────────────────────────────────────────────
  {
    id: 'q_p_01',
    text: 'When you have something important to say, you...',
    answers: [
      { text: 'Find a way to say it to as many people as possible', type: 'P', score: 3 },
      { text: 'Write it down and craft it perfectly first', type: 'A', score: 2 },
      { text: 'Share it one-on-one with people who need it most', type: 'Pr', score: 2 },
      { text: 'Research whether it is actually true before sharing', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_p_02',
    text: 'What matters most to you is...',
    answers: [
      { text: 'Being seen, heard, and genuinely connecting with an audience', type: 'P', score: 3 },
      { text: 'Protecting the sacred things worth fighting for', type: 'W', score: 2 },
      { text: 'Building systems that will outlast your lifetime', type: 'K', score: 2 },
      { text: 'Deeply serving the people right in front of you', type: 'S', score: 2 },
    ]
  },
  {
    id: 'q_p_03',
    text: 'When you enter a room, you feel compelled to...',
    answers: [
      { text: 'Shift the energy — lighten it, enliven it, electrify it', type: 'P', score: 3 },
      { text: 'Identify who needs support and quietly offer it', type: 'S', score: 2 },
      { text: 'Observe the dynamics before deciding how to engage', type: 'Sc', score: 2 },
      { text: 'Assert structure and clarity when it is needed', type: 'W', score: 2 },
    ]
  },
  {
    id: 'q_p_04',
    text: 'Others would describe you as...',
    answers: [
      { text: 'Magnetic, expressive, impossible to ignore when you speak', type: 'P', score: 3 },
      { text: 'A deep thinker who sees through surface appearances', type: 'Sc', score: 2 },
      { text: 'Someone who holds space in a uniquely healing way', type: 'Pr', score: 2 },
      { text: 'The person who quietly holds everything together', type: 'S', score: 2 },
    ]
  },
  {
    id: 'q_p_05',
    text: 'Your greatest fear is...',
    answers: [
      { text: 'Being permanently unseen, unheard, or invisible', type: 'P', score: 3 },
      { text: 'Never creating anything that outlasts you', type: 'A', score: 2 },
      { text: 'Being powerless when it matters most', type: 'W', score: 2 },
      { text: 'Failing the people who depend on your care', type: 'S', score: 2 },
    ]
  },
  {
    id: 'q_p_06',
    text: 'When you feel most alive, you are...',
    answers: [
      { text: 'On stage, speaking, or performing to a moved audience', type: 'P', score: 3 },
      { text: 'Deep in the process of creating something entirely new', type: 'A', score: 2 },
      { text: 'In motion, pushing a bold mission forward', type: 'W', score: 2 },
      { text: 'In a deeply intimate conversation that changes someone', type: 'Pr', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // SCHOLAR (Sc) — 6 questions
  // ─────────────────────────────────────────────
  {
    id: 'q_sc_01',
    text: 'Your relationship with knowledge is...',
    answers: [
      { text: 'Synthesizing — you collect everything and find the hidden pattern', type: 'Sc', score: 3 },
      { text: 'Practical — you learn what helps people directly', type: 'S', score: 2 },
      { text: 'Aesthetic — you learn what inspires new creation', type: 'A', score: 2 },
      { text: 'Strategic — you learn what creates decisive advantage', type: 'W', score: 2 },
    ]
  },
  {
    id: 'q_sc_02',
    text: 'What matters most to you is...',
    answers: [
      { text: 'Understanding the deep truth beneath the surface of reality', type: 'Sc', score: 3 },
      { text: 'Creating work that is original and enduring', type: 'A', score: 2 },
      { text: 'Transmitting a vision that transforms how people see', type: 'Pr', score: 2 },
      { text: 'Leading people toward something they could not reach alone', type: 'K', score: 2 },
    ]
  },
  {
    id: 'q_sc_03',
    text: 'In a group, you naturally...',
    answers: [
      { text: 'Offer the unexpected analysis that reframes everything', type: 'Sc', score: 3 },
      { text: 'Notice who needs support and quietly provide it', type: 'S', score: 2 },
      { text: 'Step up to lead when there is no clear direction', type: 'K', score: 2 },
      { text: 'Energize the room with your presence and expression', type: 'P', score: 2 },
    ]
  },
  {
    id: 'q_sc_04',
    text: 'Others would describe you as...',
    answers: [
      { text: 'Unusually wise — someone who sees what everyone else misses', type: 'Sc', score: 3 },
      { text: 'A creative force who makes things no one else could', type: 'A', score: 2 },
      { text: 'Courageous and uncompromising when it matters', type: 'W', score: 2 },
      { text: 'A natural unifier who brings people together', type: 'K', score: 2 },
    ]
  },
  {
    id: 'q_sc_05',
    text: 'The thing that drains you most is...',
    answers: [
      { text: 'Shallow conversation that never goes beneath the surface', type: 'Sc', score: 3 },
      { text: 'Rigid, uncreative, soul-crushing processes', type: 'A', score: 2 },
      { text: 'Injustice going unchallenged while people do nothing', type: 'W', score: 2 },
      { text: 'Feeling unhelpful or like a burden to others', type: 'S', score: 2 },
    ]
  },
  {
    id: 'q_sc_06',
    text: 'When you imagine your fully awakened life, it looks like...',
    answers: [
      { text: 'A unified theory — a body of wisdom that bridges everything', type: 'Sc', score: 3 },
      { text: 'A thriving community you hold together with love', type: 'S', score: 2 },
      { text: 'A movement where people discovered their real power', type: 'K', score: 2 },
      { text: 'Millions of people awakened by what you expressed', type: 'P', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // PRIEST (Pr) — 6 questions
  // ─────────────────────────────────────────────
  {
    id: 'q_pr_01',
    text: 'When someone is lost or struggling, you naturally...',
    answers: [
      { text: 'Hold space and gently guide until clarity emerges naturally', type: 'Pr', score: 3 },
      { text: 'Take charge and create structure to get things moving', type: 'K', score: 2 },
      { text: 'Offer warmth and practical hands-on care', type: 'S', score: 2 },
      { text: 'Share insight or a reframe to shift their perspective', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_pr_02',
    text: 'What matters most to you is...',
    answers: [
      { text: 'Seeing the potential in others that they cannot yet see themselves', type: 'Pr', score: 3 },
      { text: 'Building things that genuinely improve people\'s lives', type: 'S', score: 2 },
      { text: 'Creating systems and structures that protect what matters', type: 'W', score: 2 },
      { text: 'Understanding the hidden patterns that explain everything', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_pr_03',
    text: 'In a group, you naturally...',
    answers: [
      { text: 'Hold the highest vision for every person in the room', type: 'Pr', score: 3 },
      { text: 'Create something unexpected and original', type: 'A', score: 2 },
      { text: 'Take clear decisive action when no one else will', type: 'W', score: 2 },
      { text: 'Electrify the energy and get people moving', type: 'P', score: 2 },
    ]
  },
  {
    id: 'q_pr_04',
    text: 'Others would describe you as...',
    answers: [
      { text: 'Someone who makes you feel truly seen and believed in', type: 'Pr', score: 3 },
      { text: 'Endlessly curious and unexpectedly insightful', type: 'Sc', score: 2 },
      { text: 'Brave and willing to do what others will not', type: 'W', score: 2 },
      { text: 'Magnetic and expressive — you light up any room', type: 'P', score: 2 },
    ]
  },
  {
    id: 'q_pr_05',
    text: 'Your deepest satisfaction comes from...',
    answers: [
      { text: 'Connecting soul-to-soul with another person in a way that transforms them', type: 'Pr', score: 3 },
      { text: 'Achieving a goal you fought hard and strategically for', type: 'W', score: 2 },
      { text: 'Creating a finished work that did not exist before you', type: 'A', score: 2 },
      { text: 'Knowing someone\'s life improved because of your care', type: 'S', score: 2 },
    ]
  },
  {
    id: 'q_pr_06',
    text: 'When you imagine your fully awakened life, it looks like...',
    answers: [
      { text: 'Souls awakened and guided toward their highest potential', type: 'Pr', score: 3 },
      { text: 'A library of wisdom that future generations still draw from', type: 'Sc', score: 2 },
      { text: 'A creative body of work that outlasts your lifetime', type: 'A', score: 2 },
      { text: 'A movement you unified and led into a new era', type: 'K', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // KING (K) — 6 questions
  // ─────────────────────────────────────────────
  {
    id: 'q_k_01',
    text: 'When a group is stuck or leaderless, you...',
    answers: [
      { text: 'Step up, create clarity, and get things moving', type: 'K', score: 3 },
      { text: 'Support whoever naturally steps up to lead', type: 'S', score: 2 },
      { text: 'Propose a creative new approach nobody considered', type: 'A', score: 2 },
      { text: 'Hold space until the right direction emerges naturally', type: 'Pr', score: 2 },
    ]
  },
  {
    id: 'q_k_02',
    text: 'What matters most to you is...',
    answers: [
      { text: 'Gathering people toward a vision larger than any individual', type: 'K', score: 3 },
      { text: 'Creating things of original beauty and meaning', type: 'A', score: 2 },
      { text: 'Caring for the people closest to you with full devotion', type: 'S', score: 2 },
      { text: 'Defending and protecting what is sacred and true', type: 'W', score: 2 },
    ]
  },
  {
    id: 'q_k_03',
    text: 'In a group, you naturally...',
    answers: [
      { text: 'Align everyone toward a shared purpose and hold them to it', type: 'K', score: 3 },
      { text: 'Energize the room through your expression and presence', type: 'P', score: 2 },
      { text: 'Offer the unexpected insight that reframes the situation', type: 'Sc', score: 2 },
      { text: 'Protect whoever needs protecting and confront what is wrong', type: 'W', score: 2 },
    ]
  },
  {
    id: 'q_k_04',
    text: 'Others would describe you as...',
    answers: [
      { text: 'A natural leader — someone who can unite very different people', type: 'K', score: 3 },
      { text: 'Unusually perceptive — you see patterns others do not', type: 'Sc', score: 2 },
      { text: 'A healer — someone who makes people feel truly understood', type: 'Pr', score: 2 },
      { text: 'The most reliable and caring person in the room', type: 'S', score: 2 },
    ]
  },
  {
    id: 'q_k_05',
    text: 'Your deepest satisfaction comes from...',
    answers: [
      { text: 'Watching a group of people you gathered achieve what they could not alone', type: 'K', score: 3 },
      { text: 'Completing a creative work you built from nothing', type: 'A', score: 2 },
      { text: 'Knowing someone\'s life is genuinely better because of you', type: 'S', score: 2 },
      { text: 'Sharing an insight that visibly changes how someone thinks', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_k_06',
    text: 'When you imagine your fully awakened life, it looks like...',
    answers: [
      { text: 'A unified movement — people gathered into their collective power', type: 'K', score: 3 },
      { text: 'A warm, close-knit community held together by love', type: 'S', score: 2 },
      { text: 'Millions of people awakened through your voice', type: 'P', score: 2 },
      { text: 'A body of wisdom that bridges disciplines and generations', type: 'Sc', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // SERVER (S) — 7 additional questions (q_s_07–q_s_13)
  // ─────────────────────────────────────────────
  {
    id: 'q_s_07',
    text: 'Growing up, you were the kid who...',
    answers: [
      { text: 'Made sure nobody was left out or sitting alone', type: 'S', score: 3 },
      { text: 'Was always building, inventing, or crafting something', type: 'A', score: 2 },
      { text: 'Stood up to bullies and defended others', type: 'W', score: 2 },
      { text: 'Spent hours asking "why" about everything', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_s_08',
    text: 'At work, you feel most alive when...',
    answers: [
      { text: 'Someone\'s burden is lighter because of your help', type: 'S', score: 3 },
      { text: 'You complete a creative project from nothing', type: 'A', score: 2 },
      { text: 'You hit a tough target through discipline and focus', type: 'W', score: 2 },
      { text: 'You crack a problem that had everyone stumped', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_s_09',
    text: 'In close relationships, your role tends to be...',
    answers: [
      { text: 'The one who shows up before anyone has to ask', type: 'S', score: 3 },
      { text: 'The one who brings fresh creative energy', type: 'A', score: 2 },
      { text: 'The one who handles the hard, practical stuff', type: 'W', score: 2 },
      { text: 'The one whose advice reframes everything', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_s_10',
    text: 'Your biggest recurring frustration is...',
    answers: [
      { text: 'Pouring yourself out for people who don\'t notice', type: 'S', score: 3 },
      { text: 'Having a creative vision but no space or time to execute it', type: 'A', score: 2 },
      { text: 'Watching avoidable problems fester while everyone debates', type: 'W', score: 2 },
      { text: 'Conversations that stay shallow when you can see much deeper', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_s_11',
    text: 'In your ideal world, people would...',
    answers: [
      { text: 'Always feel truly cared for and never invisible', type: 'S', score: 3 },
      { text: 'Be free to create whatever they are called to build', type: 'A', score: 2 },
      { text: 'Be protected from injustice and exploitation', type: 'W', score: 2 },
      { text: 'Think critically and question what they have been told', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_s_12',
    text: 'The thing people most often thank you for is...',
    answers: [
      { text: 'Being there when nobody else was', type: 'S', score: 3 },
      { text: 'Making something beautiful or functional', type: 'A', score: 2 },
      { text: 'Fighting for them when they could not fight for themselves', type: 'W', score: 2 },
      { text: 'A perspective that changed how they thought', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_s_13',
    text: 'If friends described your love language, it would be...',
    answers: [
      { text: 'Acts of service — you show love by doing things for people', type: 'S', score: 3 },
      { text: 'Gifts and creation — you make things for the people you love', type: 'A', score: 2 },
      { text: 'Protection — you take on battles so others don\'t have to', type: 'W', score: 2 },
      { text: 'Words of truth — you love by saying the thing that transforms them', type: 'Pr', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // ARTISAN (A) — 7 additional questions (q_a_07–q_a_13)
  // ─────────────────────────────────────────────
  {
    id: 'q_a_07',
    text: 'Growing up, you were the kid who...',
    answers: [
      { text: 'Was always drawing, crafting, building, or redesigning things', type: 'A', score: 3 },
      { text: 'Took care of anyone who was struggling', type: 'S', score: 2 },
      { text: 'Was intensely curious about how everything worked', type: 'Sc', score: 2 },
      { text: 'Was the first to say "there has to be a better way"', type: 'W', score: 2 },
    ]
  },
  {
    id: 'q_a_08',
    text: 'At work, you feel most alive when...',
    answers: [
      { text: 'You are making something that has never existed before', type: 'A', score: 3 },
      { text: 'Your work directly helps someone solve a hard problem', type: 'S', score: 2 },
      { text: 'You execute a clear mission with focused energy', type: 'W', score: 2 },
      { text: 'You find the insight hiding in data everyone else ignored', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_a_09',
    text: 'In close relationships, your role tends to be...',
    answers: [
      { text: 'The one who creates original, thoughtful gestures', type: 'A', score: 3 },
      { text: 'The one who quietly anchors and nurtures everyone', type: 'S', score: 2 },
      { text: 'The one who speaks hard truths most people avoid', type: 'W', score: 2 },
      { text: 'The one who asks questions that cut through surface appearances', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_a_10',
    text: 'Your biggest recurring frustration is...',
    answers: [
      { text: 'Not having enough space, time, or freedom to create fully', type: 'A', score: 3 },
      { text: 'Watching people go through pain you could help with', type: 'S', score: 2 },
      { text: 'The most obvious solutions being ignored by people in power', type: 'W', score: 2 },
      { text: 'Conversations that stay shallow when you can see much deeper', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_a_11',
    text: 'In your ideal world, people would...',
    answers: [
      { text: 'Have access to beauty, design, and meaningful creative expression', type: 'A', score: 3 },
      { text: 'Never feel alone in their hardest moments', type: 'S', score: 2 },
      { text: 'Live in systems designed with humanity and justice', type: 'W', score: 2 },
      { text: 'Think in layers, never accepting the first obvious answer', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_a_12',
    text: 'When you cannot create, you feel...',
    answers: [
      { text: 'Restless, like something essential is being suppressed', type: 'A', score: 3 },
      { text: 'Fine — you redirect that energy toward the people you love', type: 'S', score: 2 },
      { text: 'Frustrated — you find other ways to act and push forward', type: 'W', score: 2 },
      { text: 'Okay — you shift into research and observation mode', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_a_13',
    text: 'The type of legacy you most want to leave is...',
    answers: [
      { text: 'Work that endures — creation that outlasts your lifetime', type: 'A', score: 3 },
      { text: 'People whose lives were genuinely better for knowing you', type: 'S', score: 2 },
      { text: 'Systems and protections that exist because you fought', type: 'W', score: 2 },
      { text: 'Frameworks and ideas that shape how people think', type: 'Sc', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // WARRIOR (W) — 7 additional questions (q_w_07–q_w_13)
  // ─────────────────────────────────────────────
  {
    id: 'q_w_07',
    text: 'Growing up, you were the kid who...',
    answers: [
      { text: 'Stood up to bullies without thinking twice', type: 'W', score: 3 },
      { text: 'Was the peacemaker who kept everyone together', type: 'S', score: 2 },
      { text: 'Was always sketching, building, or inventing', type: 'A', score: 2 },
      { text: 'Needed to understand how rules and systems actually worked', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_w_08',
    text: 'At work, you feel most alive when...',
    answers: [
      { text: 'You complete a hard challenge that required real discipline', type: 'W', score: 3 },
      { text: 'Your work directly improves someone\'s daily life', type: 'S', score: 2 },
      { text: 'You ship something original that did not exist before', type: 'A', score: 2 },
      { text: 'You crack a complex problem through deep analysis', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_w_09',
    text: 'In close relationships, your role tends to be...',
    answers: [
      { text: 'The protector — handling hard situations so others don\'t have to', type: 'W', score: 3 },
      { text: 'The caregiver — quietly making sure everyone is nurtured', type: 'S', score: 2 },
      { text: 'The creative spirit — bringing originality and surprise', type: 'A', score: 2 },
      { text: 'The truth-teller — offering clear-eyed, honest perspective', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_w_10',
    text: 'Your biggest recurring frustration is...',
    answers: [
      { text: 'Clear problems going unsolved because everyone is too passive', type: 'W', score: 3 },
      { text: 'Feeling like you can never do enough for the people you love', type: 'S', score: 2 },
      { text: 'Having creative vision but not enough freedom to execute it', type: 'A', score: 2 },
      { text: 'People who refuse to engage critically with important ideas', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_w_11',
    text: 'In your ideal world, people would...',
    answers: [
      { text: 'Be protected from exploitation, injustice, and systemic harm', type: 'W', score: 3 },
      { text: 'Feel genuinely seen and cared for', type: 'S', score: 2 },
      { text: 'Have the freedom to create what they are called to build', type: 'A', score: 2 },
      { text: 'Question everything and think for themselves', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_w_12',
    text: 'The emotion that most drives you is...',
    answers: [
      { text: 'Righteous determination — a fire to make things right', type: 'W', score: 3 },
      { text: 'Love — a deep need to take care of people', type: 'S', score: 2 },
      { text: 'Aesthetic longing — the ache for beauty and original expression', type: 'A', score: 2 },
      { text: 'Curiosity — the drive to understand what is really true', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_w_13',
    text: 'When the stakes are highest, you...',
    answers: [
      { text: 'Sharpen your focus and move with calm, disciplined precision', type: 'W', score: 3 },
      { text: 'Check on everyone around you before thinking of yourself', type: 'S', score: 2 },
      { text: 'Find the most creative solution possible under pressure', type: 'A', score: 2 },
      { text: 'Need to fully understand the situation before acting', type: 'Sc', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // PERFORMER (P) — 7 additional questions (q_p_07–q_p_13)
  // ─────────────────────────────────────────────
  {
    id: 'q_p_07',
    text: 'Growing up, you were the kid who...',
    answers: [
      { text: 'Was always performing — telling stories, making everyone laugh', type: 'P', score: 3 },
      { text: 'Was the one everyone came to when they were sad', type: 'S', score: 2 },
      { text: 'Was constantly making things — art, performances, inventions', type: 'A', score: 2 },
      { text: 'Asked questions adults found uncomfortable or difficult', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_p_08',
    text: 'At work, you feel most alive when...',
    answers: [
      { text: 'You are communicating something in front of people and it lands', type: 'P', score: 3 },
      { text: 'Your work directly helps someone through a hard time', type: 'S', score: 2 },
      { text: 'You build something original from start to finish', type: 'A', score: 2 },
      { text: 'You present an analysis that reframes how everyone sees the problem', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_p_09',
    text: 'In close relationships, your role tends to be...',
    answers: [
      { text: 'The one who brings energy, humor, and light to every room', type: 'P', score: 3 },
      { text: 'The steady, nurturing presence everyone leans on', type: 'S', score: 2 },
      { text: 'The one who protects and fights for the people you love', type: 'W', score: 2 },
      { text: 'The guide who sees people\'s potential before they do', type: 'Pr', score: 2 },
    ]
  },
  {
    id: 'q_p_10',
    text: 'Your biggest recurring frustration is...',
    answers: [
      { text: 'Being dismissed, unseen, or talked over when you have something real to say', type: 'P', score: 3 },
      { text: 'Feeling helpless when someone you love is in pain', type: 'S', score: 2 },
      { text: 'Watching injustice unfold with no one willing to act', type: 'W', score: 2 },
      { text: 'Conversations that never get past the surface level', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_p_11',
    text: 'In your ideal world, people would...',
    answers: [
      { text: 'Be moved, delighted, and awakened by authentic human expression', type: 'P', score: 3 },
      { text: 'Always feel genuinely loved and cared for', type: 'S', score: 2 },
      { text: 'Live in justice and freedom', type: 'W', score: 2 },
      { text: 'Seek truth and depth rather than distraction', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_p_12',
    text: 'The moment you feel most powerful is...',
    answers: [
      { text: 'When your words visibly change something in the room', type: 'P', score: 3 },
      { text: 'When someone\'s face changes because of something you did for them', type: 'S', score: 2 },
      { text: 'When you overcome a challenge you trained hard for', type: 'W', score: 2 },
      { text: 'When an insight you worked hard to find finally clicks into place', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_p_13',
    text: 'The feedback that means the most to you is...',
    answers: [
      { text: '"You changed how I see this" or "You moved me"', type: 'P', score: 3 },
      { text: '"You always show up — I don\'t know what I\'d do without you"', type: 'S', score: 2 },
      { text: '"You fought for something nobody else would"', type: 'W', score: 2 },
      { text: '"That was the most insightful thing I\'ve ever heard"', type: 'Sc', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // SCHOLAR (Sc) — 7 additional questions (q_sc_07–q_sc_13)
  // ─────────────────────────────────────────────
  {
    id: 'q_sc_07',
    text: 'Growing up, you were the kid who...',
    answers: [
      { text: 'Spent hours reading, researching, and figuring out how things worked', type: 'Sc', score: 3 },
      { text: 'Was the caretaker, always watching out for others', type: 'S', score: 2 },
      { text: 'Was always building or creating something original', type: 'A', score: 2 },
      { text: 'Pushed back on rules that didn\'t make logical sense', type: 'W', score: 2 },
    ]
  },
  {
    id: 'q_sc_08',
    text: 'At work, you feel most alive when...',
    answers: [
      { text: 'You crack a complex problem nobody else could solve', type: 'Sc', score: 3 },
      { text: 'Your work directly and tangibly improves someone\'s life', type: 'S', score: 2 },
      { text: 'You build something original from start to finish', type: 'A', score: 2 },
      { text: 'You complete a difficult, disciplined mission', type: 'W', score: 2 },
    ]
  },
  {
    id: 'q_sc_09',
    text: 'In close relationships, your role tends to be...',
    answers: [
      { text: 'The one who offers insight and perspective that changes everything', type: 'Sc', score: 3 },
      { text: 'The steady, reliable presence everyone counts on', type: 'S', score: 2 },
      { text: 'The creative force who surprises and delights', type: 'A', score: 2 },
      { text: 'The guide who holds the highest vision for everyone', type: 'Pr', score: 2 },
    ]
  },
  {
    id: 'q_sc_10',
    text: 'Your biggest recurring frustration is...',
    answers: [
      { text: 'People who form strong opinions without understanding the evidence', type: 'Sc', score: 3 },
      { text: 'Being unable to help the people you love as much as you want to', type: 'S', score: 2 },
      { text: 'Ideas that stay theoretical and never get executed', type: 'A', score: 2 },
      { text: 'Injustice that persists because no one will act decisively', type: 'W', score: 2 },
    ]
  },
  {
    id: 'q_sc_11',
    text: 'In your ideal world, people would...',
    answers: [
      { text: 'Seek deep understanding before forming opinions or acting', type: 'Sc', score: 3 },
      { text: 'Feel genuinely cared for by the people around them', type: 'S', score: 2 },
      { text: 'Have the freedom to create and express what they are called to', type: 'A', score: 2 },
      { text: 'Take courageous action when action is required', type: 'W', score: 2 },
    ]
  },
  {
    id: 'q_sc_12',
    text: 'What makes you feel most understood is when someone...',
    answers: [
      { text: 'Genuinely engages with your ideas and builds on them', type: 'Sc', score: 3 },
      { text: 'Simply shows up for you without needing an explanation', type: 'S', score: 2 },
      { text: 'Appreciates something you created from nothing', type: 'A', score: 2 },
      { text: 'Matches your conviction and stands alongside you', type: 'W', score: 2 },
    ]
  },
  {
    id: 'q_sc_13',
    text: 'When you have an important idea to share, you usually...',
    answers: [
      { text: 'Research it, stress-test it, and present it fully formed', type: 'Sc', score: 3 },
      { text: 'Share it privately with the person who would benefit most', type: 'Pr', score: 2 },
      { text: 'Craft it into something beautiful before putting it out', type: 'A', score: 2 },
      { text: 'Say it directly and boldly to whoever needs to hear it', type: 'P', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // PRIEST (Pr) — 7 additional questions (q_pr_07–q_pr_13)
  // ─────────────────────────────────────────────
  {
    id: 'q_pr_07',
    text: 'Growing up, you were the kid who...',
    answers: [
      { text: 'Always seemed to know what others were feeling without being told', type: 'Pr', score: 3 },
      { text: 'Made sure nobody was excluded or hurting', type: 'S', score: 2 },
      { text: 'Was the storyteller or performer who captivated everyone', type: 'P', score: 2 },
      { text: 'Was quietly observing, wondering, and analyzing', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_pr_08',
    text: 'At work, you feel most alive when...',
    answers: [
      { text: 'You hold space for someone\'s breakthrough and witness the shift', type: 'Pr', score: 3 },
      { text: 'You help someone through a hard practical problem', type: 'S', score: 2 },
      { text: 'You speak or perform to an audience who really receives it', type: 'P', score: 2 },
      { text: 'You synthesize information into an insight that changes the room', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_pr_09',
    text: 'In close relationships, your role tends to be...',
    answers: [
      { text: 'The one who sees people more deeply than they see themselves', type: 'Pr', score: 3 },
      { text: 'The caretaker who anticipates and provides', type: 'S', score: 2 },
      { text: 'The one who brings energy and delight', type: 'P', score: 2 },
      { text: 'The one who challenges people to think more critically', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_pr_10',
    text: 'Your biggest recurring frustration is...',
    answers: [
      { text: 'People who mistake your openness for weakness', type: 'Pr', score: 3 },
      { text: 'Giving more than you have in reserve and feeling depleted', type: 'S', score: 2 },
      { text: 'Being dismissed before you\'ve had the chance to speak', type: 'P', score: 2 },
      { text: 'People who accept surface explanations without going deeper', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_pr_11',
    text: 'In your ideal world, people would...',
    answers: [
      { text: 'Know they are unconditionally seen, loved, and believed in', type: 'Pr', score: 3 },
      { text: 'Feel genuinely cared for by their communities', type: 'S', score: 2 },
      { text: 'Feel free to express their fullest, most authentic selves', type: 'P', score: 2 },
      { text: 'Seek truth beneath the surface of things', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_pr_12',
    text: 'The transformation you most want to create in the world is...',
    answers: [
      { text: 'People awakened to their own highest potential', type: 'Pr', score: 3 },
      { text: 'People who feel deeply loved and never alone', type: 'S', score: 2 },
      { text: 'People moved and permanently changed by powerful expression', type: 'P', score: 2 },
      { text: 'People who think critically and see the world more clearly', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_pr_13',
    text: 'Others often come to you because...',
    answers: [
      { text: 'They feel genuinely seen in your presence', type: 'Pr', score: 3 },
      { text: 'They know you will show up and do whatever is needed', type: 'S', score: 2 },
      { text: 'Your energy lifts the mood of any room', type: 'P', score: 2 },
      { text: 'Your perspective reframes the situation in a new light', type: 'Sc', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // KING (K) — 7 additional questions (q_k_07–q_k_13)
  // ─────────────────────────────────────────────
  {
    id: 'q_k_07',
    text: 'Growing up, you were the kid who...',
    answers: [
      { text: 'Naturally organized games, settled disputes, and led groups', type: 'K', score: 3 },
      { text: 'Was the caretaker who made sure nobody was left out', type: 'S', score: 2 },
      { text: 'Was always building, inventing, or creating something', type: 'A', score: 2 },
      { text: 'Was reading, asking questions, trying to understand everything', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_k_08',
    text: 'At work, you feel most alive when...',
    answers: [
      { text: 'You lead a team to achieve what none could achieve alone', type: 'K', score: 3 },
      { text: 'Your work directly improves the lives of specific people', type: 'S', score: 2 },
      { text: 'You complete a creative project that did not exist before you', type: 'A', score: 2 },
      { text: 'You solve a problem through careful analysis and insight', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_k_09',
    text: 'In close relationships, your role tends to be...',
    answers: [
      { text: 'The one who holds the vision and draws people forward', type: 'K', score: 3 },
      { text: 'The steady, nurturing anchor everyone relies on', type: 'S', score: 2 },
      { text: 'The creative spirit who brings originality and surprise', type: 'A', score: 2 },
      { text: 'The one who offers unexpected wisdom and perspective', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_k_10',
    text: 'Your biggest recurring frustration is...',
    answers: [
      { text: 'People with no sense of mission or strategic direction', type: 'K', score: 3 },
      { text: 'Feeling like no matter what you do, it is never enough for the people you love', type: 'S', score: 2 },
      { text: 'Not having space or resources to create freely', type: 'A', score: 2 },
      { text: 'People who refuse to engage with complex or important ideas', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_k_11',
    text: 'In your ideal world, people would...',
    answers: [
      { text: 'Align around shared purpose and lift each other toward something greater', type: 'K', score: 3 },
      { text: 'Feel genuinely loved and cared for by their communities', type: 'S', score: 2 },
      { text: 'Have freedom and resources to bring creative visions to life', type: 'A', score: 2 },
      { text: 'Think deeply and question received wisdom', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_k_12',
    text: 'The role you occupy most naturally in any group is...',
    answers: [
      { text: 'The one who holds the big picture and keeps everyone aligned', type: 'K', score: 3 },
      { text: 'The support system everyone knows they can count on', type: 'S', score: 2 },
      { text: 'The one who injects unexpected creative approaches', type: 'A', score: 2 },
      { text: 'The one who reframes the problem in a way nobody else saw', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_k_13',
    text: 'When you imagine your ideal life, at the center of it is...',
    answers: [
      { text: 'A movement, organization, or community you built and led', type: 'K', score: 3 },
      { text: 'The people you love, thriving because of your steady care', type: 'S', score: 2 },
      { text: 'A body of work that would not have existed without you', type: 'A', score: 2 },
      { text: 'A body of wisdom you gathered and bridged across time', type: 'Sc', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // REVERSE-SCORED questions (reversed: true)
  // The "obvious" answer for a type scores AGAINST it
  // ─────────────────────────────────────────────
  {
    id: 'q_rev_01',
    reversed: true,
    text: 'I often wish people would just leave me alone so I can focus.',
    answers: [
      // High Scholars often think they'd endorse this — but true Performers do NOT
      { text: 'Yes — I do my best thinking in solitude', type: 'Sc', score: 3 },
      { text: 'Sometimes, but I recharge quickly around the right people', type: 'P', score: 1 },
      { text: 'Rarely — I get more energy from working alongside others', type: 'S', score: 2 },
      { text: 'Almost never — other people fuel my best work', type: 'K', score: 2 },
    ]
  },
  {
    id: 'q_rev_02',
    reversed: true,
    text: 'I am most motivated when I have a clear authority figure to report to.',
    answers: [
      // Warriors and Kings tend to reject authority — this catches anyone trying to "play" W or K
      { text: 'Yes — clear hierarchy helps me perform best', type: 'S', score: 2 },
      { text: 'Only if I deeply respect their vision', type: 'Pr', score: 2 },
      { text: 'Rarely — I prefer to set my own direction', type: 'W', score: 3 },
      { text: 'Never — I am the person others look to for direction', type: 'K', score: 3 },
    ]
  },
  {
    id: 'q_rev_03',
    reversed: true,
    text: 'I feel most useful when I am following someone else\'s plan precisely.',
    answers: [
      // Tests for genuine Server vs. someone gaming toward Server
      { text: 'Yes — I find peace in supporting a bigger vision', type: 'S', score: 3 },
      { text: 'Sometimes, if the plan is intelligent and the cause is right', type: 'W', score: 2 },
      { text: 'Rarely — I usually want to improve or redesign the plan', type: 'A', score: 2 },
      { text: 'Never — I need to understand why before I commit to anything', type: 'Sc', score: 2 },
    ]
  },
  {
    id: 'q_rev_04',
    reversed: true,
    text: 'I enjoy being the center of attention in large groups.',
    answers: [
      // Tests genuine Performers vs. introverted types gaming toward P
      { text: 'Yes — I feel fully alive when a room is paying attention to me', type: 'P', score: 3 },
      { text: 'Only if I have something real to say — not just for its own sake', type: 'Pr', score: 2 },
      { text: 'I prefer smaller, deeper conversations', type: 'Sc', score: 2 },
      { text: 'I prefer being the force behind others who shine', type: 'K', score: 2 },
    ]
  },
  {
    id: 'q_rev_05',
    reversed: true,
    text: 'I find it easy to set firm boundaries and tell people "no."',
    answers: [
      // Servers often find this hardest — catches gaming
      { text: 'Yes — my energy is non-negotiable and I protect it fiercely', type: 'W', score: 3 },
      { text: 'Usually, though I feel it when I let people down', type: 'K', score: 2 },
      { text: 'Sometimes, but I often feel guilty saying no to people I care about', type: 'S', score: 3 },
      { text: 'I say no to obligations that pull me away from my creative work', type: 'A', score: 2 },
    ]
  },

  // ─────────────────────────────────────────────
  // FORCED-CHOICE pairs (type: 'forced_choice')
  // ─────────────────────────────────────────────
  {
    id: 'q_fc_01',
    type: 'forced_choice',
    text: 'Which matters more to you?',
    optionA: { text: 'Being genuinely helpful to a person right in front of you', type: 'S', score: 2 },
    optionB: { text: 'Creating something original that could help millions', type: 'A', score: 2 },
  },
  {
    id: 'q_fc_02',
    type: 'forced_choice',
    text: 'If you had to choose, you would rather be known as...',
    optionA: { text: 'Someone who fought fearlessly for what was right', type: 'W', score: 2 },
    optionB: { text: 'Someone who awakened people to a deeper truth', type: 'Pr', score: 2 },
  },
  {
    id: 'q_fc_03',
    type: 'forced_choice',
    text: 'Which feels more like your true nature?',
    optionA: { text: 'The one who understands everything deeply before acting', type: 'Sc', score: 2 },
    optionB: { text: 'The one who inspires people through powerful expression', type: 'P', score: 2 },
  },
  {
    id: 'q_fc_04',
    type: 'forced_choice',
    text: 'When it comes to legacy, you care more about...',
    optionA: { text: 'Building something that still serves people long after you are gone', type: 'K', score: 2 },
    optionB: { text: 'The individual lives you transformed through deep care', type: 'S', score: 2 },
  },
  {
    id: 'q_fc_05',
    type: 'forced_choice',
    text: 'If you had to choose your primary gift, it would be...',
    optionA: { text: 'The ability to create things that move and transform people', type: 'A', score: 2 },
    optionB: { text: 'The ability to lead and align others toward a shared mission', type: 'K', score: 2 },
  },

];

// Export for use in quiz.js
if (typeof module !== 'undefined') {
  module.exports = { questionBank };
}
