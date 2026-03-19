import { HeroProps } from "./HeroProps"

function Hero(props: HeroProps) {
    const {img, alt, children} = props    
    
    return (
        <div className="relative h-[500px] md:h-[600px] w-full">
        {/* Hero Image */}
        <img
            src={img}
            alt={alt}
            className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/80 to-transparent"></div>

        {/* Text Container */}
        <div className="absolute inset-0 flex flex-col justify-center mw-1/2 md:justify-start md:pt-32 px-6 md:px-16 text-white">
            {children}
        </div>
        </div>
    )
    }

export { Hero }