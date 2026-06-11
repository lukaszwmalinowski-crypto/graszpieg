const app = document.querySelector("#app");
const screenTitle = document.querySelector("#screenTitle");
const backButton = document.querySelector("#backButton");
const fullscreenButton = document.querySelector("#fullscreenButton");
const toast = document.querySelector("#toast");

const QUESTIONS = [
  "Co można tutaj usłyszeć?",
  "Czy często tu bywasz?",
  "Co można tutaj kupić?",
  "Czy to miejsce jest głośne?",
  "Kto zwykle tu pracuje?",
  "Jak byś opisał to miejsce jednym słowem?",
  "Co może pójść tutaj nie tak?",
  "Co zabrałbyś ze sobą do tego miejsca?",
  "Czy byłbyś tu rano, po południu czy wieczorem?",
  "Jaki zapach kojarzy się z tym miejscem?",
  "Czy to miejsce jest bardziej formalne czy swobodne?",
  "Czy to miejsce jest drogie?",
  "Czy można tu przyjść z dziećmi?",
  "Co robi się tutaj najczęściej?",
  "Jakie ubranie pasuje do tego miejsca?",
  "Czy chciałbyś tu zostać dłużej?"
];

const DEFAULTS = {
  playerCount: 4,
  names: [],
  roundMinutes: 5,
  placeSet: "classic"
};
const LEGACY_SAMPLE_NAMES = ["Ania", "Bartek", "Celina", "Darek"];

let view = "home";
let historyStack = [];
let preferences = loadPreferences();
let game = null;
let timerId = null;
let deferredInstallPrompt = null;

function loadPreferences() {
  try {
    const saved = JSON.parse(localStorage.getItem("szpieg-preferences")) || {};
    if (LEGACY_SAMPLE_NAMES.every((name, index) => saved.names?.[index] === name)) {
      saved.names = [];
    }
    return { ...DEFAULTS, ...saved };
  } catch {
    return { ...DEFAULTS };
  }
}

function savePreferences(next) {
  preferences = { ...preferences, ...next };
  localStorage.setItem("szpieg-preferences", JSON.stringify(preferences));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2300);
}

