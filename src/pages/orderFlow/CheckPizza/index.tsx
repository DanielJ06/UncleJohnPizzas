/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/core';
import { FontAwesome5 } from '@expo/vector-icons';

import { View } from 'react-native';
import * as T from '../../../components/Typography';
import * as S from './styles';
import BackgroundGradient from '../../../components/BackgroundGradient';
import PizzaContext from '../../../context/PizzaContext';
import { Colors } from '../../../utils/styleGuide';

const CheckPizza: React.FC = () => {
	const navigation = useNavigation();
	const { pizzaItems, totalPrice } = useContext(PizzaContext);

	return (
		<S.Container>
			<View style={{ height: 48, width: '100%' }} />
			<BackgroundGradient bgHeight={0.2} />

			<S.PizzaContainer height={0.7} tint="light" intensity={85}>
				<S.WhiteCircle>
					<S.Pizza source={require('../../../assets/olivePizza.png')} />
				</S.WhiteCircle>
			</S.PizzaContainer>

			<View style={{ flex: 1 }}>
				<View style={{ padding: 20 }}>
					<FontAwesome5 name="pizza-slice" size={30} color="white" />

					<T.Header1 color="#FFF">Check your</T.Header1>
					<T.Header1 color="#FFF" style={{ fontWeight: 'bold' }}>
						custom pizza
					</T.Header1>
				</View>
			</View>

			<View>
				<S.Details intensity={125} tint="light">
					<S.OrderSummary>
						<FontAwesome5 name="shopping-cart" size={17} color={Colors.red} />
						<T.PreTitle color={Colors.red}>ORDER SUMMARY</T.PreTitle>
					</S.OrderSummary>

					<S.ItemsContainer>
						{pizzaItems.map(item => (
							<S.Items key={item.title}>
								<T.DefaultButtonText style={{ textTransform: 'capitalize' }}>
									{item.title}
								</T.DefaultButtonText>
								<T.PreTitle>${item.price.toFixed(2)}</T.PreTitle>
							</S.Items>
						))}
					</S.ItemsContainer>

					<S.TotalSection>
						<T.DefaultButtonText>Total:</T.DefaultButtonText>
						<T.Header3>${totalPrice.toFixed(2)}</T.Header3>
					</S.TotalSection>
				</S.Details>

				<S.NextButton onPress={() => navigation.navigate('PizzaCrust')}>
					<S.NextGradientContainer>
						<T.SelectedButtonText color="#FFF">
							Confirm Pizza
						</T.SelectedButtonText>
					</S.NextGradientContainer>
				</S.NextButton>
			</View>
		</S.Container>
	);
};

export default CheckPizza;
