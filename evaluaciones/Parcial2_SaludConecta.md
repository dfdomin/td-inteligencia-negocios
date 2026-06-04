# Parcial 2 — Semana 10
## Evaluacion: Propuesta de Solucion Digital
**Caso espejo:** SaludConecta IPS S.A.S.
**Ponderacion:** 25% de la nota final del modulo

---

## 1. Contexto del parcial

SaludConecta IPS S.A.S. es una Institucion Prestadora de Servicios de Salud ubicada en Chia, Cundinamarca, con cobertura en Cundinamarca, Boyaca y Meta. La institucion enfrenta problemas criticos con la demora en autorizaciones previas (promedio 12 dias contra una meta de 3 dias), lo que genera insatisfaccion en pacientes, sobrecarga administrativa y riesgos normativos bajo Supersalud.

El estudiante actuara como **consultor de soluciones digitales** y debera entregar una propuesta viable que conecte problema, proceso, tecnologia, datos y metricas.

---

## 2. Dossier del caso

El dossier completo esta en:
```
casos/saludconecta/DOSSIER.md
```

Contiene:
- Carta de solicitud de la CRES.
- Descripcion completa de la IPS y servicios habilitados.
- Proceso actual de autorizaciones paso a paso.
- Datos operativos 2025 (19.420 solicitudes, 7 EPS aseguradoras).
- Registro PQRS 2025 (1.156 quejas, 78% por demoras).
- Caso de ejemplo completo de autorizacion de rodilla (35 dias, $3.9M costo oculto).
- Marco legal: Ley 1581/2012, Decreto 4747/2007, Circular Supersalud.
- Restricciones del proyecto.

---

## 3. Instrucciones para el estudiante

### 3.1 Antes de la evaluacion
1. Leer el dossier de SaludConecta al menos dos veces.
2. Identificar el problema central (demora en autorizaciones) y sus causas raiz.
3. Revisar el caso de transformacion de Mercado360 para comparar contextos.
4. Tener presente la normatividad de proteccion de datos aplicable (Ley 1581, datos sensibles de salud).

### 3.2 Durante la evaluacion
- Duracion: 90 minutos.
- Modalidad: Escrita, con apoyo del dossier.
- El estudiante debe entregar un documento unico en formato PDF o Word.
- No se permite internet durante el examen.

### 3.3 Producto esperado

Un documento de maximo 10 paginas (sin contar anexos) que incluya:

**Seccion A — Proceso AS-IS (1.5 paginas)**
- Diagrama o flujograma del proceso actual de autorizaciones.
- Identificacion de puntos de friccion, esperas, reprocesos y errores.
- Tiempos estimados por etapa.

**Seccion B — Proceso TO-BE (2 paginas)**
- Diagrama o flujograma del proceso mejorado.
- Cambios propuestos y su justificacion (por que resuelven el problema).
- Nuevo tiempos esperados.

**Seccion C — Tecnologia habilitadora (2 paginas)**
- Tecnologia seleccionada con justificacion (nombre de herramienta, categoria, razones).
- Alternatives descartadas (al menos 2) con reason de descarte.
- Consideraciones de implementacion (integracion, datos existentes, capacidad del equipo).
- Cumplimiento normativo (proteger datos de salud bajo Ley 1581).

**Seccion D — Datos necesarios y KPIs (1.5 paginas)**
- Datos que se requieren para operar la solucion.
- Fuentes de datos identificadas.
- 5 KPIs con definicion operacional y metas.
- Como se miden los KPIs en la practica.

**Seccion E — Matriz de riesgos digitales (1.5 paginas)**
- Al menos 5 riesgos especificos.
- Para cada riesgo: descripcion, probabilidad (Alta/Media/Baja), impacto (Alto/Medio/Bajo), estrategia de mitigacion.
- Al menos 2 riesgos deben связаться con proteccion de datos de salud.

**Seccion F — Prototipo conceptual (1 pagina)**
- Mockup simple de la pantalla principal de la solucion propuesta (puede ser un wireframe a mano alzada descrito textualmente).
- Funcionalidad clave que se observa en el prototipo.

---

## 4. Tiempo sugerido

| Seccion | Tiempo | Puntos |
|---|---|---:|
| Seccion A — Proceso AS-IS | 10 min | 10 |
| Seccion B — Proceso TO-BE | 20 min | 20 |
| Seccion C — Tecnologia | 20 min | 25 |
| Seccion D — Datos y KPIs | 15 min | 20 |
| Seccion E — Matriz de riesgos | 10 min | 15 |
| Seccion F — Prototipo | 15 min | 10 |
| **Total** | **90 min** | **100 pts** |

---

## 5. Rubrica

