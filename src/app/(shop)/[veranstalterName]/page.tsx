import React from 'react'
import EventTilePublic from '@/components/Homepage/EventTilePublic'
import client from '@/lib/prismadb'

export default async function VeranstalterShopPage({ params }: { params: { veranstalterName: string }} ) {


	const data = await client.veranstalter.findFirst({
		where: {
		username: params.veranstalterName,
		},
		select: {
			name: true,
			beschreibung: true,
			website: true,
			email: true,
			telefon: true,
			facebookLink: true,
			instagramLink: true,
			veranstaltungen: {
				where: {
				veroeffentlicht: true,
				
				}
			}
		}
	}).then((data) => { return data })

	if (data) {
		return (
		<div className='w-full'>
			<div className='max-w-[1280px] mt-[96px] mx-auto w-full mb-[50px] md:mb-[200px] text-center grid grid-cols-2'>
				<h1 className='my-5 text-2xl col-span-2'>Shop von {data.name}</h1>
				<div className='col-span-2'>
					<div className='flex flex-col md:flex-row justify-center items-center'>
						<div className='grid md:grid-cols-2'> {
							data.veranstaltungen.map((event: any) => {
								return (
									<EventTilePublic veranstaltung={event} />
								)
							})
						}
						</div>
					</div>
				</div>
			</div>
		</div>
		)
	}
	else {
		return (
			<div className='w-full'>
				<div className='max-w-[1280px] mt-[96px] mx-auto w-full mb-[50px] md:mb-[200px] text-center grid grid-cols-2'>
					<div className='col-span-2'>
						<div className='flex flex-col md:flex-row justify-center items-center'>
							<div className='grid md:grid-cols-2'>
								<h1 className='text-2xl text-center col-span-2 mb-5 md:mb-0'>Dieser Shop existiert nicht!</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}