import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../style.css";

export default function Header() {
    const selector = useSelector(state => state);

    return(
        <header id="header">
            <NavLink to="/products">
                <img className="siteLogo" src="https://img.icons8.com/bubbles/344/mac-os.png" alt="logo" />
            </NavLink>

            <form className="search">
                <input type="text" placeholder="Search"/>
                <button>Accept</button>
            </form>

            <div className="cartLink">
                <img src="https://img.icons8.com/bubbles/344/shopping-cart.png" alt="cartLogo" />
                <NavLink to="/cart">Cart</NavLink>
                <span>{selector.cartProducts.length}</span>
            </div>

        </header>
    )
}