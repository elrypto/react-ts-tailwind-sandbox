import React from 'react'
import { PropertyCard } from './../components/ui/PropertyCard';
import { AProperty } from './../components/data/Data';

export const DesigningImageCards = () => {
  return (
    <div className="bg-gray-200 min-h-screen p-8 flex items-center justify-center
      antialiased text-gray-900"
    >
      <PropertyCard {...AProperty} />
    </div>
  )
}
