import { Pause } from 'lucide-react'

import { STRID_COMMON } from '@/constants/message/common'

import { StopUntitled } from '@/features/notfound/StopUntitled'

import type { Metadata } from 'next'

export const generateMetadata = (): Metadata => {
  return {
    title: STRID_COMMON.meta.notfound,
    description: STRID_COMMON.meta.notfound_description,
  }
}

const NotFound = () => {
  return (
    <StopUntitled className="flex items-center justify-center h-full flex-col gap-8">
      <p className="w-full text-center text-5xl">{STRID_COMMON.meta.notfound}</p>
      <div className="animate-scale-up w-1/5 aspect-square max-w-[200px] max-h-[200px] min-w-[100px] min-h-[100px]">
        <Pause className="w-full h-full" />
      </div>
      <p className="text-3xl">{STRID_COMMON.notfound.unititled}</p>
    </StopUntitled>
  )
}
export default NotFound
