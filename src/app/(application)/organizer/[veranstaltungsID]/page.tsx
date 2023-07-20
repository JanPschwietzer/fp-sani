import EditEventForm from '@/components/Organizer/EditEventForm'
import OrganizerNavigation from '@/components/Organizer/Navigation'
import client from '@/lib/prismadb'
import React from 'react'

export default async function VeranstaltungsPage({ params }: { params: { veranstaltungsID: string } }) {

  const data = await client.veranstaltungen.findFirst({
    where: {
      	id: params.veranstaltungsID
    }
  }).then((data) => {return data})

  return (
    <div className='w-full h-full mx-auto flex justify-start align-middle'>
		<OrganizerNavigation />
		<div className='w-full max-w-[1300px] mx-auto lg:mr-[calc(50vw-550px)] grid grid-cols-6'>
			<h1 className='text-xl text-center col-span-6 my-5 md:mb-0'>Du bearbeitest <span className='font-semibold'>{data?.name}!</span></h1>                
			<div className='w-full h-full bg-white p-5 col-span-6'>
				<EditEventForm eventData={data as any}  />
			</div>
		</div>
    </div>

  )
}