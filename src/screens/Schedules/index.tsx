import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { SchedulesContext } from '../../hooks/Schedules';
import { FlatList, SafeAreaView } from 'react-native';

import { Container, Logo, Nav, Text, Item, Section, SectionText, Id } from './styles';

import logo from '../../assets/img/logo.png';

export function Schedules() {
  const { schedules } = useContext(SchedulesContext);
  const navigation = useNavigation();

  function handleSubmit() {
    navigation.navigate('CreateScheduling')
  }

  function renderItem({ item }) {
    const date = format(new Date(item.dateTime), "'Dia' dd 'de' MMMM', às ' HH:mm'h'", { locale: ptBR });
    return (
      <Item>
        <Id>#{item.id}</Id>
        <Section>
          <Icon name='user' style={{ fontSize: 18 }} color='#ccc' />
          <SectionText>{item.name}</SectionText>
        </Section>
        <Section>
          <Icon name='calendar' style={{ fontSize: 18 }} color='#ccc' />
          <SectionText>{date}</SectionText>
        </Section>
      </Item>
    )
  };

  return (
    <Container>
      <Logo source={logo} />
      <Nav>
        <Text>Suas Consultas</Text>
        <Button title='Agendar' handleSubmit={handleSubmit} height={26} width={88.4} fontSize={12.2} />
      </Nav>
      <SafeAreaView>
        <FlatList
          data={schedules}
          renderItem={renderItem}
          ListEmptyComponent={() => <Text style={{ textAlign: 'center', color: '#ccc' }}>Ainda não tem consulta.</Text>}
        />
      </SafeAreaView>
    </Container>
  );
}