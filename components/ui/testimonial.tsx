"use client"
import { useRouter } from "next/navigation"
import { Button } from "./button"

interface TestimonialProps {
    quote: string
    byline: string
    detailLink: string
}

export function Testimonial(props: TestimonialProps){
    const {quote, byline, detailLink} = props
    const router = useRouter()
    return (
        <div className="flex flex-col items-start gap-4">
            <h2 className="text-2xl md:text-3xl">{quote}</h2>
            <i>{byline}</i>
            <Button onClick={()=>{router.push(detailLink)}}>Read More</Button>
        </div>
    )
}