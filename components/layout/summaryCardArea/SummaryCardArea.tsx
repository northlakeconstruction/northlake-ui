"use client"
import { SummaryCardAreaProps } from "./SummaryCardAreaProps"
import { SummaryCard } from './SummaryCard'


const SummaryCardArea = (props: SummaryCardAreaProps) => {
    const {summaryCards} = props

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-primary-fg gap-px">
            {
            summaryCards.map(s => (
                <SummaryCard key={s.title} {...s} />
            ))}
        </div>
    )
}

export { SummaryCardArea }