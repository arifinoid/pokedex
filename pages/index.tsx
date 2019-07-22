import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import Link from 'next/link'
import styled from '@emotion/styled'

const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  border-radius: 0 0 5px 5px;
  background: #cb4e4e;
  color: #fff;
  box-shadow: 0 6px #ab3c3c;
  transition: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  padding: 25px 40px;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  position: relative;

  &:hover {
    box-shadow: 0 4px #ab3c3c;
    top: 3px;
  }

  &:active {
    box-shadow: 0 0 #ab3c3c;
    top: 6px;
  }
`

const Logo = styled.img`
  height: 17rem;
  margin-bottom: 2rem;
`

const IndexPage: NextPage = () => {
  return (
    <Layout title="Pokedex">
      <Container>
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png"
          alt="poke logo"
        />
        <Logo
          src="https://vignette.wikia.nocookie.net/pokemonreloaded/images/4/4c/Pokeball.png/revision/latest?cb=20160823223254&path-prefix=es"
          alt="poke ball"
        />
        <Link href="/pokemon">
          <Button>Catch 'Em All</Button>
        </Link>
      </Container>
    </Layout>
  )
}
export default IndexPage
