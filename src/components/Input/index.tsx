import React from 'react';
import { Control, Controller } from 'react-hook-form';

import { Container, Error } from './styles';

interface inputProps {
  control: Control,
  rules?: any,
  name: string,
  placeholder: string,
  errors?: string | any,
}

export function Input({ control, rules, name, placeholder, errors, ...rest }: inputProps) {
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <Container
            style={errors ? { borderColor: '#fa4c4c' } : {}}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#ccc"
            {...rest}
          />
        )}
        name={name}
      />
      {errors &&
        <Error>{errors}</Error>
      }
    </>
  );
}