| Criterio | Peso | Destacado (90-100) | Satisfactorio (70-89) | En desarrollo (40-69) | Insuficiente (0-39) |
|---|---|---|---|---|---|
| **Proceso AS-IS** | 10% | Flujograma completo con todas las etapas, tiempos, puntos de friccion claramente marcados, causas raiz identificadas. | Flujograma con la mayoria de etapas y puntos de friccion. Faltan algunas causas raiz. | Flujograma incompleto o con pocas etapas. | No entrega o sin connection al caso. |
| **Proceso TO-BE** | 20% | TO-BE completo con cambios bien justificados (por cada cambio: que problema resuelve), nuevo flujo de tiempo razonable. | TO-BE con mayoria de cambios justificados, flujos claros. | TO-BE incompleto o con justificaciones superficiales. | No entrega o copy del AS-IS sin cambios. |
| **Tecnologia habilitadora** | 25% | Tecnologia bien justificada con 2+ alternativas descartadas, consideration de integration y capacidad del equipo, referencia a normatividad de datos de salud. | Tecnologia justificada con 1 alternativa descartada. | Tecnologia mencionada sin alternatives ni justificaciones. | No propone tecnologia o es inviable. |
| **Datos y KPIs** | 20% | 5+ KPIs bien definidos (formula o metodo de calculo, meta, frecuencia de medicion), datos y fuentes identificados. | 3-4 KPIs bien definidos. | Menos de 3 KPIs o sin definicion operacional. | No entrega esta seccion. |
| **Matriz de riesgos** | 15% | 5+ riesgos con probabilidad, impacto y mitigacion. Al menos 2 riesgos de datos de salud. Conexion clara con la solucion propuesta. | 4 riesgos bien estructurados, al menos 1 de datos. | Menos de 4 riesgos o sin estructura. | No entrega o sin relación al caso. |
| **Prototipo conceptual** | 10% | Wireframe bien descrito con funcionalidad clave de la solucion y flujo de uso. | Wireframe basico con funcionalidad principal. | Wireframe vago o sin descripcion de funcionalidad. | No entrega. |

---

## 6. Criterios asociados a Resultados de Aprendizaje

| RA | Criterio de evaluacion | Ponderacion en el parcial |
|---|---|---:|
| **RA1** | Distingue las particularidades de las nuevas tecnologias y su aplicacion en procesos organizacionales. | 25% (Seccion C) |
| **RA2** | Identifica informacion estrategica para la adopcion de soluciones digitales (datos, metricas, riesgos). | 40% (Secciones D, E) |
| **RA3** | Propone estrategias de transformacion digital (procesos, tecnologia, cambio). | 35% (Secciones A, B, F) |

---

## 7. Respuestas esperadas — Guia para el docente

### Seccion A — Proceso AS-IS

Flujo esperado de autorizaciones (resumen):
1. Medico genera solicitud (dia 1).
2. Auxiliar entrega formato FNA-003 en papel al area administrativa (dia 1).
3. Auxiliar transcribe a Excel (dia 2-3).
4. Auxiliar escanea doc y envia por email a EPS (dia 3-4).
5. EPS recibe, valida y deriva (dia 4-10, variable).
6. autorizacion regresa por email o llamada (dia 5-12).
7. Auxiliar notifica al paciente por WhatsApp o llamada (dia 6-12).
8. Paciente debe llamar a confirmar si no recibe notificacion (frustracion).

**Puntos de friccion esperados:**
- Transcripcion manual a Excel (error humano).
- Sin tracking: nadie sabe en que estado esta una solicitud.
- Notificacion pasiva: paciente espera sin saber.
- Sin SLA: EPS se toma el tiempo que quiera.

---

### Seccion B — Proceso TO-BE

Cambios esperados:
1. Solicitud electronica desde el sistema de informacion (no papel).
2. Envio automatico a EPS por API o portal (si esta disponible).
3. Tracking en tiempo real con estado visible para auxiliar y paciente.
4. Notificacion automatica por SMS/WhatsApp al paciente.
5. Registro unico de authorization en base de datos.

**Tiempo esperado:** Reduccion de 12 dias a 3-5 dias.

---

### Seccion C — Tecnologia

Opciones fuertes para una IPS pequena:
1. **Sistema de informacion hospitalario (SIES) o clinico** basico con modulo de autorizaciones. Ejemplos: Salvi, Sien, Sistema pryTEMIS (o desarrollo interno con AirTable como victoria rapida).
2. **AirTable o similar** como solu

cion transicional rapida ( bajo costo, sin desarrollo, permite tracking de solicitudes).
3. **Excel mejorado con macros** (ultima opcion, solo si no hay otra).

Se espera que el estudiante considere el costo, la capacidad del equipo y la proteccion de datos de salud (Ley 1581, datos sensibles).

---

### Seccion D — KPIs

KPIs esperados:
1. **Tiempo promedio de authorization** (desde solicitud hasta autorizacion不得): meta < 3 dias.
2. **Tasa de autorizaciones rechazadas** (motivos de rechazo): meta < 10%.
3. **Tasa de resolucion en primera llamada** (paciente recibe respuesta en el primer contact): meta > 80%.
4. **Numero de PQRS por demora** (mensual): reduction del 78% actual.
5. **Costo por proceso de authorization** (costo administrativo / solicitudes): reduccion del 20%.

---

### Seccion E — Matriz de riesgos

Riesgos esperados:
1. **Falla de integracion con EPS** — probabilidad media, impacto alto. Mitigacion: tener proceso alternativo en papel mientras tanto.
2. **Filtracion de datos de salud** ( Ley 1581) — probabilidad baja, impacto muy alto. Mitigacion: encriptacion, politicas de acceso, minima informacion.
3. **Resistencia del personal administrativo** — probabilidad alta, impacto medio. Mitigacion: formacion, involucramiento early.
4. **Dependencia de proveedor tecnologico** — probabilidad media, impacto medio. Mitigacion: contratos con SLA, propiedad de datos.
5. **Cambio de EPS sin API** — probabilidad alta, impacto bajo. Mitigacion: tener formatos PDF estandar como backup.

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

- **Semana de aplicacion:** Semana 10 del calendario.
- **Modalidad de entrega:** Individual, maxima 10 paginas.
- **Ponderacion en la nota final del modulo:** 25%.
- **Recuperacion:** Semana 14 (aplica solo si falta por inasistencia o rendimiento bajo en evaluacion final).
