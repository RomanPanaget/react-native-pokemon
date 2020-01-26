import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function PokemonListScreen(props) {
  return (
    <View>
      <Text onPress={() => props.navigation.navigate("PokemonScreen")}>
        Go to Pokemon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
