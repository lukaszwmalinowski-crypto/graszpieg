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
  "Czy chciałbyś tu zostać dłużej?",
  "Co zobaczyłbyś zaraz po wejściu?",
  "Jaki dźwięk byłby tutaj najbardziej charakterystyczny?",
  "Czy to miejsce bardziej kojarzy się z odpoczynkiem czy działaniem?",
  "Jak zachowywałaby się tu osoba, która jest pierwszy raz?",
  "Co mogłoby tu przeszkadzać?",
  "Czy łatwo byłoby się tutaj zgubić?",
  "Czy trzeba tu czekać w kolejce?",
  "Co najczęściej trzyma się tutaj w ręku?",
  "Czy przydałaby się tu gotówka?",
  "Czy robi się tu zdjęcia?",
  "Czy to miejsce jest lepsze w dzień czy po zmroku?",
  "Jaka pogoda pasuje do tego miejsca?",
  "Czy można tu być samemu bez dziwnego wrażenia?",
  "Czy to miejsce jest bardziej ciche czy ruchliwe?",
  "Kto byłby tutaj najbardziej zajęty?",
  "Jaki przedmiot łatwo byłoby tu zgubić?",
  "Co byłoby tu największą atrakcją?",
  "Czy trzeba tu zachowywać się elegancko?",
  "Czy można tu usiąść?",
  "Czy byłoby tu zimno, ciepło czy duszno?",
  "Co można by tutaj zepsuć?",
  "Czy w tym miejscu coś pachnie intensywnie?",
  "Czy ktoś mógłby tu pracować w mundurze?",
  "Czy to miejsce ma bilety?",
  "Czy słychać tu muzykę?",
  "Czy przyszedłbyś tu z rodziną?",
  "Czy przyszedłbyś tu na randkę?",
  "Czy to miejsce pasuje do wakacji?",
  "Czy to miejsce pasuje do deszczu?",
  "Czy można tu coś zjeść?",
  "Czy można tu coś wypożyczyć?",
  "Czy trzeba tu zachować ciszę?",
  "Co byłoby tutaj najdroższe?",
  "Co byłoby tutaj najtańsze?",
  "Czy ktoś mógłby tu mieć bilet albo wejściówkę?",
  "Czy są tu jakieś zasady bezpieczeństwa?",
  "Czy można tu wejść bez zapowiedzi?",
  "Czy to miejsce jest bardziej dla dorosłych czy dla wszystkich?",
  "Czy przyszedłbyś tu w wygodnych butach?",
  "Czy potrzebny byłby tu plecak?",
  "Czy można tu spotkać obcych ludzi?",
  "Czy łatwo tu podsłuchać rozmowę?",
  "Czy ktoś mógłby tu robić ogłoszenia przez głośnik?",
  "Czy to miejsce ma zaplecze?",
  "Czy ktoś mógłby tu sprzątać przez cały dzień?",
  "Czy widziałbyś tu tabliczkę z zakazem?",
  "Czy są tu okna?",
  "Czy jest tu dużo światła?",
  "Czy podłoga byłaby tutaj śliska?",
  "Czy można tu przyprowadzić zwierzę?",
  "Czy to miejsce jest bardziej codzienne czy wyjątkowe?",
  "Czy ludzie mówią tutaj głośno?",
  "Czy coś tutaj może się rozpocząć o konkretnej godzinie?",
  "Czy można się tu spóźnić?",
  "Czy wziąłbyś tutaj kurtkę?",
  "Czy potrzebny byłby tu telefon?",
  "Czy można tu zapłacić kartą?",
  "Czy ktoś mógłby tu stać przy wejściu?",
  "Co byłoby tu za drzwiami dla personelu?",
  "Czy są tu miejsca numerowane?",
  "Czy ktoś robi tu rezerwacje?",
  "Czy trzeba się tu zapisać wcześniej?",
  "Czy to miejsce ma swoje godziny otwarcia?",
  "Czy byłoby tu dużo dzieci?",
  "Czy spotkałbyś tu turystów?",
  "Czy ktoś mógłby tu robić remont?",
  "Czy to miejsce bywa zatłoczone w weekend?",
  "Czy łatwo byłoby tu znaleźć wodę?",
  "Czy można tu kupić pamiątkę?",
  "Czy coś tutaj się ogląda?",
  "Czy coś tutaj się ćwiczy?",
  "Czy coś tutaj się naprawia?",
  "Czy coś tutaj się wybiera z menu?",
  "Czy trzeba tu mieć dokument?",
  "Czy ktoś mógłby sprawdzać tu torby?",
  "Czy są tu schody?",
  "Czy można tu wjechać wózkiem?",
  "Czy to miejsce brzmi bardziej luksusowo czy zwyczajnie?",
  "Czy można by tu urządzić niespodziankę?",
  "Czy ktoś mógłby tu czekać na swoją kolej?",
  "Czy to miejsce kojarzy się z ruchem?",
  "Czy to miejsce kojarzy się z zapachem jedzenia?",
  "Czy ktoś mógłby tu zgubić klucze?",
  "Czy można tu robić hałas bez problemu?",
  "Czy trzeba tu coś oddać przy wyjściu?",
  "Czy to miejsce ma kasę albo recepcję?",
  "Czy ktoś mógłby tu rozdawać opaski?",
  "Czy można tu dostać mapę?",
  "Czy jest tu miejsce na bagaż?",
  "Czy ktoś mógłby tu być w stroju sportowym?",
  "Czy ktoś mógłby tu być w eleganckim stroju?",
  "Czy widziałbyś tu znak ostrzegawczy?",
  "Czy coś tutaj mogłoby być mokre?",
  "Czy coś tutaj mogłoby być bardzo głośne?",
  "Czy to miejsce ma widok na zewnątrz?",
  "Czy trzeba tutaj coś podpisać?",
  "Czy ludzie przychodzą tu dla zabawy?",
  "Czy ludzie przychodzą tu z obowiązku?",
  "Czy można tu trafić przypadkiem?",
  "Czy łatwo byłoby tu udawać, że wiesz, gdzie jesteś?"
];

