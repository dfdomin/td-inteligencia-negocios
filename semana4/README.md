# Semana 4 — Tecnologías Habilitadoras de la Transformación Digital
## TD — Transformación Digital en la Empresa | IUB — Inteligencia de Negocios

---

## Propósito de la semana

Comprender las tecnologías habilitadoras de la transformación digital (cloud, datos/analítica, inteligencia artificial, IoT, movilidad, blockchain, automatización) y evaluar cual aplica a un problema específico de negocio. El estudiante aplicara el concepto mediante exposiciones grupales y una ficha de tecnología para Mercado360.

**Preguntas clave:**
- ¿Cuál tecnología resuelve cual problema en Mercado360?
- ¿Cuál es la diferencia entre cloud, IA, IoT, blockchain y para que sirve cada una?
- ¿Qué tecnología puede implementar Mercado360 con recurso limitado?
- ¿Cuáles son los riesgos de cada tecnología?

---

## 1. Conceptos clave

### 1.1 Panorama de tecnologías habilitadoras

Las tecnologías habilitadoras son aquellas que permiten nuevas formas de crear valor, optimizar procesos y conectar actores. No son todas para todas las empresas: la clave es saber cual resuelve cual problema.

**Marco de referencia — Gartner Hype Cycle for Emerging Technologies (2024):**
Las tecnologías se mueven en un ciclo de expectativa:
1. **Peak of Inflated Expectations:** Todo el mundo habla de ello, pocos lo usan bien.
2. **Trough of Disillusionment:** Empiezan los fracasos y las criticas.
3. **Slope of Enlightenment:** Los que sobrevivieron empiezan a encontrarle valor real.
4. **Plateau of Productivity:** La tecnología se estabiliza y se usa de forma generalizada.

**En este curso:** Usamos las tecnologías en su fase de Slope of Enlightenment o Plateau of Productivity (no en el pico del hype).

---

### 1.2 Computacion en la nube (Cloud Computing)

**Que es:** Entrega de recursos de computo (servidores, almacenamiento, bases de datos, software) por internet, sin necesidad de tener infraestructura física propia.

**Modelos de servicio:**
- **IaaS (Infrastructure as a Service):** Alquilas servidores virtuales. Ej: AWS EC2, Google Compute Engine.
- **PaaS (Platform as a Service):** Alquilas una plataforma para desarrollar aplicaciones. Ej: Heroku, Google App Engine.
- **SaaS (Software as a Service):** Usas software por suscripcion. Ej: Google Workspace, Salesforce, Odoo.

**En lenguaje empresarial:** "No comprar servidores, alquilarlos por mes." La empresa paga por lo que usa, como un servicio de luz.

**Beneficio clave:** Reduce la inversión inicial y permite escalar segun necesidad.

**Costo tipico para empresa pequeña:** $50.000-$500.000 COP/mes segun servicio.

**Riesgo:** Dependencia del proveedor, costos variables si el uso aumenta.

**Fuente:**
- Marston, S. et al. (2011). "Cloud computing — The business perspective." *Decisión Support Systems*, 51(1), 176-189.

---

### 1.3 Datos y Analítica (Big Data y Business Intelligence)

**Que es:** El uso de grandes volumenes de datos para extraer información que permita tomar mejores decisiones.

**Conceptos clave:**
- **Datos estructurados:** Información en bases de datos (ventas, inventario).
- **Datos no estructurados:** Información sin formato (fotos, comentarios de redes).
- **Analytics descriptivo:** ¿Qué paso? (reportes).
- **Analytics diagnóstico:** ¿Por qué paso? (análisis).
- **Analytics predictivo:** ¿Qué pasara? (modelos).
- **Analytics prescriptivo:** ¿Qué debo hacer? (recomendaciones).

**En lenguaje empresarial:** "No decidir por intuicion, decidir por datos." Los datos permiten saber que esta pasando, por qué y que pasara si no se actua.

**Ejemplo:** Mercado360 analizaria cual producto se vende mas los fines de semana, por qué hay devoluciones en ciertos productos, cuando reponer inventario.

**Costo tipico:** $0 (Google Data Studio, Power BI) a $2.000.000 COP/mes (herramientas empresariales).

**Riesgo:** Datos de baja calidad generan decisiones malas. "Basura entra, basura sale."

