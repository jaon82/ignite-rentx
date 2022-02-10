import React from 'react';
import BackButton from '../../components/BackButton';
import ImagesSlider from '../../components/ImagesSlider';

import { CarImages, Container, Header } from './styles';

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
    </Container>
  );
}
