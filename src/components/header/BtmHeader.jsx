// import React from 'react'

import { BiMenu } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";


function BtmHeader() {

  const location = useLocation();
  const [categories,setCategories] = useState([]);
  const [isCategoriesOpen,setIsCategoriesOpen] = useState(false)

  useEffect(() => {
    setIsCategoriesOpen(false)
  },[location.pathname])


  useEffect(()=>{
    fetch('https://dummyjson.com/products/categories')
    .then((res) => res.json())
    .then((data)=>{setCategories(data)})
  },[])



  

  return (
    <div className='btm_header'>
      <div className="container">
        <nav className="nav">


          <div className="category_nav">
            <div className="category_btn" onClick={()=>(setIsCategoriesOpen(!isCategoriesOpen))}>
              <BiMenu/>
              <p>Browse Categories</p>
              <IoMdArrowDropdown/>
            </div>

            <div className={`category_nav_list ${isCategoriesOpen && 'active'}`}>
              {categories.map((category)=>(
                <Link key={category.slug} to={`/category/${category.slug}`}>{category.name}</Link>
              ))}
            </div>
          </div>

        </nav>
        
          <ul className="nav_links">
              <li key='/' className={location.pathname === '/' ? 'active':''}>
                <Link to='/'>Home</Link>
              </li>
          </ul>

        <div className="sign_register">
          <Link to='/'><FaSignInAlt/></Link>
          <Link to='/'><FaUserPlus/></Link>
        </div>
      </div>
      
    </div>
  )
}

export default BtmHeader
