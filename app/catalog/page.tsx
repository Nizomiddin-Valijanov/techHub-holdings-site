"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useProductStore } from "@/store/product-store"
import { useLanguage } from "@/providers/language-provider"

// Filter options
const filterOptions = {
  categories: ["Marble Tiles", "Granite", "Construction Materials", "Tools & Equipment"],
  colors: ["White", "Black", "Gray", "Beige", "Brown", "Gold", "Pure White"],
  thickness: ["10mm", "15mm", "20mm", "30mm"],
  sizes: ["30x30 cm", "60x60 cm", "80x80 cm", "120x60 cm"],
}

export default function CatalogPage() {
  const { t } = useLanguage()
  const { getAllProducts } = useProductStore()
  const [products, setProducts] = useState(getAllProducts())

  // Sort products by price (low to high) by default
  useEffect(() => {
    const sortedProducts = [...getAllProducts()].sort((a, b) => a.price - b.price)
    setProducts(sortedProducts)
  }, [getAllProducts])

  // Handle sort change
  const handleSortChange = (value: string) => {
    let sortedProducts = [...products]

    switch (value) {
      case "price-low":
        sortedProducts.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        sortedProducts.sort((a, b) => b.price - a.price)
        break
      case "name":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // Default sorting (featured)
        sortedProducts = getAllProducts()
    }

    setProducts(sortedProducts)
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{t("catalog.title")}</h1>
        <p className="mt-2 text-muted-foreground">{t("catalog.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Filters - Desktop */}
        <div className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-semibold">{t("catalog.filters")}</h3>
              <Button variant="outline" size="sm" className="mb-4">
                {t("catalog.clearAll")}
              </Button>
            </div>

            <div>
              <h4 className="mb-2 font-medium">{t("catalog.category")}</h4>
              <div className="space-y-2">
                {filterOptions.categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox id={`category-${category}`} />
                    <Label htmlFor={`category-${category}`}>{category}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h4 className="mb-2 font-medium">{t("catalog.size")}</h4>
              <div className="space-y-2">
                {filterOptions.sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <Checkbox id={`size-${size}`} />
                    <Label htmlFor={`size-${size}`}>{size}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h4 className="mb-2 font-medium">{t("catalog.priceRange")}</h4>
              <div className="space-y-4">
                <Slider defaultValue={[0, 300000]} max={500000} step={10000} />
                <div className="flex items-center justify-between">
                  <span className="text-sm">0 UZS</span>
                  <span className="text-sm">500,000 UZS</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="mb-2 font-medium">{t("catalog.availability")}</h4>
              <div className="flex items-center space-x-2">
                <Checkbox id="in-stock" />
                <Label htmlFor="in-stock">{t("catalog.inStockOnly")}</Label>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {/* Mobile Filter Button */}
              <Button variant="outline" size="sm" className="lg:hidden">
                <Filter className="mr-2 h-4 w-4" />
                {t("catalog.filters")}
              </Button>
              <p className="text-sm text-muted-foreground">
                {t("catalog.showing")} {products.length} {t("catalog.products")}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="sort-by" className="text-sm">
                {t("catalog.sortBy")}
              </Label>
              <Select defaultValue="price-low" onValueChange={handleSortChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
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
                  <div className="flex flex-wrap gap-1">
                    <span className="text-sm text-muted-foreground">{product.category}</span>
                    <span className="text-sm text-muted-foreground">• {product.size}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-xl font-bold">{product.price.toLocaleString()} UZS</p>
                    <span className="text-green-600">{t("product.inStock")}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="rounded-full bg-muted px-2 py-1 text-xs">{product.code}</span>
                  </div>
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
        </div>
      </div>
    </div>
  )
}

