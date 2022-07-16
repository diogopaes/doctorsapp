import React from 'react';
import { Control, Controller } from 'react-hook-form';

import { Container } from './styles';

interface inputProps {
  control: Control,
  rules?: any,
  name: string,
  placeholder: string,
}

export function Input({ control, rules, name, placeholder, ...rest }: inputProps) {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <Container
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#ccc"
          {...rest} />
      )}
      name={name}
    />
  );
}