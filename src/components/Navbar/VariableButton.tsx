import React from 'react';
import LoginLogoutButton from './LoginLogoutButton';
import { getServerSession } from "next-auth"
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function VariableButton() {

    const isLoggedin = await getServerSession(authOptions as any).then((session) => {
        if (session)
            return true
        return false
    })
    
    return (
        <>
            <li className={isLoggedin ? "p-4 m-auto" : "p-4 m-auto hidden"}><a href='/user'>Dashboard</a></li>
            <li className='px-4 m-auto'><LoginLogoutButton isLoggedin={isLoggedin} /></li>
        </>
    ) 
}