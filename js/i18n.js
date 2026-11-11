// Texty rozhrania v troch jazykoch. Texty produktov sú v data/produkty.json.
window.I18N = {
  jazyky: [
    { id: "sk", kod: "SK", nazov: "Slovenčina", html: "sk" },
    { id: "cs", kod: "CZ", nazov: "Čeština", html: "cs" },
    { id: "pl", kod: "PL", nazov: "Polski", html: "pl" }
  ],

  profil: {
    sk: "https://allegro.sk/pouzivatel/Majster_Land",
    cs: "https://allegro.cz/uzivatel/Majster_Land",
    pl: "https://allegro.pl/uzytkownik/Majster_Land"
  },

  texty: {
    "meta.title": {
      sk: "Majster Land – komponenty a prípravky pre obkladačov",
      cs: "Majster Land – komponenty a přípravky pro obkladače",
      pl: "Majster Land – komponenty i przyrządy dla glazurników"
    },
    "meta.desc": {
      sk: "Skryté podobkladové zásuvky, vypínače a ventilátory, šablóny na vŕtanie, držiaky na 45° skosenie. Vyrobené pre obkladačov, predaj cez Allegro.",
      cs: "Skryté zásuvky, vypínače a ventilátory pod obklad, šablony na vrtání, držáky na zkosení 45°. Vyrobeno pro obkladače, prodej přes Allegro.",
      pl: "Ukryte gniazdka, włączniki i wentylatory pod płytki, szablony do wiercenia, uchwyty do szlifu 45°. Zrobione dla glazurników, sprzedaż przez Allegro."
    },
    "lang.label": { sk: "Jazyk", cs: "Jazyk", pl: "Język" },
    "menu": { sk: "Menu", cs: "Menu", pl: "Menu" },

    "nav.produkty": { sk: "Produkty", cs: "Produkty", pl: "Produkty" },
    "nav.dielna": { sk: "O dielni", cs: "O dílně", pl: "O warsztacie" },
    "nav.objednavka": { sk: "Ako objednať", cs: "Jak objednat", pl: "Jak zamówić" },
    "nav.objednat": { sk: "Objednať", cs: "Objednat", pl: "Zamów" },

    "hero.eyebrow": { sk: "Vyrobené pre remeslo", cs: "Vyrobeno pro řemeslo", pl: "Zrobione dla fachowców" },
    "hero.title": {
      sk: "Komponenty, ktoré <em>obkladač</em> naozaj použije",
      cs: "Komponenty, které <em>obkladač</em> opravdu použije",
      pl: "Komponenty, których <em>glazurnik</em> naprawdę użyje"
    },
    "hero.lead": {
      sk: "Skryté podobkladové zásuvky a vypínače, šablóny na presné vŕtanie, držiaky na 45° skosenie. Bez marketingu – len veci, ktoré fungujú na stavbe.",
      cs: "Skryté zásuvky a vypínače pod obklad, šablony na přesné vrtání, držáky na zkosení 45°. Bez marketingu – jen věci, které fungují na stavbě.",
      pl: "Ukryte gniazdka i włączniki pod płytki, szablony do precyzyjnego wiercenia, uchwyty do szlifu 45°. Bez marketingu – tylko rzeczy, które sprawdzają się na budowie."
    },
    "hero.cta1": { sk: "Pozrieť sortiment", cs: "Prohlédnout sortiment", pl: "Zobacz asortyment" },
    "hero.cta2": { sk: "Napíš mi", cs: "Napiš mi", pl: "Napisz do mnie" },

    "intro.title": { sk: "Čo tu nájdeš", cs: "Co tu najdeš", pl: "Co tu znajdziesz" },
    "intro.p1": {
      sk: "Predávam veci, ktoré obkladačovi ušetria čas alebo mu umožnia spraviť čistejšiu robotu. Zásuvku, vypínač, ventilátor aj splachovanie schováš pod dlaždicu. So šablónou vyvŕtaš otvory na prvý raz. Prípravky podržia dlažbu v 45° alebo 90°, kým lepidlo nevytvrdne.",
      cs: "Prodávám věci, které obkladači ušetří čas nebo mu umožní udělat čistší práci. Zásuvku, vypínač, ventilátor i splachování schováš pod dlaždici. Se šablonou vyvrtáš otvory napoprvé. Přípravky podrží dlažbu v 45° nebo 90°, dokud lepidlo nevytvrdne.",
      pl: "Sprzedaję rzeczy, które oszczędzają glazurnikowi czas albo pozwalają zrobić czystszą robotę. Gniazdko, włącznik, wentylator i przycisk spłukiwania schowasz pod płytką. Z szablonem wywiercisz otwory za pierwszym razem. Przyrządy przytrzymają płytki pod kątem 45° lub 90°, dopóki klej nie zwiąże."
    },
    "intro.p2": {
      sk: "Väčšinu dielov tlačím na 3D tlačiarni z PETG, ktorý vydrží vlhko aj teplo v kúpeľni. Doplnky do kúpeľne robím ručne z keramickej dlažby.",
      cs: "Většinu dílů tisknu na 3D tiskárně z PETG, který vydrží vlhko i teplo v koupelně. Koupelnové doplňky dělám ručně z keramické dlažby.",
      pl: "Większość części drukuję na drukarce 3D z PETG, który wytrzymuje wilgoć i ciepło w łazience. Dodatki łazienkowe robię ręcznie z płytek ceramicznych."
    },
    "fact.produkty": { sk: "produktov v ponuke", cs: "produktů v nabídce", pl: "produktów w ofercie" },
    "fact.sk": { sk: "odoslanie zo Slovenska", cs: "odeslání ze Slovenska", pl: "wysyłka ze Słowacji" },
    "fact.petg": { sk: "3D tlač, ktorá vydrží vlhko", cs: "3D tisk, který vydrží vlhko", pl: "druk 3D odporny na wilgoć" },

    "shop.title": { sk: "Sortiment", cs: "Sortiment", pl: "Asortyment" },
    "shop.filter": { sk: "Filter produktov", cs: "Filtr produktů", pl: "Filtr produktów" },
    "shop.vsetko": { sk: "Všetko", cs: "Vše", pl: "Wszystko" },
    "shop.zobrazene": { sk: "Zobrazených", cs: "Zobrazeno", pl: "Wyświetlono" },
    "shop.mena": {
      sk: "",
      cs: "Ceny jsou v eurech. Na Allegro.cz uvidíš cenu v korunách.",
      pl: "Ceny są w euro. Na Allegro.pl zobaczysz cenę w złotych."
    },
    "kus": {
      sk: { one: "produkt", few: "produkty", other: "produktov" },
      cs: { one: "produkt", few: "produkty", other: "produktů" },
      pl: { one: "produkt", few: "produkty", many: "produktów", other: "produktów" }
    },

    "card.detail": { sk: "Detail →", cs: "Detail →", pl: "Szczegóły →" },
    "card.detailAria": { sk: "Detail", cs: "Detail", pl: "Szczegóły" },
    "buy": { sk: "Kúpiť na Allegre", cs: "Koupit na Allegru", pl: "Kup na Allegro" },
    "close": { sk: "Zavrieť", cs: "Zavřít", pl: "Zamknij" },

    "dielna.eyebrow": { sk: "O dielni", cs: "O dílně", pl: "O warsztacie" },
    "dielna.title": { sk: "Navrhnuté pri práci, nie pri stole", cs: "Navrženo při práci, ne u stolu", pl: "Projektowane przy pracy, nie przy biurku" },
    "dielna.alt": { sk: "Roh z dlažby lepený v 90° držiaku", cs: "Roh z dlažby lepený v 90° držáku", pl: "Narożnik z płytek klejony w uchwycie 90°" },
    "dielna.p1": {
      sk: "Robím obklady a dlažby. Veľa vecí, ktoré na stavbe potrebujem, sa kúpiť nedá, alebo nesedia tak, ako by mali. Tak si ich kreslím a tlačím sám. Čo obstojí v mojej vlastnej robote, ide do predaja.",
      cs: "Dělám obklady a dlažby. Spoustu věcí, které na stavbě potřebuju, se koupit nedá, nebo nesedí tak, jak by měly. Tak si je kreslím a tisknu sám. Co obstojí v mé vlastní práci, jde do prodeje.",
      pl: "Układam płytki. Wielu rzeczy, których potrzebuję na budowie, nie da się kupić albo nie pasują tak, jak powinny. Więc projektuję je i drukuję sam. Co sprawdzi się w mojej pracy, trafia do sprzedaży."
    },
    "dielna.p2": {
      sk: "Keď niečo nesedí na tvoj systém alebo potrebuješ inú farbu či rozmer, napíš. Veľa vecí viem upraviť na mieru.",
      cs: "Když něco nesedí na tvůj systém nebo potřebuješ jinou barvu či rozměr, napiš. Hodně věcí umím upravit na míru.",
      pl: "Jeśli coś nie pasuje do twojego systemu albo potrzebujesz innego koloru czy wymiaru, napisz. Wiele rzeczy mogę dopasować na wymiar."
    },
    "dielna.c1": { sk: "Skúšané na reálnych stavbách", cs: "Vyzkoušeno na skutečných stavbách", pl: "Sprawdzone na prawdziwych budowach" },
    "dielna.c2": { sk: "Farby a rozmery na objednávku", cs: "Barvy a rozměry na objednávku", pl: "Kolory i wymiary na zamówienie" },
    "dielna.c3": { sk: "Doplnky z dlažby aj z tvojej vlastnej", cs: "Doplňky z dlažby i z tvé vlastní", pl: "Dodatki z płytek, także z twoich" },

    "how.title": { sk: "Ako objednať", cs: "Jak objednat", pl: "Jak zamówić" },
    "how.1t": { sk: "Vyber produkt", cs: "Vyber produkt", pl: "Wybierz produkt" },
    "how.1p": { sk: "Pozri si sortiment a otvor detail, ak potrebuješ rozmery.", cs: "Projdi sortiment a otevři detail, pokud potřebuješ rozměry.", pl: "Przejrzyj asortyment i otwórz szczegóły, jeśli potrzebujesz wymiarów." },
    "how.2t": { sk: "Klikni na Kúpiť", cs: "Klikni na Koupit", pl: "Kliknij Kup" },
    "how.2p": { sk: "Otvorí sa ponuka na Allegre. Tam zaplatíš a vyberieš doručenie.", cs: "Otevře se nabídka na Allegru. Tam zaplatíš a vybereš doručení.", pl: "Otworzy się oferta na Allegro. Tam zapłacisz i wybierzesz dostawę." },
    "how.3t": { sk: "Pošlem ti to", cs: "Pošlu ti to", pl: "Wyślę ci to" },
    "how.3p": { sk: "Balík odchádza zo Slovenska. Veci na objednávku trvajú dlhšie.", cs: "Balík odchází ze Slovenska. Věci na objednávku trvají déle.", pl: "Paczka wychodzi ze Słowacji. Rzeczy na zamówienie trwają dłużej." },

    "kontakt.title": { sk: "Potrebuješ niečo na mieru?", cs: "Potřebuješ něco na míru?", pl: "Potrzebujesz czegoś na wymiar?" },
    "kontakt.p": {
      sk: "Napíš mi správu cez Allegro. Odpíšem, či sa to dá spraviť a za koľko.",
      cs: "Napiš mi zprávu přes Allegro. Odepíšu, jestli se to dá udělat a za kolik.",
      pl: "Napisz do mnie wiadomość przez Allegro. Odpiszę, czy da się to zrobić i za ile."
    },
    "kontakt.btn": { sk: "Môj profil na Allegre", cs: "Můj profil na Allegru", pl: "Mój profil na Allegro" },

    "foot.text": {
      sk: "Komponenty a prípravky pre obkladačov. Predaj cez <a href=\"{profil}\" target=\"_blank\" rel=\"noopener\">Allegro</a>.",
      cs: "Komponenty a přípravky pro obkladače. Prodej přes <a href=\"{profil}\" target=\"_blank\" rel=\"noopener\">Allegro</a>.",
      pl: "Komponenty i przyrządy dla glazurników. Sprzedaż przez <a href=\"{profil}\" target=\"_blank\" rel=\"noopener\">Allegro</a>."
    }
  }
};
