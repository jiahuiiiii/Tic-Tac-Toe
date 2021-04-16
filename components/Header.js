import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import React2 from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "skyblue",
    flexDirection: "row",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    margin: 10,
  },
});
