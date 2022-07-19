import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 15px;
  border-width: 1px;
  border-color: #ccc;
  height: 60px;
  align-items: center;
  padding-left: 15px;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const InputText = styled(TextInput)`
  color: ${({ theme }) => theme.COLORS.secundary};
  margin-left: 5px;
`;

export const Error = styled.Text`
  color: #fa4c4c;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
`;