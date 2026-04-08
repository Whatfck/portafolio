import type { Metadata } from 'next'
import { Noto_Sans_Mono } from 'next/font/google'
import './globals.css'

const notoSansMono = Noto_Sans_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Daniel Perez | Portafolio',
  description: 'Portafolio profesional - Desarrollador Full Stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={notoSansMono.className}>{children}</body>
    </html>
  )
}
