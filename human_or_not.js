const TOTAL_ROUNDS = 15;

const REAL_TEXTS = [
  {
    text: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity.",
    source: "A Tale of Two Cities, Charles Dickens, 1859",
    hint: "The balance, cadence, and controlled oppositions are classic Dickens rather than machine-made mood writing.",
    kicker: "Literary fiction",
    headline: "Victorian prose enters the bureau",
    year: "1859",
    deskNote: "Dense rhetoric with unmistakable authorial rhythm.",
  },
  {
    text: "The sky above the port was the color of television, tuned to a dead channel.",
    source: "Neuromancer, William Gibson, 1984",
    hint: "That metaphor is too strange, compact, and era-specific to feel like generic synthetic cyberpunk.",
    kicker: "Speculative fiction",
    headline: "A cyberpunk opening line is filed as evidence",
    year: "1984",
    deskNote: "Memorable imagery with no wasted explanation.",
  },
  {
    text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    source: "Pride and Prejudice, Jane Austen, 1813",
    hint: "Austen's social irony arrives immediately; AI imitations usually flatten that sharpness into pastiche.",
    kicker: "Regency fiction",
    headline: "Society prose examined by the copy desk",
    year: "1813",
    deskNote: "Human irony with social bite.",
  },
  {
    text: "Two roads diverged in a yellow wood, And sorry I could not travel both And be one traveler, long I stood.",
    source: "The Road Not Taken, Robert Frost, 1916",
    hint: "The line feels deceptively simple, but the meter and voice are exact rather than approximate.",
    kicker: "American poetry",
    headline: "Verse with a famous fork reaches the press room",
    year: "1916",
    deskNote: "Plain diction with precise musical structure.",
  },
  {
    text: "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights.",
    source: "Declaration of Independence, 1776",
    hint: "The legal-rhetorical cadence and historical phrasing come from a real political tradition, not contemporary model smoothing.",
    kicker: "Historical document",
    headline: "Founding language enters the record",
    year: "1776",
    deskNote: "Formal argument shaped for public memory.",
  },
  {
    text: "Ships at a distance have every man's wish on board. For some they come in with the tide. For others they sail forever on the horizon.",
    source: "Their Eyes Were Watching God, Zora Neale Hurston, 1937",
    hint: "The metaphor expands with unusual confidence and clarity rather than sounding statistically well-formed.",
    kicker: "American novel",
    headline: "Dreams and distance arrive from the archive",
    year: "1937",
    deskNote: "Voice and metaphor move with authority.",
  },
  {
    text: "I am invisible, understand, simply because people refuse to see me.",
    source: "Invisible Man, Ralph Ellison, 1952",
    hint: "The compression and conceptual force here feel authored, not blended from a style prompt.",
    kicker: "Modern literature",
    headline: "Identity statement logged by editors",
    year: "1952",
    deskNote: "Direct language carrying layered meaning.",
  },
  {
    text: "The results indicate that bilingual participants demonstrated enhanced inhibitory control relative to monolingual peers, after adjustment for age, education, and baseline processing speed.",
    source: "Cognitive psychology article, early 2000s journal prose",
    hint: "The sentence is dry, narrow, and domain-specific in the way real research summaries often are.",
    kicker: "Research writing",
    headline: "A real abstract sentence enters peer review",
    year: "2003",
    deskNote: "Specific controls and restrained claims.",
  },
];

