import styled from 'styled-components/native';
import { Colors } from '../../utils/styleGuide';

const Container = styled.View`
	width: 100%;
	height: 48px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-left: 20px;
	padding-right: 20px;
	background-color: ${Colors.lightGrey};
`;

export default Container;
