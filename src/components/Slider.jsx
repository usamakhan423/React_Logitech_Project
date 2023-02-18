import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '../style';

// Import Swiper styles
import 'swiper/css';
import { media } from '../constants';
import image_1 from '../assets/sliderImage/product_image-1.png';
import image_2 from '../assets/sliderImage/product_image-2.png';
import image_3 from '../assets/sliderImage/product_image-3.png';
import image_4 from '../assets/sliderImage/product_image-4.png';

const Slider = () => {
  return (
    <div className="slider__container  w-full flex flex-col justify-center items-center p-20">
      <h1 className={`text-white my-10 text-center ${styles.heading2}`}>SEE MORE DETAILS</h1>

      <div className="slider flex justify-between items-center  w-full">
        <Swiper
          className='text-white'
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img src={image_1} width="300" height="300" alt="" /></SwiperSlide>
          <SwiperSlide><img src={image_2} width="300" height="300" alt="" /></SwiperSlide>
          <SwiperSlide><img src={image_3} width="300" height="300" alt="" /></SwiperSlide>
          <SwiperSlide><img src={image_4} width="300" height="300" alt="" /></SwiperSlide>
          <SwiperSlide><img src={image_1} width="300" height="300" alt="" /></SwiperSlide>
          <SwiperSlide><img src={image_2} width="300" height="300" alt="" /></SwiperSlide>
          <SwiperSlide><img src={image_3} width="300" height="300" alt="" /></SwiperSlide>
          <SwiperSlide><img src={image_4} width="300" height="300" alt="" /></SwiperSlide>

        </Swiper>


      </div>

      <div className='slider__arrow-container flex gap-2'>
            <div className='div__1 w-5 h-1 bg-green-400 text-white rounded'>
            </div>
            <div className='div__1 w-5 h-1 bg-green-400 text-white rounded'>

            </div>
            <div className='div__1 w-5 h-1 bg-green-400 text-white rounded'>

            </div>
          </div>
    </div>
  )
}

// function Slide(){
//   return (
//   <div className='image__slider flex justify-between items-center'>
//     {media.map((img, index) => (
//       <div key={index.id} >
//         <img src={img.image} alt="mouse" />
//       </div>
//     ))}
//   </div>
//   )
// }
export default Slider
