import React from "react";
import Touchable from "./Touchable";
import Icon from "./Icon";
import { accent } from "../shared/colors";

export default function IconButton(props) {
  return (
    <Touchable onPress={props.onPress}>
      <Icon {...props} />
    </Touchable>
  );
}
