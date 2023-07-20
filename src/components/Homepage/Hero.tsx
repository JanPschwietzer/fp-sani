import React from 'react'
import AnimatedText from "./AnimatedText"
export default function HeroComponent() {


  return (
    <div className=''>
        <div className='max-w-[600px] mt-[96px] mx-auto w-full mb-[50px] md:mb-[200px] text-center flex flex-col'>
            <p className='text-[#2BA84A] font-bold p-2'>So gut war Tickets verkaufen noch nie!</p>
            <h2 className='text-7xl uppercase font-bold p-4'><span className='text-[#248232]'>Fest</span>Pass</h2>
            <div className='font-bold text-4xl'>
            <AnimatedText className="text-xl"/>
            </div>
            <a href="/signup" className='mt-7'><button type='button' className='bg-[#2BA84A] drop-shadow-xl border border-black text-white w-[200px] rounded-md font-medium mx-auto px-6 py-3 z-[-1]'>Jetzt anmelden!</button></a>
        </div>
    </div>
  )
}