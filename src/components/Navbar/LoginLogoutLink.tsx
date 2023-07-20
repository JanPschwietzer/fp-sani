import { signOut } from 'next-auth/react';
import React from 'react'

interface Props {
    isLoggedin: boolean
}

export default function LoginLogoutLink({isLoggedin}: Props) {

    if (!isLoggedin)
    {
        return (
            <a href="/user" ><li className='p-4 m-auto'>Einloggen</li></a>
        )
    }
    else
    {
        return (
            <a className='hover:cursor-pointer' onClick={() => signOut({redirect: true, callbackUrl: "/user"})} ><li className='p-4 m-auto'>Ausloggen</li></a>
        )
    }
        
}