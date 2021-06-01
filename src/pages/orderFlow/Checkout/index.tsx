/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useState } from 'react';
import { Switch, View } from 'react-native';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import BackgroundGradient from '../../../components/BackgroundGradient';

import * as S from './styles';
import * as T from '../../../components/Typography';
import { Colors } from '../../../utils/styleGuide';
import PizzaContext from '../../../context/PizzaContext';

const Checkout: React.FC = () => {
	const [contactless, setContactLess] = useState(false);
	const { totalPrice } = useContext(PizzaContext);
	const navigation = useNavigation();

	return (
		<S.Container>
			<View style={{ height: 48, width: '100%' }} />
			<BackgroundGradient bgHeight={0.25} />

			<View style={{ flex: 1 }}>
				<View style={{ padding: 20 }}>
					<FontAwesome5 name="shopping-cart" size={30} color={Colors.white} />

					<T.Header1 style={{ marginTop: 5 }} color="#FFF">
						Checkout
					</T.Header1>
				</View>

				<S.DeliveryContainer intensity={125} tint="light">
					<View>
						<S.SectionHeader>
							<View style={{ flexDirection: 'row' }}>
								<Ionicons name="location-sharp" size={25} color={Colors.red} />
								<T.Header3
									style={{ fontWeight: 'bold', marginLeft: 8 }}
									color={Colors.red}
								>
									Delivery Address
								</T.Header3>
							</View>
							<S.GradientEdit>
								<MaterialIcons name="edit" size={15} color={Colors.white} />
							</S.GradientEdit>
						</S.SectionHeader>

						<View style={{ marginTop: 18, paddingStart: 25 }}>
							<T.SelectedButtonText>Home</T.SelectedButtonText>
							<T.DefaultButtonText>
								3728 Brand Road, Swift Current
							</T.DefaultButtonText>
						</View>
					</View>
					<S.AddInstruction>
						<T.SelectedButtonText>
							+{'    '}Add delivery instruction
						</T.SelectedButtonText>
					</S.AddInstruction>
					<S.ContactContainer>
						<View>
							<T.SelectedButtonText>Contactless Delivery:</T.SelectedButtonText>
							<T.DefaultButtonText>
								Rider will place order at your door
							</T.DefaultButtonText>
						</View>
						<Switch
							thumbColor={contactless ? Colors.red : Colors.white}
							trackColor={{ true: Colors.orange, false: Colors.stroke }}
							value={contactless}
							onValueChange={() => setContactLess(!contactless)}
						/>
					</S.ContactContainer>
				</S.DeliveryContainer>
				<S.PaymentContainer intensity={125} tint="light">
					<S.SectionHeader>
						<View style={{ flexDirection: 'row' }}>
							<FontAwesome5 name="wallet" size={25} color={Colors.red} />
							<T.Header3
								style={{ fontWeight: 'bold', marginLeft: 8 }}
								color={Colors.red}
							>
								Payment method
							</T.Header3>
						</View>
						<S.GradientEdit>
							<MaterialIcons name="edit" size={15} color={Colors.white} />
						</S.GradientEdit>
					</S.SectionHeader>

					<S.CardContainer>
						<View>
							<T.SelectedButtonText>VISA</T.SelectedButtonText>
							<T.DefaultButtonText color={Colors.lightPurple}>
								....0145
							</T.DefaultButtonText>
						</View>
						<T.SelectedButtonText>
							${totalPrice.toFixed(2)}
						</T.SelectedButtonText>
					</S.CardContainer>

					<S.CashbackBadge>
						<T.PreTitle
							style={{ textTransform: 'uppercase' }}
							color={Colors.green}
						>
							10% Cashback Applied
						</T.PreTitle>
					</S.CashbackBadge>
				</S.PaymentContainer>
			</View>

			<S.NextButton onPress={() => navigation.navigate('OrderDetais')}>
				<S.NextGradientContainer>
					<T.SelectedButtonText color="#FFF">Place Order</T.SelectedButtonText>
				</S.NextGradientContainer>
			</S.NextButton>
		</S.Container>
	);
};
export default Checkout;
