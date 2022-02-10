import React from 'react';

import BackButton from '../../components/BackButton';
import ImagesSlider from '../../components/ImagesSlider';
import Acessory from '../../components/Acessory';
import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import {
  About,
  Acessories,
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Header,
  Name,
  Period,
  Price,
  Rent,
} from './styles';

export default function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImagesSlider
          imagesUrl={[
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgIjNZsopctbwuHDcAKkyXHfV3Lx5vsYt2A&usqp=CAU',
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>La</Brand>
            <Name>a</Name>
          </Description>
          <Rent>
            <Period>Aod</Period>
            <Price>1</Price>
          </Rent>
        </Details>
        <Acessories>
          <Acessory name="380Km/h" icon={SpeedSvg} />
          <Acessory name="3.2s" icon={AccelerationSvg} />
          <Acessory name="800 MP" icon={ForceSvg} />
          <Acessory name="Gasolina" icon={GasolineSvg} />
          <Acessory name="Auto" icon={ExchangeSvg} />
          <Acessory name="2 pessoas" icon={PeopleSvg} />
        </Acessories>
        <About>about</About>
      </Content>
    </Container>
  );
}
