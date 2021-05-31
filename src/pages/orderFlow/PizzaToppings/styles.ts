import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, ScreenSize } from '../../../utils/styleGuide';

interface SelectProps {
  selected: boolean
}

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
  padding: 20px 29px 0px 29px;
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

export const SectionContainer = styled.View`
  width: ${ScreenSize.width - 20}px;
  min-height: 134px;
  border-radius: 20px; 

  padding: 20px 15px;
  margin-bottom: 30px;
  margin-top: 21px;

  justify-content: space-around; 
  align-items: center;
  align-self: center;

  background-color: #fff;
`;

export const Selected = styled(LinearGradient).attrs((props: SelectProps)  => ({
  colors: 
    props.selected ? 
    [Colors.red, Colors.orange] : 
    ['#FFF1', '#FFF1'],
  start: [0, 0],
  end: [0.8, 0]
}))<SelectProps>`
  padding: 9px 16px;
  border-radius: 15px;
  overflow: hidden;
`;

export const TextButton = styled.Text<SelectProps>`
  font-weight: ${props => props.selected ? 'bold' : 300};
  font-size: 15px;
  letter-spacing: -0.3px;
  color: ${(props) => (props.selected ? '#FFF' : Colors.purple)};
`;