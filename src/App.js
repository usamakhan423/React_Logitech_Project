import React from 'react'
import { Purchase_Product, Slider, Navbar, Header, Footer, Products, Specification } from './components'
import styles from './style'
import './index.css';


const App = () => {
  return (
    <>
      <div className={`${styles.boxWidth} bg-discount-gradient paddingX `}>
        <div className={`${styles.boxWidth} flex flex-col`}>
          <Navbar />
          <Header />
        </div>
        <div className='purchase__container'>
          <div className='content__container'>
            <Purchase_Product />
          </div>
        </div>

        <div className='slider__container'>
          <div className='slider__media-container'>
            <Slider />
          </div>
        </div>

        <div className='products__container'>
          <div className='product__content-container'>
            <Products />
          </div>
        </div>

        <div className='products__container'>
          <div className='product__content-container'>
            <Specification />
          </div>
        </div>

        <div className="footer__container">
          <div className='footer__content-container'>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App