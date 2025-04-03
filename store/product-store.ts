import { create } from "zustand";

// Product interface
export interface Product {
  name: string;
  code: string;
  size: string;
  price: number;
  usd: number;
  unit: string;
  image?: string;
  description?: string;
  category?: string;
  slug?: string;
}

// Store interface
interface ProductStore {
  products: Product[];
  selectedProduct: Product | null;
  // Actions
  selectProduct: (code: string) => void;
  getAllProducts: () => Product[];
}

// Sample product data
const marmarData: Product[] = [
  {
    name: "Nanay marmari Imperator Premium10",
    code: "NMIP102",
    size: "10x10x2",
    price: 200000,
    usd: 15.5,
    unit: "m2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRySxcho7DNEK6gIpKo5OjnEgbwh26XHVixqw&s",
    description: "Premium quality marble for interior and exterior use",
    category: "Marble Tiles",
    slug: "nanay-marmari-imperator-premium10-102",
  },
  {
    name: "Nanay marmari Imperator Premium10",
    code: "NMIP103",
    size: "10x10x3",
    price: 250000,
    usd: 19.37,
    unit: "m2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQYv_rSl4-vHiiHXzDLeJa0a3LGWrAFY0Yg&s",
    description: "Premium quality marble for interior and exterior use",
    category: "Marble Tiles",
    slug: "nanay-marmari-imperator-premium10-103",
  },
  {
    name: "Nanay marmari Imperator Premium10",
    code: "NMIP104",
    size: "10x10x4",
    price: 300000,
    usd: 23.24,
    unit: "m2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfLbtQ6J-zxdIrPYo6fOEPGCJixCgMDowHoA&s",
    description: "Premium quality marble for interior and exterior use",
    category: "Marble Tiles",
    slug: "nanay-marmari-imperator-premium10-104",
  },
  {
    name: "Nanay marmari Imperator High10",
    code: "NMIH102",
    size: "10x10x2",
    price: 170000,
    usd: 13.17,
    unit: "m2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzus90tjBY_fcWpxEqqmqEPWamXQEGtKP8Dw&s",
    description: "High quality marble for interior and exterior use",
    category: "Marble Tiles",
    slug: "nanay-marmari-imperator-high10-102",
  },
  {
    name: "Nanay marmari Imperator High10",
    code: "NMIH103",
    size: "10x10x3",
    price: 220000,
    usd: 17.04,
    unit: "m2",
    image: "/placeholder.svg?height=400&width=600",
    description: "High quality marble for interior and exterior use",
    category: "Marble Tiles",
    slug: "nanay-marmari-imperator-high10-103",
  },
  {
    name: "Nanay marmari Imperator High10",
    code: "NMIH104",
    size: "10x10x4",
    price: 270000,
    usd: 20.92,
    unit: "m2",
    image: "/placeholder.svg?height=400&width=600",
    description: "High quality marble for interior and exterior use",
    category: "Marble Tiles",
    slug: "nanay-marmari-imperator-high10-104",
  },
];

// Create the store
export const useProductStore = create<ProductStore>((set, get) => ({
  products: marmarData,
  selectedProduct: null,

  // Select a product by code
  selectProduct: (code) => {
    const product = get().products.find(
      (p) => p.code === code || p.slug === code
    );
    set({ selectedProduct: product || null });
  },

  // Get all products
  getAllProducts: () => get().products,
}));
