import React from "react";
import { HeaderButton as HeaderButtonModel } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { gray } from "../shared/colors";

export default function HeaderButton(props) {
  return (
    <HeaderButtonModel
      {...props}
      IconComponent={Ionicons}
      iconSize={24}
      color={gray}
    />
  );
}
