import React from 'react';

import { Container, Logo, Nav, Text } from './styles';

import logo from '../../assets/img/logo.png';
import { Button } from '../../components/Button';

export function Schedules() {

  function handleSubmit() {
    console.log('Schedules')
  }

  return (
    <Container>
      <Logo source={logo} />
      <Nav>
        <Text>Seus Agendamentos</Text>
        <Button title='Agendar' handleSubmit={handleSubmit} height={26} width={88.4} fontSize={12.2} />
      </Nav>
    </Container>
  );
}