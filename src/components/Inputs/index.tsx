import React from "react";
import { TextInputProps } from "react-native";
import { SmallInputStyled, LargeInputStyled } from "./styles";

type Props = TextInputProps & {
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
};

export const SmallInput: React.FC<Props> = ({
  value,
  onChangeText,
  placeholder,
  ...props
}) => {
  return (
    <SmallInputStyled
      placeholder={placeholder}
      keyboardType="default"
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  );
};

export const LargeInput: React.FC<Props> = ({
  value,
  onChangeText,
  placeholder,
  ...props
}) => {
  return (
    <LargeInputStyled
      placeholder={placeholder}
      keyboardType="default"
      value={value}
      onChangeText={onChangeText}
      {...props}
      // multiline={true}
      // textBreakStrategy="highQuality"
    />
  );
};
