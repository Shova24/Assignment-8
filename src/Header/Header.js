import React from 'react';
import logo from '../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">

            <div className="header-box">
                <img className="logo" src={logo} alt="" />
                <div>
                    <h3 className="slogan">Here I have created a site for assignment Eight. All the data are not actually correct, few I have collected from internet and few I have randomly. So don't take seriously to these data's.</h3>
                    <h1>Budget : {1000} TK</h1>
                </div>
            </div>
            <nav className="navbar">
                <a href="/organic-coffees">Organic Coffees</a>
                <a href="/featured-coffees">Featured Coffees</a>
                <a href="/more">More Coffees</a>
                <a href="/blog">Blog</a>
            </nav>



        </div>
    );
};

export default Header;