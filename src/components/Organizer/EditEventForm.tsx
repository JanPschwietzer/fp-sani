"use client"
import React from 'react'
import { toast } from 'react-toastify'
import UploadImage from '../UploadButton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'



function EditEventForm({eventData}: {eventData: Veranstaltung}) {

    const router = useRouter()

    function editEvent(e: any, eventData: Veranstaltung) {
        e.preventDefault()
        if (eventData) {
            fetch('/api/organizer/event', {
              method: 'PUT',
              body: JSON.stringify(eventData),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((res) => {
              if (res.status === 200) {
                toast('Ihre Daten wurden erfolgreich gespeichert.', {
                  type: 'success',
                  theme: 'colored'
                })
                res.json().then((data) => {
                    router.push('/organizer/' + data.id)
                })
              }
              else {
                toast('Ihre Daten konnten nicht gespeichert werden.', {
                  type: 'error',
                  theme: 'colored'
                })
              }
            })
        }
        else {
            toast('Ihre Daten konnten nicht gespeichert werden.', {
                type: 'error',
                theme: 'colored'
            })
        }
      }

    function setImageUrl(url: string) {
        setData({...data, bild: url})
    }

    function deleteEvent(e: any, id: string) {
        e.preventDefault()
        fetch('/api/organizer/event', {
            method: 'DELETE',
            body: JSON.stringify({id: id}),
            headers: {
              'Content-Type': 'application/json'
            }
            }).then((res) => {
            if (res.status === 200) {
                toast('Ihre Veranstaltung wurde erfolgreich gelöscht.', {
                type: 'success',
                theme: 'colored'
                })
                res.json().then((data) => {
                    router.push('/organizer')
                })
            }
            else {
                toast('Ihre Veranstaltung konnte nicht gelöscht werden.', {
                type: 'error',
                theme: 'colored'
                })
            }
        })
    }

    const [data, setData] = React.useState(eventData)

    return (
        <div className='grid grid-cols-2'>
            <form onSubmit={(e) => {editEvent(e, data as any)}} className='flex flex-col gap-6'>
                <div className='w-full grid gap-4 grid-cols-4 px-2'>
                    <p className='col-span-4 text-center italic'>Veranstaltungsdaten</p>
                    <input
                        value={data?.name}
                        type='text'
                        placeholder='Name der Veranstaltung'
                        className="p-3 border col-span-4 border-gray-300 rounded-md drop-shadow-md"
                        onChange={(e) => {setData({...data, name: e.target.value})}}
                    />
                    <textarea
                        value={data?.beschreibung}
                        placeholder='Beschreibung der Veranstaltung'
                        className="p-3 border col-span-4 border-gray-300 rounded-md drop-shadow-md"
                        onChange={(e) => {setData({...data, beschreibung: e.target.value})}}
                    />
                    <p className='col-span-2 flex items-center'>von:</p>
                    <input
                        defaultValue={data?.startDatum.toISOString().slice(0, 16)}
                        type='datetime-local'
                        className="p-3 border col-span-2 border-gray-300 rounded-md drop-shadow-md"
                        onChange={(e) => {setData({...data, startDatum: new Date(e.target.value)})}}
                    />
                    <p className='col-span-2 flex items-center'>bis:</p>
                    <input
                        defaultValue={data?.endDatum.toISOString().slice(0, 16)}
                        type='datetime-local'
                        className="p-3 border col-span-2 border-gray-300 rounded-md drop-shadow-md"
                        onChange={(e) => {setData({...data, endDatum: new Date(e.target.value)})}}
                    />
                    <input
                        value={data?.strasse}
                        type='text'
                        placeholder='Straße'
                        className="p-3 border col-span-3 border-gray-300 rounded-md drop-shadow-md"
                        onChange={(e) => {setData({...data, strasse: e.target.value})}}
                    />
                    <input
                        value={data?.hausnummer}
                        type='text'
                        placeholder='Hausnummer'
                        className="p-3 border col-span-1 border-gray-300 rounded-md drop-shadow-md"
                        onChange={(e) => {setData({...data, hausnummer: e.target.value})}}
                    />
                    <input
                        value={data?.plz}
                        type='text'
                        placeholder='Postleitzahl'
                        className="p-3 border col-span-2 border-gray-300 rounded-md drop-shadow-md"
                        onChange={(e) => {setData({...data, plz: e.target.value})}}
                    />
                    <input
                        value={data?.ort}
                        type='text'
                        placeholder='Stadt'
                        className="p-3 border col-span-2 border-gray-300 rounded-md drop-shadow-md"
                        onChange={(e) => {setData({...data, ort: e.target.value})}}
                    />
                    <input
                        value={data?.land}
                        type='text'
                        placeholder='Land'
                        className="p-3 border col-span-4 border-gray-300 rounded-md drop-shadow-md"
                        onChange={(e) => {setData({...data, land: e.target.value})}}
                    />
                    <div className='col-span-4 flex items-center gap-3'>
                        <input
                            checked={data?.veroeffentlicht}
                            type='checkbox'
                            className="p-3 border col-span-4 border-gray-300 rounded-md drop-shadow-md"
                            onChange={(e) => {setData({...data, veroeffentlicht: e.target.checked})}}
                        />
                        <p className='col-span-4 flex items-center'>Veröffentlicht</p>
                    </div>
                </div>
                <div className='w-full grid gap-4 grid-cols-2 px-2'>
                    <button type="submit"
                        className='bg-[#2BA84A] hover:bg-[#248232] drop-shadow-xl border border-black text-white w-full rounded-md font-medium mx-auto px-6 py-3 z-[0]'>
                        Speichern
                    </button>
                    <button type="button"
                        onClick={(e) => {deleteEvent(e, data?.id as string)}}
                        className='bg-[#ffffff] hover:bg-[#ff3030] drop-shadow-xl border border-black text-gray-500 hover:text-white w-full rounded-md font-medium mx-auto px-6 py-3 z-[0]'>
                        Veranstaltung löschen
                    </button>
                </div>
            </form>
            <div className='p-3 grid gap-4'>
                <div className='h-[250px]'><UploadImage setImageUrl={setImageUrl}/></div>
                {data?.bild ? <Image src={data.bild} alt='Veranstaltungsbild' width={400} height={400} className='w-full h-full max-h-[400px] object-contain'/> :
                <Image src="/img/placeholder.jpg" alt='Veranstaltungsbild' width={400} height={400} className='w-full h-full max-h-[400px] object-contain'/>}    
            </div>
        </div>
    )
}

export default EditEventForm