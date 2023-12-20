import type { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps, Text } from '@jonatanpaes-ui/react'

const meta: Meta<BoxProps> = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
