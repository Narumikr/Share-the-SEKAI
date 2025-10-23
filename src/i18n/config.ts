export const fallbackLng = 'ja'
export const languages = ['ja', 'en'] as const
export const defaultNS = 'common'

export type Locale = (typeof languages)[number]

export function getOptions(language = fallbackLng, namespace = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng: language,
    fallbackNS: defaultNS,
    defaultNS,
    ns: namespace,
  }
}
