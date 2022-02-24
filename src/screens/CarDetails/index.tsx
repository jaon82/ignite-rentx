import React from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import BackButton from '../../components/BackButton';
import ImagesSlider from '../../components/ImagesSlider';
import Acessory from '../../components/Acessory';

import {
  About,
  Acessories,
  Brand,
  Container,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
} from './styles';
import Button from '../../components/Button';
import CarDTO from '../../dtos/CarDTO';
import getAcessoryIcon from '../../utils/getAcessoryIcon';

interface Params {
  car: CarDTO;
}
export default function CarDetails() {
  const { navigate, goBack }: NavigationProp<ParamListBase> = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP,
      ),
    };
  });

  const slideCarStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
    };
  });

  function handleConfirmRental() {
    navigate('Scheduling', { car });
  }
  function handleBack() {
    goBack();
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Animated.View style={[headerStyleAnimation]}>
        <Header>
          <BackButton onPress={handleBack} />
        </Header>
        <Animated.View
          style={[
            slideCarStyleAnimation,
            {
              marginTop: getStatusBarHeight() + 32,
            },
          ]}
        >
          <ImagesSlider imagesUrl={car.photos} />
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={{
          padding: 24,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
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
        <About>{car.about}</About>
        <About>{car.about}</About>
        <About>{car.about}</About>
      </Animated.ScrollView>
      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
