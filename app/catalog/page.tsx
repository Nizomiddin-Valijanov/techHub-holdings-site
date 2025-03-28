import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sample products data
const products = [
  {
    id: 1,
    name: "Carrara White Marble",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=600",
    category: "Marble Tiles",
    slug: "carrara-white-marble",
    size: "60x60 cm",
    thickness: "20mm",
    color: "White",
    inStock: true,
  },
  {
    id: 2,
    name: "Calacatta Gold",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=600",
    category: "Marble Tiles",
    slug: "calacatta-gold",
    size: "60x60 cm",
    thickness: "20mm",
    color: "White/Gold",
    inStock: true,
  },
  {
    id: 3,
    name: "Nero Marquina",
    price: 99.99,
    image: "/placeholder.svg?height=400&width=600",
    category: "Marble Tiles",
    slug: "nero-marquina",
    size: "60x60 cm",
    thickness: "20mm",
    color: "Black",
    inStock: true,
  },
  {
    id: 4,
    name: "Statuario Venato",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=600",
    category: "Marble Tiles",
    slug: "statuario-venato",
    size: "60x60 cm",
    thickness: "20mm",
    color: "White/Gray",
    inStock: false,
  },
  {
    id: 5,
    name: "Emperador Dark",
    price: 109.99,
    image: "/placeholder.svg?height=400&width=600",
    category: "Marble Tiles",
    slug: "emperador-dark",
    size: "60x60 cm",
    thickness: "20mm",
    color: "Brown",
    inStock: true,
  },
  {
    id: 6,
    name: "Crema Marfil",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=600",
    category: "Marble Tiles",
    slug: "crema-marfil",
    size: "60x60 cm",
    thickness: "20mm",
    color: "Beige",
    inStock: true,
  },
  {
    id: 7,
    name: "Thassos White",
    price: 159.99,
    image: "/placeholder.svg?height=400&width=600",
    category: "Marble Tiles",
    slug: "thassos-white",
    size: "60x60 cm",
    thickness: "20mm",
    color: "Pure White",
    inStock: true,
  },
  {
    id: 8,
    name: "Bardiglio Gray",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=600",
    category: "Marble Tiles",
    slug: "bardiglio-gray",
    size: "60x60 cm",
    thickness: "20mm",
    color: "Gray",
    inStock: true,
  },
]

// Filter options
const filterOptions = {
  categories: ["Marble Tiles", "Granite", "Construction Materials", "Tools & Equipment"],
  colors: ["White", "Black", "Gray", "Beige", "Brown", "Gold", "Pure White"],
  thickness: ["10mm", "15mm", "20mm", "30mm"],
  sizes: ["30x30 cm", "60x60 cm", "80x80 cm", "120x60 cm"],
}

export default function CatalogPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Product Catalog</h1>
        <p className="mt-2 text-muted-foreground">
          Browse our collection of premium marble tiles and construction materials
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Filters - Desktop */}
        <div className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Filters</h3>
              <Button variant="outline" size="sm" className="mb-4">
                Clear All
              </Button>
            </div>

            <div>
              <h4 className="mb-2 font-medium">Category</h4>
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
              <h4 className="mb-2 font-medium">Color</h4>
              <div className="space-y-2">
                {filterOptions.colors.map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <Checkbox id={`color-${color}`} />
                    <Label htmlFor={`color-${color}`}>{color}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h4 className="mb-2 font-medium">Thickness</h4>
              <div className="space-y-2">
                {filterOptions.thickness.map((thickness) => (
                  <div key={thickness} className="flex items-center space-x-2">
                    <Checkbox id={`thickness-${thickness}`} />
                    <Label htmlFor={`thickness-${thickness}`}>{thickness}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h4 className="mb-2 font-medium">Size</h4>
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
              <h4 className="mb-2 font-medium">Price Range</h4>
              <div className="space-y-4">
                <Slider defaultValue={[0, 200]} max={500} step={10} />
                <div className="flex items-center justify-between">
                  <span className="text-sm">$0</span>
                  <span className="text-sm">$500</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="mb-2 font-medium">Availability</h4>
              <div className="flex items-center space-x-2">
                <Checkbox id="in-stock" />
                <Label htmlFor="in-stock">In Stock Only</Label>
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
                Filters
              </Button>
              <p className="text-sm text-muted-foreground">Showing {products.length} products</p>
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="sort-by" className="text-sm">
                Sort by:
              </Label>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
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
                  <div className="flex flex-wrap gap-1">
                    <span className="text-sm text-muted-foreground">{product.category}</span>
                    <span className="text-sm text-muted-foreground">• {product.size}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
                    <span className={product.inStock ? "text-green-600" : "text-red-600"}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="rounded-full bg-muted px-2 py-1 text-xs">{product.color}</span>
                    <span className="rounded-full bg-muted px-2 py-1 text-xs">{product.thickness}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 p-4 pt-0">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/product/${product.slug}`}>Details</Link>
                  </Button>
                  <Button size="icon" disabled={!product.inStock}>
                    <ShoppingCart className="h-4 w-4" />
                    <span className="sr-only">Add to cart</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                &lt;
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="icon">
                &gt;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

