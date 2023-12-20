import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@jonatanpaes-ui/react'

const meta: Meta<AvatarProps> = {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/JonatanPaes.png',
    alt: 'Jonatán Paes',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const WithFallback: Story = {
  args: {
    src: undefined,
  },
}
