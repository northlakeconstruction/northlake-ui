
const Footer = () => {

    return (
        <footer className="w-full bg-gray-800 text-white p-4">
            <div className="xs:flex-col align-between gap-4 md:flex justify-between items-center">
                <div className="xs: text-center md:flex-col gap-4 text-left">
                    <address className="xs: text-center md:text-left">
                        1950 West 43rd St. <br />
                        Chicago, IL 60609
                    </address>
                </div>
                <div className="flex-col gap-2 text-center">
                    Copyright 2026 Northlake Construction <br />
                    <a href="https://avondalien.com">Built by Avondalien Software</a>
                </div>
                <div className="xs: text-center md: text-right">
                    <a 
                        className="xs: text-center md: text-right"
                        href="mailto:rbyrdsong@northlake-construction.com">email us</a>
                </div>
            </div>
        </footer>
    )
}

export { Footer }