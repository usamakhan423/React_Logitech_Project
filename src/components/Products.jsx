import React from "react";
import image_1 from "../assets/sliderImage/product_image-1.png";
import image_2 from "../assets/sliderImage/product_image-2.png";
import image_3 from "../assets/sliderImage/product_image-3.png";
import image_4 from "../assets/sliderImage/product_image-4.png";

import { productContent } from "../constants";

import styles from "../style";

const Products = () => {
  return (
    <div className="product__conainer flex justify-center items-center flex-col bg-gray-gradient p-20">
      <h1 className={`${styles.heading2} text-center`}>Products</h1>

      <div className="content__container w-full flex  justify-between items-center py-10 px-40 gap-2 ">
        <div className="content__section">
          <h3 className="text-white text-3xl text-bold py-2">
            15 Programmble Controls
          </h3>
          <p className="w-96 text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            veniam aut fugit! Ipsam laboriosam dignissimos totam aliquam laborum
            dolores voluptatum impedit rerum quibusdam nulla distinctio ipsum,
            fugiat nam amet ad. Maxime assumenda laborum voluptates quam in
            nostrum temporibus ea. Repudiandae.
          </p>
        </div>

        <div className="w-1 h-40 bg-green-400"></div>

        <div className="image__container">
          <img src={image_3} alt="mouse" className="w-60 h-auto" />
        </div>
      </div>
      <div className="content__container w-full flex  justify-between items-center py-10 px-40 gap-2 ">
        <div className="content__section">
          <h3 className="text-white text-3xl text-bold py-2 w-96">
            Dual Connectivity with lightspeed
          </h3>
          <p className="w-96 text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            veniam aut fugit! Ipsam laboriosam dignissimos totam aliquam laborum
            dolores voluptatum impedit rerum quibusdam nulla distinctio ipsum,
            fugiat nam amet ad. Maxime assumenda laborum voluptates quam in
            nostrum temporibus ea. Repudiandae.
          </p>
        </div>

        <div className="w-1 h-40 bg-green-400"></div>

        <div className="image__container">
          <img src={image_4} alt="mouse" className="w-80 h-auto" />
        </div>
      </div>
      <div className="content__container w-full flex  justify-between items-center py-10 px-40 gap-2 ">
        <div className="content__section">
          <h3 className="text-white text-3xl text-bold py-2">
            Hero 16k sensor
          </h3>
          <p className="w-96 text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            veniam aut fugit! Ipsam laboriosam dignissimos totam aliquam laborum
            dolores voluptatum impedit rerum quibusdam nulla distinctio ipsum,
            fugiat nam amet ad. Maxime assumenda laborum voluptates quam in
            nostrum temporibus ea. Repudiandae.
          </p>
        </div>

        <div className="w-1 h-40 bg-green-400"></div>

        <div className="image__container">
          <img src={image_1} alt="mouse" className="w-60 h-auto" />
        </div>
      </div>
      <div className="content__container w-full flex  justify-between items-center py-10 px-40 gap-2 ">
        <div className="content__section">
          <h3 className="text-white text-3xl text-bold py-2">
          Spin ratchet, Switch
          </h3>
          <p className="w-96 text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            veniam aut fugit! Ipsam laboriosam dignissimos totam aliquam laborum
            dolores voluptatum impedit rerum quibusdam nulla distinctio ipsum,
            fugiat nam amet ad. Maxime assumenda laborum voluptates quam in
            nostrum temporibus ea. Repudiandae.
          </p>
        </div>

        <div className="w-1 h-40 bg-green-400"></div>

        <div className="image__container">
          <img src={image_2} alt="mouse" className="w-60 h-auto" />
        </div>
      </div>
      <div className="button">
          <button className='border-2 border-green-400 py-2 px-12 rounded-full text-green-500 text-bold text-xl'>
                  Buy Now
            </button>
      </div>
    </div>
  );
};

export default Products;
