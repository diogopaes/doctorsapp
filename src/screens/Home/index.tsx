import React from 'react';
import { Container, ImageLogo, TextGroup, Title } from './styles';

import logo from '../../assets/img/logo.png';
import { Button } from '../../components/Button';

export function Home() {

    function handleSubmit() {
        console.log('Agenda')
    }

    return (
        <Container>
            <ImageLogo source={logo} />

            <TextGroup>
                <Title>Bem vindo,</Title>
                <Title>Vamos agendar uma consulta?</Title>
            </TextGroup>

            <Button title='Agendar Consulta' handleSubmit={handleSubmit} width={221} height={65} fontSize={16} />
        </Container>
    );
}
