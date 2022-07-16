import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.white};
  padding: 38px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.secundary};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const Form = styled.View``;