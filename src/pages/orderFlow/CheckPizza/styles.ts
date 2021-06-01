import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

export const Container = styled.View`
	flex: 1;
	justify-content: space-between;
	background-color: ${props => props.theme.Colors.lightGrey};
`;

interface ContainerProps {
	height: number;
}

export const PizzaContainer = styled(BlurView)<ContainerProps>`
	position: absolute;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	width: ${props => props.theme.ScreenSize.height * props.height}px;
	height: ${props => props.theme.ScreenSize.height * props.height}px;
	top: ${props => props.theme.ScreenSize.height * 0.2}px;
	left: ${props => props.theme.ScreenSize.width * 0.2}px;

	border-radius: ${props => props.theme.ScreenSize.height / 2}px;
	padding: 25px;

	background-color: ${props => props.theme.Colors.white};
`;

export const Details = styled(BlurView)`
	width: ${props => props.theme.ScreenSize.width * 0.7}px;
	margin-bottom: 69px;
	overflow: hidden;

	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;

	background-color: ${props => props.theme.Colors.white};
`;

export const OrderSummary = styled.View`
	padding: 45px 20px 15px 20px;
`;

export const ItemsContainer = styled.View`
	width: 100%;

	border-top-width: 1px;
	border-top-color: ${props => props.theme.Colors.stroke};

	padding-top: 28px;
	padding-left: 20px;
	padding-right: 20px;
	margin-bottom: 28px;
`;

export const Items = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const WhiteCircle = styled.View`
	width: 100%;
	height: 100%;

	padding: 15px;
	border-radius: ${props => props.theme.ScreenSize.height / 2}px;

	justify-content: center;
	align-items: center;

	background-color: ${props => props.theme.Colors.white};
`;

export const Pizza = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
`;

export const TotalSection = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	border-top-width: 1px;
	border-top-color: ${props => props.theme.Colors.stroke};

	padding: 15px 20px 50px 20px;
`;

export const NextGradientContainer = styled(LinearGradient).attrs({
	colors: ['#F5313F', '#FFA360'],
	start: [0, 0],
	end: [0.8, 0],
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
