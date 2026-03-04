"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { SummaryCardProps } from "./SummaryCardAreaProps"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export function SummaryCard (props: SummaryCardProps) {
    const {title, image, description, detailLink} = props
    const router = useRouter()

    return(
        <div 
            className="w-full md:basis-3/10 lg:basis-20/100 shrink-0 flex"
        >
            <Card 
                className="pt-0 overflow-hidden"
            >
                <Image 
                    src={image.src}
                    alt={image.alt}
                    height={250}
                    width={250}
                    className="hidden md:block md:w-full md:h-auto"
                />
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