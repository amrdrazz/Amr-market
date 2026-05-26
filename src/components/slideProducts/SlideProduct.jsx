// import React from 'react'

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';


import Product from './Product';

import "./slideProduct.css"

function SlideProduct({data, title}) {
  return (
    <div className='slide_products slide'>
      
      <div className="container">
        <div className="top_slide">
          <h2>{title}</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, porro.</p>
        </div>

        <Swiper 
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          navigation={true} 
          modules={[Navigation, Autoplay]} 
          breakpoints={{
            640:{
              slidesPerView: 2,
              spaceBetween: 20
            },
            768:{
              slidesPerView: 3,
              spaceBetween: 25
            },
            1150:{
              slidesPerView: 4,
              spaceBetween: 35
            },
            1460:{
              slidesPerView: 5,
              spaceBetween: 50
            }

          }}
          className="mySwiper"
        >

          {data.map((item)=>(
            <SwiperSlide> <Product key={item.id} item={item}/> </SwiperSlide>  
          ))}
        </Swiper>

        
      </div>
    </div>
  )
}

export default SlideProduct
