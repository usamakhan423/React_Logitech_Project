import React from 'react'
import { headerContent } from '../constants'
import { HeaderMouse } from '../assets';

const Header = () => {


  // const {title, description} = headerContent;
  return (
    <div className='p-20 w-full flex-1 font-poppins flex'>
      {headerContent.map((content, index) => (
        <>
          <div className='left__content-container'>
            <h1 className={`text-5xl font-bold text-white`}>{content.title}</h1>
            <p className='text-xl font-bold text-white my-6'>{content.tagLine}</p>
            <p className='text-md text-white w-96 my-6'>{content.description}</p>

            <button className='border-2 border-green-400 py-3 px-6 rounded-full text-green-500'>
              Play Advance
            </button>
          </div>

          <div className='right__content-container'>
            <img
              src={HeaderMouse}
              alt="mouse"
              className='boxShadow'
            />
          </div>
        </>
      ))}
    </div>
  )
}

export default Header