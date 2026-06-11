# Semana 4 — Tecnologias Habilitadoras de la Transformacion Digital
## TD — Transformacion Digital en la Empresa | IUB — Inteligencia de Negocios

---

## Proposito de la semana

Comprender las tecnologias habilitadoras de la transformacion digital (cloud, datos/analitica, inteligencia artificial, IoT, movilidad, blockchain, automatizacion) y evaluar cual aplica a un problema especifico de negocio. El estudiante aplicara el concepto mediante exposiciones grupales y una ficha de tecnologia para Mercado360.

**Preguntas clave:**
- ?Cual tecnologia resuelve cual problema en Mercado360?
- ?Cual es la diferencia entre cloud, IA, IoT, blockchain y para que sirve cada una?
- ?Que tecnologia puede implementar Mercado360 con recurso limitado?
- ?Cuales son los riesgos de cada tecnologia?

---

## 1. Conceptos clave

### 1.1 Panorama de tecnologias habilitadoras

Las tecnologias habilitadoras son aquellas que permiten nuevas formas de crear valor, optimizar procesos y conectar actores. No son todas para todas las empresas: la clave es saber cual resuelve cual problema.

**Marco de referencia — Gartner Hype Cycle for Emerging Technologies (2024):**
Las tecnologias se mueven en un ciclo de expectativa:
1. **Peak of Inflated Expectations:** Todo el mundo habla de ello, pocos lo usan bien.
2. **Trough of Disillusionment:** Empiezan los fracasos y las criticas.
3. **Slope of Enlightenment:** Los que sobrevivieron empiezan a encontrarle valor real.
4. **Plateau of Productivity:** La tecnologia se estabiliza y se usa de forma generalizada.

**En este curso:** Usamos las tecnologias en su fase de Slope of Enlightenment o Plateau of Productivity (no en el pico del hype).

---

### 1.2 Computacion en la nube (Cloud Computing)

**Que es:** Entrega de recursos de computo (servidores, almacenamiento, bases de datos, software) por internet, sin necesidad de tener infraestructura fisica propia.

**Modelos de servicio:**
- **IaaS (Infrastructure as a Service):** Alquilas servidores virtuales. Ej: AWS EC2, Google Compute Engine.
- **PaaS (Platform as a Service):** Alquilas una plataforma para desarrollar aplicaciones. Ej: Heroku, Google App Engine.
- **SaaS (Software as a Service):** Usas software por suscripcion. Ej: Google Workspace, Salesforce, Odoo.

**En lenguaje empresarial:** "No comprar servidores, alquilarlos por mes." La empresa paga por lo que usa, como un servicio de luz.

**Beneficio clave:** Reduce la inversion inicial y permite escalar segun necesidad.

**Costo tipico para empresa pequena:** $50.000-$500.000 COP/mes segun servicio.

**Riesgo:** Dependencia del proveedor, costos variables si el uso aumenta.

**Fuente:**
- Marston, S. et al. (2011). "Cloud computing — The business perspective." *Decision Support Systems*, 51(1), 176-189.

---

### 1.3 Datos y Analitica (Big Data y Business Intelligence)

**Que es:** El uso de grandes volumenes de datos para extraer informacion que permita tomar mejores decisiones.

**Conceptos clave:**
- **Datos estructurados:** Informacion en bases de datos (ventas, inventario).
- **Datos no estructurados:** Informacion sin formato (fotos, comentarios de redes).
- **Analytics descriptivo:** ?Que paso? (reportes).
- **Analytics diagnostico:** ?Por que paso? (analisis).
- **Analytics predictivo:** ?Que pasara? (modelos).
- **Analytics prescriptivo:** ?Que debo hacer? (recomendaciones).

**En lenguaje empresarial:** "No decidir por intuicion, decidir por datos." Los datos permiten saber que esta pasando, por que y que pasara si no se actua.

**Ejemplo:** Mercado360 analizaria cual producto se vende mas los fines de semana, por que hay devoluciones en ciertos productos, cuando reponer inventario.

