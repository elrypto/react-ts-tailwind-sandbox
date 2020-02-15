import React, { useState } from 'react';
import InvertedLogo from './../img/logo-inverted.svg';
import { AccountDropDown } from '../components/common/AccountDropDown';

export const BuildNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }


  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:p-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <img className="h-8" src={InvertedLogo} alt="workcation logo" />
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => toggleOpen()}
            type="button"
            className="text-gray-500 rounded hover:text-white focus:text-white focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ?
                <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                :
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              }
            </svg>
          </button>
        </div>
      </div>
      {
        <nav className={isOpen ? 'block sm:block' : 'hidden sm:block'}>
          <div className="px-2 pt-2 pb-4 sm:flex sm:p-0">
            <a className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800" href="#">List your property</a>
            <a className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2" href="#">Trips</a>
            <a className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2" href="#">Messages</a>
            <AccountDropDown twClasses="hidden sm:block sm:ml-6" />
          </div>

          <div className="px-4 py-5 border-t border-gray-800 sm:hidden">
            <div className="flex items-center">
              <img className="h-8 w-8 border-2 border-gray-600 rounded-full object-cover" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" />
              <span className="ml-4 font-semibold text-white">Jane Doe</span>
            </div>

            <div className="mt-4">
              <a href="#" className="block text-gray-400 hover:text-white">Account settings</a>
              <a href="#" className="mt-2 block text-gray-400 hover:text-white">Support</a>
              <a href="#" className="mt-2 block text-gray-400 hover:text-white">Sign out</a>
            </div>
          </div>
        </nav>
      }
    </header >
  )
}
