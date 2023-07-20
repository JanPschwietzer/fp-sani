import { GrFacebook, GrInstagram, GrYoutube } from 'react-icons/gr'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-full bg-[#040F0F] h[432px] md:h-[196px] text-[#FCFFFC] p-10'>
        <footer className='md:flex justify-between items-center max-w-[1280px] mx-auto px-4'>
            <div className='flex flex-col'>
                <a href="/"><img src="/img/logo_dark.svg" alt="FESTPASS" className='h-14 w-auto mb-5' /></a>
                <p className='text-sm text-[#2BA84A]'>©2023 FESTPASS UG</p>
                <p className='text-sm text-[#2BA84A]'>(haftungsbeschränkt)</p>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-sm'>FESTPASS UG</p>
                <p className='text-sm'>Bauerndobben 45</p>
                <p className='text-sm'>28239 Bremen</p>
                <p className='text-sm'>Deutschland</p>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-sm'>Telefon: +49 30 555 705 00</p>
                <p className='text-sm'>E-Mail: <a href='mailto:info@festpass.de'>info@festpass.de</a></p>
                <p className='text-sm'>Geschäftsführer: Jan Phillip Schwietzer</p>
                <p className='text-sm'>Handelsregister: Amtsgericht Bremen, HRB 15717</p>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-sm'>Folge uns auf:</p>
                <div className='flex gap-4'>
                    <a href='https://www.facebook.com/festpass.de/' target='_blank' rel='noreferrer'>
                        <GrFacebook size={16} />
                    </a>
                    <a href='https://www.instagram.com/festpass.de/' target='_blank' rel='noreferrer'>
                        <GrInstagram size={16} />
                    </a>
                    <a href='https://www.youtube.com/festpass' target='_blank' rel='noreferrer'>
                        <GrYoutube size={16} />
                    </a>
                </div>
            </div>
        </footer>
    </div>
  )
}