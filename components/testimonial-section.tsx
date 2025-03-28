"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguage } from "@/providers/language-provider"

// Sample testimonials
const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Interior Designer",
    content:
      "The marble tiles I purchased from TechHub Holding exceeded my expectations. The quality and finish are exceptional, and they've transformed my client's space completely.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Homeowner",
    content:
      "I'm extremely satisfied with my purchase. The customer service was outstanding, and the materials arrived well-packaged and in perfect condition.",
    rating: 5,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Architect",
    content:
      "As an architect, I value quality and consistency. TechHub Holding delivers both, making them my go-to supplier for premium construction materials.",
    rating: 4,
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSection() {
  const { t } = useLanguage()

  return (
    <section className="py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">{t("testimonials.title")}</h2>
        <p className="mt-2 text-muted-foreground">{t("testimonials.subtitle")}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="h-full">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-2 flex">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"
                      }`}
                    />
                  ))}
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

