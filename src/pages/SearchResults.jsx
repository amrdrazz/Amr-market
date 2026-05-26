// import React from 'react'

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import PageTransition from "../components/PageTransition"
import SlideProductLoading from "../components/slideProducts/SlideProductLoading"
import Product from "../components/slideProducts/Product"

function SearchResults() {

    const [results, setResults] = useState([])

    const [loading, setLoading] = useState(true)

    const query = new URLSearchParams(useLocation().search).get('query')

    useEffect(() => {
        const fetchResults = async () => {
            try{
                const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
                const data = await res.json();
                setResults(data.products || [])
            }catch(error){
                console.log('Search error: '+ error)
            }finally{
                setLoading(false)
            }
        }

        if (query){
            fetchResults()
        }
    },[query])
    



  return (
    <PageTransition>
      <div className="category_products">
        
        {loading ? (
          <SlideProductLoading />
        ) : (results.length > 0) ? (
            <div className="category_page">
            <div className="container">

                <div className="top_slide">
                <h2>Result for: {query}</h2>
                </div>

                <div className="products">
                {results.map((product,index) => (
                    <Product key={index} item={product} />
                ))}
                </div>
            </div>
            </div>
        ) : (
            <div className="container">
                <p>No results for: {query}</p>
            </div>
        )}
      </div>

    </PageTransition>
  )
}

export default SearchResults
