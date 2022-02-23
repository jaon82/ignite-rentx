import React from 'react';
import { StatusBar } from 'react-native';
import Button from '../../components/Button';
import theme from '../../global/styles/theme';

import { Footer, Container, Header, SubTitle, Title } from './styles';

export default function SignIn() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Title>Estamos{'\n'}quase</Title>
        <SubTitle>
          Faça seu login para começar{'\n'}uma experiência incrível
        </SubTitle>
      </Header>
      <Footer>
        <Button
          title="Login"
          onPress={() => {}}
          enabled={false}
          loading={false}
        />
        <Button
          title="Login"
          onPress={() => {}}
          enabled={false}
          loading={false}
          color={theme.colors.background_secondary}
          light
        />
      </Footer>
    </Container>
  );
}
