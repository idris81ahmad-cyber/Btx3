import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "p1",
    slug: "royal-gold-ankara-wax-print",
    name: "Royal Gold Ankara Wax Print",
    shortDescription: "Vibrant 6-yard premium wax print with rich gold motifs",
    description: "This exquisite Royal Gold Ankara Wax Print captures the essence of traditional West African craftsmanship. Featuring intricate gold and deep burgundy patterns on a rich base, this fabric is perfect for statement Asoebi looks, elegant traditional wear, and modern fusion designs. Each piece is carefully selected from the best producers supplying Kantin Kwari Market.",
    price: 18500,
    salePrice: 16500,
    category: "Ankara Prints",
    material: "100% Premium Cotton Wax Print",
    width: "45 inches",
    lengthOptions: ["5 yards", "6 yards"],
    rating: 4.8,
    reviewCount: 156,
    inStock: 42,
    specifications: {
      "Material": "100% Cotton",
      "Print Type": "Wax Print (Ankara)",
      "Width": "45 inches (114 cm)",
      "Weight": "Medium weight ~180gsm",
      "Care": "Machine wash cold, hang dry. Iron on reverse side.",
      "Origin": "Kano, Nigeria (sourced from trusted Kwari suppliers)",
      "Pattern Style": "Traditional Floral & Geometric"
    },
    images: [
      "https://picsum.photos/id/1015/1200/1600",
      "https://picsum.photos/id/160/1200/1600",
      "https://picsum.photos/id/201/1200/1600",
      "https://picsum.photos/id/29/1200/1600"
    ],
    colorFamily: "Gold & Burgundy",
    patternStyle: "Traditional"
  },
  {
    id: "p2",
    slug: "swiss-voile-cord-lace-ivory",
    name: "Swiss Voile Cord Lace – Ivory",
    shortDescription: "Luxurious Swiss voile cord lace in elegant ivory",
    description: "Imported premium Swiss Voile Cord Lace in a timeless ivory tone. The delicate cord embroidery creates beautiful texture and dimension, making it ideal for sophisticated Asoebi, wedding guest attire, and high-end traditional ceremonies. This is one of the most sought-after laces in the Nigerian premium market.",
    price: 48000,
    category: "Premium Lace",
    material: "100% Polyester Voile with Cord Embroidery",
    width: "60 inches",
    lengthOptions: ["5 yards", "6 yards"],
    rating: 4.9,
    reviewCount: 89,
    inStock: 28,
    specifications: {
      "Material": "Premium Swiss Voile + Cord Embroidery",
      "Width": "60 inches (152 cm)",
      "Weight": "Lightweight with structure",
      "Care": "Hand wash or delicate cycle. Lay flat to dry.",
      "Origin": "Switzerland (imported via premium Kano channels)",
      "Pattern Style": "Modern Elegant",
      "Best For": "Asoebi, Weddings, Formal Traditional Wear"
    },
    images: [
      "https://picsum.photos/id/106/1200/1600",
      "https://picsum.photos/id/133/1200/1600",
      "https://picsum.photos/id/251/1200/1600",
      "https://picsum.photos/id/30/1200/1600"
    ],
    colorFamily: "Ivory / Cream",
    patternStyle: "Modern"
  },
  {
    id: "p3",
    slug: "premium-guinea-brocade-burgundy",
    name: "Premium Guinea Brocade – Burgundy",
    shortDescription: "Rich burgundy Guinea brocade with subtle metallic sheen",
    description: "Premium quality Guinea Brocade in a deep, regal burgundy. Known for its durability and luxurious hand-feel, this brocade features a subtle self-pattern that catches the light beautifully. A staple for high-profile traditional events, chieftaincy titles, and elegant modern African fashion.",
    price: 35000,
    category: "Brocade & Damask",
    material: "100% Polyester Brocade",
    width: "60 inches",
    lengthOptions: ["5 yards", "6 yards", "10 yards"],
    rating: 4.7,
    reviewCount: 112,
    inStock: 35,
    specifications: {
      "Material": "Premium Guinea Brocade (Polyester)",
      "Width": "60 inches",
      "Weight": "Heavyweight with excellent drape",
      "Care": "Dry clean recommended or gentle wash",
      "Origin": "Guinea / West African textile heritage",
      "Pattern Style": "Traditional Damask-inspired",
      "Best For": "Agbada, Traditional Ceremonies, High-end Fashion"
    },
    images: [
      "https://picsum.photos/id/160/1200/1600",
      "https://picsum.photos/id/201/1200/1600",
      "https://picsum.photos/id/48/1200/1600",
      "https://picsum.photos/id/57/1200/1600"
    ],
    colorFamily: "Burgundy / Wine",
    patternStyle: "Traditional"
  },
  {
    id: "p4",
    slug: "indigo-adire-tie-dye-fabric",
    name: "Indigo Adire Tie-Dye Fabric",
    shortDescription: "Handcrafted classic indigo Adire from master artisans",
    description: "Authentic hand-tied and dyed Adire fabric in classic deep indigo. Each piece carries unique patterns created using traditional resist-dyeing techniques passed down through generations in Southwestern Nigeria. Perfect for contemporary and traditional looks with deep cultural significance.",
    price: 16500,
    category: "Adire & Tie-Dye",
    material: "100% Premium Cotton",
    width: "45 inches",
    lengthOptions: ["5 yards", "6 yards"],
    rating: 4.6,
    reviewCount: 78,
    inStock: 60,
    specifications: {
      "Material": "100% Cotton",
      "Technique": "Traditional Hand Tie-Dye (Adire)",
      "Width": "45 inches",
      "Weight": "Light to medium weight",
      "Care": "Cold wash separately. Colors may bleed initially.",
      "Origin": "Southwest Nigeria (Osogbo / Abeokuta region)",
      "Pattern Style": "Traditional Artistic"
    },
    images: [
      "https://picsum.photos/id/29/1200/1600",
      "https://picsum.photos/id/251/1200/1600",
      "https://picsum.photos/id/133/1200/1600",
      "https://picsum.photos/id/40/1200/1600"
    ],
    colorFamily: "Indigo / Blue",
    patternStyle: "Traditional"
  },
  {
    id: "p5",
    slug: "french-guipure-lace-champagne",
    name: "French Guipure Lace – Champagne Gold",
    shortDescription: "Exquisite French Guipure lace in warm champagne",
    description: "Premium French Guipure lace in a sophisticated champagne gold tone. The intricate floral cutwork and open design make this lace incredibly elegant and versatile. A favorite among Nigerian fashion designers for creating breathtaking gowns and traditional fusion pieces.",
    price: 55000,
    category: "Premium Lace",
    material: "100% Nylon Guipure Lace",
    width: "50 inches",
    lengthOptions: ["5 yards"],
    rating: 4.9,
    reviewCount: 64,
    inStock: 15,
    specifications: {
      "Material": "Premium French Guipure Lace",
      "Width": "50 inches (127 cm)",
      "Weight": "Medium with beautiful structure",
      "Care": "Dry clean preferred. Handle with care.",
      "Origin": "France (premium import)",
      "Pattern Style": "Modern Floral Cutwork",
      "Best For": "Bridal, High Fashion, Statement Asoebi"
    },
    images: [
      "https://picsum.photos/id/106/1200/1600",
      "https://picsum.photos/id/30/1200/1600",
      "https://picsum.photos/id/201/1200/1600",
      "https://picsum.photos/id/160/1200/1600"
    ],
    colorFamily: "Champagne / Gold",
    patternStyle: "Modern"
  },
  {
    id: "p6",
    slug: "emerald-silk-chiffon-luxe",
    name: "Emerald Silk Chiffon – Luxe Drape",
    shortDescription: "Pure silk chiffon in rich emerald with fluid drape",
    description: "Genuine 100% silk chiffon in a breathtaking emerald green. This fabric has an incredibly soft hand and beautiful fluid drape that moves gracefully with every step. Ideal for elegant evening wear, modern traditional outfits, and luxurious flowing silhouettes.",
    price: 29500,
    category: "Silk, Chiffon & Voile",
    material: "100% Pure Silk Chiffon",
    width: "45 inches",
    lengthOptions: ["5 yards", "6 yards"],
    rating: 4.8,
    reviewCount: 95,
    inStock: 22,
    specifications: {
      "Material": "100% Mulberry Silk Chiffon",
      "Width": "45 inches",
      "Weight": "Very lightweight & airy",
      "Care": "Dry clean only. Steam to refresh.",
      "Origin": "Premium imported silk, finished in Nigeria",
      "Pattern Style": "Solid Luxe",
      "Best For": "Evening Wear, Modern Traditional, Flowing Designs"
    },
    images: [
      "https://picsum.photos/id/201/1200/1600",
      "https://picsum.photos/id/48/1200/1600",
      "https://picsum.photos/id/57/1200/1600",
      "https://picsum.photos/id/29/1200/1600"
    ],
    colorFamily: "Emerald / Green",
    patternStyle: "Modern"
  },
  {
    id: "p7",
    slug: "premium-solid-cotton-poplin-cream",
    name: "Premium Solid Cotton Poplin – Warm Cream",
    shortDescription: "Ultra-premium solid poplin in warm cream tone",
    description: "Our best-selling solid premium cotton poplin in a versatile warm cream. Woven from the finest long-staple cotton, this fabric offers exceptional softness, breathability, and a subtle natural sheen. The perfect foundation for any wardrobe or custom tailoring project.",
    price: 12800,
    category: "Plain & Solid Premium Cottons",
    material: "100% Premium Long-Staple Cotton Poplin",
    width: "60 inches",
    lengthOptions: ["5 yards", "6 yards", "10 yards"],
    rating: 4.7,
    reviewCount: 203,
    inStock: 85,
    specifications: {
      "Material": "100% Long-Staple Cotton Poplin",
      "Width": "60 inches (152 cm)",
      "Weight": "Light-medium ~120gsm",
      "Care": "Machine wash warm. Tumble dry low or line dry.",
      "Origin": "Sourced from premium textile partners",
      "Pattern Style": "Solid Classic",
      "Best For": "Shirts, Dresses, Tailoring, Everyday Luxury"
    },
    images: [
      "https://picsum.photos/id/133/1200/1600",
      "https://picsum.photos/id/30/1200/1600",
      "https://picsum.photos/id/251/1200/1600",
      "https://picsum.photos/id/40/1200/1600"
    ],
    colorFamily: "Cream / Neutral",
    patternStyle: "Modern"
  },
  {
    id: "p8",
    slug: "royal-blue-floral-ankara-wax-print",
    name: "Royal Blue Floral Ankara Wax Print",
    shortDescription: "Bold royal blue Ankara with intricate floral patterns",
    description: "A striking royal blue Ankara wax print featuring delicate yet bold floral motifs. This fabric stands out for its vibrant color saturation and crisp print quality. Excellent choice for both traditional ceremonies and contemporary African fashion statements.",
    price: 19200,
    category: "Ankara Prints",
    material: "100% Premium Cotton Wax Print",
    width: "45 inches",
    lengthOptions: ["5 yards", "6 yards"],
    rating: 4.8,
    reviewCount: 134,
    inStock: 38,
    specifications: {
      "Material": "100% Cotton Wax Print",
      "Print Type": "High-quality Wax Print",
      "Width": "45 inches",
      "Weight": "Medium ~175gsm",
      "Care": "Cold wash, reverse iron recommended",
      "Origin": "Kano textile markets",
      "Pattern Style": "Traditional Floral"
    },
    images: [
      "https://picsum.photos/id/160/1200/1600",
      "https://picsum.photos/id/1015/1200/1600",
      "https://picsum.photos/id/201/1200/1600",
      "https://picsum.photos/id/48/1200/1600"
    ],
    colorFamily: "Royal Blue",
    patternStyle: "Traditional"
  },
  {
    id: "p9",
    slug: "gold-thread-swiss-lace-white",
    name: "Gold Thread Swiss Lace – White",
    shortDescription: "Elegant white Swiss lace with shimmering gold threads",
    description: "Beautiful white Swiss voile lace delicately woven with metallic gold threads. The subtle shimmer adds a touch of glamour without being overwhelming. Highly popular for weddings, engagement ceremonies, and upscale traditional events.",
    price: 42500,
    category: "Premium Lace",
    material: "Swiss Voile with Metallic Gold Thread Embroidery",
    width: "55 inches",
    lengthOptions: ["5 yards", "6 yards"],
    rating: 4.9,
    reviewCount: 71,
    inStock: 19,
    specifications: {
      "Material": "Premium Swiss Voile + Gold Metallic Thread",
      "Width": "55 inches",
      "Weight": "Lightweight with elegant drape",
      "Care": "Hand wash cold. Avoid harsh detergents.",
      "Origin": "Switzerland (premium import to Kano)",
      "Pattern Style": "Modern Elegant with Metallic",
      "Best For": "Weddings, Asoebi, Special Occasions"
    },
    images: [
      "https://picsum.photos/id/106/1200/1600",
      "https://picsum.photos/id/30/1200/1600",
      "https://picsum.photos/id/133/1200/1600",
      "https://picsum.photos/id/201/1200/1600"
    ],
    colorFamily: "White / Gold",
    patternStyle: "Modern"
  },
  {
    id: "p10",
    slug: "deep-green-damask-shadda",
    name: "Deep Green Damask Shadda",
    shortDescription: "Luxurious deep green Damask Shadda with classic patterns",
    description: "Premium Damask Shadda in a sophisticated deep forest green. This heavyweight fabric features the classic Damask weave that has been a symbol of status and elegance across West Africa for generations. Excellent drape and durability.",
    price: 38000,
    category: "Brocade & Damask",
    material: "100% Premium Polyester Damask",
    width: "60 inches",
    lengthOptions: ["5 yards", "6 yards", "10 yards"],
    rating: 4.6,
    reviewCount: 88,
    inStock: 27,
    specifications: {
      "Material": "Premium Damask Shadda (Polyester)",
      "Width": "60 inches",
      "Weight": "Heavyweight with rich hand-feel",
      "Care": "Dry clean or gentle machine wash",
      "Origin": "West African textile tradition",
      "Pattern Style": "Traditional Damask",
      "Best For": "Agbada, Ceremonial Wear, Formal Traditional"
    },
    images: [
      "https://picsum.photos/id/48/1200/1600",
      "https://picsum.photos/id/57/1200/1600",
      "https://picsum.photos/id/160/1200/1600",
      "https://picsum.photos/id/29/1200/1600"
    ],
    colorFamily: "Forest Green",
    patternStyle: "Traditional"
  },
  {
    id: "p11",
    slug: "sunset-orange-handcrafted-adire",
    name: "Sunset Orange Handcrafted Adire",
    shortDescription: "Vibrant hand-dyed Adire in beautiful sunset orange tones",
    description: "Stunning handcrafted Adire fabric featuring rich sunset orange hues with traditional resist patterns. Each yard is unique, showcasing the artistry of Nigerian textile masters. Perfect for bold, joyful fashion statements and cultural celebrations.",
    price: 24000,
    category: "Adire & Tie-Dye",
    material: "100% Premium Cotton Adire",
    width: "45 inches",
    lengthOptions: ["5 yards", "6 yards"],
    rating: 4.8,
    reviewCount: 56,
    inStock: 31,
    specifications: {
      "Material": "100% Cotton with Natural Dyes",
      "Technique": "Hand Tie & Dye (Adire Oniko style)",
      "Width": "45 inches",
      "Weight": "Medium weight",
      "Care": "Cold wash separately first few times",
      "Origin": "Southwest Nigeria",
      "Pattern Style": "Traditional Artistic"
    },
    images: [
      "https://picsum.photos/id/40/1200/1600",
      "https://picsum.photos/id/251/1200/1600",
      "https://picsum.photos/id/133/1200/1600",
      "https://picsum.photos/id/1015/1200/1600"
    ],
    colorFamily: "Orange / Sunset",
    patternStyle: "Traditional"
  },
  {
    id: "p12",
    slug: "soft-blush-pink-premium-voile",
    name: "Soft Blush Pink Premium Voile",
    shortDescription: "Delicate premium voile in soft blush pink",
    description: "Ultra-soft premium cotton voile in the most flattering soft blush pink. Lightweight, breathable, and beautifully drapes. This versatile fabric is perfect for everyday elegant wear, children’s outfits, and soft feminine traditional looks.",
    price: 15200,
    category: "Silk, Chiffon & Voile",
    material: "100% Premium Cotton Voile",
    width: "60 inches",
    lengthOptions: ["5 yards", "6 yards", "10 yards"],
    rating: 4.7,
    reviewCount: 142,
    inStock: 67,
    specifications: {
      "Material": "100% Premium Cotton Voile",
      "Width": "60 inches",
      "Weight": "Very lightweight & breathable",
      "Care": "Machine wash gentle. Line dry preferred.",
      "Origin": "Premium Nigerian textile production",
      "Pattern Style": "Solid Soft",
      "Best For": "Everyday Elegance, Kids Wear, Soft Traditional"
    },
    images: [
      "https://picsum.photos/id/30/1200/1600",
      "https://picsum.photos/id/106/1200/1600",
      "https://picsum.photos/id/201/1200/1600",
      "https://picsum.photos/id/133/1200/1600"
    ],
    colorFamily: "Blush Pink",
    patternStyle: "Modern"
  }
];

export const categories = [
  "All Categories",
  "Ankara Prints",
  "Premium Lace",
  "Brocade & Damask",
  "Adire & Tie-Dye",
  "Silk, Chiffon & Voile",
  "Plain & Solid Premium Cottons"
];

export const patternStyles = ["Traditional", "Modern"];

export const colorFamilies = [
  "All Colors",
  "Gold & Burgundy",
  "Ivory / Cream",
  "Burgundy / Wine",
  "Indigo / Blue",
  "Champagne / Gold",
  "Emerald / Green",
  "Cream / Neutral",
  "Royal Blue",
  "White / Gold",
  "Forest Green",
  "Orange / Sunset",
  "Blush Pink"
];