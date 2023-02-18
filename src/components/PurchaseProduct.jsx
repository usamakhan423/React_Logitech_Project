import React from 'react'
import { playSection } from '../constants'
import { ContentMouse  } from '../assets';



const Purchase_product = () => {

  return (
    <div className='p-20 w-full flex justify-between items-center font-poppins bg-gray-gradient --card-shadow bg-blue-gradient'>
    {playSection.map((content, index) => (
      <>
        <div className='right__content-container w-full'>
          <img
            src={ContentMouse}
            alt="mouse"
            className='boxShadow'
          />
        </div>
        <div className='left__content-container mx-20 w-full' >
          <h1 className={`text-4xl font-bold text-white` }>{content.title}</h1>
          <p className='text-md text-white w-full my-6'>{content.description}</p>

          <button className='border-2 border-green-400 py-2 px-16 font-semibold rounded-full text-green-500'>
            Buy
          </button>
        </div>
      </>
    ))}
  </div>
  )
}

export default Purchase_product;