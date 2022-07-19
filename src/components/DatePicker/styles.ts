import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 15px;
  border-width: 1px;
  border-color: #ccc;
  margin: 10px 0;
  padding: 15px;
  height: 60px;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.secundary};
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.secundary};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.secundary};
  padding-left: 10px;
`;

export const Error = styled.Text`
  color: #fa4c4c;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
`;
