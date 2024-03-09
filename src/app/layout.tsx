import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const Jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

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
      <body className={`${Jakarta.className}`}>
        <Navigation />
        <div className="flex min-h-screen flex-col justify-between bg-black">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
