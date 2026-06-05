# HANDOFF — Módulo TD: Transformación Digital en la Empresa

**Fecha:** 2026-06-04  
**Estado:** En desarrollo activo  
**Repo:** `dfdomin/td-inteligencia-negocios` (público)  
**GitHub Pages:** `https://dfdomin.github.io/td-inteligencia-negocios/`

---

## Contexto general

Módulo de grado en Intelligence de Negocios, IUB. Curso presencial de 2 horas semanales en aula. 14 semanas. Caso formativo transversal: **Mercado360** (distribuidora de insumos agrícolas). Casos espejo para evaluación: **RetailNova** (semana 5), **SaludConecta** (semana 10), **LogisCaribe** (semana 14).

**RA priorizado:** Proponer estrategias para la transformación digital de una organización determinada basado en tecnologías que transforman y mejoran el entorno organizacional.

**RA1:** Analizar el contexto digital actual de una organización aplicando herramientas de diagnóstico de madurez digital.  
**RA2:** Diseñar soluciones basadas en tecnologías habilitadoras para los puntos de dolor priorizados.  
**RA3:** Formular un plan de transformación digital progresivo con métricas e indicadores de seguimiento.

---

## Decisiones pedagógicas ya tomadas

| Tema | Decisión |
|------|----------|
| Semana 5 | Parcial 1 — caso RetailNova |
| Semana 10 | Parcial 2 — caso SaludConecta |
| Semana 14 | Evaluación final — caso LogisCaribe |
| Enfoque | Práctico, orientado a productos concretos. Cada semana cierra con evidencia. |
| Regla central | Tecnología NO es punto de partida — diagnóstico primero. |
| Exposiciones | Aterrizadas al caso Mercado360, con fuente mínima, pregunta guía, riesgo y producto. |
| Lenguaje | Español. Evitar palabras en otros idiomas sin necesidad. |
| Verificación | Todo archivo generado debe verificarse antes de subir a git. |
| Normatividad | Integrar sin sobrecargar: LEPD (datos personales), ciberseguridad, ética IA. |

---

## Estructura del repositorio

```
TD/
├── index.html                    # Portal principal
├── semana1/                      # S1–S4: contenido, S5-S6 parciales, S7–S14 pendientes
│   ├── index.html                # Material del estudiante (HTML)
│   ├── notas_profesor.html       # Guía docente (HTML)
│   ├── README.md                 # Contenido en markdown
│   └── plantilla_*.md           # Plantillas prácticas
├── casos/
│   ├── retailnova/DOSSIER.md     # Caso parcial 1
│   ├── saludconecta/DOSSIER.md   # Caso parcial 2
│   └── logiscaribe/DOSSIER.md    # Caso final
├── evaluaciones/
│   ├── Parcial1_RetailNova.md
│   ├── Parcial2_SaludConecta.md
│   └── Final_LogisCaribe.md
├── recursos/                     # Juegos, actividades, quizzes
├── docs/
│   ├── BIBLIOGRAFIA.md           # 39 fuentes académicas/técnicas
│   ├── OBSERVACIONES_REFERENCIAS.md
│   └── HANDOFF_SESION.md          # Este documento
└── exposiciones/README.md        # Estrategia de exposiciones
```

---

## Estado actual del contenido

| Semana | README.md | HTML estudiante | HTML docente | Notas |
|--------|-----------|-----------------|---------------|-------|
| S1 | ✅ Completo | ✅ | ✅ | — |
| S2 | ✅ Completo | ✅ | ✅ | — |
| S3 | ✅ Completo | ✅ | ✅ | — |
| S4 | ✅ Completo | ✅ | ✅ | — |
| S5 | Stub (es parcial) | ✅ | ✅ | Plantillas: diagnóstico madurez + journey map |
| S6 | ✅ Completo | ✅ | ✅ | Plantilla: matriz impacto/esfuerzo |
| S7–S14 | ❌ Vacíos | ❌ | ❌ | Solo carpetas con README skeleton |

**Pendiente:** Poblar semanas 7 a 14 con material académico y HTML.

---

## Tema por semana (según microcurrículo)

