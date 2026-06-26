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
const USED_PLACES_KEY = "szpieg-used-places";

let view = "home";
let historyStack = [];
let preferences = loadPreferences();
let game = null;
let timerId = null;
let toastTimerId = null;
let deferredInstallPrompt = null;
let helpSlideIndex = 0;
let helpTouchStartX = 0;
let helpTouchStartY = 0;

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
  clearTimeout(toastTimerId);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimerId = window.setTimeout(() => toast.classList.remove("show"), 2300);
}

function clearToast() {
  clearTimeout(toastTimerId);
  toast.classList.remove("show");
}

function setView(nextView, push = true) {
  if (push && view !== nextView) historyStack.push(view);
  view = nextView;
  clearToast();
  render();
  window.scrollTo({ top: 0, behavior: "auto" });
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
  document.body.dataset.view = view;
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
    <section class="screen active title-screen" aria-label="Szpieg - ekran tytułowy">
      <div class="title-art">
        <button class="title-hotspot title-hotspot-new" data-action="new-game" type="button" aria-label="Nowa gra"></button>
        <button class="title-hotspot title-hotspot-help" data-action="help" type="button" aria-label="Jak grać?"></button>
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
  const slides = [1, 2, 3, 4, 5].map((number) => `./icons-lite/help-step-${number}.jpg`);
  helpSlideIndex = clamp(helpSlideIndex, 0, slides.length - 1);
  app.innerHTML = html`
    <section class="screen active mission-card-screen" aria-label="Instrukcja misji">
      <div class="mission-card-stack" id="missionCardStack" tabindex="0">
        ${slides.map((src, index) => `
          <article class="mission-image-card" data-mission-card="${index}" aria-hidden="${index === helpSlideIndex ? "false" : "true"}">
            <img src="${src}" alt="Instrukcja misji, krok ${index + 1} z 5">
          </article>
        `).join("")}
        <button class="mission-card-hotspot mission-card-prev" data-action="mission-prev" type="button" aria-label="Poprzedni krok"></button>
        <button class="mission-card-hotspot mission-card-next" data-action="mission-next" type="button" aria-label="Następny krok"></button>
        <button class="mission-card-hotspot mission-card-start" data-action="mission-start" type="button" aria-label="Rozpocznij operację"></button>
      </div>
    </section>
  `;
  updateMissionCards();
  document.querySelector('[data-action="mission-prev"]').addEventListener("click", (event) => {
    updateMissionCards(helpSlideIndex - 1);
    event.currentTarget.blur();
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
  });
  document.querySelector('[data-action="mission-next"]').addEventListener("click", (event) => {
    updateMissionCards(helpSlideIndex + 1);
    event.currentTarget.blur();
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
  });
  document.querySelector('[data-action="mission-start"]').addEventListener("click", () => setView("settings"));
  document.querySelector("#missionCardStack").addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") updateMissionCards(helpSlideIndex - 1);
    if (event.key === "ArrowRight") updateMissionCards(helpSlideIndex + 1);
  });
  document.querySelector("#missionCardStack").addEventListener("touchstart", (event) => {
    const touch = event.touches[0];
    helpTouchStartX = touch.clientX;
    helpTouchStartY = touch.clientY;
  }, { passive: true });
  document.querySelector("#missionCardStack").addEventListener("touchend", (event) => {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - helpTouchStartX;
    const deltaY = touch.clientY - helpTouchStartY;
    if (Math.abs(deltaX) < 44 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return;
    updateMissionCards(helpSlideIndex + (deltaX < 0 ? 1 : -1));
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
  }, { passive: true });
}

function updateMissionCards(nextIndex = helpSlideIndex) {
  const cards = [...document.querySelectorAll("[data-mission-card]")];
  if (!cards.length) return;
  helpSlideIndex = clamp(nextIndex, 0, cards.length - 1);
  cards.forEach((card, index) => {
    const distance = index - helpSlideIndex;
    card.classList.toggle("active", distance === 0);
    card.classList.toggle("past", distance < 0);
    card.classList.toggle("queued", distance > 0);
    card.style.setProperty("--distance", Math.min(Math.abs(distance), 4));
    card.style.setProperty("--direction", Math.sign(distance));
    card.setAttribute("aria-hidden", distance === 0 ? "false" : "true");
  });
  document.querySelector('[data-action="mission-prev"]').disabled = helpSlideIndex === 0;
  document.querySelector('[data-action="mission-next"]').disabled = helpSlideIndex === cards.length - 1;
  document.querySelector('[data-action="mission-start"]').classList.toggle("visible", helpSlideIndex === cards.length - 1);
}

