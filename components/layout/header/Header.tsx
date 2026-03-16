"use client"
import { Button } from '@/components/ui/button'
import { type HeaderProps } from './HeaderProps'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { company } from '@/content/company'

const Header = (props: HeaderProps) => {
    const { categories } = props
    const router = useRouter()

    return (
        <header className="sticky top-0 w-full p-4 text-primary-fg bg-background z-50">
            <div className="flex justify-between">
                <Link href={"/"}>
                    <div className="flex flex-col items-center">
                        <Image
                            src={company.logo.color}
                            alt={`${company.name} corporate logo`}
                            height="75"
                            width="210"
                        />
                        <p className="text-primary-fg font-[oswald]">{company.tagline}</p>
                    </div>
                </Link>
                <nav className="flex items-center gap-6">
                    {/* Desktop menu */}
                    <NavigationMenu viewport={false} className="hidden md:flex gap-6">
                        <NavigationMenuList>
                            {categories.map(c => (
                                <NavigationMenuItem key={c.name}>
                                    <NavigationMenuTrigger className="text-xl font-[oswald]">
                                        {c.name}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        {c.subCategory?.map(s => (
                                            <NavigationMenuLink key={s.name} onClick={() => router.push(s.link ?? "/")}>
                                                <span className="text-xl font-[oswald] whitespace-nowrap text-primary-fg">{s.name}</span>
                                            </NavigationMenuLink>
                                        ))}
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Mobile menu */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <nav className="flex flex-col gap-6 mt-8">
                                    {categories.map(c => (
                                        <div key={c.name} className="flex flex-col gap-2">
                                            <span className="text-xl font-[oswald] text-primary-fg/50 uppercase tracking-widest">
                                                {c.name}
                                            </span>
                                            {c.subCategory?.map(s => (
                                                <Link key={s.name} href={s.link ?? "/"} className="text-lg font-[oswald] pl-3 text-primary-fg">
                                                    {s.name}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <Button asChild><Link href="#contact">Contact</Link></Button>
                </nav>
            </div>
        </header>
    )
}

export { Header }