const DEFAULTS = {
  playerCount: 4,
  names: [],
  roundMinutes: 5,
  placeSet: "classic",
  placeSets: ["classic"]
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
    if (!Array.isArray(saved.placeSets) && saved.placeSet) {
      saved.placeSets = saved.placeSet === "all" ? Object.keys(PLACE_SETS) : [saved.placeSet];
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
    deal: renderDeal,
    cards: renderCards,
    reveal: renderReveal,
    round: renderRound,
    vote: renderVote,
    spyGuess: renderSpyGuess,
    result: renderResult
  };
  screens[view]();
}

function renderHome() {
  screenTitle.textContent = "Szpieg";
  app.innerHTML = html`
    <section class="screen active hero">
      <div class="hero-head">
        <img class="hero-icon" src="./icons/icon-192.png" alt="">
        <div>
          <h2 class="hero-title">Szpieg</h2>
          <p class="subtitle">Gra dedukcyjna na pytania, blef i uważne słuchanie</p>
        </div>
      </div>
      <ul class="rule-list">
        <li>Wszyscy gracze poza szpiegiem poznają to samo miejsce.</li>
        <li>Zadawajcie sobie pytania, żeby odkryć, kto nie zna miejsca.</li>
        <li>Szpieg słucha odpowiedzi i próbuje odgadnąć lokalizację.</li>
      </ul>
      <div class="actions">
        <button class="button" data-action="new-game" type="button">Nowa gra</button>
        <button class="button secondary" data-action="help" type="button">Jak grać?</button>
      </div>
      <div class="install-panel ${deferredInstallPrompt ? "" : "hidden"}" id="installPanel">
        <img src="./icons/icon-192.png" alt="">
        <div>
          <strong>Zainstaluj Szpiega</strong>
          <span>Dodaj grę do ekranu telefonu i uruchamiaj ją jak aplikację.</span>
        </div>
        <button class="button compact" data-action="install" type="button" id="installButton">Instaluj</button>
      </div>
    </section>
  `;
  document.querySelector('[data-action="new-game"]').addEventListener("click", () => setView("settings"));
  document.querySelector('[data-action="help"]').addEventListener("click", () => setView("help"));
  const installButton = document.querySelector("#installButton");
  if (installButton) installButton.addEventListener("click", installApp);
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
  const selectedSets = getSelectedPlaceSets();
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
        <div class="field">
          <span>Kategorie miejsc</span>
          <div class="mini-actions">
            <button class="button secondary compact" data-action="all-sets" type="button">Zaznacz wszystkie</button>
            <button class="button secondary compact" data-action="classic-set" type="button">Tylko klasyczne</button>
          </div>
          <div class="check-grid" id="placeSets">
            ${Object.entries(PLACE_SETS).map(([key, set]) => `
              <label class="check-card">
                <input type="checkbox" data-place-set="${key}" ${selectedSets.includes(key) ? "checked" : ""}>
                <span>${escapeHtml(set.label)}</span>
              </label>
            `).join("")}
            <label class="check-card">
              <input type="checkbox" id="customPlacesEnabled" ${selectedSets.includes("custom") ? "checked" : ""}>
              <span>Własna lista</span>
            </label>
          </div>
        </div>
        <label class="field ${selectedSets.includes("custom") ? "" : "hidden"}" id="customPlacesWrap">
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
  const customPlaces = document.querySelector("#customPlaces");

  playerCount.addEventListener("change", () => {
    saveCurrentSettings();
    savePreferences({ playerCount: clamp(Number(playerCount.value) || 3, 3, 12) });
    renderSettings();
  });
  document.querySelectorAll("#timeOptions button").forEach((button) => {
    button.addEventListener("click", () => {
      saveCurrentSettings();
      savePreferences({ roundMinutes: Number(button.dataset.minutes) });
      renderSettings();
    });
  });
  document.querySelectorAll("[data-place-set], #customPlacesEnabled").forEach((input) => {
    input.addEventListener("change", () => {
      saveCurrentSettings();
      renderSettings();
    });
  });
  bindCategoryQuickActions();
  if (customPlaces) customPlaces.addEventListener("input", saveCurrentSettings);
  document.querySelectorAll("[data-name-index]").forEach((input) => {
    input.addEventListener("input", saveCurrentSettings);
  });
  document.querySelector('[data-action="draw"]').addEventListener("click", startGame);
}

