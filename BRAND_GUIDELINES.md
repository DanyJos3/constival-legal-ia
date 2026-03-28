# Manual Estratégico de Diseño y CRO (Constival Legal)

Este documento es la **Fuente Única de Verdad (Single Source of Truth)** para cualquier desarrollo FrontEnd, rediseño o nuevo componente en la plataforma de Constival Legal.

**INSTRUCCIÓN CRÍTICA DE SISTEMA:** La IA y desarrolladores deben leer este archivo ANTES de proponer, modificar o generar nuevos componentes de UI.

---

## 1. Escala Tipográfica (Mobile-First y CRO Pura)

La página está diseñada bajo el principio corporativo: *Ningún cliente debería forzar la vista en el teléfono, ni perderse por excesos de texto horizontal en monitores gigantes.*

### 🚀 Título Principal (Hero - H1)
*Aplica **ÚNICAMENTE** a la pantalla de aterrizaje inicial (Hero.astro).*
- **Móvil (Default):** `text-5xl md:text-6xl`
- **Computadora Standard (`lg:`):** `lg:text-7xl`
- **Clases Base:** `font-sans font-extrabold tracking-tighter leading-none text-constival-navy dark:text-white`

### 🏗️ Títulos de Sección (H2)
*Aplica a todas las bandas horizontales (`PainSection`, `RiskGrader`, `WhyUs`, `Pricing`, `Testimonials`).*
- **Móvil (Default):** `text-3xl`
- **Tablets/Computadoras Standard (`sm:`, `lg:`):** `sm:text-4xl` (Limite estratégico para no empujar contenido importante debajo de la pantalla visible).
- **Computadoras Gigantes/Ultrawide (`2xl:`):** `2xl:text-5xl` (Vuelve a expandirse mágicamente a 48px si el monitor super-amplio lo permite).
- **Clases Base:** `font-sans font-extrabold text-constival-navy dark:text-white tracking-tight leading-[1.1]`

### 📑 Títulos Internos/Tarjetas (H3)
- **Móvil (Default):** `text-base` o `text-lg font-bold` (Para nombres de servicios, pasos en lista).
- **Computadora Standard (`sm:`):** `sm:text-xl font-extrabold` (Para jerarquía de tarjetas tipo *Pricing*).

### 📖 Párrafos de Cuerpo (P y Listas)
*Prohibido usar clases como `text-[10px]` o abusar de `text-xs` en textos funcionales.*
- **Descripciones largas u oraciones pilar (Hero/Headers):** `text-base sm:text-lg`
- **Párrafos de apoyo o listas:** `text-sm sm:text-base`
- **Insignias o mini meta-data:** `text-xs sm:text-sm uppercase tracking-widest font-bold`

---

## 2. Paleta de Color y Tema Oscuro (Dark Mode)

Todo componente se escribe pensando en **modo dual**. 
- Fondo claro, el texto es `text-constival-navy`
- Fondo oscuro, el texto es `dark:text-white` o `dark:text-slate-400` para secundarios.

**Acentos de Color (Calls to Action):**
- **Textos de enganche:** `text-constival-mint` o `text-constival-teal`.
- **Cajas/Fondos para Insignias:** `bg-constival-teal/10 dark:bg-constival-teal/30`.
- **Separadores o bordes:** `border-constival-mint`.

---

## 3. Comportamiento Estructural de Cajas y Padding

- **Alineación:** La estructura maestra se mantiene usando el envase `container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl`. Nunca usar div fijos como ancho absoluto.
- **Espaciado (Vertical Rhythm):** Las secciones usan un respiro profundo para ser leídas con calma: `py-14 md:py-16`.

---

## 4. Estilos de Call to Action (CTA y Botones)

**Copywriting del CTA:** 
Debe expresar un entregable *transaccional o de recompensa*.
- ❌ **Malo:** `Continuar`, `Más información`, `Descubrir la diferencia`.
- ✅ **Bueno:** `Configurar mi estructura ideal`, `Iniciar Diagnóstico Gratis`, `Resevar auditoría previa`.

**Componente Centralizado:** Usa `<Button variant="primary">` en lugar de crear links estilo botón sueltos. Si es estilo ancla (anchor text link), formatéalo como: 
`inline-flex font-sans font-bold text-constival-blue dark:text-white uppercase text-xs sm:text-sm tracking-widest items-center gap-2 group-hover:translate-x-2 transition-transform`
