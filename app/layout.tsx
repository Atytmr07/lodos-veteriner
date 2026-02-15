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
    title: {
        template: '%s | Lodos Veteriner Kliniği',
        default: 'Antalya Veteriner - Lodos Veteriner Kliniği | Kepez',
    },
    description: "Antalya Kepez Masadağı bölgesinde 7/24 acil veteriner, aşı, kısırlaştırma ve cerrahi hizmetleri. Lodos Veteriner Kliniği - Minik dostlarınız için güvenli liman.",
    keywords: ["Antalya veteriner", "Kepez veteriner", "Masadağı veteriner", "acil veteriner antalya", "kedi kısırlaştırma", "köpek aşısı", "Lodos Veteriner"],
    openGraph: {
        title: 'Antalya Veteriner - Lodos Veteriner Kliniği',
        description: 'Antalya Kepez bölgesinde modern tıbbi imkanlarla sevimli dostlarınız için güvenilir veteriner hizmeti.',
        url: 'https://lodosveteriner.com',
        siteName: 'Lodos Veteriner Kliniği',
        images: [
            {
                url: 'https://lodosveteriner.com/hero-vet.jpg', // Ensure this image exists or use a valid one
                width: 1200,
                height: 630,
                alt: 'Lodos Veteriner Kliniği',
            },
        ],
        locale: 'tr_TR',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
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
