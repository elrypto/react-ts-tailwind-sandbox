import React from 'react'
import Header from './Header'
import { Footer } from './Footer'

export const Layout = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
