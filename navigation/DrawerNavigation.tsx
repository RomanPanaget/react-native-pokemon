import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import DrawerContent from "../components/DrawerContent";
import HomeScreen from "../screens/HomeScreen";
import PokemonScreen from "../screens/PokemonScreen";
import PokemonListScreen from "../screens/PokemonListScreen";
import SearchScreen from "../screens/SearchScreen";

const Pokemon = {
  screen: PokemonScreen,
  navigationOptions: { title: "Pokemon" }
};

export default createDrawerNavigator(
  {
    HomeScreen: createStackNavigator({
      HomeScreen: HomeScreen
    }),
    PokemonListScreen: createStackNavigator({
      PokemonListScreen: {
        screen: PokemonListScreen,
        navigationOptions: { title: "Pokemons" }
      },
      PokemonScreen: Pokemon
    }),
    SearchScreen: createStackNavigator({
      SearchScreen: {
        screen: SearchScreen,
        navigationOptions: { title: "Search" }
      },
      PokemonScreen: Pokemon
    })
  },
  {
    drawerBackgroundColor: "white",
    drawerPosition: "left",
    drawerType: "front",
    contentComponent: DrawerContent
  }
);
