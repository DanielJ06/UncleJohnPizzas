/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { ThemeContext } from 'styled-components';
import Container from './styles';

import * as T from '../../components/Typography';

const ToolBar: React.FC = () => {
	const navigation = useNavigation();
	const { Colors } = useContext(ThemeContext);

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
