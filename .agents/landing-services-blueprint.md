# Blueprint de Landing Pages de Servicios (Constival Legal)

*Este documento es el mapa maestro (CRO + SEO + UI) a utilizar para la creación de la página de cualquier servicio ofertado por Constival (SAS, Reformas, Disolución, Cesión, Registro de Marcas, etc).*

Todo servicio se maquetará bajo un **Embudo Persuasivo (AIDA)** de alta conversión, aislando los conceptos en componentes modulares independientes bajo la ruta estructural `web/src/components/servicios/[nombre-servicio]/`.

## Arquitectura de Componentes Estándar

### 1. `[Servicio]Hero.astro` (ATENCIÓN / Above the Fold)
- **Objetivo:** Retener al usuario en 3 segundos atacando el dolor principal.
- **Estructura:**
  - H1 optimizado para SEO (Ej: "Trámite de [Servicio] 100% Online en [Tiempo]").
  - Subtítulo reduciendo ansiedad (Ej: "Olvídate de notarios. Nosotros nos encargamos.").
  - **CTA Primario:** Orientado a consulta de valor (Ej: "Iniciar Diagnóstico", "Configurar estructura").
  - Trust Badges: Aval ante Superintendencia o SENADI, trámite en X días.

### 2. `[Servicio]Contexto.astro` (AGITACIÓN / El Problema)
- **Objetivo:** Mostrar por qué "hacerlo barato o solo" es peligroso para el negocio.
- **Estructura:** Advertencia sobre multas gubernamentales, el peligro de usar "plantillas genéricas", trabas registrales, etc. Reforzar a Constival como "Arquitectos".

### 3. `[Servicio]Comparacion.astro` (LA VALIDACIÓN LÓGICA)
- **Objetivo:** Darle una justificación analítica a la mente del cliente.
- **Estructura:** Tabla enfrentando el servicio actual versus los métodos tradicionales y anticuados (Ej: SAS vs Compañía Limitada Tradicional), destacando con *checks* verdes las ventajas irrefutables de nuestra propuesta.

### 4. `[Servicio]Proceso.astro` (REDUCCIÓN DE FRICCIÓN)
- **Objetivo:** Demostrar que el cliente casi no va a mover un dedo.
- **Estructura:** "El Viaje Constival". Línea de tiempo / Stepper estilizado mostrando los pasos exactos desde que paga hasta que recibe la inscripción gubernamental.

### 5. `[Servicio]Requisitos.astro` (REDUCCIÓN DE CARGA MENTAL)
- **Objetivo:** Enumerar lo que el cliente tiene que darnos. 
- **Estructura:** Lista limpia (iconos). Entre más parezca un trámite de "Cédula y firmar un PDF", mayor la conversión de compra.

### 6. `[Servicio]Pricing.astro` (EL ANCLA DE VALOR)
- **Objetivo:** Eliminar confusión de precios y anclar valor de golpe.
- **Estructura:** Formato de Tarjeta tipo "SaaS" (Tier Card).
  - Título del Paquete.
  - Precio Base visible sin miedo (Ej: "Desde $149").
  - **Lista de Inclusiones:** Integradas dentro de la misma tarjeta del precio (Estatutos, gestiones, honorarios de abogados, entrega final). Así, el usuario ve una lista gigante por un precio de oportunidad.

### 7. `[Servicio]Faq.astro` (MANEJO DE OBJECIONES FINALES)
- **Objetivo:** Eliminar micro-dudas antes de que el cliente abandone por sentirse inseguro y atrapar búsquedas SEO genéricas.
- **Estructura:** Acordeón. Respuestas que justifiquen qué pasa si las cosas salen mal, quién paga los avalúos, la garantía de Constival, etc.

### 8. `[Servicio]CtaFinal.astro` (REMATE DE URGENCIA)
- **Objetivo:** Atrapar a los *heavy-scrollers* del fondo de la web.
- **Estructura:** Mensaje contundente ("No arriesgues tu marca/empresa. Hazlo profesional hoy"). Botón enorme llamando a agendar o diagnosticar. 

---
**NOTA DE ESTILO TÉCNICO:** 
- Backgrounds predominantemente Dark (`Navy`). Acentos interactivos en `Mint` y `Teal` de la marca Constival. Cero balances legales grises o blancos planos (abocarse puramente al estilo Legal-Tech).
