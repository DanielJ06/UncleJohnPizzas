import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import Pizza from '../../../components/Pizza';
import BackgroundGradient from '../../../components/BackgroundGradient';
import { Header1, Header2, PreTitle, SelectedButtonText } from '../../../components/Typography';
import * as S from './styles';

const PizzaSize: React.FC = () => {
  return (
    <S.Container>
      <View style={{ height: 48, width: '100%' }} />
      <BackgroundGradient />

      <S.Content>
        <View style={{ alignItems: 'center' }} >
          <S.HeaderInfo>
              <View>
                <Header1 color="#FFF">Create Your Pizza</Header1>
                <PreTitle color="#FFF" style={{ maxWidth: '75%' }}>THICK CRUST, PEPERONI, THICK CRUST, THICK CRUST</PreTitle>
              </View>
            <Header2 color="#FFF">$10.00</Header2>
          </S.HeaderInfo>

          <Pizza width={0.9} crust="thin" />

          <S.Chip>10"</S.Chip>
        </View>

        <S.NextButton>
          <S.NextGradientContainer>
              <SelectedButtonText color="#FFF">
                NEXT
              </SelectedButtonText>
          </S.NextGradientContainer>
        </S.NextButton>
      </S.Content>
    </S.Container>
  );
}

export default PizzaSize;