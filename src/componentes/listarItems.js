import React from 'react';
import Item from './item';

const ItemList = ({ items, onRemove }) => {
    return (
        <ul>
            {items.map(item => (
                <Item key={item.key} item={item} onRemove={onRemove} />
            ))}
        </ul>
    );
};

export default ItemList;
