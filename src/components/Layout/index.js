import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Button from '../Button'

const Container = styled.div`
  padding: 1rem 1rem;
  max-width: 650px;
  margin: 0 auto;
`
const Header = styled.header`
  padding: 0 1rem;
  box-shadow: 0 0 10px -3px;
`
const Layout = ({ children }) => (
  <div>
    <Header>
      <Container>
        <Button><Link to="/">Home</Link></Button>
        <Button><Link to="/about">About</Link></Button>
        <Button><Link to="/my-files">My Files</Link></Button>
      </Container>
    </Header>
    <main>
      <Container>
        { children }
      </Container>
    </main>
  </div>
)
export default Layout
