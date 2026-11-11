#!/usr/bin/env python3
"""Z data/produkty.json vyrobí data/produkty.js, aby stránka fungovala aj po otvorení
index.html priamo zo disku (file://), kde prehliadač nepustí fetch na JSON.

Spustenie z koreňa repa:  python scripts/build-data.py
"""
import json
from pathlib import Path

root = Path(__file__).resolve().parent.parent
src = root / "data" / "produkty.json"
dst = root / "data" / "produkty.js"

data = json.loads(src.read_text(encoding="utf-8"))

# základná kontrola, aby sa chyba v JSON-e neprejavila až na webe
kategorie = {k["id"] for k in data["kategorie"]}
for p in data["produkty"]:
    assert p["kategoria"] in kategorie, f"Neznáma kategória: {p['id']} -> {p['kategoria']}"
    assert (root / p["obrazok"]).exists(), f"Chýba obrázok: {p['obrazok']}"
    assert "offerId=" in p["allegro"] or "/oferta/" in p["allegro"], f"Divný odkaz: {p['id']}"

dst.write_text(
    "// Vygenerované zo súboru produkty.json – needituj ručne, spusti scripts/build-data.py\n"
    "window.MAJSTERLAND = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n",
    encoding="utf-8",
)
print(f"OK: {len(data['produkty'])} produktov -> {dst.relative_to(root)}")
