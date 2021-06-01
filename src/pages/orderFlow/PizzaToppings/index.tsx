/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useEffect, useState } from 'react';
import { Alert, FlatList, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import BackgroundGradient from '../../../components/BackgroundGradient';

import * as S from './styles';
import * as T from '../../../components/Typography';
import PizzaContext from '../../../context/PizzaContext';
import { Colors } from '../../../utils/styleGuide';
import { Toppings } from '../../../utils/pizzaDetails';
import ToolBar from '../../../components/ToolBar';

interface ToppingProp {
	id: number;
	title: string;
	price: number;
	type: string;
}

const PizzaToppings: React.FC = () => {
	const navigation = useNavigation();
	const { addItem, deleteItem, pizzaItems, totalPrice, pizzaSize } =
		useContext(PizzaContext);

	const [toppings, setToppings] = useState<ToppingProp[]>([]);

	const handleSelectTopping = (topping: ToppingProp) => {
		const alreadySelected = toppings.findIndex(item => item.id === topping.id);

		if (alreadySelected >= 0) {
			toppings.splice(alreadySelected, 1);
			setToppings([...toppings]);
			deleteItem(topping);
			return;
		}

		if (toppings.length === 7) {
			Alert.alert('Toppings limit', 'you can only choose 7 toppings');
			return;
		}

		setToppings([...toppings, topping]);
		addItem(topping);
	};

	const isSelected = (id: number) => toppings.findIndex(item => item.id === id);

	const isToppingSelected = (title: string) =>
		toppings.findIndex(item => item.title === title);

	useEffect(() => {
		function loadPrevious() {
			const prev = [...pizzaItems];
			prev.splice(0, 2);
			setToppings(prev as ToppingProp[]);
		}
		loadPrevious();
	}, [pizzaItems]);

	return (
		<S.Container>
			<ToolBar />
			<BackgroundGradient />

			<S.Content>
				<View style={{ alignItems: 'center' }}>
					<S.HeaderInfo>
						<View>
							<T.Header1 color="#FFF">Create Your Pizza</T.Header1>

							<View
								style={{
									maxWidth: '75%',
									flexDirection: 'row',
									flexWrap: 'wrap',
								}}
							>
								{pizzaItems.map(item => (
									<T.PreTitle
										key={item.title}
										color="#FFF"
										style={{ textTransform: 'uppercase' }}
									>
										{item.title}{' '}
									</T.PreTitle>
								))}
							</View>
						</View>

						<T.Header2 color="#FFF">${totalPrice.toFixed(2)}</T.Header2>
					</S.HeaderInfo>

					<S.PizzaContainer width={pizzaSize} tint="light" intensity={85}>
						<S.WhiteCircle>
							{toppings.length <= 2 && (
								<S.Pizza
									source={require('../../../assets/thickRawPizza.png')}
								/>
							)}

							{isToppingSelected('peperoni') >= 0 && (
								<S.Pizza
									source={require('../../../assets/peperoniPizza.png')}
								/>
							)}

							{isToppingSelected('mushroom') >= 0 && (
								<S.Pizza
									source={require('../../../assets/mushroomPizza.png')}
								/>
							)}

							{isToppingSelected('black olives') >= 0 && (
								<S.Pizza source={require('../../../assets/olivePizza.png')} />
							)}
						</S.WhiteCircle>
					</S.PizzaContainer>
				</View>

				<View>
					<S.SectionContainer style={{ backgroundColor: '#FFF9' }}>
						<View style={{ alignItems: 'center', marginBottom: 12 }}>
							<T.Header3>
								Choose up to
								<T.Header3 style={{ fontWeight: 'bold' }}>
									{' '}
									7 toppings
								</T.Header3>
							</T.Header3>
							<T.PreTitle color={Colors.lightPurple}>FREE 3 ADD-ONS</T.PreTitle>
						</View>

						<FlatList
							data={Toppings}
							keyExtractor={item => item.id.toString()}
							horizontal
							showsHorizontalScrollIndicator={false}
							renderItem={({ item }) => (
								<S.IngredientContainer
									onPress={() => handleSelectTopping(item)}
								>
									<S.IngredientInfo>
										<View
											style={{
												width: 74,
												height: 74,
												backgroundColor: '#000',
												borderRadius: 37,
											}}
										/>
										<View style={{ marginLeft: 12 }}>
											<T.SelectedButtonText
												style={{ textTransform: 'capitalize' }}
											>
												{item.title}
											</T.SelectedButtonText>
											<T.DefaultButtonText>
												+${item.price.toFixed(2)}
											</T.DefaultButtonText>
										</View>
									</S.IngredientInfo>
									{isSelected(item.id) >= 0 ? (
										<Image
											style={{
												marginStart: 32,
												marginBottom: 10,
												marginEnd: 10,
											}}
											source={require('../../../assets/SelectedCheck.png')}
										/>
									) : (
										<Image
											style={{
												marginStart: 32,
												marginBottom: 10,
												marginEnd: 10,
											}}
											source={require('../../../assets/DefaultCheck.png')}
										/>
									)}
								</S.IngredientContainer>
							)}
						/>
					</S.SectionContainer>

					<S.NextButton onPress={() => navigation.navigate('CheckPizza')}>
						<S.NextGradientContainer>
							<T.SelectedButtonText color="#FFF">NEXT</T.SelectedButtonText>
						</S.NextGradientContainer>
					</S.NextButton>
				</View>
			</S.Content>
		</S.Container>
	);
};

export default PizzaToppings;
