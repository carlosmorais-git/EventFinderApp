import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import EventsScreen from "./src/screens/EventsScreen";
import MapScreen from "./src/screens/MapScreen";
import ChatScreen from "./src/screens/ChatScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import { Keyboard } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  const [tecladoAtivo, setTecladoAtivo] = useState(false);

  // Detecta quando o teclado é ativado e desativado
  useEffect(() => {
    const tecladoMostra = Keyboard.addListener("keyboardDidShow", () => {
      setTecladoAtivo(true);
    });

    const tecladoEsconde = Keyboard.addListener("keyboardDidHide", () => {
      setTecladoAtivo(false);
    });
    return () => {
      tecladoMostra.remove();
      tecladoEsconde.remove();
    };
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Eventos") {
              iconName = focused ? "calendar" : "calendar-outline";
            } else if (route.name === "Mapa") {
              iconName = focused ? "map" : "map-outline";
            } else if (route.name === "Chat") {
              iconName = focused ? "chatbubbles" : "chatbubbles-outline";
            } else if (route.name === "Perfil") {
              iconName = focused ? "person" : "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#6366f1",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "white",
            borderTopWidth: 1,
            borderTopColor: "#e5e7eb",
            paddingBottom: 5,
            paddingTop: 5,
            height: tecladoAtivo ? 400 : 120,
          },
          headerStyle: {
            backgroundColor: "#6366f1",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      >
        <Tab.Screen
          name="Eventos"
          component={EventsScreen}
          options={{
            title: "Eventos por Região",
          }}
        />
        <Tab.Screen
          name="Mapa"
          component={MapScreen}
          options={{
            title: "Mapa de Eventos",
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            title: "Chat de Eventos",
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            title: "Meu Perfil",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
