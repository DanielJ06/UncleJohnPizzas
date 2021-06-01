/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import Container from './styles';

import * as T from '../../components/Typography';
import { Colors } from '../../utils/styleGuide';

const ToolBar: React.FC = () => {
	const navigation = useNavigation();

	return (
		<Container>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<AntDesign name="arrowleft" size={18} color={Colors.purple} />
			</TouchableOpacity>
			<T.DefaultButtonText>Uncle John Pizzas</T.DefaultButtonText>
			<TouchableOpacity onPress={() => navigation.navigate('PizzaSize')}>
				<Entypo name="home" size={15} color={Colors.purple} />
			</TouchableOpacity>
		</Container>
	);
};

export default ToolBar;
