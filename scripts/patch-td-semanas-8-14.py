#!/usr/bin/env python3
"""Inserta td-week-boot.js y IDs de lectura en semana7..semana8."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TAG = '  <script src="../js/td-week-boot.js"></script>\n'
MARKER = "td-week-boot.js"


def patch_boot(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    if MARKER in text:
        return False
    if "</body>" not in text:
        return False
    path.write_text(text.replace("</body>", TAG + "</body>", 1), encoding="utf-8")
    return True


def patch_reading_ids(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    changed = False
    if 'id="mision"' not in text and "<!-- Propósito -->" in text:
        text = text.replace(
            "  <!-- Propósito -->\n  <div class=\"card\">",
            "  <!-- Propósito -->\n  <section id=\"mision\" class=\"card\">",
            1,
        )
        text = text.replace(
            "    <div class=\"bloom\">🧠 Nivel:",
            "    <div class=\"bloom\">🧠 Nivel:",
            1,
        )
        # close first card: find first </div> after bloom - fragile; use section close on first card only
        # Replace first occurrence of closing card after propósito block
        idx = text.find('<div class="bloom">')
        if idx != -1:
            end = text.find("</div>", idx)
            if end != -1:
                text = text[: end + 6] + text[end + 6 :].replace("</div>", "</section>", 1)
        changed = True
    if 'id="teoria"' not in text and "<!-- ADKAR -->" in text:
        text = text.replace(
            "  <!-- ADKAR -->\n  <div class=\"method-card\">",
            "  <!-- ADKAR -->\n  <section id=\"teoria\" class=\"method-card\">",
            1,
        )
        changed = True
    if 'id="teoria"' not in text and "<!-- DIKW -->" in text:
        text = text.replace(
            "  <!-- DIKW -->\n  <div class=\"method-card\">",
            "  <!-- DIKW -->\n  <section id=\"teoria\" class=\"method-card\">",
            1,
        )
        changed = True
    if 'id="actividad"' not in text and "<!-- Actividad práctica -->" in text:
        text = text.replace(
            "  <!-- Actividad práctica -->\n  <div class=\"activity\">",
            "  <!-- Actividad práctica -->\n  <section id=\"actividad\" class=\"activity\">",
            1,
        )
        changed = True
    if changed:
        path.write_text(text, encoding="utf-8")
    return changed


def main():
    for i in range(7, 9):
        p = ROOT / f"semana{i}" / "index.html"
        if not p.exists():
            print("missing:", p)
            continue
        b = patch_boot(p) if i == 8 else False
        r = patch_reading_ids(p)
        print(p.name, "boot" if b else "-", "reading" if r else "-")


if __name__ == "__main__":
    main()
