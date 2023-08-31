import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginView from "./src/LoginView";
import ListView from "./src/ListView";

export default function App() {
  const [isLoginView, setIsLoginView] = React.useState(true);

  return isLoginView ? (
    <LoginView setIsLoginView={setIsLoginView} />
  ) : (
    <ListView setIsLoginView={setIsLoginView} />
  );
}
