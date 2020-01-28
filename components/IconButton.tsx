import React from "react";
import Touchable from "./Touchable";
import Icon from "./Icon";

export default function IconButton(props) {
  return (
    <Touchable onPress={props.onPress} style={props.buttonStyle}>
      <Icon {...props} style={props.iconStyle} />
    </Touchable>
  );
}
