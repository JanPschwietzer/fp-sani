"use client"
import React from 'react'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import VariableLinks from './VariableLinks'

function NavbarMobile() {

    const [showNav, setShowNav] = useState(true)

    const handleShowNavClick = () => setShowNav(!showNav)

  return (
    <>
        <div onClick={handleShowNavClick} className='block md:hidden'>
            {showNav ? <AiOutlineMenu size={24} /> : <AiOutlineClose size={24} />}
        </div>
        <div className={showNav ?
            "z-[100] mt-24 ease-in-out duration-500 fixed left-[-100%] top-0 w-[60%] border-r border-r-gray-900 border-t border-t-gray-900 h-full bg-[#FCFFFC]" :
            "z-[100] drop-shadow-2xl mt-24 ease-in-out duration-500 fixed left-0 top-0 w-[60%] border-r border-r-gray-900 border-t border-t-gray-900 h-full bg-[#FCFFFC]"}>
            <ul className='border-b border-gray-300 uppercase'>
                <a href='/'><li className='p-4 border-b border-gray-300'>FAQ</li></a>
                <a href='/'><li className='p-4 border-b border-gray-300'>Blog</li></a>
                <a href='/pay'><li className='p-4 border-b border-gray-300'>Festpass Pay</li></a>
                <a href='/'><li className='p-4 border-b border-gray-300'>Kontakt</li></a>
                <VariableLinks />
            </ul>
        </div>
    </>
  )
}

export default NavbarMobile