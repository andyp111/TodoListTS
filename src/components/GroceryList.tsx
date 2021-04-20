import React, { useState, ChangeEvent, FC } from 'react';
import { IGroceries } from '../Interfaces/Interfaces'



export const GroceryList: FC = () => {

    const [itemName, setItemName] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);

    const [groceryList, setGroceryList] = useState<IGroceries[]>([])


    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === 'itemName') setItemName(event.target.value);
        if (event.target.name === 'quantity') setQuantity(Number(event.target.value));
        if (event.target.name === 'price') setPrice(Number(event.target.value));
    }

    const addGroceries = (): void => {
        const newGrocery = {
            itemName: itemName,
            quantity: quantity,
            price: price
        }

        setGroceryList([...groceryList, newGrocery]);
        setItemName('');
        setQuantity(0);
        setPrice(0);
    }


    return (
        <div>

        </div>
    )
}