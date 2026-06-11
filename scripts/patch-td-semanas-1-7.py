#!/usr/bin/env python3
"""Inserta td-week-boot.js en semana1..semana7 si falta."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TAG = '  <script src="../js/td-week-boot.js"></script>\n'
MARKER = "td-week-boot.js"


def patch_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    changed = False
    if "const PT = (function()" in text:
        text = text.replace("const PT = (function()", "var PT = (function()", 1)
        changed = True
    if MARKER in text:
        if changed:
            path.write_text(text, encoding="utf-8")
        return changed
    if "</body>" not in text:
        print("skip (no body):", path)
        return False
    text = text.replace("</body>", TAG + "</body>", 1)
    path.write_text(text, encoding="utf-8")
    return True


def patch_semana1_var(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    if "var PT = (function()" in text:
        return False
    if "const PT = (function()" not in text:
        return False
    path.write_text(text.replace("const PT = (function()", "var PT = (function()", 1), encoding="utf-8")
    return True


def main():
    n = 0
    for i in range(1, 8):
        p = ROOT / f"semana{i}" / "index.html"
        if not p.exists():
            print("missing:", p)
            continue
        if patch_file(p):
            print("patched:", p)
            n += 1
        else:
            print("already ok:", p)
    print(f"\nDone. {n} file(s) updated.")


if __name__ == "__main__":
    main()
