import { notFound } from 'next/navigation'

import { languages, type Locale } from '@/i18n/config'
import { I18nProvider } from '@/i18n/I18nextProvider'
import { getTranslation } from '@/i18n/lib/server'

import type { Metadata } from 'next'

type MetadataProps = {
  params: { locale: Locale }
}

export const generateMetadata = async ({ params }: MetadataProps): Promise<Metadata> => {
  const { t } = await getTranslation(params.locale, 'common')
  const title = t('meta.sitename').replace('{0}', t('meta.title'))

  return {
    title: title,
    description: t('meta.description'),
  }
}

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale_slug: Locale }>
}

const LocaleLayout = async ({ children, params }: RootLayoutProps) => {
  const { locale_slug } = await params

  if (!languages.includes(locale_slug)) {
    notFound()
  }

  return <I18nProvider locale={locale_slug}>{children}</I18nProvider>
}
export default LocaleLayout
