import React from "react";
import Touchable from "./Touchable";

export default function Card(props) {
  return (
    <Touchable
      onPress={props.onPress}
      style={[
        {
          margin: 12,
          overflow: "hidden",
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
    </Touchable>
  );
}
