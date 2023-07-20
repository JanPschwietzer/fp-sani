import React from 'react'
import { GrAppleAppStore, GrGooglePlay } from 'react-icons/gr'

export default function ScannerApp() {
  return (
    <div className='max-w-[1280px] mx-auto grid md:grid-cols-2'>
        <img src='./img/scan.jpg' alt="Eine Vektorgrafik zum visualisieren der Analytics." />
        <div className='h-full flex items-center'>
            <div>
                <p className='text-center uppercase text-sm text-[#248232]'>
                    einfach Scannen
                </p>
                <h2 className='text-center text-2xl py-3'>
                    Schneller und einfacher Einlass.
                </h2>
                <p className='px-10 text-justify'> 
                    Mit unserer offiziellen App können Sie die Tickets Ihrer Besucher schnell und einfach scannen.
                    Natürlich können Sie die App auf mehreren Geräten gleichzeitig verwenden, um den Einlass zu beschleunigen.
                    Die App funktioniert auch offline und synchronisiert sich sobald sie Internet findet, sodass Sie sich keine Sorgen um eine schlechte Internetverbindung machen müssen.
                </p>
                <div className='grid grid-cols-2 my-4 align-middle'>
                <a href=''><GrAppleAppStore className='text-4xl ml-auto mr-2' /></a>
                <a href=''><GrGooglePlay className='text-4xl mr-auto ml-2' /></a>
                </div>
            </div>
        </div>
    </div>
  )
}