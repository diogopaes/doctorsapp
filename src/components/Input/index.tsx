import React from 'react';
import { Control, Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Feather';

import { Container, InputText, Error } from './styles';

interface inputProps {
  control: Control,
  rules?: any,
  name: string,
  placeholder: string,
  errors?: string | any,
  icon: string,
}

export function Input({ control, rules, name, placeholder, errors, icon, ...rest }: inputProps) {
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <Container>
            <Icon name={icon} color='#ccc' style={{ fontSize: 16 }} />
            <InputText
              style={errors ? { borderColor: '#fa4c4c' } : {}}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              placeholderTextColor="#ccc"
              {...rest}
            />
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