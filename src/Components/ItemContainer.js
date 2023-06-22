import React, { useState } from 'react';
import ItemCards from './ItemCards';

const ItemContainer = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const handleRemoveFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCartItems);
    };

    return (
        <div>
            <ItemCards onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} cartItems={cartItems} />
        </div>
    );
};

export default ItemContainer;