function setView(nextView, push = true) {
  if (push && view !== nextView) historyStack.push(view);
  view = nextView;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goBack() {
  const previous = historyStack.pop();
  setView(previous || "home", false);
}

function html(strings, ...values) {
  return strings.map((string, index) => string + (values[index] ?? "")).join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  stopTimerIfNeeded();
  backButton.classList.toggle("hidden", view === "home");
  const screens = {
    home: renderHome,
    help: renderHelp,
    settings: renderSettings,
    cards: renderCards,
    reveal: renderReveal,
    round: renderRound,
    vote: renderVote,
    result: renderResult
  };
  screens[view]();
}

function renderHome() {
  screenTitle.textContent = "Szpieg";
  app.innerHTML = html`
    <section class="screen active hero">
      <div>
        <h2 class="hero-title">Szpieg</h2>
        <p class="subtitle">Gra dedukcyjna na pytania, blef i uważne słuchanie</p>
      </div>
      <ul class="rule-list">
        <li>Wszyscy gracze poza szpiegiem poznają to samo miejsce.</li>
        <li>Zadawajcie sobie pytania, żeby odkryć, kto nie zna miejsca.</li>
        <li>Szpieg słucha odpowiedzi i próbuje odgadnąć lokalizację.</li>
      </ul>
      <div class="actions">
        <button class="button" data-action="new-game" type="button">Nowa gra</button>
        <button class="button secondary" data-action="help" type="button">Jak grać?</button>
        <button class="button secondary hidden" data-action="install" type="button" id="installButton">Zainstaluj aplikację</button>
      </div>
    </section>
  `;
  document.querySelector('[data-action="new-game"]').addEventListener("click", () => setView("settings"));
  document.querySelector('[data-action="help"]').addEventListener("click", () => setView("help"));
  const installButton = document.querySelector("#installButton");
  if (deferredInstallPrompt) installButton.classList.remove("hidden");
  installButton.addEventListener("click", installApp);
}

function renderHelp() {
  screenTitle.textContent = "Jak grać?";
  app.innerHTML = html`
    <section class="screen active panel">
      <h2>Jak grać?</h2>
      <ul class="help-list">
        <li>Gracze po kolei sprawdzają swoje karty.</li>
        <li>Zwykli gracze widzą wspólne miejsce, a szpieg go nie zna.</li>
        <li>Po rozpoczęciu rundy gracze zadają sobie pytania.</li>
        <li>Zwykli gracze próbują znaleźć szpiega.</li>
        <li>Szpieg próbuje ukryć swoją rolę i odgadnąć miejsce.</li>
      </ul>
      <h3>Przykłady pytań</h3>
      <ul class="help-list">
        ${QUESTIONS.slice(0, 6).map((question) => `<li>${escapeHtml(question)}</li>`).join("")}
      </ul>
      <div class="actions">
        <button class="button" data-action="back" type="button">Wróć</button>
        <button class="button secondary" data-action="copy-rules" type="button">Kopiuj zasady</button>
      </div>
    </section>
  `;
  document.querySelector('[data-action="back"]').addEventListener("click", goBack);
  document.querySelector('[data-action="copy-rules"]').addEventListener("click", copyRules);
}

function renderSettings() {
  screenTitle.textContent = "Ustawienia gry";
  const count = clamp(Number(preferences.playerCount) || 4, 3, 12);
  const names = getDefaultNames(count);
  (preferences.names || []).forEach((name, index) => {
    if (index < count && name.trim()) names[index] = name.trim();
  });
  while (names.length < count) names.push("");
  app.innerHTML = html`
    <section class="screen active panel">
      <h2>Ustawienia gry</h2>
      <div class="form-grid">
        <label class="field">
          <span>Liczba graczy</span>
          <select id="playerCount">
            ${Array.from({ length: 10 }, (_, index) => index + 3).map((number) => `
              <option value="${number}" ${number === count ? "selected" : ""}>${number} graczy</option>
            `).join("")}
          </select>
        </label>
        <div class="field">
          <span>Czas rundy</span>
          <div class="segmented" id="timeOptions">
            ${[3, 5, 7, 10].map((minutes) => `<button class="${preferences.roundMinutes === minutes ? "active" : ""}" data-minutes="${minutes}" type="button">${minutes} min</button>`).join("")}
          </div>
        </div>
        <label class="field">
          <span>Zestaw miejsc</span>
          <select id="placeSet">
            ${Object.entries(PLACE_SETS).map(([key, set]) => `<option value="${key}" ${preferences.placeSet === key ? "selected" : ""}>${escapeHtml(set.label)}</option>`).join("")}
            <option value="all" ${preferences.placeSet === "all" ? "selected" : ""}>Wszystkie miejsca</option>
            <option value="custom" ${preferences.placeSet === "custom" ? "selected" : ""}>Własna lista</option>
          </select>
        </label>
        <label class="field ${preferences.placeSet === "custom" ? "" : "hidden"}" id="customPlacesWrap">
          <span>Własna lista miejsc, każde w osobnej linii</span>
          <textarea id="customPlaces" placeholder="minimum 10 miejsc">${escapeHtml(preferences.customPlaces || "")}</textarea>
        </label>
        <div class="field">
          <span>Imiona graczy</span>
          <div class="names-grid" id="namesGrid">
            ${names.slice(0, count).map((name, index) => `
              <input aria-label="Imię gracza ${index + 1}" data-name-index="${index}" value="${escapeHtml(name)}" placeholder="Gracz ${index + 1}">
            `).join("")}
          </div>
        </div>
        <button class="button" data-action="draw" type="button">Losuj role</button>
      </div>
    </section>
  `;
  bindSettingsEvents();
}

function bindSettingsEvents() {
  const playerCount = document.querySelector("#playerCount");
  const placeSet = document.querySelector("#placeSet");
  const customPlaces = document.querySelector("#customPlaces");

  playerCount.addEventListener("change", () => {
    saveCurrentSettings();
    savePreferences({ playerCount: clamp(Number(playerCount.value) || 3, 3, 12) });
    renderSettings();
  });
  document.querySelectorAll("#timeOptions button").forEach((button) => {
    button.addEventListener("click", () => {
      savePreferences({ roundMinutes: Number(button.dataset.minutes) });
      renderSettings();
    });
  });
  placeSet.addEventListener("change", () => {
    saveCurrentSettings();
    savePreferences({ placeSet: placeSet.value });
    renderSettings();
  });
  if (customPlaces) customPlaces.addEventListener("input", saveCurrentSettings);
  document.querySelectorAll("[data-name-index]").forEach((input) => {
    input.addEventListener("input", saveCurrentSettings);
  });
  document.querySelector('[data-action="draw"]').addEventListener("click", startGame);
}

function saveCurrentSettings() {
  const names = [...document.querySelectorAll("[data-name-index]")].map((input) => input.value.trim());
  const customPlaces = document.querySelector("#customPlaces");
  savePreferences({
    playerCount: clamp(Number(document.querySelector("#playerCount")?.value) || 3, 3, 12),
    placeSet: document.querySelector("#placeSet")?.value || preferences.placeSet,
    names,
    customPlaces: customPlaces?.value || preferences.customPlaces || ""
  });
}

function startGame() {
  saveCurrentSettings();
  const playerCount = clamp(Number(preferences.playerCount) || 3, 3, 12);
  const players = Array.from({ length: playerCount }, (_, index) => {
    const saved = (preferences.names[index] || "").trim();
    return { name: saved || `Gracz ${index + 1}`, checked: false };
  });
  const places = getPlaces();
  if (players.length < 3) return showToast("Potrzeba minimum 3 graczy.");
  if (places.length < 10) return showToast("Własna lista musi mieć minimum 10 miejsc.");

  game = {
    players,
    place: draw(places),
    spyIndex: Math.floor(Math.random() * players.length),
    currentRevealIndex: null,
    roundSeconds: Number(preferences.roundMinutes) * 60,
    remainingSeconds: Number(preferences.roundMinutes) * 60,
    paused: true,
    selectedVote: null,
    question: ""
  };
  setView("cards");
}

function getPlaces() {
  if (preferences.placeSet === "custom") {
    return unique((preferences.customPlaces || "").split("\n").map((place) => place.trim()).filter(Boolean));
  }
  if (preferences.placeSet === "all") {
    return unique(Object.values(PLACE_SETS).flatMap((set) => set.places));
  }
  return unique(PLACE_SETS[preferences.placeSet]?.places || PLACE_SETS.classic.places);
}

function renderCards() {
  if (!game) return setView("settings", false);
  screenTitle.textContent = "Karty graczy";
  const checked = game.players.filter((player) => player.checked).length;
  app.innerHTML = html`
    <section class="screen active">
      <div class="status-row">
        <strong>Role sprawdzone: ${checked}/${game.players.length}</strong>
        <span>${checked === game.players.length ? "Możecie zaczynać rundę." : "Przekazuj telefon po kolei."}</span>
      </div>
      <div class="cards-grid">
        ${game.players.map((player, index) => `
          <button class="player-card ${player.checked ? "checked" : ""}" data-player="${index}" type="button">
            <strong>${escapeHtml(player.name)}</strong>
            <span>${player.checked ? "Sprawdzone" : "Kliknij, aby zobaczyć rolę"}</span>
          </button>
        `).join("")}
      </div>
      <div class="actions" style="margin-top:18px">
        <button class="button" data-action="start-round" ${checked === game.players.length ? "" : "disabled"} type="button">Rozpocznij rundę</button>
      </div>
    </section>
  `;
  document.querySelectorAll("[data-player]").forEach((card) => {
    card.addEventListener("click", () => {
      game.currentRevealIndex = Number(card.dataset.player);
      setView("reveal");
    });
  });
  document.querySelector('[data-action="start-round"]').addEventListener("click", () => {
    game.paused = false;
    setView("round");
  });
}

function renderReveal() {
  if (!game || game.currentRevealIndex === null) return setView("cards", false);
  const player = game.players[game.currentRevealIndex];
  const isSpy = game.currentRevealIndex === game.spyIndex;
  screenTitle.textContent = player.name;
  app.innerHTML = html`
    <section class="screen active">
      <div class="role-card">
        <div>
          <p class="role-name">${escapeHtml(player.name)}</p>
          ${isSpy ? `
            <h2 class="spy-name">JESTEŚ SZPIEGIEM</h2>
            <p class="subtitle">Słuchaj pytań i spróbuj odgadnąć miejsce.</p>
          ` : `
            <p class="subtitle">Twoje miejsce to:</p>
            <h2 class="place-name">${escapeHtml(game.place)}</h2>
            <p class="subtitle">Zapamiętaj miejsce i nie pokazuj karty innym.</p>
          `}
          <button class="button" data-action="hide-role" type="button">Ukryj i przekaż dalej</button>
        </div>
      </div>
    </section>
  `;
  document.querySelector('[data-action="hide-role"]').addEventListener("click", () => {
    game.players[game.currentRevealIndex].checked = true;
    game.currentRevealIndex = null;
    setView("cards");
  });
}

function renderRound() {
  if (!game) return setView("settings", false);
  screenTitle.textContent = "Runda";
  app.innerHTML = html`
    <section class="screen active panel">
      <h2>Runda rozpoczęta</h2>
      <div class="timer" id="timer">${formatTime(game.remainingSeconds)}</div>
      <p class="tip-box">Zadawajcie sobie pytania. Odpowiedzi muszą być konkretne, ale nie mogą zbyt łatwo zdradzić miejsca.</p>
      <div class="question-box">${game.question ? escapeHtml(game.question) : "Wylosuj pytanie pomocnicze, jeśli rozmowa potrzebuje iskry."}</div>
      <div class="actions">
        <button class="button secondary" data-action="pause" ${game.paused ? "disabled" : ""} type="button">Pauza</button>
        <button class="button secondary" data-action="resume" ${game.paused ? "" : "disabled"} type="button">Wznów</button>
        <button class="button secondary" data-action="question" type="button">Losowe pytanie pomocnicze</button>
        <button class="button danger" data-action="end-round" type="button">Zakończ rundę</button>
      </div>
    </section>
  `;
  document.querySelector('[data-action="pause"]').addEventListener("click", () => {
    game.paused = true;
    renderRound();
  });
  document.querySelector('[data-action="resume"]').addEventListener("click", () => {
    game.paused = false;
    renderRound();
  });
  document.querySelector('[data-action="question"]').addEventListener("click", () => {
    game.question = draw(QUESTIONS);
    renderRound();
  });
  document.querySelector('[data-action="end-round"]').addEventListener("click", () => setView("vote"));
  startTimer();
}

function startTimer() {
  clearInterval(timerId);
  if (!game || game.paused) return;
  timerId = window.setInterval(() => {
    if (!game || game.paused) return clearInterval(timerId);
    game.remainingSeconds = Math.max(0, game.remainingSeconds - 1);
    const timer = document.querySelector("#timer");
    if (timer) timer.textContent = formatTime(game.remainingSeconds);
    if (game.remainingSeconds === 0) {
      clearInterval(timerId);
      game.paused = true;
      showToast("Czas rundy minął.");
      setView("vote");
    }
  }, 1000);
}

function stopTimerIfNeeded() {
  if (view !== "round") clearInterval(timerId);
}

function renderVote() {
  if (!game) return setView("settings", false);
  screenTitle.textContent = "Głosowanie";
  app.innerHTML = html`
    <section class="screen active panel">
      <h2>Kto według was jest szpiegiem?</h2>
      <div class="vote-grid">
        ${game.players.map((player, index) => `
          <button class="player-card" data-vote="${index}" type="button">
            <strong>${escapeHtml(player.name)}</strong>
            <span>Wskaż tę osobę</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
  document.querySelectorAll("[data-vote]").forEach((button) => {
    button.addEventListener("click", () => {
      game.selectedVote = Number(button.dataset.vote);
      setView("result");
    });
  });
}

function renderResult() {
  if (!game || game.selectedVote === null) return setView("vote", false);
  const playersWin = game.selectedVote === game.spyIndex;
  const spy = game.players[game.spyIndex].name;
  screenTitle.textContent = "Podsumowanie";
  app.innerHTML = html`
    <section class="screen active panel result ${playersWin ? "" : "spy-win"}">
      <h2>${playersWin ? "Wygrywają gracze" : "Wygrywa szpieg"}</h2>
      <p class="subtitle">${playersWin ? "Wskazaliście właściwą osobę." : "Wskazaliście złą osobę."}</p>
      <ul class="help-list">
        <li>Szpiegiem był/a: <strong>${escapeHtml(spy)}</strong></li>
        <li>Miejsce: <strong>${escapeHtml(game.place)}</strong></li>
      </ul>
      <div class="actions">
        <button class="button" data-action="same-players" type="button">Nowa gra z tymi samymi graczami</button>
        <button class="button secondary" data-action="fresh" type="button">Nowa gra od początku</button>
      </div>
    </section>
  `;
  document.querySelector('[data-action="same-players"]').addEventListener("click", startGame);
  document.querySelector('[data-action="fresh"]').addEventListener("click", () => {
    game = null;
    historyStack = [];
    setView("home", false);
  });
}

function copyRules() {
  const text = [
    "Szpieg - zasady gry",
    "Wszyscy gracze poza szpiegiem poznają to samo miejsce.",
    "Zadawajcie pytania, żeby odkryć, kto nie zna miejsca.",
    "Szpieg słucha odpowiedzi i próbuje odgadnąć lokalizację."
  ].join("\n");
  navigator.clipboard?.writeText(text)
    .then(() => showToast("Zasady skopiowane."))
    .catch(() => showToast("Nie udało się skopiować zasad."));
}

function installApp() {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.finally(() => {
    deferredInstallPrompt = null;
    renderHome();
  });
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function draw(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function unique(items) {
  return [...new Set(items.map((item) => item.trim()).filter(Boolean))];
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getDefaultNames(count) {
  return Array.from({ length: count }, (_, index) => `Gracz ${index + 1}`);
}

backButton.addEventListener("click", goBack);
fullscreenButton.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  if (view === "home") renderHome();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      console.info("Service worker nie został uruchomiony.");
    });
  });
}

render();