| Semana | Tema principal | Evidencia entregable |
|--------|---------------|---------------------|
| S1 | ¿Qué es la transformación digital? | Mapa de dolores del cliente |
| S2 | Mapa de dolores del cliente | Plantilla mapa de dolores |
| S3 | Propuesta de valor y modelos de negocio | Canvas de propuesta de valor |
| S4 | Tecnologías habilitadoras | Quiz tecnologías + mapa de tecnologías |
| S5 | **PARCIAL 1** — RetailNova | Diagnóstico de madurez + journey map |
| S6 | Diseño de soluciones y priorización | Matriz impacto/esfuerzo + JTBD |
| S7 | Analítica y dashboards | Dashboard de KPIs |
| S8 | IA aplicada a negocio | Caso IA en RetailNova |
| S9 | Ciberseguridad y protección de datos | Evaluación de riesgos |
| S10 | **PARCIAL 2** — SaludConecta | — |
| S11 | Gestión del cambio y cultura digital | Plan de gestión del cambio |
| S12 | Modelo de negocio digital | Lean Canvas |
| S13 | Plan de transformación digital | Roadmap |
| S14 | **EVALUACIÓN FINAL** — LogisCaribe | — |

---

## GitHub Pages

- **URL:** `https://dfdomin.github.io/td-inteligencia-negocios/`
- **Rama:** `gh-pages` (configurada como fuente en Pages)
- **Build type:** `legacy` (Jekyll automático, NO GitHub Actions)
- **Estado:** HTTP 200 ✅

### Cómo funciona el despliegue

1. El contenido se trabaja en la carpeta local del repo.
2. Se hace commit a `main` (o a cualquier rama que se esté usando como fuente de Pages).
3. GitHub Pages toma la rama configurada y publica con Jekyll.
4. `.nojekyll` evitar procesamiento de Jekyll si es necesario.

### Nota sobre el workflow de Actions

El archivo `.github/workflows/pages.yml` no está en el repositorio porque el token OAuthApp (`gho_EnhrpC...`) no tiene scope `workflow`. Esto significa que **no se puede usar GitHub Actions para desplegar**. El modo `legacy` (Jekyll automático desde la rama gh-pages) funciona correctamente. Si en el futuro se quiere migrar a Actions, se necesita un token con scope `workflow`.

---

## Patrón de diseño HTML

Tomado de `FundamentosComputacion` — adoptado consistentemente:

- **Tipografía:** Open Sans (Google Fonts)
- **Colores:** `#1E2843` (azul oscuro), `#FFDF2D` (amarillo), `#2e7d32` (verde)
- **Cards:** borde izquierdo color oro, fondo sutilmente diferenciado
- **Callouts:** tip (💡), warn (⚠️), brain (🧠)
- **Widget PT:** progreso por semana con localStorage (`td_s1`, `td_s2`, etc.)
- **Cada semana:** `index.html` (estudiante) + `notas_profesor.html` (docente)

### Estructura básica de cada index.html

1. Header con banner de semana y tema
2. Objetivos de aprendizaje
3. Contenido en secciones con headings claros
4. Recuadros de conceptos clave
5. Evidencia práctica (al final)
6. Recursos
7. Widget de progreso PT

---

## Casos

### Mercado360 (caso formativo/transversal)

`Caso_Estudio_Mercado360.md` — Distribuidora de insumos agrícolas en zona rural. Dolores: pedidos por WhatsApp, inventario desactualizado, entrega sin trazabilidad,cobros manuales.

### RetailNova (semana 5 — parcial 1)

`casos/retailnova/DOSSIER.md` — Cadena de retail de moda. Problemas: omnicanalidad, inventario, rotación de personal.

### SaludConecta (semana 10 — parcial 2)

`casos/saludconecta/DOSSIER.md` — Clínicas ambulatorias. Problemas: historia clínica, programación de citas, telemedicina.

### LogisCaribe (semana 14 — final)

`casos/logiscaribe/DOSSIER.md` — Operador logístico. Problemas: trazabilidad de flota, optimización de rutas,最后一个milla.

---

## Dossiers de evaluación

| Evaluación | Archivo | Caso | Estado |
|-----------|---------|------|--------|
| Parcial 1 | `evaluaciones/Parcial1_RetailNova.md` | RetailNova | ✅ Completo |
| Parcial 2 | `evaluaciones/Parcial2_SaludConecta.md` | SaludConecta | ✅ Completo |
| Final | `evaluaciones/Final_LogisCaribe.md` | LogisCaribe | ✅ Completo |

