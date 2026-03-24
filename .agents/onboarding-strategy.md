# Flow de On-Boarding (Activación): CONSTIVAL

*Framework estratégico para escalar usuarios de "Visitantes" a "Empresarios Protegidos" dentro de la plataforma digital Constival (Tablero Societario).*

---

## 1. El "Aha Moment"
El instante crítico de retención ocurre cuando el usuario termina su "Carga de Datos Base" e **instantáneamente ve en su Tablero de Control la proyección de 3 riesgos legales críticos que acaba de neutralizar** (Ej: *Riesgo de bloqueo de firma por fallecimiento de un gerente: Mitigado*). 
En ese micro-segundo, el usuario entiende que Constival no es un "generador de PDFs barato", sino una bóveda tecnológica que protege su patrimonio real.

---

## 2. Checklist de Activación (El "Golden Path" de 5 Pasos)
**UI/UX:** Esta progresión debe verse como una barra superior constante o un menú lateral sticky (`bg-constival-navy` con pasos activos en `text-constival-mint`).

1.  **Carga de Matriz Base:** Datos del Founder, distribución accionaria inicial y objeto social simplificado (cero códigos engorrosos, solo inputs humanos de "a qué se dedica tu empresa").
2.  **Validación de Estructura:** El motor confirma si la S.A.S. o Cía. Ltda. es el camino idóneo basándose en la Matriz.
3.  **Generación de Estatutos Algorítmica:** Redacción automatizada del primer borrador, mostrando al usuario un resumen de "Las 10 reglas de oro inquebrantables de tu nueva empresa".
4.  **Sesión de Blindaje (Verbal):** Agendamiento automático (widget de Calendly) de 15 minutos con un Arquitecto Estratega para pulir detalles o dudas particulares.
5.  **Firma Electrónica a un Clic:** Despliegue de la pasarela de firmas integradas para desencadenar el proceso formal ante la SCVS, todo desde la pantalla.

---

## 3. Correos de On-boarding (Engagement & Retención)

**Día 1: Bienvenido a la Simplificación Legal**
*   **Asunto:** 🏛️ Tu bóveda corporativa en Ecuador comienza aquí.
*   **Copy (Simplificación Legal):** Le confirmamos que ha dejado atrás el modelo de bufetes de la vieja escuela. Explicamos que el sistema procesará su Matriz Base y le notificará solo cuando deba tomar decisiones críticas. Tú operas tu negocio, nosotros la burocracia.
*   **CTA:** [Completar mi Matriz Base en 3 mins]

**Día 3: Transparencia Radical (Detrás del Telón)**
*   **Asunto:** 🔍 ¿Por qué nuestro proceso toma 5 días y no 30?
*   **Copy (Transparencia Radical):** Educamos al usuario sobre cómo nuestra tecnología pre-valida los nombres ante la SCVS y estructura las reservas de dominio internamente. Evitamos rechazos gubernamentales porque no enviamos plantillas genéricas; enviamos código jurídico testeado.
*   **CTA:** [Continuar la configuración de mi empresa]

**Día 5: Riesgo Activo (Push para completar el Checklist)**
*   **Asunto:** ⚠️ El peligro del estatuto dormido.
*   **Copy:** "Hemos notado que tu borrador de estatutos está pendiente de aprobación. Operar un día más sin blindaje formal te expone a contingencias personales y retrasa la apertura de tus cuentas bancarias."
*   **CTA:** [Aprobar borrador ahora]

**Día 7: Agendamiento Estratégico (Check-in humano)**
*   **Asunto:** 🤝 Diseñemos el futuro: Habla con tu Arquitecto Legal.
*   **Copy:** El proceso digital es veloz, pero el toque estratégico humano lo hace impenetrable. Si tienes accionistas que invierten capital o un plan de expansión agresivo, hablemos para ajustar tu estructura final.
*   **CTA:** [Agendar mis 15 minutos verbales]

---

## 4. UI/UX: Tooltips y Empty States (Estilo Astro/Tailwind)

### Tooltips (Reducción de Carga Cognitiva)
No usaremos los típicos íconos de interrogación circulares que rompen la lectura. Usaremos subrayado sutil.
*   **Clases Tailwind (Trigger):** `group relative cursor-help border-b border-dashed border-constival-teal transition-colors hover:text-constival-mint`
*   **Clases Tailwind (Burbuja Hover):** `absolute bottom-full mb-2 hidden w-72 bg-constival-navy p-4 text-sm text-white shadow-2xl group-hover:block border-l-4 border-constival-mint z-50`
*   **Ejemplo de Copy:** Sobre la frase *"Cláusula de Arrastre o Drag-Along"*, el tooltip dirá: *"Derecho de venta conjunta: Si logras vender tu empresa, esta cláusula obliga a los socios minoritarios a vender también, evitando que bloqueen un negocio millonario."*

### Empty States (Tablero Societario en Cero)
Cuando el usuario entra a la plataforma por primera vez y no tiene sociedades.
*   **Diseño:** Contenedor centralizado con gran respiro (padding `p-20`), fondo `Deep Blue` (`#111E45`) en Dark Mode o `bg-gray-50` en Light Mode. Iconografía lineal minimalista de una "caja fuerte abierta" o "planos arquitectónicos".
*   **Headline (`font-sans font-bold text-3xl text-constival-navy dark:text-white`):** "Tu ecosistema legal está en blanco."
*   **Subheadline (`font-serif italic text-xl text-constival-teal dark:text-slate-400 mt-4`):** "Liderar un negocio sin estructura societaria es saltar sin paracaídas. Comencemos la cimentación de tu patrimonio o migremos tu S.A.S. actual hoy."
*   **Primary Button (`mt-8`):** `[+] Diseñar Primera Estructura S.A.S.`

---

## 5. Intervención CRO para "Inactivos del Día 3"
¿Qué sucede si un usuario se registra pero frena el proceso en el Checklist (Ej: abandona en el Paso 2 durante 3 días)?
1.  **Intervención de Fricción Cruzada (Email Automático):** Un correo de "Protección Preventiva". *"Notamos que pausaste el diseño de tu S.A.S. ¿Algún término legal te detiene o te falta el número de C.I. de tus socios? No paralices tu negocio por burocracia documental."*
2.  **Rescue CTA:** Cambiar el botón de "Continuar Trámite" por un botón verde tipo "Agendar Soporte de 5 minutos". Se trata de relajar la barrera técnica trasladando la fricción momentánea al Arquitecto Humano.
3.  **SMS de Rescate Directo (Opcional):** *"Constival: Tu borrador societario expira por normativas de reserva de nombre. Retomemos tu constitución aquí [Enlace Autologin]."*
