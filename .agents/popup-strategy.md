# Estrategia de Popups (CRO): CONSTIVAL

*Sistema de interrupciones estratégicas y captación de leads sin fricción, diseñado bajo el arquetipo de "Arquitectos Legales Preventivos".*

---

## 1. Exit-Intent Popup (Alerta de Prevención)
**Objetivo:** Rescatar tráfico saliente (Desktop y Mobile) mediante el intercambio de valor (Lead Magnet) enfocándose en el miedo al riesgo societario.

**Copy:**
*   **Headline:** ¿Te vas dejando tu empresa vulnerable?
*   **Subheadline:** Antes de salir, evalúa la salud corporativa de tu negocio. Descarga gratis nuestro **"Checklist de Blindaje S.A.S. 2024"** y descubre si tus estatutos actuales resistirían una auditoría de la SCVS o una demanda entre socios.
*   **Campos:** Solo "Email Corporativo".
*   **CTA (Botón):** Descargar Checklist Gratuito
*   **Micro-copy de salida (Link sutil abajo):** *No gracias, asumo los riesgos legales actuales de mi empresa.*

**Diseño Sugerido:**
*   **Tipografía:** `Outfit` Extrabold para el titular (color Blanco) y `Outfit` Regular para el subtítulo (color Slate-300).
*   **Contraste (Fondo):** `Navy` (`#111622`) profundo con un resplandor radial `Teal` (`#2C4747`) en la esquina superior derecha para dar un tono "Legal-Tech" misterioso pero seguro.
*   **Botón:** `Mint` completo (`#00FFB2`), texto en `Navy` oscuro.

**Reglas de Targeting:**
*   **Activador:** Intento de salida del viewport superior (Desktop), o scroll rápido hacia arriba (Mobile).
*   **Frecuencia:** Máximo 1 vez por semana por usuario.
*   **Exclusión:** Ocultar si el usuario ya visitó la página de "Gracias por agendar" o si la URL finaliza en `/agendar`.

---

## 2. Scroll Popup - 50% Depth (Interrupción Educativa)
**Objetivo:** Transformar a un lector engaged (que ya consumió la mitad de la página) en un visitante consciente de nuestro diferenciador central ("Simplificación y Protección").

**Copy:**
*   **Kicker (Sobre el título):** PROTECCIÓN EMPRESARIAL INTEGRAL
*   **Headline:** Tu estatuto debe ser tu mayor escudo, no tu mayor debilidad.
*   **Subheadline:** Traducimos la jerga legal en instrucciones accionables. Entérate cómo arquitectamos negocios estables que blindan tu patrimonio personal.
*   **CTA (Botón):** Conocer la Metodología Preventiva $\rightarrow$

**Diseño Sugerido:**
*   **Formato:** *Slide-in* (Notificación flotante) desde la esquina inferior derecha. No debe bloquear el centro de lectura.
*   **Tipografía:** `Outfit` Bold, legible y limpia.
*   **Contraste (Fondo):** Tarjeta elegante con fondo `Deep Blue` (`#111E45`) y un borde superior hiper saturado de 4px en color `Mint` (`#00FFB2`) brillante.
*   **Micro-animación:** Desplazamiento suave de entrada (0.5s fade-up).

**Reglas de Targeting:**
*   **Activador:** Lectura ininterrumpida > 50% de scroll de la página actual.
*   **Páginas (Inclusión):** Exclusivo para páginas de contenido denso (`/blog`, `/servicios/*`, `/nosotros`).
*   **Frecuencia:** Cerrar oculta el popup por 30 días para no molestar la lectura.

---

## 3. Time-Delayed Popup - 45 Segundos (On-boarding Consultivo)
**Objetivo:** Empujar a los usuarios "indecisos" o abrumados por la información a que deleguen la carga cognitiva en un experto inmediatamente.

**Copy:**
*   **Headline:** ¿Dudas sobre qué estructura societaria necesitas?
*   **Subheadline:** Estás a un clic de hablar con un Arquitecto Legal. Agenda ahora **15 minutos de diagnóstico estratégico sin costo** y resuelve tu escenario sin compromisos ni "latinajos" aburridos.
*   **CTA (Botón):** Agendar mis 15 min libres de jerga

**Diseño Sugerido:**
*   **Formato:** Modal central, muy compacto.
*   **Contraste (Fondo):** Inversión total de colores para "romper" la ceguera visual. Usa base `Mint` (`#00FFB2`) sólida con titular y textos súper oscuros en `Navy` (`#111622`).
*   **Apoyo Visual:** Integrar una pequeña foto corporativa pero "relajada" (ej. un socio/asesor sonriendo en un entorno moderno) o un icono 3D de calendario para humanizar el contacto y restar frialdad corporativa.

**Reglas de Targeting:**
*   **Activador:** Tiempo en página > 45 segundos.
*   **Páginas (Inclusión):** `/precios`, `/index` (Homepage), y páginas de fondo de embudo.
*   **Exclusión (Móvil):** Desactivar o volver extremadamente minimalista en móviles para no penalizar el SEO (Google castiga modales intrusivos a destiempo en mobile).
*   **Cierre Automático:** Si el botón de cerrar pulsado (X) no volver a mostrar en toda la sesión.
