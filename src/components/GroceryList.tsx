import React, { useState, ChangeEvent, FC } from "react";
import { IGroceries } from "../Interfaces/Interfaces";
import { GroceryItem } from "./GroceryItem";

export const GroceryList: FC = () => {
    const [itemName, setItemName] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);

    const [groceryList, setGroceryList] = useState<IGroceries[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "itemName") setItemName(event.target.value);
        if (event.target.name === "quantity")
            setQuantity(Number(event.target.value));
        if (event.target.name === "price") setPrice(Number(event.target.value));
    };

    const addGroceries = (): void => {
        const newGrocery = {
            itemName: itemName,
            quantity: quantity,
            price: price,
        };

        setGroceryList([...groceryList, newGrocery]);
        setItemName("");
        setQuantity(0);
        setPrice(0);
    };

    return (
        <div className="groceryListMain">
            <div className="groceryListInput">
                <input
                    type="text"
                    placeholder="item"
                    name="itemName"
                    value={itemName}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    placeholder="quantity"
                    name="quantity"
                    value={quantity}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    placeholder="price"
                    name="price"
                    value={price}
                    onChange={handleChange}
                />
            </div>
            <button onClick={addGroceries}>Add Item</button>
            <div className="groceryList">
                {groceryList.map((item: IGroceries, key: number) => {
                    return <GroceryItem item={item} key={key} />;
                })}
            </div>
        </div>
    );
};
