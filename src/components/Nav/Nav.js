import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLogo = styled.h1`
  position: absolute;
  left: 20px;
`

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
  align-items: center;
`

const StyledLink = styled(Link)`
  color: white;
  font-size: 1rem;
  text-decoration: none;
  &.active {
    transform: scale(0);
  }
  position: absolute;
  right: 20px;
`

const Nav = () => (
  <StyledNav>
    <StyledLogo>Haku</StyledLogo>
    <StyledLink activeClassName="active" to="/projects/">
      Nasze projekty
    </StyledLink>
    <StyledLink activeClassName="active" to="/">
      Home
    </StyledLink>
  </StyledNav>
)

export default Nav
