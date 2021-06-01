/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import Pizza from '../../../components/Pizza';
import PizzaContext from '../../../context/PizzaContext';
import BackgroundGradient from '../../../components/BackgroundGradient';
import { Crusts } from '../../../utils/pizzaDetails';
import {
	Header1,
	Header2,
	Header3,
	PreTitle,
	SelectedButtonText,
} from '../../../components/Typography';
import * as S from './styles';

const PizzaCrust: React.FC = () => {
	const navigation = useNavigation();
	const { addItem, pizzaItems, totalPrice, pizzaCrust } =
		useContext(PizzaContext);

	// Size props
	const [extraPrice, setExtraPrice] = useState(4);
	const [selected, setSelected] = useState(pizzaCrust);

	const onCrustChangeHandler = (crust: string) => {
		if (crust === 'thin') {
			addItem(Crusts.thin);
			setSelected('thin');
			setExtraPrice(Crusts.thin.price);
		} else if (crust === 'thick') {
			addItem(Crusts.thick);
			setSelected('thick');
			setExtraPrice(Crusts.thick.price);
		}
	};

	useEffect(() => {
		if (pizzaCrust) {
			onCrustChangeHandler(pizzaCrust);
		} else {
			onCrustChangeHandler('thick');
		}
	}, []);

	return (
		<S.Container>
			<View style={{ height: 48, width: '100%' }} />
			<BackgroundGradient />

			<S.Content>
				<View style={{ alignItems: 'center' }}>
					<S.HeaderInfo>
						<View>
							<Header1 color="#FFF">Create Your Pizza</Header1>

							<View
								style={{
									maxWidth: '75%',
									flexDirection: 'row',
									flexWrap: 'wrap',
								}}
							>
								{pizzaItems.map(item => (
									<PreTitle
										key={item.title}
										color="#FFF"
										style={{ textTransform: 'uppercase' }}
									>
										{item.title}{' '}
									</PreTitle>
								))}
							</View>
						</View>

						<Header2 color="#FFF">${totalPrice.toFixed(2)}</Header2>
					</S.HeaderInfo>

					{selected === 'thin' ? (
						<Pizza source="thin" />
					) : (
						<Pizza source="thick" />
					)}

					<S.Chip>+${extraPrice.toFixed(2)}</S.Chip>
				</View>

				<View>
					<S.SectionContainer>
						<Header3>
							Choose your
							<Header3 style={{ fontWeight: 'bold' }}> crust</Header3>
						</Header3>
						<S.OptionsContainer>
							<TouchableOpacity onPress={() => onCrustChangeHandler('thin')}>
								<S.Selected selected={selected === 'thin'}>
									<S.TextButton selected={selected === 'thin'}>
										Thin
									</S.TextButton>
								</S.Selected>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => onCrustChangeHandler('thick')}>
								<S.Selected selected={selected === 'thick'}>
									<S.TextButton selected={selected === 'thick'}>
										Thick
									</S.TextButton>
								</S.Selected>
							</TouchableOpacity>
						</S.OptionsContainer>
					</S.SectionContainer>

					<S.NextButton onPress={() => navigation.navigate('PizzaToppings')}>
						<S.NextGradientContainer>
							<SelectedButtonText color="#FFF">NEXT</SelectedButtonText>
						</S.NextGradientContainer>
					</S.NextButton>
				</View>
			</S.Content>
		</S.Container>
	);
};

export default PizzaCrust;
