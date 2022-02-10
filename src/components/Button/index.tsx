import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

interface Props extends BorderlessButtonProps {
  title: string;
  color?: string;
}
export default function Button({ title, color, ...rest }: Props) {
  const theme = useTheme();
  return (
    <Container color={color ?? theme.colors.main} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
