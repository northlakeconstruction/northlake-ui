"use client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SummaryCardAreaProps } from "./SummaryCardAreaProps"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

const SummaryCardArea = (props: SummaryCardAreaProps) => {
    const {summaryCards} = props
    const router = useRouter()

    return(
        <div className="flex flex-wrap justify-center items-stretch gap-4 bg-primary-fg py-6">
            {
            summaryCards.map(s => (
                <div 
                    className="md:basis-3/10 lg:basis-20/100 shrink-0 flex"
                    key={s.title}
                >
                    <Card className="pt-0 overflow-hidden">
                        <Image 
                            src={s.image.src}
                            alt={s.image.alt}
                            height={250}
                            width={250}
                            className="hidden md:block md:w-full md:h-auto"
                        />
                        <CardHeader>
                        <CardTitle className="pt-6 md:pt-0">
                            {s.title}
                        </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{s.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => {router.push(s.detailLink)}}>Learn More</Button>
                        </CardFooter>
                    </Card>
                </div>
            ))
            }
        </div>
    )
}

export { SummaryCardArea }