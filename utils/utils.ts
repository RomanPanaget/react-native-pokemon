import axios from "axios";

axios.defaults.baseURL = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemon = (nameOrId: string | number) => {
  return axios.get(String(nameOrId).toLowerCase());
};

export const getPokemons = (start: number, amount: number) => {
  return axios.all([...Array(amount).keys()].map(id => getPokemon(start + id)));
};
