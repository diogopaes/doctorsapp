import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Toast from 'react-native-toast-message';

import { Button } from '../../components/Button';
import { DatePicker } from '../../components/DatePicker';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';

import { Container, Text, Form } from './styles';
import { useNavigation } from '@react-navigation/native';
import { SchedulesContext } from '../../hooks/Schedules';

export function CreateScheduling() {
  const { addScheduling } = useContext(SchedulesContext)

  const schema = yup.object().shape({
    specialties: yup.string().required('Especialidade é Obrigatório.'),
    dateTime: yup.string().required('Data e Hora é Obrigatório.'),
    name: yup.string().required('Nome é Obrigatório.'),
    cpf: yup.string().required('CPF é Obrigatório.'),
    birthDate: yup.string().required('Data de Nascimento é Obrigatório.'),
    phone: yup.string().required('Telefone é Obrigatório.'),
  });

  const { control, setValue, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const navigation = useNavigation();

  async function onSubmit(data) {
    const form = JSON.stringify(data);
    await fetch('https://webhook.site/4c7222b6-b2de-402b-be6d-42e87f13bda7/schedules', {
      method: 'POST',
      body: form,
    }).then(function (response) {
      Toast.show({
        type: 'success',
        text1: 'Agendando com sucesso 👋'
      });
      navigation.navigate('Schedules');
      addScheduling({ ...data, id: response._bodyInit._data.blobId });
    }).catch(function (err) {
      Toast.show({
        type: 'error',
        text1: 'Algo deu errado :('
      });
    });
  }

  return (
    <Container>
      <Header title='Agendamento' />
      <Form>
        <Text>Selecione a especialidade, data e horário.</Text>
        <Select control={control} name='specialties' placeholder="Especialidade" setValue={setValue} errors={errors?.specialties?.message} />
        <DatePicker control={control} name="dateTime" errors={errors?.dateTime?.message} />

        <Text>Suas Informações ou do paciente.</Text>
        <Input control={control} name='name' placeholder='Nome Completo' errors={errors?.name?.message} icon='user' />
        <Input control={control} name='cpf' placeholder='CPF' errors={errors?.cpf?.message} icon='file-text' />
        <Input control={control} name='birthDate' placeholder='Data de Nascimento' errors={errors?.birthDate?.message} icon='calendar' />
        <Input control={control} name='phone' placeholder='Telefone' errors={errors?.phone?.message} icon='smartphone' />

        <Button title='Agendar' handleSubmit={handleSubmit(onSubmit)} height={65} fontSize={16} />
      </Form>

    </Container>
  );
}