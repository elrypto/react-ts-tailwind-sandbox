import React, { useState } from 'react';
import InvertedLogo from './../img/logo-inverted.svg';

export const BuildNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900">
      <div className="flex items-center justify-between px-4 py-3 ">
        <div>
          <img className="h-8" src={InvertedLogo} alt="workcation logo" />
        </div>
        <div>
          <button
            onClick={() => { setIsOpen(!isOpen) }}
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
      {isOpen ?
        <div className="px-2 pt-2 pb-4">
          <a className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800" href="#">List your property</a>
          <a className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800" href="#">Trips</a>
          <a className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800" href="#">Messages</a>
        </div>
        :
        ''
      }

    </header>
  )
}
