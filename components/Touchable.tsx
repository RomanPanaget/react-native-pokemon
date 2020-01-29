import React from "react";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  View
} from "react-native";

export default function Touchable(props: any) {
  return Platform.OS === "android" ? (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View {...props}>{props.children}</View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      {props.children}
    </TouchableOpacity>
  );
}
