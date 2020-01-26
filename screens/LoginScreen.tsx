import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function LoginScreen(props) {
  return (
    <View>
      <Text onPress={() => props.navigation.navigate("DrawerScreen")}>
        Go to drawer
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
