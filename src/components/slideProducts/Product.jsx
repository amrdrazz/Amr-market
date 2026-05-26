// import React from 'react'

import { FaStar, FaRegHeart, FaShare } from "react-icons/fa6";
import { FaShoppingCart, FaStarHalfAlt, FaCheck } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";


function Product({item}) {

  const navigate = useNavigate()
  // console.log(item);

  const {cartItems, addToCart, addToFavorites, favorites, removeFromFav} = useContext(CartContext)

  

  const isInCart = cartItems.some(i => i.id == item.id)

  const handleAddToCart = () => {
    addToCart(item)
    toast.success(
      <div className="toast_wrapper">
        <img className="toast_img" src={item.images[0]} alt="" />
        <div className="toast_content">
          <strong>{item.title}</strong>
          <p>added to cart</p>
          <div>
            <button className="btn" onClick={() => {navigate('/cart')}}>View cart</button>
          </div>
        </div>
      </div>
      ,{duration: 3500}
    )
  }

  const isInFav = favorites.some(i => i.id === item.id)

  const handleAddToFav = () => {
    if(isInFav){
      removeFromFav(item.id)
      toast.error(`${item.title} removed from favorites`)
    }else{
      addToFavorites(item)
      toast.success(`${item.title} added to favorites`)
    }
  }
  
  
  return (
    <div className={`product ${isInCart ? 'in_cart' : ''}`}>
      <Link to={`/products/${item.id}`}>

        <span className="status_cart"><FaCheck /> in cart</span>
        <div className="img_product">
          <img src={item.images[0]} alt="" />
        </div>
        <p className="name_product">{item.title}</p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <p className="price"><span>$ {item.price}</span></p>
      </Link>
      <div className="icons">
        <span className="btn_addToCart" onClick={handleAddToCart}><FaShoppingCart /></span>
        <span className={`${isInFav ? 'in_fav' : ''}`} onClick={handleAddToFav}><FaRegHeart /></span>
        <span><FaShare /></span>
      </div>
    </div>
  )
}

export default Product
