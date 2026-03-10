import { Mail, MapPin, Copyright, Phone } from "lucide-react"
import Image from 'next/image'

const Footer = () => {

    return (
        <footer className="w-full p-4 bg-primary-fg text-white">
            <div className="flex flex-col align-between gap-4 md:flex-row justify-between items-center">
                <Image
                    src="/header-logo.png"
                    alt="Northlake Construction corporate logo"
                    height="75"
                    width="210"
                />
                <div className="text-center md:flex-col gap-4 text-left">
                    <div className="flex flex-row gap-2">
                        <MapPin />
                        <address className="not-italic textxs: text-center md:text-left">
                            3119 N Karlov Ave.
                            Chicago, IL 60641
                        </address>
                    </div>
                    <div className="flex text-nowrap flex-row gap-2">
                        <Mail />
                        <a 
                            className="text-white text-center md:text-right"
                            href="mailto:rbyrdsong@northlake-construction.com">
                            rbyrdsong@northlake-construction.com
                        </a>
                    </div>
                    <div className="flex flex-row gap-2">
                        <Phone />
                        <address className="not-italic">
                            <a className="text-white" href="tel:773-355-6374">(773)355-6374</a>
                        </address>
                    </div>
                </div>
                
                <div className="flex-col gap-2 text-center content-end">
                    <div className="flex flex-row gap-2 text-nowrap">
                        <Copyright />
                        <p>2026 Northlake Construction</p>
                    </div>
                </div> 
            </div>
        </footer>
    )
}

export { Footer }