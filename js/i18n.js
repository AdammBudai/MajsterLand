// Texty rozhrania v piatich jazykoch. Texty produktov sú v data/produkty.json.
// {email} a {profil} sa pri vykreslení nahradia skutočnou adresou.
window.I18N = {
  email: "info@majsterland.com",

  jazyky: [
    { id: "sk", kod: "SK", nazov: "Slovenčina", html: "sk", locale: "sk-SK" },
    { id: "cs", kod: "CZ", nazov: "Čeština", html: "cs", locale: "cs-CZ" },
    { id: "pl", kod: "PL", nazov: "Polski", html: "pl", locale: "pl-PL" },
    { id: "hu", kod: "HU", nazov: "Magyar", html: "hu", locale: "hu-HU" },
    { id: "en", kod: "EN", nazov: "English", html: "en", locale: "en-GB" }
  ],

  profil: {
    sk: "https://allegro.sk/pouzivatel/Majster_Land",
    cs: "https://allegro.cz/uzivatel/Majster_Land",
    pl: "https://allegro.pl/uzytkownik/Majster_Land",
    hu: "https://allegro.hu/felhasznalo/Majster_Land",
    en: "https://allegro.sk/pouzivatel/Majster_Land"
  },

  texty: {
    "meta.title": {
      sk: "Majster Land – komponenty a prípravky pre obkladačov",
      cs: "Majster Land – komponenty a přípravky pro obkladače",
      pl: "Majster Land – komponenty i przyrządy dla glazurników",
      hu: "Majster Land – alkatrészek és segédeszközök burkolóknak",
      en: "Majster Land – components and jigs for tilers"
    },
    "meta.desc": {
      sk: "Skryté podobkladové zásuvky, vypínače a ventilátory, šablóny na vŕtanie, držiaky na 45° skosenie. Vyrobené pre obkladačov, predaj cez Allegro.",
      cs: "Skryté zásuvky, vypínače a ventilátory pod obklad, šablony na vrtání, držáky na zkosení 45°. Vyrobeno pro obkladače, prodej přes Allegro.",
      pl: "Ukryte gniazdka, włączniki i wentylatory pod płytki, szablony do wiercenia, uchwyty do szlifu 45°. Zrobione dla glazurników, sprzedaż przez Allegro.",
      hu: "Rejtett konnektorok, kapcsolók és ventilátorok burkolat alá, fúrósablonok, 45°-os gérelő tartók. Burkolóknak készült, értékesítés az Allegrón.",
      en: "Hidden under-tile sockets, switches and fans, drilling templates, 45° mitring holders. Made for tilers, sold on Allegro."
    },
    "lang.label": { sk: "Jazyk", cs: "Jazyk", pl: "Język", hu: "Nyelv", en: "Language" },
    "menu": { sk: "Menu", cs: "Menu", pl: "Menu", hu: "Menü", en: "Menu" },

    "nav.produkty": { sk: "Produkty", cs: "Produkty", pl: "Produkty", hu: "Termékek", en: "Products" },
    "nav.dielna": { sk: "O dielni", cs: "O dílně", pl: "O warsztacie", hu: "A műhelyről", en: "Workshop" },
    "nav.objednavka": { sk: "Ako objednať", cs: "Jak objednat", pl: "Jak zamówić", hu: "Rendelés", en: "How to order" },
    "nav.objednat": { sk: "Objednať", cs: "Objednat", pl: "Zamów", hu: "Rendelés", en: "Order" },

    "hero.eyebrow": { sk: "Vyrobené pre remeslo", cs: "Vyrobeno pro řemeslo", pl: "Zrobione dla fachowców", hu: "Szakembereknek készült", en: "Made for the trade" },
    "hero.title": {
      sk: "Komponenty, ktoré <em>obkladač</em> naozaj použije",
      cs: "Komponenty, které <em>obkladač</em> opravdu použije",
      pl: "Komponenty, których <em>glazurnik</em> naprawdę użyje",
      hu: "Alkatrészek, amiket a <em>burkoló</em> tényleg használ",
      en: "Parts a <em>tiler</em> will actually use"
    },
    "hero.lead": {
      sk: "Skryté podobkladové zásuvky a vypínače, šablóny na presné vŕtanie, držiaky na 45° skosenie. Bez marketingu – len veci, ktoré fungujú na stavbe.",
      cs: "Skryté zásuvky a vypínače pod obklad, šablony na přesné vrtání, držáky na zkosení 45°. Bez marketingu – jen věci, které fungují na stavbě.",
      pl: "Ukryte gniazdka i włączniki pod płytki, szablony do precyzyjnego wiercenia, uchwyty do szlifu 45°. Bez marketingu – tylko rzeczy, które sprawdzają się na budowie.",
      hu: "Rejtett konnektorok és kapcsolók a burkolat alá, sablonok a pontos fúráshoz, tartók 45°-os géreléshez. Marketing nélkül – csak olyan dolgok, amik az építkezésen beválnak.",
      en: "Hidden under-tile sockets and switches, templates for accurate drilling, holders for 45° mitres. No marketing – just things that work on site."
    },
    "hero.cta1": { sk: "Pozrieť sortiment", cs: "Prohlédnout sortiment", pl: "Zobacz asortyment", hu: "Termékek", en: "See the range" },
    "hero.cta2": { sk: "Napíš mi", cs: "Napiš mi", pl: "Napisz do mnie", hu: "Írj nekem", en: "Get in touch" },

    "intro.title": { sk: "Čo tu nájdeš", cs: "Co tu najdeš", pl: "Co tu znajdziesz", hu: "Mit találsz itt", en: "What you'll find here" },
    "intro.p1": {
      sk: "Predávam veci, ktoré obkladačovi ušetria čas alebo mu umožnia spraviť čistejšiu robotu. Zásuvku, vypínač, ventilátor aj splachovanie schováš pod dlaždicu. So šablónou vyvŕtaš otvory na prvý raz. Prípravky podržia dlažbu v 45° alebo 90°, kým lepidlo nevytvrdne.",
      cs: "Prodávám věci, které obkladači ušetří čas nebo mu umožní udělat čistší práci. Zásuvku, vypínač, ventilátor i splachování schováš pod dlaždici. Se šablonou vyvrtáš otvory napoprvé. Přípravky podrží dlažbu v 45° nebo 90°, dokud lepidlo nevytvrdne.",
      pl: "Sprzedaję rzeczy, które oszczędzają glazurnikowi czas albo pozwalają zrobić czystszą robotę. Gniazdko, włącznik, wentylator i przycisk spłukiwania schowasz pod płytką. Z szablonem wywiercisz otwory za pierwszym razem. Przyrządy przytrzymają płytki pod kątem 45° lub 90°, dopóki klej nie zwiąże.",
      hu: "Olyan dolgokat árulok, amikkel a burkoló időt spórol, vagy tisztább munkát végez. A konnektort, a kapcsolót, a ventilátort és az öblítőgombot is elrejted a csempe alá. A sablonnal elsőre jó helyre fúrsz. A segédeszközök 45°-ban vagy 90°-ban tartják a lapot, amíg a ragasztó meg nem köt.",
      en: "I sell things that save a tiler time or let them do a cleaner job. Sockets, switches, fans and flush buttons go under the tile. With a template you drill the holes right first time. The jigs hold tiles at 45° or 90° until the adhesive sets."
    },
    "intro.p2": {
      sk: "Väčšinu dielov tlačím na 3D tlačiarni z PETG, ktorý vydrží vlhko aj teplo v kúpeľni.",
      cs: "Většinu dílů tisknu na 3D tiskárně z PETG, který vydrží vlhko i teplo v koupelně.",
      pl: "Większość części drukuję na drukarce 3D z PETG, który wytrzymuje wilgoć i ciepło w łazience.",
      hu: "A legtöbb alkatrészt 3D nyomtatón készítem PETG-ből, ami bírja a fürdőszobai párát és meleget.",
      en: "Most parts are 3D printed in PETG, which handles bathroom damp and heat."
    },
    "fact.produkty": { sk: "produktov v ponuke", cs: "produktů v nabídce", pl: "produktów w ofercie", hu: "termék a kínálatban", en: "products in the range" },
    "fact.sk": { sk: "odoslanie zo Slovenska", cs: "odeslání ze Slovenska", pl: "wysyłka ze Słowacji", hu: "szállítás Szlovákiából", en: "shipped from Slovakia" },
    "fact.petg": { sk: "3D tlač, ktorá vydrží vlhko", cs: "3D tisk, který vydrží vlhko", pl: "druk 3D odporny na wilgoć", hu: "páraálló 3D nyomtatás", en: "3D printing that handles damp" },

    "shop.title": { sk: "Sortiment", cs: "Sortiment", pl: "Asortyment", hu: "Termékek", en: "Products" },
    "shop.filter": { sk: "Filter produktov", cs: "Filtr produktů", pl: "Filtr produktów", hu: "Termékszűrő", en: "Product filter" },
    "shop.vsetko": { sk: "Všetko", cs: "Vše", pl: "Wszystko", hu: "Mind", en: "All" },
    "shop.zobrazene": { sk: "Zobrazených", cs: "Zobrazeno", pl: "Wyświetlono", hu: "Megjelenítve", en: "Showing" },
    "shop.mena": {
      sk: "",
      cs: "Ceny jsou v eurech. Na Allegro.cz uvidíš cenu v korunách.",
      pl: "Ceny są w euro. Na Allegro.pl zobaczysz cenę w złotych.",
      hu: "Az árak euróban vannak. Az Allegro.hu-n forintban látod az árat.",
      en: "Prices are in euros. Orders go through Allegro.sk."
    },
    "kus": {
      sk: { one: "produkt", few: "produkty", other: "produktov" },
      cs: { one: "produkt", few: "produkty", other: "produktů" },
      pl: { one: "produkt", few: "produkty", many: "produktów", other: "produktów" },
      hu: { one: "termék", other: "termék" },
      en: { one: "product", other: "products" }
    },

    "card.detail": { sk: "Detail →", cs: "Detail →", pl: "Szczegóły →", hu: "Részletek →", en: "Details →" },
    "card.detailAria": { sk: "Detail", cs: "Detail", pl: "Szczegóły", hu: "Részletek", en: "Details" },
    "buy": { sk: "Kúpiť na Allegre", cs: "Koupit na Allegru", pl: "Kup na Allegro", hu: "Megveszem az Allegrón", en: "Buy on Allegro" },
    "close": { sk: "Zavrieť", cs: "Zavřít", pl: "Zamknij", hu: "Bezárás", en: "Close" },

    "dielna.eyebrow": { sk: "O dielni", cs: "O dílně", pl: "O warsztacie", hu: "A műhelyről", en: "The workshop" },
    "dielna.title": { sk: "Navrhnuté pri práci, nie pri stole", cs: "Navrženo při práci, ne u stolu", pl: "Projektowane przy pracy, nie przy biurku", hu: "Munka közben tervezve, nem íróasztalnál", en: "Designed on the job, not at a desk" },
    "dielna.alt": { sk: "Roh z dlažby lepený v 90° držiaku", cs: "Roh z dlažby lepený v 90° držáku", pl: "Narożnik z płytek klejony w uchwycie 90°", hu: "90°-os tartóban ragasztott burkolatsarok", en: "Tile corner glued in a 90° holder" },
    "dielna.p1": {
      sk: "Robím obklady a dlažby. Veľa vecí, ktoré na stavbe potrebujem, sa kúpiť nedá, alebo nesedia tak, ako by mali. Tak si ich kreslím a tlačím sám. Čo obstojí v mojej vlastnej robote, ide do predaja.",
      cs: "Dělám obklady a dlažby. Spoustu věcí, které na stavbě potřebuju, se koupit nedá, nebo nesedí tak, jak by měly. Tak si je kreslím a tisknu sám. Co obstojí v mé vlastní práci, jde do prodeje.",
      pl: "Układam płytki. Wielu rzeczy, których potrzebuję na budowie, nie da się kupić albo nie pasują tak, jak powinny. Więc projektuję je i drukuję sam. Co sprawdzi się w mojej pracy, trafia do sprzedaży.",
      hu: "Burkolással foglalkozom. Sok mindent, amire az építkezésen szükségem van, nem lehet megvenni, vagy nem illeszkedik úgy, ahogy kellene. Ezért magam tervezem és nyomtatom ki. Ami beválik a saját munkámban, az kerül eladásra.",
      en: "I'm a tiler. A lot of what I need on site either can't be bought or doesn't fit the way it should. So I design and print it myself. What holds up in my own work goes on sale."
    },
    "dielna.p2": {
      sk: "Ak máš otázku k niektorému produktu, napíš mi na <a href=\"mailto:{email}\">{email}</a>.",
      cs: "Pokud máš dotaz k některému produktu, napiš mi na <a href=\"mailto:{email}\">{email}</a>.",
      pl: "Jeśli masz pytanie o któryś produkt, napisz na <a href=\"mailto:{email}\">{email}</a>.",
      hu: "Ha kérdésed van valamelyik termékkel kapcsolatban, írj a <a href=\"mailto:{email}\">{email}</a> címre.",
      en: "If you have a question about any product, email me at <a href=\"mailto:{email}\">{email}</a>."
    },
    "dielna.c1": { sk: "Skúšané na reálnych stavbách", cs: "Vyzkoušeno na skutečných stavbách", pl: "Sprawdzone na prawdziwych budowach", hu: "Valódi építkezéseken kipróbálva", en: "Tested on real jobs" },
    "dielna.c2": { sk: "Zásuvky a vypínače so Schneider Asfora", cs: "Zásuvky a vypínače se Schneider Asfora", pl: "Gniazdka i włączniki z Schneider Asfora", hu: "Konnektorok és kapcsolók Schneider Asfora szerelvénnyel", en: "Sockets and switches with Schneider Asfora" },
    "dielna.c3": { sk: "Tlačidlo pasuje na Geberit, TECE, Viega a ďalšie", cs: "Tlačítko pasuje na Geberit, TECE, Viega a další", pl: "Przycisk pasuje do Geberit, TECE, Viega i innych", hu: "A gomb illik Geberithez, TECE-hez, Viegához és másokhoz", en: "Flush button fits Geberit, TECE, Viega and more" },

    "how.title": { sk: "Ako objednať", cs: "Jak objednat", pl: "Jak zamówić", hu: "Hogyan rendelj", en: "How to order" },
    "how.1t": { sk: "Vyber produkt", cs: "Vyber produkt", pl: "Wybierz produkt", hu: "Válassz terméket", en: "Pick a product" },
    "how.1p": { sk: "Pozri si sortiment a otvor detail, ak potrebuješ rozmery.", cs: "Projdi sortiment a otevři detail, pokud potřebuješ rozměry.", pl: "Przejrzyj asortyment i otwórz szczegóły, jeśli potrzebujesz wymiarów.", hu: "Nézd át a termékeket, és nyisd meg a részleteket, ha méretek kellenek.", en: "Browse the range and open the details if you need sizes." },
    "how.2t": { sk: "Klikni na Kúpiť", cs: "Klikni na Koupit", pl: "Kliknij Kup", hu: "Kattints a Megveszem gombra", en: "Click Buy" },
    "how.2p": { sk: "Otvorí sa ponuka na Allegre. Tam zaplatíš a vyberieš doručenie.", cs: "Otevře se nabídka na Allegru. Tam zaplatíš a vybereš doručení.", pl: "Otworzy się oferta na Allegro. Tam zapłacisz i wybierzesz dostawę.", hu: "Megnyílik az ajánlat az Allegrón. Ott fizetsz és választasz szállítást.", en: "The listing opens on Allegro. You pay and choose delivery there." },
    "how.3t": { sk: "Pošlem ti to", cs: "Pošlu ti to", pl: "Wyślę ci to", hu: "Elküldöm", en: "I ship it" },
    "how.3p": { sk: "Balík odchádza zo Slovenska. Stav objednávky sleduješ na Allegre.", cs: "Balík odchází ze Slovenska. Stav objednávky sleduješ na Allegru.", pl: "Paczka wychodzi ze Słowacji. Status zamówienia śledzisz na Allegro.", hu: "A csomag Szlovákiából indul. A rendelés állapotát az Allegrón követed.", en: "The parcel leaves from Slovakia. You track the order on Allegro." },

    "kontakt.title": { sk: "Máš otázku k produktu?", cs: "Máš dotaz k produktu?", pl: "Masz pytanie o produkt?", hu: "Kérdésed van egy termékről?", en: "Question about a product?" },
    "kontakt.p": {
      sk: "Napíš mi e-mail a odpíšem čo najskôr.",
      cs: "Napiš mi e-mail a odpovím co nejdřív.",
      pl: "Napisz e-mail, odpowiem jak najszybciej.",
      hu: "Írj e-mailt, és amint tudok, válaszolok.",
      en: "Send me an email and I'll reply as soon as I can."
    },

    "foot.text": {
      sk: "Komponenty a prípravky pre obkladačov. Predaj cez <a href=\"{profil}\" target=\"_blank\" rel=\"noopener\">Allegro</a>. Kontakt: <a href=\"mailto:{email}\">{email}</a>",
      cs: "Komponenty a přípravky pro obkladače. Prodej přes <a href=\"{profil}\" target=\"_blank\" rel=\"noopener\">Allegro</a>. Kontakt: <a href=\"mailto:{email}\">{email}</a>",
      pl: "Komponenty i przyrządy dla glazurników. Sprzedaż przez <a href=\"{profil}\" target=\"_blank\" rel=\"noopener\">Allegro</a>. Kontakt: <a href=\"mailto:{email}\">{email}</a>",
      hu: "Alkatrészek és segédeszközök burkolóknak. Értékesítés az <a href=\"{profil}\" target=\"_blank\" rel=\"noopener\">Allegrón</a>. Kapcsolat: <a href=\"mailto:{email}\">{email}</a>",
      en: "Components and jigs for tilers. Sold on <a href=\"{profil}\" target=\"_blank\" rel=\"noopener\">Allegro</a>. Contact: <a href=\"mailto:{email}\">{email}</a>"
    }
  }
};
