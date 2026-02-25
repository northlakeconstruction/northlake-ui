import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '../../../../components/layout/header'

const meta: Meta<typeof Header> = {
  component: Header,
}

export default meta
type Story = StoryObj<typeof Header>

export const Primary: Story = {
  args: {
    categories: [
      {
        name: "Services",
        link: "#/services",
        subCategory: [
          {
            name: "Paving",
            link: "#/services/paving"
          },
          {
            name: "Striping",
            link: "#/services/striping"
          }
        ]
      },
      {
        name: "Featured Projects",
        link: "#/projects",
      },
      {
        name: "About",
        link: "#/about"
      }
    ]
  },
}