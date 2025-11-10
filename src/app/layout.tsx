import { MySekaiProvider } from '@/components/MySekaiProvider'

import '@/styles/globals.css'
import '@naru/untitled-ui-library/color/sekai-colors.css'
import { getTranslation } from '@/i18n/lib/server'

import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'

type MetadataProps = {
  params: Promise<{ locale: Locale }>
}

export const generateMetadata = async ({ params }: MetadataProps): Promise<Metadata> => {
  const { locale } = await params
  const { t } = await getTranslation(locale, 'common')
  const title = t('meta.sitename').replace('{0}', t('meta.title'))

  return {
    title: title,
    description: t('meta.description'),
  }
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
