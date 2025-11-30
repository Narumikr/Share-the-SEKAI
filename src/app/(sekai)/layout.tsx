import { SekaiBackground } from '@naru/untitled-ui-library'

interface SekaiLayoutProps {
  children: React.ReactNode
}
const SekaiLayout = ({ children }: SekaiLayoutProps) => {
  return (
    <>
      <SekaiBackground bgOpacity={0.5} />
      {children}
    </>
  )
}
export default SekaiLayout
