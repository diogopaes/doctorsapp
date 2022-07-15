import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.white};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.secundary};
`

export const TextGroup = styled.View`
  margin: 30px 0;
`

export const ImageLogo = styled.Image`
  width: 171px;
`;