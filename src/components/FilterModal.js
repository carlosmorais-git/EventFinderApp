import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FilterModal({
  visible,
  onClose,
  selectedRegion,
  selectedCategory,
  onRegionChange,
  onCategoryChange,
  regions,
  categories,
}) {
  const handleApplyFilters = () => {
    onClose();
  };

  const handleClearFilters = () => {
    onRegionChange('all');
    onCategoryChange('all');
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="#64748b" />
          </TouchableOpacity>
          <Text style={styles.title}>Filtros</Text>
          <TouchableOpacity onPress={handleClearFilters} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content}>
          {/* Filtro de Região */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Região</Text>
            <View style={styles.optionsContainer}>
              {regions.map((region) => (
                <TouchableOpacity
                  key={region.id}
                  style={[
                    styles.option,
                    selectedRegion === region.id && styles.selectedOption,
                  ]}
                  onPress={() => onRegionChange(region.id)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedRegion === region.id && styles.selectedOptionText,
                    ]}
                  >
                    {region.name}
                  </Text>
                  {selectedRegion === region.id && (
                    <Ionicons name="checkmark" size={20} color="#6366f1" />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Filtro de Categoria */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Categoria</Text>
            <View style={styles.optionsContainer}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  style={[
                    styles.option,
                    selectedCategory === category.id && styles.selectedOption,
                  ]}
                  onPress={() => onCategoryChange(category.id)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedCategory === category.id && styles.selectedOptionText,
                    ]}
                  >
                    {category.name}
                  </Text>
                  {selectedCategory === category.id && (
                    <Ionicons name="checkmark" size={20} color="#6366f1" />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.applyButton}
            onPress={handleApplyFilters}
          >
            <Text style={styles.applyButtonText}>Aplicar Filtros</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  closeButton: {
    padding: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
  },
  clearButton: {
    padding: 4,
  },
  clearButtonText: {
    color: '#6366f1',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 16,
  },
  optionsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  selectedOption: {
    backgroundColor: '#f1f5f9',
  },
  optionText: {
    fontSize: 16,
    color: '#64748b',
  },
  selectedOptionText: {
    color: '#6366f1',
    fontWeight: '600',
  },
  footer: {
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  applyButton: {
    backgroundColor: '#6366f1',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

