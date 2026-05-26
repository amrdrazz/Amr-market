// import React from 'react'

import { useEffect, useState } from 'react';
import HeroSlider from '../../components/HeroSlider'
import SlideProduct from '../../components/slideProducts/SlideProduct';

import "./home.css"
import SlideProductLoading from '../../components/slideProducts/SlideProductLoading';
import PageTransition from '../../components/PageTransition';

const categories = [
  "smartphones",
  "laptops",
  "mens-watches",
  "mobile-accessories",
  "tablets",
  "sports-accessories"
]

function Home() {

  const [products, setProducts] = useState({})

  const [loading, setLoading] = useState(true)


  useEffect(()=>{
    const fetchProducts = async ()=>{

      try {
        const results = await Promise.all(
          categories.map(async (category)=>{
            const res = await fetch(`https://dummyjson.com/products/category/${category}`);
            const data = await res.json();
            return {[category]: data.products}
          })
        )

        const productsData = Object.assign({}, ...results);
        setProducts(productsData)


      }catch (error) {
        console.log("Error with fetching: " + error)
      }finally {
        setLoading(false)
      }


    }
    fetchProducts()
  },[])
  
  return (

    <PageTransition>
      <>
        <HeroSlider />

        {loading ? (
          (categories.map((category)=>(
            <SlideProductLoading key={category} />
          )))
        ) :
        (categories.map((category)=>(
          <SlideProduct 
            key={category}
            title={category.replace("-"," ")}
            data={products[category]}
          />
        )))
        
        
        }


      </>

    </PageTransition>
  )
}

export default Home;
