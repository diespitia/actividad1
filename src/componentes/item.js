import React from 'react';
import { removeItem } from '../servicios/database';

const Item = ({ item, onRemove }) => {
    const handleRemove = async () => {
        await removeItem(item.key);
        onRemove();
    };

    return (
        <li>
            {item.value.name} - Quantity: {item.value.quantity}
            <button onClick={handleRemove}>Remove</button>
        </li>
    );
};

export default Item;
