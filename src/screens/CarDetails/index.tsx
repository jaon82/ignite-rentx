import React from 'react';
import BackButton from '../../components/BackButton';
import ImagesSlider from '../../components/ImagesSlider';

import {
  About,
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
        <About>about</About>
      </Content>
    </Container>
  );
}
