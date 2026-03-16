"use client"

import Image from "next/image"
import Link from "next/link"
import { SummaryCardProps } from "./SummaryCardAreaProps"

export function SummaryCard({ title, image, description, detailLink }: SummaryCardProps) {
    return (
        <div className="group flex flex-col">
            <Link href={detailLink} className="relative aspect-[16/9] md:aspect-[4/3] overflow-hidden block">
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Always-on gradient + title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-xl font-[oswald] uppercase tracking-wide">{title}</p>
                </div>
                {/* Hover overlay — desktop only */}
                <div className="hidden md:flex absolute inset-0 bg-primary-fg/90 flex-col justify-center items-center p-6 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xl font-[oswald] uppercase tracking-wide">{title}</p>
                    <p className="text-white text-sm leading-relaxed text-center">{description}</p>
                    <span className="text-white border border-white px-4 py-2 text-sm font-[oswald] uppercase tracking-wider">
                        Learn More
                    </span>
                </div>
            </Link>
            {/* Description — mobile only */}
            <div className="md:hidden bg-primary-fg p-4 flex flex-col gap-3">
                <p className="text-white text-sm leading-relaxed">{description}</p>
                <Link href={detailLink} className="text-white border border-white px-4 py-2 text-sm font-[oswald] uppercase tracking-wider text-center no-underline hover:no-underline">
                    Learn More
                </Link>
            </div>
        </div>
    )
}
