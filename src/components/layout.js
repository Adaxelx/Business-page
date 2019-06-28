import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/GlobalStyle'
import { theme } from '../theme/mainTheme'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'

const Layout = ({ children, index }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Nav index={index} />
      {children}
      <Footer />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  index: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

Layout.defaultProps = {
  index: 0,
}

export default Layout
