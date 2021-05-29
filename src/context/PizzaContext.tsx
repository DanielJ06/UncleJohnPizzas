import React, { createContext, useState } from "react";

interface PizzaContextProps {
  addItem(item: ItemProps): void;
  deleteItem(item: ItemProps): void;
  pizzaItems: ItemProps[];
}

interface ItemProps {
  id: number;
  type: string;
  title: string;
  price: number;
}

const PizzaContext = createContext<PizzaContextProps>({} as PizzaContextProps);

export const PizzaDetails:React.FC = ({ children }) => {

  const [pizzaItems, setPizzaItems] = useState<ItemProps[]>([
    {id: Math.floor(Math.random() * 50), title:'medium', price: 10, type: 'size'}
  ]);

  function addItem(item:ItemProps) {
    const itemProp = pizzaItems.findIndex(itemProp => itemProp.type === item.type)

    if (itemProp !== -1 && item.type === "size") {
      pizzaItems[itemProp] = item
      setPizzaItems([...pizzaItems])
    } else if (itemProp !== -1 && item.type === "crust") {
      pizzaItems[itemProp] = item
      setPizzaItems([...pizzaItems])
    } else {
      setPizzaItems([...pizzaItems, item])
    }
  }

  function deleteItem(item:ItemProps) {
    const itemProp = pizzaItems.findIndex(itemProp => itemProp.id === item.id)
    pizzaItems.splice(itemProp, 1)
    setPizzaItems([...pizzaItems])
  }

  return (
    <PizzaContext.Provider
      value={{ addItem, deleteItem, pizzaItems }}
    >
      {children}
    </PizzaContext.Provider>
  )

}

export default PizzaContext;