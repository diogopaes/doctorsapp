import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { DatePicker } from '../../components/DatePicker';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';

import { Container, Text, Form } from './styles';

export function CreateScheduling() {
  const { control, setValue, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Header title='Agendar' />
      <Form>
        <Text>Selecione a especialidade, data e horário.</Text>
        <Select control={control} name='specialties' placeholder="Especialidade" setValue={setValue} />
        <DatePicker control={control} name="dateTime" />

        <Text>Suas Informações ou do paciente.</Text>
        <Input control={control} name='name' placeholder='Nome Completo' />
        <Input control={control} name='cpf' placeholder='CPF' />
        <Input control={control} name='birthDate' placeholder='Data de Nascimento' />
        <Input control={control} name='phone' placeholder='Telefone' />

        <Button title='Agendar' handleSubmit={handleSubmit(onSubmit)} height={65} fontSize={16} />
      </Form>

    </Container>
  );
}