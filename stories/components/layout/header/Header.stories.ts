import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '../../../../components/layout/header'

const meta: Meta<typeof Header> = {
  component: Header,
}

export default meta
type Story = StoryObj<typeof Header>

export const Primary: Story = {
  args: {
    categories: { services: [], "featured projects": [], about: []}
  },
}