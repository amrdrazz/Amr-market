import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './../../components/slideProducts/Product';

import './CategoryPage.css'
import SlideProductLoading from './../../components/slideProducts/SlideProductLoading';
import PageTransition from '../../components/PageTransition';

function CategoryPage() {

  const {category} = useParams()

  const [loading, setLoading] = useState(true)

  const [categoryProducts, setCategoryProducts] = useState([])

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
    .then(res => res.json())
    .then((data) => {
      setCategoryProducts(data)
    })
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))
  },[category])

  
    
  return (
    <PageTransition>
      <div className="category_products">
        
        {loading ? (
          <SlideProductLoading />
        ) : (
        <div className="category_page">
          <div className="container">

            <div className="top_slide">
              <h2>{category.replace('-',' ')}: {categoryProducts.limit}</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, porro.</p>
            </div>

            <div className="products">
              {categoryProducts.products.map((product,index) => (
                <Product key={index} item={product} />
              ))}
            </div>
          </div>
        </div>
        )}
      </div>

    </PageTransition>

  )
}

export default CategoryPage
