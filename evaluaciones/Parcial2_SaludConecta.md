# Parcial 2 — Semana 10
## Evaluación: Propuesta de Solución Digital
**Caso espejo:** SaludConecta IPS S.A.S.
**Ponderacion:** 25% de la nota final del modulo

---

## 1. Contexto del parcial

SaludConecta IPS S.A.S. es una Institución Prestadora de Servicios de Salud ubicada en Chia, Cundinamarca, con cobertura en Cundinamarca, Boyaca y Meta. La institución enfrenta problemas criticos con la demora en autorizaciones previas (promedio 12 días contra una meta de 3 días), lo que genera insatisfacción en pacientes, sobrecarga administrativa y riesgos normativos bajo Supersalud.

El estudiante actuara como **consultor de soluciones digitales** y debera entregar una propuesta viable que conecte problema, proceso, tecnología, datos y métricas.

---

## 2. Dossier del caso

El dossier completo esta en:
```
casos/saludconecta/DOSSIER.md
```

Contiene:
- Carta de solicitud de la CRES.
- Descripción completa de la IPS y servicios habilitados.
- Proceso actual de autorizaciones paso a paso.
- Datos operativos 2025 (19.420 solicitudes, 7 EPS aseguradoras).
- Registro PQRS 2025 (1.156 quejas, 78% por demoras).
- Caso de ejemplo completo de autorización de rodilla (35 días, $3.9M costo oculto).
- Marco legal: Ley 1581/2012, Decreto 4747/2007, Circular Supersalud.
- Restricciones del proyecto.

---

## 3. Instrucciones para el estudiante

### 3.1 Antes de la evaluación
1. Leer el dossier de SaludConecta al menos dos veces.
2. Identificar el problema central (demora en autorizaciones) y sus causas raíz.
3. Revisar el caso de transformación de Mercado360 para comparar contextos.
4. Tener presente la normatividad de protección de datos aplicable (Ley 1581, datos sensibles de salud).

### 3.2 Durante la evaluación
- Duración: 90 minutos.
- Modalidad: Escrita, con apoyo del dossier.
- El estudiante debe entregar un documento único en formato PDF o Word.
- No se permite internet durante el examen.

### 3.3 Producto esperado

Un documento de máximo 10 páginas (sin contar anexos) que incluya:

**Sección A — Proceso AS-IS (1.5 páginas)**
- Diagrama o flujograma del proceso actual de autorizaciones.
- Identificación de puntos de fricción, esperas, reprocesos y errores.
- Tiempos estimados por etapa.

**Sección B — Proceso TO-BE (2 páginas)**
- Diagrama o flujograma del proceso mejorado.
- Cambios propuestos y su justificación (por qué resuelven el problema).
- Nuevo tiempos esperados.

**Sección C — Tecnología habilitadora (2 páginas)**
- Tecnología seleccionada con justificación (nombre de herramienta, categoria, razones).
- Alternativas descartadas (al menos 2) con razon de descarte.
- Consideraciones de implementación (integración, datos existentes, capacidad del equipo).
- Cumplimiento normativo (proteger datos de salud bajo Ley 1581).

**Sección D — Datos necesarios y KPIs (indicadores clave de desempeno / Key Performance Indicators) (1.5 páginas)**
- Datos que se requieren para operar la solución.
- Fuentes de datos identificadas.
- 5 KPIs con definición operacional y metas.
- Cómo se miden los KPIs en la práctica.

**Sección E — Matriz de riesgos digitales (1.5 páginas)**
- Al menos 5 riesgos específicos.
- Para cada riesgo: descripción, probabilidad (Alta/Media/Baja), impacto (Alto/Medio/Bajo), estrategia de mitigacion.
- Al menos 2 riesgos deben relacionarse con protección de datos de salud.

**Sección F — Prototipo conceptual (1 página)**
- Mockup simple de la pantalla principal de la solución propuesta (puede ser un wireframe a mano alzada descrito textualmente).
- Funcionalidad clave que se observa en el prototipo.

---

## 4. Tiempo sugerido

| Sección | Tiempo | Puntos |
|---|---|---:|
| Sección A — Proceso AS-IS | 10 min | 10 |
| Sección B — Proceso TO-BE | 20 min | 20 |
| Sección C — Tecnología | 20 min | 25 |
| Sección D — Datos y KPIs | 15 min | 20 |
| Sección E — Matriz de riesgos | 10 min | 15 |
| Sección F — Prototipo | 15 min | 10 |
| **Total** | **90 min** | **100 pts** |

---

## 5. Rubrica

| Criterio | Peso | Destacado (90-100) | Satisfactorio (70-89) | En desarrollo (40-69) | Insuficiente (0-39) |
|---|---|---|---|---|---|
| **Proceso AS-IS** | 10% | Flujograma completo con todas las etapas, tiempos, puntos de fricción claramente marcados, causas raíz identificadas. | Flujograma con la mayoría de etapas y puntos de fricción. Faltan algunas causas raíz. | Flujograma incompleto o con pocas etapas. | No entrega o sin conexión al caso. |
| **Proceso TO-BE** | 20% | TO-BE completo con cambios bien justificados (por cada cambio: que problema resuelve), nuevo flujo de tiempo razonable. | TO-BE con mayoría de cambios justificados, flujos claros. | TO-BE incompleto o con justificaciones superficiales. | No entrega o copia del AS-IS sin cambios. |
| **Tecnología habilitadora** | 25% | Tecnología bien justificada con 2+ alternativas descartadas, consideración de integración y capacidad del equipo, referencia a normatividad de datos de salud. | Tecnología justificada con 1 alternativa descartada. | Tecnología mencionada sin alternativas ni justificaciones. | No propone tecnología o es inviable. |
| **Datos y KPIs** | 20% | 5+ KPIs bien definidos (formula o método de calculo, meta, frecuencia de medición), datos y fuentes identificados. | 3-4 KPIs bien definidos. | Menos de 3 KPIs o sin definición operacional. | No entrega esta sección. |
| **Matriz de riesgos** | 15% | 5+ riesgos con probabilidad, impacto y mitigacion. Al menos 2 riesgos de datos de salud. Conexion clara con la solución propuesta. | 4 riesgos bien estructurados, al menos 1 de datos. | Menos de 4 riesgos o sin estructura. | No entrega o sin relación al caso. |
| **Prototipo conceptual** | 10% | Wireframe bien descrito con funcionalidad clave de la solución y flujo de uso. | Wireframe básico con funcionalidad principal. | Wireframe vago o sin descripción de funcionalidad. | No entrega. |

