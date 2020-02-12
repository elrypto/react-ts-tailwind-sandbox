import React from 'react';
import { Button } from '../common/Button';
import Logo from './../../img/logo-blue.svg';
import BeachWork from './../../img/beach-work.jpg';


export const WorkcationCard = () => {

  return (
    <>
      <div className="bg-gray-100 flex">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
          <div className="xl:max-w-lg xl:ml-auto">
            <img className="h-10" src={Logo} alt="Workcation" />
            <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-72 sm:w-full sm:object-cover sm:object-center lg:hidden"
              src={BeachWork}
              alt="Woman workcationing on the beach"
            />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can work from anywhere.
            <br className="hidden lg:inline" /><span className="text-brand-blue">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
          </p>
            <div className="mt-4 sm:mt-6">
              <Button type="primary"
                twClasses="btn bg-brand-blue shadow-lg sm:text-base"
                onClick={() => {
                  console.log('clicked');
                }}
              >
                Book your escape
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img className="absolute inset-0 h-full w-full object-cover object-center" src={BeachWork} alt="Woman workcationing on the beach" />
        </div>
      </div>
    </>
  )
}
