import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends BorderlessButtonProps {
  title: string;
  color?: string;
}
export default function Button({ title, color, ...rest }: Props) {
  return (
    <Container color={color} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