**Fuente:**
- Davenport, T.H. & Harris, J.G. (2017). *Competing on Analytics: The New Science of Winning*. Harvard Business Review Press.

---

### 1.4 Inteligencia Artificial (IA)

**Que es:** Capacidad de las maquinas para aprender de datos y tomar decisiones que normalmente requieran inteligencia humana.

**Tipos de IA relevantes para empresas:**
- **Machine Learning:** La maquina aprende de datos sin ser programada explicitamente.
- **NLP (Natural Language Processing):** La maquina entiende y genera lenguaje. Ej: Chatbots, análisis de sentimientos.
- **Vision por computadora:** La maquina interpreta imagenes. Ej: reconocimiento de productos, control de calidad.
- **IA generativa:** La maquina genera contenido nuevo (texto, imagen, código). Ej: ChatGPT, DALL-E.

**En lenguaje empresarial:** "Que la maquina haga lo que antes hacia una persona pero mas rápido y sin errores."

**Aplicaciones para Mercado360:**
- Chatbot para atención por WhatsApp.
- Prediccion de demanda para saber que stock tener.
- Segmentacion de clientes para personalizar ofertas.

**Costo tipico:** $0 (heramientas de IA generativa gratuitas) a $5.000.000 COP/mes (modelos de ML custom).

**Riesgo:** Sesgos en los datos generan decisiones injustas. Falta de transparencia en cómo la IA toma decisiones. Regulación creciente (UE AI Act, proyects de ley en Colombia).

**Nota sobre normativa:** En Colombia no existe aun una ley específica de IA, pero el MinTIC está trabajando en el marco de IA responsable. Para datos personales, aplica Ley 1581/2012 sin importar la tecnología usada.

**Fuente:**
- Russell, S. & Norvig, P. (2020). *Artificial Intelligence: A Modern Approach*. Pearson.
- OECD (2019). *AI Principles: Enterprise Readiness for AI*.

---

### 1.5 Internet de las Cosas (IoT)

**Que es:** Red de objetos fisicos con sensores y software que se conectan entre si y con internet para intercambiar datos.

**Componentes:**
- **Sensores:** Recolectan datos del entorno (temperatura, movimiento, ubicacion).
- **Conectividad:** Envian los datos a la nube (WiFi, cellular, LoRa).
- **Plataforma:** Recibe, procesa y muestra los datos.
- **Actuadores:** Ejecutan acciones basadas en los datos (encender una luz, abrir una puerta).

**En lenguaje empresarial:** "Que los objetos del negocio generen datos automáticamente en lugar de que alguien los capture a mano."

**Ejemplo:** Un sensor en el inventario de Mercado360 que envia una alerta cuando un producto esta por agotarse.

**Costo tipico:** $50.000-$500.000 COP por dispositivo + plataforma. Para una empresa pequeña, una solución básica IoT cuesta $1.000.000-$5.000.000 COP.

**Riesgo:** Seguridad de los dispositivos (pueden ser vulnerados), costo de mantenimiento, necesidad de conectividad constante.

**Fuente:**
- Zanella, A. et al. (2014). "Internet of Things for smart cities." *IEEE IoT Journal*, 1(1), 22-32.

---

### 1.6 Movilidad (Computacion Movil)

**Que es:** Uso de dispositivos moviles (celulares, tablets) para acceder a información y procesos de negocio desde cualquier lugar.

**En lenguaje empresarial:** "Acceder a los datos y procesos del negocio desde el bolsillo."

**Aplicaciones para Mercado360:**
- Vendedor consulta inventario desde su celular en la tienda.
- Cliente hace seguimiento de su pedido por WhatsApp.
- Gerente revisa ventas desde cualquier lugar.

**Costo tipico:** $0 (WhatsApp Business, Google Sheets) a $3.000.000 COP/mes (apps personalizadas).

**Riesgo:** Seguridad de datos en dispositivos personales, dependencia de conexión a internet.

---

### 1.7 Blockchain

**Que es:** Registro distribuido y descentralizado donde cada transacción queda fija y es verificable por todos los participantes sin necesidad de intermediarios.

**En lenguaje empresarial:** "Una base de datos donde nadie puede alterar lo que paso."

**Aplicaciones relevantes para empresas pequeñas:**
- Trazabilidad de productos (de donde viene, quien lo touch).
- Certificacion de autenticidad.
- Contratos inteligentes (cuando pasa X, se ejecuta Y automático).

