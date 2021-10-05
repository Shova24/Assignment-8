import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Coffee from '../Coffee/Coffee';
import './Showbox.css'

const Showbox = () => {
    const [coffees, setCoffees] = useState([]);

    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCoffees(data))
    },
        []);


    const handleAddToCart = (coffee) => {
        const newCart = [...cart, coffee]
        setCart(newCart)

    }


    return (
        <div>

            <div className="main-container">

                <div className="coffees-container">


                    <div className="all-coffes">
                        {coffees.map(coffee => <Coffee key={coffee.key} coffee={coffee} handleAddToCart={handleAddToCart} ></Coffee>)}
                    </div>

                </div>


                <div className="cart-container">

                    <Cart cart={cart}></Cart>
                </div>


            </div>






        </div >


    );
};

export default Showbox;