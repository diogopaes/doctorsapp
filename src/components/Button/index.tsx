import React from 'react';
import { Container, Title } from './styles';

interface buttonProps {
  title: string,
  handleSubmit(): void,
  height: number,
  width: number,
  fontSize: number
}

export function Button({ title, handleSubmit, height, width, fontSize }: buttonProps) {
  return (
    <Container onPress={handleSubmit} style={{ height: height, maxWidth: width }}>
      <Title style={{ fontSize: fontSize }}>{title}</Title>
    </Container>
  );
}