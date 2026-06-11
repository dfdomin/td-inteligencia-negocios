#!/usr/bin/env python3
"""Genera index.html mínimo para semana9..14 con sync en nube (td-week-boot)."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

WEEKS = {
    9: {
        "title": "Riesgos digitales y seguridad",
        "subtitle": "Privacidad, continuidad y dependencia tecnológica",
        "proposito": "Identificar riesgos de privacidad, seguridad, continuidad y dependencia tecnológica en la solución digital propuesta.",
        "teoria": "Clasificar riesgos por probabilidad e impacto. Definir controles básicos (acceso, respaldo, política de datos, continuidad).",
        "actividad": "Construir una matriz de riesgos digitales para la solución de Mercado360 o el caso asignado.",
        "evidencia": "Matriz de riesgos digitales con al menos 6 riesgos, controles y responsable.",
    },
    10: {
        "title": "Parcial 2 — SaludConecta",
        "subtitle": "Propuesta de solución digital",
        "proposito": "Formular una propuesta de solución digital coherente con el diagnóstico previo (caso espejo SaludConecta IPS).",
        "teoria": "Proceso AS-IS y TO-BE, tecnología habilitadora, datos necesarios, KPIs, riesgos y prototipo conceptual.",
        "actividad": "Desarrollar el informe parcial 2 y preparar pitch de 5 minutos: problema, solución, valor, riesgo y próximo paso.",
        "evidencia": "Informe con AS-IS/TO-BE, KPIs, matriz de riesgos y mockup o prototipo conceptual.",
    },
    11: {
        "title": "Modelos de negocio digitales",
        "subtitle": "Canvas y propuesta de valor",
        "proposito": "Comprender cómo una solución digital modifica canales, ingresos, costos y relación con clientes.",
        "teoria": "Revisar modelos digitales relevantes y ajustar el Business Model Canvas de Mercado360.",
        "actividad": "Ajustar el Canvas digital identificando cambios en propuesta de valor, canales y fuentes de ingreso.",
        "evidencia": "Business Model Canvas digital ajustado con justificación de cambios.",
    },
    12: {
        "title": "Hoja de ruta y POC",
        "subtitle": "De la idea a la implementación",
        "proposito": "Convertir la propuesta en una ruta de implementación realista con alcance de POC.",
        "teoria": "Roadmap 30-60-90 días: entregables, responsables, dependencias y métricas de avance.",
        "actividad": "Definir alcance del POC y construir el roadmap con hitos medibles.",
        "evidencia": "Roadmap 30-60-90 con entregables, responsables y métricas.",
    },
    13: {
        "title": "Viabilidad y caso de negocio",
        "subtitle": "Costos, beneficios y KPIs",
        "proposito": "Evaluar costos, beneficios, riesgos y métricas de éxito de la estrategia digital.",
        "teoria": "Caso de negocio ligero: costos directos e indirectos, beneficios cualitativos y cuantitativos, supuestos.",
        "actividad": "Preparar ficha de viabilidad y argumentos para la sustentación final.",
        "evidencia": "Caso de negocio con beneficios, costos, supuestos y KPIs.",
    },
    14: {
        "title": "Evaluación final — LogisCaribe",
        "subtitle": "Estrategia integral de transformación digital",
        "proposito": "Formular la estrategia integral de transformación digital para el caso espejo LogisCaribe.",
        "teoria": "Resumen ejecutivo, diagnóstico, solución priorizada, roadmap, KPIs, gestión del cambio, riesgos y viabilidad.",
        "actividad": "Integrar portafolio final y preparar presentación ejecutiva de 8 a 10 minutos.",
        "evidencia": "Portafolio final y sustentación con estrategia integral.",
    },
}

HEAD = """<!DOCTYPE html>
<html lang="es">
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Semana {n} — {title} | TD</title>
  <style>
    *, *::before, *::after {{ box-sizing: border-box; margin: 0; padding: 0; }}
    :root {{
      --primary: #1E2843; --accent: #2d3a5e; --gold: #FFDF2D; --green: #2e7d32;
      --light-bg: #FAFAFA; --card-bg: #fff; --text: #212121; --muted: #546e7a;
      --border: #DEDFE4; --radius: 12px;
    }}
    body {{ font-family: 'Open Sans', Arial, sans-serif; background: var(--light-bg); color: var(--text); line-height: 1.7; }}
    header {{ background: linear-gradient(135deg, var(--primary), var(--accent)); color: #fff; padding: 2.2rem 1.5rem; text-align: center; }}
    .badge-module {{ display: inline-block; background: rgba(255,255,255,.15); border: 1px solid rgba(255,255,255,.35); border-radius: 20px; padding: .3rem 1rem; font-size: .8rem; margin-bottom: .8rem; }}
    header h1 {{ font-size: 1.9rem; font-weight: 800; }}
    header p {{ opacity: .85; margin-top: .4rem; }}
    nav {{ background: #fff; border-bottom: 2px solid var(--border); padding: .6rem 1rem; display: flex; gap: .5rem; flex-wrap: wrap; position: sticky; top: 0; z-index: 99; }}
    nav a {{ color: var(--accent); text-decoration: none; font-weight: 700; font-size: .85rem; padding: .3rem .7rem; border-radius: 8px; }}
    nav a:hover {{ background: var(--border); }}
    main {{ max-width: 960px; margin: 1.5rem auto; padding: 0 1.2rem 4rem; }}
    .card, .method-card, .activity {{ background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 2px 10px rgba(0,0,0,.04); }}
    .method-card {{ border-left: 6px solid var(--gold); }}
    .activity {{ border: 2px solid var(--border); }}
    h2 {{ color: var(--primary); font-size: 1.2rem; margin-bottom: .8rem; }}
    p {{ margin-bottom: .7rem; }}
    ul {{ padding-left: 1.3rem; margin-bottom: .7rem; }}
    .evidence {{ background: #e8f5e9; border-left: 4px solid var(--green); padding: 1rem 1.2rem; border-radius: 10px; }}
  </style>
  <script src="../js/supabase-config.js"></script>
  <script src="../js/gamification-sdk.js"></script>
  <script src="../js/academic-rules.js"></script>
  <script src="../js/academic-status-bar.js"></script>
  <script src="../js/celebration.js"></script>
  <script src="../js/week-auto-sync.js"></script>
  <script src="../js/reading-tracker.js"></script>
  <script src="../js/reading-xp-policy.js"></script>
</head>
<body>
<header>
  <span class="badge-module">TD — Transformación Digital</span>
  <h1>Semana {n} — {title}</h1>
  <p>{subtitle} · IUB — Inteligencia de Negocios</p>
</header>
<nav>
  <a href="https://dfdomin.github.io/td-inteligencia-negocios/">← Módulo</a>
  <a href="https://dfdomin.github.io/td-inteligencia-negocios/semana{prev}/">Semana {prev}</a>
  {next_nav}
</nav>
<main>
  <section id="mision" class="card">
    <h2>🎯 Propósito de la semana</h2>
    <p>{proposito}</p>
  </section>
  <section id="teoria" class="method-card">
    <h2>📚 Marco y contenido</h2>
    <p>{teoria}</p>
  </section>
  <section id="actividad" class="activity">
    <h2>⚙️ Actividad práctica</h2>
    <p>{actividad}</p>
    <div class="evidence"><strong>Evidencia:</strong> {evidencia}</div>
  </section>
</main>
  <script src="../js/td-week-boot.js"></script>
</body>
</html>
"""


def main():
    for n, meta in WEEKS.items():
        prev_w = max(1, n - 1)
        if n < 14:
            next_nav = (
                f'<a href="https://dfdomin.github.io/td-inteligencia-negocios/semana{n + 1}/">'
                f"Semana {n + 1} →</a>"
            )
        else:
            next_nav = '<a href="https://dfdomin.github.io/td-inteligencia-negocios/">Fin del módulo →</a>'
        html = HEAD.format(n=n, prev=prev_w, next_nav=next_nav, **meta)
        out = ROOT / f"semana{n}" / "index.html"
        out.write_text(html, encoding="utf-8")
        print("wrote:", out)


if __name__ == "__main__":
    main()
