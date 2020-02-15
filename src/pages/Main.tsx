import React from 'react'
import { Layout } from './layout/Layout'
import { MixedMain } from '../components/test/MixedMain'
import { ChainInfo } from '../components/test/ChainInfo'

export const Main = () => {
  return (
    <Layout>

      <ChainInfo />

      <MixedMain />

    </Layout>
  )
}
