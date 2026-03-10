"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { SummaryCardProps } from "./SummaryCardAreaProps"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export function SummaryCard (props: SummaryCardProps) {
    const {title, image, description, detailLink} = props
    const router = useRouter()

    return(
        <div 
            className="w-full flex w-full md:basis-[30%] xl:basis-[20%] p-4"
        >
            <Card 
                className="pt-0 w-full overflow-hidden"
                onMouseEnter={() => {console.log("hover")}}
            >
                <div className="hidden md:block md:relative md:aspect-[4/3] md:w-full md:overflow-hidden">
                    <Image 
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="hidden md:block md:w-full md:h-auto"
                    />
                </div>
                <CardContent>
                    <Accordion 
                        type="single"
                        collapsible
                    >
                        <AccordionItem value={title}>
                            <AccordionTrigger className="text-xl">
                                {title}
                            </AccordionTrigger>
                            <AccordionContent>
                                {description}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    {/* <Collapsible>
                        <CollapsibleTrigger asChild>
                            <Button
                                variant="ghost"
                                className="group [&[data-state=open]>svg]:rotate-90"
                            >
                                <ChevronRight className="transition-transform duration-200" />
                            </Button>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                            {description}
                        </CollapsibleContent>
                    </Collapsible> */}
                    {/* <p>{s.description}</p> */}
                </CardContent>
                <CardFooter>
                    <Button onClick={() => {router.push(detailLink)}}>Learn More</Button>
                </CardFooter>
            </Card>
        </div>
        )
    }