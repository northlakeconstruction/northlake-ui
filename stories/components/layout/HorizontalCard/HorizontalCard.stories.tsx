import type { Meta, StoryObj } from '@storybook/react'

import { HorizontalCard, HorizontalCardProps } from '../../../../components/ui/horizontal-card'
import { JSX } from 'react'
import { Button } from '@/components/ui/button'

const meta: Meta<typeof HorizontalCard> = {
  component: HorizontalCard,
}

export default meta
type Story = StoryObj<typeof HorizontalCard>

const Render = (args: HorizontalCardProps): JSX.Element => {
    return (
        <HorizontalCard
            image={args.image}
            alt={args.alt}
            imageLeft={args.imageLeft}
        >
            <div className="flex flex-col items-start gap-4">
                <h2 className="text-2xl md: text-3xl">My parking lot looks great and was delivered on time with no suprises</h2>
                <i>Pete Peterson - Owner Local Strip Mall</i>
                <Button>Read More</Button>
            </div>
        </HorizontalCard>
    )
}

export const RightImage: Story = {
  args: {
    image: "/paver.png",
    alt: "An asphalt paving crew",
  },
  render: Render
}