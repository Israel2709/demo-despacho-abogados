export const SITE = {
  name: "Herrera & Asociados",
  slogan: "Estrategia jurídica con visión y rigor.",
  phone: "+52 55 6789 1234",
  email: "contacto@herreraasociados.demo",
  address: "Paseo de la Reforma 250, CDMX",
  schedule: "Lun–Vie 9:00–18:00",
  url: "https://herreraasociados.demo",
} as const;

export const PRACTICE_AREAS = [
  {
    slug: "derecho-corporativo",
    title: "Derecho corporativo",
    description: "Constitución y estructuración de sociedades, fusiones, adquisiciones, gobierno corporativo y asesoría a consejos de administración.",
  },
  {
    slug: "litigio-civil-mercantil",
    title: "Litigio civil y mercantil",
    description: "Representación en juicios civiles y mercantiles, arbitraje, mediación y resolución de controversias comerciales.",
  },
  {
    slug: "derecho-laboral",
    title: "Derecho laboral",
    description: "Asesoría en relaciones laborales, contratación, despido, negociaciones colectivas y cumplimiento normativo.",
  },
  {
    slug: "contratos-cumplimiento",
    title: "Contratos y cumplimiento",
    description: "Redacción y negociación de contratos comerciales, cumplimiento regulatorio y prevención de riesgos legales.",
  },
  {
    slug: "asesoria-preventiva",
    title: "Asesoría preventiva",
    description: "Auditorías legales, due diligence, compliance y estrategias para prevenir litigios y riesgos corporativos.",
  },
] as const;

export const TEAM = [
  {
    slug: "carlos-herrera",
    name: "Carlos Herrera",
    role: "Socio fundador",
    specialty: "Derecho corporativo y M&A",
    bio: "Más de 18 años de experiencia en transacciones corporativas y gobierno empresarial. Egresado del ITAM y Harvard Law School.",
    image: "/team/carlos.jpg",
  },
  {
    slug: "maria-gonzalez",
    name: "María González",
    role: "Socia",
    specialty: "Litigio civil y mercantil",
    bio: "Especialista en arbitraje comercial internacional. Miembro del panel de árbitros del CAM y de la Cámara de Comercio Internacional.",
    image: "/team/maria.jpg",
  },
  {
    slug: "ricardo-mendoza",
    name: "Ricardo Mendoza",
    role: "Socio",
    specialty: "Derecho laboral",
    bio: "Experto en relaciones laborales y negociaciones colectivas. Asesor de empresas del sector industrial y de servicios.",
    image: "/team/ricardo.jpg",
  },
  {
    slug: "ana-torres",
    name: "Ana Torres",
    role: "Socia",
    specialty: "Contratos y cumplimiento",
    bio: "Especialista en compliance y prevención de riesgos. Certificada en auditoría de cumplimiento normativo.",
    image: "/team/ana.jpg",
  },
] as const;

export const EXPERIENCE_ITEMS = [
  { year: "2009", title: "Fundación del despacho", description: "Apertura de Herrera & Asociados con enfoque en derecho corporativo y transacciones." },
  { year: "2012", title: "Expansión a litigio", description: "Incorporación del área de litigio civil y mercantil con arbitraje internacional." },
  { year: "2016", title: "Sector tecnológico", description: "Asesoría a startups y empresas de tecnología en rondas de inversión y estructuración." },
  { year: "2019", title: "Compliance y prevención", description: "Desarrollo del área de asesoría preventiva y auditorías de cumplimiento." },
  { year: "2024", title: "Trayectoria consolidada", description: "Más de 15 años atendiendo sectores financiero, inmobiliario, tecnológico e industrial." },
] as const;

export const PUBLICATIONS = [
  {
    slug: "reformas-recientes-derecho-laboral",
    title: "Reformas recientes en derecho laboral",
    excerpt: "Análisis de los cambios normativos en materia laboral y su impacto en las empresas.",
    date: "2024-01-15",
    category: "Derecho laboral",
  },
  {
    slug: "clausulas-clave-contratos-comerciales",
    title: "Cláusulas clave en contratos comerciales",
    excerpt: "Elementos esenciales que toda empresa debe considerar al negociar acuerdos comerciales.",
    date: "2024-02-01",
    category: "Contratos",
  },
  {
    slug: "prevencion-riesgos-legales-empresas",
    title: "Prevención de riesgos legales en empresas",
    excerpt: "Estrategias de compliance y auditoría para reducir la exposición a contingencias.",
    date: "2024-02-10",
    category: "Asesoría preventiva",
  },
] as const;
