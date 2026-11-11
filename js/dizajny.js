// Prepínač medzi tromi návrhmi stránky (1 = /, 2 = /v2/, 3 = /v3/).
// Slúži na porovnanie dizajnov naživo. Keď sa vyberie finálny dizajn,
// stačí tento skript a jeho <script> značky odstrániť.
(function () {
  "use strict";
  const tag = document.currentScript;
  const aktualny = tag.dataset.dizajn;
  const root = tag.dataset.root || "./";
  const ciele = { "1": root + "index.html", "2": root + "v2/index.html", "3": root + "v3/index.html" };

  const nazov = { sk: "Dizajn", cs: "Design", pl: "Projekt", hu: "Dizájn", en: "Design" };
  const jazyk = (document.documentElement.lang || "sk").slice(0, 2);

  const box = document.createElement("nav");
  box.className = "ml-dizajny";
  box.setAttribute("aria-label", nazov[jazyk] || nazov.sk);

  const popis = document.createElement("span");
  popis.textContent = nazov[jazyk] || nazov.sk;
  box.appendChild(popis);

  for (const cislo of ["1", "2", "3"]) {
    const a = document.createElement("a");
    a.textContent = cislo;
    a.href = ciele[cislo];
    if (cislo === aktualny) a.setAttribute("aria-current", "page");
    // pri prechode zachová zvolený jazyk aj vybranú kategóriu
    a.addEventListener("click", () => {
      a.href = ciele[cislo] + location.search + location.hash;
    });
    box.appendChild(a);
  }

  const css = document.createElement("style");
  css.textContent = `
    .ml-dizajny {
      position: fixed; left: 12px; bottom: 12px; z-index: 9999;
      display: flex; align-items: center; gap: 4px;
      padding: 5px 5px 5px 12px;
      background: #1d2329; color: #fff;
      border-radius: 999px;
      font: 600 13px/1 system-ui, -apple-system, "Segoe UI", sans-serif;
      box-shadow: 0 4px 14px rgba(0,0,0,.25);
    }
    .ml-dizajny span { margin-right: 4px; opacity: .8; }
    .ml-dizajny a {
      display: grid; place-items: center;
      width: 30px; height: 30px; border-radius: 50%;
      color: #fff; text-decoration: none;
      background: rgba(255,255,255,.12);
    }
    .ml-dizajny a:hover { background: rgba(255,255,255,.28); }
    .ml-dizajny a[aria-current="page"] { background: #fff; color: #1d2329; }
    .ml-dizajny a:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
  `;
  document.head.appendChild(css);
  document.body.appendChild(box);

  // popis prepínača sleduje zvolený jazyk stránky
  new MutationObserver(() => {
    const l = (document.documentElement.lang || "sk").slice(0, 2);
    popis.textContent = nazov[l] || nazov.sk;
    box.setAttribute("aria-label", popis.textContent);
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
})();
