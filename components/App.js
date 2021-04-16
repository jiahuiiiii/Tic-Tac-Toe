import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Header from "./Header";
import GameBoard from "./GameBoard";

export default class App extends Component {
  state = {
    gameStarted: true,
  };

  constructor() {
    super();
    this.state = { gameStarted: false };
  }

  startGame() {
    this.setState({ gameStarted: true });
  }

  render() {
    const { gameStarted } = this.state;
    return (
      <View style={styles.container}>
        <Header />
        {gameStarted ? (
          <GameBoard />
        ) : (
          <View>
            <Text style={styles.welcome}>Welcome to the game!</Text>
            <TouchableOpacity onPress={() => this.startGame()}>
              <Text style={styles.instructions}>Start</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    marginTop: 50,
  },
  instructions: {
    fontSize: 20,
    borderRadius: 20,
    backgroundColor: "lightblue",
    textAlign: "center",
    marginTop: 20,
    color: "black",
    marginBottom: 5,
  },
});
