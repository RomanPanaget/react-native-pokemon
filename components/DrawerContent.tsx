import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-navigation";

export default function DrawerContent(props) {
  return (
    <SafeAreaView>
      <Text onPress={() => props.navigation.navigate("HomeScreen")}>
        Home Screen
      </Text>
      <Text onPress={() => props.navigation.navigate("PokemonListScreen")}>
        Pokemons Screen
      </Text>
      <Text onPress={() => props.navigation.navigate("SearchScreen")}>
        Search Screen
      </Text>
      <Text onPress={() => props.navigation.navigate("LoginScreen")}>
        Login Screen
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
