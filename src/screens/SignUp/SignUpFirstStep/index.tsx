import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import BackButton from '../../../components/BackButton';
import Bullet from '../../../components/Bullet';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import {
  Container,
  Form,
  FormTitle,
  Header,
  Steps,
  SubTitle,
  Title,
} from './styles';

export default function SignUpFirstStep() {
  const { goBack, navigate }: NavigationProp<ParamListBase> = useNavigation();

  function handleBack() {
    goBack();
  }

  function handleNextStep() {
    navigate('SignUpSecondStep');
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>
          <Title>Crie sua{'\n'}conta</Title>
          <SubTitle>Faça seu cadastro de{'\n'}forma rápida e fácil</SubTitle>
          <Form>
            <FormTitle>1. Dados</FormTitle>
            <Input iconName="user" placeholder="Nome" />
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
            />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
            />
          </Form>
          <Button title="Próximo" onPress={handleNextStep} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
