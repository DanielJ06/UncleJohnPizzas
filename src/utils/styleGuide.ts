import { Dimensions } from 'react-native';

export const Colors = {
	red: '#F5313F',
	orange: '#FFA360',
	purple: '#6D6E9C',
	lightPurple: '#A0A8CC',
	stroke: '#DADAE5',
	lightGrey: '#F4F3F9',
	white: '#FFFFFF',
	green: '#57C168',
	lightGreen: '#DEF3E1',
};

const { width, height } = Dimensions.get('window');

export const ScreenSize = {
	width,
	height,
};
