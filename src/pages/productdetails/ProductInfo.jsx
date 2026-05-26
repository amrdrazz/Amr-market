// import React from 'react'

import { useContext } from 'react';
import { FaStarHalfAlt, FaShoppingCart, FaRegHeart, FaShare, FaStar } from 'react-icons/fa';
import { CartContext } from '../../components/context/CartContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function ProductInfo({product}) {

    const navigate = useNavigate()
    
    const {cartItems, addToCart, addToFavorites, favorites, removeFromFav} = useContext(CartContext)
    
    const isInCart = cartItems.some(i => i.id == product.id)

    const handleAddToCart = () => {
    addToCart(product)
    toast.success(
      <div className="toast_wrapper">
        <img className="toast_img" src={product.images[0]} alt="" />
        <div className="toast_content">
          <strong>{product.title}</strong>
          <p>added to cart</p>
          <div>
            <button className="btn" onClick={() => {navigate('/cart')}}>View cart</button>
          </div>
        </div>
      </div>
      ,{duration: 3500}
    )
  }

  const isInFav = favorites.some(i => i.id === product.id)

  const handleAddToFav = () => {
    if(isInFav){
      removeFromFav(product.id)
      toast.error(`${product.title} removed from favorites`)
    }else{
      addToFavorites(product)
      toast.success(`${product.title} added to favorites`)
    }
  }

  return (
    <div className={`details_item ${isInCart && 'in_cart'}`}>
        <h1 className="name">{product.title}</h1>
        <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
        </div>
        <p className="price">$ {product.price}</p>
        <h5>Availability: <span>{product.availabilityStatus}</span></h5>
        <h5>Brand: <span>{product.brand}</span></h5>
        <p className="desc">{product.description}</p>
        <h5 className="stock"><span>Hurry up! Only {product.stock} products in stock.</span></h5>

        <button onClick={handleAddToCart} className="btn">
            {!isInCart ? 'Add to cart' : 'Item in cart' }
            <FaShoppingCart />
        </button>

        <div className="icons">
        <span className={isInFav ? 'in_fav' : ''} onClick={handleAddToFav}><FaRegHeart /></span>
        <span><FaShare /></span>
        </div>
    </div>
  )
}

export default ProductInfo
