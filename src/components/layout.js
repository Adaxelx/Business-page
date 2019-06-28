import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/GlobalStyle'
import { theme } from '../theme/mainTheme'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'

const StyledCon = styled.main`
  position: relative;
  width: 100%;
  overflow: hidden;
`

const Layout = ({ children, index }) => (
  <ThemeProvider theme={theme}>
    <StyledCon>
      <GlobalStyle />
      <Nav index={index} />
      {children}
      <Footer />
    </StyledCon>
  </ThemeProvider>
)

Layout.propTypes = {
  index: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
}

Layout.defaultProps = {
  index: 0,
}

export default Layout
