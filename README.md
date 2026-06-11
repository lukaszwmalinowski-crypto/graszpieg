# Szpieg

„Szpieg” to lekka aplikacja PWA do gry dedukcyjnej w stylu Spyfall. Działa bez backendu, bez logowania i bez bazy danych. Wszystkie miejsca są zapisane lokalnie w pliku `places.js`, a bieżące role istnieją tylko w pamięci aplikacji.

Gra pozwala wybrać kilka kategorii miejsc naraz, dodać własną listę miejsc, przeprowadzić głosowanie oraz dać szpiegowi ostatnią szansę na odgadnięcie lokalizacji.

## Uruchomienie lokalne

Najprościej otworzyć plik `index.html` w przeglądarce. Dla pełnego testu PWA i service workera uruchom lokalny serwer w folderze projektu, na przykład:

```bash
python3 -m http.server 8080
```

Potem wejdź na `http://localhost:8080`.

## Publikacja na GitHub Pages

1. Utwórz nowe repozytorium na GitHubie.
2. Wrzuć do niego wszystkie pliki z tego folderu.
3. W repozytorium przejdź do `Settings` -> `Pages`.
4. Wybierz gałąź, zwykle `main`, oraz folder `/root`.
5. Zapisz ustawienia i poczekaj, aż GitHub opublikuje stronę.

Aplikacja używa ścieżek względnych, więc działa także wtedy, gdy repozytorium jest publikowane w podfolderze GitHub Pages.

## Offline

Po pierwszym uruchomieniu service worker zapisuje pliki aplikacji w cache. Dzięki temu gra może działać offline przy kolejnych wejściach na stronę.

## Struktura plików

```text
index.html
styles.css
app.js
places.js
manifest.json
service-worker.js
icons/icon.svg
icons/icon-192.png
icons/icon-512.png
icons/icon-1024.png
README.md
```

## Edycja listy miejsc

Miejsca znajdują się w `places.js` w obiekcie `PLACE_SETS`. Każda kategoria ma etykietę `label` oraz tablicę `places`. Możesz dopisywać własne hasła do istniejących kategorii albo dodać nową kategorię w tym samym formacie.

## Ikony

Projekt zawiera gotowe ikony PWA w plikach `icons/icon-192.png` i `icons/icon-512.png`. Plik `icons/icon-1024.png` jest większym źródłem jakościowym, a `icons/icon.svg` zostaje jako awaryjny fallback.

Projekt nie wymaga instalacji zależności, frameworków ani serwera aplikacyjnego.
