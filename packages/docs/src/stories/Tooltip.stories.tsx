import type { StoryObj, Meta } from '@storybook/react'

import { Tooltip, TooltipProps } from '@jonatanpaes-ui/react'

const meta: Meta<TooltipProps> = {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    date: '20 de Dezembro',
    isAvailable: true,
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
