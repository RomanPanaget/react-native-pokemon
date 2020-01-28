import React, { useState } from "react";
import IconButton from "./IconButton";

export default function Checkbox(props) {
  const [isSelected, setIsSelected] = useState(props.selected);
  return (
    <IconButton
      iconStyle={props.iconStyle}
      buttonStyle={props.buttonStyle}
      onPress={() => {
        props.onToggled(!isSelected);
        setIsSelected(s => !s);
      }}
      name={isSelected ? props.selectedIcon : props.unselectedIcon}
      size={props.size}
      color={props.color}
    />
  );
}
