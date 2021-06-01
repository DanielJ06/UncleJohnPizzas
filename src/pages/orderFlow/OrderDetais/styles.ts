import { BlurView } from 'expo-blur';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	justify-content: space-between;
	background-color: ${props => props.theme.Colors.lightGrey};
`;

export const OrderContainer = styled(BlurView)`
	flex: 1;
	margin: 23px 20px 11px 20px;
	border-radius: 20px;
	background-color: ${props => props.theme.Colors.white};
	overflow: hidden;
`;

export const SectionHeader = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;

	padding: 25px;
	border-bottom-width: 1px;
	border-bottom-color: ${props => props.theme.Colors.stroke};
`;

export const CashbackContainer = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	margin: 10px 20px 20px 20px;
	height: 80px;

	background-color: ${props => props.theme.Colors.lightGreen};
	border-width: 1px;
	border-color: ${props => props.theme.Colors.green};
	border-radius: 20px;
`;

export const CashbackArrow = styled.View`
	width: 15%;
	height: 100%;

	border-left-width: 1px;
	border-color: ${props => props.theme.Colors.green};

	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;

	align-items: center;
	justify-content: center;
`;
