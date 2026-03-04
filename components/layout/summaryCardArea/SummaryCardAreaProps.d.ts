interface SummaryCardProps {
    title: string
    description: string
    detailLink: string
    image: {
        src: string
        alt: string
    }
}

interface SummaryCardAreaProps {
    summaryCards: SummaryCardProps[]
}

export {SummaryCardProps, SummaryCardAreaProps}