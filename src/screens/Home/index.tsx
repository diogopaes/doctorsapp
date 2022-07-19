import React from 'react';
import { Container, ImageLogo, TextGroup, Title } from './styles';

import logo from '../../assets/img/logo.png';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const navigation = useNavigation();

    function handleSubmit() {
        navigation.navigate('Schedules');
    }

    return (
        <Container>
            <ImageLogo source={logo} />

            <TextGroup>
                <Title>Bem vindo,</Title>
                <Title>Vamos agendar uma consulta?</Title>
            </TextGroup>

            <Button title='Minhas Consultas' handleSubmit={handleSubmit} width={221} height={65} fontSize={16} />
        </Container>
    );
}
