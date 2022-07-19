import React, { useState } from 'react';
import DateTimePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Control, Controller } from 'react-hook-form';

import { Button, Container, Error, Text } from './styles';

interface inputProps {
  control: Control,
  rules?: any,
  name: string,
  errors: string | any,
}

export function DatePicker({ control, rules, name, errors }: inputProps) {
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
    <>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, value = date } }) => (
          <Container>
            <Button onPress={() => setOpen(true)}>
              <Icon name="calendar" size={16} color="#2222" />
              <Text>{filterDay()}</Text>
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
      {errors &&
        <Error>{errors}</Error>
      }
    </>
  );
}