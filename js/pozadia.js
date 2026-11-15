// Dočasný prepínač pozadia úvodu (0 = pôvodné hero.jpg, 1–5 = img/pozadia/).
// Slúži na porovnanie naživo. Po výbere stačí dať zvolený obrázok do
// css/style.css a tento skript aj s jeho <script> značkou zmazať.
(function () {
  "use strict";
  const hero = document.querySelector(".hero__bg");
  if (!hero) return;
  const moznosti = ["0", "1", "2", "3", "4", "5"];

  let zvolene = "0";

  // Vezme vrstvy pozadia zo style.css (prechody + hero.jpg) a vymení len obrázok,
  // takže stmavenie aj mobilná verzia ostanú presne ako na ostrej stránke.
  function vykresli() {
    hero.style.backgroundImage = "";
    if (zvolene === "0") return;
    const novy = new URL(`img/pozadia/pozadie-${zvolene}.jpg`, location.href).href;
    const povodne = getComputedStyle(hero).backgroundImage;
    hero.style.backgroundImage = povodne.replace(/url\([^)]*hero\.jpg[^)]*\)/, `url("${novy}")`);
  }

  function nastav(c) {
    zvolene = c;
    vykresli();
    box.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b.textContent === c));
    try { localStorage.setItem("ml-pozadie", c); } catch (e) {}
  }
  matchMedia("(max-width: 860px)").addEventListener("change", vykresli);

  const box = document.createElement("div");
  box.className = "ml-pozadia";
  box.innerHTML = "<span>Pozadie</span>";
  for (const c of moznosti) {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = c;
    b.addEventListener("click", () => nastav(c));
    box.appendChild(b);
  }

  const css = document.createElement("style");
  css.textContent = `
    .ml-pozadia {
      position: fixed; left: 12px; bottom: 12px; z-index: 1000;
      display: flex; align-items: center; gap: 4px;
      padding: 6px 8px; border-radius: 8px;
      background: rgba(20,20,20,.9); color: #fff;
      font: 600 13px/1 system-ui, sans-serif;
      box-shadow: 0 4px 16px rgba(0,0,0,.4);
    }
    .ml-pozadia span { margin-right: 4px; opacity: .8; }
    .ml-pozadia button {
      width: 28px; height: 28px; border: 0; border-radius: 6px; cursor: pointer;
      background: rgba(255,255,255,.14); color: #fff; font: inherit;
    }
    .ml-pozadia button:hover { background: rgba(255,255,255,.28); }
    .ml-pozadia button[aria-pressed="true"] { background: #ff8c1a; color: #111; }
  `;
  document.head.appendChild(css);
  document.body.appendChild(box);

  let start = new URLSearchParams(location.search).get("pozadie");
  if (!moznosti.includes(start)) {
    try { start = localStorage.getItem("ml-pozadie"); } catch (e) { start = null; }
  }
  nastav(moznosti.includes(start) ? start : "0");
})();
