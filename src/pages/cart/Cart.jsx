// import React from 'react'

import { useContext } from "react"
import { CartContext } from "../../components/context/CartContext"

import { FaTrash } from "react-icons/fa";

import './cart.css'
import PageTransition from "../../components/PageTransition";


function Cart() {

  const {cartItems, increaseQuantity, decreaseQuantity, removeItem} = useContext(CartContext)

  

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  


  return (

    <PageTransition>
        <div className="checkout">
        <div className="orderSummary">
            <h1>Order Summary</h1>

            <div className="items">
                {cartItems.length === 0? (
                    <p>Your cart is empty</p>
                ) : (
                    cartItems.map((item,index) => (
                        <div key={index} className="item_cart">
                            <div className="img_name">
                                <div className="img_item">
                                    <img src={item.images[0]} alt="" />
                                </div>

                                <div className="content">
                                    <h4>{item.title}</h4>
                                    <p className="price_item">$ {item.price}</p>
                                    <div className="quantity_conrtol">
                                        <button onClick={() => {decreaseQuantity(item.id)}}>-</button>
                                        <span className="quantity">{item.quantity}</span>
                                        <button onClick={() => {increaseQuantity(item.id)}}>+</button>
                                    </div>
                                </div>

                            </div>
                            <button className="delete_icon" onClick={() => {removeItem(item.id)}}><FaTrash /></button>
                        </div>
                    ))
                )}
            </div>

            <div className="bottom_summary">
                <div className="shop_table">
                    <p>Total: </p>
                    <span className="total_checkout">$ {total.toFixed(2)}</span>
                </div>

                <div className="btn_div">
                    <button type="submit">Place order</button>
                </div>
            </div>
        </div>
        </div>
        
    </PageTransition>
  )
}

export default Cart
