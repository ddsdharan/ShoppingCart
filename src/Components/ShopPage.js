import React, { useState } from 'react';
import NavBar from './Navbar';
import ItemCards from './ItemCards';

const ShopPage = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (item) => {
        const updatedCartItems = [...cartItems, item];
        setCartItems(updatedCartItems);
    };

    const handleRemoveFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCartItems);
    };

    return (
        <>
            <NavBar cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <ItemCards onAddToCart={handleAddToCart} cartItems={cartItems} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopPage;