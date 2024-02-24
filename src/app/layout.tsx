import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Santiago Salazar Dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navigation />
        <div className="flex flex-col justify-between min-h-screen bg-gradient-to-tl from-rose-500 to-cyan-400">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
