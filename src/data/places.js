export const initialPlaces = [
  {
    id: 1,
    name: "Arkadia Centro Comercial",
    category: "Compras",
    subCategory: "Entretenimiento familiar",
    description: "Un amplio espacio que combina compras, gastronomía y entretenimiento. Destaca su zona de entretenimiento en el sótano, con experiencias como Laser Tag y Escape Room.",
    priceMin: 15000,
    priceMax: 60000,
    priceLabel: "$15.000 - $60.000",
    isAdultOnly: false,
    address: "Cra. 70 #1-141, Belén, Medellín, Antioquia",
    zone: "Belén",
    coords: [6.2089, -75.5947],
    hours: "Lunes a Sábado: 10am a 9pm | Domingo: 11am a 8pm",
    howToGet: "Metro línea A hasta estación Aguacatala o Poblado, luego bus alimentador C3001 Santa Gema.",
    links: {
      instagram: "https://www.instagram.com/arkadiacc",
      facebook: "https://www.facebook.com/ArkadiaCC/",
      youtube: "https://www.youtube.com/@arkadiacc",
      web: "https://www.arkadiacentrocomercial.com/",
      maps: "https://maps.app.goo.gl/Wa4dg5fTxJowcascA"
    },
    color: "bg-rosa",
    tags: ["cine", "laser tag", "comida", "compras"]
  },
  {
    id: 2,
    name: "Centro Comercial Viva Envigado",
    category: "Entretenimiento",
    subCategory: "Diversión y compras",
    description: "Uno de los centros comerciales más grandes de Colombia. Cuenta con parque de diversiones en la terraza con rueda gigante, pista de patinaje, cine y plazoleta gastronómica.",
    priceMin: 20000,
    priceMax: 70000,
    priceLabel: "$20.000 - $70.000",
    isAdultOnly: false,
    address: "Cra. 48 #32B Sur - 139, Envigado, Antioquia",
    zone: "Envigado",
    coords: [6.1776, -75.5921],
    hours: "Lunes a Domingo: 9am a 9pm",
    howToGet: "Metro línea A hasta estación Envigado; conectas directamente por el puente peatonal elevado.",
    links: {
      instagram: "https://www.instagram.com/vivaenvigadocc",
      facebook: "https://www.facebook.com/vivaenvigadocc/",
      web: "https://www.ccviva.co/envigado",
      maps: "https://maps.app.goo.gl/j7VRokS9t26cLtqE8"
    },
    color: "bg-chartreuse",
    tags: ["parque de diversiones", "cine", "rueda gigante", "familiar"]
  },
  {
    id: 3,
    name: "Centro Comercial Santafé",
    category: "Compras",
    subCategory: "Moda y ocio",
    description: "Espacio emblemático en El Poblado, reconocido por sus espectaculares tapetes de flores o atracciones de temporada en la plazoleta central, techos retráctiles y salas de cine.",
    priceMin: 25000,
    priceMax: 90000,
    priceLabel: "$25.000 - $90.000",
    isAdultOnly: false,
    address: "Carrera 43A, Cl. 7 Sur #170, El Poblado, Medellín",
    zone: "El Poblado",
    coords: [6.1969, -75.5742],
    hours: "Lunes a Sábado: 10am a 9pm | Domingo: 11am a 8pm",
    howToGet: "Metro línea A hasta estación Aguacatala o Poblado, luego caminar 10 min por Av. El Poblado o tomar integrado.",
    links: {
      instagram: "https://www.instagram.com/santafemedellin",
      facebook: "https://www.facebook.com/SantafeMedellin/",
      tiktok: "https://www.tiktok.com/@santafemedellin",
      web: "https://www.ccgreensantafe.com/",
      maps: "https://maps.app.goo.gl/be735mYFDYqp8TCt6"
    },
    color: "bg-orange",
    tags: ["moda", "restaurantes", "cine", "fotografía"]
  },
  {
    id: 4,
    name: "Puerta del Norte",
    category: "Compras",
    subCategory: "Comercio en el norte",
    description: "El punto de encuentro predilecto en el norte del Valle de Aburrá. Conexión directa a la estación terminal del metro, múltiples salas de cine, zona de juegos y restaurantes.",
    priceMin: 10000,
    priceMax: 45000,
    priceLabel: "$10.000 - $45.000",
    isAdultOnly: false,
    address: "Autopista Nte. #34-67, Niquía, Bello, Antioquia",
    zone: "Bello",
    coords: [6.3382, -75.5451],
    hours: "Lunes a Domingo: 10am a 9pm",
    howToGet: "Metro línea A directo hasta la última estación en el norte: Niquía. El puente peatonal conecta al centro comercial.",
    links: {
      instagram: "https://www.instagram.com/puertadelnortecc",
      facebook: "https://www.facebook.com/puertadelnortecc/",
      tiktok: "https://www.tiktok.com/@puertadelnortecc",
      web: "http://www.puertadelnorte.com/",
      maps: "https://maps.app.goo.gl/TRVEsEGdm8rAnZSj9"
    },
    color: "bg-azul",
    tags: ["bello", "niquia", "cine", "juegos"]
  },
  {
    id: 5,
    name: "Florida Parque Comercial",
    category: "Compras",
    subCategory: "Ocio en el noroccidente",
    description: "Ambiente fresco e iluminado con gran plazoleta de comidas, salas de cine y la zona infantil Happy City. Muy accesible para parches de fin de semana.",
    priceMin: 12000,
    priceMax: 50000,
    priceLabel: "$12.000 - $50.000",
    isAdultOnly: false,
    address: "Cl. 71 #65 - 150, El Progreso, Medellín",
    zone: "Robledo / Progreso",
    coords: [6.2731, -75.5786],
    hours: "Lunes a Domingo: 11am a 8pm",
    howToGet: "Metro línea A hasta estación Caribe o Hospital, y bus alimentador ruta 289 Picacho.",
    links: {
      instagram: "https://www.instagram.com/floridapqoficial",
      facebook: "https://www.facebook.com/FloridaParqueComercial/",
      web: "http://www.floridapc.co/",
      maps: "https://maps.app.goo.gl/3K8kCi6Rmx9AaPYP6"
    },
    color: "bg-rosa",
    tags: ["familiar", "cine", "amigos", "compras"]
  },
  {
    id: 6,
    name: "Centro Comercial Sandiego",
    category: "Compras",
    subCategory: "Tradición y compras",
    description: "El primer centro comercial cerrado construido en Colombia. Ofrece un ambiente tradicional, espacios al aire libre, cafés acogedores y excelente ubicación central.",
    priceMin: 10000,
    priceMax: 40000,
    priceLabel: "$10.000 - $40.000",
    isAdultOnly: false,
    address: "Calle 34 # 46-66, Sandiego, Medellín",
    zone: "Centro",
    coords: [6.2335, -75.5684],
    hours: "Lunes a Sábado: 9am-8pm | Domingo: 10am-7pm",
    howToGet: "Metro línea A hasta estación Exposiciones y caminar 5 minutos al oriente.",
    links: {
      instagram: "https://www.instagram.com/sandiegocc",
      facebook: "https://www.facebook.com/CentroComercialSandiego/",
      web: "https://sandiego.com.co",
      maps: "https://maps.app.goo.gl/3kSduTHf2ZzzqXyE8"
    },
    color: "bg-orange",
    tags: ["centro", "cafés", "tranquilo", "tradición"]
  },
  {
    id: 7,
    name: "Royal Films",
    category: "Entretenimiento",
    subCategory: "Cine accesible",
    description: "Salas de cine con combos y boletería económica en varios puntos estratégicos de Medellín (Bosque Plaza, Premium Plaza y La 65). Ideal para parchar con poco presupuesto.",
    priceMin: 9000,
    priceMax: 28000,
    priceLabel: "$9.000 - $28.000",
    isAdultOnly: false,
    address: "Múltiples sedes: Bosque Plaza (Estación Universidad), Premium Plaza (Av. El Poblado)",
    zone: "Centro / Poblado",
    coords: [6.2298, -75.5721],
    hours: "Funciones continuas desde las 12:30pm hasta las 10:00pm",
    howToGet: "Sede Bosque Plaza: Metro estación Universidad. Sede Premium Plaza: Metro estación Industriales.",
    links: {
      instagram: "https://www.instagram.com/cinemasroyalfilms",
      facebook: "https://www.facebook.com/CinemasRoyalFilms/",
      web: "https://cinemasroyalfilms.com/cartelera/medell%C3%ADn",
      maps: "https://share.google/cKOiGE5Vs2gUFT4P1"
    },
    color: "bg-chartreuse",
    tags: ["cine barato", "palomitas", "estrenos"]
  },
  {
    id: 8,
    name: "Mercado del Río",
    category: "Gastronomía",
    subCategory: "Food Hall Gourmet",
    description: "El primer mercado gastronómico de Medellín. Más de 30 propuestas culinarias bajo el mismo techo: comida típica paisa, sushi, paellas, pastas, tapas y cócteles.",
    priceMin: 22000,
    priceMax: 80000,
    priceLabel: "$22.000 - $80.000",
    isAdultOnly: false,
    address: "Cl. 24 #48-28, Ciudad del Río, Medellín",
    zone: "El Poblado",
    coords: [6.2244, -75.5749],
    hours: "Lunes a Jueves: 12pm a 10pm | Viernes y Sábado: 12pm a 12am | Domingo: 12pm a 8pm",
    howToGet: "Metro línea A hasta estación Industriales, caminar 3 cuadras al suroriente hacia Ciudad del Río.",
    links: {
      instagram: "https://www.instagram.com/mercadodelrio",
      facebook: "https://www.facebook.com/mercadodelriomedellin/",
      tiktok: "https://www.tiktok.com/@mercadodelrio",
      web: "https://www.mercadodelrio.com.co/",
      maps: "https://maps.app.goo.gl/H4vHh11Xj51fQ7nZ6"
    },
    color: "bg-orange",
    tags: ["gastronomía", "food court", "amigos", "cerveza"]
  },
  {
    id: 9,
    name: "Jardín Botánico de Medellín",
    category: "Naturaleza",
    subCategory: "Oasis natural urbano",
    description: "14 hectáreas de bosque y flora en el corazón de la ciudad. Entrada totalmente libre y gratuita. Alberga el famoso Orquideorama, lago central, iguanas libres y café.",
    priceMin: 0,
    priceMax: 15000,
    priceLabel: "Entrada Gratis (Plan económico)",
    isAdultOnly: false,
    address: "Cl. 73 #51D-14, Aranjuez, Medellín",
    zone: "Norte / Aranjuez",
    coords: [6.2705, -75.5639],
    hours: "Martes a Domingo: 9:00am a 4:30pm (Lunes cerrado por mantenimiento)",
    howToGet: "Metro línea A directo hasta estación Universidad. La entrada principal está justo frente a la salida del metro.",
    links: {
      instagram: "https://www.instagram.com/jardinbotanicodemedellin",
      facebook: "https://www.facebook.com/jardinbotanicodemedellin/",
      youtube: "https://www.youtube.com/user/jardinbotanicomed",
      web: "https://www.botanicomedellin.org/",
      maps: "https://maps.app.goo.gl/W5NqX9QdZtE8K5j98"
    },
    color: "bg-chartreuse",
    tags: ["gratis", "naturaleza", "picnic", "iguanas", "orquídeas"]
  },
  {
    id: 10,
    name: "Parque Explora y Planetario",
    category: "Cultura",
    subCategory: "Ciencia interactiva",
    description: "Museo interactivo de ciencia y tecnología con el acuario de agua dulce más grande de Sudamérica, vivario, salas de física y sala de proyecciones astronómicas 360°.",
    priceMin: 20000,
    priceMax: 48000,
    priceLabel: "$20.000 - $48.000 (Tarifa diferenciada Sisbén)",
    isAdultOnly: false,
    address: "Cra. 53 #73-75, frente al Jardín Botánico, Medellín",
    zone: "Norte / Aranjuez",
    coords: [6.2711, -75.5658],
    hours: "Martes a Viernes: 8:30am a 5:30pm | Sábados, Domingos y Festivos: 10am a 6:30pm",
    howToGet: "Metro línea A hasta estación Universidad. Salida directa a la plaza de los dinosaurios de Explora.",
    links: {
      instagram: "https://www.instagram.com/parqueexplora",
      facebook: "https://www.facebook.com/ParqueExplora/",
      youtube: "https://www.youtube.com/user/parqueexplora",
      web: "https://www.parqueexplora.org/",
      maps: "https://maps.app.goo.gl/9W5iE72yYVv1b9j26"
    },
    color: "bg-rosa",
    tags: ["ciencia", "acuario", "educativo", "niños y adultos"]
  },
  {
    id: 11,
    name: "MAMM - Museo de Arte Moderno",
    category: "Cultura",
    subCategory: "Arte contemporáneo",
    description: "Antigua siderúrgica transformada en templo del arte contemporáneo, cine independiente al aire libre y explanada comunitaria donde se reúnen jóvenes a hacer picnic.",
    priceMin: 12000,
    priceMax: 25000,
    priceLabel: "$12.000 - $25.000 (Explanada Gratis)",
    isAdultOnly: false,
    address: "Cra. 44 #19A-100, Ciudad del Río, Medellín",
    zone: "El Poblado",
    coords: [6.2238, -75.5746],
    hours: "Martes a Viernes: 11am a 7pm | Sábados y Domingos: 11am a 6pm",
    howToGet: "Metro línea A hasta estación Industriales, caminar 5 minutos hacia Ciudad del Río.",
    links: {
      instagram: "https://www.instagram.com/elmamm/",
      facebook: "https://www.facebook.com/mammedellin",
      tiktok: "https://www.tiktok.com/@mammedellin",
      youtube: "https://www.youtube.com/channel/UCvoDj3kXZcUjLrGF-8Tk5Ng",
      twitter: "https://x.com/MAMmedellin",
      web: "https://www.elmamm.org/",
      maps: "https://www.google.com/maps/place/Museo+de+Arte+Moderno+de+Medell%C3%ADn/@6.2237877,-75.5763184,17z"
    },
    color: "bg-azul",
    tags: ["arte", "cine", "picnic", "cultura"]
  },
  {
    id: 12,
    name: "Parques del Río Medellín",
    category: "Planes al aire libre",
    subCategory: "Espacio público y río",
    description: "Parque lineal que transformó la ribera del Río Medellín. Extensas zonas verdes, ciclorrutas, fuentes de agua interactivas, zonas de picnic y ambiente seguro para mascotas.",
    priceMin: 0,
    priceMax: 10000,
    priceLabel: "Totalmente Gratis",
    isAdultOnly: false,
    address: "Autopista Sur entre calles 33 y 44 (San Juan), Medellín",
    zone: "Conquistadores",
    coords: [6.2425, -75.5779],
    hours: "Abierto 24 horas (Recomendado hasta las 10:00pm)",
    howToGet: "Metro línea A hasta estación Exposiciones o Alpujarra, caminar hacia el occidente cruzando el edificio inteligente de EPM.",
    links: {
      instagram: "https://www.instagram.com/alcaldiademed",
      facebook: "https://www.facebook.com/AlcaldiadeMed/",
      twitter: "https://x.com/AlcaldiadeMed",
      web: "https://www.medellin.gov.co/",
      maps: "https://maps.app.goo.gl/kX34z7g3N9s1A1k49"
    },
    color: "bg-chartreuse",
    tags: ["gratis", "mascotas", "bicicleta", "aire libre", "atardecer"]
  },
  {
    id: 13,
    name: "Cerro Nutibara y Pueblito Paisa",
    category: "Planes al aire libre",
    subCategory: "Mirador 360° y tradición",
    description: "Mirador natural en medio del valle con réplica de un pueblo tradicional antioqueño, museo de ciudad, senderos ecológicos peatonales, teatro al aire libre y venta de antojitos paisas.",
    priceMin: 0,
    priceMax: 18000,
    priceLabel: "Entrada Gratis (Snacks accesibles)",
    isAdultOnly: false,
    address: "Calle 30A #55-64, Cerro Nutibara, Medellín",
    zone: "Belén",
    coords: [6.2361, -75.5801],
    hours: "Lunes a Domingo: 5:00am a 11:00pm",
    howToGet: "Metro línea A hasta estación Industriales o Metroplús estación Nutibara; ascenso por sendero peatonal o taxi corto.",
    links: {
      instagram: "https://www.instagram.com/cerro.nutibara",
      facebook: "https://www.facebook.com/CerroNutibaraOficial/",
      web: "https://www.medellin.gov.co",
      maps: "https://maps.app.goo.gl/P8u2Zp6Zc2Yq5fB38"
    },
    color: "bg-orange",
    tags: ["mirador", "pueblito paisa", "fotografía", "gratis"]
  },
  {
    id: 14,
    name: "Parque Ecoturístico Arví",
    category: "Naturaleza",
    subCategory: "Reserva forestal de niebla",
    description: "Gigantesca reserva forestal en el corregimiento de Santa Elena. Rutas de senderismo ecológico guiado, mercado campesino con fresas con crema y artesanías, aire puro.",
    priceMin: 12500,
    priceMax: 35000,
    priceLabel: "$12.500 - $35.000 (Incluye Metrocable)",
    isAdultOnly: false,
    address: "Corregimiento de Santa Elena, Medellín",
    zone: "Santa Elena",
    coords: [6.2825, -75.5025],
    hours: "Martes a Domingo: 9:00am a 5:00pm (Lunes cerrado)",
    howToGet: "Metro línea A hasta Acevedo, transfer a Metrocable línea K hasta Santo Domingo, y transfer a Metrocable turístico línea L Arví.",
    links: {
      instagram: "https://www.instagram.com/parquearvi",
      facebook: "https://www.facebook.com/ParqueArvi/",
      youtube: "https://www.youtube.com/user/ParqueArvi",
      web: "https://parquearvi.org/",
      maps: "https://maps.app.goo.gl/bM5K6W4r3V8z1L6T8"
    },
    color: "bg-chartreuse",
    tags: ["metrocable", "bosque", "senderismo", "fresas", "aire libre"]
  },
  {
    id: 15,
    name: "Salón Málaga (Tango y Bohemio)",
    category: "Vida nocturna",
    subCategory: "Música en vivo y tradición (+18)",
    description: "Patrimonio bohemio de Medellín fundado en 1957. Música en tocadiscos de vinilo, tardes de tango, boleros y milongas. Venta de cervezas y licores tradicionales. Exclusivo mayores de edad.",
    priceMin: 8000,
    priceMax: 35000,
    priceLabel: "$8.000 - $35.000 (Cerveza y trago accesible)",
    isAdultOnly: true,
    address: "Cra. 51 #45-80, Guayaquil, Medellín (Junto a estación Metro San Antonio)",
    zone: "Centro",
    coords: [6.2464, -75.5681],
    hours: "Lunes a Sábado: 8am a 11pm | Domingos: 12pm a 8pm",
    howToGet: "Metro líneas A o B hasta estación San Antonio. Salida Bolívar hacia el viaducto, a solo unos pasos.",
    links: {
      instagram: "https://www.instagram.com/salonmalaga",
      facebook: "https://www.facebook.com/salonmalagamedellin/",
      web: "https://salonmalaga.com/",
      maps: "https://maps.app.goo.gl/o1kZ6XpL2u9y4fV79"
    },
    color: "bg-morado",
    tags: ["+18", "tango", "cerveza", "historia", "centro"]
  },
  {
    id: 16,
    name: "Envy Rooftop & Club Provenza",
    category: "Vida nocturna",
    subCategory: "Rooftop y club nocturno (+18)",
    description: "Rooftop bar en el corazón de Provenza con piscina central, DJs en vivo, coctelería de autor y vista panorámica al valle. Estricto control de edad en la entrada.",
    priceMin: 35000,
    priceMax: 120000,
    priceLabel: "$35.000 - $120.000 (Cócteles & Botellas)",
    isAdultOnly: true,
    address: "Calle 9A #37-16, Hotel The Charlee, Provenza, El Poblado",
    zone: "El Poblado",
    coords: [6.2091, -75.5673],
    hours: "Miércoles a Domingo: 5:00pm a 2:00am",
    howToGet: "Metro línea A hasta estación Poblado, tomar taxi o integrado ruta 134 hacia el Parque de El Poblado / Provenza.",
    links: {
      instagram: "https://www.instagram.com/thecharleehotel",
      facebook: "https://www.facebook.com/TheCharleeHotel/",
      tiktok: "https://www.tiktok.com/@thecharleehotel",
      web: "https://thecharlee.com/",
      maps: "https://maps.app.goo.gl/j3G9Z5bT7v4p2L1X8"
    },
    color: "bg-rosa",
    tags: ["+18", "fiesta", "cocteles", "piscina", "provenza"]
  },
  {
    id: 17,
    name: "La Pascasia (Centro Cultural & Bar)",
    category: "Vida nocturna",
    subCategory: "Música independiente & bar (+18)",
    description: "Casa patrimonial convertida en epicentro cultural con conciertos de bandas locales, librería, salsa brava, cervezas artesanales y comida criolla. Ambiente alternativo +18 por expendio de bebidas.",
    priceMin: 15000,
    priceMax: 45000,
    priceLabel: "$15.000 - $45.000",
    isAdultOnly: true,
    address: "Cra. 42 #46-46, Barrio Boston, Medellín",
    zone: "Centro",
    coords: [6.2435, -75.5632],
    hours: "Miércoles a Sábado: 4:00pm a 1:00am",
    howToGet: "Tranvía de Ayacucho hasta estación San José o Pabellón del Agua, y caminar 4 cuadras al norte por la 42.",
    links: {
      instagram: "https://www.instagram.com/lapascasia",
      facebook: "https://www.facebook.com/lapascasia/",
      web: "https://lapascasia.com/",
      maps: "https://maps.app.goo.gl/9R6K3h1L8x7v5fP49"
    },
    color: "bg-morado",
    tags: ["+18", "musica en vivo", "cerveza artesanal", "boston"]
  },
  {
    id: 18,
    name: "Calle de la Buena Mesa (Envigado)",
    category: "Gastronomía",
    subCategory: "Paseo gastronómico al aire libre",
    description: "Callejón peatonal vibrante rodeado de más de 20 restaurantes con terrazas al aire libre: hamburguesas gourmet, pastas, carnes a la parrilla, cocina mexicana y postres.",
    priceMin: 25000,
    priceMax: 75000,
    priceLabel: "$25.000 - $75.000",
    isAdultOnly: false,
    address: "Calle 30 Sur entre carreras 44A y 45, Barrio Jardines, Envigado",
    zone: "Envigado",
    coords: [6.1731, -75.5862],
    hours: "Martes a Domingo: 12:00pm a 11:00pm",
    howToGet: "Metro línea A hasta estación Ayurá o Envigado, tomar integrado hacia Parque de Envigado o Jardines.",
    links: {
      instagram: "https://www.instagram.com/explore/tags/buenamesaenvigado",
      facebook: "https://www.facebook.com/buenamesaenvigado/",
      web: "https://envigadotravel.com",
      maps: "https://maps.app.goo.gl/V3G5B7nK9y1p4L2X7"
    },
    color: "bg-orange",
    tags: ["gastronomía", "terrazas", "amigos", "envigado"]
  },
  {
    id: 19,
    name: "Museo Casa de la Memoria",
    category: "Cultura",
    subCategory: "Memoria histórica y derechos humanos",
    description: "Espacio de reflexión, diálogo y memoria histórica sobre el conflicto y la resiliencia en Medellín. Exposiciones interactivas, archivo sonoro y eventos culturales.",
    priceMin: 0,
    priceMax: 0,
    priceLabel: "Totalmente Gratis",
    isAdultOnly: false,
    address: "Parque Bicentenario, Calle 51 #36-66, Boston, Medellín",
    zone: "Centro",
    coords: [6.2483, -75.5567],
    hours: "Martes a Viernes: 9am a 6pm | Sábados, Domingos y Festivos: 10am a 4pm",
    howToGet: "Tranvía de Ayacucho hasta estación Bicentenario; salida directa al parque del museo.",
    links: {
      instagram: "https://www.instagram.com/museocasadelamemoria.med/",
      facebook: "https://www.facebook.com/MuseoCasadelaMemoria/",
      tiktok: "https://www.tiktok.com/@museocasadelamemoria.med",
      youtube: "https://www.youtube.com/@MuseoCasadelaMemoria",
      twitter: "https://x.com/CasadelaMemoria",
      web: "https://www.museocasadelamemoria.gov.co/",
      maps: "https://www.google.com/maps/search/?api=1&query=Museo+Casa+de+la+Memoria+Medell%C3%ADn"
    },
    color: "bg-azul",
    tags: ["gratis", "cultura", "historia", "tranvía"]
  },
  {
    id: 20,
    name: "Museo de Antioquia",
    category: "Cultura",
    subCategory: "Pintura, escultura y Botero",
    description: "Frente a la Plaza Botero en el centro de Medellín. Alberga la colección más grande del maestro Fernando Botero, salas de arte prehispánico, colonial y contemporáneo.",
    priceMin: 10000,
    priceMax: 24000,
    priceLabel: "$10.000 - $24.000 (Estratos 1, 2 y 3 Gratis)",
    isAdultOnly: false,
    address: "Cra. 52 #52-43, Plaza Botero, Medellín",
    zone: "Centro",
    coords: [6.2524, -75.5684],
    hours: "Lunes a Sábado: 10:00am a 5:30pm",
    howToGet: "Metro línea A hasta estación Parque Berrío; cruzar hacia la Plaza de las Esculturas de Botero.",
    links: {
      instagram: "https://www.instagram.com/museodeantioquia/",
      facebook: "https://www.facebook.com/museodantioquia",
      tiktok: "https://www.tiktok.com/@museoantioquia",
      youtube: "https://www.youtube.com/@museodantioquia",
      twitter: "https://x.com/museodantioquia",
      web: "https://museodeantioquia.co/",
      maps: "https://www.google.com/maps/search/?api=1&query=Museo+de+Antioquia+Medell%C3%ADn"
    },
    color: "bg-rosa",
    tags: ["botero", "arte", "plaza botero", "centro"]
  },
  {
    id: 21,
    name: "Museo El Castillo",
    category: "Cultura",
    subCategory: "Castillo gótico y jardines franceses",
    description: "Arquitectura inspirada en los castillos del Valle del Loira en Francia. Enormes jardines estilo Versalles para hacer picnic, sala de antigüedades y galería de arte.",
    priceMin: 18000,
    priceMax: 30000,
    priceLabel: "$18.000 - $30.000",
    isAdultOnly: false,
    address: "Calle 9 Sur #32-269, Loma de Los Balsos, El Poblado",
    zone: "El Poblado",
    coords: [6.1908, -75.5683],
    hours: "Lunes a Viernes: 9:00am a 5:00pm | Sábados y Domingos: 10:00am a 5:00pm",
    howToGet: "Metro línea A hasta estación Aguacatala, tomar integrado ruta 133IIa Loma de Los Balsos.",
    links: {
      instagram: "https://www.instagram.com/museoelcastillo/",
      facebook: "https://www.facebook.com/museoelcastillo/",
      web: "https://www.museoelcastillo.org/",
      maps: "https://www.google.com/maps/search/?api=1&query=Museo+El+Castillo+Medell%C3%ADn"
    },
    color: "bg-chartreuse",
    tags: ["jardines", "picnic", "castillo", "fotografía"]
  },
  {
    id: 22,
    name: "El Tesoro Parque Comercial",
    category: "Compras",
    subCategory: "Vistas y comercio exclusivo",
    description: "Parque comercial en las laderas de El Poblado con vista panorámica a la ciudad, parque de atracciones infantil, tren interior, salas de teatro y prestigiosos restaurantes.",
    priceMin: 20000,
    priceMax: 85000,
    priceLabel: "$20.000 - $85.000",
    isAdultOnly: false,
    address: "Cra. 25A #1A Sur - 45, El Poblado, Medellín",
    zone: "El Poblado",
    coords: [6.1972, -75.5583],
    hours: "Lunes a Domingo: 10:00am a 9:00pm",
    howToGet: "Metro línea A hasta estación Poblado, tomar integrado 134 El Tesoro.",
    links: {
      instagram: "https://www.instagram.com/eltesoromedellin",
      facebook: "https://www.facebook.com/eltesoromedellin/",
      web: "https://eltesoro.com.co/",
      maps: "https://maps.app.goo.gl/3WNauASJA7A94dqb7"
    },
    color: "bg-orange",
    tags: ["compras", "teatro", "mirador", "el poblado"]
  },
  {
    id: 23,
    name: "Parque Ecoturístico El Salado",
    category: "Naturaleza",
    subCategory: "Charcos, canopy y senderismo",
    description: "Parque ecológico al final de Envigado rodeado de quebradas cristalinas, senderos ecológicos, muro de escalada, canopy y zonas de picnic al aire libre.",
    priceMin: 5000,
    priceMax: 18000,
    priceLabel: "$5.000 - $18.000 (Comfenalco)",
    isAdultOnly: false,
    address: "Calle 40 Sur, Arenales, Envigado",
    zone: "Envigado",
    coords: [6.1492, -75.5611],
    hours: "Miércoles a Domingo: 9:00am a 4:30pm",
    howToGet: "Metro línea A hasta estación Envigado, tomar integrado 'El Salado'.",
    links: {
      instagram: "http://www.instagram.com/comfenalcoant",
      facebook: "https://www.facebook.com/ComfenalcoAnt",
      twitter: "https://x.com/ComfenalcoAnt",
      web: "https://www.comfenalcoantioquia.com.co/",
      maps: "https://maps.app.goo.gl/7qoqwVq79LFmFTjH6"
    },
    color: "bg-chartreuse",
    tags: ["naturaleza", "río", "canopy", "picnic", "envigado"]
  },
  {
    id: 24,
    name: "Centro Comercial Parque Fabricato",
    category: "Compras",
    subCategory: "Comercio y entretenimiento en Bello",
    description: "Moderno complejo en Bello construido en los antiguos terrenos de la fábrica textil Fabricato. Gran oferta gastronómica, cine, juegos infantiles y tiendas de grandes marcas.",
    priceMin: 15000,
    priceMax: 55000,
    priceLabel: "$15.000 - $55.000",
    isAdultOnly: false,
    address: "Cra. 50 #38A-185, Bello, Antioquia",
    zone: "Bello",
    coords: [6.3312, -75.5539],
    hours: "Lunes a Domingo: 10:00am a 9:00pm",
    howToGet: "Metro línea A hasta estación Bello o Madera, tomar integrado ruta Fabricato.",
    links: {
      instagram: "https://www.instagram.com/parquefabricato",
      facebook: "https://www.facebook.com/parquefabricato/",
      web: "https://parquefabricato.com/",
      maps: "https://maps.app.goo.gl/tP4Haf9pQbZMF8Xq9"
    },
    color: "bg-rosa",
    tags: ["bello", "compras", "cine", "moda"]
  }
];

