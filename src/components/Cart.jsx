import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style.css";

export default function Cart() {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    const cartProducts = selector.cartProducts;

    const removeItem = (id) => {
        dispatch({type: "REMOVE_FROM_CART", payload: id})
    }

    function incrementProduct(id) {
        dispatch({type: "INCREMENT_PRODUCT", payload: {id, increment: 1}})
    }

    function decrementProduct(id, inCart) {
        inCart <= 1 ? removeItem(id) : dispatch({type: "DECREMENT_PRODUCT", payload: {id, increment: 1}})
    }

    return(
        <div className="cart">
            {cartProducts.length > 0 ? cartProducts.map(item =>
                <div className="cartItem">
                    <div className="cartItemImg">
                        <img src={item.image} alt="cartItemImg"/>
                    </div>

                    <div className="cartItemInfo">
                        <h3>{item.name}</h3>
                        <span>Color: {item.color}</span>
                    </div>

                    <div className="cartItemQuantity">
                        <button onClick={() => incrementProduct(item.id)}>+</button>
                        <span>{item.inCart}</span>
                        <button onClick={() => decrementProduct(item.id, item.inCart)}>-</button>
                    </div>

                    <div className="cartItemPrice">
                        <h3>{item.price}$</h3>
                        <span>Total: {item.price * item.inCart}$</span>
                    </div>

                    <div className="removeCartItem">
                        <button onClick={() => removeItem(item.id)}>
                            <img src="https://img.icons8.com/color/344/delete-forever.png" alt="cartItemRemove" />
                        </button>
                    </div>
                    
                </div>
            ) : <h2>Cart is Empty</h2>}
        </div>
    )
}