import React, {FC} from 'react';
import {IGroceries} from '../Interfaces/Interfaces'


interface Props {
    item: IGroceries;

}



export const GroceryItem = ({item}: Props) => {
    const quant: Number = item.quantity;
    const price: Number = item.price;
    const totalPrice: Number = Number(quant) * Number(price);
    return (
        <div>
            <span>{item.itemName}</span>
            <span>{item.quantity}</span>
            <span>{totalPrice}</span>
        </div>
    )
}