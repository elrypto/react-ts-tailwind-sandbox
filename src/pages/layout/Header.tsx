import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes, faFileInvoice, faBinoculars, faAdjust, faSearch, faIdCard, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import LoomLogo from './../../img/logo_loom_justsym.svg'


export default function Header() {
  return (
    <header className="flex">
      <div className="flex-shrink-0 px-4 py-3 bg-gray-800">
        <button className="flex items-center">
          <img className="h-6 w-6 fill-current text-gray-500" src={LoomLogo} />
          <span className="mr-2 font-medium text-white">blockexpo</span>
        </button>
      </div>

      <div className="flex-1 flex items-center justify-between bg-gray-700 px-6">
        <nav className="flex">
          <a href="#" className="inline-block px-3 py-2 hover:bg-gray-600 rounded-lg leading-none text-sm font-medium text-white"><span> <FontAwesomeIcon icon={faCubes} className="text-gray-500 mr-1" /></span>Blocks</a>
          <a href="#" className="ml-2 inline-block px-3 py-2 hover:bg-gray-600 rounded-lg leading-none text-sm font-medium text-white"><span><FontAwesomeIcon icon={faFileInvoice} className="text-gray-500 mr-1" /></span>Transactions</a>
          <a href="#" className="ml-2 inline-block px-3 py-2 hover:bg-gray-600 rounded-lg leading-none text-sm font-medium text-white"><span><FontAwesomeIcon icon={faIdCard} className="text-gray-500 mr-1" /></span>Accounts</a>
          <a href="#" className="ml-2 inline-block px-3 py-2 hover:bg-gray-600 rounded-lg leading-none text-sm font-medium text-white"><span><FontAwesomeIcon icon={faDotCircle} className="text-gray-500 mr-1" /></span>Tokens</a>
        </nav>

        <div className="flex items-center">
          <div className="relative w-64">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </span>
            <input className="block pl-10 pr-4 py-2 w-full bg-gray-900 rounded-lg text-sm placeholder-gray-400 text-white focus:bg-white focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none"
              placeholder="Search Blocks, Trxns, Accts"
            />

          </div>
          <button><FontAwesomeIcon icon={faBinoculars} className="ml-5 text-gray-400 hover:text-gray-200" /></button>
          <button><FontAwesomeIcon icon={faAdjust} className="ml-4 text-gray-400 hover:text-gray-200" /></button>
        </div>
      </div>
    </header>
  )
}
