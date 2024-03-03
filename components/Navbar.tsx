'use client'
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {usePathname} from "next/navigation";


export const Navbar = () => {
    const pathname = usePathname()

    return (
        <NavigationMenu className={"mx-auto mb-4 max-w-full"}>
            <NavigationMenuList className={"flex flex-wrap items-center"}>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle() + ` text-primary text-xl ${pathname === "/" ? 'underline decoration-wavy' : ''}`}>
                            About
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/action" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle() + ` text-primary text-xl ${pathname === "/action" ? 'underline decoration-wavy' : ''}`}>
                            Action Plan
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/transparency" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle() + ` text-primary text-xl ${pathname === "/transparency" ? 'underline decoration-wavy' : ''}`}>
                            Sources & Analysis
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    )
}
