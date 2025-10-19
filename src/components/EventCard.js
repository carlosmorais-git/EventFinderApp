import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function EventCard({ event }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
    });
  };

  const formatPrice = (price) => {
    return price === 'Gratuito' ? price : price;
  };

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      <View style={styles.cardHeader}>
        <View style={styles.eventIcon}>
          <Text style={styles.iconText}>{event.image}</Text>
        </View>
        <View style={styles.eventInfo}>
          <Text style={styles.eventTitle} numberOfLines={2}>
            {event.title}
          </Text>
          <Text style={styles.eventDescription} numberOfLines={2}>
            {event.description}
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={[
            styles.price,
            event.price === 'Gratuito' && styles.freePrice
          ]}>
            {formatPrice(event.price)}
          </Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <View style={styles.detailRow}>
          <Ionicons name="calendar-outline" size={16} color="#64748b" />
          <Text style={styles.detailText}>
            {formatDate(event.date)} às {event.time}
          </Text>
        </View>
        
        <View style={styles.detailRow}>
          <Ionicons name="location-outline" size={16} color="#64748b" />
          <Text style={styles.detailText} numberOfLines={1}>
            {event.location}
          </Text>
        </View>
      </View>

      <View style={styles.cardFooter}>
        <View style={styles.attendeesContainer}>
          <Ionicons name="people-outline" size={16} color="#64748b" />
          <Text style={styles.attendeesText}>
            {event.attendees} interessados
          </Text>
        </View>
        
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#fbbf24" />
          <Text style={styles.ratingText}>{event.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  eventIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 24,
  },
  eventInfo: {
    flex: 1,
    marginRight: 8,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 4,
  },
  eventDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  priceContainer: {
    justifyContent: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#6366f1',
  },
  freePrice: {
    color: '#10b981',
  },
  cardBody: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  detailText: {
    fontSize: 14,
    color: '#64748b',
    marginLeft: 8,
    flex: 1,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  attendeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  attendeesText: {
    fontSize: 12,
    color: '#64748b',
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#64748b',
    marginLeft: 4,
    fontWeight: '600',
  },
});

