import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;

    let totalPrice = 0;


    for (const coffee of cart) {
        totalPrice = totalPrice + coffee.price;

    }

    return (
        <div className="cart-box">
            <h2>Coffees Added : {cart.length}</h2>
            {cart.map(coffe => <div className="added-coffees-area">
                <img className="added-coffees-image" src={coffe.img} alt="" />
                <h5>{coffe.name}</h5>
            </div>)}
            <h2>Total Price : {totalPrice.toFixed(2)} TK</h2>
            {/* <h2>Coffe Name : {coffeeName}</h2> */}
        </div>
    );
};

export default Cart;