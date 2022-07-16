import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 10px;
  border-width: 1px;
  border-color: #ccc;
  margin: 10px 0;
  padding: 0;
  color: ${({ theme }) => theme.COLORS.secundary};
`;
