'use client'

import { COLORS_SEKAI_KEYS, IntoTheSekai, useCreateSekai } from '@naru/untitled-ui-library'

import type { ColorsSekaiKey } from '@naru/untitled-ui-library'

interface IntoSekaiProps {
  children: React.ReactNode
}

export const IntoSekai = ({ children }: IntoSekaiProps) => {
  const { switchSekaiColor } = useCreateSekai()

  const handleChangeSekai = () => {
    const length = Object.keys(COLORS_SEKAI_KEYS).length
    const random = Math.floor(Math.random() * length)
    const keys = Object.keys(COLORS_SEKAI_KEYS) as ColorsSekaiKey[]
    switchSekaiColor(keys[random])
  }

  return (
    <div className="flex-center h-full">
      {children}
      <IntoTheSekai execEvent={handleChangeSekai} />
    </div>
  )
}
