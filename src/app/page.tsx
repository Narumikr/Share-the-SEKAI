import { SekaiBodyText } from '@naru/untitled-ui-library'

import { STRID_COMMON } from '@/constants/message/common'
import { STRID_HELLO_SEKAI } from '@/constants/message/hello-sekai'

import { ClickMeText, IntoSekai } from '@/features/IntoSekai'

import type { Metadata } from 'next'

export const generateMetadata = (): Metadata => {
  const title = STRID_COMMON.sitename.replace('{0}', STRID_HELLO_SEKAI.meta.title)

  return {
    title: title,
    description: STRID_HELLO_SEKAI.meta.description,
  }
}

const Home = () => {
  return (
    <IntoSekai>
      <SekaiBodyText className="w-full text-center !text-[39px]">Hello SEKAI !</SekaiBodyText>
      <ClickMeText />
    </IntoSekai>
  )
}
export default Home
