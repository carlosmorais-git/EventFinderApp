import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { chatMessages } from "../data/eventsData";
import ChatMessage from "../components/ChatMessage";

export default function ChatScreen() {
  const [messages, setMessages] = useState(chatMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        type: "user",
        title: "Você",
        message: newMessage.trim(),
        time: new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        unread: false,
      };

      setMessages([message, ...messages]);
      setNewMessage("");

      // Simular resposta automática
      setTimeout(() => {
        const autoReply = {
          id: messages.length + 2,
          type: "bot",
          title: "EventBot",
          message:
            "Obrigado pela sua mensagem! Estou procurando eventos e locais que correspondem ao seu interesse...",
          time: new Date().toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          unread: true,
        };
        setMessages((prev) => [autoReply, ...prev]);
      }, 1500);
    }
  };

  const markAsRead = (messageId) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, unread: false } : msg
      )
    );
  };

  const unreadCount = messages.filter((msg) => msg.unread).length;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerInfo}>
          <Text style={styles.headerTitle}>Chat de Eventos</Text>
          <Text style={styles.headerSubtitle}>
            Descubra eventos e locais únicos
          </Text>
        </View>
        {unreadCount > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{unreadCount}</Text>
          </View>
        )}
      </View>

      {/* Lista de mensagens */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ChatMessage message={item} onPress={() => markAsRead(item.id)} />
        )}
        contentContainerStyle={styles.messagesList}
        showsVerticalScrollIndicator={false}
        inverted
      />

      {/* Input de nova mensagem */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder="Pergunte sobre eventos ou locais..."
            value={newMessage}
            onChangeText={setNewMessage}
            multiline
            maxLength={500}
          />
          <TouchableOpacity
            style={[
              styles.sendButton,
              newMessage.trim() && styles.sendButtonActive,
            ]}
            onPress={handleSendMessage}
            disabled={!newMessage.trim()}
          >
            <Ionicons
              name="send"
              size={20}
              color={newMessage.trim() ? "white" : "#94a3b8"}
            />
          </TouchableOpacity>
        </View>
      </View>
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
  headerInfo: {
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
  unreadBadge: {
    backgroundColor: "#ef4444",
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  unreadText: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },
  messagesList: {
    padding: 16,
  },
  inputContainer: {
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    padding: 16,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#f1f5f9",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#1e293b",
    maxHeight: 100,
    paddingVertical: 8,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#e2e8f0",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  sendButtonActive: {
    backgroundColor: "#6366f1",
  },
});
