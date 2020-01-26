import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { accent, lightGray } from "../shared/colors";
import Touchable from "./Touchable";
import Icon from "./Icon";

export default function DrawerContent(props) {
  return (
    <Touchable
      onPress={props.onPress}
      style={{
        flexDirection: "row",
        width: "100%",
        height: 42,
        alignItems: "center",
        borderBottomColor: lightGray,
        borderBottomWidth: 1
      }}
    >
      <View
        style={{
          width: 30,
          alignItems: "center"
        }}
      >
        <Icon
          Component={
            props.iconName.startsWith("pokeball")
              ? MaterialCommunityIcons
              : Ionicons
          }
          name={props.iconName}
          size={24}
          color={accent}
        />
      </View>
      <Text
        style={{
          marginLeft: 12,
          letterSpacing: 1.2,
          fontSize: 18
        }}
      >
        {props.title}
      </Text>
    </Touchable>
  );
}

const styles = StyleSheet.create({});
