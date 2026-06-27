import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Run Systems — Gestión de Reservas con WhatsApp para tu Negocio',
  description:
    'Organiza citas, automatiza reservas por WhatsApp y gestiona tu negocio desde un solo dashboard. Bot 24/7, recordatorios automáticos y agenda inteligente.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
