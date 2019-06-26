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
  justify-content: space-around;
  align-items: center;
`

const StyledLink = styled(Link)`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
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
  index: PropTypes.bool,
}

Nav.defaultProps = {
  index: true,
}

export default Nav
