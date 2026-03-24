# Roadmap de A/B Testing (Q1): CONSTIVAL

*Plan de experimentación trimestral para validar hipótesis de crecimiento, optimizar la conversión en Astro y alinear el producto con los arquetipos de mercado (Protector vs. Innovador).*

---

## Mes 1: Homepage & Confianza Funcional

### Test 1: Headline de Propuesta de Valor (El Primer Segundo)
*   **Variante A (Control):** "Estructuras Societarias Blindadas para Escalar tu Empresa" (Enfoque en *Seguridad Patrimonial*).
*   **Variante B (Test):** "Constituye tu S.A.S. 100% Digital en 5 Días" (Enfoque en *Eficiencia Técnica y Ahorro de Tiempo*).
*   **Hipótesis:** El fundador ecuatoriano (Arquetipo **Innovador**) siente más urgencia por el dolor físico de la burocracia (tiempo/dinero notarial) que por la prevención de riesgos (Arquetipo **Protector**). La Variante B generará más rebote rápido, pero una tasa total de clics (CTR) superior.
*   **Métrica Principal:** Click-Through Rate (CTR) en el botón del Hero Section.
*   **Tamaño de Muestra Necesario:** ~1,500 visitantes únicos por variante (considerando el volumen de tráfico B2B esperado en Ecuador).
*   **Criterio de Decisión:** Si la Variante B supera a la A por un margen de significancia estadística del 95% (p-value < 0.05) tras 14 días. Escalar el texto ganador directo en `Hero.astro`.

### Test 2: Fricción vs. Intención en el CTA Principal
*   **Variante A (Control):** "Iniciar Diagnóstico Gratuito" (Alta fricción cognitiva, altísima intención C-Level).
*   **Variante B (Test):** "Ver Planes y Precios" (Baja fricción, intención puramente transaccional).
*   **Hipótesis:** El arquetipo *Estratega* prefiere ver un modelo de precios transparente antes de comprometer su tiempo en un formulario o llamada. La Variante B generará un 30% más de clics iniciales, pero la Variante A retendrá los Leads Calificados por Ventas (SQLs) que realmente cerrarán un contrato de alto ticket.
*   **Métrica Principal:** CPL (Costo por Lead Calificado) y Tasa de Agendamiento Final.
*   **Tamaño de Muestra Necesario:** ~800 clics totales en el botón del Hero.
*   **Criterio de Decisión:** El ganador será aquel CTA que entregue más sesiones verbales efectivas, sin importar cuál generó más "clics vacíos".

---

## Mes 2: Conversión & Nutrición (Lead Gen)

### Test 3: Interrupciones de Retención (Popups CRO)
*   **Variante A (Control):** Exit-Intent Popup ofreciendo el *"Checklist de Riesgos de tu S.A.S."* (Dolor / Protector).
*   **Variante B (Test):** Scroll Slide-in (50%) ofreciendo un *"Caso de éxito: Cómo levantar $100k con estatutos blindados"* (Crecimiento / Innovador).
*   **Hipótesis:** El usuario hiper-informado en Ecuador sufre ceguera de banners ante el clásico "Exit-intent". El Scroll Slide-in se siente nativo al artículo o servicio que ya estaba consumiendo, multiplicando su curiosidad sin interrumpirlo agresivamente.
*   **Métrica Principal:** Tasa de Conversión (Email Opt-in Rate).
*   **Tamaño de Muestra Necesario:** ~2,000 sesiones activas (usuarios que lleguen al trigger del 50% de scroll o intento frontal de salida).
*   **Criterio de Decisión:** Opt-in rate superior al 3.5% sostenido durante 15 días continuos.

### Test 4: Longitud de la Secuencia de Nurturing (Emails)
*   **Variante A (Control):** Secuencia Completa de 7 Emails (Educativo sobre riesgos, 21 días).
*   **Variante B (Test):** Secuencia Relámpago de 5 Emails (Push directo a la venta al Día 10).
*   **Hipótesis:** El arquetipo *Innovador* toma decisiones de B2B rápidamente y enfría su interés si el embudo educativo dura 3 semanas. Compactar el dolor de la informalidad y presentar la solución tecnológica rápidamente aumentará la tasa de cierre.
*   **Métrica Principal:** Tasa de Conversión de Lead a "Sesión Diagnóstica Agendada" (Click-to-Book Rate en los correos).
*   **Tamaño de Muestra Necesario:** ~400 leads capturados divididos equitativamente (200 en A / 200 en B).
*   **Criterio de Decisión:** Variante B ganará si mantiene una tasa de Opens similar a la A, pero empuja un +15% adicional de reservaciones de calendario.

---

## Mes 3: Activación & Retención (Tablero Astro)

### Test 5: Fricción en el Checklist de Activación
*   **Variante A (Control):** Flujo actual ultra-detallado de 5 Pasos (Carga Base $\rightarrow$ Validación Algoritmo $\rightarrow$ Borradores $\rightarrow$ Agendamiento $\rightarrow$ Firma).
*   **Variante B (Test):** Flujo Flash de 3 Pasos Críticos (Carga de Datos $\rightarrow$ Match Algorítmico $\rightarrow$ Agendamiento Verbal inmediato).
*   **Hipótesis:** Eliminar el requerimiento cognitivo de leer el "Borrador de Estatutos" reducirá drásticamente el abandono del usuario. El *Protector* preferirá delegar con gusto el papeleo al Arquitecto Legal durante la sesión verbal, asumiendo su rol de CEO.
*   **Métrica Principal:** Task Completion Rate (Tasa de Completitud del Onboarding hasta la cita).
*   **Tamaño de Muestra Necesario:** ~300 nuevos usuarios puros (freemium o pagos bajos) registrados en el Tablero de Control.
*   **Criterio de Decisión:** Implementar Variante B por defecto en Astro si la completitud salta en al menos 20 puntos porcentuales (Ej: pasa del 40% al 60%).

### Test 6: La Sensación de la Plataforma (Empty State Onboarding)
*   **Variante A (Control):** Tablero "Empty State" desde cero. El usuario debe crear su primera S.A.S. tecleando campos en blanco.
*   **Variante B (Test):** Demo poblado con "Datos Precargados" de una empresa ficticia (S.A.S.) con 3 socios, para que el usuario navegue la bóveda, vea los riesgos resueltos y las firmas digitales listas antes de crear la suya.
*   **Hipótesis:** El *"Aha Moment"* (entender el verdadero poder de Constival) se alcanza más rápido si el arquetipo *Innovador* y *Estratega* pueden jugar con un juguete ya armado (ver gráficos, alertas SCVS inactivas) en lugar de enfrentarse a la fricción de un lienzo en blanco.
*   **Métrica Principal:** Tiempo-hasta-Aha-Moment (Time to Value) y Tasa de Retención Activa al Día 3.
*   **Tamaño de Muestra Necesario:** ~500 registros.
*   **Criterio de Decisión:** Menor requerimiento de intervenciones de rescate de nuestro equipo de soporte / ventas (menor abandono en el Día 3). Escalar a todos los usuarios si B reduce la deserción a menos del 15%.
