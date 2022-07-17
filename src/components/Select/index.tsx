import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { Control, Controller, FieldValues, UseFormSetValue } from 'react-hook-form';

import { Container } from './styles';

interface inputProps {
  control: Control,
  setValue: UseFormSetValue<FieldValues>,
  rules?: any,
  name: string,
  placeholder: string
}

export function Select({ control, rules, name }: inputProps) {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <Container>
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
  );
}