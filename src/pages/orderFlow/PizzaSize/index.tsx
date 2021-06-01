import React, { useContext, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Pizza from '../../../components/Pizza';
import PizzaContext from '../../../context/PizzaContext';
import BackgroundGradient from '../../../components/BackgroundGradient';
import { Sizes } from '../../../utils/pizzaDetails';
import {
	Header1,
	Header2,
	Header3,
	PreTitle,
	SelectedButtonText,
} from '../../../components/Typography';
import * as S from './styles';
import ToolBar from '../../../components/ToolBar';

const PizzaSize: React.FC = () => {
	const navigation = useNavigation();
	const { addItem, pizzaItems, totalPrice, pizzaCrust } =
		useContext(PizzaContext);

	// Size props
	const [pizzaInches, setPizzaInches] = useState('12"');
	const [selected, setSelected] = useState('medium');

	const onSizeChangeHandler = (val: string) => {
		if (val === 'small') {
			addItem(Sizes.small);
			setPizzaInches('10"');
			setSelected('small');
		} else if (val === 'medium') {
			addItem(Sizes.medium);
			setPizzaInches('12"');
			setSelected('medium');
		} else {
			addItem(Sizes.large);
			setPizzaInches('14"');
			setSelected('large');
		}
	};

	return (
		<S.Container>
			<ToolBar />
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

					{pizzaCrust === 'thin' ? (
						<Pizza source="thin" />
					) : (
						<Pizza source="thick" />
					)}

					<S.Chip>{pizzaInches}</S.Chip>
				</View>

				<View>
					<S.SectionContainer>
						<Header3>
							Choose your<Header3 style={{ fontWeight: 'bold' }}> size</Header3>
						</Header3>
						<S.OptionsContainer>
							<TouchableOpacity onPress={() => onSizeChangeHandler('small')}>
								<S.Selected selected={selected === 'small'}>
									<S.TextButton selected={selected === 'small'}>
										Small
									</S.TextButton>
								</S.Selected>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => onSizeChangeHandler('medium')}>
								<S.Selected selected={selected === 'medium'}>
									<S.TextButton selected={selected === 'medium'}>
										Medium
									</S.TextButton>
								</S.Selected>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => onSizeChangeHandler('large')}>
								<S.Selected selected={selected === 'large'}>
									<S.TextButton selected={selected === 'large'}>
										Large
									</S.TextButton>
								</S.Selected>
							</TouchableOpacity>
						</S.OptionsContainer>
					</S.SectionContainer>

					<S.NextButton onPress={() => navigation.navigate('PizzaCrust')}>
						<S.NextGradientContainer>
							<SelectedButtonText color="#FFF">NEXT</SelectedButtonText>
						</S.NextGradientContainer>
					</S.NextButton>
				</View>
			</S.Content>
		</S.Container>
	);
};

export default PizzaSize;
