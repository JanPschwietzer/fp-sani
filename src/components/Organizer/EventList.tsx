"use client"
import Image from 'next/image'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { GrFormDown, GrFormNext, GrFormPrevious } from 'react-icons/gr'

function EventList({veranstaltungen}: {veranstaltungen: any[]}) {

    const numEntries = 5

    const [page, setPage] = React.useState(1)
    const [entries, setEntries] = React.useState(veranstaltungen.sort((a, b) => a.startDatum.getTime() - b.startDatum.getTime()).slice((page-1)*numEntries, page*numEntries))
    const maxPage = Math.ceil(veranstaltungen.length/numEntries)

    React.useEffect(() => {
        setEntries(veranstaltungen.slice((page-1)*numEntries, page*numEntries))
    }, [page])

  return (
    <div className='items-center align-middle'>
        <div className="m-auto rounded-md p-2 mb-5 mx-10 grid grid-cols-11 items-center">
        <div></div>
        <div className='md:text-xl col-span-5 flex gap-1'>
            <h2>Name</h2>
            <GrFormDown size={25} />
        </div>
        <div className='col-span-2 flex gap-1'>
            <p>Start</p>
            <GrFormDown size={25} />
        </div>
        <div className='col-span-2 text-gray-500 hidden md:flex'>
            <p>Ende</p>
            <GrFormDown size={25} />
        </div>
        <p className='col-span-1'></p>
        </div>
        {
            entries && entries.map((veranstaltung) => {
                    return (
                        <div className="m-auto border-2 border-gray-100 rounded-md p-2 mb-5 mx-10 grid grid-cols-11 gap-1 items-center">
                            <Image src={veranstaltung.bild ? veranstaltung.bild : "/img/placeholder.jpg"} alt={veranstaltung.name} width={50} height={50} />
                                <h2 className='md:text-xl col-span-5'>{veranstaltung.name}</h2>
                                <p className='text-gray-500 col-span-4 md:col-span-2'>{veranstaltung.startDatum.toLocaleString().slice(0, -3)}</p>
                                <p className='text-gray-500 col-span-2 hidden md:flex'>{veranstaltung.endDatum.toLocaleString().slice(0, -3)}</p>
                                <a href={"/organizer/" + veranstaltung.id} className='col-span-1 flex justify-end'><FaEdit size={25} /></a>
                        </div>
                    )
                })
        }
        <div className="m-auto rounded-md p-2 mb-5 mx-10 flex justify-between">
            <div className='grid grid-cols-3 w-24'>
                <button className='col-span-1 flex justify-end'><GrFormPrevious size={25} onClick={() => page > 1 ? setPage(page - 1) : null} /></button>
                <input className='flex justify-center col-span-1 text-center' type='text' min='1' onChange={(e) => {setPage(Number(e.target.value))}} value={page} max={Math.ceil(maxPage)} />
                <button className='col-span-1 flex justify-start' onClick={() => page < Math.ceil(maxPage) ? setPage(page + 1) : null}><GrFormNext size={25} /></button>
            </div>
            <p className='col-span-9 flex justify-end'>Seite {page} von {Math.ceil(maxPage)}</p>
        </div>
    </div>
  )
}

export default EventList