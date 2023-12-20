import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@jonatanpaes-ui/react'

const meta: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quaerat nemo maiores porro dolorem necessitatibus esse atque ad rerum repellendus voluptate animi adipisci, expedita mollitia consequatur deserunt modi? Quae, optio.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
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
