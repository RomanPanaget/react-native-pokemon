import React from "react";
import Animated from "react-native-reanimated";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import DrawerRow from "./DrawerRow";
import { gray } from "../shared/colors";
import IconButton from "./IconButton";

export default function DrawerContent(props) {
  const rotation = Animated.interpolate(props.drawerOpenProgress, {
    inputRange: [0, 1],
    outputRange: [0, 2 * Math.PI]
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Animated.Image
          style={{ width: 80, height: 80, transform: [{ rotate: rotation }] }}
          source={require("../assets/pokeball.png")}
        />
      </View>
      <View style={{ flex: 2, marginHorizontal: 16 }}>
        <DrawerRow
          onPress={() => props.navigation.navigate("HomeScreen")}
          iconName={"ios-home"}
          title={"Home"}
        />
        <DrawerRow
          onPress={() => props.navigation.navigate("PokemonListScreen")}
          iconName={"pokeball"}
          title={"Pokemons"}
        />
        <DrawerRow
          onPress={() => props.navigation.navigate("SearchScreen")}
          iconName={"ios-search"}
          title={"Search"}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <IconButton
          onPress={() => props.navigation.navigate("LoginScreen")}
          name={"ios-power"}
          size={24}
          color={gray}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
