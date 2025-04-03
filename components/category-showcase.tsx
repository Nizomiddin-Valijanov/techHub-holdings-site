"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";

import granite from "@/assets/granite-image.jpg";
import towels from "@/assets/towels-image.jpg";
import construction from "@/assets/construction-materials.jpg";

export default function CategoryShowcase() {
  const { t } = useLanguage();

  // Sample categories with placeholder images
  const categories = [
    {
      name: t("category.marbleTiles"),
      description: t("categories.marbleDesc"),
      image: granite,
      slug: "marble-tiles",
    },
    {
      name: t("category.granite"),
      description: t("categories.graniteDesc"),
      image: towels,
      slug: "granite",
    },
    {
      name: t("category.constructionMaterials"),
      description: t("categories.constructionDesc"),
      image: construction,
      slug: "construction-materials",
    },
  ];

  return (
    <section className="py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          {t("categories.title")}
        </h2>
        <p className="mt-2 text-muted-foreground">{t("categories.subtitle")}</p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.name}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              width={600}
              height={400}
              className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
              <h3 className="mb-2 text-2xl font-bold">{category.name}</h3>
              <p className="mb-4 max-w-xs">{category.description}</p>
              <Button asChild>
                <Link href={`/catalog`}>{t("categories.explore")}</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
