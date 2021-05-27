import React from 'react';

import * as S from './styles';

interface PizzaProps {
  width: number
  crust: string
}

const Pizza: React.FC<PizzaProps> = ({ 
  width, 
  crust
}) => {
  return (
    <S.Container width={width} style={{ backgroundColor: '#FFF9' }} >
      <S.WhiteCircle>
        {crust == 'thin' ? (
          <S.Pizza source={require('../../assets/rawPizza.png')} />
        ) : (
          <S.Pizza source={require('../../assets/thickRawPizza.png')} />
        )}
      </S.WhiteCircle>
    </S.Container>
  );
}

export default Pizza;