function getSelectedPlaceSets() {
  if (Array.isArray(preferences.placeSets)) {
    return preferences.placeSets.filter((key) => key === "custom" || PLACE_SETS[key]);
  }
  if (preferences.placeSet === "all") return Object.keys(PLACE_SETS);
  if (preferences.placeSet === "custom") return ["custom"];
  return [preferences.placeSet || "classic"].filter((key) => PLACE_SETS[key]);
}

function readSelectedPlaceSetsFromForm() {
  const builtIn = [...document.querySelectorAll("[data-place-set]:checked")].map((input) => input.dataset.placeSet);
  const custom = document.querySelector("#customPlacesEnabled")?.checked ? ["custom"] : [];
  return [...builtIn, ...custom];
}

function selectAllPlaceSets() {
  const allSets = Object.keys(PLACE_SETS);
  savePreferences({ placeSets: allSets, placeSet: "all" });
  renderSettings();
}

function bindCategoryQuickActions() {
  document.querySelector('[data-action="all-sets"]')?.addEventListener("click", selectAllPlaceSets);
  document.querySelector('[data-action="classic-set"]')?.addEventListener("click", () => {
    saveCurrentSettings();
    savePreferences({ placeSets: ["classic"], placeSet: "classic" });
    renderSettings();
  });
}

