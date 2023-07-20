import HeroComponent from '@/components/Homepage/Hero'
import Analytics from '@/components/Homepage/Analytics'
import ResellTickets from '@/components/Homepage/ResellTickets'
import ScannerApp from '@/components/Homepage/ScannerApp'
import { Session, getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { redirect} from 'next/navigation';


export default async function HomePage() {

	const session: Session = await getServerSession(authOptions as any) as Session
	if (session) {
		redirect('/user')
	}

	return (
		<main>
			<HeroComponent />
			<Analytics />
			<ResellTickets />
			<ScannerApp />
		</main>
	)
}
