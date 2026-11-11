(function () {
  "use strict";

  const data = window.MAJSTERLAND;
  if (!data) return;

  const kategorie = data.kategorie;
  const produkty = data.produkty;
  const katNazov = Object.fromEntries(kategorie.map(k => [k.id, k.nazov]));

  const $ = sel => document.querySelector(sel);
  const grid = $("#grid");
  const filters = $("#filters");
  const count = $("#count");
  const cats = $("#cats");

  const cena = n => n.toLocaleString("sk-SK", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const pocet = n => {
    if (n === 1) return "1 produkt";
    if (n >= 2 && n <= 4) return n + " produkty";
    return n + " produktov";
  };

  /* ---------- kategórie pod hero ---------- */
  cats.innerHTML = kategorie.map(k => {
    const n = produkty.filter(p => p.kategoria === k.id).length;
    return `<a href="#sortiment" class="cat" data-cat="${k.id}">
      <span class="cat__n">${n}</span>
      <h3 class="cat__title">${esc(k.nazov)}</h3>
      <p class="cat__desc">${esc(k.popis)}</p>
    </a>`;
  }).join("");

  /* ---------- filter ---------- */
  const tlacidla = [{ id: "vsetko", nazov: "Všetko" }, ...kategorie];
  filters.innerHTML = tlacidla.map(k =>
    `<button type="button" class="filter" data-cat="${k.id}" aria-pressed="false">${esc(k.nazov)}</button>`
  ).join("");

  /* ---------- karty ---------- */
  grid.innerHTML = produkty.map(p => `
    <article class="card" data-cat="${p.kategoria}">
      <button type="button" class="card__img" data-detail="${p.id}" aria-label="Detail: ${esc(p.nazov)}">
        <img src="${p.obrazok}" alt="${esc(p.nazov)}" loading="lazy" width="720" height="720">
        <span class="card__tag">${esc(katNazov[p.kategoria])}</span>
      </button>
      <div class="card__body">
        <h3 class="card__title"><button type="button" data-detail="${p.id}">${esc(p.nazov)}</button></h3>
        <p class="card__desc">${esc(p.kratky)}</p>
        <div class="card__foot">
          <span class="card__price">${cena(p.cena)}</span>
          <button type="button" class="card__more" data-detail="${p.id}">Detail →</button>
        </div>
        <a class="btn btn--solid btn--wide" href="${p.allegro}" target="_blank" rel="noopener">Kúpiť na Allegre</a>
      </div>
    </article>`).join("");

  function nastavFilter(cat, scroll) {
    const vsetko = cat === "vsetko" || !katNazov[cat];
    let n = 0;
    grid.querySelectorAll(".card").forEach(c => {
      const ukaz = vsetko || c.dataset.cat === cat;
      c.hidden = !ukaz;
      if (ukaz) n++;
    });
    filters.querySelectorAll(".filter").forEach(b => {
      const on = b.dataset.cat === (vsetko ? "vsetko" : cat);
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-pressed", on);
    });
    count.textContent = vsetko ? `Zobrazených ${pocet(n)}` : `${katNazov[cat]}: ${pocet(n)}`;
    history.replaceState(null, "", vsetko ? location.pathname : "#k-" + cat);
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

  const zHash = location.hash.startsWith("#k-") ? location.hash.slice(3) : "vsetko";
  nastavFilter(zHash, zHash !== "vsetko");

  /* ---------- detail (modal) ---------- */
  const modal = $("#modal");

  function otvorDetail(id) {
    const p = produkty.find(x => x.id === id);
    if (!p) return;
    $("#m-img").src = p.obrazok;
    $("#m-img").alt = p.nazov;
    $("#m-cat").textContent = katNazov[p.kategoria];
    $("#m-title").textContent = p.nazov;
    $("#m-price").textContent = cena(p.cena);
    $("#m-desc").textContent = p.popis;
    $("#m-specs").innerHTML = (p.parametre || []).map(s => `<li>${esc(s)}</li>`).join("");
    $("#m-buy").href = p.allegro;
    if (typeof modal.showModal === "function") modal.showModal();
    else window.open(p.allegro, "_blank", "noopener");
  }

  grid.addEventListener("click", e => {
    const b = e.target.closest("[data-detail]");
    if (b) otvorDetail(b.dataset.detail);
  });

  $("#m-close").addEventListener("click", () => modal.close());
  modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

  /* ---------- drobnosti ---------- */
  $("#fact-count").textContent = produkty.length;
  $("#year").textContent = new Date().getFullYear();

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
