import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatMessage({ message, onPress }) {
  const getMessageIcon = (type) => {
    switch (type) {
      case 'event':
        return { name: 'calendar', color: '#6366f1' };
      case 'location':
        return { name: 'location', color: '#10b981' };
      case 'user':
        return { name: 'person', color: '#64748b' };
      case 'bot':
        return { name: 'chatbubble-ellipses', color: '#f59e0b' };
      default:
        return { name: 'information-circle', color: '#64748b' };
    }
  };

  const icon = getMessageIcon(message.type);
  const isUserMessage = message.type === 'user';

  return (
    <TouchableOpacity
      style={[
        styles.container,
        isUserMessage && styles.userMessageContainer
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[
        styles.messageCard,
        isUserMessage && styles.userMessageCard
      ]}>
        <View style={styles.messageHeader}>
          <View style={styles.iconContainer}>
            <Ionicons 
              name={icon.name} 
              size={20} 
              color={icon.color} 
            />
          </View>
          <View style={styles.messageInfo}>
            <Text style={[
              styles.messageTitle,
              isUserMessage && styles.userMessageTitle
            ]}>
              {message.title}
            </Text>
            <Text style={[
              styles.messageTime,
              isUserMessage && styles.userMessageTime
            ]}>
              {message.time}
            </Text>
          </View>
          {message.unread && !isUserMessage && (
            <View style={styles.unreadDot} />
          )}
        </View>
        
        <Text style={[
          styles.messageText,
          isUserMessage && styles.userMessageText
        ]}>
          {message.message}
        </Text>
        
        {!isUserMessage && (
          <View style={styles.messageActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="heart-outline" size={16} color="#64748b" />
              <Text style={styles.actionText}>Curtir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="share-outline" size={16} color="#64748b" />
              <Text style={styles.actionText}>Compartilhar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  userMessageContainer: {
    alignItems: 'flex-end',
  },
  messageCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    maxWidth: '85%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  userMessageCard: {
    backgroundColor: '#6366f1',
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  messageInfo: {
    flex: 1,
  },
  messageTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1e293b',
  },
  userMessageTitle: {
    color: 'white',
  },
  messageTime: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  userMessageTime: {
    color: '#e2e8f0',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ef4444',
  },
  messageText: {
    fontSize: 15,
    color: '#374151',
    lineHeight: 22,
  },
  userMessageText: {
    color: 'white',
  },
  messageActions: {
    flexDirection: 'row',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  actionText: {
    fontSize: 12,
    color: '#64748b',
    marginLeft: 4,
  },
});

