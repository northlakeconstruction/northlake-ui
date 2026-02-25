import { type HeaderProps } from './HeaderProps'

const Header = (props: HeaderProps) => {
    const { categories } = props
    
    return (
        <header className="fixed top-0 left-0 w-full p-4 bg-primary text-primary-fg border-b-4 border-primary-fg">
            <div className="flex items-center justify-between gap-8">
                <div className="text-primary-fg">
                    <h1>Northlake Construction</h1>
                </div>
                <div className="flex gap-4">
                    {Object.entries(categories).map(([key, value]) => {
                        return (
                            <div className="hidden md:flex" key={key}>
                                {key}
                            </div>
                        )
                    })}
                    <button className="flex md:hidden">
                        links!
                    </button>
                    <button>
                        contact
                    </button>
                </div>
            </div>
        </header>
    )
}

export { Header }