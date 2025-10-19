import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { events, regions, categories } from '../data/eventsData';
import EventCard from '../components/EventCard';
import FilterModal from '../components/FilterModal';

export default function EventsScreen() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const regionMatch = selectedRegion === 'all' || event.region === selectedRegion;
      const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory;
      return regionMatch && categoryMatch;
    });
  }, [selectedRegion, selectedCategory]);

  const getRegionName = (regionId) => {
    const region = regions.find(r => r.id === regionId);
    return region ? region.name : 'Todas as Regiões';
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : 'Todas as Categorias';
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header com filtros */}
      <View style={styles.header}>
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setShowFilters(true)}
          >
            <Ionicons name="filter" size={20} color="#6366f1" />
            <Text style={styles.filterButtonText}>Filtros</Text>
          </TouchableOpacity>
          
          <View style={styles.activeFilters}>
            <Text style={styles.activeFilterText}>
              {getRegionName(selectedRegion)}
            </Text>
            {selectedCategory !== 'all' && (
              <Text style={styles.activeFilterText}>
                • {getCategoryName(selectedCategory)}
              </Text>
            )}
          </View>
        </View>
        
        <Text style={styles.resultsCount}>
          {filteredEvents.length} eventos encontrados
        </Text>
      </View>

      {/* Lista de eventos */}
      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <EventCard event={item} />}
        contentContainerStyle={styles.eventsList}
        showsVerticalScrollIndicator={false}
      />

      {/* Modal de filtros */}
      <FilterModal
        visible={showFilters}
        onClose={() => setShowFilters(false)}
        selectedRegion={selectedRegion}
        selectedCategory={selectedCategory}
        onRegionChange={setSelectedRegion}
        onCategoryChange={setSelectedCategory}
        regions={regions}
        categories={categories}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  filterButtonText: {
    color: '#6366f1',
    fontWeight: '600',
    marginLeft: 4,
  },
  activeFilters: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  activeFilterText: {
    color: '#64748b',
    fontSize: 14,
    marginRight: 8,
  },
  resultsCount: {
    color: '#64748b',
    fontSize: 14,
    fontWeight: '500',
  },
  eventsList: {
    padding: 16,
  },
});

