import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import SpringScreen from "./screens/SpringScreen";
import SequenceScreen from "./screens/SequenceScreen";
import ParallelScreen from "./screens/ParallelScreen";

const bottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <bottomTab.Navigator>
        <bottomTab.Screen name="Spring" component={SpringScreen} />
        <bottomTab.Screen name="Sequence" component={SequenceScreen} />
        <bottomTab.Screen name="Paralle" component={ParallelScreen} />
      </bottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
