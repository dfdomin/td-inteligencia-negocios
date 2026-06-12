# Semana 3 — Procesos y Automatizacion
## TD — Transformacion Digital en la Empresa | IUB — Inteligencia de Negocios

---

## Proposito de la semana

Reconocer procesos manuales, errores recurrentes y oportunidades de automatizacion. El estudiante mapeara el proceso actual (AS-IS) y diseara un proceso mejorado (TO-BE) para el escenario de pedido por WhatsApp en Mercado360.

**Preguntas clave:**
- ¿Cuál es el proceso actual de un pedido por WhatsApp en Mercado360?
- ¿Dónde se pierde informacion, donde hay reprocesos y donde hay errores?
- ¿Cuál es el proceso mejorado que reduce los dolores y las ineficiencias?
- ¿Cuál es la diferencia entre automatizar y mejorar un proceso?

---

## 1. Conceptos clave

### 1.1 Proceso empresarial

Un proceso empresarial es una secuencia de actividades que transforma inputs en outputs, generando valor para el cliente interno o externo.

**Caracteristicas de un buen proceso:**
- Tiene un inicio y un fin claros.
- Genera un resultado measurable.
- Tiene un dueño del proceso (responsable).
- Es repetible (no es unico).
- Se puede mejorar.

**En lenguaje empresarial:** Un proceso es "lo que pasa cuando alguien pide algo" en la empresa. Si ese flujo tiene pasos claros, se puede mejorar. Si no lo tiene, es caos.

**Fuente:**
- Hammer, M. & Champy, J. (1993). *Reengineering the Corporation*. Harper Business.

---

### 1.2 Mapeo de proceso AS-IS y TO-BE

**AS-IS (como es hoy):** Descripcion del proceso actual, paso a paso, sin juicios. Muestra donde estan los problemas reales.

**TO-BE (como deberia ser):** Descripcion del proceso mejorado. Muestra como se resuelven los problemas identificados.

**Regla de oro:** Nunca disenes el TO-BE sin entender primero el AS-IS. Si no sabes como funciona hoy, no puedes mejorarlo.

**Regla de la automatizacion:** Primero mejora el proceso, luego automatizalo. Si automatizas un proceso malo, obtienes un proceso malo automatizado.

**Diferencia entre automatizar y mejorar:**
- **Mejorar:** Cambiar el flujo para eliminar pasos innecesarios, reducir esperas, eliminar errores.
- **Automatizar:** Usar tecnologia para ejecutar pasos que antes hacian personas.

**Importante:** Primero se mejora, luego se automatiza.

**Fuente:**
- Dumas, M. et al. (2018). *Fundamentals of Business Process Management*. Springer.

---

### 1.3 Tipos de automatizacion

| Tipo | Descripcion | Ejemplo en Mercado360 |
|---|---|---|
| **Automatizacion de tareas (RPA)** | Robot que hace tareas repetitivas que antes hacia una persona. | Bot de WhatsApp que confirma disponibilidad. |
| **Automatizacion de flujo** | Conectar sistemas para que la informacion fluya sin intervencion manual. | Inventario que se actualiza solo cuando llega producto. |
| **Automatizacion de decision** | El sistema toma decisiones simples sin intervencion humana. | Descuentos automaticos por lealtad. |
| **Automatizacion de comunicacion** | Notificaciones automaticas por canal. | Recordatorio de carrito abandonado por WhatsApp. |

---

### 1.4 Identificacion de puntos de friccion en el proceso

**Dolores tipicos en procesos:**
- **Pasos manuales:** Alguien tiene que transcribir informacion de un medio a otro.
- **Esperas:** El proceso se detiene esperando que alguien haga algo.
- **Reprocesos:** Hay que hacer algo de nuevo porque se perdio o erro.
- **Decisiones manuales en puntos de alto volumen:** Alguien decide en un paso que podria ser automatico.
- **Falta de informacion:** Quien hace el siguiente paso no tiene la informacion que necesita.

