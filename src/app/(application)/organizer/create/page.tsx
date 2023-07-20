import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SignInPage from '@/components/Auth/SigninPage'
import { Session, getServerSession } from 'next-auth'
import React from 'react'
import CreateEventForm from '@/components/Organizer/CreateEventForm'

async function OrganizerSettingsPage() {

  const session: Session = await getServerSession(authOptions as any) as Session
  if (!session) return <SignInPage />

  return (
    <div className='w-full'>
		<div className='max-w-[1280px] mt-[96px] mx-auto w-full mb-[50px] md:mb-[200px] text-center'>
			<h1 className='my-5 text-2xl'>Veranstaltung anlegen</h1>
		<CreateEventForm />
		</div>
  	</div>
  )
}

export default OrganizerSettingsPage