// LocalStorage key for user submitted places
export const USER_PLACES_STORAGE_KEY = 'vamos_pues_user_places';

export const getStoredPlaces = () => {
  try {
    const stored = localStorage.getItem(USER_PLACES_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return [...initialPlaces, ...parsed];
      }
    }
  } catch (e) {
    console.error("Error reading stored places:", e);
  }
  return initialPlaces;
};

export const saveUserPlace = (newPlace) => {
  try {
    const stored = localStorage.getItem(USER_PLACES_STORAGE_KEY);
    const list = stored ? JSON.parse(stored) : [];
    list.push(newPlace);
    localStorage.setItem(USER_PLACES_STORAGE_KEY, JSON.stringify(list));
    return [...initialPlaces, ...list];
  } catch (e) {
    console.error("Error saving user place:", e);
    return [...initialPlaces, newPlace];
  }
};

export const categoriesList = [
  { id: "Gastronomía", name: "Gastronomía 🍔" },
  { id: "Entretenimiento", name: "Entretenimiento 🎮" },
  { id: "Cultura", name: "Cultura 🎭" },
  { id: "Naturaleza", name: "Naturaleza 🌿" },
  { id: "Vida nocturna", name: "Vida nocturna 🍸 (+18)" },
  { id: "Planes al aire libre", name: "Planes al aire libre ☀️" },
  { id: "Compras", name: "Compras 🛍️" }
];

export const zonesList = [
  "Todas las zonas",
  "El Poblado",
  "Laureles",
  "Centro",
  "Envigado",
  "Bello",
  "Belén",
  "Norte / Aranjuez",
  "Santa Elena"
];
