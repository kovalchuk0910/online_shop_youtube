import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style.css";

export default function Products() {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    const prodcuts = selector.products;
    const cartProducts = selector.cartProducts;

    function addToCart(id) {
        let isInCart = false;
        cartProducts.forEach(el => {
            if(id === el.id) isInCart = true;
        })

        if(!isInCart) {
            dispatch({type: "ADD_TO_CART", payload: prodcuts.find((product) => id === product.id)})
        }
        alert("Product added to cart :)")
    }

    return(
        <div className="productsList">
            {prodcuts.map(item => 
                <div className="product" key={item.id}>
                    <img src={item.image} alt="productImg" />
                    <h3>{item.name}</h3>
                    <span>Color: {item.color}</span>

                    <div className="priceBlock">
                        <span className="productPrice">{item.price}$</span>
                        <button onClick={() => addToCart(item.id)}>BUY</button>
                    </div>
                    
                </div>
            )}
        </div>
    )
}