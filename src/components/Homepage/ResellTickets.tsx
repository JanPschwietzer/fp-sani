import React from 'react'

export default function ResellTickets() {
  return (
    <div className='max-w-[1280px] my-20 mx-auto grid md:grid-cols-2'>
        <img src='./img/c2c.jpg' alt="Eine Vektorgrafik zum visualisieren der Analytics." className='md:hidden' />
        <div className='h-full flex items-center'>
            <div>
                <p className='text-center uppercase text-sm text-[#248232]'>
                    Schwarzmarkt adé
                </p>
                <h2 className='text-center text-2xl py-3'>
                    Das optionale schwarze Brett.
                </h2>
                <p className='px-10 text-justify'> 
                In unserem innovativen schwarzem Brett haben Ihre Besucher die Möglichkeit, ihre Tickets zu verkaufen,
                falls doch mal etwas dazwischen kommt. Als Veranstalter erhalten Sie 50% der Verkaufsgebühren,
                während wir dafür sorgen, dass Ihre Tickets nicht auf dem Schwarzmarkt landen. Ihre Kunden zahlen für den Verkauf dort eine Gebühr von 15%. <span className='italic'>Diese Option können Sie für jede Veranstaltung individuell aktivieren oder deaktivieren.</span>
                </p>
            </div>
        </div>
        <img src='./img/c2c.jpg' alt="Eine Vektorgrafik zum visualisieren der Analytics." className='hidden md:block m-auto' />
    </div>
  )
}