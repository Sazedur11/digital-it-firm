import React, { Component } from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let name = '';
    for (const member of cart) {
        total = total + member.salary;
        name = name + '  ' + member.name
    }
    return (
        <div className='cart'>
            <h2>Total Salary</h2>
            <div className='cart-info'>
                <h4>Member: {props.cart.length}</h4>
                <p>Total: ${total}</p>
                <p>{name}</p>
                <button className='add-btn'>Contact Us</button>
            </div>
        </div>
    );
}

export default Cart;