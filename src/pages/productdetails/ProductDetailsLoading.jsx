// import React from 'react'

import { FaShoppingCart } from "react-icons/fa"

import "./productDetails.css"

function ProductDetailsLoading() {
  return (
    <div className="loading_item">
      <div className="item_details">
        <div className="container">
            <div className="imgs_item skeltion"></div>

            <div className="details_item">

                <h5 className="loading_text_detailsItem skeltion"></h5>
                <h5 className="loading_text_detailsItem skeltion"></h5>
                <h5 className="loading_text_detailsItem skeltion"></h5>
                <h5 className="loading_text_detailsItem skeltion"></h5>
                <h5 className="loading_text_detailsItem skeltion"></h5>
                <h5 className="loading_text_detailsItem skeltion"></h5>

                <button className="btn">Add to cart <FaShoppingCart /></button>
            </div>

        </div>
        </div>
    </div>
  )
}

export default ProductDetailsLoading
