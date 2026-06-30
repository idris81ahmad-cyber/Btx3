export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  salePrice?: number;
  category: string;
  material: string;
  width: string;
  lengthOptions: string[];
  rating: number;
  reviewCount: number;
  inStock: number;
  specifications: Record<string, string>;
  images: string[];
  colorFamily: string;
  patternStyle: string;
}

export interface CartItem extends Product {
  selectedLength: string;
  quantity: number;
  currentPrice: number;
}