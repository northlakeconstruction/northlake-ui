import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../../../components/atomic/button'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click Me'
  },
}

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    children: 'Click Me',
    disabled: true
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Click Me!'
  },
}

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    children: 'Click Me!',
    disabled: true
  },
}