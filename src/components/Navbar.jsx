import React from 'react'
import { useState } from 'react';

import { navLinks } from '../constants'
import styles from '../style'
import close from '../assets/sliderImage/close.svg';
import menu from '../assets/sliderImage/menu.svg';

const Navbar = () => {
  const [toggle, setToggle ] = useState(false)
  return (
    <div className='py-4 flex flex-row justify-between items-center w-full'>
        <div className='logo px-10 text-white'>
          <h1 className={`${styles.heading2}`}>logitech</h1>
        </div>

          <ul className='list-none flex justify-between items-center navbar text-white mx-20'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
               className={`font-poppins text-normal cursor-pointer hover:text-green-400 ${index === navLinks.length -1 ? 'mx-0' : 'mx-10'} text-[16px] mx-10`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className='sm:hidden flex flex-1 justify-end item-center'>
            <img src={toggle ? close : menu}
              className="w-[width: 24px] h-[height: 24px]"
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
    </div>
  )
}

export default Navbar