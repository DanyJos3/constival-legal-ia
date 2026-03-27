export const CONSTIVAL_DATA = {
  info: {
    name: "CONSTIVAL",
    tagline: "Arquitectos de Estructuras Empresariales",
    legalType: "Firma Legal-Tech / Derecho Societario",
    location: "Ecuador",
    contact: {
      phone: "0969503502",
      email: "info@constival.com",
      web: "www.constival.com",
      address: "Av. Republica de El Salvador 170135, edificio Prisma Norte",
      country: "Ecuador",
      city: "Quito"
      
    }
  },

  brand: {
    purpose: "Democratizar el acceso a servicios societarios profesionales.",
    vision: "Ser la firma societaria más moderna y automatizada de Ecuador.",
    personality: ["Moderna", "Estratégica", "Directa", "Tecnológica"],
    values: [
      { 
        title: "Simplificación Legal", 
        desc: "Convertimos los tecnicismos legales en instrucciones claras." 
      },
      { 
        title: "Transparencia Radical", 
        desc: "Sin letra pequeña ni costos ocultos." 
      },
      { 
        title: "Innovación Jurídica", 
        desc: "Integración de tecnología y eficiencia en cada proceso." 
      },
      { 
        title: "Protección Empresarial", 
        desc: "Diseño de estructuras que previenen riesgos." 
      }
    ]
  },

  services: {
    sas: {
      title: "Constitución Inteligente (S.A.S.)",
      shortDescription: "Crea tu empresa blindada, electrónica y sin capital mínimo.",
      subtitle: "Diseñamos el esqueleto legal de tu empresa blindado contra conflictos de accionistas y parálisis futura.",
      price: "Desde $149",
      currency: "USD",
      popular: true,
      features: [
        "Constitución 100% electrónica",
        "Estatutos anti-fricción personalizados",
        "Obtención de RUC incluida",
        "Diagnóstico preventivo de socios",
        "Sin capital mínimo obligatorio"
      ],
    },
    reformas: {
      title: "Actualización Societaria",
      shortDescription: "Actualiza tus estatutos rápidamente sin rechazos de la Superintendencia de Compañías.",
      subtitle: "Reformamos tus estatutos para permitir ingresos de capital o pivotar el objeto social sin rechazos en la Superintendencia de Compañías.",
      price: "Desde $179",
      currency: "USD",
      popular: false,
      features: [
        "Reforma de estatutos y objeto social",
        "Aumento o reducción de capital",
        "Cambio de domicilio societario",
        "Fusiones y escisiones",
      ],
    },
    marcas: {
      title: "Blindaje de Identidad (Marcas)",
      shortDescription: "Protege tu propiedad intelectual a nivel nacional por 10 años.",
      subtitle: "Registro a 10 años ante el SENADI con búsquedas fonéticas. Asegura el control del activo más valioso que tienes.",
      price: "Desde $300",
      currency: "USD",
      popular: false,
      features: [
        "Búsqueda fonética previa ($40)",
        "Registro ante SENADI",
        "Protección a 10 años renovables",
        "Monitoreo de infracciones",
      ],
    },
    nombramientos: {
      title: "Protección de Directorio",
      shortDescription: "Evita el bloqueo de tus cuentas bancarias corporativas.",
      subtitle: "Inscribimos cambios de representantes y gerentes para evitar el congelamiento automático de tus cuentas bancarias.",
      price: "Desde $99",
      currency: "USD",
      popular: false,
      features: [
        "Registro de nombramientos en la Superintendencia de Compañías",
        "Inscripción en Registro Mercantil",
        "Prevención de bloqueo bancario",
        "Actualización de firma autorizada",
      ],
    },
    cesiones: {
      title: "Traspaso Acordado (Cesiones)",
      shortDescription: "Transfiere acciones legalmente y sin contingencias fiscales.",
      subtitle: "Transferencia accionaria 100% legalizada en libros societarios y notificada en portales gubernamentales.",
      price: "Desde $149",
      currency: "USD",
      popular: false,
      features: [
        "Cesión de participaciones / acciones",
        "Actualización de libros societarios",
        "Notificación a la Superintendencia de Compañías",
        "Asesoría tributaria del traspaso",
      ],
    },
  },

  faq: [
    {
      q: "¿Hay servicios más baratos e inmediatos que Constival?",
      a: "Nuestro servicio NO vende la inscripción de un trámite. Vende arquitectura de resolución para evitar que fracases en 2 años. Lo barato en derecho societario y 'sin diagnósticos' quiebra y rompe a los futuros dueños de negocio por usar plantillas ajenas."
    },
    {
      q: "¿Qué sucede si la Superintendencia rechaza mi Registro?",
      a: "Evitamos deficiencias administrativas por diseño previo. Si es problema de forma, reingresamos sin cobrar honorario adicional. Exigimos confianza bidireccional."
    },
    {
      q: "¿Cuánto tiempo toma constituir una S.A.S.?",
      a: "De 5 a 10 días operativos. Los plazos dependen de la Superintendencia de Compañías (SCVS) y el Registro Mercantil, no de nosotros. Somos honestos: no vendemos falsas ilusiones de '24 horas'."
    },
    {
      q: "¿Necesito ir a una notaría u oficina física?",
      a: "No. Nuestro proceso es 100% electrónico: firma digital, reuniones por Zoom, y carga de documentos vía web. Cero desplazamientos."
    },
    {
      q: "¿Los precios que publican incluyen todo?",
      a: "Nuestros honorarios son fijos y publicados. NO incluyen tasas gubernamentales (aranceles de la Superintendencia de Compañías, Registro Mercantil o SENADI), las cuales son costos del estado que desglosamos con total transparencia antes de iniciar."
    },
    {
      q: "¿Puedo constituir una empresa siendo extranjero?",
      a: "Sí. Las S.A.S. en Ecuador permiten accionistas extranjeros sin restricciones. Diseñamos la estructura para que tu inversión foránea opere limpiamente bajo la normativa local."
    },
  ],

  // Calculator weights for recommendation engine
  calculator: {
    questions: [
      {
        id: "socios",
        label: "¿Cuántos socios conformarán la empresa?",
        options: [
          { label: "1 (Unipersonal)", value: "1", weights: { sas: 10, ltda: 0, sa: 0 } },
          { label: "2 a 5 socios", value: "2-5", weights: { sas: 7, ltda: 8, sa: 3 } },
          { label: "Más de 5 socios", value: "5+", weights: { sas: 5, ltda: 4, sa: 10 } },
          { label: "Aún no lo sé", value: "unknown", weights: { sas: 6, ltda: 5, sa: 4 } },
        ]
      },
      {
        id: "capital",
        label: "¿Cuál es el capital inicial proyectado?",
        options: [
          { label: "Menos de $400", value: "low", weights: { sas: 9, ltda: 3, sa: 1 } },
          { label: "Hasta $10,000", value: "mid", weights: { sas: 7, ltda: 7, sa: 5 } },
          { label: "Más de $10,000", value: "high", weights: { sas: 6, ltda: 6, sa: 9 } },
        ]
      },
      {
        id: "inversion",
        label: "¿Aspiras a recibir inversión extranjera o venture capital?",
        options: [
          { label: "Sí, es la meta", value: "yes", weights: { sas: 10, ltda: 2, sa: 6 } },
          { label: "Quizás a futuro", value: "maybe", weights: { sas: 8, ltda: 5, sa: 5 } },
          { label: "No, es capital familiar/propio", value: "no", weights: { sas: 4, ltda: 9, sa: 5 } },
        ]
      },
      {
        id: "industria",
        label: "¿Cuál es tu industria principal?",
        options: [
          { label: "Tech & Startups", value: "tech", weights: { sas: 10, ltda: 3, sa: 4 } },
          { label: "Comercial & Retail", value: "retail", weights: { sas: 5, ltda: 8, sa: 5 } },
          { label: "Servicios Profesionales", value: "services", weights: { sas: 7, ltda: 7, sa: 4 } },
          { label: "Industria / Manufactura", value: "industry", weights: { sas: 4, ltda: 5, sa: 8 } },
        ]
      },
      {
        id: "volumen",
        label: "¿Cuál es tu volumen de firmas y gestión estimado al mes?",
        options: [
          { label: "Bajo (pocas operaciones)", value: "low", weights: { sas: 5, ltda: 7, sa: 5 } },
          { label: "Alto — Necesito automatizar", value: "high", weights: { sas: 10, ltda: 4, sa: 6 } },
        ]
      },
    ],
    results: {
      sas: {
        name: "S.A.S. (Sociedad por Acciones Simplificada)",
        tagline: "Máxima flexibilidad. Ideal para startups y emprendedores modernos.",
        reason: "La S.A.S. permite estatutos hiper-flexibles, voto múltiple, y cero capital mínimo. Ideal para captar Venture Capital y operar con firmas 100% electrónicas."
      },
      ltda: {
        name: "Cía. Ltda. (Compañía de Responsabilidad Limitada)",
        tagline: "Control hermético. Ideal para negocios familiares y comerciales.",
        reason: "La Cía. Ltda. ofrece blindaje patrimonial limitando estrictamente quién puede entrar a la sociedad. Perfecta para comercio y capital familiar."
      },
      sa: {
        name: "S.A. (Sociedad Anónima)",
        tagline: "Escala institucional. Ideal para grandes capitales y múltiples accionistas.",
        reason: "La S.A. soporta gran volumen de accionistas con anonimato parcial. Idónea para industrias pesadas y estructuras bursátiles."
      }
    },
    efficiency: {
      traditional: { bureaucracy: "Visitas Notariales, Tramitología", hiddenCosts: "Altísimos (cada copia cuesta)", time: "21 a 40 días hábiles" },
      constival: { bureaucracy: "100% Firma Electrónica / $0 Notarías", hiddenCosts: "Cero. Tarifa plana documentada", time: "5 a 10 días operativos" }
    }
  },

  riskAudit: {
    questions: [
      {
        id: "estatutos",
        label: "¿Usaste una plantilla genérica al constituir tu empresa o los estatutos fueron personalizados?",
        options: [
          { label: "Plantilla genérica o modelo por defecto", value: "plantilla", riskScore: 3 },
          { label: "Personalizados por abogado generalista", value: "generalista", riskScore: 1 },
          { label: "Hechos a medida (con cláusulas de prevención)", value: "medida", riskScore: 0 }
        ]
      },
      {
        id: "nombramientos",
        label: "¿Hace cuánto tiempo se inscribió el cargo de tu Gerente General o Presidente actual?",
        options: [
          { label: "Más de 5 años (Probablemente vencido)", value: "vencido", riskScore: 5 },
          { label: "No estoy seguro o no recuerdo", value: "duda", riskScore: 3 },
          { label: "Menos de 4 años (Aún vigente)", value: "vigente", riskScore: 0 }
        ]
      },
      {
        id: "conflictos",
        label: "¿Tienes un protocolo legal firmado sobre qué sucede si tú y tu socio no logran ponerse de acuerdo?",
        options: [
          { label: "No, si nos peleamos la empresa se traba", value: "sin-pacto", riskScore: 3 },
          { label: "Sí, tenemos pactos de accionistas listos", value: "con-pacto", riskScore: 0 },
          { label: "Soy el único dueño (S.A.S. Unipersonal)", value: "unipersonal", riskScore: 0 }
        ]
      },
      {
        id: "marcas",
        label: "¿La marca comercial de tu empresa está legalmente registrada en el SENADI?",
        options: [
          { label: "No, la usamos sin registro oficial", value: "sin-registro", riskScore: 3 },
          { label: "Está inscrita a mi nombre personal", value: "personal", riskScore: 2 },
          { label: "Sí, a nombre estricto de la empresa", value: "empresa", riskScore: 0 }
        ]
      }
    ],
    results: {
      high: {
        title: "ALERTA ROJA: Riesgo Operativo y Patrimonial Alto",
        description: "Tu empresa está expuesta a multas severas, congelamiento bancario inminente por nombramientos caducados, o parálisis total societaria por falta de estructura legal.",
        cta: "Agendar Diagnóstico de Rescate",
        messageText: "Hola Constival, mi empresa salió con Alerta Roja en el Auditor. Necesito un diagnóstico urgente para proteger mi patrimonio."
      },
      mid: {
        title: "RIESGO MODERADO: Vacíos Legales Detectados",
        description: "Tienes tu documentación base, pero operas con vacíos en la resolución de conflictos o protección de intangibles corporativos que podrían costarte caro a futuro.",
        cta: "Agendar Revisión Preventiva",
        messageText: "Hola Constival, salí con Riesgo Moderado en el Auditor. Quiero agendar una revisión para parchar los vacíos en mis estatutos."
      },
      low: {
        title: "ESTRUCTURA SÓLIDA: Riesgo Mínimo",
        description: "¡Felicidades! Tu empresa proyecta un blindaje societario superior al promedio. Tu administración e intangibles cuentan con barreras de protección adecuadas.",
        cta: "Hablar con un Experto",
        messageText: "Hola Constival, aprobé el Auditor de Riesgos de su sitio, pero igual quiero consultar otros servicios societarios para mi empresa."
      }
    }
  },

  valueProposition: {
    title: "Arquitectos de estructuras empresariales",
    points: [
      "Asesoría jurídica experta (especialistas, no generalistas)",
      "Automatización de procesos",
      "Enfoque preventivo de riesgos",
      "Experiencia digital moderna"
    ]
  }
};