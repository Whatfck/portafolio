import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
