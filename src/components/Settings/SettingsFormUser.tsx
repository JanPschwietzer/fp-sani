"use client"
import React from 'react'
import { toast } from 'react-toastify'



function SettingsFormUser({userData}: {userData:Adresse}) {

    function setAdresse(e: any, adressData: Adresse) {
        e.preventDefault()
        if (adressData) {
            fetch('/api/user', {
              method: 'PUT',
              body: JSON.stringify(adressData),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((res) => {
              if (res.status === 200) {
                toast('Ihre Daten wurden erfolgreich gespeichert.', {
                  type: 'success',
                  theme: 'colored'
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
            toast('Ihre Daten konnten nicht gespeichert werden.2', {
                type: 'error',
                theme: 'colored'
            })
        }
      }

    const [data, setData] = React.useState(
        {
            id: userData?.id,
            email: userData?.email,
            vorname: userData?.vorname,
            nachname: userData?.nachname,
            adress: {
                street: userData?.adress?.street,
                streetNumber: userData?.adress?.streetNumber,
                zipCode: userData?.adress?.zipCode,
                city: userData?.adress?.city,
                country: userData?.adress?.country
            }
        }
    )

    return (
        <form onSubmit={(e) => {setAdresse(e, data)}} className='flex flex-col gap-6'>
            <div className='w-full grid gap-4 grid-cols-4'>
                <p className='col-span-4 text-center italic'>Ihre Daten</p>
                <input
                    value={data?.vorname}
                    autoComplete='given-name'
                    type='text'
                    placeholder='Vorname'
                    className="p-3 border col-span-2 border-gray-300 rounded-md drop-shadow-md"
                    onChange={(e) => {setData({...data, vorname: e.target.value})}}
                />
                <input
                    value={data?.nachname}
                    autoComplete='family-name'
                    type='text'
                    placeholder='Nachname'
                    className="p-3 border border-gray-300 rounded-md drop-shadow-md col-span-2"
                    onChange={(e) => {setData({...data, nachname: e.target.value})}}
                />
                <input
                    value={data?.email}
                    autoComplete='email'
                    disabled
                    title='E-Mail kann nicht geändert werden.'
                    type='email'
                    placeholder='E-Mail'
                    className="p-3 border border-gray-300 rounded-md drop-shadow-md col-span-4"
                    onChange={(e) => {setData({...data, email: e.target.value})}}
                />
                <input
                    value={data?.adress?.street}
                    autoComplete='street-adress name'
                    type='text'
                    placeholder='Straße'
                    className="p-3 border border-gray-300 rounded-md drop-shadow-md col-span-3"
                    onChange={(e) => {setData({...data, adress: {...data.adress, street: e.target.value}})}}
                />
                <input
                    value={data?.adress?.streetNumber}
                    autoComplete='street number'
                    type='text'
                    placeholder='Hausnummer'
                    className="p-3 border border-gray-300 rounded-md drop-shadow-md"
                    onChange={(e) => {setData({...data, adress: {...data.adress, streetNumber: e.target.value}})}}
                />
            </div>
            <div className='w-full grid gap-4 grid-cols-4'>
                <input
                    value={data?.adress?.zipCode}
                    autoComplete='postal-code'
                    type='text'
                    placeholder='PLZ'
                    className="p-3 border border-gray-300 rounded-md drop-shadow-md"
                    onChange={(e) => {setData({...data, adress: {...data.adress, zipCode: e.target.value}})}}
                />
                <input
                    value={data?.adress?.city}
                    autoComplete='home city'
                    type='text'
                    placeholder='Ort'
                    className="p-3 border border-gray-300 rounded-md drop-shadow-md col-span-3"
                    onChange={(e) => {setData({...data, adress: {...data.adress, city: e.target.value}})}}
                />
            </div>
            <input autoComplete='country-name'
                value={data?.adress.country}
                className="p-3 border border-gray-300 rounded-md drop-shadow-md"
                type="text"
                placeholder='Land'
                name="land"
                id="land"
                onChange={(e) => {setData({...data, adress: {...data.adress, country: e.target.value}})}}
            />
            <button type="submit"
                className='bg-[#2BA84A] hover:bg-[#248232] drop-shadow-xl border border-black text-white w-[300px] rounded-md font-medium mx-auto px-6 py-3 z-[0]'>
                Speichern
            </button>
        </form>
    )
}

export default SettingsFormUser