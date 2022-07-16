import React from 'react';
import { FlatList } from 'react-native';

import { Button } from '../../components/Button';

import { Container, Logo, Nav, Text } from './styles';

import logo from '../../assets/img/logo.png';
import { useNavigation } from '@react-navigation/native';

export function Schedules() {
  const navigation = useNavigation();

  function handleSubmit() {
    navigation.navigate('CreateScheduling')
  }

  return (
    <Container>
      <Logo source={logo} />
      <Nav>
        <Text>Seus Agendamentos</Text>
        <Button title='Agendar' handleSubmit={handleSubmit} height={26} width={88.4} fontSize={12.2} />
      </Nav>
      {/* <FlatList data={} renderItem={} /> */}
    </Container>
  );
}