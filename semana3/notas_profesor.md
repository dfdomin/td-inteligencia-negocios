# Notas del Profesor — Semana 3
## Procesos y Automatización

---

## 1. Enfoque de la sesión

**Regla central:** Primero se mejora el proceso, luego se automatiza. Si el estudiante propone automatizar sin haber mejorado primero, preguntar: "¿Por qué automatizar un proceso que tiene errores de diseño?"

Esta sesión es la puente entre el mapa de experiencia (semana 2) y las tecnologías habilitadoras (semana 4). El estudiante pasa de "que le duele al cliente" a "cómo se resuelve ese dolor a nivel de proceso".

**Advertencia:** No dejar que el estudiante proponga "una app" o "un sistema" antes de haber mapearado el proceso. La tecnología es resultado del análisis, no el punto de partida.

---

## 2. Secuencia sugerida

### Bloque 1 — Concepto (20 minutos)
**Objetivo:** Comprender la diferencia entre mapear procesos, mejorarlos y automatizarlos.

1. Pregunta inicial (5 min):
   "¿Cuántos pasos tiene un pedido de Mercado360 hoy desde que el cliente escribe hasta que recibe el producto?"

2. Concepto de proceso AS-IS (10 min):
   - Explicar que AS-IS es la foto del proceso hoy, sin juicios.
   - Mostrar ejemplo en tablero: proceso de pedir pizza por teléfono vs. por app.
   - El proceso de teléfono tiene: esperar, dar la dirección de nuevo, esperar, confirmar, esperar. La app tiene: elegir, pagar, tracked.

3. Concepto de TO-BE y automatización (5 min):
   - TO-BE es como debe quedar el proceso.
   - Automatizar es usar tecnología para ejecutar pasos.
   - Primero se mejora, luego se automatiza.

**Punto clave:** Si el proceso actual tiene 8 pasos y 3 de ellos son esperar, el TO-BE no es "los mismos 8 pasos pero en una app". Es "como quitamos los pasos de espera".

---

### Bloque 2 — Caso Mercado360 (30 minutos)
**Objetivo:** Mapear el proceso actual de pedido e identificar puntos de fricción.

1. Pedir a un estudiante que acted out el proceso de pedir por WhatsApp (10 min):
   - Un estudiante es el cliente, otro es el vendedor.
   - El grupo va diciendo los pasos mientras se escriben en el tablero.
   - Anotar los problemas en cada paso.

2. Identificar puntos de fricción (15 min):
   - En el tablero, marcar con (*) los pasos donde hay espera, reproceso o error.
   - Calcular aproximadamente cuanto tiempo se pierde en cada paso.

3. Discutir: "¿Se puede eliminar alguno de estos pasos? ¿Se puede hacer en paralelo? ¿Se puede automatizar?" (5 min).

---

### Bloque 3 — Taller AS-IS / TO-BE (45 minutos)
**Objetivo:** Producir la evidencia de la semana.

1. Trabajo en equipos (35 min):
   - Equipos de 3-4 personas.
   - Mapear proceso AS-IS con 5+ pasos.
   - Identificar 3+ puntos de fricción con causa raíz.
   - Disear proceso TO-BE con cambios justificados.
   - Identificar la automatización de mayor impacto.

2. Presentación rápida (10 min):
   - Cada equipo presenta: 1 punto de fricción + 1 cambio en el TO-BE.

**Nota sobre evidencia:**
- La evidencia es individual, no grupal.
- El mapa de flujograma puede ser simple (tabla con flechas o bullets numerados).
- Lo importante es que cada cambio en el TO-BE tenga justificación (por qué resuelve un problema del AS-IS).

---

### Bloque 4 — Cierre (15 minutos)
**Objetivo:** Consolidar aprendizaje y preparar semana 4.

1. Pregunta de cierre (5 min):
   "¿Cuál de las mejoras propuestas en el TO-BE requiere tecnología y cual no?"

