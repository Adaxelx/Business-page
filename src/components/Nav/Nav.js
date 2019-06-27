import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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
  align-items: center;
  justify-content: space-around;
`

const StyledLink = styled(Link)`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  text-align: center;
  width: 100px;
`

const StyledLogo = styled(StyledLink)`
  font-size: 3rem;
  font-weight: 700;
`

const Nav = ({ index }) => (
  <StyledNav>
    <StyledLogo to="/">Haku</StyledLogo>
    {index ? (
      <StyledLink to="/projects/">Portfolio</StyledLink>
    ) : (
      <StyledLink to="/">Index</StyledLink>
    )}
  </StyledNav>
)

Nav.propTypes = {
  index: PropTypes.bool,
}

Nav.defaultProps = {
  index: true,
}

export default Nav
