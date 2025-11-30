'use client'

import { createContext, useContext, useMemo } from 'react'

import { ORIENTATION, useOrientation, useTabletSize } from '@naru/untitled-ui-library'

interface OrientationContextProps {
  isPortrait: boolean
  isTabletSize: boolean
}

const OrientationContext = createContext<OrientationContextProps | null>(null)

export const OrientationProvider = ({ children }: { children: React.ReactNode }) => {
  const orientation = useOrientation()
  const isPortrait = useMemo(() => ORIENTATION.PORTRAIT === orientation, [orientation])
  const isTabletSize = useTabletSize()

  const contextValue = {
    isPortrait,
    isTabletSize,
  }

  return (
    <OrientationContext.Provider value={contextValue}>{children}</OrientationContext.Provider>
  )
}

export const useOrientationContext = () => {
  const context = useContext(OrientationContext)
  if (null === context) {
    throw new Error('useCreateSekai must be used within a YourSekaiProvider')
  }
  return context
}
