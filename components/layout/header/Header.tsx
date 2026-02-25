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

const Header = (props: HeaderProps) => {
    const { categories } = props
    const router = useRouter()

    return (
        <header className="sticky top-0 w-full p-4 text-primary-fg border-b-4 border-primary bg-background">
            <div className="flex justify-between">
                <Link href={"/"}>
                    <h1>Northlake Construction</h1>
                </Link>
                <nav className="flex items-center gap-6">
                    <NavigationMenu className="hidden md:flex gap-6">
                        <NavigationMenuList>
                            {
                                categories.map(c => (
                                    <NavigationMenuItem key={c.name}>
                                        <NavigationMenuTrigger>
                                            {c.name}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            {
                                                c.subCategory?.map(s => (
                                                    <NavigationMenuLink key={s.name}>
                                                        <Link href={s.link ?? "/"}>
                                                        {s.name}
                                                        </Link>
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
                                <Link href="/about">About</Link>
                                <Link href="/services">Services</Link>
                                <Link href="/contact">Contact</Link>
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