import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SettingsFormUser from '@/components/Settings/SettingsFormUser'
import SignInPage from '@/components/Auth/SigninPage'
import { Session, getServerSession } from 'next-auth'
import React from 'react'
import SettingsFormOrga from '@/components/Organizer/SettingsFormOrga'
import client from '@/lib/prismadb'

async function OrganizerSettingsPage() {

  	const session: Session = await getServerSession(authOptions as any) as Session
  	if (!session) return <SignInPage />

	const data = await client.user.findFirst({
		where: {
		email: session.user?.email
		},
		include: {
		adress: true,
		veranstalter: true
		}
	}).then((data) => { return data })
  

	return (
		<div className='w-full'>
			<div className='max-w-[1280px] mt-[96px] mx-auto w-full mb-[50px] md:mb-[200px] text-center grid grid-cols-2'>
				<h1 className='my-5 text-2xl col-span-2'>Einstellungen</h1>
				<SettingsFormUser userData={data! as any} />
				<SettingsFormOrga userData={data! as any} />
			</div>
		</div>
	)
}

export default OrganizerSettingsPage