# Semana 7 — Datos, Analítica y KPIs

## Propósito

Definir qué información estratégica necesita Mercado360 para medir si su transformación digital está funcionando. Un KPI sin decisión no es un KPI — es un número sin propósito.

## En clase

- Identificar fuentes de datos actuales y faltantes en la organización.
- Clasificar los datos según el tipo de analítica que habilitan.
- Formular KPIs operativos, tácticos y estratégicos con su fórmula, fuente, frecuencia y decisión asociada.
- Bosquejar un tablero conceptual (dashboard) con los indicadores prioritarios.

## Evidencia

Lista de mínimo 8 KPIs con: nombre, fórmula, fuente de datos, frecuencia de medición y decisión que se toma cuando el indicador cambia. Al menos 3 KPIs de cliente, 3 de proceso y 2 de resultado.

## Conexión con semana anterior

La semana 6 propuso el MVP de consulta de inventario por WhatsApp como quick win. La pregunta de apertura de esta semana es: si ese MVP se lanza a 20 clientes, ¿qué métricas nos dicen en 2 semanas si está funcionando o no?

---

## Contenido detallado

### 1. ¿Por qué datos antes de tecnología?

La transformación digital no empieza con una herramienta — empieza con información. Una empresa que no sabe cuánto vende por producto, por cliente o por día no puede mejorar lo que no mide.

El error más común es comprar software esperando que genere hallazgos (insights). El software genera datos; los hallazgos (insights) los produce el análisis de esos datos.

### 2. Fuentes de datos en una empresa

**Fuentes internas:**
- Sistema de punto de venta (POS)
- Inventario (existencias, entradas, salidas)
- Ventas (por producto, por canal, por vendedor)
- Clientes (registro, historial de compra)
- Finanzas (cuentas por cobrar, por pagar, flujo de caja)
- Recursos humanos (rotación, satisfacción)

**Fuentes externas:**
- Mercado (precios de competidores, tendencias)
- Redes sociales (comentarios, menciones, reseñas)
- Proveedores (disponibilidad, lead times)
- Regulatorio (normas, requisitos legales)

**Faltantes típicos en empresas pequeñas y medianas:**
- No hay registro de ventas por producto
- No hay trazabilidad de pedidos
- No hay histórico de clientes
- No hay medición de tiempo de entrega

### 3. La pirámide DIKW

```
        Ápice — Sabiduría
       /                 \
      /    Conocimiento   \
     /                      \
    /      Información       \
   /                            \
  /        Datos                 \
```

- **Datos:** hechos sin contexto (el cliente compró 3 unidades)
- **Información:** datos procesados (el cliente X compra en promedio 3 unidades mensuales)
- **Conocimiento:** información aplicada (el cliente X compra más cuando hay promoción de producto fresco)
- **Sabiduría:** decisión correcta basada en conocimiento (como profesor, debo ofrecerle la promoción correcta en el momento correcto)

### 4. Tipos de analítica

| Tipo | Pregunta que responde | Ejemplo en Mercado360 |
|------|---------------------|----------------------|
| Descriptiva | ¿Qué pasó? | Ventas del mes vs. mes anterior |
| Diagnóstica | ¿Por qué pasó? | ¿Por qué cayó la venta de insumos agrícolas? |
| Predictiva | ¿Qué va a pasar? | Pronóstico de demanda para la próxima semana |
| Prescriptiva | ¿Qué debemos hacer? | Recomendación de pedido automático |

### 5. KPI — Concepto y estructura

Un KPI (Key Performance Indicator) es un indicador que mide el avance hacia un objetivo estratégico. No todo número es un KPI.

**Componentes de un KPI válido:**

1. **Nombre** — claro y sin ambigüedad
2. **Fórmula** — cómo se calcula
3. **Fuente de datos** — de dónde sale la información
4. **Frecuencia** — cada cuánto se mide
5. **Decisión** — qué se hace si el valor cambia (arriba o abajo)
6. **Meta** — valor objetivo

**Un KPI sin decisión es un número muerto.**

Si no puedes decir qué harías si el indicador sube o baja, ese indicador no es un KPI — es una curiosidad.

### 6. Categorías de KPIs

