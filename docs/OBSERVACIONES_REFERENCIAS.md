# Observaciones sobre repositorios de referencia

## Referentes revisados

- `FundamentosComputacion`
- `EstructuraDatos`
- `ProcesamientoInformacion`

## Patrones encontrados en TGA04 y TGA05

Los repositorios TGA04/TGA05 trabajan con:

- `README.md` como puerta de entrada.
- Plan maestro de contenido.
- Caso transversal tipo narrativa de negocio.
- Carpetas `semanaN`.
- Material para estudiante y notas para profesor.
- Evaluaciones conectadas con el caso.
- Posibilidad de evolucionar hacia HTML, dashboards, Supabase, pruebas y GitHub Pages.

## Patrones adicionales encontrados en ProcesamientoInformacion

`ProcesamientoInformacion` agrega elementos que conviene adoptar para TD:

- `MODULE_CONTEXT.md` como identidad compacta del modulo para que cualquier sesion con IA entienda el curso sin releer todo.
- Carpetas semanales con `index.html` y `guia-docente.html`, equivalentes a material estudiante + guia docente.
- Carpeta `casos/` con un caso formativo y casos espejo para parciales.
- Dossiers de caso con documentos reales o simulados en varios formatos.
- Carpeta `instrumentos/` con parciales, rubricas y alineaciones con RA/PLO.
- Memoria del proyecto en `memory/` para decisiones, estado y siguientes pasos.
- Uso de normas o estandares como eje evaluativo cuando aplica.

## Adaptacion a TD

Para Transformacion Digital se mantiene el principio de TGA04/TGA05, pero se incorpora la leccion de `ProcesamientoInformacion`: no basta con un caso unico; conviene usar **Mercado360** como caso formativo transversal y crear **casos espejo** para evaluar transferencia en semanas 5, 10 y 14.

La version inicial queda en Markdown porque el reto principal es curricular: seleccionar, secuenciar y aterrizar un microcurriculo amplio a una realidad de 2 horas presenciales por semana. La evolucion natural sera convertir semanas y evaluaciones prioritarias a HTML interactivo.

## Decision tomada

- `Mercado360`: caso formativo principal, usado de semana 1 a 13.
- `RetailNova`: caso espejo para parcial 1, semana 5.
- `SaludConecta`: caso espejo para parcial 2, semana 10.
- `LogisCaribe`: caso espejo para final, semana 14.

## Pendientes de validacion

- Confirmar RA oficial del programa.
- Confirmar si se desea narrativa gamificada como NeuroBiz o tono consultivo.
- Crear dossiers documentales completos para los casos espejo.
- Convertir semanas prioritarias a HTML interactivo si se publicara en Moodle o GitHub Pages.
- Definir si se usaran rubricas separadas por parcial, como en `ProcesamientoInformacion`.

