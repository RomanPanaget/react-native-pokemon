import { createDrawerNavigator } from "react-navigation-drawer";
import DrawerContent from "../components/DrawerContent";
import StackNavigator from "./StackNavigation";

createDrawerNavigator(
  {
    HomeScreen: StackNavigator
  },
  {
    drawerBackgroundColor: "white",
    drawerPosition: "left",
    drawerType: "back",
    contentComponent: DrawerContent
  }
);
