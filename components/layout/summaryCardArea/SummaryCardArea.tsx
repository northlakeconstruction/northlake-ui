"use client"
import { SummaryCardAreaProps } from "./SummaryCardAreaProps"
import { SummaryCard } from './SummaryCard'


const SummaryCardArea = (props: SummaryCardAreaProps) => {
    const {summaryCards} = props

    return(
        <div className="flex flex-wrap justify-center items-stretch md:gap-4 bg-primary-fg py-6">
            {
            summaryCards.map(s => (
                <SummaryCard key={s.title} {...s} />
            ))}
        </div>
    )
}

export { SummaryCardArea }