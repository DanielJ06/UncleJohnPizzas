import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../../utils/styleGuide';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${Colors.lightGrey};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const HeaderInfo = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 29px;
`;

export const NextGradientContainer = styled(LinearGradient).attrs({
  colors: [Colors.red, Colors.orange],
  start: [0, 0],
  end: [0.8, 0]
})`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  padding: 17px;
`;

export const NextButton = styled.TouchableOpacity`
  width: 100%;
  height: 59px;
`;

export const Chip = styled.Text`
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 1px;

  color: ${Colors.purple};
  background: ${Colors.stroke};

  margin-top: 17px;
  padding: 6px 15px;
  border-radius: 10px;
`;