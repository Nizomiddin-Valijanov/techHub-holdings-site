"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import { useLanguage } from "@/providers/language-provider"
import { useProductStore } from "@/store/product-store"

export default function FeaturedProducts() {
  const { t } = useLanguage()
  const { getAllProducts } = useProductStore()

  // Get featured products (first 4 products)
  const featuredProducts = getAllProducts().slice(0, 4)

  return (
    <section className="py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{t("featured.title")}</h2>
          <p className="mt-2 text-muted-foreground">{t("featured.subtitle")}</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/catalog">{t("featured.viewAll")}</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <Card key={product.code} className="overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="line-clamp-1">{product.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{product.size}</p>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-xl font-bold">{product.price.toLocaleString()} UZS</p>
              <p className="text-sm">${product.usd.toFixed(2)} USD</p>
            </CardContent>
            <CardFooter className="flex gap-2 p-4 pt-0">
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/product/${product.slug}`}>{t("featured.details")}</Link>
              </Button>
              <Button size="icon">
                <ShoppingCart className="h-4 w-4" />
                <span className="sr-only">{t("product.addToCart")}</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

