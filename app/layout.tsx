import type { Metadata } from 'next'
import { Inter, League_Spartan } from 'next/font/google'
import './globals.css'
import { config } from '@/data/config'

const inter = Inter({ subsets: ['latin'] })
const leagueSpartan = League_Spartan({
    subsets: ['latin'],
    variable: '--font-league-spartan',
})

export const metadata: Metadata = {
    title: config.business.name,
    description: config.business.slogan,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="tr">
            <body className={`${inter.className} ${leagueSpartan.variable} bg-premium-mesh min-h-screen text-slate-800`}>
                <div className="bg-noise"></div>
                {/* Assuming Navbar is imported or defined elsewhere */}
                {/* <Navbar /> */}
                {children}
            </body>
        </html>
    )
}
