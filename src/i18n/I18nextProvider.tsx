'use client'

import { useEffect, useState } from 'react'

import i18next from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { I18nextProvider } from 'react-i18next'
import { initReactI18next } from 'react-i18next/initReactI18next'

import { getOptions } from '@/i18n/config'
import { ConsoleError } from '@/utils/logging'

import type { Locale } from '@/i18n/config'

interface I18nextProviderProps {
  children: React.ReactNode
  locale: Locale
  namespaces?: string
}

export const I18nProvider = ({ children, locale, namespaces }: I18nextProviderProps) => {
  const [instance] = useState(() => {
    const i18n = i18next.createInstance()

    i18n
      .use(initReactI18next)
      .use(
        resourcesToBackend(
          (language: string, namespace: string) =>
            import(`@/i18n/locales/${language}/${namespace}.json`),
        ),
      )
      .init({
        ...getOptions(locale, namespaces ?? 'common'),
        lng: locale,
        preload: [locale],
      })
      .catch((err) => {
        ConsoleError('Failed i18next initialization : ', err)
      })

    return i18n
  })

  useEffect(() => {
    if (instance.language !== locale) {
      void instance.changeLanguage(locale)
    }
  }, [instance, locale])

  return <I18nextProvider i18n={instance}>{children}</I18nextProvider>
}
