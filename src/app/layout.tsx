import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BUYAWP - #1 Undetected Roblox Executor',
  description: 'Experience the most advanced undetected Roblox executor with AWP. Premium features, secure execution, and regular updates.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen bg-black bg-gradient-to-tr from-[#282828] to-bg-zinc-900/50">
          <Header />
          <main className="min-h-[80vh] antialiased pt-16 sm:pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
