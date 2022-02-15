import React from 'react';
import { ActivityIndicator } from 'react-native';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

interface Props extends BorderlessButtonProps {
  title: string;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
}
export default function Button({
  title,
  color,
  enabled = true,
  loading = false,
  ...rest
}: Props) {
  const theme = useTheme();
  return (
    <Container
      color={color ?? theme.colors.main}
      enabled={enabled && !loading}
      style={{
        opacity: enabled && !loading ? 1 : 0.5,
      }}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
