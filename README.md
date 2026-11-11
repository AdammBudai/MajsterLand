# Majster Land

Statická stránka s produktmi Majster Land v slovenčine, češtine, poľštine, maďarčine a angličtine. Každý produkt má tlačidlo **Kúpiť na Allegre**, ktoré vedie na ponuku na Allegro podľa jazyka (allegro.sk / allegro.cz / allegro.pl / allegro.hu; anglická verzia vedie na allegro.sk).

## Tri návrhy dizajnu

Na porovnanie bežia naživo tri verzie s rovnakými produktmi a textami:

- `/` – návrh 1, tmavý s oranžovou
- `/v2/` – návrh 2, jednoduchý svetlý katalóg
- `/v3/` – návrh 3, obkladová stena s odklápacou dlaždicou

Medzi nimi sa prepína tlačidlami 1 2 3 vľavo dole (`js/dizajny.js`). Produkty (`data/`), fotky (`img/`) a preklady (`js/i18n.js`) zdieľajú všetky tri. Keď sa vyberie finálny dizajn, presunie sa do koreňa a priečinky `v2/`, `v3/` a `js/dizajny.js` sa zmažú.

## Štruktúra

```
index.html              stránka
css/style.css           vzhľad
js/app.js               filter, karty, detail produktu, prepínanie jazyka
js/i18n.js              texty stránky v SK / CZ / PL / HU / EN a kontaktný e-mail
data/produkty.json      produkty a kategórie (tu sa upravuje)
data/produkty.js        vygenerované z JSON-u, needitovať ručne
img/produkty/<id>.jpg   fotky produktov (id = offerId z Allegra)
img/hero.jpg            pozadie úvodu
scripts/build-data.py   prevod JSON -> JS + kontrola obrázkov a kategórií
```

## Ako pridať alebo upraviť produkt

1. V `data/produkty.json` pridaj/uprav záznam (`id`, `kategoria`, `cena`, `obrazok`, `allegro`, `nazov`, `kratky`, `popis`, `parametre`). Textové polia a odkazy majú verziu pre každý jazyk: `{"sk": …, "cs": …, "pl": …, "hu": …, "en": …}`.
2. Fotku ulož ako `img/produkty/<id>.jpg`.
3. Spusti `python scripts/build-data.py` – ak niekde chýba preklad alebo obrázok, vypíše to.
4. Commit + push.

Stránka nič nepotrebuje zostavovať, stačí otvoriť `index.html` alebo zapnúť GitHub Pages (Settings → Pages → branch `main`, priečinok `/`).

## Jazyky

Jazyk sa vyberá v hlavičke. Pri prvej návšteve sa nastaví podľa jazyka prehliadača a voľba sa zapamätá. Dá sa poslať aj priamo odkaz: `?lang=sk`, `?lang=cs`, `?lang=pl`, `?lang=hu`, `?lang=en`.

Ceny na stránke sú v eurách. Na allegro.cz, allegro.pl a allegro.hu si Allegro ceny prepočíta na koruny, zloté a forinty.