**En lenguaje empresarial:** "¿Cuánto cuesta cada hora de espera en un proceso? ¿Cuánto cuesta cada error que requiere reproceso? ¿Cuánto cuesta cada vez que alguien transcribe mal un dato?"

---

## 2. Aplicacion a Mercado360

### Proceso AS-IS — Pedido por WhatsApp

**Escenario:** Un cliente ve un producto en Instagram y escribe por WhatsApp a Mercado360 para preguntar disponibilidad.

**Pasos del proceso actual:**
1. Cliente escribe por WhatsApp preguntando por producto, talla y cantidad.
2. Vendedor recibe el mensaje (puede estar atendiendo en tienda o no estar disponible).
3. Vendedor busca en su memoria o en el cuaderno si hay disponibilidad.
4. Vendedor responde "si hay" o "no hay" (si lo recuerda correctamente).
5. Si hay, cliente dice que va a la tienda.
6. Cliente llega a la tienda, pregunta por el producto.
7. Vendedor busca en inventario... a veces no esta porque el cuaderno no esta actualizado.
8. Cliente se va sin comprar.

**Problemas identificados:**
| Paso | Problema | Tipo de dolor |
|---|---|---|
| 2 | Vendedor no responde rapido (puede estar atendiendo) | Espera |
| 3 | Busqueda en memoria = informacion incompleta | Dato |
| 4 | Respuesta sin confirmacion de inventario real | Dato |
| 7 | Inventario desactualizado | Proceso + Dato |

**Costo estimado del problema:**
- Tiempo del vendedor: 15-20 min por consulta.
- Tasa de conversion: ~60% de consultas se convierten en ventas (estimado gerente).
- Costo por venta perdida por faltante: $137.000 COP (ticket promedio) x 40% de perdu00f3.

---

### Proceso TO-BE — Pedido por WhatsApp mejorado

**Escenario mejorado:** Cliente escribe por WhatsApp, el sistema responde con disponibilidad real y confirma reserva.

**Pasos del proceso mejorado:**
1. Cliente escribe por WhatsApp preguntando por producto.
2. Bot automatico recibe el mensaje, busca en inventario actualizado.
3. Bot responde con disponibilidad real (SKU, talla, cantidad).
4. Si hay disponibilidad, bot ofrece apartar por 2 horas (reserva).
5. Cliente confirma apartar.
6. Sistema reserva el producto, notifica al vendedor.
7. Vendedor confirma al cliente que el producto esta aparte00f1do.
8. Cliente llega a la tienda, pide el producto, confirma que le lo tienen.

**Mejoras aplicadas:**
| Paso AS-IS | Paso TO-BE | Mejora |
|---|---|---|
| Vendedor busca en memoria | Bot consulta inventario en tiempo real | Dato + Eficiencia |
| Respuesta con incertidumbre | Respuesta con disponibilidad real | Confianza del cliente |
| No hay reserva | Reserva automatica de 2 horas | Conversion |
| Inventario desactualizado | Inventario actualizado en tiempo real por venta entrada | Confiabilidad |

**Resultado esperado:**
- Tiempo de respuesta: de 20 min a 2 min.
- Tasa de conversion: de 60% a 80%.
- Tasa de reserva cumplida: de N/A a 90%.

---

## 3. Actividad practica

### Taller: Mapa AS-IS / TO-BE del proceso de pedido

**Duracion:** 45 minutos.

**Instrucciones:**
1. En equipos de 3-4 personas.
2. Elegir UN proceso de Mercado360 para mapear:
   - Opcion A: Proceso de pedido por WhatsApp (recomendado).
   - Opcion B: Proceso de devolucion.
   - Opcion C: Proceso de promocion en Instagram.
3. Mapear el proceso AS-IS con:
   - Pasos del proceso (inicio a fin).
   - Responsable de cada paso.
   - Tiempo estimado por paso.
   - Problemas identificados en cada paso.
