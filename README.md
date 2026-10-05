# Weenamp

Odtwarzacz oparty na Webamp 2.3.1, z oryginalnym wskazanym skinem `base-2.91.wsz`. Bez zewnętrznych fontów ani CDN podczas uruchamiania.

## Uruchomienie

`python3 -m http.server 5173` w katalogu repozytorium, następnie http://localhost:5173.

## Obsługa

Dodaj pliki przyciskiem lub przeciągnij je do playlisty. Klasyczne okna playera, equalizera i playlisty można przesuwać, łączyć i zamykać. Odtwarzanie, przewijanie, głośność, balans, EQ, shuffle i repeat obsługuje Webamp. Menu Winampa pozwala wczytać inne skiny. Skala domyślna 1× odpowiada oryginałowi.

Muzyka pozostaje lokalnie. Obsługiwane kodeki zależą od przeglądarki. Po odświeżeniu trzeba ponownie wybrać pliki. Brak obsługi natywnych pluginów DLL.

## Źródła

- Webamp: https://github.com/captbaritone/webamp — MIT; lokalny bundle `vendor/webamp.bundle.min.mjs`.
- Skin wybrany przez użytkownika: https://skins.webamp.org/skin/5e4f10275dcb1fb211d4a8b4f1bda236/base-2.91.wsz/ — prawa do skina należą do jego autorów; licencja MIT Webampa nie obejmuje skina.
