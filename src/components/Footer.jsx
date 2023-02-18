import React from 'react'
import { navLinks } from '../constants'
import facebook from '../assets/sliderImage/facebook_small.svg'
import facebook2 from '../assets/sliderImage/facebook_large.svg'

const Footer = () => {
  return (
    <div className='footer__container flex flex-col justify-center items-center p-20 bg-gray-gradient'>
      <div className='footer__content flex flex-col justify-center items-center'>
        <ul className='list-none flex flex-col justify-between items-center navbar text-white mx-20 py-5'>
          {navLinks.map((item, index) => (
            <li key={index.id} className='py-1 hover:text-green-400'>
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>

        <div className='links__icon-container flex gap-3'>
            <img className='fill-white w-10 h-auto' src={facebook} alt="" />
            <img className='fill-white w-10 h-auto' src={facebook} alt="" />
            <img className='fill-white w-10 h-auto' src={facebook} alt="" />
        </div>

      </div>

      <span className='text-gray-400 py-10'>Alright reserved...@2023</span>


    </div>
  )
}

export default Footer