function saveCurrentSettings() {
  if (!document.querySelector("#playerCount")) return;
  const names = [...document.querySelectorAll("[data-name-index]")].map((input) => input.value.trim());
  const customPlaces = document.querySelector("#customPlaces");
  const placeSets = readSelectedPlaceSetsFromForm();
  const placeSet = placeSets.length === Object.keys(PLACE_SETS).length ? "all" : placeSets[0] || "";
  savePreferences({
    playerCount: clamp(Number(document.querySelector("#playerCount")?.value) || 3, 3, 12),
    placeSet,
    placeSets,
    names,
    customPlaces: customPlaces?.value || preferences.customPlaces || ""
  });
}

function startGame(options = {}) {
  if (!options.keepPreferences) saveCurrentSettings();
  const samePlayers = options.keepPreferences && game?.players?.length;
  const playerCount = samePlayers ? game.players.length : clamp(Number(preferences.playerCount) || 3, 3, 12);
  const players = samePlayers
    ? game.players.map((player) => ({ name: player.name, checked: false }))
    : Array.from({ length: playerCount }, (_, index) => {
      const saved = (preferences.names[index] || "").trim();
      return { name: saved || `Gracz ${index + 1}`, checked: false };
    });
  const previousSpyName = samePlayers ? game.players[game.spyIndex]?.name : "";
  const places = samePlayers && game.placePool?.length ? game.placePool : getPlaces();
  if (players.length < 3) return showToast("Potrzeba minimum 3 graczy.");
  if (!samePlayers && !getSelectedPlaceSets().length) return showToast("Wybierz przynajmniej jedną kategorię miejsc.");
  if (places.length < 10) return showToast("Wybrane miejsca muszą mieć łącznie minimum 10 haseł.");

  game = {
    players,
    place: draw(places),
    placePool: places,
    spyIndex: drawSpyIndex(players, previousSpyName),
    currentRevealIndex: null,
    roundSeconds: Number(preferences.roundMinutes) * 60,
    remainingSeconds: Number(preferences.roundMinutes) * 60,
    paused: true,
    selectedVote: null,
    spyGuess: "",
    revealFlipped: false,
    question: ""
  };
  setView("deal");
}

function renderDeal() {
  if (!game) return setView("settings", false);
  screenTitle.textContent = "Tasowanie";
  app.innerHTML = html`
    <section class="screen active deal-screen">
      <div class="deal-table" aria-hidden="true">
        ${game.players.map((_, index) => `<span class="deal-card" style="--i:${index}"></span>`).join("")}
      </div>
      <p class="kicker">role wylosowane</p>
      <h2>Tasuję i rozdaję karty</h2>
      <p class="subtitle">Za chwilę każdy gracz sprawdzi swoją zakrytą kartę.</p>
    </section>
  `;
  window.setTimeout(() => {
    if (view === "deal") setView("cards", false);
  }, 1150);
}

