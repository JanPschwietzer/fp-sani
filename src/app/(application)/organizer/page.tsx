import SignInPage from '@/components/Auth/SigninPage'
import React from 'react'
import { Session, getServerSession } from "next-auth"
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import prisma from '@/lib/prismadb'
import OrganizerNavigation from '@/components/Organizer/Navigation'
import EventList from '@/components/Organizer/EventList'

async function OrganizerPage() {

  const session: Session = await getServerSession(authOptions as any) as Session
  if (!session) return <SignInPage />
  
    const data = await prisma.user.findFirst({
        where: {
            email: session.user?.email
        },
        include: {
            adress: true,
            veranstalter: true
        }

    }).then((data) => {return data})

    const veranstaltungen = await prisma.veranstaltungen.findMany({
        where: {
        	veranstalterId: data?.veranstalter?.id
        }
    }).then((data) => {return data})

  if (session && data?.veranstalter) {
        return (
        <div className='w-full h-full mx-auto flex justify-start align-middle'>
            <OrganizerNavigation />
            <div className='w-full max-w-[1300px] mx-auto lg:mr-[calc(50vw-550px)] grid grid-cols-6'>
                <h1 className='text-2xl text-center col-span-6 my-5 md:mb-0'>Willkommen <span className='font-semibold'>{data?.veranstalter.name}!</span></h1>                
                <div className='col-span-6 mt-10'>
                    <EventList veranstaltungen={veranstaltungen} />

                </div>
            </div>
        </div>
        )
    }
    else if (session && !data?.veranstalter) {
        return (
            <div className='max-w-[1280px] mt-10 h-full mx-auto grid md:grid-cols-6 justify-center align-middle'>
                <h1 className='text-2xl text-center col-span-3 mb-5 md:mb-0'>Du bist kein Veranstalter!</h1>
            </div>
        )
    }
    else {
        return <SignInPage />
    }
}

export default OrganizerPage