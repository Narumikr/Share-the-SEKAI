import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

import { getOptions } from '@/i18n/config'

import type { Locale } from '@/i18n/config'

// A function to initialize the i18next instance
const initI18next = async (language: Locale, namespace: string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        // Dynamically import translation files
        (language: string, namespace: string) =>
          import(`@/i18n/locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(language, namespace))
  return i18nInstance
}

// A translation function for Server Components
export async function getTranslation(
  language: Locale,
  namespace: string = 'common',
  options: { keyPrefix?: string } = {},
) {
  const i18nextInstance = await initI18next(language, namespace)
  return {
    t: i18nextInstance.getFixedT(
      language,
      Array.isArray(namespace) ? namespace[0] : namespace,
      options.keyPrefix,
    ),
    i18n: i18nextInstance,
  }
}
