import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const profileStats = [
    { label: 'Eventos Participados', value: '12' },
    { label: 'Locais Descobertos', value: '8' },
    { label: 'Amigos Conectados', value: '24' },
  ];

  const menuItems = [
    { icon: 'heart', label: 'Eventos Favoritos', color: '#ef4444' },
    { icon: 'bookmark', label: 'Eventos Salvos', color: '#6366f1' },
    { icon: 'location', label: 'Locais Visitados', color: '#10b981' },
    { icon: 'people', label: 'Amigos', color: '#f59e0b' },
    { icon: 'notifications', label: 'Notificações', color: '#8b5cf6' },
    { icon: 'settings', label: 'Configurações', color: '#64748b' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header do Perfil */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JD</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="camera" size={16} color="white" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.userName}>João da Silva</Text>
          <Text style={styles.userEmail}>joao.silva@email.com</Text>
          
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>

        {/* Estatísticas */}
        <View style={styles.statsContainer}>
          {profileStats.map((stat, index) => (
            <View key={index} style={styles.statItem}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Menu de Opções */}
        <View style={styles.menuContainer}>
          <Text style={styles.menuTitle}>Menu</Text>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={[styles.menuIcon, { backgroundColor: `${item.color}20` }]}>
                <Ionicons name={item.icon} size={20} color={item.color} />
              </View>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Seção de Preferências */}
        <View style={styles.preferencesContainer}>
          <Text style={styles.menuTitle}>Preferências de Eventos</Text>
          
          <View style={styles.preferenceItem}>
            <Text style={styles.preferenceLabel}>Região Favorita</Text>
            <Text style={styles.preferenceValue}>Zona Sul</Text>
          </View>
          
          <View style={styles.preferenceItem}>
            <Text style={styles.preferenceLabel}>Categorias de Interesse</Text>
            <View style={styles.tagsContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Música</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Arte</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Gastronomia</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Botão de Logout */}
        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={20} color="#ef4444" />
          <Text style={styles.logoutText}>Sair da Conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  profileHeader: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#10b981',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
  },
  editProfileButton: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editProfileText: {
    color: '#6366f1',
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 8,
    paddingVertical: 20,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#6366f1',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  menuContainer: {
    backgroundColor: 'white',
    marginTop: 8,
    paddingVertical: 16,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
  },
  preferencesContainer: {
    backgroundColor: 'white',
    marginTop: 8,
    paddingVertical: 16,
  },
  preferenceItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  preferenceLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
    marginBottom: 8,
  },
  preferenceValue: {
    fontSize: 16,
    color: '#1e293b',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#6366f1',
    fontWeight: '600',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 8,
    marginBottom: 20,
    paddingVertical: 16,
  },
  logoutText: {
    fontSize: 16,
    color: '#ef4444',
    fontWeight: '600',
    marginLeft: 8,
  },
});