**Costo tipico:** $0 (Google Data Studio, Power BI) a $2.000.000 COP/mes (herramientas empresariales).

**Riesgo:** Datos de baja calidad generan decisiones malas. "Basura entra, basura sale."

**Fuente:**
- Davenport, T.H. & Harris, J.G. (2017). *Competing on Analytics: The New Science of Winning*. Harvard Business Review Press.

---

### 1.4 Inteligencia Artificial (IA)

**Que es:** Capacidad de las maquinas para aprender de datos y tomar decisiones que normalmente requieran inteligencia humana.

**Tipos de IA relevantes para empresas:**
- **Machine Learning:** La maquina aprende de datos sin ser programada explicitamente.
- **NLP (Natural Language Processing):** La maquina entiende y genera lenguaje. Ej: Chatbots, analisis de sentimientos.
- **Vision por computadora:** La maquina interpreta imagenes. Ej: reconocimiento de productos, control de calidad.
- **IA generativa:** La maquina genera contenido nuevo (texto, imagen, codigo). Ej: ChatGPT, DALL-E.

**En lenguaje empresarial:** "Que la maquina haga lo que antes hacia una persona pero mas rapido y sin errores."

**Aplicaciones para Mercado360:**
- Chatbot para atencion por WhatsApp.
- Prediccion de demanda para saber que stock tener.
- Segmentacion de clientes para personalizar ofertas.

**Costo tipico:** $0 (heramientas de IA generativa gratuitas) a $5.000.000 COP/mes (modelos de ML custom).

**Riesgo:** Sesgos en los datos generan decisiones injustas. Falta de transparencia en como la IA toma decisiones. Regulacion creciente (UE AI Act, proyects de ley en Colombia).

**Nota sobre normativa:** En Colombia no existe aun una ley especifica de IA, pero el MinTIC esta trabajando en el marco de IA responsable. Para datos personales, aplica Ley 1581/2012 sin importar la tecnologia usada.

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

**En lenguaje empresarial:** "Que los objetos del negocio generen datos automaticamente en lugar de que alguien los capture a mano."

**Ejemplo:** Un sensor en el inventario de Mercado360 que envia una alerta cuando un producto esta por agotarse.

**Costo tipico:** $50.000-$500.000 COP por dispositivo + plataforma. Para una empresa pequena, una solucion basica IoT cuesta $1.000.000-$5.000.000 COP.

**Riesgo:** Seguridad de los dispositivos (pueden ser vulnerados), costo de mantenimiento, necesidad de conectividad constante.

**Fuente:**
- Zanella, A. et al. (2014). "Internet of Things for smart cities." *IEEE IoT Journal*, 1(1), 22-32.

---

### 1.6 Movilidad (Computacion Movil)

**Que es:** Uso de dispositivos moviles (celulares, tablets) para acceder a informacion y procesos de negocio desde cualquier lugar.

**En lenguaje empresarial:** "Acceder a los datos y procesos del negocio desde el bolsillo."

**Aplicaciones para Mercado360:**
- Vendedor consulta inventario desde su celular en la tienda.
- Cliente hace seguimiento de su pedido por WhatsApp.
- Gerente revisa ventas desde cualquier lugar.

**Costo tipico:** $0 (WhatsApp Business, Google Sheets) a $3.000.000 COP/mes (apps personalizadas).

**Riesgo:** Seguridad de datos en dispositivos personales, dependencia de conexion a internet.

---

### 1.7 Blockchain

**Que es:** Registro distribuido y descentralizado donde cada transaccion queda fija y es verificable por todos los participantes sin necesidad de intermediarios.

**En lenguaje empresarial:** "Una base de datos donde nadie puede alterar lo que paso."

**Aplicaciones relevantes para empresas pequenas:**
- Trazabilidad de productos (de donde viene, quien lo touch).
- Certificacion de autenticidad.
- Contratos inteligentes (cuando pasa X, se ejecuta Y automatico).

**Limitaciones:**
- No es necesario para todo. Si una base de datos centralizada resuelve el problema, no hace falta blockchain.
- Escalabilidad limitada.
- Consume mucha energia.
- Regulacion aun no definida en Colombia.

