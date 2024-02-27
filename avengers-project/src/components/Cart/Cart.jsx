import React from 'react';

const Cart = ({ actor }) => {
    const { name } = actor;
    return (
        <div>
            <li>{name}</li>
        </div>
    );
};

export default Cart;