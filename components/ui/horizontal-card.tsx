import { PropsWithChildren } from "react"
import Image from "next/image"

export interface HorizontalCardProps extends PropsWithChildren {
    imageLeft: boolean
    image: string
    alt: string
}

export function HorizontalCard(props: HorizontalCardProps) {
    const {imageLeft, image, alt, children} = props

    const imageCol = (
        <div className="hidden md:block relative md:h-auto md:w-[44%] shrink-0 overflow-hidden">
            <Image src={image} alt={alt} fill className="object-cover" />
        </div>
    )

    return (
        <div className={`flex flex-col md:flex-row md:h-96`}>
            {!imageLeft && imageCol}
            <div className="flex-1 flex items-center p-6">
                {children}
            </div>
            {imageLeft && imageCol}
        </div>
    )
}