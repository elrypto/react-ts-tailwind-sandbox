import { Destination, Property } from "../common/Interfaces";

export const AProperty: Property = {
  imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  imageAlt: 'Rear view of modern home with pool',
  beds: 3,
  baths: 2,
  title: "Modern executive home in the heart of historic Los Angeles",
  priceInCents: 190000,
  formattedPrice: "$1,900.00",
  reviewCount: 34,
  rating: 4,
}

export const Destinations: Array<Destination> = [{
  city: 'Toronto',
  averagePrice: 120,
  propertyCount: 76,
  imageUrl: 'toronto.jpg',
  imageAlt: 'Toronto skyline',
},
{
  city: 'Malibu',
  averagePrice: 215,
  propertyCount: 43,
  imageUrl: 'malibu.jpg',
  imageAlt: 'Cliff in Malibu',
},
{
  city: 'Chicago',
  averagePrice: 130,
  propertyCount: 115,
  imageUrl: 'chicago.jpg',
  imageAlt: 'Chicago skyline',
},
{
  city: 'Seattle',
  averagePrice: 135,
  propertyCount: 63,
  imageUrl: 'seattle.jpg',
  imageAlt: 'Seattle skyline',
},
{
  city: 'Colorado',
  averagePrice: 85,
  propertyCount: 47,
  imageUrl: 'colorado.jpg',
  imageAlt: 'Lake in Colorado',
},
{
  city: 'Miami',
  averagePrice: 115,
  propertyCount: 86,
  imageUrl: 'miami.jpg',
  imageAlt: 'Beach in Miami',
}]