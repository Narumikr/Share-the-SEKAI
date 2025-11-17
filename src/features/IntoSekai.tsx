'use client'

import { useRouter } from 'next/navigation'

import { COLORS_SEKAI_KEYS, IntoTheSekai, useCreateSekai } from '@naru/untitled-ui-library'

import { STRID_HELLO_SEKAI } from '@/constants/message/hello-sekai'

import { useOrientationContext } from '@/context/OrientationContext'

import { ResponsiveDetailText } from '@/components/atoms/ResponsiveText'

import type { ColorsSekaiKey } from '@naru/untitled-ui-library'

interface IntoSekaiProps {
  children: React.ReactNode
}

export const IntoSekai = ({ children }: IntoSekaiProps) => {
  const { switchSekaiColor } = useCreateSekai()

  const router = useRouter()

  const handleChangeSekai = () => {
    const length = Object.keys(COLORS_SEKAI_KEYS).length
    const random = Math.floor(Math.random() * length)
    const keys = Object.keys(COLORS_SEKAI_KEYS) as ColorsSekaiKey[]
    switchSekaiColor(keys[random])
    router.push('/top')
  }

  return (
    <div className="flex-center h-full flex-col">
      {children}
      <IntoTheSekai execEvent={handleChangeSekai} />
    </div>
  )
}

export const ClickMeText = () => {
  const { isPortrait } = useOrientationContext()
  return (
    <ResponsiveDetailText
      className="animate-pulse"
      isPortrait={isPortrait}
      portraitText={STRID_HELLO_SEKAI.tapme}
      landscapeText={STRID_HELLO_SEKAI.clickme}
    />
  )
}
