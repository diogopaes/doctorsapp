import React, { useState } from 'react';
import DateTimePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Control, Controller } from 'react-hook-form';

import { Button, Container, Text } from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface inputProps {
  control: Control,
  rules?: any,
  name: string,
}

export function DatePicker({ control, rules, name }: inputProps) {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  function filterDay() {
    const actualDate = new Date();

    if (date.getDate() === actualDate.getDate()) {
      return 'Selecione uma data e hora'
    }

    if (date.getDate() < actualDate.getDate()) {
      return 'Selecione uma data posterior'
    }

    return format(date, "'Dia' dd 'de' MMMM', às ' HH:mm'h'", { locale: ptBR })
  }

  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, value = date } }) => (
        <Container>
          <Button onPress={() => setOpen(true)}>
            <Text>{filterDay()}</Text>
            <Icon name="calendar" size={16} color="#2222" />
          </Button>
          <DateTimePicker
            modal
            open={open}
            date={date}
            textColor='#fff'
            onConfirm={(value) => {
              onChange(value);
              setOpen(false)
              setDate(value)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />
        </Container>
      )}
      name={name}
    />
  );
}