**Limitaciones:**
- No es necesario para todo. Si una base de datos centralizada resuelve el problema, no hace falta blockchain.
- Escalabilidad limitada.
- Consume mucha energia.
- Regulación aún no definida en Colombia.

**Para Mercado360:** Blockchain no es prioritario en esta etapa. Es mas relevante para cadenas de suministro complejas o transacciones financieras de alto valor.

**Fuente:**
- Iansiti, M. & Lakhani, K.R. (2017). "The truth about blockchain." *Harvard Business Review*.

---

### 1.8 Automatización (RPA y Mas)

**Que es:** Uso de software para ejecutar tareas repetitivas que antes hacia una persona, sin necesidad de intervención manual.

**Tipos:**
- **RPA (Robotic Process Automation):** Robots de software que imitan clics y pulsaciones de teclado de humanos en sistemas existentes.
- **BPM (Business Process Management):** Plataformas que permiten diseñar, ejecutar y monitorear procesos automáticamente.
- **API Integrations:** Conexion entre sistemas para que los datos fluyan sin transcripcion manual.

**En lenguaje empresarial:** "Que el software haga las tareas aburridas y repetitivas para que las personas se enfoquen en lo que agrega valor."

**Aplicaciones para Mercado360:**
- Bot de WhatsApp que responde preguntas frecuentes.
- Integración entre WhatsApp e inventario para confirmar disponibilidad.
- Envio automático de notificación cuando llega un producto nuevo.

**Costo tipico:** $0-$500.000 COP/mes (heramientas como WhatsApp Business API, Make/Integromat, Zapier).

**Riesgo:** Si el proceso esta mal disenado, el robot lo ejecuta rápido y mal. Primero mejorar el proceso, luego automatizarlo.

**Fuente:**
- van der Aalst, W. et al. (2018). "Robotic Process Intelligence." *BPM Conference*.

---

## 2. Matriz de tecnologías vs. problemas de Mercado360

| Tecnología | Problema que resuelve | Viabilidad para Mercado360 | Prioridad |
|---|---|---|---|
| Cloud (SaaS) | Almacenar datos, acceder desde cualquier lugar, no depender de un computador. | Alta. Google Workspace, AirTable. Costo bajo. | 1 |
| Automatización (Chatbot) | Respuesta rápida a consultas de clientes por WhatsApp. | Alta. WhatsApp Business API. Costo bajo. | 1 |
| Datos/BI | Saber que se vende, cuando, a quién, con que margen. | Media-alta. Google Data Studio. Costo bajo. | 2 |
| IA (chatbot inteligente) | Resolver consultas sin intervención humana, análisis de sentimiento. | Media. ChatGPT API, Botpress. Costo medio. | 2 |
| IoT | Control de inventario en tiempo real (sensores en estanterias). | Baja para etapa 1. Costo alto. | 3 |
| Movilidad | Vendedor consulta inventario desde cualquier parte. | Alta. Google Sheets en celular. | 1 |
| Blockchain | Trazabilidad de origen de productos. | Baja. No es prioritario. | 4 |
| RPA | Pasar datos de WhatsApp a hoja de calculo automáticamente. | Media. Make/Zapier. Costo bajo. | 2 |

---

## 3. Exposiciones aplicadas — Semana 4

**Formato:** Equipos de 2-3 personas. Cada equipo presenta UNA tecnología.

**Duración:** 8-10 minutos por equipo.

**Estructura obligatoria de la exposición:**
1. **Concepto (2 min):** Que es la tecnología y para que sirve en una empresa.
2. **Caso real (2 min):** Un ejemplo real de empresa que uso esta tecnología (con fuente).
3. **Aplicación a Mercado360 (3 min):** ¿Cómo aplicaría esta tecnología? ¿Cuál problema resuelve? ¿Qué se necesitaría? ¿Cuánto costaría aproximadamente?
4. **Riesgo o limite (2 min):** ¿Cuál es el mayor riesgo de esta tecnología? ¿Para quién no funciona?
5. **Cierre (1 min):** Una recomendación accionable para Mercado360.

**Tecnologías a asignar:**
- Equipo 1: Cloud Computing.
- Equipo 2: Inteligencia Artificial y Machine Learning.
- Equipo 3: Internet de las Cosas (IoT).
- Equipo 4: Automatización y RPA.
- Equipo 5: Datos y Analítica (BI).
- Equipo 6: Movilidad.
- Equipo 7: Blockchain.

