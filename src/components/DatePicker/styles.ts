import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 10px;
  border-width: 1px;
  border-color: #ccc;
  margin: 10px 0;
  padding: 15px;
  color: ${({ theme }) => theme.COLORS.secundary};
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.COLORS.secundary};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.secundary};
`;

export const Error = styled.Text`
  color: #fa4c4c;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
`;