---

## 6. Criterios asociados a Resultados de Aprendizaje

| RA | Criterio de evaluación | Ponderacion en el parcial |
|---|---|---:|
| **RA1** | Distingue las particularidades de las nuevas tecnologías y su aplicación en procesos organizacionales. | 25% (Sección C) |
| **RA2** | Identifica información estratégica para la adopcion de soluciones digitales (datos, métricas, riesgos). | 40% (Secciones D, E) |
| **RA3** | Propone estrategias de transformación digital (procesos, tecnología, cambio). | 35% (Secciones A, B, F) |

---

## 7. Respuestas esperadas — Guia para el docente

### Sección A — Proceso AS-IS

Flujo esperado de autorizaciones (resumen):
1. Medico genera solicitud (dia 1).
2. Auxiliar entrega formato FNA-003 en papel al area administrativa (dia 1).
3. Auxiliar transcribe a Excel (dia 2-3).
4. Auxiliar escanea doc y envia por email a EPS (dia 3-4).
5. EPS recibe, valida y deriva (dia 4-10, variable).
6. autorización regresa por email o llamada (dia 5-12).
7. Auxiliar notifica al paciente por WhatsApp o llamada (dia 6-12).
8. Paciente debe llamar a confirmar si no recibe notificación (frustración).

**Puntos de fricción esperados:**
- Transcripcion manual a Excel (error humano).
- Sin seguimiento: nadie sabe en que estado esta una solicitud.
- Notificacion pasiva: paciente espera sin saber.
- Sin SLA (acuerdo de nivel de servicio / Service Level Agreement): EPS se toma el tiempo que quiera.

---

### Sección B — Proceso TO-BE

Cambios esperados:
1. Solicitud electrónica desde el sistema de información (no papel).
2. Envio automático a EPS por API (interfaz de programación de aplicaciones / Application Programming Interface) o portal (si esta disponible).
3. Seguimiento en tiempo real con estado visible para auxiliar y paciente.
4. Notificacion automática por SMS/WhatsApp al paciente.
5. Registro único de autorización en base de datos.

**Tiempo esperado:** Reduccion de 12 días a 3-5 días.

---

### Sección C — Tecnología

Opciones fuertes para una IPS pequeña:
1. **Sistema de información hospitalario (SIH) o clinico** básico con modulo de autorizaciones. Ejemplos: Salvi, Sien, Sistema pryTEMIS (o desarrollo interno con Airtable como victoria rápida).
2. **Airtable o similar** cómo solución transicional rápida (bajo costo, sin desarrollo, permite seguimiento de solicitudes).
3. **Excel mejorado con macros** (última opcion, solo si no hay otra).

Se espera que el estudiante considere el costo, la capacidad del equipo y la protección de datos de salud (Ley 1581, datos sensibles).

---

### Sección D — KPIs

KPIs esperados:
1. **Tiempo promedio de autorización** (desde solicitud hasta autorización): meta < 3 días.
2. **Tasa de autorizaciones rechazadas** (motivos de rechazo): meta < 10%.
3. **Tasa de resolucion en primera llamada** (paciente recibe respuesta en el primer contacto): meta > 80%.
4. **Numero de PQRS por demora** (mensual): reducción del 78% actual.
5. **Costo por proceso de autorización** (costo administrativo / solicitudes): reducción del 20%.

---

### Sección E — Matriz de riesgos

Riesgos esperados:
1. **Falla de integración con EPS** — probabilidad media, impacto alto. Mitigacion: tener proceso alternativo en papel mientras tanto.
2. **Filtracion de datos de salud** (Ley 1581) — probabilidad baja, impacto muy alto. Mitigacion: cifrado, politicas de acceso, minima información.
3. **Resistencia del personal administrativo** — probabilidad alta, impacto medio. Mitigacion: formación, involucramiento temprano.
4. **Dependencia de proveedor tecnológico** — probabilidad media, impacto medio. Mitigacion: contratos con SLA (acuerdo de nivel de servicio / Service Level Agreement), propiedad de datos.
5. **Cambio de EPS sin API** — probabilidad alta, impacto bajo. Mitigacion: tener formatos PDF estandar como respaldo.

---

## 8. Materiales que puede usar el estudiante

| Material | Disponibilidad |
|---|---|
| Dossier de SaludConecta | Entregado en papel y digital |
| Caso Mercado360 | Referencia previa en el curso |
| Notas de clase semanas 6-9 | Uso libre |
| Plantilla de matriz de riesgos | Proporcionada por el docente |
| Plantilla de AS-IS / TO-BE | Proporcionada por el docente |

---

## 9. Notas para el docente

- **Semana de aplicación:** Semana 10 del calendario.
- **Modalidad de entrega:** Individual, maxima 10 páginas.
- **Ponderacion en la nota final del modulo:** 25%.
- **Recuperación:** Semana 14 (aplica solo si falta por inasistencia o rendimiento bajo en evaluación final).
