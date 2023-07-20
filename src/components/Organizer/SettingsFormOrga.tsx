"use client"
import React from 'react'
import { toast } from 'react-toastify'



function SettingsFormOrga({userData}: {userData:Veranstalter}) {

    function setAdresse(e: any, adressData: Veranstalter) {
        e.preventDefault()
        if (adressData) {
            fetch('/api/organizer', {
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
            veranstalter: {
                name: userData?.veranstalter?.name,
                username: userData?.veranstalter?.username,
                beschreibung: userData?.veranstalter?.beschreibung,
                website: userData?.veranstalter?.website,
                email: userData?.veranstalter?.email,
                telefon: userData?.veranstalter?.telefon,
                instagramLink: userData?.veranstalter?.instagramLink,
                facebookLink: userData?.veranstalter?.facebookLink,
                agbLink: userData?.veranstalter?.agbLink,
                authCode: userData?.veranstalter?.authCode,
                iban: userData?.veranstalter?.iban,
                bic: userData?.veranstalter?.bic,
                bank: userData?.veranstalter?.bank,
                kontoinhaber: userData?.veranstalter?.kontoinhaber
            }

        }
    )

    function resetData() {
        setData(userData)
    }

    return (
        <form onSubmit={(e) => {setAdresse(e, data)}} className='flex flex-col gap-6'>
            <div className='w-full grid gap-4 grid-cols-4 px-2'>
                <p className='col-span-4 text-center italic'>Veranstalterdaten</p>
                <input
                    value={data?.veranstalter?.name}
                    type='text'
                    placeholder='Anzeigename'
                    className="p-3 border col-span-4 border-gray-300 rounded-md drop-shadow-md"
                    onChange={(e) => {setData({...data, veranstalter: {...data.veranstalter, name: e.target.value}})}}
                />
                <input
                    value={data?.veranstalter?.username}
                    type='text'
                    placeholder='Username'
                    className="p-3 border col-span-4 border-gray-300 rounded-md drop-shadow-md"
                    onChange={(e) => {setData({...data, veranstalter: {...data.veranstalter, username: e.target.value}})}}
                />
                <textarea
                    value={data?.veranstalter?.beschreibung}
                    placeholder='Beschreibung'
                    className="p-3 border col-span-4 border-gray-300 rounded-md drop-shadow-md"
                    onChange={(e) => {setData({...data, veranstalter: {...data.veranstalter, beschreibung: e.target.value}})}}
                />
                <input
                    value={data?.veranstalter?.website}
                    type='text'
                    placeholder='Website'
                    className="p-3 border col-span-4 border-gray-300 rounded-md drop-shadow-md"
                    onChange={(e) => {setData({...data, veranstalter: {...data.veranstalter, website: e.target.value}})}}
                />
                <input
                    value={data?.veranstalter?.email}
                    type='text'
                    placeholder='Kontakt E-Mail'
                    className="p-3 border col-span-4 border-gray-300 rounded-md drop-shadow-md"
                    onChange={(e) => {setData({...data, veranstalter: {...data.veranstalter, email: e.target.value}})}}
                />
                <input
                    value={data?.veranstalter?.telefon}
                    type='text'
                    placeholder='Kontakt Telefon'
                    className="p-3 border col-span-2 border-gray-300 rounded-md drop-shadow-md"
                    onChange={(e) => {setData({...data, veranstalter: {...data.veranstalter, telefon: e.target.value}})}}
                />
                <input
                    value={data?.veranstalter?.authCode}
                    type='password'
                    placeholder='Auth Code'
                    className="p-3 border col-span-2 border-gray-300 rounded-md drop-shadow-md"
                    onChange={(e) => {setData({...data, veranstalter: {...data.veranstalter, authCode: e.target.value}})}}
                />
                <input
                    value={data?.veranstalter?.instagramLink}
                    type='text'
                    placeholder='Instagram Link'
                    className="p-3 border col-span-4 border-gray-300 rounded-md drop-shadow-md"
                    onChange={(e) => {setData({...data, veranstalter: {...data.veranstalter, instagramLink: e.target.value}})}}
                />
                <input
                    value={data?.veranstalter?.facebookLink}
                    type='text'
                    placeholder='Facebook Link'
                    className="p-3 border col-span-4 border-gray-300 rounded-md drop-shadow-md"
                    onChange={(e) => {setData({...data, veranstalter: {...data.veranstalter, facebookLink: e.target.value}})}}
                />
                <input
                    value={data?.veranstalter?.agbLink}
                    type='text'
                    placeholder='AGB Link'
                    className="p-3 border col-span-4 border-gray-300 rounded-md drop-shadow-md"
                    onChange={(e) => {setData({...data, veranstalter: {...data.veranstalter, agbLink: e.target.value}})}}
                />
                <input
                    value={data?.veranstalter?.iban}
                    type='text'
                    placeholder='IBAN'
                    className="p-3 border col-span-4 border-gray-300 rounded-md drop-shadow-md"
                    onChange={(e) => {setData({...data, veranstalter: {...data.veranstalter, iban: e.target.value}})}}
                />
                <input
                    value={data?.veranstalter?.bic}
                    type='text'
                    placeholder='BIC'
                    className="p-3 border col-span-2 border-gray-300 rounded-md drop-shadow-md"
                    onChange={(e) => {setData({...data, veranstalter: {...data.veranstalter, bic: e.target.value}})}}
                />
                <input
                    value={data?.veranstalter?.bank}
                    type='text'
                    placeholder='Bank'
                    className="p-3 border col-span-2 border-gray-300 rounded-md drop-shadow-md"
                    onChange={(e) => {setData({...data, veranstalter: {...data.veranstalter, bank: e.target.value}})}}
                />
                <input
                    value={data?.veranstalter?.kontoinhaber}
                    type='text'
                    placeholder='Kontoinhaber'
                    className="p-3 border col-span-4 border-gray-300 rounded-md drop-shadow-md"
                    onChange={(e) => {setData({...data, veranstalter: {...data.veranstalter, kontoinhaber: e.target.value}})}}
                />
            <button type="submit"
                className='bg-[#2BA84A] col-span-2 hover:bg-[#248232] drop-shadow-xl border border-black text-white w-[300px] rounded-md font-medium mx-auto px-6 py-3 z-[0]'>
                Speichern
            </button>
            </div>

        </form>
    )
}

export default SettingsFormOrga