2. Introducción a semana 4 (10 min):
   - La semana que viene: Tecnologías habilitadoras.
   - Vamos a ver que tecnologías pueden habilitar las mejoras propuestas en el TO-BE de Mercado360.
   - "¿Cuál tecnología permite que el WhatsApp responda automáticamente con disponibilidad de inventario?"

---

## 3. Errores típicos de los estudiantes

1. **Proponer automatización sin haber mejorado el proceso.** Resolver: "¿Cuántos pasos tiene el proceso actual? ¿Todos son necesarios? ¿Se puede eliminar alguno antes de automatizar?"

2. **Saltar a la solución tecnológica antes del análisis del proceso.** Resolver: "¿Cuál es el paso con mayor problema? ¿Se puede resolver sin tecnología primero?"

3. **No justificar los cambios del TO-BE.** Resolver: "¿Por qué ese cambio? ¿Qué problema del AS-IS resuelve? ¿Cuánto cuesta implementarlo?"

4. **Mapear el proceso desde la perspectiva de la empresa, no del cliente.** Resolver: "¿El cliente siente este paso? ¿El cliente paga por este paso? Si no, por qué existe?"

5. **Subestimar el costo de la automatización.** Resolver: "¿Tiene Mercado360 presupuesto para eso? ¿Tiene talento para mantenerlo?"

---

## 4. Materiales necesarios

| Material | Cantidad | Uso |
|---|---|---|
| Caso Mercado360 | 1 por estudiante | Referencia |
| Plantilla de mapa AS-IS/TO-BE | 1 por estudiante | Actividad |
| Tablero o papelógrafo | 1 | Construccion grupal |
| Marcadores | 4 | Tablero |

---

## 5. Nota sobre tipos de automatización

Si el estudiante pregunta que tipo de automatización usar en Mercado360, las opciones mas viables son:

1. **Chatbot de WhatsApp** (automatización de comunicación): Para confirmar disponibilidad y apartar productos.
   - Costo: $300.000-$1.500.000 COP/mes (servicios como Botmaker, Landbot o desarrollo propio con Twilio).
   - Viabilidad: Alta. No requiere integración compleja con inventario si se hace con consulta manual al inicio.
   - Limitación: No sustituye la actualizacion de inventario, solo mejora la respuesta.

2. **Automatización de inventario (sin ERP completo):** Con herramientas como AirTable o Google Sheets con integración.
   - Costo: $0-$200.000 COP/mes (AirTable gratis hasta 1.000 registros).
   - Viabilidad: Media-alta.
   - Limitación: Requiere que alguien actualice la base de datos cuando llega producto.

3. **RPA (Robotic Process Automation):** Para tareas como pasar datos de WhatsApp a una hoja de calculo.
   - Costo: Herramientas como Make (Integromat) tienen planes desde $9/mes.
   - Viabilidad: Media. Requiere configuración inicial.
   - Limitación: No resuelve el problema de datos no actualizados.

---

## 6. Tiempo total de la sesión

| Bloque | Duración | Acumulado |
|---|---|---|
| Concepto | 20 min | 20 min |
| Caso | 30 min | 50 min |
| Taller | 45 min | 95 min |
| Cierre | 15 min | 110 min |
| Buffer | 10 min | 120 min |

---

## 7. Seguimiento para semana 4

**Conexion directa:**
- Los cambios propuestos en el TO-BE de la semana 3 son los que se van a evaluar tecnologicamente en la semana 4.
- Por ejemplo: Si el equipo propuso "bot que consulta inventario y responde por WhatsApp", la semana 4 se evaluara: "¿Qué tecnología habilita eso? ¿Cuál es la diferencia entre un chatbot, una integración con API, y un sistema de inventario?"

**Pregunta de apertura para semana 4:**
"¿Cuál de las tecnologías habilitadoras (Cloud, IA, IoT, datos, automatización) es la mas relevante para resolver el dolor de inventario desactualizado en Mercado360? ¿Por qué?"