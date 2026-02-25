import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SummaryCardAreaProps } from "./SummaryCardAreaProps"
import Image from "next/image"

const SummaryCardArea = (props: SummaryCardAreaProps) => {
    const {summaryCards} = props

    return(
        <div className="flex flex-wrap justify-center items-stretch gap-4">
            {
            summaryCards.map(s => (
                <div 
                    className="basis-full md:basis-4/10 lg:basis-3/10 shrink-0 flex"
                    key={s.title}
                >
                <Card className="pt-0 overflow-hidden">
                    <Image 
                        src={s.image.src}
                        alt={s.image.alt}
                        height={500}
                        width={500}
                        className="w-full h-auto"
                    />
                    <CardHeader>
                    <CardTitle>
                        {s.title}
                    </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{s.description}</p>
                        <a href={s.detailLink}>Learn More</a>
                    </CardContent>
                </Card>
                </div>
            ))
            }
        </div>
    )
}

export { SummaryCardArea }