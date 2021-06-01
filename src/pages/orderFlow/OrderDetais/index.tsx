/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';
import PizzaContext from '../../../context/PizzaContext';

import * as S from './styles';
import * as T from '../../../components/Typography';
import BackgroundGradient from '../../../components/BackgroundGradient';
import StepComponent from './StepComponent';
import ToolBar from '../../../components/ToolBar';

const OrderDetais: React.FC = () => {
	const { totalPrice } = useContext(PizzaContext);
	const { Colors } = useContext(ThemeContext);

	const currDay = new Date().getDay();

	return (
		<S.Container>
			<ToolBar />
			<BackgroundGradient bgHeight={0.25} />

			<View style={{ padding: 20 }}>
				<Ionicons name="receipt" size={30} color={Colors.white} />

				<T.Header1 style={{ marginTop: 5 }} color="#FFF">
					Order Details
				</T.Header1>
			</View>

			<S.OrderContainer intensity={125} tint="light">
				<S.SectionHeader>
					<View style={{ alignItems: 'center' }}>
						<T.PreTitle>ORDERED ON</T.PreTitle>
						<T.Header3 style={{ fontWeight: 'bold' }} color={Colors.red}>
							{currDay} JUN
						</T.Header3>
					</View>

					<View style={{ alignItems: 'center' }}>
						<T.PreTitle>INVOICE #</T.PreTitle>
						<T.Header3 style={{ fontWeight: 'bold' }} color={Colors.red}>
							#15569
						</T.Header3>
					</View>

					<View style={{ alignItems: 'center' }}>
						<T.PreTitle>TOTAL DUE</T.PreTitle>
						<T.Header3 style={{ fontWeight: 'bold' }} color={Colors.red}>
							${totalPrice.toFixed(2)}
						</T.Header3>
					</View>
				</S.SectionHeader>

				<View style={{ marginLeft: 35, height: 300, marginTop: 50 }}>
					<StepComponent />
				</View>
			</S.OrderContainer>

			<S.CashbackContainer>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Image
						style={{ marginLeft: 25 }}
						source={require('../../../assets/CashbackIcon.png')}
					/>
					<View style={{ marginLeft: 15 }}>
						<T.SelectedButtonText color={Colors.green}>
							Earned cashback!
						</T.SelectedButtonText>
						<T.DefaultButtonText>+ $1.45</T.DefaultButtonText>
					</View>
				</View>
				<S.CashbackArrow style={{ backgroundColor: '#57c16825' }}>
					<AntDesign name="right" size={25} color={Colors.green} />
				</S.CashbackArrow>
			</S.CashbackContainer>
		</S.Container>
	);
};

export default OrderDetais;
