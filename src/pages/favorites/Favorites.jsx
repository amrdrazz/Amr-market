import { useContext } from 'react'
import { CartContext } from '../../components/context/CartContext'
import PageTransition from './../../components/PageTransition';
import Product from '../../components/slideProducts/Product';

function Favorites() {

    const {favorites} = useContext(CartContext)



  return (
    <PageTransition>
        <div className="category_products favorites">
            <div className="container">
                <div className="top_slide">
                    <h2>Your favorites</h2>
                </div>
                {favorites.length === 0 ? (
                    <h1>No favorites products</h1>
                ) : (
                    <div className="products">
                        {favorites.map((item, index) => (
                            <Product key={index} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    </PageTransition>
  )
}

export default Favorites
