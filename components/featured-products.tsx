"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";

// Sample featured products data
const featuredProducts = [
  {
    id: 1,
    name: "Carrara White Marble",
    price: 89.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1f1sX__kbmrLSGsYZZC0CPr6zXgTfr8Emg&s",
    category: "Marble Tiles",
    slug: "carrara-white-marble",
  },
  {
    id: 2,
    name: "Calacatta Gold",
    price: 129.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1f1sX__kbmrLSGsYZZC0CPr6zXgTfr8Emg&s",
    category: "Marble Tiles",
    slug: "calacatta-gold",
  },
  {
    id: 3,
    name: "Nero Marquina",
    price: 99.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1f1sX__kbmrLSGsYZZC0CPr6zXgTfr8Emg&s",
    category: "Marble Tiles",
    slug: "nero-marquina",
  },
  {
    id: 4,
    name: "Statuario Venato",
    price: 149.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1f1sX__kbmrLSGsYZZC0CPr6zXgTfr8Emg&s",
    category: "Marble Tiles",
    slug: "statuario-venato",
  },
];

export default function FeaturedProducts() {
  const { t } = useLanguage();

  return (
    <section className="py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            {t("featured.title")}
          </h2>
          <p className="mt-2 text-muted-foreground">{t("featured.subtitle")}</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/catalog">{t("featured.viewAll")}</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
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
              <p className="text-sm text-muted-foreground">
                {product.category}
              </p>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="flex gap-2 p-4 pt-0">
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/product/${product.slug}`}>
                  {t("featured.details")}
                </Link>
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
  );
}
