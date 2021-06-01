import React, { useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemeContext } from 'styled-components';

interface BackgrounProps {
	bgHeight?: number;
}

const BackgroundGradient: React.FC<BackgrounProps> = ({ bgHeight }) => {
	const { Colors, ScreenSize } = useContext(ThemeContext);

	return (
		<LinearGradient
			colors={[Colors.red, Colors.orange]}
			start={[0, 0]}
			end={[0.8, 0]}
			style={{
				position: 'absolute',
				top: 48,
				width: ScreenSize.width,
				height: bgHeight
					? ScreenSize.height * bgHeight
					: ScreenSize.height * 0.4,
			}}
		/>
	);
};

export default BackgroundGradient;
