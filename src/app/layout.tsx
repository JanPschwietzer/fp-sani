import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Provider from '@/context/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  	title: 'FestPass - Dein Anbieter für Vorverkaufstickets und kontaktlose Zahlungssysteme.',
  	description: 'Willkommen bei FestPass, der führenden Plattform, um Tickets für Konzerte, Konferenzen, Sportevents und Theateraufführungen zu verkaufen.' +
    	' Befreie dich von überhöhten Gebühren und nutze die einfache und kostengünstige Lösung von FestPass für deinen Ticketverkauf.',
  	keywords: 'FestPass, Ticketverkauf, Event-Tickets, niedrige Gebühren, Konzerte, Konferenzen, Sportevents, Theateraufführungen, einfache Lösung, kostengünstig, maximale Gewinne, erfolgreiche Events'
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="de">
			<body className={inter.className}>
				<Provider>
					<Navbar />
					<ToastContainer />
					<div className='min-h-[calc(100vh-432px-96px)] md:min-h-[calc(100vh-196px-96px)]'>
						{children}
					</div> 
					<Footer />
				</Provider>
			</body>
		</html>
	)
}
