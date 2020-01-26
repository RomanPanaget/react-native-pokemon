import { createSwitchNavigator, createAppContainer } from "react-navigation";
import DrawerNavigator from "./DrawerNavigation";
import LoginScreen from "../screens/LoginScreen";
import { createStackNavigator } from "react-navigation-stack";

export default createAppContainer(
  createSwitchNavigator(
    {
      LoginScreen: createStackNavigator({
        LoginScreen: LoginScreen
      }),
      DrawerScreen: DrawerNavigator
    },
    { initialRouteName: "LoginScreen" }
  )
);
