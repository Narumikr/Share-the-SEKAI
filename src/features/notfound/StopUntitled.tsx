'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import { fireOnEnterKey, IntoTheSekai } from '@naru/untitled-ui-library'

import { STRID_COMMON } from '@/constants/message/common'

import { cn } from '@/utils/classname'

interface StopUntitledProps {
  className?: string
  children: React.ReactNode
}
export const StopUntitled = ({ className, children }: StopUntitledProps) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const router = useRouter()

  const jumpToTop = () => {
    router.push('/top')
  }

  const handleEvent = () => {
    setIsAnimating(true)
  }
  const handleKeydown = () => {
    handleEvent()
    setTimeout(() => {
      jumpToTop()
    }, 3 * 1000)
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={STRID_COMMON.notfound.ariaLabel}
      className={cn(isAnimating ? 'animate-fade-out' : '', className)}
      onClick={handleEvent}
      onKeyDown={fireOnEnterKey(handleKeydown)}>
      {children}
      <IntoTheSekai execEvent={jumpToTop} id="stop-untitled" />
    </div>
  )
}
