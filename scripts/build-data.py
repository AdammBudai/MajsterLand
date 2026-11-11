#!/usr/bin/env python3
"""Z data/produkty.json vyrobí data/produkty.js, aby stránka fungovala aj po otvorení
index.html priamo z disku (file://), kde prehliadač nepustí fetch na JSON.
Zároveň skontroluje, či má každý produkt preklady, obrázok a platnú kategóriu.

Spustenie z koreňa repa:  python scripts/build-data.py
"""
import hashlib
import json
import re
from pathlib import Path

JAZYKY = ("sk", "cs", "pl")
root = Path(__file__).resolve().parent.parent
src = root / "data" / "produkty.json"
dst = root / "data" / "produkty.js"

data = json.loads(src.read_text(encoding="utf-8"))
chyby = []

def preklad(obj, kde):
    if not isinstance(obj, dict):
        chyby.append(f"{kde}: má byť objekt s jazykmi {JAZYKY}")
        return
    for l in JAZYKY:
        if not obj.get(l):
            chyby.append(f"{kde}: chýba jazyk '{l}'")

kategorie = set()
for k in data["kategorie"]:
    kategorie.add(k["id"])
    preklad(k["nazov"], f"kategória {k['id']} / nazov")
    preklad(k["popis"], f"kategória {k['id']} / popis")

for p in data["produkty"]:
    pid = p["id"]
    if p["kategoria"] not in kategorie:
        chyby.append(f"{pid}: neznáma kategória {p['kategoria']}")
    if not (root / p["obrazok"]).exists():
        chyby.append(f"{pid}: chýba obrázok {p['obrazok']}")
    if not isinstance(p["cena"], (int, float)):
        chyby.append(f"{pid}: cena musí byť číslo")
    for f in ("allegro", "nazov", "kratky", "popis"):
        preklad(p.get(f), f"{pid} / {f}")
    par = p.get("parametre", {})
    preklad(par, f"{pid} / parametre")
    if isinstance(par, dict):
        dlzky = {l: len(par.get(l) or []) for l in JAZYKY}
        if len(set(dlzky.values())) > 1:
            chyby.append(f"{pid} / parametre: rôzny počet riadkov {dlzky}")

if chyby:
    raise SystemExit("Chyby v produkty.json:\n  " + "\n  ".join(chyby))

dst.write_text(
    "// Vygenerované zo súboru produkty.json – needituj ručne, spusti scripts/build-data.py\n"
    "window.MAJSTERLAND = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n",
    encoding="utf-8",
)
# Verzia súborov v index.html (?v=...), aby prehliadač po zmene nevzal starý súbor z cache.
index = root / "index.html"
html = index.read_text(encoding="utf-8")
for rel in ("css/style.css", "js/i18n.js", "js/app.js", "data/produkty.js"):
    h = hashlib.sha1((root / rel).read_bytes()).hexdigest()[:8]
    html = re.sub(re.escape(rel) + r"\?v=[0-9a-z]+", f"{rel}?v={h}", html)
index.write_text(html, encoding="utf-8", newline="\n")

print(f"OK: {len(data['produkty'])} produktov -> {dst.relative_to(root)}, verzie v index.html aktualizované")
