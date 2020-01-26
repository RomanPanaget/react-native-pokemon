import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import DrawerContent from "../components/DrawerContent";
import HomeScreen from "../screens/HomeScreen";
import PokemonScreen from "../screens/PokemonScreen";
import PokemonListScreen from "../screens/PokemonListScreen";
import SearchScreen from "../screens/SearchScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const Pokemon = {
  screen: PokemonScreen,
  navigationOptions: { title: "Pokemon" }
};

const headerLeft = navigation => (
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item
      title={"drawer"}
      iconName={"ios-menu"}
      onPress={() => navigation.toggleDrawer()}
    />
  </HeaderButtons>
);

export default createDrawerNavigator(
  {
    HomeScreen: createStackNavigator({
      HomeScreen: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
          headerTitle: "Home",
          headerLeft: () => headerLeft(navigation)
        })
      }
    }),
    PokemonListScreen: createStackNavigator({
      PokemonListScreen: {
        screen: PokemonListScreen,
        navigationOptions: ({ navigation }) => ({
          headerTitle: "Pokemons",
          headerLeft: () => headerLeft(navigation)
        })
      },
      PokemonScreen: Pokemon
    }),
    SearchScreen: createStackNavigator({
      SearchScreen: {
        screen: SearchScreen,
        navigationOptions: ({ navigation }) => ({
          headerTitle: "Search",
          headerLeft: () => headerLeft(navigation)
        })
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
