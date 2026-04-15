import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../../styles/globals.css'
import { getDictionary, Locale } from '@/lib/dictionaries'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = getDictionary(lang)
  return {
    title: `${dict.hero.name} | Portafolio`,
    description: dict.hero.copy,
  }
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={lang} className={`${plusJakarta.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
