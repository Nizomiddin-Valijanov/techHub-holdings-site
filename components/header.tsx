"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Menu, Search, Package, Heart } from "lucide-react"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "@/providers/language-provider"

// Replace the logo image with a text-based logo
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn("z-50 w-full bg-white shadow-md")}>
      <div className="container flex flex-col gap-2 px-4 md:px-6 py-2">
        {/* Top Bar */}
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <div className="flex items-center gap-4">
            <span>📞 +998 (88) 830 75 57</span>
            <span>
              📍 Namangan viloyati, Chortoq tumani, Chortoq shahri O`zbekiston MFY, O`zbekiston ko`chasi, 67-uy
            </span>
          </div>
          <div className="flex items-center gap-5">
            <LanguageSwitcher />
            <Button variant="default" asChild>
              <Link href="/login">{t("nav.login")}</Link>
            </Button>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex justify-between items-center py-0">
          <Link href="/" className="text-2xl font-bold text-primary">
            TechHub Holding
          </Link>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/orders">
                <Package className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/favorites">
                <Heart className="h-5 w-5" />
              </Link>
            </Button>

            <div className="relative w-80">
              <Input
                type="search"
                placeholder={t("nav.search")}
                className="w-full rounded-full border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
              />
              <Search className="absolute right-3 top-2 text-gray-500" />
            </div>
            <Link className="flex items-center gap-2 bg-blue-500 text-white py-2 px-3 rounded-lg" href="/catalog">
              <Menu className="h-5 w-5" /> {t("nav.catalog")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