function renderSettings() {
  screenTitle.textContent = "Ustawienia gry";
  const count = clamp(Number(preferences.playerCount) || 4, 3, 12);
  const selectedSets = getSelectedPlaceSets();
  const placeCount = getPlacesForSelection(selectedSets, preferences.customPlaces || "").length;
  const names = getDefaultNames(count);
  (preferences.names || []).forEach((name, index) => {
    if (index < count && name.trim()) names[index] = name.trim();
  });
  while (names.length < count) names.push("");
  app.innerHTML = html`
    <section class="screen active dossier-screen">
      <div class="dossier-paper">
        <aside class="dossier-sidebar" aria-hidden="true">
          <span class="secret-stamp">Ściśle tajne</span>
          <span class="paperclip"></span>
          <span class="evidence-photo city-photo"><span>Londyn</span></span>
          <span class="evidence-photo suspect-photo"><span>Obserwacja</span></span>
        </aside>
        <div class="dossier-content">
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
          <p class="settings-note ${placeCount < 10 ? "warning" : ""}">
            ${placeCount ? `W puli losowania jest ${placeCount} miejsc.` : "Wybierz kategorie miejsc przed losowaniem."}
          </p>
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
        <button class="button dossier-start" data-action="draw" type="button">Rozpocznij operację</button>
          </div>
          <span class="returned-stamp" aria-hidden="true">Odtajniono</span>
        </div>
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
  const placePoolSignature = samePlayers && game.placePoolSignature ? game.placePoolSignature : getPlacePoolSignature(places);
  if (players.length < 3) return showToast("Potrzeba minimum 3 graczy.");
  if (!samePlayers && !getSelectedPlaceSets().length) return showToast("Wybierz przynajmniej jedną kategorię miejsc.");
  if (places.length < 10) return showToast("Wybrane miejsca muszą mieć łącznie minimum 10 haseł.");

  game = {
    players,
    place: drawPlaceWithoutRepeat(places, placePoolSignature),
    placePool: places,
    placePoolSignature,
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
  return getPlacesForSelection(getSelectedPlaceSets(), preferences.customPlaces || "");
}

function getPlacesForSelection(selectedSets, customPlacesText = "") {
  const builtInPlaces = selectedSets
    .filter((key) => PLACE_SETS[key])
    .flatMap((key) => PLACE_SETS[key].places);
  const customPlaces = selectedSets.includes("custom")
    ? customPlacesText.split("\n").map((place) => place.trim()).filter(Boolean)
    : [];
  return unique([...builtInPlaces, ...customPlaces]);
}

function renderCards() {
  if (!game) return setView("settings", false);
  screenTitle.textContent = "Karty graczy";
  const checked = game.players.filter((player) => player.checked).length;
  const nextUncheckedIndex = game.players.findIndex((player) => !player.checked);
  const nextPlayer = nextUncheckedIndex >= 0 ? game.players[nextUncheckedIndex].name : "";
  app.innerHTML = html`
    <section class="screen active card-table-screen">
      <div class="status-row">
        <strong>Role sprawdzone: ${checked}/${game.players.length}</strong>
        <span>${checked === game.players.length ? "Możecie zaczynać rundę." : `Teraz telefon bierze ${escapeHtml(nextPlayer)}.`}</span>
      </div>
      <div class="cards-grid">
        ${game.players.map((player, index) => `
          <button class="player-card ${player.checked ? "checked" : ""} ${index === nextUncheckedIndex ? "next" : ""}" data-player="${index}" type="button" ${player.checked ? 'data-locked="true"' : ""}>
            <strong>${escapeHtml(player.name)}</strong>
            <span class="card-label">${player.checked ? "Sprawdzone i ukryte" : index === nextUncheckedIndex ? "Następny gracz" : "Czeka na swoją kolej"}</span>
          </button>
        `).join("")}
      </div>
      <div class="actions" style="margin-top:18px">
        <button class="button" data-action="start-round" ${checked === game.players.length ? "" : "disabled"} type="button">Rozpocznij rundę</button>
        <button class="button secondary" data-action="reshuffle" type="button">Losuj ponownie</button>
      </div>
    </section>
  `;
  document.querySelectorAll("[data-player]").forEach((card) => {
    card.addEventListener("click", () => {
      const playerIndex = Number(card.dataset.player);
      if (game.players[playerIndex].checked) {
        showToast("Nie wolno podglądać ;)");
        return;
      }
      game.currentRevealIndex = playerIndex;
      game.revealFlipped = false;
      game.revealReady = false;
      setView("reveal");
    });
  });
  document.querySelector('[data-action="start-round"]').addEventListener("click", () => {
    game.paused = false;
    setView("round");
  });
  document.querySelector('[data-action="reshuffle"]').addEventListener("click", reshuffleGame);
}

function reshuffleGame() {
  if (!game) return setView("settings", false);
  startGame({ keepPreferences: true });
  showToast("Wylosowano nowe miejsce i nowego szpiega.");
}

function renderReveal() {
  if (!game || game.currentRevealIndex === null) return setView("cards", false);
  const player = game.players[game.currentRevealIndex];
  const isSpy = game.currentRevealIndex === game.spyIndex;
  screenTitle.textContent = player.name;
  if (!game.revealReady) {
    app.innerHTML = html`
      <section class="screen active handoff-screen">
        <div class="handoff-dossier">
          <span class="handoff-stamp">Tajne</span>
          <p>Przekaż telefon</p>
          <h2>${escapeHtml(player.name)}</h2>
          <small>Gdy gracz jest gotowy, niech dotknie ekranu i odbierze swoją kartę.</small>
          <button class="button handoff-button" data-action="ready-reveal" type="button">Odbierz kartę</button>
        </div>
      </section>
    `;
    document.querySelector('[data-action="ready-reveal"]').addEventListener("click", () => {
      game.revealReady = true;
      renderReveal();
    });
    return;
  }
  app.innerHTML = html`
    <section class="screen active reveal-screen">
      <div class="flip-stage">
        <div class="flip-card ${isSpy ? "spy-card" : "place-card"} ${game.revealFlipped ? "is-flipped" : ""}" role="button" tabindex="0" aria-label="${game.revealFlipped ? "Ukryj kartę" : "Odkryj rolę"}">
          <div class="flip-face flip-back" aria-hidden="true">
            <span class="reveal-back-name">${escapeHtml(player.name)}</span>
          </div>
          <div class="flip-face flip-front">
            <div class="reveal-role-card ${isSpy ? "spy" : "agent"}">
              ${isSpy ? `
                
              ` : `
                <span class="reveal-location">${escapeHtml(game.place)}</span>
              `}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
  const completeReveal = () => {
    const flipCard = document.querySelector(".flip-card");
    flipCard?.classList.add("is-hiding");
    game.players[game.currentRevealIndex].checked = true;
    game.currentRevealIndex = null;
    game.revealFlipped = false;
    game.revealReady = false;
    window.setTimeout(() => setView("cards"), 180);
  };
  const toggleReveal = () => {
    const flipCard = document.querySelector(".flip-card");
    if (!game.revealFlipped) {
      game.revealFlipped = true;
      flipCard?.classList.add("is-flipped");
      flipCard?.setAttribute("aria-label", "Ukryj kartę");
      return;
    }
    completeReveal();
  };
  document.querySelector(".flip-card")?.addEventListener("click", toggleReveal);
  document.querySelector(".flip-card")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleReveal();
    }
  });
}

