'use client'

import { useTranslation as useTranslationOrg } from 'react-i18next'

export function useTranslation(namespace: string = 'common', options?: { keyPrefix?: string }) {
  return useTranslationOrg(namespace, options)
}
