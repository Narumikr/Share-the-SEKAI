'use client'

import { OrientationProvider } from '@/context/OrientationContext'

export const WindowSizeProvider = ({ children }: { children: React.ReactNode }) => {
  return <OrientationProvider>{children}</OrientationProvider>
}
