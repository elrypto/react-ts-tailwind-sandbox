import React from 'react'
import { Destinations } from './../data/Data';
import { DestinationCard } from './DestinationCard';

export const ShowDestinations = () => {
  // console.log("destinations:", Destinations);
  return (
    <>
      <div>
        <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
          <h2 className="text-xl text-gray-900">Popular destinations</h2>
          <p className="text-gray-600">A selection of great work-friendly
          cities with lots to see and explore.</p>
          <div className="flex flex-wrap -mx-4">

            {Destinations.map((d) => <DestinationCard {...d} />)}

          </div>
        </div>
      </div>
    </>
  )
}
