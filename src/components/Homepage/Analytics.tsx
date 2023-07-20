import React from 'react'

export default function Analytics() {
  return (
    <div className='max-w-[1280px] mx-auto grid md:grid-cols-2'>
        <img src='./img/laptop.jpg' alt="Eine Vektorgrafik zum visualisieren der Analytics." />
        <div className='h-full flex items-center'>
            <div>
                <p className='text-center uppercase text-sm text-[#248232]'>
                    unser Dashboard
                </p>
                <h2 className='text-center text-2xl py-3'>
                    Behalte die Kontrolle.
                </h2>
                <p className='px-10 text-justify'> 
                    Mit unserem innovativen Dashboard behalten Sie jederzeit den Überblick über ihre verkauften Tickets und Einnahmen.
                    Erhalten Sie detaillierte Statistiken, um den Erfolg Ihrer Veranstaltungen zu maximieren und
                    fundierte Geschäftsentscheidungen zu treffen.
                    Optimieren Sie Ihre Preisstrategie und nutzen Sie wertvolle Einblicke in das Kundenverhalten
                    für gezieltes Marketing.
                </p>
            </div>
        </div>
    </div>
  )
}