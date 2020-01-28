import React from "react";
import { View } from "react-native";

export default function Card(props) {
  return (
    <View
      style={[
        {
          margin: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          backgroundColor: "white",
          borderRadius: 6
        },
        props.style
      ]}
    >
      {props.children}
    </View>
  );
}
