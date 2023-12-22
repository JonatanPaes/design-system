import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, Tooltip, TooltipProps } from '@jonatanpaes-ui/react'

const meta: Meta<TooltipProps> = {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    children: <Text>What Day is Today ?</Text>,
    content: '20 de Dezembro - Disponível',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
