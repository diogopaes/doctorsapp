import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '../../components/Button';
import { DatePicker } from '../../components/DatePicker';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';

import { Container, Text, Form } from './styles';

export function CreateScheduling() {

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

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Header title='Agendar' />
      <Form>
        <Text>Selecione a especialidade, data e horário.</Text>
        <Select control={control} name='specialties' placeholder="Especialidade" setValue={setValue} errors={errors?.specialties?.message} />
        <DatePicker control={control} name="dateTime" errors={errors?.dateTime?.message} />

        <Text>Suas Informações ou do paciente.</Text>
        <Input control={control} name='name' placeholder='Nome Completo' errors={errors?.name?.message} />
        <Input control={control} name='cpf' placeholder='CPF' errors={errors?.cpf?.message} />
        <Input control={control} name='birthDate' placeholder='Data de Nascimento' errors={errors?.birthDate?.message} />
        <Input control={control} name='phone' placeholder='Telefone' errors={errors?.phone?.message} />

        <Button title='Agendar' handleSubmit={handleSubmit(onSubmit)} height={65} fontSize={16} />
      </Form>

    </Container>
  );
}