import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import device from '../../templates/MediaWidth'

const StyledNav = styled.nav`
  height: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.orange};
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${device.tablet} and (orientation: portrait) {
    height: 60px;
  }
`

const StyledLink = styled(Link)`
  color: white;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-decoration: none;
  text-align: center;
  width: 100px;
`

const StyledLogo = styled(StyledLink)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
`

const Nav = ({ index }) => (
  <StyledNav>
    <StyledLogo to="/">Haku</StyledLogo>
    {index ? (
      <StyledLink to="/projects/">Portfolio</StyledLink>
    ) : (
      <StyledLink to="/">Home</StyledLink>
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