**KPIs de cliente:**
- Tasa de retención (¿cuántos clientes vuelven a comprar?)
- Tiempo de respuesta (¿cuánto tarda el equipo en resolver una consulta?)
- NPS (Net Promoter Score — ¿cuánto probable es que recomienden?)
- Costo de adquisición (¿cuánto cuesta conseguir un cliente nuevo?)

**KPIs de proceso:**
- Tiempo de ciclo (¿cuánto tarda el proceso de pedido?)
- Tasa de errores (¿cuántos pedidos se equivocan?)
- Capacidad utilizada (¿qué porcentaje del inventario se vende?)
- Tiempo de entrega (¿cuánto tarda desde que se pide hasta que se entrega?)

**KPIs de resultado:**
- Margen bruto (¿cuánto gana la empresa por peso vendido?)
- Crecimiento de ventas (¿a qué ritmo crecen las ventas?)
- Participación de mercado (¿qué porcentaje del mercado capturemos?)
- ROI de proyecto (¿cuánto retorno genera la inversión en tecnología?)

### 7. Tableros (dashboards)

Un dashboard es una representación visual de los KPIs más importantes para una audiencia específica.

**Reglas de diseño:**
- Un dashboard por audiencia (gerente general vs. coordinador de ventas vs. dueño)
- Máximo 7 indicadores visibles sin scroll
- Colores consistentes: verde = meta cumplida, amarillo = atención, rojo = acción requerida
- Actualización según la frecuencia del KPI (ventas diarias = dashboard diario; estrategia = dashboard mensual)

### 8. Aplicación a Mercado360

**Fuentes de datos identificadas:**
- POS: ventas por producto y horario ✅ disponible
- WhatsApp: volumen de mensajes ✅ disponible (meta)
- Inventario: existencias por producto ⚠️ parcial (sin actualizar en tiempo real)
- Clientes: registro básico ✅ disponible
- Proveedores: lead times ❌ no documentado

**KPIs priorizados para el MVP de consulta de inventario:**

| KPI | Fórmula | Fuente | Frecuencia | Decisión |
|-----|---------|--------|------------|--------|
| Tasa de respuesta | Mensajes respondidos / Total mensajes | WhatsApp | Semanal | Si baja de 80%: aumentar personal |
| Consulta completada | Consultas con respuesta de disponibilidad / Total consultas | WhatsApp + inventario | Semanal | Si tasa < 60%: mejorar datos de inventario |
| Pedidos generados | Pedidos nuevos vía WhatsApp / Total consultas | WhatsApp | Semanal | Si > 20% de consultas generan pedido: escalar |
| Satisfacción del cliente | Calificación promedio (1-5) | WhatsApp | Quincenal | Si < 4: revisar tono y precisión de respuesta |

---

## Actividad práctica — Taller de KPIs (60 minutos)

**Bloque 1 — Identificar fuentes (20 minutos)**

En equipos de 3-4 personas:
1. Revisar la empresa asignada (Mercado360 o caso espejo).
2. Listar las fuentes de datos que ya existen.
3. Listar las fuentes de datos que faltan.
4. Clasificar cada fuente cómo interna/externa y operacional/estratégica.

**Bloque 2 — Formular KPIs (30 minutos)**

1. Elegir 3 dolores priorizados en semanas anteriores.
2. Por cada dolor, formular 2 KPIs: uno de proceso, uno de resultado.
3. Para cada KPI escribir: nombre, fórmula, fuente, frecuencia, decisión.
4. Identificar el KPI más crítico — el que si no se cumple, el proyecto falla.

**Bloque 3 — Presentación (10 minutos)**

Cada equipo presenta:
- Las 2 fuentes de datos más valiosas que encontraron.
- Los 3 KPIs formulados con su decisión.
- Por qué esos KPIs son los correctos para medir el avance.

---

## Fuentes

- Davenport, T.H. & Harris, J.G. (2017). *Competing on Analytics*. Harvard Business Review Press. Caps 1-3.
- Morewedge, C.K. (2015). "DIKW Pyramid." En: *Encyclopedia of Knowledge Management*. IGI Global.
- Gartner (2023). "Magic Quadrant for Analytics and Business Intelligence Platforms."
- Cokins, S. (2013). *Performance Management: Finding the Right Information*. Wiley.