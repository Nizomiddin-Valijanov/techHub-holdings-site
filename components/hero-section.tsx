"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import image_1 from "@/assets/hero-section/hero-sections-image.png";
import image_2 from "@/assets/hero-section/images.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Add this effect to listen for slide changes
  useEffect(() => {
    if (!swiper) return;

    const handleSlideChange = () => {
      setActiveIndex(swiper.realIndex);
    };

    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  // Hero slide data with placeholder images
  const heroSlides = [
    {
      id: 1,
      bgColor: "bg-emerald-600",
      title: "Qulay narxlarda",
      subtitle: "Momiq sochiqlar",
      productName: "Yuqori sifatga ega",
      image: image_1,
      buttonText: "Harid qilish",
      buttonLink: "/catalog",
    },
    {
      id: 2,
      bgColor: "bg-indigo-500",
      title: "Chiroy va zamonaviy",
      subtitle: "Marmarlar va toshlar",
      image: image_2,
      buttonText: "Harid qilish",
      buttonLink: "/catalog",
    },
  ];

  if (!mounted) return null;

  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
        onSwiper={setSwiper}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id} className={`${slide.bgColor} relative`}>
            <div className="container h-full mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center gap-8">
                <div className="text-white z-10 space-y-4">
                  {slide.title && (
                    <h2 className="text-2xl md:text-3xl font-medium">
                      {slide.title}
                    </h2>
                  )}
                  {slide.subtitle && (
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      {slide.subtitle}
                    </h1>
                  )}
                  {slide.productName && (
                    <div className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4">
                      {slide.productName}
                    </div>
                  )}
                  <div className="pt-4">
                    <Button
                      size="lg"
                      className="mt-4 rounded-full px-6 group"
                      asChild
                    >
                      <Link href={slide.buttonLink}>
                        {slide.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="relative h-[350px] w-[450px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.subtitle}
                      fill
                      className="object-fill w-full h-full"
                      priority={slide.id === 1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2">
        <button
          onClick={() => swiper?.slidePrev()}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
        <button
          onClick={() => swiper?.slideNext()}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Custom pagination */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => swiper?.slideTo(index)}
            className={`h-2 w-8 rounded-full transition-all ${
              activeIndex === index ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
