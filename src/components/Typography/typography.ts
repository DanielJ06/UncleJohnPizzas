import styled from 'styled-components/native';
import { Colors } from '../../utils/styleGuide';

interface TextProps {
	color?: string;
}

export const Header1 = styled.Text<TextProps>`
	font-weight: 300;
	font-size: 25px;
	letter-spacing: -0.3px;
	color: ${props => (props.color ? props.color : Colors.purple)};
`;

export const Header2 = styled.Text<TextProps>`
	font-weight: bold;
	font-size: 25px;
	letter-spacing: -0.3px;
	color: ${props => (props.color ? props.color : Colors.purple)};
`;

export const Header3 = styled.Text<TextProps>`
	font-weight: 300;
	font-size: 20px;
	letter-spacing: -0.3px;
	color: ${props => (props.color ? props.color : Colors.purple)};
`;

export const Header4 = styled.Text<TextProps>`
	font-weight: bold;
	font-size: 25px;
	letter-spacing: -0.3px;
	color: ${props => (props.color ? props.color : Colors.purple)};
`;
export const PreTitle = styled.Text<TextProps>`
	font-weight: bold;
	font-size: 10px;
	letter-spacing: 1px;
	color: ${props => (props.color ? props.color : Colors.purple)};
`;

export const DefaultButtonText = styled.Text<TextProps>`
	font-weight: 300;
	font-size: 15px;
	letter-spacing: -0.3px;
	color: ${props => (props.color ? props.color : Colors.purple)};
`;

export const SelectedButtonText = styled.Text<TextProps>`
	font-weight: bold;
	font-size: 15px;
	letter-spacing: -0.3px;
	color: ${props => (props.color ? props.color : Colors.purple)};
`;
export const BodyText = styled.Text<TextProps>`
	font-weight: normal;
	font-size: 14px;
	line-height: 20px;
	color: ${props => (props.color ? props.color : Colors.purple)};
`;