const AI_TEXTS = [
  {
    text: "Elara paused before the manor as the fog arranged itself around the iron gate, and the evening seemed to hold its breath in a hush of ancestral memory. Every stone appeared to remember a sorrow, every darkened window a secret not yet spoken.",
    source: "AI-generated imitation of Victorian fiction",
    hint: "The mood is thick, but the details are interchangeable and too uniformly atmospheric.",
    kicker: "Literary imitation",
    headline: "A gothic paragraph raises suspicion at the desk",
    year: "Synthetic",
    deskNote: "Decorative texture without enough lived specificity.",
  },
  {
    text: "Findings from the present investigation suggest a meaningful and statistically significant relationship between abyssal migration regularity and nutrient-responsive orientation behavior in the observed fish population (p = 0.031). These outcomes may provide a useful framework for future ecological modeling.",
    source: "AI-generated imitation of research prose",
    hint: "It sounds plausible, but phrases like 'useful framework' and 'meaningful relationship' stay generic rather than concrete.",
    kicker: "Research imitation",
    headline: "A marine abstract lands under suspicion",
    year: "Synthetic",
    deskNote: "Polished academic shape, low informational density.",
  },
  {
    text: "At dusk the station gathered its shadows neatly, as though evening were a clerk with patient hands. The rails kept shining into the distance with the same practiced loneliness that all departures seem to borrow.",
    source: "AI-generated imitation of modernist poetry",
    hint: "The imagery is smooth and respectable, but it never surprises with a truly singular turn.",
    kicker: "Poetic imitation",
    headline: "A graceful station poem feels almost too graceful",
    year: "Synthetic",
    deskNote: "Strong mood, weaker idiosyncrasy.",
  },
  {
    text: "Liberty may be considered the proper atmosphere of civil society, for where men are permitted the full exercise of reason, they discover both the dignity of self-command and the common benefit of orderly cooperation.",
    source: "AI-generated imitation of Enlightenment prose",
    hint: "The sentence copies the register but lacks the argumentative teeth and historical friction of real philosophy.",
    kicker: "Philosophical imitation",
    headline: "An essay fragment comes in sounding too polished",
    year: "Synthetic",
    deskNote: "Correct syntax, softened conviction.",
  },
  {
    text: "The orchard behind the school held a silence so complete that Mara felt the afternoon had been preserved there for years, jarred and labeled by some invisible curator of memory.",
    source: "AI-generated literary prose",
    hint: "The metaphor is pretty but broadly applicable, a common sign of model-written literary language.",
    kicker: "Literary imitation",
    headline: "Schoolyard nostalgia is flagged by copy editors",
    year: "Synthetic",
    deskNote: "Stylish sentence, generic emotional architecture.",
  },
  {
    text: "Taken together, these observations highlight the potentially transformative role of early multisensory enrichment in promoting resilient developmental outcomes across diverse educational contexts.",
    source: "AI-generated academic summary",
    hint: "This is all conclusion and no evidence, the kind of polished vagueness AI leans on.",
    kicker: "Research imitation",
    headline: "A sweeping conclusion arrives with no hard edges",
    year: "Synthetic",
    deskNote: "Conclusion language outruns the data.",
  },
  {
    text: "He crossed the midnight avenue as though the city had drafted him into one more anonymous errand, its windows lit like patient equations waiting to be solved by someone less tired than he was.",
    source: "AI-generated noir-leaning prose",
    hint: "The similes are coherent but feel assembled from familiar literary ingredients.",
    kicker: "Urban fiction imitation",
    headline: "Noir atmosphere enters evidence in tidy condition",
    year: "Synthetic",
    deskNote: "Convincing surface texture, borrowed emotional grammar.",
  },
  {
    text: "History does not vanish when institutions decay; it becomes ambient, persisting in habits, rooms, and inherited reflexes that outlive the arguments once used to justify them.",
    source: "AI-generated essayistic prose",
    hint: "This sounds smart at first pass, but it remains aphoristic and frictionless rather than deeply argued.",
    kicker: "Essay imitation",
    headline: "A sharp-looking sentence proves slippery on inspection",
    year: "Synthetic",
    deskNote: "Insightful tone without a real argumentative trail.",
  },
];
const AI_IMAGES = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/AI_art_3_young_ladies_from_South_Asia_smiling_in_conversation.png/640px-AI_art_3_young_ladies_from_South_Asia_smiling_in_conversation.png",
    source: "Wikimedia Commons image openly labeled AI-generated",
    hint: "The faces are smooth in the same way, the lighting is strangely consistent, and the image feels too evenly perfected.",
    kicker: "Image exhibit",
    headline: "Portrait scene enters the authenticity desk",
    year: "Synthetic",
    deskNote: "Symmetry and finish feel machine-composed.",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/AI_art_Black_cut_out_of_a_large_bird_with_outstretched_wings.png/640px-AI_art_Black_cut_out_of_a_large_bird_with_outstretched_wings.png",
    source: "Wikimedia Commons image openly labeled AI-generated",
    hint: "The silhouette is clean, but the compositional crispness feels algorithmic rather than photographic or hand-made.",
    kicker: "Image exhibit",
    headline: "An avian silhouette arrives under suspicion",
    year: "Synthetic",
    deskNote: "Too frictionless at the edges.",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/AI_art_Fresco_of_3_young_ladies_from_south-west_Asia.png/640px-AI_art_Fresco_of_3_young_ladies_from_south-west_Asia.png",
    source: "Wikimedia Commons image openly labeled AI-generated",
    hint: "It imitates age and medium, but facial rendering and texture repetition give the game away.",
    kicker: "Image exhibit",
    headline: "A faux fresco is clipped for review",
    year: "Synthetic",
    deskNote: "Historical styling without real material wear.",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/AI_art_portrait_of_a_bearded_man.png/640px-AI_art_portrait_of_a_bearded_man.png",
    source: "Wikimedia Commons image openly labeled AI-generated",
    hint: "Hair, pores, and brush texture all land in a suspiciously unified synthetic register.",
    kicker: "Image exhibit",
    headline: "A painted-looking portrait lands on the copy spike",
    year: "Synthetic",
    deskNote: "Texture reads like simulation, not medium.",
  },
];

