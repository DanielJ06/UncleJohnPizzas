import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors, ScreenSize } from '../../utils/styleGuide';

interface BackgrounProps {
	bgHeight?: number;
}

const BackgroundGradient: React.FC<BackgrounProps> = ({ bgHeight }) => (
	<LinearGradient
		colors={[Colors.red, Colors.orange]}
		start={[0, 0]}
		end={[0.8, 0]}
		style={{
			position: 'absolute',
			top: 48,
			width: ScreenSize.width,
			height: bgHeight ? ScreenSize.height * bgHeight : ScreenSize.height * 0.4,
		}}
	/>
);

export default BackgroundGradient;