**Nota:** Si hay mas equipos, pueden repetir tecnología con enfoque diferente. Si hay menos equipos, algunos equipos presentan 2 tecnologías.

---

## 4. Actividad práctica

### Taller: Ficha de Tecnología Habilitadora para Mercado360

**Duración:** 30 minutos (durante o después de las exposiciones).

**Instrucciones:**
1. Elegir la tecnología que mas se adapte a los problemas priorizados de Mercado360 (del mapa de dolores de semana 1).
2. Completar la ficha de tecnología (plantilla en carpeta semana4/).
3. Presentar la ficha en 3 minutos al grupo.

---

## 5. Evidencia entregable

**Ficha de tecnología habilitadora para Mercado360** — documento individual.

**Debe incluir:**
1. Tecnología seleccionada.
2. Problema de Mercado360 que resuelve (con enlace a los dolores de semana 1).
3. Cómo se aplicaría en Mercado360 (descripción del uso).
4. Beneficio esperado (en terminos de cliente, proceso y datos).
5. Costo estimado (rango: bajo/medio/alto) y tiempo de implementación.
6. Riesgo principal de implementar esta tecnología.
7. Metrica para saber si la implementación fue exitosa.

**Extencion maxima:** 3 páginas.

---

## 6. Preguntas orientadoras

1. ¿Por qué cloud computing es accesible para empresas pequeñas aunque no tengan equipo de TI?
2. ¿Cuál es la diferencia entre automatizar un proceso y mejorar un proceso con datos?
3. ¿Por qué no todas las empresas necesitan blockchain?
4. ¿Qué diferencia hay entre IA y automatización?
5. ¿Cuál tecnología es mas viable para Mercado360 en los proximos 6 meses y por qué?

---

## 7. Fuentes recomendadas

**Obligatorias:**
- Gartner (2024). *Hype Cycle for Emerging Technologies*.
- MIT Technology Review. Articulos sobre estado actual de IA, IoT, blockchain.

**Complementarias:**
- Davenport, T.H. (2019). *The AI Advantage*. MIT Press.
- O'Reilly Media. *Cloud Computing Basics* (recursos gratuitos en linea).

**Normatividad:**
- MinTIC Colombia. Marco de confianza digital y IA responsable. Disponible en: https://www.mintic.gov.co
- Ley 1581 de 2012 — Protección de datos personales.

---

## 8. Rubrica para la evidencia

| Criterio | Peso | Destacado | Satisfactorio | En desarrollo | Insuficiente |
|---|---|---|---|---|---|
| Tecnología vinculada a problema real | 20% | Tecnología resuelve un dolor específico de Mercado360 (citado de semana 1). | Tecnología vinculada a un problema pero sin cita. | Tecnología sin conexión clara al problema. | No entrega. |
| Descripción de aplicación | 20% | Aplicación clara y detallada, con pasos de implementación. | Aplicación descrita pero incompleta. | Aplicación vaga. | No entrega. |
| Beneficios (cliente, proceso, datos) | 20% | Beneficios bien explicados en las 3 dimensiones, con métricas. | Beneficios en 2 dimensiones. | Beneficios en 1 dimensi | No entrega. |
| Costo y tiempo estimado | 15% | Costo estimado en rango (bajo/medio/alto) + tiempo de implementación realista. | Costo sin tiempo o viceversa. | Sin estimacion. | No entrega. |
| Riesgo identificado | 15% | Riesgo específico de la tecnología, con estrategia de mitigacion. | Riesgo mencionado sin mitigacion. | "Ningun riesgo." | No entrega. |
| Metrica de exito | 10% | Metrica clara y medible. | Metrica con definición incompleta. | Metrica vaga. | No entrega. |

---

## 9. Conexion con las semanas siguientes

| Semana | Tema | Conexion con semana 4 |
|---|---|---|
| Semana 3 | Procesos y automatización | El TO-BE define QUE se automatiza; semana 4 define CON QUE tecnología. |
| Semana 5 | Parcial 1 (RetailNova) | Se evalua si el estudiante sabe relacionar tecnología con problema en contexto nuevo. |
| Semana 7 | Datos y analítica | La tecnología de datos habilita los KPIs. |
| Semana 9 | Ciberseguridad y riesgos | Toda tecnología tiene riesgos que gestionar. |