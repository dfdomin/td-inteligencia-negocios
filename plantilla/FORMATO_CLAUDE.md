# Formato de salida estructurado para Claude

Cuando generes contenido para una semana de clase, DEBES usar este formato para que el dashboard docente pueda importarlo automáticamente.

## Formato exacto

```
[TITULO: Nombre de la Semana]
[XP_MAX: 95]

## 🎯 Misión
Contenido de la misión en markdown...

Puedes usar **negritas**, *cursivas*, `código`, y [enlaces](url).

Las imágenes se insertan así: ![descripción](url)

## 📚 Marco Teórico
### 1. Título de la sección
Contenido teórico...

### 2. Título de la sección
Contenido...

## ⚙️ Actividad
Descripción de la actividad...

- Listas con guiones
- Funcionan automáticamente

## 📊 Evidencia
Contenido de la sección de evidencia...

## 📖 Fuentes
- Autor, Año. *Título*. Editorial.
```

## Reglas

1. **Siempre empieza con `[TITULO: ...]`** — es el título de la semana
2. **`[XP_MAX: N]`** — opcional, XP máximo de la semana (default 100)
3. **Cada sección empieza con `## `** (markdown heading nivel 2)
4. **Usa `### `** para sub-secciones dentro de una sección
5. **Markdown compatible**: negritas, cursivas, listas, tablas, imágenes, enlaces, código
6. **Imágenes**: usa `![descripción](url)` — el sistema las renderizará con `<figure>` y `<figcaption>`
7. **No uses HTML directamente** — el markdown se convertirá a HTML automáticamente
8. **No incluyas JS ni scripts** — el sistema los agrega automáticamente

## IDs de sección generados automáticamente

El slug del título (sin emojis, en minúsculas, con guiones) se usa como ID. Ejemplo:
- `## 🎯 Misión` → id: `mision`
- `## 📚 Marco Teórico` → id: `marco-teorico`
- `## ⚙️ Actividad` → id: `actividad`

## Ejemplo completo

```
[TITULO: Fundamentos de Machine Learning]
[XP_MAX: 95]

## 🎯 Misión
En esta semana aprenderás los fundamentos del Machine Learning aplicado a negocios.

**Objetivos:**
- Comprender la diferencia entre ML supervisado y no supervisado
- Identificar casos de uso en Mercado360

## 📚 Marco Teórico
### 1. ¿Qué es Machine Learning?
El Machine Learning es una rama de la IA que...

### 2. Tipos de aprendizaje
- **Supervisado**: se entrena con datos etiquetados
- **No supervisado**: encuentra patrones sin etiquetas

## ⚙️ Actividad
Completa el siguiente ejercicio práctico...

## 📖 Fuentes
- Russell, S. & Norvig, P. (2021). *Artificial Intelligence: A Modern Approach*. Pearson.
```
