/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { createContext, useEffect, useState } from 'react';
import { Sizes } from '../utils/pizzaDetails';

interface PizzaContextProps {
	addItem(item: ItemProps): void;
	deleteItem(item: ItemProps): void;
	setTotal(num: number): void;
	pizzaItems: ItemProps[];
	totalPrice: number;
	pizzaSize: number;
	pizzaCrust: string;
}

interface ItemProps {
	id?: number;
	type: string;
	title: string;
	price: number;
	size?: number;
}

const PizzaContext = createContext<PizzaContextProps>({} as PizzaContextProps);

export const PizzaDetails: React.FC = ({ children }) => {
	const [totalPrice, setTotal] = useState(0);
	const [pizzaSize, setPizzaSize] = useState(Sizes.medium.size);
	const [pizzaCrust, setPizzaCrust] = useState('thick');
	const [pizzaItems, setPizzaItems] = useState<ItemProps[]>([Sizes.medium]);

	useEffect(() => {
		function handleCalcTotal() {
			const fullPrice = pizzaItems.reduce((a, b) => a + b.price, 0);
			setTotal(fullPrice);
		}
		handleCalcTotal();
	}, [pizzaItems]);

	function addItem(item: ItemProps) {
		const itemProp = pizzaItems.findIndex(
			itemProp => itemProp.type === item.type,
		);

		if (itemProp !== -1 && item.type === 'size') {
			setPizzaSize(item.size!);
			pizzaItems[itemProp] = item;
			setPizzaItems([...pizzaItems]);
		} else if (itemProp !== -1 && item.type === 'crust') {
			setPizzaCrust(item.title);
			pizzaItems[itemProp] = item;
			setPizzaItems([...pizzaItems]);
		} else {
			setPizzaItems([...pizzaItems, item]);
		}
	}

	function deleteItem(item: ItemProps) {
		const itemProp = pizzaItems.findIndex(
			itemProp => itemProp.title === item.title,
		);
		pizzaItems.splice(itemProp, 1);
		setPizzaItems([...pizzaItems]);
	}

	return (
		<PizzaContext.Provider
			value={{
				addItem,
				deleteItem,
				setTotal,
				pizzaItems,
				totalPrice,
				pizzaSize,
				pizzaCrust,
			}}
		>
			{children}
		</PizzaContext.Provider>
	);
};

export default PizzaContext;
