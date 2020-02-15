import React from 'react'
import { Block } from '../ui/Block'
import { Transaction } from '../ui/Transaction'

export const MixedMain = () => {
  return (
    <main className="m-2 mt-4 p-2 bg-gray-400 flex rounded-lg">
      <div className="w-1/2 mr-1 bg-gray-200 rounded-lg ">
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
      <div className="w-1/2 ml-1 bg-gray-200 rounded-lg">
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
      </div>
    </main>
  )
}
