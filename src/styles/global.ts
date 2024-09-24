import styled from "styled-components/native";

import { fontFamily } from "@/styles/fontFamily";
import { colors } from "@/styles/colors";

export const H1Text = styled.Text`
  font-size: 48px;
  font-family: ${fontFamily.firaSansBd};
  color: ${colors.white};
`;

export const H2Text = styled.Text`
  font-size: 24px;
  font-family: ${fontFamily.interMd};
  color: ${colors.white};
`;

export const H2DarkText = styled.Text`
  font-size: 24px;
  font-family: ${fontFamily.interMd};
  color: ${colors.gray[700]};
`;

export const TitleText = styled.Text`
  font-size: 20px;
  font-family: ${fontFamily.interBd};
  color: ${colors.gray[700]};
`;

export const DescriptionText = styled.Text`
  font-size: 14px;
  font-family: ${fontFamily.interReg};
  color: ${colors.gray[700]};
`;

export const PlaceholderText = styled.Text`
  font-size: 18px;
  font-family: ${fontFamily.interReg};
  color: ${colors.gray[500]};
`;

export const NotificationText = styled.Text`
  font-size: 26px;
  font-family: ${fontFamily.interSb};
  color: ${colors.gray[700]};
  text-align: center;
`;