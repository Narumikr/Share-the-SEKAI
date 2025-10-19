'use client'

import { IntoTheSekai, XxMikuDialog } from '@naru/untitled-ui-library'

interface IntoSekaiProps {
  children: React.ReactNode
}

export const IntoSekai = ({ children }: IntoSekaiProps) => {
  return (
    <div className="flex-center min-h-screen">
      {children}
      {/* <IntoTheSekai className="bg-transparent fixed" /> */}
      {/* <XxMikuDialog
        buttons={[
          {
            ariaLabel: 'Cancel',
            buttonStyle: '',
            disabled: false,
            onClick: function Xs() {},
            text: 'Cancel',
            type: 'normal',
          },
          {
            ariaLabel: 'OK',
            buttonStyle: '',
            disabled: false,
            onClick: function Xs() {},
            text: 'OK',
            type: 'normal',
          },
        ]}
        id="xo-miku-dialog-default-light"
        onClose={function Xs() {}}
        open
        size="medium"
        themeMode="light"
        title="Dialog Title">
        <span>開かれた窓のセカイのミクをイメージしたコンセプトダイアログ</span>
      </XxMikuDialog> */}
    </div>
  )
}