function getPlaces() {
  const selectedSets = getSelectedPlaceSets();
  const builtInPlaces = selectedSets
    .filter((key) => PLACE_SETS[key])
    .flatMap((key) => PLACE_SETS[key].places);
  const customPlaces = selectedSets.includes("custom")
    ? (preferences.customPlaces || "").split("\n").map((place) => place.trim()).filter(Boolean)
    : [];
  return unique([...builtInPlaces, ...customPlaces]);
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
      game.revealFlipped = false;
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
      <div class="flip-stage">
        <div class="flip-card ${isSpy ? "spy-card" : "place-card"} ${game.revealFlipped ? "is-flipped" : ""}">
          <button class="flip-face flip-back" data-action="flip-role" type="button" aria-label="Odkryj rolę">
            <span class="card-mark">♠</span>
            <strong>${escapeHtml(player.name)}</strong>
            <span>Kliknij kartę, aby zobaczyć rolę</span>
          </button>
          <div class="flip-face flip-front">
            <p class="role-name">${escapeHtml(player.name)}</p>
            ${isSpy ? `
              <h2 class="spy-name"><span>JESTEŚ</span><span>SZPIEGIEM</span></h2>
              <p class="subtitle">Słuchaj pytań i spróbuj odgadnąć miejsce.</p>
            ` : `
              <p class="subtitle">Twoje miejsce to:</p>
              <h2 class="place-name">${escapeHtml(game.place)}</h2>
              <p class="subtitle">Zapamiętaj miejsce i nie pokazuj karty innym.</p>
            `}
            <button class="button" data-action="hide-role" type="button">Ukryj i przekaż dalej</button>
          </div>
        </div>
      </div>
    </section>
  `;
  document.querySelector('[data-action="flip-role"]')?.addEventListener("click", () => {
    const flipCard = document.querySelector(".flip-card");
    game.revealFlipped = true;
    flipCard?.classList.add("is-flipped");
  });
  document.querySelector('[data-action="hide-role"]').addEventListener("click", () => {
    game.players[game.currentRevealIndex].checked = true;
    game.currentRevealIndex = null;
    game.revealFlipped = false;
    setView("cards");
  });
}

function renderRound() {
  if (!game) return setView("settings", false);
  screenTitle.textContent = "Runda";
  const progress = getRoundProgress();
  app.innerHTML = html`
    <section class="screen active panel">
      <h2>Runda rozpoczęta</h2>
      <div class="round-layout">
        <div class="timer-ring" style="--progress:${progress}">
          <div>
            <span class="timer" id="timer">${formatTime(game.remainingSeconds)}</span>
            <small>${game.paused ? "pauza" : "czas rundy"}</small>
          </div>
        </div>
        <div class="question-card">
          <span class="card-mark">?</span>
          <strong>Pytanie pomocnicze</strong>
          <p>${game.question ? escapeHtml(game.question) : "Wylosuj pytanie pomocnicze, jeśli rozmowa potrzebuje iskry."}</p>
        </div>
      </div>
      <p class="tip-box">Zadawajcie sobie pytania. Odpowiedzi muszą być konkretne, ale nie mogą zbyt łatwo zdradzić miejsca.</p>
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
    const ring = document.querySelector(".timer-ring");
    if (ring) ring.style.setProperty("--progress", getRoundProgress());
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
      if (game.selectedVote === game.spyIndex) {
        game.spyGuess = "";
        setView("result");
      } else {
        setView("spyGuess");
      }
    });
  });
}

function renderSpyGuess() {
  if (!game || game.selectedVote === null) return setView("vote", false);
  screenTitle.textContent = "Szpieg zgaduje";
  const suggestions = buildPlaceSuggestions();
  app.innerHTML = html`
    <section class="screen active panel">
      <p class="kicker">ostatnia szansa</p>
      <h2>Szpieg próbuje odgadnąć miejsce</h2>
      <p class="subtitle">Gracze wskazali złą osobę. Teraz szpieg może wygrać dodatkowo, jeśli trafi prawdziwą lokalizację.</p>
      <label class="field">
        <span>Typ szpiega</span>
        <input id="spyGuessInput" list="placeSuggestions" value="${escapeHtml(game.spyGuess)}" placeholder="Wpisz lub wybierz miejsce">
        <datalist id="placeSuggestions">
          ${suggestions.map((place) => `<option value="${escapeHtml(place)}"></option>`).join("")}
        </datalist>
      </label>
      <div class="actions">
        <button class="button" data-action="submit-spy-guess" type="button">Sprawdź typ</button>
        <button class="button secondary" data-action="skip-spy-guess" type="button">Pomiń zgadywanie</button>
      </div>
    </section>
  `;
  const input = document.querySelector("#spyGuessInput");
  input.addEventListener("input", () => {
    game.spyGuess = input.value.trim();
  });
  document.querySelector('[data-action="submit-spy-guess"]').addEventListener("click", () => {
    game.spyGuess = input.value.trim();
    if (!game.spyGuess) return showToast("Wpisz typ szpiega albo pomiń zgadywanie.");
    setView("result");
  });
  document.querySelector('[data-action="skip-spy-guess"]').addEventListener("click", () => {
    game.spyGuess = "";
    setView("result");
  });
}

