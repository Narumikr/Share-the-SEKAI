import { MySekaiProvider } from '@/components/MySekaiProvider'

import type { Metadata } from 'next'

import '@/styles/globals.css'
import '@naru/untitled-ui-library/color/sekai-colors.css'

export const metadata: Metadata = {
  title: 'Home | B.T.W',
  description: 'project bocchi the work home page top',
}

interface RootLayoutProps {
  children: React.ReactNode
}
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja">
      <body className="antialiased">
        <MySekaiProvider>{children}</MySekaiProvider>
      </body>
    </html>
  )
}
export default RootLayout
