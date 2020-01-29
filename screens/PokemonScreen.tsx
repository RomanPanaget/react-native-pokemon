import React from "react";
import { StyleSheet, Image, Text, ScrollView, View } from "react-native";
import { Pokemon } from "../interfaces/pokemon.interface";
import { gray } from "../shared/colors";

export default function PokemonScreen({ navigation }) {
  const pokemon: Pokemon = navigation.getParam("pokemon");
  console.log(pokemon.abilities);
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text style={styles.id}>#{pokemon.id}</Text>
      <Image
        source={{
          uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
        }}
        style={styles.image}
      />
      <View style={styles.divider} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        {Object.keys(pokemon.sprites)
          .map(key => pokemon.sprites[key])
          .filter(sprite => sprite)
          .map((sprite, index) => (
            <Image key={index} source={{ uri: sprite }} style={styles.sprite} />
          ))}
      </View>
      <View style={styles.divider} />
      <View style={{ flexDirection: "row", width: "100%", marginTop: 16 }}>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Text style={{ marginVertical: 6 }}>Height</Text>
          <Text style={{ marginVertical: 6 }}>Weight</Text>
          {pokemon.abilities.map((_, index) => (
            <Text style={{ marginVertical: 6 }}>Ability {index + 1}</Text>
          ))}
        </View>
        <View
          style={{ width: 2, backgroundColor: gray, marginHorizontal: 16 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ marginVertical: 6 }}>{pokemon.height} feet</Text>
          <Text style={{ marginVertical: 6 }}>{pokemon.weight} pounds</Text>
          {pokemon.abilities.map((ability, index) => (
            <Text
              key={index}
              style={{ textTransform: "capitalize", marginVertical: 6 }}
            >
              {ability.ability.name}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

PokemonScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam("pokemon").name,
  headerTitleStyle: { textTransform: "capitalize" }
});

const styles = StyleSheet.create({
  id: {
    position: "absolute",
    fontSize: 50,
    fontWeight: "bold",
    padding: 16,
    color: "red",
    borderRadius: 26,
    overflow: "hidden"
  },
  image: {
    height: 400,
    resizeMode: "contain",
    margin: 16
  },
  sprite: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  },
  divider: { backgroundColor: "#FF000030", height: 2, marginHorizontal: 32 }
});
