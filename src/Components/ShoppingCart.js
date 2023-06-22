// import React from 'react';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import CartIcon from './CartIcon';
// import RemoveItem from './DeleteIcon';
// import Button from 'react-bootstrap/esm/Button';

// const ShoppingCart = ({ cartItems, onRemoveFromCart = [], }) => {
//     const [show, setShow] = React.useState(false);

//     const handleClose = () => setShow(false);
//     const toggleShow = () => setShow((s) => !s);



//     return (
//         <>
//             <button type="button" onClick={toggleShow} class="btn btn-dark btn-sm position-relative"><CartIcon />Cart<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{cartItems.length}<span class="visually-hidden">Cart Items</span></span></button>

//             <Offcanvas show={show} placement="end" scroll backdrop={false} onHide={handleClose}>
//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>
//                     {cartItems.length > 0 ? (
//                         cartItems.map((item) => (
//                             <div key={item.id}>
//                                 {item.title}  {item.price}
//                                 <Button variant='danger' size="sm" onClick={() => onRemoveFromCart(item.id)}><RemoveItem /></Button>
//                             </div>
//                         ))
//                     ) : (
//                         <div>Your cart is empty.</div>
//                     )}
//                 </Offcanvas.Body>
//             </Offcanvas>
//         </>
//     );
// };

// export default ShoppingCart;

import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartIcon from './CartIcon';
import RemoveItem from './DeleteIcon';
// import Button from 'react-bootstrap/esm/Button';


const ShoppingCart = ({ cartItems, onRemoveFromCart = [] }) => {
    const calculateTotal = () => {
        const totalPrice = cartItems.reduce((total, item) => total + Number(item.price), 0);
        return totalPrice.toFixed(2);
    };

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);





    return (
        <>
            <button type="button" onClick={toggleShow} class="btn btn-dark btn-sm position-relative"><CartIcon />Cart<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{cartItems.length}<span class="visually-hidden">Cart Items</span></span></button>

            <Offcanvas show={show} placement="end" scroll backdrop={false} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cartItems.length > 0 ? (
                        <>
                            {/* {cartItems.map((item) => (
                                <div key={item.id}>
                                    {item.title} {item.price}
                                    <Button variant="danger" size="sm" onClick={() => onRemoveFromCart(item.id)}>
                                        <RemoveItem />
                                    </Button>
                                </div>
                            ))} */}
                            <div className='container-sm'>
                                <table className='table table-sm table-borderless'>
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Price</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.title}</td>
                                                <td>₹ {item.price}</td>
                                                <td>
                                                    <div className="RemoveIcon" onClick={() => onRemoveFromCart(item.id)}>
                                                        <RemoveItem />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table></div>
                            <div className='cartTotal'>Cart Total: ₹ {calculateTotal()}</div>
                        </>
                    ) : (
                        <div>Your cart is empty.</div>
                    )}
                </Offcanvas.Body>
            </Offcanvas >
        </>
    );
};

export default ShoppingCart;
