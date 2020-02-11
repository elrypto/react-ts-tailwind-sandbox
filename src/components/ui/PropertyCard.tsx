import React from 'react'
import { AProperty } from './../data/Data';
import { Property } from '../common/Interfaces';
import { Stars } from '../common/Stars';

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
        <img src={imageUrl} alt={imageAlt} />
        <div className="p-6">
          <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide">
            {beds} beds &bull; {baths} baths
          </div>
          <h4 className="font-semibold text-lg leading-tight truncate">{title}</h4>
          <div className="mt-1">
            {formattedPrice}
            <span className="text-gray-600 text-sm">/ wk</span>
          </div>
          <Stars rating={rating} numberOfReviews={reviewCount} />
        </div>
      </div>
    )
  }
