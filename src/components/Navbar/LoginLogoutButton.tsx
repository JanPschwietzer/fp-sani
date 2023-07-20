"use client"
import { signOut } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'

interface Props {
    isLoggedin: boolean
}

export default function LoginLogoutButton({isLoggedin}: Props) {

    if (!isLoggedin)
    {
        return (
            <a href="/user" ><button type='button' className='bg-[#2BA84A] hover:bg-[#248232] drop-shadow-md border border-black text-white rounded-md font-medium mx-auto px-5 py-2 z-[0]' >Einloggen</button></a>
        )
    }
    else
    {
        return (
            <button type='button' onClick={() => signOut({redirect: true, callbackUrl: "/user"})} className='bg-[#2BA84A] hover:bg-[#248232] drop-shadow-md border border-black text-white rounded-md font-medium mx-auto px-5 py-2 z-[0]' >Ausloggen</button>
        )
    }
}
