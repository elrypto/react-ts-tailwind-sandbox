import React from 'react'
import { WorkcationCard } from '../components/ui/WorkcationCard'
import { ShowDestinations } from '../components/ui/ShowDestinations'

export const UpAndRunning = () => {
  return (
    <div id="app">
      <WorkcationCard />

      <ShowDestinations />
    </div >
  )
}
