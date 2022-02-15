import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import BackButton from '../../components/BackButton';
import Car from '../../components/Car';

import CarDTO from '../../dtos/CarDTO';
import api from '../../services/api';
import {
  Appointments,
  AppointmentsQuantity,
  AppointmentsTitle,
  Container,
  Content,
  Header,
  SubTitle,
  Title,
} from './styles';

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
}
export default function MyCars() {
  const theme = useTheme();
  const { goBack }: NavigationProp<ParamListBase> = useNavigation();
  const [cars, setCars] = useState<CarProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCars();
  }, []);

  function handleBack() {
    goBack();
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <BackButton onPress={handleBack} color={theme.colors.shape} />
        <Title>Carros do usuário</Title>
        <SubTitle>Conforto, segurança e praticidade</SubTitle>
      </Header>
      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuantity>15</AppointmentsQuantity>
        </Appointments>

        <FlatList
          data={cars}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Car data={item.car} />}
        />
      </Content>
    </Container>
  );
}
