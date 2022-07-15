import React from 'react';
import { Button, Text } from 'react-native';
import { Container, Title } from './styles';

export function Home() {
    return (
        <Container>
            <Title>Bem vindo ao DoctorAppaa!</Title>
            <Text>Vamos agendar uma consulta?</Text>

            <Button title="Agendar" />
        </Container>
    );
}
