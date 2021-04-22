import React, {FC} from 'react';
import {IGroceries} from '../Interfaces/Interfaces'


interface Props {
    item: IGroceries;

}

export const GroceryItem = ({item}: Props) => {
    return (
        <div>
            {item.itemName} - {item.quantity} - {item.price}
        </div>
    )
}