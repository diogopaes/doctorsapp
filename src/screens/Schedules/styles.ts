import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 39px;
  background-color: ${({ theme }) => theme.COLORS.white};
`;

export const Nav = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 0;
  padding-top: 30px;
  border-top-width: 1px;
  border-color: #F4F4F4;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.secundary};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const Logo = styled.Image`
  margin: 0 auto;
`;

export const Item = styled.View`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
`;

export const Section = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

export const SectionText = styled.Text`
  color: ${({ theme }) => theme.COLORS.secundary};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  margin-left: 10px;
`;
export const Id = styled.Text`
  color: #ccc;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: 10px;
`;