// import React from 'react'

import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

export default function CartProvider({children}) {

  const [favorites, setfavorites] = useState(() => {
    const savedFav = localStorage.getItem('favorites');
    return savedFav ? JSON.parse(savedFav) : []
  })


  const addToFavorites = (item) => {
    setfavorites((prev) => {
      console.log(prev);
      
      if(prev.length > 0 && prev.some(i => i.id === item.id)){
        return prev
      }
      return [...prev, item]
    })
  }

  const removeFromFav = (id) => {
    setfavorites((prev) => {
      if(prev.length === 1){
        return []
      }else{
        return prev.filter((i) => i.id !== id)
      }
    })
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  },[favorites])






  // Cart
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  },[cartItems])

  const increaseQuantity = (id) => {
    setCartItems((prev) => prev.map((item) => (
      item.id === id ? {...item, quantity: item.quantity+1} : item
    )))
  }

  const decreaseQuantity = (id) => {
    setCartItems((prev) => prev.map((item) => (
      item.id === id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item
    )))
  }

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, {...item, quantity: 1}])
  }

  return (
    <CartContext.Provider 
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        addToFavorites,
        favorites,
        removeFromFav
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

