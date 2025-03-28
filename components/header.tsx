"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { ShoppingCart, User, Menu, X, Search } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "@/providers/language-provider"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const mainNavItems = [
    { title: t("nav.home"), href: "/" },
    { title: t("nav.catalog"), href: "/catalog" },
    { title: t("nav.about"), href: "/about" },
    { title: t("nav.contact"), href: "/contact" },
  ]

  const catalogItems = [
    {
      title: t("category.marbleTiles"),
      href: "/catalog/marble-tiles",
      description: t("categories.marbleDesc"),
    },
    {
      title: t("category.granite"),
      href: "/catalog/granite",
      description: t("categories.graniteDesc"),
    },
    {
      title: t("category.constructionMaterials"),
      href: "/catalog/construction",
      description: t("categories.constructionDesc"),
    },
    {
      title: t("category.tools"),
      href: "/catalog/tools",
      description: "Professional tools for installation and maintenance",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">TechHub</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t("nav.catalog")}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {catalogItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {mainNavItems.slice(1).map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === item.href}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Search Bar - Desktop */}
          <div className="relative hidden md:block">
            {isSearchOpen ? (
              <div className="absolute right-0 top-0 flex w-[300px] items-center">
                <Input type="search" placeholder={t("nav.search")} className="w-full rounded-r-none" autoFocus />
                <Button variant="ghost" size="icon" className="rounded-l-none" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}
          </div>

          {/* Cart Button */}
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">{t("nav.cart")}</span>
            </Link>
          </Button>

          {/* User Button */}
          <Button variant="ghost" size="icon" asChild>
            <Link href="/account">
              <User className="h-5 w-5" />
              <span className="sr-only">{t("nav.account")}</span>
            </Link>
          </Button>

          {/* Login Button */}
          <Button variant="outline" className="hidden md:inline-flex" asChild>
            <Link href="/login">{t("nav.login")}</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="mt-2 space-y-2">
                  <p className="text-lg font-medium">{t("nav.catalog")}</p>
                  {catalogItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block pl-4 text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <Button asChild>
                    <Link href="/login">{t("nav.login")}</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/register">{t("nav.register")}</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

