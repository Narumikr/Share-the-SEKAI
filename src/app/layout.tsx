import '@/styles/globals.css'
import '@naru/untitled-ui-library/color/sekai-colors.css'

import { MySekaiProvider } from '@/provider/MySekaiProvider'
import { WindowSizeProvider } from '@/provider/WindowSizeProvider'

interface RootLayoutProps {
  children: React.ReactNode
}
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja">
      <body className="antialiased">
        <MySekaiProvider>
          <WindowSizeProvider>{children}</WindowSizeProvider>
        </MySekaiProvider>
      </body>
    </html>
  )
}
export default RootLayout