const REAL_IMAGES = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Camponotus_flavomarginatus_ant.jpg/640px-Camponotus_flavomarginatus_ant.jpg",
    source: "Wikimedia Commons macro photograph of an ant",
    hint: "The depth of field, tiny imperfections, and specific natural detail feel captured rather than invented.",
    kicker: "Image exhibit",
    headline: "Macro insect photograph is logged as evidence",
    year: "Archive",
    deskNote: "Natural complexity resists synthetic neatness.",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Biologia_Centrali-Americana_Insecta_Lepidoptera-Rhopalocera_pl100.jpg/640px-Biologia_Centrali-Americana_Insecta_Lepidoptera-Rhopalocera_pl100.jpg",
    source: "Public-domain nineteenth-century scientific illustration",
    hint: "The plate shows human drafting, print artifacts, and material age rather than generated texture.",
    kicker: "Image exhibit",
    headline: "Antique natural-history plate enters circulation",
    year: "Archive",
    deskNote: "Human illustration leaves real process marks.",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png",
    source: "Wikimedia Commons human-made demonstration graphic",
    hint: "It is digitally made, but still clearly designed by people rather than generated by AI.",
    kicker: "Image exhibit",
    headline: "Design graphic is examined for category error",
    year: "Archive",
    deskNote: "Human-made does not have to mean photographic.",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Flower_by_Albrecht_D%C3%BCrer.jpg/640px-Blue_Flower_by_Albrecht_D%C3%BCrer.jpg",
    source: "Public-domain historical artwork by Albrecht Durer",
    hint: "The imperfections of the medium and authored choices feel grounded in real craft.",
    kicker: "Image exhibit",
    headline: "Historical flower study reaches the art desk",
    year: "Archive",
    deskNote: "Material process remains visible.",
  },
];

const state = {
  rounds: [],
  currentRound: 0,
  score: 0,
  correctCount: 0,
  waitingForNext: false,
  history: [],
};

const elements = {
  editionLine: document.getElementById("edition-line"),
  todayLine: document.getElementById("today-line"),
  volumeLine: document.getElementById("volume-line"),
  exhibitCountLine: document.getElementById("exhibit-count-line"),
  startBtn: document.getElementById("start-btn"),
  restartBtn: document.getElementById("restart-btn"),
  articleShell: document.getElementById("article-shell"),
  feedbackZone: document.getElementById("feedback-zone"),
  roundNum: document.getElementById("round-num"),
  scoreVal: document.getElementById("score-val"),
  correctVal: document.getElementById("correct-val"),
  progressBar: document.getElementById("progress-bar"),
  finalScoreLine: document.getElementById("final-score-line"),
  rankHeadline: document.getElementById("rank-headline"),
  rankDeck: document.getElementById("rank-deck"),
  resultsGrid: document.getElementById("results-grid"),
  historyGrid: document.getElementById("history-grid"),
  editorNote: document.getElementById("editor-note"),
  liveRegion: document.getElementById("live-region"),
};

