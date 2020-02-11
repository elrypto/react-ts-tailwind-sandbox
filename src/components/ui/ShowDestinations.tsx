import React from 'react'
import { Destinations } from './../data/Data';
import { DestinationCard } from './DestinationCard';

export const ShowDestinations = () => {
  // console.log("destinations:", Destinations);

  return (
    <>
      {Destinations.map((d) => <DestinationCard {...d} />)}
    </>
  )
}
