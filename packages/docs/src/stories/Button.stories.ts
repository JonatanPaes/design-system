import type { StoryObj, Meta } from '@storybook/react'

import { Button, ButtonProps } from '@ignite-ui/react'

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Big: Story = {
  args: {
    size: 'big',
  },
}
