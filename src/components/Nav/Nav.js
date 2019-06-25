import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledNav = styled.nav`
  height: 40px;
  width: 100%;
  background-color: orange;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Nav = () => (
  <StyledNav>
    <h1>Haku</h1>
    <Link to="/page-2/">page 2</Link>
  </StyledNav>
)

export default Nav
