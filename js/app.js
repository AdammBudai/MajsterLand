(function () {
  "use strict";

  const data = window.MAJSTERLAND;
  const i18n = window.I18N;
  if (!data || !i18n) return;

  const kategorie = data.kategorie;
  const produkty = data.produkty;
  const JAZYKY = i18n.jazyky.map(j => j.id);

  const $ = sel => document.querySelector(sel);
  const grid = $("#grid");
  const filters = $("#filters");
  const count = $("#count");
  const cats = $("#cats");
  const langSelect = $("#lang");
  const modal = $("#modal");

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- jazyk ---------- */
  function ulozeny() {
    try { return localStorage.getItem("ml-lang"); } catch (e) { return null; }
  }
  function uloz(l) {
    try { localStorage.setItem("ml-lang", l); } catch (e) { /* súkromné okno a pod. */ }
  }
  function zistiJazyk() {
    const q = new URLSearchParams(location.search).get("lang");
    if (JAZYKY.includes(q)) return q;
    const s = ulozeny();
    if (JAZYKY.includes(s)) return s;
    for (const l of navigator.languages || [navigator.language || ""]) {
      const k = String(l).slice(0, 2).toLowerCase();
      if (JAZYKY.includes(k)) return k;
    }
    return "sk";
  }

  let lang = zistiJazyk();
  let aktivnaKat = location.hash.startsWith("#k-") ? location.hash.slice(3) : "vsetko";

  const t = key => {
    const v = i18n.texty[key];
    return v ? (v[lang] ?? v.sk) : key;
  };
  const tr = obj => (obj && typeof obj === "object" && !Array.isArray(obj)) ? (obj[lang] ?? obj.sk) : obj;
  const katNazov = id => { const k = kategorie.find(x => x.id === id); return k ? tr(k.nazov) : ""; };
  const odkaz = p => tr(p.allegro);
  const cena = n => n.toLocaleString(lang === "cs" ? "cs-CZ" : lang === "pl" ? "pl-PL" : "sk-SK",
    { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";

  const plural = new Map();
  function pocet(n) {
    if (!plural.has(lang)) plural.set(lang, new Intl.PluralRules(lang));
    const tvary = i18n.texty.kus[lang];
    return n + " " + (tvary[plural.get(lang).select(n)] || tvary.other);
  }

  /* ---------- statické texty ---------- */
  function prelozStranku() {
    const jazyk = i18n.jazyky.find(j => j.id === lang);
    document.documentElement.lang = jazyk.html;
    document.title = t("meta.title");
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = t("meta.desc");

    const profil = i18n.profil[lang];
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml).replace("{profil}", profil); });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    document.querySelectorAll("[data-i18n-alt]").forEach(el => { el.alt = t(el.dataset.i18nAlt); });
    document.querySelectorAll("[data-profil]").forEach(el => { el.href = profil; });
    $("#mena").textContent = t("shop.mena");
    langSelect.value = lang;
  }

  /* ---------- prepínač jazyka ---------- */
  // na úzkom displeji len kód (SK/CZ/PL), inak kód aj názov
  const uzky = window.matchMedia("(max-width: 600px)");
  function naplnPrepinac() {
    langSelect.innerHTML = i18n.jazyky.map(j =>
      `<option value="${j.id}" lang="${j.html}">${uzky.matches ? j.kod : `${j.kod} – ${esc(j.nazov)}`}</option>`).join("");
    langSelect.value = lang;
  }
  naplnPrepinac();
  if (uzky.addEventListener) uzky.addEventListener("change", naplnPrepinac);

  langSelect.addEventListener("change", () => {
    lang = langSelect.value;
    uloz(lang);
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
    vykresli();
  });

  /* ---------- kategórie, filter, karty ---------- */
  function vykresliKategorie() {
    cats.innerHTML = kategorie.map(k => {
      const n = produkty.filter(p => p.kategoria === k.id).length;
      return `<a href="#sortiment" class="cat" data-cat="${k.id}">
        <span class="cat__n">${n}</span>
        <h3 class="cat__title">${esc(tr(k.nazov))}</h3>
        <p class="cat__desc">${esc(tr(k.popis))}</p>
      </a>`;
    }).join("");

    const tlacidla = [{ id: "vsetko", nazov: t("shop.vsetko") }, ...kategorie.map(k => ({ id: k.id, nazov: tr(k.nazov) }))];
    filters.innerHTML = tlacidla.map(k =>
      `<button type="button" class="filter" data-cat="${k.id}" aria-pressed="false">${esc(k.nazov)}</button>`
    ).join("");
  }

  function vykresliKarty() {
    grid.innerHTML = produkty.map(p => {
      const nazov = tr(p.nazov);
      return `
      <article class="card" data-cat="${p.kategoria}">
        <button type="button" class="card__img" data-detail="${p.id}" aria-label="${esc(t("card.detailAria"))}: ${esc(nazov)}">
          <img src="${p.obrazok}" alt="${esc(nazov)}" loading="lazy" width="720" height="720">
          <span class="card__tag">${esc(katNazov(p.kategoria))}</span>
        </button>
        <div class="card__body">
          <h3 class="card__title"><button type="button" data-detail="${p.id}">${esc(nazov)}</button></h3>
          <p class="card__desc">${esc(tr(p.kratky))}</p>
          <div class="card__foot">
            <span class="card__price">${cena(p.cena)}</span>
            <button type="button" class="card__more" data-detail="${p.id}">${esc(t("card.detail"))}</button>
          </div>
          <a class="btn btn--solid btn--wide" href="${odkaz(p)}" target="_blank" rel="noopener">${esc(t("buy"))}</a>
        </div>
      </article>`;
    }).join("");
  }

  function nastavFilter(cat, scroll) {
    const vsetko = cat === "vsetko" || !kategorie.some(k => k.id === cat);
    aktivnaKat = vsetko ? "vsetko" : cat;
    let n = 0;
    grid.querySelectorAll(".card").forEach(c => {
      const ukaz = vsetko || c.dataset.cat === cat;
      c.hidden = !ukaz;
      if (ukaz) n++;
    });
    filters.querySelectorAll(".filter").forEach(b => {
      const on = b.dataset.cat === aktivnaKat;
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-pressed", on);
    });
    count.textContent = vsetko ? `${t("shop.zobrazene")}: ${pocet(n)}` : `${katNazov(cat)}: ${pocet(n)}`;
    const url = new URL(location.href);
    url.hash = vsetko ? "" : "k-" + cat;
    history.replaceState(null, "", url);
    if (scroll) $("#sortiment").scrollIntoView({ behavior: "smooth" });
  }

  filters.addEventListener("click", e => {
    const b = e.target.closest(".filter");
    if (b) nastavFilter(b.dataset.cat, false);
  });

  cats.addEventListener("click", e => {
    const a = e.target.closest(".cat");
    if (!a) return;
    e.preventDefault();
    nastavFilter(a.dataset.cat, true);
  });

  /* ---------- detail (modal) ---------- */
  let otvorenyId = null;

  function naplnDetail(p) {
    $("#m-img").src = p.obrazok;
    $("#m-img").alt = tr(p.nazov);
    $("#m-cat").textContent = katNazov(p.kategoria);
    $("#m-title").textContent = tr(p.nazov);
    $("#m-price").textContent = cena(p.cena);
    $("#m-mena").textContent = t("shop.mena");
    $("#m-desc").textContent = tr(p.popis);
    $("#m-specs").innerHTML = (tr(p.parametre) || []).map(s => `<li>${esc(s)}</li>`).join("");
    $("#m-buy").href = odkaz(p);
  }

  function otvorDetail(id) {
    const p = produkty.find(x => x.id === id);
    if (!p) return;
    otvorenyId = id;
    naplnDetail(p);
    if (typeof modal.showModal === "function") modal.showModal();
    else window.open(odkaz(p), "_blank", "noopener");
  }

  grid.addEventListener("click", e => {
    const b = e.target.closest("[data-detail]");
    if (b) otvorDetail(b.dataset.detail);
  });

  $("#m-close").addEventListener("click", () => modal.close());
  modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });
  modal.addEventListener("close", () => { otvorenyId = null; });

  /* ---------- všetko naraz ---------- */
  function vykresli(scroll) {
    prelozStranku();
    vykresliKategorie();
    vykresliKarty();
    nastavFilter(aktivnaKat, scroll);
    if (otvorenyId) naplnDetail(produkty.find(x => x.id === otvorenyId));
  }

  $("#fact-count").textContent = produkty.length;
  $("#year").textContent = new Date().getFullYear();
  vykresli(aktivnaKat !== "vsetko");

  /* ---------- mobilné menu ---------- */
  const burger = $(".burger");
  const nav = $("#nav");
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open);
  });
  nav.addEventListener("click", e => {
    if (e.target.closest("a")) { nav.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); }
  });
})();
