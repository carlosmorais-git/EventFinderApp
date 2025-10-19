// Função para calcular distância entre duas coordenadas usando a fórmula de Haversine
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Raio da Terra em km
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return distance;
};

// Converter graus para radianos
const toRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

// Filtrar eventos por raio de distância
export const filterEventsByRadius = (events, userLocation, radiusKm) => {
  const [userLat, userLng] = userLocation;
  
  return events.filter(event => {
    const [eventLat, eventLng] = event.coordinates;
    const distance = calculateDistance(userLat, userLng, eventLat, eventLng);
    return distance <= radiusKm;
  });
};

// Converter coordenadas para posição no mapa (simulação para web)
export const coordinatesToMapPosition = (coordinates, mapCenter, mapSize = { width: 100, height: 100 }) => {
  const [lat, lng] = coordinates;
  const [centerLat, centerLng] = mapCenter;
  
  // Fator de escala aproximado (ajustável)
  const scaleFactor = 800;
  
  // Calcular diferença em relação ao centro
  const latDiff = (lat - centerLat) * scaleFactor;
  const lngDiff = (lng - centerLng) * scaleFactor;
  
  // Converter para porcentagem da tela
  const x = 50 + (lngDiff / mapSize.width) * 100;
  const y = 50 - (latDiff / mapSize.height) * 100; // Invertido porque latitude cresce para cima
  
  // Limitar aos bounds do mapa
  const clampedX = Math.max(5, Math.min(95, x));
  const clampedY = Math.max(5, Math.min(95, y));
  
  return {
    left: `${clampedX}%`,
    top: `${clampedY}%`,
  };
};

// Obter cor baseada na categoria do evento
export const getCategoryColor = (category) => {
  const colors = {
    musica: '#6366f1',
    gastronomia: '#10b981',
    arte: '#f59e0b',
    esporte: '#ef4444',
    tecnologia: '#8b5cf6',
    educacao: '#06b6d4',
  };
  return colors[category] || '#64748b';
};

// Formatar distância para exibição
export const formatDistance = (distanceKm) => {
  if (distanceKm < 1) {
    return `${Math.round(distanceKm * 1000)}m`;
  }
  return `${distanceKm.toFixed(1)}km`;
};

// Simular localização do usuário (para demonstração)
export const simulateUserLocation = () => {
  // Coordenadas próximas ao centro de São Paulo com pequena variação
  const baseLat = -23.5505;
  const baseLng = -46.6333;
  
  // Adicionar variação aleatória de até 0.01 graus (aproximadamente 1km)
  const variation = 0.01;
  const lat = baseLat + (Math.random() - 0.5) * variation;
  const lng = baseLng + (Math.random() - 0.5) * variation;
  
  return [lat, lng];
};

