
export interface Destination {
  city: string;
  averagePrice: number;
  propertyCount: number;
  imageUrl: string;
  imageAlt: string;
}

export interface Property {
  imageUrl: string;
  imageAlt: string;
  beds: number;
  baths: number;
  title: string;
  priceInCents: number;
  formattedPrice: string;
  reviewCount: number;
  rating: number;
}
