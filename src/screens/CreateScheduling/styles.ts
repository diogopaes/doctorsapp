import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.white};
  padding: 38px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.secundary};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Form = styled.ScrollView``;