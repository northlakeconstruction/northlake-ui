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

const Header = (props: HeaderProps) => {
    const { categories } = props
    const router = useRouter()

    return (
        <header className="sticky top-0 w-full p-4 text-primary-fg bg-background z-50">
            <div className="flex justify-between">
                <Link href={"/"}>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/header-logo-blue.png"
                            alt="Northlake Construction corporate logo"
                            height="75"
                            width="210"
                        />
                        <p className="text-primary-fg font-[oswald]">A Minority Business Enterprise</p>
                    </div>
                </Link>
                <nav className="flex items-center gap-6">
                    <NavigationMenu viewport={false} className="hidden md:flex gap-6">
                        <NavigationMenuList>
                            {
                                categories.map(c => (
                                    <NavigationMenuItem key={c.name}>
                                        <NavigationMenuTrigger className="text-xl font-[oswald]">
                                            {c.name}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            {
                                                c.subCategory?.map(s => (
                                                    <NavigationMenuLink key={s.name} onClick={() => router.push(s.link ?? "/")}>
                                                        <span className="text-xl font-[oswald]">{s.name}</span>
                                                    </NavigationMenuLink>
                                                ))
                                            }
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                ))
                            }
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                            </SheetTrigger>

                            <SheetContent side="right">
                            <nav className="flex flex-col gap-4 mt-8">
                                <Link href="/about" className="text-xl font-[oswald]">About</Link>
                                <Link href="/services" className="text-xl font-[oswald]">Services</Link>
                                <Link href="/contact" className="text-xl font-[oswald]">Contact</Link>
                            </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <Button onClick={() => router.push("/contact")}>Contact</Button>
                </nav>
            </div>
        </header>
    )
}

export { Header }