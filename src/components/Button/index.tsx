import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

interface Props extends BorderlessButtonProps {
  title: string;
  color?: string;
  enabled?: boolean;
}
export default function Button({
  title,
  color,
  enabled = true,
  ...rest
}: Props) {
  const theme = useTheme();
  return (
    <Container
      color={color ?? theme.colors.main}
      enabled={enabled}
      style={{
        opacity: enabled ? 1 : 0.5,
      }}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
}