**Para Mercado360:** Blockchain no es prioritario en esta etapa. Es mas relevante para cadenas de suministro complejas o transacciones financieras de alto valor.

**Fuente:**
- Iansiti, M. & Lakhani, K.R. (2017). "The truth about blockchain." *Harvard Business Review*.

---

### 1.8 Automatizacion (RPA y Mas)

**Que es:** Uso de software para ejecutar tareas repetitivas que antes hacia una persona, sin necesidad de intervencion manual.

**Tipos:**
- **RPA (Robotic Process Automation):** Robots de software que imitan clics y pulsaciones de teclado de humanos en sistemas existentes.
- **BPM (Business Process Management):** Plataformas que permiten disenar, ejecutar y monitorear procesos automaticamente.
- **API Integrations:** Conexion entre sistemas para que los datos fluyan sin transcripcion manual.

**En lenguaje empresarial:** "Que el software haga las tareas aburridas y repetitivas para que las personas se enfoquen en lo que agrega valor."

**Aplicaciones para Mercado360:**
- Bot de WhatsApp que responde preguntas frecuentes.
- Integracion entre WhatsApp e inventario para confirmar disponibilidad.
- Envio automatico de notificacion cuando llega un producto nuevo.

**Costo tipico:** $0-$500.000 COP/mes (heramientas como WhatsApp Business API, Make/Integromat, Zapier).

**Riesgo:** Si el proceso esta mal disenado, el robot lo ejecuta rapido y mal. Primero mejorar el proceso, luego automatizarlo.

**Fuente:**
- van der Aalst, W. et al. (2018). "Robotic Process Intelligence." *BPM Conference*.

---

## 2. Matriz de tecnologias vs. problemas de Mercado360

| Tecnologia | Problema que resuelve | Viabilidad para Mercado360 | Prioridad |
|---|---|---|---|
| Cloud (SaaS) | Almacenar datos, acceder desde cualquier lugar, no depender de un computador. | Alta. Google Workspace, AirTable. Costo bajo. | 1 |
| Automatizacion (Chatbot) | Respuesta rapida a consultas de clientes por WhatsApp. | Alta. WhatsApp Business API. Costo bajo. | 1 |
| Datos/BI | Saber que se vende, cuando, a quien, con que margen. | Media-alta. Google Data Studio. Costo bajo. | 2 |
| IA (chatbot inteligente) | Resolver consultas sin intervencion humana, analisis de sentimiento. | Media. ChatGPT API, Botpress. Costo medio. | 2 |
| IoT | Control de inventario en tiempo real (sensores en estanterias). | Baja para etapa 1. Costo alto. | 3 |
| Movilidad | Vendedor consulta inventario desde cualquier parte. | Alta. Google Sheets en celular. | 1 |
| Blockchain | Trazabilidad de origen de productos. | Baja. No es prioritario. | 4 |
| RPA | Pasar datos de WhatsApp a hoja de calculo automaticamente. | Media. Make/Zapier. Costo bajo. | 2 |

---

## 3. Exposiciones aplicadas — Semana 4

**Formato:** Equipos de 2-3 personas. Cada equipo presenta UNA tecnologia.

**Duracion:** 8-10 minutos por equipo.

**Estructura obligatoria de la exposicion:**
1. **Concepto (2 min):** Que es la tecnologia y para que sirve en una empresa.
2. **Caso real (2 min):** Un ejemplo real de empresa que uso esta tecnologia (con fuente).
3. **Aplicacion a Mercado360 (3 min):** ?Como aplicaria esta tecnologia? ?Cual problema resuelve? ?Que se necesitaria? ?Cuanto costaria aproximadamente?
4. **Riesgo o limite (2 min):** ?Cual es el mayor riesgo de esta tecnologia? ?Para quien no funciona?
5. **Cierre (1 min):** Una recomendacion accionable para Mercado360.

