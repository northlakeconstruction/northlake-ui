import { PropsWithChildren } from "react"
import Image from "next/image"

export interface HorizontalCardProps extends PropsWithChildren {
    imageLeft: boolean
    image: string
    alt: string
}

export function HorizontalCard(props: HorizontalCardProps) {
    const {imageLeft, image, alt, children} = props

    const color = imageLeft ? "bg-card" : "bg-accent"
    return (
        <div className={`flex flex-col gap-4 p-4 md:flex-row justify-between ${color}`}>
            {   !imageLeft && (<Image
                    src={image}
                    height={500}
                    width={500}
                    alt={alt}
                    className={`hidden md:block`}
                    />
            )}
            <div className="flex items-center">
                {children}
            </div>
            {   imageLeft && (<Image
                    src={image}
                    height={500}
                    width={500}
                    alt={alt}
                    className="hidden md:block"
                />
            )}
        </div>
    )
}