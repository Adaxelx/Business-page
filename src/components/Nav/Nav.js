import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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
  font-size: 1.5rem;
  text-decoration: none;
  position: absolute;
  right: 20px;
`

const StyledH1 = styled(StyledLink)`
  font-size: 3rem;
`

const Nav = ({ index }) => (
  <StyledNav>
    <StyledH1 to="/index/">Haku</StyledH1>
    {index ? (
      <StyledLink to="/projects/">Portfolio</StyledLink>
    ) : (
      <StyledLink to="/index/">Index</StyledLink>
    )}
  </StyledNav>
)

Nav.propTypes = {
  index: PropTypes.bool.isRequired,
}

export default Nav