function renderRound() {
  if (!game) return setView("settings", false);
  screenTitle.textContent = "Runda";
  const progress = getRoundProgress();
  app.innerHTML = html`
    <section class="screen active round-screen">
      <div class="round-board">
        <div class="round-file-stamp">Centrum operacyjne</div>
        <p class="round-dossier">Dossier nr.<br><strong>847-AC</strong></p>
        <div class="round-layout">
          <aside class="round-timer-panel">
            <h2>Czas rundy</h2>
            <div class="timer-ring ${game.remainingSeconds <= 30 && !game.paused ? "urgent" : ""}" style="--progress:${progress}">
              <div>
                <span class="timer" id="timer">${formatTime(game.remainingSeconds)}</span>
                <small>${game.paused ? "pauza" : "pozostało"}</small>
              </div>
            </div>
          </aside>
          <div class="round-command-panel">
            <div class="round-brief">
              <h2>Rozmowa trwa</h2>
              <p>Zadawajcie pytania, obserwujcie odpowiedzi i nie zdradzajcie miejsca wprost.</p>
            </div>
            <div class="question-card ${game.question ? "has-question" : ""}">
              <span class="card-mark">?</span>
              <div>
                <strong>Pytanie pomocnicze</strong>
                <p>${game.question ? escapeHtml(game.question) : "Wylosuj pytanie pomocnicze, jeśli rozmowa potrzebuje iskry."}</p>
              </div>
            </div>
            <div class="round-actions">
              <button class="button secondary" data-action="pause" ${game.paused ? "disabled" : ""} type="button">Pauza</button>
              <button class="button secondary" data-action="resume" ${game.paused ? "" : "disabled"} type="button">Wznów</button>
              <button class="button secondary" data-action="question" type="button">Losowe pytanie pomocnicze</button>
              <button class="button danger" data-action="end-round" type="button">Zakończ rundę</button>
            </div>
          </div>
        </div>
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
    if (ring) {
      ring.style.setProperty("--progress", getRoundProgress());
      ring.classList.toggle("urgent", game.remainingSeconds <= 30 && !game.paused);
    }
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
  const selectedPlayer = game.selectedVote === null ? "" : game.players[game.selectedVote].name;
  app.innerHTML = html`
    <section class="screen active panel card-table-screen vote-screen">
      <h2>Kto według was jest szpiegiem?</h2>
      <p class="subtitle">Najpierw wskażcie osobę, potem potwierdźcie wybór.</p>
      <div class="vote-grid">
        ${game.players.map((player, index) => `
          <button class="player-card ${game.selectedVote === index ? "selected" : ""}" data-vote="${index}" type="button">
            <strong>${escapeHtml(player.name)}</strong>
            <span class="card-label">${game.selectedVote === index ? "Wybrany typ" : "Wskaż tę osobę"}</span>
          </button>
        `).join("")}
      </div>
      <div class="status-row vote-confirm ${game.selectedVote === null ? "hidden" : ""}">
        <strong>Wybrany typ: ${escapeHtml(selectedPlayer)}</strong>
        <span>Możecie jeszcze zmienić wybór przed potwierdzeniem.</span>
      </div>
      <div class="actions">
        <button class="button" data-action="confirm-vote" ${game.selectedVote === null ? "disabled" : ""} type="button">Potwierdź głosowanie</button>
        <button class="button secondary" data-action="back-to-round" type="button">Wróć do rundy</button>
      </div>
    </section>
  `;
  document.querySelectorAll("[data-vote]").forEach((button) => {
    button.addEventListener("click", () => {
      game.selectedVote = Number(button.dataset.vote);
      renderVote();
    });
  });
  document.querySelector('[data-action="confirm-vote"]').addEventListener("click", confirmVote);
  document.querySelector('[data-action="back-to-round"]').addEventListener("click", () => setView("round"));
}

function confirmVote() {
  if (!game || game.selectedVote === null) return showToast("Najpierw wybierzcie podejrzanego.");
  if (game.selectedVote === game.spyIndex) {
    game.spyGuess = "";
    setView("result");
  } else {
    setView("spyGuess");
  }
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

function drawPlaceWithoutRepeat(places, signature) {
  const usedPlaces = loadUsedPlaces();
  const alreadyUsed = new Set(usedPlaces[signature] || []);
  let available = places.filter((place) => !alreadyUsed.has(place));
  if (!available.length) {
    available = [...places];
    usedPlaces[signature] = [];
  }
  const place = draw(available);
  usedPlaces[signature] = unique([...(usedPlaces[signature] || []), place])
    .filter((item) => places.includes(item));
  saveUsedPlaces(usedPlaces);
  return place;
}

function getPlacePoolSignature(places) {
  return unique(places).sort((a, b) => a.localeCompare(b, "pl")).join("|");
}

function loadUsedPlaces() {
  try {
    const saved = JSON.parse(localStorage.getItem(USED_PLACES_KEY)) || {};
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}

function saveUsedPlaces(usedPlaces) {
  localStorage.setItem(USED_PLACES_KEY, JSON.stringify(usedPlaces));
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
    navigator.serviceWorker.register("./service-worker.js")
      .then((registration) => registration.update())
      .catch(() => {
        console.info("Service worker nie został uruchomiony.");
      });
  });

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (sessionStorage.getItem("szpieg-sw-refresh") === "done") return;
    sessionStorage.setItem("szpieg-sw-refresh", "done");
    window.location.reload();
  });
}

render();
