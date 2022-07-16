import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from '../Button';

import { Container, Text } from './styles';

interface headerProps {
  title: string
}

export function Header({ title }: headerProps) {
  const navigation = useNavigation();

  function handleSubmit() {
    navigation.goBack();
  }
  return (
    <Container>
      <Button icon="chevron-left" handleSubmit={handleSubmit} width={45} height={45} fontSize={30} />
      <Text>{title}</Text>
    </Container>
  );
}