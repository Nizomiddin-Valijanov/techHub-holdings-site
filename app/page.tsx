import HeroSection from "@/components/hero-section";
import FeaturedProducts from "@/components/featured-products";
import CategoryShowcase from "@/components/category-showcase";
import TestimonialSection from "@/components/testimonial-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroSection />
      <div className="container px-4 md:px-6">
        <CategoryShowcase />
        <FeaturedProducts />
        <TestimonialSection />
      </div>
    </div>
  );
}
