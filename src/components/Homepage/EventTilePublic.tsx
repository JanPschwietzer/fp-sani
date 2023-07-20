"use client"
import React from 'react'
import Image from 'next/image'

function EventTilePublic({veranstaltung}: {veranstaltung: Veranstaltung}) {
  return (
    <div className='border-2 border-gray-100 rounded-md p-5 m-2'>
        <Image src={veranstaltung.bild ? veranstaltung.bild : "/img/placeholder.jpg"} alt={veranstaltung.name} width={350} height={400} />
        <div className='flex flex-col mt-2'>
            <h1 className='text-lg'>{veranstaltung.name.length > 35 ? veranstaltung.name.substring(0, 34) : veranstaltung.name}</h1>
            <p className='text-gray-500 text-md'>{veranstaltung.ort.length > 40 ? veranstaltung.ort.substring(0, 39) : veranstaltung.ort}</p>
        </div>
        <div className='flex flex-col'>
            <p className='text-gray-500 text-md'>{new Date(veranstaltung.startDatum).toLocaleString('de-DE').slice(0,-3)} Uhr</p>
        </div>
    </div>
  )
}

export default EventTilePublic