import { STRID_COMMON } from '@/constants/message/common'
import { STRID_TOP } from '@/constants/message/top'

import type { Metadata } from 'next'

export const generateMetadata = (): Metadata => {
  const title = STRID_COMMON.sitename.replace('{0}', STRID_TOP.meta.title)

  return {
    title: title,
    description: STRID_TOP.meta.description,
  }
}
const Top = () => {
  return (
    <div className="flex items-center justify-items-center min-h-screen">
      <p className="w-full text-center text-[39px]">Coming Soon</p>
    </div>
  )
}
export default Top
