import { data } from 'autoprefixer';
import LoginLogoutLink from './LoginLogoutLink';
import { useSession } from 'next-auth/react'
import React from 'react'

export default function VariableLinks() {

    const { data: session, status } = useSession()
    const [isLoggedin, setIsLoggedin] = React.useState(status === 'authenticated' ? true : false)

    React.useEffect(() => {
        setIsLoggedin(status === 'authenticated' ? true : false)
    }, [session])
    

    return (
        <>
            <a href='/user'><li className={isLoggedin ? "p-4 border-b border-gray-300" : "p-4 hidden"}>Dashboard</li></a>
            <LoginLogoutLink isLoggedin={isLoggedin} />
        </>
    ) 
}