'use client'

import { DetailText } from '@naru/untitled-ui-library'

import { useClient } from '@/hooks/useClient'
import { cn } from '@/utils/classname'

interface ResponsiveTextProps {
  className?: string
  isPortrait: boolean
  portraitText: string
  landscapeText: string
}

export const ResponsiveDetailText = ({
  className,
  isPortrait,
  portraitText,
  landscapeText,
}: ResponsiveTextProps) => {
  const isClient = useClient()

  return (
    <>
      {/* for mobile */}
      <DetailText
        className={cn('md:hidden', className)}
        aria-hidden={isClient ? !isPortrait : undefined}>
        {portraitText}
      </DetailText>
      {/* for desktop */}
      <DetailText
        className={cn('hidden md:block', className)}
        aria-hidden={isClient ? isPortrait : undefined}>
        {landscapeText}
      </DetailText>
    </>
  )
}