**Tecnologias a asignar:**
- Equipo 1: Cloud Computing.
- Equipo 2: Inteligencia Artificial y Machine Learning.
- Equipo 3: Internet de las Cosas (IoT).
- Equipo 4: Automatizacion y RPA.
- Equipo 5: Datos y Analitica (BI).
- Equipo 6: Movilidad.
- Equipo 7: Blockchain.

**Nota:** Si hay mas equipos, pueden repetir tecnologia con enfoque diferente. Si hay menos equipos, algunos equipos presentan 2 tecnologias.

---

## 4. Actividad practica

### Taller: Ficha de Tecnologia Habilitadora para Mercado360

**Duracion:** 30 minutos (durante o despues de las exposiciones).

**Instrucciones:**
1. Elegir la tecnologia que mas se adapte a los problemas priorizados de Mercado360 (del mapa de dolores de semana 1).
2. Completar la ficha de tecnologia (plantilla en carpeta semana4/).
3. Presentar la ficha en 3 minutos al grupo.

---

## 5. Evidencia entregable

**Ficha de tecnologia habilitadora para Mercado360** — documento individual.

**Debe incluir:**
1. Tecnologia seleccionada.
2. Problema de Mercado360 que resuelve (con enlace a los dolores de semana 1).
3. Como se aplicaria en Mercado360 (descripcion del uso).
4. Beneficio esperado (en terminos de cliente, proceso y datos).
5. Costo estimado (rango: bajo/medio/alto) y tiempo de implementacion.
6. Riesgo principal de implementar esta tecnologia.
7. Metrica para saber si la implementacion fue exitosa.

**Extencion maxima:** 3 paginas.

---

## 6. Preguntas orientadoras

1. ?Por que cloud computing es accesible para empresas pequenas aunque no tengan equipo de TI?
2. ?Cual es la diferencia entre automatizar un proceso y mejorar un proceso con datos?
3. ?Por que no todas las empresas necesitan blockchain?
4. ?Que diferencia hay entre IA y automatizacion?
5. ?Cual tecnologia es mas viable para Mercado360 en los proximos 6 meses y por que?

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
- Ley 1581 de 2012 — Proteccion de datos personales.

---

## 8. Rubrica para la evidencia

| Criterio | Peso | Destacado | Satisfactorio | En desarrollo | Insuficiente |
|---|---|---|---|---|---|
| Tecnologia vinculada a problema real | 20% | Tecnologia resuelve un dolor especifico de Mercado360 (citado de semana 1). | Tecnologia vinculada a un problema pero sin cita. | Tecnologia sin conexión clara al problema. | No entrega. |
| Descripcion de aplicacion | 20% | Aplicacion clara y detallada, con pasos de implementacion. | Aplicacion descrita pero incompleta. | Aplicacion vaga. | No entrega. |
| Beneficios (cliente, proceso, datos) | 20% | Beneficios bien explicados en las 3 dimensiones, con metricas. | Beneficios en 2 dimensiones. | Beneficios en 1 dimensi | No entrega. |
| Costo y tiempo estimado | 15% | Costo estimado en rango (bajo/medio/alto) + tiempo de implementacion realista. | Costo sin tiempo o viceversa. | Sin estimacion. | No entrega. |
| Riesgo identificado | 15% | Riesgo especifico de la tecnologia, con estrategia de mitigacion. | Riesgo mencionado sin mitigacion. | "Ningun riesgo." | No entrega. |
| Metrica de exito | 10% | Metrica clara y medible. | Metrica con definicion incompleta. | Metrica vaga. | No entrega. |

---

## 9. Conexion con las semanas siguientes

| Semana | Tema | Conexion con semana 4 |
|---|---|---|
| Semana 3 | Procesos y automatizacion | El TO-BE define QUE se automatiza; semana 4 define CON QUE tecnologia. |
| Semana 5 | Parcial 1 (RetailNova) | Se evalua si el estudiante sabe relacionar tecnologia con problema en contexto nuevo. |
| Semana 7 | Datos y analitica | La tecnologia de datos habilita los KPIs. |
| Semana 9 | Ciberseguridad y riesgos | Toda tecnologia tiene riesgos que gestionar. |