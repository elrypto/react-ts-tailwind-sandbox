import React from 'react'
import { AProperty } from './../data/Data';
import { Property } from '../common/Interfaces';
import { Stars } from '../common/Stars';
import { Badge } from '../common/Badge';

export const PropertyCard =
  ({ baths,
    beds,
    formattedPrice,
    imageAlt,
    imageUrl,
    priceInCents,
    rating,
    reviewCount,
    title }: Property) => {


    return (
      <div className="bg-white border rounded-lg overflow-hidden">
        <div className="relative bg-red-500 pb-2/3">
          <img className="absolute h-full w-full h-48 w-full object-cover" src={imageUrl} alt={imageAlt} />
        </div>
        <div className="p-6">
          <div className="flex items-baseline">
            <Badge>New</Badge>
            <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
              {beds} beds &bull; {baths} baths
          </div>
          </div>
          <h4 className="mt-1 font-semibold text-lg leading-tight truncate">{title}</h4>
          <div className="mt-1">
            {formattedPrice}
            <span className="text-gray-600 text-sm">/ wk</span>
          </div>
          <Stars rating={rating} numberOfReviews={reviewCount} />
        </div>
      </div>
    )
  }
