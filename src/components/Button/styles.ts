import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 221px;
  height: 65px;
  background-color: ${({ theme }) => theme.COLORS.primary};
  border-radius: 40px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.white};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
`;