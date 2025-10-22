'use client'

import { useMemo } from 'react'

import {
  COLORS_SEKAI_KEYS,
  createSekai,
  LIGHT_MODE,
  useLocalStorage,
  YOUR_COLOR_THEME,
  YOUR_SEKAI_COLOR,
  YourSekaiProvider,
} from '@naru/untitled-ui-library'

import type { ColorsSekaiKey, PaletteMode } from '@naru/untitled-ui-library'

interface MySekaiProviderProps {
  children: React.ReactNode
}

export const MySekaiProvider = ({ children }: MySekaiProviderProps) => {
  const { storedValue: sekai } = useLocalStorage<ColorsSekaiKey>(
    YOUR_SEKAI_COLOR,
    COLORS_SEKAI_KEYS.Miku,
  )
  const { storedValue: mode } = useLocalStorage<PaletteMode>(YOUR_COLOR_THEME, LIGHT_MODE)

  const sekaiTheme = useMemo(
    () =>
      createSekai({
        palette: {
          sekai: sekai,
          mode: mode,
        },
      }),
    [sekai, mode],
  )

  return <YourSekaiProvider sekaiTheme={sekaiTheme}>{children}</YourSekaiProvider>
}
