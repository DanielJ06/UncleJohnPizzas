import React, { useContext, useEffect, useState } from 'react';
import PizzaContext from '../../context/PizzaContext';

import * as S from './styles';

interface PizzaProps {
  source: string
}

const Pizza: React.FC<PizzaProps> = ({ source }) => {

  const { pizzaSize } = useContext(PizzaContext);

  return (
    <S.Container width={pizzaSize} tint="light" intensity={85} >
      <S.WhiteCircle>
        {source === 'thin' ? (
          <S.Pizza source={require('../../assets/rawPizza.png')} />
        ) : (
          <S.Pizza source={require('../../assets/thickRawPizza.png')} />
        )}
      </S.WhiteCircle>
    </S.Container>
  );
}

export default Pizza;

