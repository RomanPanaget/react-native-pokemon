import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { Pokemon } from "../interfaces/pokemon.interface";
import { getPokemons } from "../utils/utils";
import PokemonCard from "../components/PokemonCard";

export default function PokemonListScreen({ navigation }) {
  const [pokemons, setPokemons] = useState(null);
  useEffect(() => {
    getPokemons(1, 9)
      .then(res => setPokemons(res.map(r => r.data)))
      .catch(err => console.log(err));
  }, []);
  return (
    <FlatList<Pokemon>
      data={pokemons}
      keyExtractor={(item: Pokemon) => String(item.id)}
      renderItem={({ item }) => (
        <PokemonCard
          onPress={() =>
            navigation.navigate("PokemonScreen", { pokemon: item })
          }
          pokemon={item}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});
