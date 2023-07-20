import SignInPage from '@/components/Auth/SigninPage'
import React from 'react'
import { Session, getServerSession } from "next-auth"
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import prisma from '@/lib/prismadb'
import { MdSettings } from 'react-icons/md'
import { redirect } from 'next/navigation'

async function UserPage() {

	const session: Session = await getServerSession(authOptions as any) as Session

	if (!session) return <SignInPage />
	
	const data = await prisma.user.findFirst({
		where: { email: session.user?.email },
		include: { veranstalter: true }
	}).then((data) => {return data})

	if (session && !data?.veranstalter) {
		return (
		<div className='max-w-[1280px] mt-10 h-full mx-auto grid md:grid-cols-6 justify-center align-middle'>
			<h1 className='text-2xl text-center col-span-3 mb-5 md:mb-0'>Willkommen <span className='font-semibold'>{data?.vorname} {data?.nachname}!</span></h1>
			<div className='col-span-2 flex items-center md:justify-end'></div>
			<div className='flex items-center justify-center'>
				<a href="/user/settings" title='Einstellungen'><MdSettings className='text-2xl m-auto' /></a>
			</div>
		</div>
		)
	}
	else if (session && data?.veranstalter) {
		redirect('/organizer')
	}
}

export default UserPage