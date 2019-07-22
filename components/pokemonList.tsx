import * as React from 'react'
import styled from '@emotion/styled'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const getPokemonQuery = gql`
  query GetPokemonQuery {
    pokemons(first: 20) {
      id
      name
      image
      classification
      types
    }
  }
`

const Layout = styled.div`
  padding: 2rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
`

const PokemonCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 19rem;
  margin: 2rem 0;
  border-radius: 2%;
  border-color: #239f95;
  border-style: solid;
  border-width:1px;
  margin-bottom: 0.0625rem;
  box-sizing: border-box;
  
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  border-bottom: 1px rgba(0,0,0,0.2) solid;
`;

const PokemonImage = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
`;

const PokemonInfo = styled.div`
  padding: 1rem;
`;

const PokemonName = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

class PokemonList extends React.Component<{}, {}> {
  render() {
    return (
      <Query<any> query={getPokemonQuery}>
        {({ loading, error, data: { pokemons } }) => {
          if (error) return <div>{JSON.stringify(error)}</div>
          if (loading) return <div>Loading...</div>

          return (
            <Layout>
              {pokemons.map((pokemon: any, index: any) => (
                <PokemonCard key={pokemon.id}>
                  <ImageContainer>
                    <PokemonImage
                      src={pokemon.image}
                      alt={pokemon.name} />
                  </ImageContainer>
                  <PokemonInfo>
                    <PokemonName>#{index + 1}. {pokemon.name}</PokemonName>
                    <div>{pokemon.classification}</div>
                    <div>{pokemon.types}</div>
                  </PokemonInfo>
                </PokemonCard>
              ))}
            </Layout>
          )
        }}
      </Query>
    )
  }
}

export default PokemonList
