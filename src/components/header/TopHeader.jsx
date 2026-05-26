// import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import './header.css'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import SearchBox from './SearchBox';

function TopHeader() {

  const {cartItems, favorites} = useContext(CartContext)

  return (
    <div className='top_header'>
        <div className="container">
            <Link className="logo" to="/"><img src={logo} alt="logo" /></Link>

            <SearchBox />

            <div className="header_icons">
              <div className="icon">
                <Link to='/favorites'>
                  <FaRegHeart/>
                  <span className="count">{favorites.length}</span>
                </Link>
              </div>
              <div className="icon">
                <Link to='/cart'>
                  <FaCartShopping/>
                  <span className="count">{cartItems.length}</span>
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default TopHeader
