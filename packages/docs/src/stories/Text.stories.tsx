import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui/react'

const meta: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quaerat nemo maiores porro dolorem necessitatibus esse atque ad rerum repellendus voluptate animi adipisci, expedita mollitia consequatur deserunt modi? Quae, optio.',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}