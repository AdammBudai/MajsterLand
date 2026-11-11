# Majster Land

Statická stránka s produktmi Majster Land v slovenčine, češtine a poľštine. Každý produkt má tlačidlo **Kúpiť na Allegre**, ktoré vedie na ponuku na Allegro podľa jazyka (allegro.sk / allegro.cz / allegro.pl).

## Štruktúra

```
index.html              stránka
css/style.css           vzhľad
js/app.js               filter, karty, detail produktu, prepínanie jazyka
js/i18n.js              texty stránky v SK / CZ / PL
data/produkty.json      produkty a kategórie (tu sa upravuje)
data/produkty.js        vygenerované z JSON-u, needitovať ručne
img/produkty/<id>.jpg   fotky produktov (id = offerId z Allegra)
img/hero.jpg            pozadie úvodu
scripts/build-data.py   prevod JSON -> JS + kontrola obrázkov a kategórií
```

## Ako pridať alebo upraviť produkt

1. V `data/produkty.json` pridaj/uprav záznam (`id`, `kategoria`, `cena`, `obrazok`, `allegro`, `nazov`, `kratky`, `popis`, `parametre`). Textové polia a odkazy majú verziu pre každý jazyk: `{"sk": …, "cs": …, "pl": …}`.
2. Fotku ulož ako `img/produkty/<id>.jpg`.
3. Spusti `python scripts/build-data.py` – ak niekde chýba preklad alebo obrázok, vypíše to.
4. Commit + push.

Stránka nič nepotrebuje zostavovať, stačí otvoriť `index.html` alebo zapnúť GitHub Pages (Settings → Pages → branch `main`, priečinok `/`).

## Jazyky

Jazyk sa vyberá v hlavičke. Pri prvej návšteve sa nastaví podľa jazyka prehliadača a voľba sa zapamätá. Dá sa poslať aj priamo odkaz: `?lang=sk`, `?lang=cs`, `?lang=pl`.

Ceny na stránke sú v eurách. Na allegro.cz a allegro.pl si Allegro ceny prepočíta na koruny a zloté.
