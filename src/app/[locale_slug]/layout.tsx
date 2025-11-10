import { notFound } from 'next/navigation'

import { languages } from '@/i18n/config'
import { I18nProvider } from '@/i18n/I18nextProvider'
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

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale_slug: string }>
}

const LocaleLayout = async ({ children, params }: LocaleLayoutProps) => {
  const { locale_slug } = await params

  if (!languages.includes(locale_slug as Locale)) {
    notFound()
  }

  return <I18nProvider locale={locale_slug as Locale}>{children}</I18nProvider>
}
export default LocaleLayout
