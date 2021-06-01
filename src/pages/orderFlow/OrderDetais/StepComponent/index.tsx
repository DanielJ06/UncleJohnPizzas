import React from 'react';
import { View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { Colors } from '../../../../utils/styleGuide';

import * as T from '../../../../components/Typography';

const stepIndicatorStyles = {
	stepIndicatorSize: 30,
	currentStepIndicatorSize: 30,
	stepIndicatorFinishedColor: Colors.red,
	stepIndicatorUnFinishedColor: Colors.lightGrey,
	stepIndicatorCurrentColor: '#f5313eba',
	stepIndicatorLabelFinishedColor: Colors.white,
	stepIndicatorLabelCurrentColor: Colors.white,
	stepIndicatorLabelUnFinishedColor: Colors.stroke,
	separatorStrokeWidth: 1,
	stepStrokeWidth: 1,
	stepStrokeCurrentColor: Colors.red,
	stepStrokeFinishedColor: Colors.red,
	stepStrokeUnFinishedColor: Colors.stroke,
	currentStepStrokeWidth: 1,
	separatorUnFinishedColor: Colors.stroke,
	separatorFinishedColor: Colors.red,
	currentStepLabelColor: Colors.purple,
	labelColor: Colors.purple,
	labelAlign: 'flex-start',
};

const labels = [
	{ title: 'Order Confirmed', time: '10:20 AM' },
	{ title: 'Preparing...', time: '10:20 AM' },
	{ title: 'Dispatched' },
	{ title: 'In Transit' },
	{ title: 'Delivered' },
];

const StepComponent: React.FC = () => (
	<StepIndicator
		customStyles={stepIndicatorStyles}
		direction="vertical"
		currentPosition={1}
		labels={labels}
		renderLabel={({ label, stepStatus }) => (
			<View style={{ alignItems: 'flex-start', marginLeft: 45 }}>
				<T.PreTitle
					style={{
						fontWeight: stepStatus === 'unfinished' ? 'normal' : 'bold',
					}}
				>
					{label.time ? label.time : ''}
				</T.PreTitle>
				<T.DefaultButtonText
					style={{
						marginTop: label.time ? 0 : -15,
						fontWeight: stepStatus === 'unfinished' ? 'normal' : 'bold',
					}}
				>
					{label.title}
				</T.DefaultButtonText>
			</View>
		)}
	/>
);

export default StepComponent;
