import React, { ReactNode } from 'react';
import { Container, Title } from './styles';

interface buttonProps {
  title: string,
  handleSubmit(): void,
}

export function Button({ title, handleSubmit }: buttonProps) {
  return (
    <Container onPress={handleSubmit}>
      <Title>{title}</Title>
    </Container>
  );
}