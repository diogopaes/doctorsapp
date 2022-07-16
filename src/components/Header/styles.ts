import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.secundary};
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
`;
