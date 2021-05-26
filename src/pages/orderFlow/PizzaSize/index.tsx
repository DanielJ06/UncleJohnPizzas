import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

import { Colors, ScreenSize } from '../../../utils/styleGuide';
import * as S from './styles';

const PizzaSize: React.FC = () => {
  return (
    <S.Container>
      <LinearGradient 
        colors={[Colors.red, Colors.orange]}
        start={[0, 0]}
        end={[0.8, 0]}
        style={{ 
          width: ScreenSize.width, 
          height: ScreenSize.height * 0.4 
        }}
      />
    </S.Container>
  );
}

export default PizzaSize;