4. Disear el proceso TO-BE con:
   - Cambios propuestos por paso.
   - Tecnologia habilitadora (nombre general).
   - Resultado esperado (metricas).
5. Identificar el paso con mayor oportunidad de automatizacion.

**Entregable:** Mapa AS-IS / TO-BE en formato de flujograma o tabla. Presentacion de 5 minutos por grupo.

---

## 4. Evidencia entregable

**Mapa AS-IS / TO-BE del proceso de pedido de Mercado360** — documento individual.

**Debe incluir:**
1. Descripcion del proceso AS-IS con al menos 5 pasos.
2. Identificacion de puntos de friccion (al menos 3) con causa raiz y costo estimado.
3. Descripcion del proceso TO-BE con cambios propuestos.
4. Para cada cambio: que problema resuelve, que tecnologia lo habilita.
5. Identificacion de la automatizacion de mayor impacto con justificacion.

**Extencion maxima:** 5 paginas.

---

## 5. Preguntas orientadoras

1. ¿Por que es importante mapear el proceso AS-IS antes de disenar el TO-BE?
2. ¿Cuál es la diferencia entre mejorar un proceso y automatizarlo?
3. ¿Por que no se debe automatizar un proceso que no ha sido mejorado primero?
4. ¿Cuál es el paso del proceso de pedido de Mercado360 con mayor oportunidad de automatizacion?
5. ¿Cuánto le cuesta a Mercado360 cada proceso de pedido mal ejecutado?

---

## 6. Fuentes recomendadas

**Obligatorias:**
- Hammer, M. & Champy, J. (1993). *Reengineering the Corporation*. Harper Business.
- Dumas, M. et al. (2018). *Fundamentals of Business Process Management*. Springer.

**Complementarias:**
- van der Aalst, W. (2013). *Process Mining: Data Science in Action*. Springer.
- Silver, B. (2018). *BPMS for Dummies*. Oracle.

---

## 7. Rubrica para la evidencia

| Criterio | Peso | Destacado | Satisfactorio | En desarrollo | Insuficiente |
|---|---|---|---|---|---|
| Proceso AS-IS completo (5+ pasos) | 25% | 5+ pasos con responsable, tiempo y problemas identificados. Cada problema tiene causa raiz. | 5+ pasos pero algunos sin problemas identificados. | Menos de 5 pasos o sin estructura. | No entrega AS-IS. |
| Puntos de fricción (3+ dolores) | 20% | 3+ dolores con causa raíz y costo estimado por paso. | 3 dolores pero sin costo estimado. | 1-2 dolores sin causa raíz. | No identifica dolores. |
| Proceso TO-BE con cambios | 25% | TO-BE completo con 3+ cambios. Cada cambio tiene justificación (problema que resuelve) y tecnología habilitadora. | TO-BE con cambios pero faltan justificaciones o tecnología. | TO-BE incompleto o sin justificación. | No entrega TO-BE o es copia del AS-IS. |
| Automatización de mayor impacto | 20% | Identifica automatización con justificación clara (impacto, viabilidad, costo estimado). | Identifica automatización pero sin justificación completa. | Identifica automatización sin justificación. | No entrega. |
| Estructura y calidad | 10% | Documento claro, maximo 5 paginas, sin errores. | Documento claro con maximo 5 paginas. | Documento desorganizado o > 5 paginas. | No entrega. |

---

## 8. Conexion con las semanas siguientes

| Semana | Tema | Conexion con semana 3 |
|---|---|---|
| Semana 2 | Mapa del recorrido del cliente (journey map) | La etapa de mayor fricción del recorrido del cliente (journey) se convierte en el proceso a rediseñar. |
| Semana 4 | Tecnologias habilitadoras | Las tecnologias propuestas en el TO-BE se evaluaran en detalle. |
| Semana 7 | Datos y analitica | Los datos que genera el proceso automatizado se convierten en KPIs. |
| Semana 5 | Parcial 1 | Se aplica el metodo AS-IS/TO-BE a RetailNova. |