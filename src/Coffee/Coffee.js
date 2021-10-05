import React from 'react';
import './Coffee.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCartPlus } from '@fortawesome/free-solid-svg-icons'



const coffeIcon = <FontAwesomeIcon icon={faCoffee} />
const cartIcon = <FontAwesomeIcon icon={faCartPlus} />


const Coffee = (props) => {
    const { name, personal_rating, price, img, calories, origin } = props.coffee;
    return (
        <div className="single-coffee">

            <img className="cart-img" src={img} alt="" />

            <h3>Coffee Name : {name}</h3>
            <p>Origin Country : {origin}</p>
            <p>Price : {price} <small>Tk</small></p>
            <p>calories : {calories}</p>
            <p>Personal Ratting: {personal_rating}</p>

            <button className="add-to-cart-btn" onClick={() => props.handleAddToCart(props.coffee)}> <span className='cart-icon'>{cartIcon}</span>  Add to cart</button>
            <hr />
            <div >

                <h4 style={{ lineHeight: '20px' }}>
                    <span className="coffee-icon">{coffeIcon}</span> Know more..
                </h4>

            </div>




        </div>
    );
};

export default Coffee;