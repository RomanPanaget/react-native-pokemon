import React from "react";
import { Image, Text } from "react-native";
import Card from "./Card";

export default function PokemonCard({ pokemon }) {
  return (
    <Card>
      <Text>{pokemon.name}</Text>
      <Image
        source={{
          uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
        }}
        style={{ width: "100%", height: 200, resizeMode: "contain" }}
      />
    </Card>
  );
}