Cada evaluación incluye: contexto, dossier de información, instrucciones, producto esperado, tiempo sugerido, rúbrica, criterios asociados a RA1/RA2/RA3.

---

## Errores conocidos y lecciones aprendidas

### Error de caracteres en otros idiomas

**Qué pasó:** Durante la creación de `semana1/index.html`, se introdujeron palabras en otros idiomas:
- `目的地` (chino) en lugar de "el destino"
- `именно` (ruso) en lugar de "exactamente"

**Causa:** Generación de texto directa al archivo HTML sin verificación. El modelo emitió caracteres de otros alfabetos en lugar de la palabra en español.

**Lección:** Después de generar contenido con caracteres especiales o analogies, verificar siempre el archivo antes de commit. No confiar ciegamente en la generación — siempre hacer un `grep` o lectura rápida para detectar anomalías.

**Acción requerida en nueva sesión:** Al generar HTML para semanas 7–14, hacer `grep` en cada archivo buscando patrones de caracteres no latinos (chino, cirílico, árabe, etc.) antes de commit.

### Patrón de verificación obligatorio

Antes de hacer `git add` para contenido HTML generado:

```bash
# Buscar caracteres problemáticos
grep -n "[^\x00-\x7F]" archivo.html
grep -n "目的地\|именно\|的确\|именно" archivo.html
```

Si se encuentra algo, corregirlo antes de commit.

---

## Pendientes para la siguiente sesión

### Alta prioridad

1. **Poblar semanas 7–14:** README.md + index.html + notas_profesor.html para cada semana
2. **Verificar HTML de semanas 7–14** después de generarlos — hacer grep de caracteres no latinos
3. **Subir cambios a GitHub Pages** después de cada semana completada

### Prioridad media

4. **Validar con el docente real** el orden de semanas y el alcance de cada tema
5. **Completar evaluaciones** con versiones HTML si se desea publicarlas
6. **Crear juegos/actividades** para semanas 7–14 (siguiente set de recursos)
7. **Exposiciones:** desarrollar más a fondo las exposiciones para semanas 7–14

### Baja prioridad / nice-to-have

8. **Considerar usar Supabase** para guardar progreso de estudiantes en vez de localStorage
9. **Crear landing page** más elaborada con navegación por semanas
10. **Migrar a GitHub Actions** si se obtiene token con scope `workflow`

---

## Recursos y fuentes

- **`docs/BIBLIOGRAFIA.md`:** 39 fuentes académicas y técnicas organizadas por tema
- **`exposiciones/README.md`:** Estrategia de exposiciones con rúbricas
- **`transformacion_microcurriculo.md`:** Microcurrículo oficial de 14 semanas
- **`MODULE_CONTEXT.md`:** Contexto del módulo y decisiones de diseño
- **`PLAN_CONTENIDO_TD.md`:** Plan de contenido detallado
- **`docs/OBSERVACIONES_REFERENCIAS.md`:** Decisiones de diseño tomadas

### Módulos de referencia (adoptar patrones)

- `FundamentosComputacion` → patrón HTML, estilo visual, estructura de semanas
- `EstructuraDatos` → patrón de evaluaciones y rúbricas
- `ProcesamientoInformacion` → patrón de diferenciación caso formativo vs. casos espejo

---

## Comandos útiles

```bash
# Verificar sitio
curl -sI https://dfdomin.github.io/td-inteligencia-negocios/

# Verificar contenido de semana
curl -sI https://dfdomin.github.io/td-inteligencia-negocios/semana1/index.html

# Buscar caracteres problemáticos en HTML
grep -n "[^\x00-\x7F]" semana*/index.html
grep -n "目的地\|именно" semana*/index.html

# Deploy (desde gh-pages)
git add .
git commit -m "mensaje"
git push origin gh-pages

# Merge main → gh-pages después de commits desde GitHub
git checkout main && git pull
git checkout gh-pages
git merge main
git push origin gh-pages
```

---

**Nota para la próxima sesión:** Después de generar HTML, siempre ejecutar los comandos de verificación de caracteres antes de commit. Los errores de generación con caracteres en otros idiomas pueden ocurrir nuevamente — no asumir que no pasan porque sí pasaron una vez.