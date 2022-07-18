import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { Control, Controller, FieldValues, UseFormSetValue } from 'react-hook-form';

import { Container, Error } from './styles';

interface inputProps {
  control: Control,
  setValue: UseFormSetValue<FieldValues>,
  rules?: any,
  name: string,
  placeholder: string,
  errors?: string | any
}

export function Select({ control, rules, name, errors }: inputProps) {
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <Container style={errors ? { borderColor: '#fa4c4c' } : {}}>
            <Picker
              selectedValue={value}
              onValueChange={(value) => {
                onChange(value);
              }}
              dropdownIconColor="#726868"
              style={{ color: '#726868' }}
            >
              <Picker.Item style={{ fontSize: 14 }} label="Selecione a Especialiade" value="" />
              <Picker.Item style={{ fontSize: 14 }} label="Clínico Geral" value="clinica" />
              <Picker.Item style={{ fontSize: 14 }} label="Cardiologista" value="cardiologista" />
            </Picker>
          </Container>
        )}
        name={name}
      />
      {errors &&
        <Error>{errors}</Error>
      }
    </>
  );
}