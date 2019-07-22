import * as React from 'react'
import { NextPage } from 'next'
import PokemonList from '../components/PokemonList'
import Layout from '../components/Layout'

const PokemonPage: NextPage<{}, {}> = () => {
  return (
    <Layout>
      <PokemonList />
    </Layout>
  )
}

export default PokemonPage