function renderResult() {
  if (!game || game.selectedVote === null) return setView("vote", false);
  const foundSpy = game.selectedVote === game.spyIndex;
  const spyGuessedPlace = !foundSpy && normalizeGuess(game.spyGuess) === normalizeGuess(game.place);
  const playersWin = foundSpy && !spyGuessedPlace;
  const spy = game.players[game.spyIndex].name;
  const voted = game.players[game.selectedVote].name;
  const resultText = getResultText(foundSpy, spyGuessedPlace);
  screenTitle.textContent = "Podsumowanie";
  app.innerHTML = html`
    <section class="screen active panel result ${playersWin ? "" : "spy-win"}">
      <p class="kicker">${playersWin ? "gracze wygrywają" : "szpieg wygrywa"}</p>
      <h2>${resultText.title}</h2>
      <p class="subtitle">${resultText.subtitle}</p>
      <div class="summary-grid">
        <div class="summary-tile">
          <span>Wasz typ</span>
          <strong>${escapeHtml(voted)}</strong>
        </div>
        <div class="summary-tile">
          <span>Szpieg</span>
          <strong>${escapeHtml(spy)}</strong>
        </div>
        <div class="summary-tile">
          <span>Miejsce</span>
          <strong>${escapeHtml(game.place)}</strong>
        </div>
        <div class="summary-tile">
          <span>Typ szpiega</span>
          <strong>${game.spyGuess ? escapeHtml(game.spyGuess) : "brak"}</strong>
        </div>
      </div>
      <div class="actions">
        <button class="button" data-action="same-players" type="button">Nowa gra z tymi samymi graczami</button>
        <button class="button secondary" data-action="fresh" type="button">Nowa gra od początku</button>
      </div>
    </section>
  `;
  document.querySelector('[data-action="same-players"]').addEventListener("click", () => startGame({ keepPreferences: true }));
  document.querySelector('[data-action="fresh"]').addEventListener("click", () => {
    game = null;
    historyStack = [];
    setView("home", false);
  });
}

function buildPlaceSuggestions() {
  const pool = game?.placePool?.length ? game.placePool : getPlaces();
  return unique([game.place, ...shuffle(pool).slice(0, 36)]).sort((a, b) => a.localeCompare(b, "pl"));
}

function getResultText(foundSpy, spyGuessedPlace) {
  if (foundSpy) {
    return {
      title: "Wygrywają gracze",
      subtitle: "Wskazaliście prawdziwego szpiega, zanim zdążył przejąć rundę."
    };
  }
  if (spyGuessedPlace) {
    return {
      title: "Szpieg trafia miejsce",
      subtitle: "Wskazaliście złą osobę, a szpieg poprawnie odgadł lokalizację."
    };
  }
  return {
    title: "Wygrywa szpieg",
    subtitle: "Wskazaliście złą osobę. Szpieg nie trafił miejsca, ale przetrwał głosowanie."
  };
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

function getRoundProgress() {
  if (!game?.roundSeconds) return 0;
  return Math.round((game.remainingSeconds / game.roundSeconds) * 100);
}

function draw(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function drawSpyIndex(players, previousSpyName = "") {
  const availableIndexes = players
    .map((player, index) => ({ player, index }))
    .filter(({ player }) => player.name !== previousSpyName)
    .map(({ index }) => index);
  const pool = availableIndexes.length ? availableIndexes : players.map((_, index) => index);
  return draw(pool);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function unique(items) {
  return [...new Set(items.map((item) => item.trim()).filter(Boolean))];
}

function normalizeGuess(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
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
