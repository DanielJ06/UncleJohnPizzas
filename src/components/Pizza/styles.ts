import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';

import { Colors, ScreenSize } from '../../utils/styleGuide';

interface ContainerProps {
  width: number
}

export const Container = styled(BlurView)<ContainerProps>`
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: ${props => ScreenSize.width * props.width}px;
  height: ${props => ScreenSize.width * props.width}px;
  margin-top: 23px;

  border-radius: ${(ScreenSize.width / 2)}px;
  padding: 25px;

  background-color: ${Colors.white};
`;

export const WhiteCircle = styled.View`
  width: 100%;
  height: 100%;

  padding: 15px;
  border-radius: 250px;

  justify-content: center;
  align-items: center;

  background-color: #FFF;
`;

export const Pizza = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;