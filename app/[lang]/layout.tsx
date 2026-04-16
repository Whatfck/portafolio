import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../../styles/globals.css'
import { getDictionary, Locale } from '@/lib/dictionaries'

const sourceSans = Source_Sans_3({ 
  subsets: ['latin'],
  variable: '--font-source-sans',
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
    <html lang={lang} className={`${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
