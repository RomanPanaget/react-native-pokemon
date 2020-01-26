import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Icon(props) {
  const IconType = props.Component || Ionicons;
  return <IconType {...props} />;
}
