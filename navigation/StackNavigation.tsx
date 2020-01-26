import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import PokemonListScreen from "../screens/PokemonListScreen";

export default createStackNavigator({
  HomeScreen: HomeScreen,
  SearchScreen: SearchScreen,
  PokemonListScreen: PokemonListScreen
});
