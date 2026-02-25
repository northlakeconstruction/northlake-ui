interface SummaryCard {
    title: string
    description: string
    detailLink: string
    image: {
        src: string
        alt: string
    }
}

interface SummaryCardAreaProps {
    summaryCards: SummaryCard[]
}

export {SummaryCard, SummaryCardAreaProps}