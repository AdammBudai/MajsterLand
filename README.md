# Majster Land

Statická stránka s produktmi Majster Land. Každý produkt má tlačidlo **Kúpiť na Allegre**, ktoré vedie na ponuku na [allegro.sk/pouzivatel/Majster_Land](https://allegro.sk/pouzivatel/Majster_Land).

## Štruktúra

```
index.html              stránka
css/style.css           vzhľad
js/app.js               filter, karty, detail produktu
data/produkty.json      produkty a kategórie (tu sa upravuje)
data/produkty.js        vygenerované z JSON-u, needitovať ručne
img/produkty/<id>.jpg   fotky produktov (id = offerId z Allegra)
img/hero.jpg            pozadie úvodu
scripts/build-data.py   prevod JSON -> JS + kontrola obrázkov a kategórií
```

## Ako pridať alebo upraviť produkt

1. V `data/produkty.json` pridaj/uprav záznam (`id`, `nazov`, `kategoria`, `cena`, `allegro`, `obrazok`, `kratky`, `popis`, `parametre`).
2. Fotku ulož ako `img/produkty/<id>.jpg`.
3. Spusti `python scripts/build-data.py`.
4. Commit + push.

Stránka nič nepotrebuje zostavovať, stačí otvoriť `index.html` alebo zapnúť GitHub Pages (Settings → Pages → branch `main`, priečinok `/`).
