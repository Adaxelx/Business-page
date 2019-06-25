import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledNav = styled.nav`
  height: 40px;
  width: 100%;
  background-color: #e09100;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const StyledLink = styled(Link)`
  color: white;
  font-size: 1rem;
  text-decoration: none;
`

const Nav = () => (
  <StyledNav>
    <h1>Haku</h1>
    <StyledLink to="/page-2/">page 2</StyledLink>
  </StyledNav>
)

export default Nav
