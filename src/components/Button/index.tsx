import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Container, Title } from './styles';

interface buttonProps {
  title?: string,
  handleSubmit(): void,
  height: number,
  width: number,
  fontSize: number,
  icon?: string
}

export function Button({ title, handleSubmit, height, width, fontSize, icon }: buttonProps) {
  return (
    <Container onPress={handleSubmit} style={{ height: height, maxWidth: width }}>
      {title && (<Title style={{ fontSize: fontSize }}>{title}</Title>)}
      {icon && (<Icon name={icon} size={fontSize} color="#fff" />)}
    </Container>
  );
}