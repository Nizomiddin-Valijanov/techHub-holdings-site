"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Truck, ShieldCheck, ArrowLeft, ShoppingCart, Heart } from "lucide-react"
import { useProductStore } from "@/store/product-store"
import { useLanguage } from "@/providers/language-provider"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const { t } = useLanguage()

  // Get product store functions
  const { selectProduct, selectedProduct, getAllProducts } = useProductStore()

  // Select the product when the component mounts
  useEffect(() => {
    selectProduct(slug)
  }, [slug, selectProduct])

  // If product is not found, show a message
  if (!selectedProduct) {
    return (
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold">{t("product.notFound")}</h1>
          <Button variant="outline" className="mt-4" asChild>
            <Link href="/catalog">{t("product.backToCatalog")}</Link>
          </Button>
        </div>
      </div>
    )
  }

  // Get related products (excluding the current product)
  const relatedProducts = getAllProducts()
    .filter((p) => p.code !== selectedProduct.code)
    .slice(0, 3)

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/catalog" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("product.backToCatalog")}
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border">
            <Image
              src={selectedProduct.image || "/placeholder.svg"}
              alt={selectedProduct.name}
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <div>
            <h1 className="text-3xl font-bold">{selectedProduct.name}</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("product.code")}: {selectedProduct.code}
            </p>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < 4 ? "fill-primary text-primary" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.0 (24 {t("product.reviews")})</span>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-3xl font-bold">{selectedProduct.price.toLocaleString()} UZS</p>
            <p className="text-lg">${selectedProduct.usd.toFixed(2)} USD</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {t("product.pricePerUnit", { unit: selectedProduct.unit })}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-muted-foreground">{selectedProduct.description || t("product.noDescription")}</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">{t("product.size")}</p>
              <p className="text-sm text-muted-foreground">{selectedProduct.size}</p>
            </div>
            <div>
              <p className="text-sm font-medium">{t("product.unit")}</p>
              <p className="text-sm text-muted-foreground">{selectedProduct.unit}</p>
            </div>
            <div>
              <p className="text-sm font-medium">{t("product.category")}</p>
              <p className="text-sm text-muted-foreground">{selectedProduct.category}</p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              {t("product.inStock")}
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="flex-1">
              <ShoppingCart className="mr-2 h-5 w-5" />
              {t("product.addToCart")}
            </Button>
            <Button variant="outline" size="lg">
              <Heart className="mr-2 h-5 w-5" />
              {t("product.addToWishlist")}
            </Button>
          </div>

          <div className="mt-8 space-y-4 rounded-lg border p-4">
            <div className="flex items-start gap-3">
              <Truck className="mt-0.5 h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">{t("product.freeShipping")}</p>
                <p className="text-sm text-muted-foreground">{t("product.onOrdersOver")}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">{t("product.qualityGuarantee")}</p>
                <p className="text-sm text-muted-foreground">{t("product.moneyBack")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">{t("product.relatedProducts")}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {relatedProducts.map((product) => (
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
                <CardContent className="p-4">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.size}</p>
                  <p className="mt-1 text-lg font-bold">{product.price.toLocaleString()} UZS</p>
                  <Button variant="outline" className="mt-4 w-full" asChild>
                    <Link href={`/product/${product.slug}`}>{t("product.viewDetails")}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

