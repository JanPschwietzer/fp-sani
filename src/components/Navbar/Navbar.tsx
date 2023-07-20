import React from 'react'
import NavbarMobile from './NavbarMobile'
import VariableButton from './VariableButton'

function Navbar() {

  return (
    <div className='border-b border-gray-200'>
      <header className='flex justify-between items-center h-24 max-w-[1280px] mx-auto px-4'>
        <a href="/"><img src="/img/logo.svg" alt="FESTPASS" className='h-14 w-auto' /></a>
        <ul className='hidden md:flex align-middlev justify-center'>
          <li className='p-4 m-auto'><a href='/'>FAQ</a></li>
          <li className='p-4 m-auto'><a href='/'>Blog</a></li>
          <li className='p-4 m-auto'><a href='/pay'>Festpass Pay</a></li>
          <li className='p-4 m-auto'><a href='/'>Kontakt</a></li>
          <VariableButton />
        </ul>
        <NavbarMobile />
      </header>
    </div>
  )
}

export default Navbar