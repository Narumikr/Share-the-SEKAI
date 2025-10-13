import { Geist, Geist_Mono } from 'next/font/google'

import type { Metadata } from 'next'

import '@/styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Home | B.T.W',
  description: 'project bocchi the work home page top',
}

interface RootLayoutProps {
  children: React.ReactNode
}
export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
export default RootLayout
