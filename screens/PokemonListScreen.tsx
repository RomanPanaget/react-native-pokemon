import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Pokemon } from "../interfaces/pokemon.interface";
import { getPokemons } from "../utils/utils";
import Card from "../components/Card";
import PokemonCard from "../components/PokemonCard";

export default function PokemonListScreen(props) {
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
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
    />
  );
}

const styles = StyleSheet.create({});
