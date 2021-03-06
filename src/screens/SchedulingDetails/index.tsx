import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { format, parseISO } from 'date-fns';

import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { Alert } from 'react-native';
import BackButton from '../../components/BackButton';
import ImagesSlider from '../../components/ImagesSlider';
import Acessory from '../../components/Acessory';
import {
  Acessories,
  Brand,
  CalendarIcon,
  CarImages,
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
  RentalPeriod,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';
import Button from '../../components/Button';
import CarDTO from '../../dtos/CarDTO';
import getAcessoryIcon from '../../utils/getAcessoryIcon';
import api from '../../services/api';

interface Params {
  car: CarDTO;
  dates: string[];
}
interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

export default function SchedulingDetails() {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const { navigate, goBack }: NavigationProp<ParamListBase> = useNavigation();
  const route = useRoute();
  const { car, dates } = route.params as Params;
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod,
  );
  const rentTotal = Number(dates.length) * car.price;

  async function handleConfirmRental() {
    setIsLoading(true);
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);
    const unavailableDates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    await api.post(`/schedules_byuser`, {
      user_id: 1,
      car,
      startDate: format(parseISO(dates[0]), 'dd/MM/yyyy'),
      endDate: format(parseISO(dates[dates.length - 1]), 'dd/MM/yyyy'),
    });

    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates: unavailableDates,
      })
      .then(() =>
        navigate('Confirmation', {
          nextScreenRoute: 'Home',
          title: 'Carro alugado!',
          message: `Agora voc?? s?? precisa ir\n at?? a concession??ria da RENTX\npegar o seu autom??vel.`,
        }),
      )
      .catch(() => Alert.alert('N??o foi poss??vel confirmar o agendamento'))
      .finally(() => {
        setIsLoading(false);
      });
  }
  function handleBack() {
    goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      startFormatted: format(parseISO(dates[0]), 'dd/MM/yyyy'),
      endFormatted: format(parseISO(dates[dates.length - 1]), 'dd/MM/yyyy'),
    });
  }, [dates]);

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>
      <CarImages>
        <ImagesSlider imagesUrl={car.photos} />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.period}</Period>
            <Price>R$ {car.price}</Price>
          </Rent>
        </Details>
        <Acessories>
          {car.accessories.map(acessory => (
            <Acessory
              key={acessory.type}
              name={acessory.name}
              icon={getAcessoryIcon(acessory.type)}
            />
          ))}
        </Acessories>
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>AT??</DateTitle>
            <DateValue>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              {`R$ ${car.price} x${dates.length} di??rias`}
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmRental}
          loading={isLoading}
        />
      </Footer>
    </Container>
  );
}
