import type { StoryObj, Meta } from '@storybook/react'

import { Box, MultiStep, MultiStepProps } from '@jonatanpaes-ui/react'

const meta: Meta<MultiStepProps> = {
  title: 'form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
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

export const Full: Story = {
  args: {
    currentStep: 3,
  },
}
