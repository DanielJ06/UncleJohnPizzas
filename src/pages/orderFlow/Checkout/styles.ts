import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
	flex: 1;
	justify-content: space-between;
	background-color: ${props => props.theme.Colors.lightGrey};
`;

export const DeliveryContainer = styled(BlurView)`
	margin-left: 20px;
	margin-right: 20px;
	overflow: hidden;

	border-radius: 20px;

	padding: 25px 0;
`;

export const PaymentContainer = styled(BlurView)`
	margin-left: 20px;
	margin-right: 20px;
	overflow: hidden;

	border-radius: 20px;

	padding: 25px 0;
	margin-top: 15px;
`;

export const SectionHeader = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding-left: 25px;
	padding-right: 15px;
`;

export const AddInstruction = styled.View`
	border-top-width: 1px;
	border-top-color: ${props => props.theme.Colors.stroke};
	border-bottom-width: 1px;
	border-bottom-color: ${props => props.theme.Colors.stroke};
	padding: 20px 15px 20px 25px;
	margin-top: 20px;
`;

export const ContactContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;

	margin-top: 29px;
	padding-left: 25px;
	padding-right: 15px;
`;

export const GradientEdit = styled(LinearGradient).attrs({
	colors: ['#F5313F', '#FFA360'],
	start: [0, 0],
	end: [0.8, 0],
})`
	width: 25px;
	height: 25px;
	overflow: hidden;

	border-radius: 13px;

	justify-content: center;
	align-items: center;
`;

export const CardContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;

	margin-top: 20px;
	padding-left: 25px;
	padding-right: 15px;
`;

export const CashbackBadge = styled.View`
	padding: 8px;
	margin-top: 15px;
	margin-left: 25px;
	border-radius: 10px;

	align-self: flex-start;
	background-color: #def3e1;
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