function shuffle(items) {
  const clone = [...items];
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function sample(items, count) {
  return shuffle(items).slice(0, count);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildRandomCounts(total, configs) {
  const counts = configs.map((config) => config.min);
  let remaining = total - counts.reduce((sum, count) => sum + count, 0);

  while (remaining > 0) {
    const availableIndexes = configs
      .map((config, index) => (counts[index] < config.max ? index : -1))
      .filter((index) => index !== -1);

    if (!availableIndexes.length) {
      break;
    }

    const chosenIndex =
      availableIndexes[randomInt(0, availableIndexes.length - 1)];
    counts[chosenIndex] += 1;
    remaining -= 1;
  }

  return counts;
}

function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((screen) => screen.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function makeDateline() {
  const now = new Date();
  elements.todayLine.textContent = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  elements.editionLine.textContent =
    now.getHours() < 12 ? "Morning Edition" : "Late Edition";
  elements.volumeLine.textContent = "Vol. 1, No. 15";
  elements.exhibitCountLine.textContent = TOTAL_ROUNDS + " exhibits";
}

function buildRounds() {
  const [realTextCount, aiTextCount, realImageCount, aiImageCount] =
    buildRandomCounts(TOTAL_ROUNDS, [
      { min: 2, max: REAL_TEXTS.length },
      { min: 2, max: AI_TEXTS.length },
      { min: 1, max: REAL_IMAGES.length },
      { min: 1, max: AI_IMAGES.length },
    ]);

  const rounds = [
    ...sample(REAL_TEXTS, realTextCount).map((item) => ({
      ...item,
      type: "text",
      isAI: false,
    })),
    ...sample(AI_TEXTS, aiTextCount).map((item) => ({
      ...item,
      type: "text",
      isAI: true,
    })),
    ...sample(REAL_IMAGES, realImageCount).map((item) => ({
      ...item,
      type: "image",
      isAI: false,
    })),
    ...sample(AI_IMAGES, aiImageCount).map((item) => ({
      ...item,
      type: "image",
      isAI: true,
    })),
  ];

  state.rounds = shuffle(rounds);
}

function announce(message) {
  elements.liveRegion.textContent = message;
}
function renderLoadingState() {
  elements.articleShell.innerHTML = `
    <div class="loading-panel">
      <div>
        <div class="spinner" aria-hidden="true"></div>
        <div class="loading-copy">Pulling exhibits from the archive</div>
      </div>
    </div>
  `;
  elements.feedbackZone.innerHTML = "";
}

function updateScoreboard() {
  elements.roundNum.textContent = String(state.currentRound + 1);
  elements.scoreVal.textContent = String(state.score);
  elements.correctVal.textContent = String(state.correctCount);
  elements.progressBar.style.width =
    (state.currentRound / TOTAL_ROUNDS) * 100 + "%";
}

function buildEvidenceHtml(round) {
  if (round.type === "text") {
    return `
      <div class="evidence-box">
        <div class="evidence-tag">Text exhibit</div>
        <div class="evidence-text">${round.text}</div>
      </div>
    `;
  }

  return `
    <div class="evidence-box">
      <div class="evidence-tag">Image exhibit</div>
      <div class="evidence-image-frame">
        <img
          class="actual-img"
          src="${round.url}"
          alt="Round evidence"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="img-placeholder">
          This archive image could not be loaded.<br />The round still counts, but you may want to refresh.
        </div>
      </div>
      <div class="caption">
        Exhibit ${state.currentRound + 1} of ${TOTAL_ROUNDS}. Public archive source under review.
      </div>
    </div>
  `;
}

function renderRound() {
  state.waitingForNext = false;
  const round = state.rounds[state.currentRound];
  updateScoreboard();
  elements.feedbackZone.innerHTML = "";

  elements.articleShell.innerHTML = `
    <div class="kicker">${round.kicker}</div>
    <div class="meta-bar">
      <div class="meta-item">
        <span class="meta-label">Desk</span>
        <span class="meta-value">Authenticity bureau</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Exhibit</span>
        <span class="meta-value">${state.currentRound + 1} / ${TOTAL_ROUNDS}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Era</span>
        <span class="meta-value">${round.year}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Lead</span>
        <span class="meta-value">${round.type === "text" ? "Language analysis" : "Visual analysis"}</span>
      </div>
    </div>
    <h2 class="article-headline">${round.headline}</h2>
    <div class="article-byline">
      <span>Filed by the editorial desk</span>
      <span>${round.deskNote}</span>
    </div>
    <p class="article-lede">
      Study the exhibit closely, then submit your newsroom verdict. Is this a human-made artifact from the archive, or a convincing modern fabrication?
    </p>
    ${buildEvidenceHtml(round)}
    <div class="verdict-panel" id="verdict-panel">
      <div class="verdict-label">File your verdict</div>
      <div class="verdict-grid">
        <button class="verdict-btn ai-btn" type="button" data-verdict="ai">
          <div class="verdict-heading">
            <span class="verdict-title">AI-generated</span>
            <span class="verdict-key">A</span>
          </div>
          <div class="verdict-copy">
            The piece feels machine-made: over-smoothed, imitative, or synthetically composed.
          </div>
        </button>
        <button class="verdict-btn real-btn" type="button" data-verdict="human">
          <div class="verdict-heading">
            <span class="verdict-title">Human-made</span>
            <span class="verdict-key">H</span>
          </div>
          <div class="verdict-copy">
            The exhibit reads as real authorship, real craft, or non-AI human production.
          </div>
        </button>
      </div>
    </div>
  `;

  document
    .querySelector('[data-verdict="ai"]')
    .addEventListener("click", () => submitVerdict(true));
  document
    .querySelector('[data-verdict="human"]')
    .addEventListener("click", () => submitVerdict(false));

  announce("Exhibit " + (state.currentRound + 1) + " loaded.");
}

function startGame() {
  buildRounds();
  state.currentRound = 0;
  state.score = 0;
  state.correctCount = 0;
  state.waitingForNext = false;
  state.history = [];
  showScreen("game-screen");
  renderLoadingState();

  window.setTimeout(() => {
    renderRound();
  }, 280);
}

function submitVerdict(guessedAI) {
  if (state.waitingForNext) {
    return;
  }

  state.waitingForNext = true;
  const round = state.rounds[state.currentRound];
  const correct = guessedAI === round.isAI;

  if (correct) {
    state.score += 10;
    state.correctCount += 1;
  }

  state.history.push({
    type: round.type,
    correct,
    isAI: round.isAI,
  });

  updateScoreboard();

  elements.feedbackZone.innerHTML = `
    <div class="feedback-box ${correct ? "correct" : "wrong"}">
      <div class="feedback-title">${correct ? "Verdict confirmed" : "Incorrect filing"}</div>
      <div class="feedback-source">
        This exhibit was <strong>${round.isAI ? "AI-generated" : "human-made"}</strong>.
        Source: ${round.source}
      </div>
      <div class="feedback-hint">${round.hint}</div>
      <div class="next-row">
        <button class="secondary-btn" id="next-btn" type="button">
          ${state.currentRound === TOTAL_ROUNDS - 1 ? "See final edition" : "Next exhibit"}
        </button>
      </div>
    </div>
  `;

  document.getElementById("next-btn").addEventListener("click", nextRound);
  announce(
    (correct ? "Correct. " : "Incorrect. ") +
      "This exhibit was " +
      (round.isAI ? "AI-generated." : "human-made."),
  );
}
function nextRound() {
  state.currentRound += 1;
  if (state.currentRound >= TOTAL_ROUNDS) {
    showResults();
    return;
  }
  renderRound();
}

function getRank() {
  const scoreBands = [
    {
      min: 0,
      max: 4,
      rank: "Copy Clerk",
      deck: "The fakes pushed you around this edition, but your instincts are starting to form.",
      note: "You reacted to surface polish more than deeper authorship cues. Slow down and look for specificity.",
    },
    {
      min: 5,
      max: 8,
      rank: "Beat Reporter",
      deck: "You spotted some tells, but the smoother fabrications still slipped through the city desk.",
      note: "You are strongest when evidence contains concrete details. Broadly atmospheric prose still needs more skepticism.",
    },
    {
      min: 9,
      max: 11,
      rank: "Staff Writer",
      deck: "A solid edition. You can read tone well and usually catch synthetic overreach.",
      note: "Your pattern recognition is good. The next leap is learning when polished confidence hides empty content.",
    },
    {
      min: 12,
      max: 14,
      rank: "Investigations Editor",
      deck: "Excellent work. You read past style and into structure, texture, and motive.",
      note: "You are clearly noticing where machine output becomes too tidy or too generically eloquent.",
    },
    {
      min: 15,
      max: 15,
      rank: "Publisher",
      deck: "Perfect edition. You filed every verdict like someone who knows exactly what human strangeness looks like.",
      note: "You caught every fabrication without confusing polish for authenticity. That's the whole game.",
    },
  ];

  return scoreBands.find(
    (band) => state.correctCount >= band.min && state.correctCount <= band.max,
  );
}

function buildResultStat(label, value, copy) {
  return `
    <div class="results-stat">
      <div class="results-stat-label">${label}</div>
      <div class="results-stat-value">${value}</div>
      <div class="results-stat-copy">${copy}</div>
    </div>
  `;
}

function showResults() {
  const rank = getRank();
  const textRounds = state.history.filter((item) => item.type === "text");
  const imageRounds = state.history.filter((item) => item.type === "image");
  const aiRounds = state.history.filter((item) => item.isAI);
  const humanRounds = state.history.filter((item) => !item.isAI);

  const correctText = textRounds.filter((item) => item.correct).length;
  const correctImage = imageRounds.filter((item) => item.correct).length;
  const correctAI = aiRounds.filter((item) => item.correct).length;
  const correctHuman = humanRounds.filter((item) => item.correct).length;

  elements.rankHeadline.textContent = rank.rank;
  elements.rankDeck.textContent = rank.deck;
  elements.finalScoreLine.textContent =
    state.correctCount +
    " / " +
    TOTAL_ROUNDS +
    " correct - " +
    state.score +
    " points";
  elements.editorNote.textContent = rank.note;

  elements.resultsGrid.innerHTML =
    buildResultStat(
      "Text exhibits",
      correctText + " / " + textRounds.length,
      "How well you read voice, rhetoric, and suspicious smoothness.",
    ) +
    buildResultStat(
      "Image exhibits",
      correctImage + " / " + imageRounds.length,
      "How well you judged composition, texture, and visual tells.",
    ) +
    buildResultStat(
      "AI spotted",
      correctAI + " / " + aiRounds.length,
      "Your ability to identify generated content when the artifact was synthetic.",
    ) +
    buildResultStat(
      "Humans cleared",
      correctHuman + " / " + humanRounds.length,
      "Your ability to avoid falsely accusing real human-made work.",
    );

  elements.historyGrid.innerHTML = state.history
    .map(
      (item, index) => `
        <div class="history-chip ${item.correct ? "correct" : "wrong"}">
          ${index + 1}. ${item.correct ? "Filed" : "Missed"}
        </div>
      `,
    )
    .join("");

  showScreen("results-screen");
  announce(
    "Final edition ready. You scored " +
      state.correctCount +
      " out of " +
      TOTAL_ROUNDS +
      ".",
  );
}

document.addEventListener("keydown", (event) => {
  if (!document.getElementById("game-screen").classList.contains("active")) {
    return;
  }

  if (!state.waitingForNext) {
    if (event.key === "a" || event.key === "A") {
      submitVerdict(true);
    }
    if (event.key === "h" || event.key === "H") {
      submitVerdict(false);
    }
  } else if (event.key === "Enter") {
    nextRound();
  }
});

elements.startBtn.addEventListener("click", startGame);
elements.restartBtn.addEventListener("click", startGame);

makeDateline();
