import React, { useState, useMemo, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  events,
  mapCenter,
  searchRadiusOptions,
  categories,
} from "../data/eventsData";
import {
  filterEventsByRadius,
  coordinatesToMapPosition,
  getCategoryColor,
  formatDistance,
  calculateDistance,
  simulateUserLocation,
} from "../utils/mapUtils";

// Para web, vamos usar uma implementação simples de mapa
const MapView = ({ children, center, zoom, style }) => {
  if (Platform.OS === "web") {
    return (
      <div
        style={{
          ...style,
          background: "#e5e7eb",
          position: "relative",
          overflow: "hidden",
          borderRadius: 12,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#64748b",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Mapa de São Paulo
        </div>
        {children}
      </div>
    );
  }
  return <View style={style}>{children}</View>;
};

const EventMarker = ({ event, onPress, isSelected, userLocation }) => {
  const position = coordinatesToMapPosition(event.coordinates, mapCenter);
  const distance = calculateDistance(
    userLocation[0],
    userLocation[1],
    event.coordinates[0],
    event.coordinates[1]
  );

  return (
    <TouchableOpacity
      style={[
        styles.marker,
        {
          backgroundColor: getCategoryColor(event.category),
          position: "absolute",
          ...position,
          transform: [{ scale: isSelected ? 1.2 : 1 }],
          zIndex: isSelected ? 10 : 1,
        },
      ]}
      onPress={() => onPress(event)}
    >
      <Text style={styles.markerText}>{event.image}</Text>
      {isSelected && <View style={styles.markerPulse} />}
      <View style={styles.distanceLabel}>
        <Text style={styles.distanceLabelText}>{formatDistance(distance)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function MapScreen() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedRadius, setSelectedRadius] = useState(5);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [userLocation, setUserLocation] = useState(mapCenter);

  // Simular localização do usuário ao carregar a tela
  useEffect(() => {
    const simulatedLocation = simulateUserLocation();
    setUserLocation(simulatedLocation);
  }, []);

  const filteredEvents = useMemo(() => {
    let filtered = events;

    // Filtrar por categoria
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (event) => event.category === selectedCategory
      );
    }

    // Filtrar por raio usando a função utilitária
    filtered = filterEventsByRadius(filtered, userLocation, selectedRadius);

    return filtered;
  }, [selectedCategory, selectedRadius, userLocation]);

  const handleMarkerPress = (event) => {
    setSelectedEvent(selectedEvent?.id === event.id ? null : event);
  };

  const handleLocationUpdate = () => {
    const newLocation = simulateUserLocation();
    setUserLocation(newLocation);
    setSelectedEvent(null); // Limpar seleção ao mudar localização
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header com controles */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>Mapa de Eventos</Text>
          <Text style={styles.headerSubtitle}>
            {filteredEvents.length} eventos em {selectedRadius}km
          </Text>
        </View>
        <TouchableOpacity
          style={styles.locationButton}
          onPress={handleLocationUpdate}
        >
          <Ionicons name="location" size={20} color="#6366f1" />
        </TouchableOpacity>
      </View>

      {/* Controles de filtro */}
      <View style={styles.controls}>
        {/* Seletor de raio */}
        <View style={styles.controlGroup}>
          <Text style={styles.controlLabel}>Raio de busca:</Text>
          <View style={styles.radiusButtons}>
            {searchRadiusOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.radiusButton,
                  selectedRadius === option.value && styles.radiusButtonActive,
                ]}
                onPress={() => setSelectedRadius(option.value)}
              >
                <Text
                  style={[
                    styles.radiusButtonText,
                    selectedRadius === option.value &&
                      styles.radiusButtonTextActive,
                  ]}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Seletor de categoria */}
        <View style={styles.controlGroup}>
          <Text style={styles.controlLabel}>Categoria:</Text>
          <View style={styles.categoryButtons}>
            {categories.slice(0, 4).map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  selectedCategory === category.id &&
                    styles.categoryButtonActive,
                ]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Text
                  style={[
                    styles.categoryButtonText,
                    selectedCategory === category.id &&
                      styles.categoryButtonTextActive,
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      {/* Mapa */}
      <View style={styles.mapContainer}>
        <MapView center={userLocation} zoom={12} style={styles.map}>
          {/* Marcador do usuário */}
          <View
            style={[
              styles.userMarker,
              {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: [{ translateX: -12 }, { translateY: -12 }],
              },
            ]}
          >
            <Ionicons name="person" size={16} color="white" />
          </View>

          {/* Marcadores dos eventos */}
          {filteredEvents.map((event) => (
            <EventMarker
              key={event.id}
              event={event}
              onPress={handleMarkerPress}
              isSelected={selectedEvent?.id === event.id}
              userLocation={userLocation}
            />
          ))}

          {/* Círculo de raio */}
          <View
            style={[
              styles.radiusCircle,
              {
                width: selectedRadius * 20,
                height: selectedRadius * 20,
                borderRadius: selectedRadius * 10,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: [
                  { translateX: -selectedRadius * 10 },
                  { translateY: -selectedRadius * 10 },
                ],
              },
            ]}
          />
        </MapView>
      </View>

      {/* Card do evento selecionado */}
      {selectedEvent && (
        <View style={styles.eventCard}>
          <View style={styles.eventCardHeader}>
            <View style={styles.eventIcon}>
              <Text style={styles.eventIconText}>{selectedEvent.image}</Text>
            </View>
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>{selectedEvent.title}</Text>
              <Text style={styles.eventLocation}>{selectedEvent.location}</Text>
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSelectedEvent(null)}
            >
              <Ionicons name="close" size={20} color="#64748b" />
            </TouchableOpacity>
          </View>

          <View style={styles.eventDetails}>
            <View style={styles.eventDetail}>
              <Ionicons name="calendar-outline" size={16} color="#64748b" />
              <Text style={styles.eventDetailText}>
                {new Date(selectedEvent.date).toLocaleDateString("pt-BR")} às{" "}
                {selectedEvent.time}
              </Text>
            </View>
            <View style={styles.eventDetail}>
              <Ionicons name="pricetag-outline" size={16} color="#64748b" />
              <Text style={styles.eventDetailText}>{selectedEvent.price}</Text>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    backgroundColor: "white",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1e293b",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 2,
  },
  controls: {
    backgroundColor: "white",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  controlGroup: {
    marginBottom: 16,
  },
  controlLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  radiusButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  radiusButton: {
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  radiusButtonActive: {
    backgroundColor: "#6366f1",
  },
  radiusButtonText: {
    fontSize: 12,
    color: "#64748b",
    fontWeight: "600",
  },
  radiusButtonTextActive: {
    color: "white",
  },
  categoryButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  categoryButton: {
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  categoryButtonActive: {
    backgroundColor: "#6366f1",
  },
  categoryButtonText: {
    fontSize: 12,
    color: "#64748b",
    fontWeight: "600",
  },
  categoryButtonTextActive: {
    color: "white",
  },
  mapContainer: {
    flex: 1,
    padding: 16,
  },
  map: {
    flex: 1,
    borderRadius: 12,
  },
  userMarker: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#6366f1",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  marker: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  markerText: {
    fontSize: 16,
  },
  markerPulse: {
    position: "absolute",
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(99, 102, 241, 0.3)",
    top: -8,
    left: -8,
  },
  radiusCircle: {
    borderWidth: 2,
    borderColor: "rgba(99, 102, 241, 0.3)",
    backgroundColor: "rgba(99, 102, 241, 0.1)",
  },
  eventCard: {
    backgroundColor: "white",
    margin: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  eventCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  eventIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f1f5f9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  eventIconText: {
    fontSize: 20,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1e293b",
  },
  eventLocation: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 2,
  },
  closeButton: {
    padding: 4,
  },
  eventDetails: {
    gap: 8,
  },
  eventDetail: {
    flexDirection: "row",
    alignItems: "center",
  },
  eventDetailText: {
    fontSize: 14,
    color: "#64748b",
    marginLeft: 8,
  },
  locationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f1f5f9",
    justifyContent: "center",
    alignItems: "center",
  },
  distanceLabel: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  distanceLabelText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#64748b",
  },
});
