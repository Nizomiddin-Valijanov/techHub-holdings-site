import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Star,
  Truck,
  ShieldCheck,
  ArrowLeft,
  ShoppingCart,
  Heart,
} from "lucide-react";

// This would normally come from a database or API
const product = {
  id: 1,
  name: "Carrara White Marble",
  price: 89.99,
  description:
    "Carrara White Marble is a high-quality Italian marble known for its soft white background with elegant gray veining. Perfect for floors, walls, countertops, and various architectural applications.",
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1f1sX__kbmrLSGsYZZC0CPr6zXgTfr8Emg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1f1sX__kbmrLSGsYZZC0CPr6zXgTfr8Emg&s",
    "/placeholder.svg?height=300&width=300",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1f1sX__kbmrLSGsYZZC0CPr6zXgTfr8Emg&s",
  ],
  category: "Marble Tiles",
  slug: "carrara-white-marble",
  specifications: {
    size: "60x60 cm",
    thickness: "20mm",
    color: "White with Gray Veining",
    finish: "Polished",
    material: "Natural Marble",
    origin: "Italy",
    weight: "25 kg/m²",
    application: "Indoor/Outdoor",
  },
  inStock: true,
  rating: 4.8,
  reviewCount: 124,
  relatedProducts: [
    {
      id: 2,
      name: "Calacatta Gold",
      price: 129.99,
      image: "/placeholder.svg?height=300&width=300",
      slug: "calacatta-gold",
    },
    {
      id: 3,
      name: "Nero Marquina",
      price: 99.99,
      image: "/placeholder.svg?height=300&width=300",
      slug: "nero-marquina",
    },
    {
      id: 4,
      name: "Statuario Venato",
      price: 149.99,
      image: "/placeholder.svg?height=300&width=300",
      slug: "statuario-venato",
    },
  ],
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the product data based on the slug
  // const { slug } = params;
  // const product = await getProductBySlug(slug);

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/catalog" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Catalog
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-md border">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - View ${index + 1}`}
                  width={150}
                  height={150}
                  className="h-full w-full cursor-pointer object-cover transition-opacity hover:opacity-80"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Price per square meter
            </p>
          </div>

          <div className="mt-6">
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {Object.entries(product.specifications)
              .slice(0, 4)
              .map(([key, value]) => (
                <div key={key}>
                  <p className="text-sm font-medium">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </p>
                  <p className="text-sm text-muted-foreground">{value}</p>
                </div>
              ))}
          </div>

          <div className="mt-6 flex items-center gap-2">
            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                product.inStock
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
            <span className="text-sm text-muted-foreground">
              SKU: MRBCW-6060-20
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="flex-1" disabled={!product.inStock}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg">
              <Heart className="mr-2 h-5 w-5" />
              Add to Wishlist
            </Button>
          </div>

          <div className="mt-8 space-y-4 rounded-lg border p-4">
            <div className="flex items-start gap-3">
              <Truck className="mt-0.5 h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Free Shipping</p>
                <p className="text-sm text-muted-foreground">
                  On orders over $500
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Quality Guarantee</p>
                <p className="text-sm text-muted-foreground">
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Tabs defaultValue="specifications">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="installation">Installation Guide</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div key={key} className="flex flex-col space-y-1">
                        <p className="font-medium">
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </p>
                        <p className="text-muted-foreground">{value}</p>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="installation" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-medium">Installation Guide</h3>
                <div className="space-y-4">
                  <p>
                    Proper installation of marble tiles is crucial for achieving
                    the best results. Follow these steps for a professional
                    installation:
                  </p>
                  <ol className="ml-6 list-decimal space-y-2">
                    <li>
                      Prepare the surface by ensuring it is clean, level, and
                      free of debris.
                    </li>
                    <li>
                      Apply an appropriate adhesive using a notched trowel.
                    </li>
                    <li>
                      Place the tiles carefully, using spacers to maintain
                      consistent gaps.
                    </li>
                    <li>
                      Allow the adhesive to set according to manufacturer
                      instructions.
                    </li>
                    <li>
                      Apply grout between the tiles and clean excess
                      immediately.
                    </li>
                    <li>
                      Seal the marble tiles to protect against stains and
                      moisture.
                    </li>
                    <li>
                      Regular maintenance includes cleaning with pH-neutral
                      cleaners.
                    </li>
                  </ol>
                  <p className="mt-4 text-sm text-muted-foreground">
                    For detailed installation instructions, please refer to our
                    installation guide PDF or consult with a professional
                    installer.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Customer Reviews</h3>
                    <div className="mt-1 flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(product.rating)
                                ? "fill-primary text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Based on {product.reviewCount} reviews
                      </span>
                    </div>
                  </div>
                  <Button>Write a Review</Button>
                </div>

                <div className="space-y-6">
                  {/* Sample reviews - in a real app, these would come from a database */}
                  <div className="border-b pb-6">
                    <div className="mb-2 flex items-center justify-between">
                      <div>
                        <p className="font-medium">John D.</p>
                        <p className="text-sm text-muted-foreground">
                          Verified Purchase
                        </p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < 5 ? "fill-primary text-primary" : ""
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-2">
                      Excellent quality marble. The veining is beautiful and
                      consistent across all tiles. Installation was
                      straightforward, and the result is stunning.
                    </p>
                  </div>

                  <div className="border-b pb-6">
                    <div className="mb-2 flex items-center justify-between">
                      <div>
                        <p className="font-medium">Sarah M.</p>
                        <p className="text-sm text-muted-foreground">
                          Verified Purchase
                        </p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < 4 ? "fill-primary text-primary" : ""
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-2">
                      The marble is beautiful, but a few tiles had slight color
                      variations. Overall, I'm happy with the purchase, and my
                      bathroom looks amazing.
                    </p>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <div>
                        <p className="font-medium">Michael T.</p>
                        <p className="text-sm text-muted-foreground">
                          Verified Purchase
                        </p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < 5 ? "fill-primary text-primary" : ""
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-2">
                      Top-notch quality and excellent customer service. The
                      delivery was prompt, and the packaging protected the tiles
                      perfectly. Would definitely order again.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <Button variant="outline">Load More Reviews</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {product.relatedProducts.map((relatedProduct) => (
            <Card key={relatedProduct.id} className="overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={relatedProduct.image || "/placeholder.svg"}
                  alt={relatedProduct.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium">{relatedProduct.name}</h3>
                <p className="mt-1 text-lg font-bold">
                  ${relatedProduct.price.toFixed(2)}
                </p>
                <Button variant="outline" className="mt-4 w-full" asChild>
                  <Link href={`/product/${relatedProduct.slug}`}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
