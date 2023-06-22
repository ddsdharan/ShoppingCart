import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Items from './ItemsList';

const ItemCards = ({ onAddToCart, cartItems = [] }) => {

    const isItemInCart = (itemId) => {
        return cartItems.some((item) => item.id === itemId);
    };

    return (
        <>
            <Row xs={2} md={3} lg={4} className="g-4">
                {Items.map((item) => (
                    <Col key={item.id}>
                        <Card className='card' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="http://via.placeholder.com/360x240" />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>Description: {item.description}</Card.Text>
                                <Card.Text>Item price: ₹ {item.price}</Card.Text>
                                <Button variant='secondary' size='md' disabled={isItemInCart(item.id)} onClick={() => onAddToCart(item)}>{isItemInCart(item.id) ? 'Added to Cart' : 'Add to Cart'}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default ItemCards;
