export const regions = [
  { id: "all", name: "Todas as Regiões" },
  { id: "centro", name: "Centro" },
  { id: "zona-norte", name: "Zona Norte" },
  { id: "zona-sul", name: "Zona Sul" },
  { id: "zona-leste", name: "Zona Leste" },
  { id: "zona-oeste", name: "Zona Oeste" },
];

export const categories = [
  { id: "all", name: "Todas as Categorias" },
  { id: "musica", name: "Música" },
  { id: "gastronomia", name: "Gastronomia" },
  { id: "arte", name: "Arte & Cultura" },
  { id: "esporte", name: "Esporte" },
  { id: "tecnologia", name: "Tecnologia" },
  { id: "educacao", name: "Educação" },
];

export const events = [
  {
    id: 1,
    title: "Festival de Jazz no Parque",
    description: "Uma noite mágica com os melhores artistas de jazz da cidade",
    date: "2025-01-15",
    time: "19:00",
    location: "Parque Ibirapuera",
    region: "zona-sul",
    category: "musica",
    price: "R$ 45,00",
    image: "🎷",
    attendees: 234,
    rating: 4.8,
    coordinates: [-23.5873, -46.6573], // Parque Ibirapuera
  },
  {
    id: 2,
    title: "Feira Gastronômica de Rua",
    description: "Sabores únicos da culinária brasileira e internacional",
    date: "2025-01-18",
    time: "11:00",
    location: "Largo da Batata",
    region: "zona-oeste",
    category: "gastronomia",
    price: "Gratuito",
    image: "🍴",
    attendees: 567,
    rating: 4.6,
    coordinates: [-23.5675, -46.7056], // Largo da Batata
  },
  {
    id: 3,
    title: "Exposição de Arte Contemporânea",
    description: "Obras inéditas de artistas emergentes paulistanos",
    date: "2025-01-20",
    time: "14:00",
    location: "Galeria Vermelho",
    region: "centro",
    category: "arte",
    price: "R$ 20,00",
    image: "🎨",
    attendees: 123,
    rating: 4.9,
    coordinates: [-23.5505, -46.6333], // Centro de SP
  },
  {
    id: 4,
    title: "Corrida Noturna da Cidade",
    description: "Percurso de 5km pelas principais avenidas iluminadas",
    date: "2025-01-22",
    time: "20:00",
    location: "Av. Paulista",
    region: "centro",
    category: "esporte",
    price: "R$ 35,00",
    image: "🏃‍♂️",
    attendees: 890,
    rating: 4.7,
    coordinates: [-23.5618, -46.6565], // Av. Paulista
  },
  {
    id: 5,
    title: "Hackathon de Inovação",
    description: "48 horas criando soluções para problemas urbanos",
    date: "2025-01-25",
    time: "09:00",
    location: "Campus da USP",
    region: "zona-oeste",
    category: "tecnologia",
    price: "R$ 50,00",
    image: "💻",
    attendees: 156,
    rating: 4.8,
    coordinates: [-23.5558, -46.7319], // USP
  },
  {
    id: 6,
    title: "Workshop de Fotografia",
    description: "Técnicas avançadas de fotografia urbana e retrato",
    date: "2025-01-28",
    time: "15:00",
    location: "Centro Cultural",
    region: "zona-norte",
    category: "educacao",
    price: "R$ 80,00",
    image: "📸",
    attendees: 45,
    rating: 4.9,
    coordinates: [-23.52, -46.6333], // Zona Norte
  },
  {
    id: 7,
    title: "Show de Rock Nacional",
    description: "Bandas independentes tocando sucessos nacionais",
    date: "2025-01-30",
    time: "21:00",
    location: "Casa de Shows Bourbon",
    region: "zona-leste",
    category: "musica",
    price: "R$ 60,00",
    image: "🎸",
    attendees: 345,
    rating: 4.5,
    coordinates: [-23.5505, -46.5833], // Zona Leste
  },
  {
    id: 8,
    title: "Festival de Food Trucks",
    description: "Os melhores food trucks da cidade em um só lugar",
    date: "2025-02-02",
    time: "12:00",
    location: "Parque Villa-Lobos",
    region: "zona-oeste",
    category: "gastronomia",
    price: "Gratuito",
    image: "🚚",
    attendees: 1200,
    rating: 4.7,
    coordinates: [-23.5486, -46.7208], // Parque Villa-Lobos
  },
  {
    id: 9,
    title: "Inauguração Softhose",
    description: "Levando a inovacão usando a imaginação",
    date: "2025-02-02",
    time: "16:00",
    location: "João Pinheiro",
    region: "zona-sul",
    category: "tecnologia",
    price: "Gratuito",
    image: "💻",
    attendees: 1200,
    rating: 4.7,
    coordinates: [-30.5486, -49.7208], // Parque Villa-Lobos
  },
];

// Centro de São Paulo para referência do mapa
export const mapCenter = [-23.5505, -46.6333];

// Raios de busca disponíveis (em km)
export const searchRadiusOptions = [
  { value: 1, label: "1 km" },
  { value: 2, label: "2 km" },
  { value: 5, label: "5 km" },
  { value: 10, label: "10 km" },
  { value: 20, label: "20 km" },
];

export const chatMessages = [
  {
    id: 1,
    type: "event",
    title: "Novo evento adicionado!",
    message: "Festival de Inverno na Zona Sul - 15 de Julho",
    time: "10:30",
    unread: true,
  },
  {
    id: 2,
    type: "location",
    title: "Local inexplorado",
    message: "Que tal conhecer o Mirante do Pico do Jaraguá?",
    time: "09:15",
    unread: true,
  },
  {
    id: 3,
    type: "event",
    title: "Evento próximo a você",
    message: "Show de MPB acontece hoje às 20h no seu bairro",
    time: "08:45",
    unread: false,
  },
  {
    id: 4,
    type: "location",
    title: "Descoberta cultural",
    message: "Casa de Cultura recém-inaugurada na Zona Norte",
    time: "Ontem",
    unread: false,
  },
];
