"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";
import heroImage from "@/assets/hero-sections-image.png";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Luxury marble tiles"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>
      <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-center px-4 text-center text-white md:px-6">
        <h1 className="mb-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {t("hero.title")}
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/catalog">{t("hero.exploreCatalog")}</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-background/20 text-white hover:bg-background/30"
            asChild
          >
            <Link href="/contact">{t("hero.contactUs")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
