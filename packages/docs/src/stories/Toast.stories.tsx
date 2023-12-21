import type { StoryObj, Meta } from '@storybook/react'

import { Toast, ToastProps } from '@jonatanpaes-ui/react'

const meta: Meta<ToastProps> = {
  title: 'Overlay/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    text: 'Quinta-feira, 21 de Dezembro às 12h',
  },
  argTypes: {
    onClickClose: {
      action: 'click',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
