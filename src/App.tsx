import React from 'react';
import { ShowDestinations } from './components/ui/ShowDestinations';
import { WorkcationCard } from './components/ui/WorkcationCard';




const App = () => {
  return (
    <div id="app">
      <WorkcationCard />

      <ShowDestinations />
    </div >
  )
}

export default App;

/* return (
<div id="app">
        <div className="bg-gray-100 flex">
          <WorkcationCard />
          <ShowDestinations />
        </div>
      </div>
      );*/