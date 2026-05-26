import { AnimatePresence } from "framer-motion";
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import TopHeader from "./components/header/TopHeader"
import BtmHeader from "./components/header/BtmHeader"
import Home from './pages/home/Home';
import ProductDetails from "./pages/productdetails/ProductDetails";
import Cart from './pages/cart/Cart';
import ScrollToTop from "./components/ScrollToTop";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import SearchResults from "./pages/SearchResults";
import Favorites from './pages/favorites/Favorites';

function App() {


  return (
    <>
    <header>
      <TopHeader/>
      <BtmHeader/>
    </header>

    <Toaster position="bottom-right" reverseOrder={false} toastOptions={{
      style:{
        background: '#e9e9e9',
        borderRadius: '5px',
        padding: '14px'
      }
    }} />

    <ScrollToTop />

    <AnimatePresence mode="wait">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="*" element={<h1>error 404 not founded</h1>} />
      </Routes>

    </AnimatePresence>


    
    </>
  )
}

export default App
